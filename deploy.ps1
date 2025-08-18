# WasteWise SaaS Platform Deployment Script for Windows
# This script deploys the WasteWise application to Google Cloud Run

param(
    [string]$ProjectId = "your-gcp-project-id",
    [string]$Region = "us-central1",
    [string]$ServiceName = "wastewise-app"
)

# Configuration
$ImageName = "gcr.io/$ProjectId/$ServiceName"

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if required tools are installed
function Test-Prerequisites {
    Write-Status "Checking prerequisites..."
    
    # Check if gcloud is installed
    try {
        $null = Get-Command gcloud -ErrorAction Stop
    }
    catch {
        Write-Error "gcloud CLI is not installed. Please install it first."
        Write-Host "Download from: https://cloud.google.com/sdk/docs/install"
        exit 1
    }
    
    # Check if Docker is installed
    try {
        $null = Get-Command docker -ErrorAction Stop
    }
    catch {
        Write-Error "Docker is not installed. Please install it first."
        Write-Host "Download from: https://docs.docker.com/get-docker/"
        exit 1
    }
    
    Write-Success "Prerequisites check passed"
}

# Authenticate with Google Cloud
function Connect-GoogleCloud {
    Write-Status "Authenticating with Google Cloud..."
    
    # Check if already authenticated
    $authStatus = gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>$null
    if (-not $authStatus) {
        gcloud auth login
    }
    
    # Set the project
    gcloud config set project $ProjectId
    
    # Configure Docker to use gcloud as a credential helper
    gcloud auth configure-docker
    
    Write-Success "Authentication completed"
}

# Enable required APIs
function Enable-GoogleCloudAPIs {
    Write-Status "Enabling required Google Cloud APIs..."
    
    gcloud services enable cloudbuild.googleapis.com
    gcloud services enable run.googleapis.com
    gcloud services enable containerregistry.googleapis.com
    
    Write-Success "APIs enabled"
}

# Build and deploy using Cloud Build
function Deploy-WithCloudBuild {
    Write-Status "Starting Cloud Build deployment..."
    
    # Get the current commit SHA
    $commitSha = git rev-parse --short HEAD
    
    # Submit build to Cloud Build
    gcloud builds submit `
        --tag "$ImageName`:$commitSha" `
        --tag "$ImageName`:latest" `
        --project $ProjectId
    
    Write-Success "Docker image built and pushed to Container Registry"
    
    # Deploy to Cloud Run
    Write-Status "Deploying to Cloud Run..."
    
    gcloud run deploy $ServiceName `
        --image "$ImageName`:$commitSha" `
        --region $Region `
        --platform managed `
        --allow-unauthenticated `
        --port 80 `
        --memory 512Mi `
        --cpu 1 `
        --max-instances 10 `
        --min-instances 0 `
        --set-env-vars "NODE_ENV=production" `
        --set-env-vars "VITE_APP_NAME=WasteWise" `
        --set-env-vars "VITE_APP_ENVIRONMENT=production" `
        --set-env-vars "VITE_API_URL=https://api.wastewise.com" `
        --set-env-vars "VITE_ANALYTICS_ID=G-RMQN4C5EVG" `
        --set-env-vars "VITE_FACEBOOK_PIXEL_ID=383314790605759" `
        --project $ProjectId
    
    Write-Success "Deployment to Cloud Run completed"
}

# Get the service URL
function Get-ServiceUrl {
    Write-Status "Getting service URL..."
    
    $serviceUrl = gcloud run services describe $ServiceName `
        --region $Region `
        --format="value(status.url)" `
        --project $ProjectId
    
    Write-Success "Service URL: $serviceUrl"
    return $serviceUrl
}

# Health check
function Test-HealthCheck {
    param([string]$ServiceUrl)
    
    Write-Status "Performing health check..."
    
    # Wait a moment for the service to be ready
    Start-Sleep -Seconds 10
    
    # Check if the service is responding
    try {
        $response = Invoke-WebRequest -Uri "$ServiceUrl/health" -UseBasicParsing -TimeoutSec 30
        if ($response.StatusCode -eq 200) {
            Write-Success "Health check passed"
        }
        else {
            Write-Warning "Health check failed with status code: $($response.StatusCode)"
        }
    }
    catch {
        Write-Warning "Health check failed, but deployment might still be successful"
        Write-Host "Error: $($_.Exception.Message)"
    }
}

# Main deployment function
function Start-Deployment {
    Write-Host "🚀 WasteWise SaaS Platform Deployment" -ForegroundColor Cyan
    Write-Host "=====================================" -ForegroundColor Cyan
    
    # Check if PROJECT_ID is set
    if ($ProjectId -eq "your-gcp-project-id") {
        Write-Error "Please provide your GCP project ID as a parameter"
        Write-Host "Usage: .\deploy.ps1 -ProjectId 'your-actual-project-id'"
        exit 1
    }
    
    Test-Prerequisites
    Connect-GoogleCloud
    Enable-GoogleCloudAPIs
    Deploy-WithCloudBuild
    $serviceUrl = Get-ServiceUrl
    Test-HealthCheck -ServiceUrl $serviceUrl
    
    Write-Host ""
    Write-Success "🎉 Deployment completed successfully!"
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Update your DNS to point to the Cloud Run service URL"
    Write-Host "2. Set up a custom domain in Cloud Run (optional)"
    Write-Host "3. Configure monitoring and alerting"
    Write-Host "4. Set up CI/CD pipeline with Cloud Build triggers"
}

# Run main function
Start-Deployment
