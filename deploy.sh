#!/bin/bash

# WasteWise SaaS Platform Deployment Script
# This script deploys the WasteWise application to Google Cloud Run

set -e

# Configuration
PROJECT_ID="your-gcp-project-id"
REGION="us-central1"
SERVICE_NAME="wastewise-app"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command -v gcloud &> /dev/null; then
        print_error "gcloud CLI is not installed. Please install it first."
        exit 1
    fi
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install it first."
        exit 1
    fi
    
    print_success "Prerequisites check passed"
}

# Authenticate with Google Cloud
authenticate() {
    print_status "Authenticating with Google Cloud..."
    
    # Check if already authenticated
    if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
        gcloud auth login
    fi
    
    # Set the project
    gcloud config set project $PROJECT_ID
    
    # Configure Docker to use gcloud as a credential helper
    gcloud auth configure-docker
    
    print_success "Authentication completed"
}

# Enable required APIs
enable_apis() {
    print_status "Enabling required Google Cloud APIs..."
    
    gcloud services enable cloudbuild.googleapis.com
    gcloud services enable run.googleapis.com
    gcloud services enable containerregistry.googleapis.com
    
    print_success "APIs enabled"
}

# Build and deploy using Cloud Build
deploy_with_cloud_build() {
    print_status "Starting Cloud Build deployment..."
    
    # Get the current commit SHA
    COMMIT_SHA=$(git rev-parse --short HEAD)
    
    # Submit build to Cloud Build
    gcloud builds submit \
        --tag $IMAGE_NAME:$COMMIT_SHA \
        --tag $IMAGE_NAME:latest \
        --project $PROJECT_ID
    
    print_success "Docker image built and pushed to Container Registry"
    
    # Deploy to Cloud Run
    print_status "Deploying to Cloud Run..."
    
    gcloud run deploy $SERVICE_NAME \
        --image $IMAGE_NAME:$COMMIT_SHA \
        --region $REGION \
        --platform managed \
        --allow-unauthenticated \
        --port 80 \
        --memory 512Mi \
        --cpu 1 \
        --max-instances 10 \
        --min-instances 0 \
        --set-env-vars NODE_ENV=production \
        --set-env-vars VITE_APP_NAME=WasteWise \
        --set-env-vars VITE_APP_ENVIRONMENT=production \
        --set-env-vars VITE_API_URL=https://api.wastewise.com \
        --set-env-vars VITE_ANALYTICS_ID=G-RMQN4C5EVG \
        --set-env-vars VITE_FACEBOOK_PIXEL_ID=383314790605759 \
        --project $PROJECT_ID
    
    print_success "Deployment to Cloud Run completed"
}

# Get the service URL
get_service_url() {
    print_status "Getting service URL..."
    
    SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
        --region $REGION \
        --format="value(status.url)" \
        --project $PROJECT_ID)
    
    print_success "Service URL: $SERVICE_URL"
}

# Health check
health_check() {
    print_status "Performing health check..."
    
    SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
        --region $REGION \
        --format="value(status.url)" \
        --project $PROJECT_ID)
    
    # Wait a moment for the service to be ready
    sleep 10
    
    # Check if the service is responding
    if curl -f -s "$SERVICE_URL/health" > /dev/null; then
        print_success "Health check passed"
    else
        print_warning "Health check failed, but deployment might still be successful"
    fi
}

# Main deployment function
main() {
    echo "🚀 WasteWise SaaS Platform Deployment"
    echo "====================================="
    
    # Check if PROJECT_ID is set
    if [ "$PROJECT_ID" = "your-gcp-project-id" ]; then
        print_error "Please update PROJECT_ID in this script with your actual GCP project ID"
        exit 1
    fi
    
    check_prerequisites
    authenticate
    enable_apis
    deploy_with_cloud_build
    get_service_url
    health_check
    
    echo ""
    print_success "🎉 Deployment completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Update your DNS to point to the Cloud Run service URL"
    echo "2. Set up a custom domain in Cloud Run (optional)"
    echo "3. Configure monitoring and alerting"
    echo "4. Set up CI/CD pipeline with Cloud Build triggers"
}

# Run main function
main "$@"
