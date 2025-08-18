# 🔧 Deployment Troubleshooting Guide

## 🚨 Current Issues Identified

### 1. **Cloud Build Trigger Not Created**
- **Status**: ❌ No triggers exist
- **Issue**: Command-line trigger creation failing
- **Solution**: Manual setup via console required

### 2. **GitHub Actions Secret Missing**
- **Status**: ❌ GCP_SA_KEY secret not configured
- **Issue**: Workflow cannot authenticate with Google Cloud
- **Solution**: Create service account and add secret

### 3. **Service Account Permissions**
- **Status**: ⚠️ May need additional roles
- **Issue**: Insufficient permissions for automated deployment
- **Solution**: Add required IAM roles

## 🔧 Step-by-Step Fixes

### **Option 1: GitHub Actions (Recommended)**

#### Step 1: Create Service Account
1. Go to [Google Cloud Console - Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Click "CREATE SERVICE ACCOUNT"
3. Name: `servora-ai-deploy`
4. Description: `Service account for Servora AI automated deployment`
5. Click "CREATE AND CONTINUE"

#### Step 2: Assign Roles
Add these roles:
- **Cloud Build Editor**
- **Cloud Run Admin**
- **Storage Admin**
- **Service Account User**
- **Cloud Build Service Account**

#### Step 3: Create and Download Key
1. Click "DONE"
2. Click on the created service account
3. Go to "KEYS" tab
4. Click "ADD KEY" → "Create new key"
5. Choose "JSON"
6. Download the key file

#### Step 4: Add GitHub Secret
1. Go to [GitHub Repository Settings](https://github.com/BasyirSheersComputer/SheersDigital-site/settings/secrets/actions)
2. Click "New repository secret"
3. Name: `GCP_SA_KEY`
4. Value: Paste the entire JSON key content
5. Click "Add secret"

#### Step 5: Test Deployment
```bash
git add .
git commit -m "Test deployment with credentials"
git push origin main
```

### **Option 2: Cloud Build Triggers (Manual Setup)**

#### Step 1: Connect GitHub Repository
1. Go to [Cloud Build Triggers](https://console.cloud.google.com/cloud-build/triggers)
2. Click "CONNECT REPOSITORY"
3. Select "GitHub (Cloud Build GitHub App)"
4. Authorize access to your repository
5. Select "BasyirSheersComputer/SheersDigital-site"

#### Step 2: Create Trigger
1. Click "CREATE TRIGGER"
2. **Basic Settings:**
   - Name: `servora-ai-deploy`
   - Description: `Auto-deploy Servora AI on push to main branch`
   - Region: `global`
3. **Event:**
   - Event: `Push to a branch`
   - Repository: `BasyirSheersComputer/SheersDigital-site`
   - Branch: `main`
4. **Configuration:**
   - Configuration: `Cloud Build configuration file (yaml or json)`
   - Cloud Build configuration file location: `cloudbuild.yaml`
5. Click "CREATE"

## 🧪 Testing the Fix

### Test GitHub Actions:
1. Check GitHub Actions tab: https://github.com/BasyirSheersComputer/SheersDigital-site/actions
2. Look for the latest workflow run
3. Check if it shows "GCP credentials found" or setup instructions

### Test Cloud Build Trigger:
1. Make a small change to any file
2. Commit and push to main branch
3. Check Cloud Build logs: https://console.cloud.google.com/cloud-build/builds

## 📊 Monitoring Links

### GitHub Actions:
- https://github.com/BasyirSheersComputer/SheersDigital-site/actions

### Cloud Build:
- https://console.cloud.google.com/cloud-build/builds

### Cloud Run:
- https://console.cloud.google.com/run/detail/asia-southeast1/servora-ai/logs

## 🚨 Common Error Messages

### "GCP credentials not found"
- **Cause**: Missing GCP_SA_KEY secret
- **Fix**: Follow Step 4 above

### "Permission denied"
- **Cause**: Insufficient service account roles
- **Fix**: Add required IAM roles (Step 2)

### "Repository not found"
- **Cause**: GitHub repository not connected
- **Fix**: Follow Cloud Build trigger setup (Option 2)

### "Build failed"
- **Cause**: Issues in cloudbuild.yaml or Dockerfile
- **Fix**: Check build logs for specific errors

## 🎯 Expected Results

### Successful GitHub Actions:
```
✓ Checkout code
✓ Check for GCP credentials
✓ Set up Cloud SDK
✓ Configure Docker for GCR
✓ Build and Push Docker Image
✓ Deploy to Cloud Run
✓ Get deployment URL
```

### Successful Cloud Build Trigger:
```
✓ Build completed successfully
✓ Image pushed to GCR
✓ Service deployed to Cloud Run
```

## 📞 Getting Help

If issues persist:
1. Check the specific error messages in logs
2. Verify all steps in this guide were followed
3. Ensure service account has all required permissions
4. Check that GitHub repository is properly connected

---

**Current Status**: ⚠️ Manual setup required
**Last Updated**: August 18, 2025
