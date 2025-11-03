# PowerShell deployment script with Supabase credentials
# Ensures environment variables are embedded in production build

Write-Host "=== WasteWise Production Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Supabase credentials
$SUPABASE_URL = "https://nbupfkhtkoggqnyvpdfl.supabase.co"
$SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idXBma2h0a29nZ3FueXZwZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxODA4NDksImV4cCI6MjA1OTc1Njg0OX0.4k29V3KVHIt-JAu8RNxL6udtpHqvq3j3ek6FySC_HoI"

Write-Host "Step 1: Building Docker image with environment variables..." -ForegroundColor Yellow

docker build `
  --build-arg VITE_SUPABASE_URL="$SUPABASE_URL" `
  --build-arg VITE_SUPABASE_ANON_KEY="$SUPABASE_KEY" `
  --build-arg VITE_APP_NAME="WasteWise" `
  --build-arg VITE_DOMAIN="sheerssoft.com" `
  -t gcr.io/wastewise-402ba/sheersdigital-site:latest `
  .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build successful!" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Step 2: Pushing to Container Registry..." -ForegroundColor Yellow
    docker push gcr.io/wastewise-402ba/sheersdigital-site:latest
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Push successful!" -ForegroundColor Green
        Write-Host ""
        
        Write-Host "Step 3: Deploying to Cloud Run..." -ForegroundColor Yellow
        gcloud run deploy sheersdigital-site `
          --image gcr.io/wastewise-402ba/sheersdigital-site:latest `
          --region=asia-southeast1 `
          --allow-unauthenticated `
          --port=80 `
          --memory=512Mi `
          --cpu=1 `
          --max-instances=10
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "=== DEPLOYMENT COMPLETE ===" -ForegroundColor Green
            Write-Host "Site is live at: https://sheerssoft.com" -ForegroundColor Cyan
        } else {
            Write-Host "✗ Deployment failed!" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ Push failed!" -ForegroundColor Red
    }
} else {
    Write-Host "✗ Build failed!" -ForegroundColor Red
}

