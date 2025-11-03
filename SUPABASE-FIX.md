# Supabase Environment Variables Fix

## 🔍 Issue

**Error in Production:**
```
Missing Supabase environment variables. Please check your .env file.
Uncaught Error: supabaseKey is required.
```

**Root Cause:**
- Vite environment variables (VITE_*) are replaced at **BUILD time**, not runtime
- Cloud Run deployment wasn't passing Supabase credentials to the Docker build
- The built JavaScript files had empty/undefined Supabase values

---

## ✅ Solution Applied

### 1. Updated Dockerfile
Added build arguments to accept Supabase credentials:
```dockerfile
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY
```

### 2. Updated cloudbuild.yaml
Pass credentials as Docker build args:
```yaml
--build-arg VITE_SUPABASE_URL=https://nbupfkhtkoggqnyvpdfl.supabase.co
--build-arg VITE_SUPABASE_ANON_KEY=eyJhbG...
```

### 3. Created Deployment Scripts

**PowerShell** (`deploy-manual.ps1`):
```powershell
.\deploy-manual.ps1
```

**Bash** (`build-with-secrets.sh`):
```bash
bash build-with-secrets.sh
```

These scripts:
- Build Docker image with Supabase credentials
- Push to Container Registry
- Deploy to Cloud Run
- Verify deployment

---

## 🚀 Deployment Status

**Current Revision:** sheersdigital-site-00006-gqb (deploying with fix)

**Fix Applied:**
- ✅ Dockerfile updated to accept build args
- ✅ cloudbuild.yaml configured with Supabase credentials
- ✅ Deployment scripts created for manual deploy
- 🔄 New deployment in progress

---

## 🔐 Security Note

**Supabase Anon Key:**
- ✅ Safe to include in client-side code
- ✅ Designed to be public (it's the "anonymous" key)
- ✅ Row Level Security (RLS) on Supabase protects data
- ✅ Cannot be used to access sensitive data

**Service Role Key (if you have one):**
- ❌ NEVER include in client code
- ❌ NEVER in Docker build args
- ✅ Only use server-side with proper secret management

---

## ✅ Verification Steps

### After Deployment Completes:

**1. Check Browser Console**
Visit: https://sheerssoft.com

Press F12 → Console tab

**Should NOT see:**
- ❌ "Missing Supabase environment variables"
- ❌ "supabaseKey is required"

**Should see:**
- ✅ Page loads normally
- ✅ Forms work
- ✅ No Supabase errors

**2. Test Form Submission**
- Click any "Get Your Free..." button
- Fill form (Name, Email, Company)
- Submit
- Should show success message (not error)

**3. Check Network Tab**
- F12 → Network tab
- Submit a form
- Should see successful API call to Supabase

---

## 🐛 If Error Persists

### Check Build Logs:
```bash
gcloud logging read "resource.type=build" --limit=50 --format=json
```

Look for:
- ✅ "VITE_SUPABASE_URL" appears in build output
- ✅ Build completed successfully
- ❌ Any ARG-related errors

### Manual Deploy (Guaranteed Fix):
```powershell
# Run the deployment script
.\deploy-manual.ps1
```

This builds locally with proper credentials and deploys directly.

---

## 📊 Technical Details

### How Vite Handles Environment Variables:

**Build Time (What We Fixed):**
```javascript
// During build, Vite replaces:
import.meta.env.VITE_SUPABASE_URL
// With actual value:
"https://nbupfkhtkoggqnyvpdfl.supabase.co"
```

**What Was Happening Before:**
```javascript
// Without build args:
import.meta.env.VITE_SUPABASE_URL = undefined
// Result: "Missing Supabase environment variables"
```

**What Happens Now:**
```javascript
// With build args in Dockerfile:
VITE_SUPABASE_URL gets value during build
// Result: Working Supabase client!
```

---

## 🎯 Expected Timeline

- **Build:** ~5-10 minutes (Docker + npm build)
- **Deploy:** ~2-3 minutes
- **Total:** ~10-15 minutes
- **Result:** Supabase error gone, forms working

---

## ✅ Success Criteria

Site is working when:
- ✅ No console errors about Supabase
- ✅ Forms submit successfully
- ✅ Success message appears after form submission
- ✅ Data saves to Supabase database
- ✅ Emails sent to a.basyir@sheerssoft.com

---

**Status:** 🔄 Deployment in progress (revision 00006)
**ETA:** 10-15 minutes
**Next:** Test forms at https://sheerssoft.com

