# 🚀 Servora AI - Automatic Deployment Setup

## ✅ What's Been Configured

### 1. **Cloud Build Configuration** (`cloudbuild.yaml`)
- ✅ Updated for Servora AI branding
- ✅ Configured for asia-southeast1 region
- ✅ All environment variables set correctly
- ✅ Optimized build process

### 2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- ✅ Automatic deployment on push to main branch
- ✅ Builds and pushes Docker image to GCR
- ✅ Deploys to Cloud Run with all settings
- ✅ Includes pull request testing

### 3. **Manual Trigger Setup Guide** (`setup-trigger.md`)
- ✅ Step-by-step instructions for Cloud Build console
- ✅ Alternative deployment methods
- ✅ Troubleshooting guide

## 🔧 Setup Options

### Option 1: GitHub Actions (Recommended)
**Status**: ✅ Ready to use

**Requirements**:
1. Create a Google Cloud Service Account
2. Add the service account key as a GitHub secret

**Steps**:
1. Go to Google Cloud Console → IAM & Admin → Service Accounts
2. Create a new service account with these roles:
   - Cloud Build Editor
   - Cloud Run Admin
   - Storage Admin
   - Service Account User
3. Create and download a JSON key
4. Go to your GitHub repository → Settings → Secrets and variables → Actions
5. Add a new secret named `GCP_SA_KEY` with the JSON key content

### Option 2: Cloud Build Triggers
**Status**: ⚠️ Manual setup required

**Steps**:
1. Visit: https://console.cloud.google.com/cloud-build/triggers
2. Click "CREATE TRIGGER"
3. Configure as per `setup-trigger.md`

## 🎯 Current Deployment Status

- **Service Name**: `servora-ai`
- **Region**: `asia-southeast1` (Singapore)
- **URL**: https://servora-ai-v75utnk2qq-as.a.run.app
- **Repository**: https://github.com/BasyirSheersComputer/SheersDigital-site

## 🔄 How It Works

### GitHub Actions Flow:
1. **Push to main branch** → Triggers workflow
2. **Checkout code** → Gets latest changes
3. **Setup Cloud SDK** → Authenticates with GCP
4. **Build Docker image** → Creates container
5. **Push to GCR** → Stores image in registry
6. **Deploy to Cloud Run** → Updates live service

### Manual Deployment:
```bash
# Build and deploy manually
gcloud builds submit --tag gcr.io/sheers-software/servora-ai:latest
gcloud run deploy servora-ai --image gcr.io/sheers-software/servora-ai:latest --region asia-southeast1 --platform managed --allow-unauthenticated
```

## 🧪 Testing the Setup

### Test GitHub Actions:
1. Make a small change to any file
2. Commit and push to main branch
3. Check GitHub Actions tab for deployment status
4. Verify the live site updates

### Test Manual Deployment:
```bash
# Make a change, then:
git add .
git commit -m "Test deployment"
git push origin main
```

## 📊 Monitoring

### Cloud Build Logs:
- https://console.cloud.google.com/cloud-build/builds

### Cloud Run Logs:
- https://console.cloud.google.com/run/detail/asia-southeast1/servora-ai/logs

### GitHub Actions:
- https://github.com/BasyirSheersComputer/SheersDigital-site/actions

## 🔧 Environment Variables

The deployment includes these environment variables:
- `NODE_ENV=production`
- `VITE_APP_NAME=Servora AI`
- `VITE_APP_ENVIRONMENT=production`
- `VITE_API_URL=https://api.servora-ai.com`
- `VITE_ANALYTICS_ID=G-RMQN4C5EVG`
- `VITE_FACEBOOK_PIXEL_ID=383314790605759`

## 🚨 Troubleshooting

### Common Issues:

1. **Authentication Errors**:
   - Verify service account has correct permissions
   - Check GitHub secret is properly set

2. **Build Failures**:
   - Check Cloud Build logs
   - Verify Dockerfile syntax
   - Ensure all dependencies are in package.json

3. **Deployment Failures**:
   - Check Cloud Run logs
   - Verify service account permissions
   - Ensure region is correct

### Getting Help:
- Cloud Build logs: https://console.cloud.google.com/cloud-build/builds
- Cloud Run logs: https://console.cloud.google.com/run/detail/asia-southeast1/servora-ai/logs
- GitHub Actions: https://github.com/BasyirSheersComputer/SheersDigital-site/actions

## 🎉 Next Steps

1. **Set up GitHub Actions** (if not done):
   - Create service account and add secret
   - Test with a small change

2. **Monitor first deployment**:
   - Check all logs are working
   - Verify site is accessible

3. **Set up monitoring**:
   - Enable Cloud Monitoring
   - Set up alerts for failures

4. **Optimize**:
   - Review build times
   - Optimize Docker image size
   - Consider caching strategies

---

**Current Status**: ✅ Ready for automatic deployment
**Last Updated**: August 18, 2025
**Version**: Servora AI v1.0
