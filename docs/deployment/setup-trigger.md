# Cloud Build Trigger Setup Guide

## Manual Setup Instructions

Since the command-line approach is having issues, here's how to set up the trigger manually:

### 1. Go to Cloud Build Console
- Visit: https://console.cloud.google.com/cloud-build/triggers
- Make sure you're in the `sheers-software` project

### 2. Create New Trigger
- Click "CREATE TRIGGER"
- Fill in the following details:

**Basic Settings:**
- Name: `servora-ai-deploy`
- Description: `Auto-deploy Servora AI on push to main branch`
- Region: `global`

**Event:**
- Event: `Push to a branch`
- Repository: `GitHub (Cloud Build GitHub App)`
- Repository: `BasyirSheersComputer/SheersDigital-site`
- Branch: `main`

**Configuration:**
- Configuration: `Cloud Build configuration file (yaml or json)`
- Cloud Build configuration file location: `cloudbuild.yaml`

### 3. Advanced Settings (Optional)
- Service account: `Default compute service account`
- Include logs with build: `Enabled`

### 4. Create the Trigger
- Click "CREATE"

## Alternative: GitHub Actions

If Cloud Build triggers continue to have issues, you can also set up GitHub Actions:

### Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Cloud SDK
      uses: google-github-actions/setup-gcloud@v1
      with:
        project_id: sheers-software
        service_account_key: ${{ secrets.GCP_SA_KEY }}
    
    - name: Build and Deploy
      run: |
        gcloud builds submit --tag gcr.io/sheers-software/servora-ai:latest
        gcloud run deploy servora-ai \
          --image gcr.io/sheers-software/servora-ai:latest \
          --region asia-southeast1 \
          --platform managed \
          --allow-unauthenticated \
          --port 80 \
          --memory 512Mi \
          --cpu 1 \
          --max-instances 10 \
          --min-instances 0 \
          --set-env-vars "NODE_ENV=production,VITE_APP_NAME=Servora AI,VITE_APP_ENVIRONMENT=production,VITE_API_URL=https://api.servora-ai.com,VITE_ANALYTICS_ID=G-RMQN4C5EVG,VITE_FACEBOOK_PIXEL_ID=383314790605759"
```

## Current Status

✅ **cloudbuild.yaml** - Updated for Servora AI
✅ **Dockerfile** - Ready for deployment
✅ **Service Configuration** - Set to asia-southeast1 region

## Next Steps

1. Set up the trigger manually using the console
2. Test by pushing a small change to the main branch
3. Verify the automatic deployment works

## Troubleshooting

If you encounter issues:
1. Check that the GitHub repository is properly connected
2. Verify the cloudbuild.yaml file is in the root directory
3. Ensure the service account has proper permissions
4. Check the Cloud Build logs for any errors
