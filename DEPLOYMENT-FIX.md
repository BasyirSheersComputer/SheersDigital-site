# Deployment Issue Fix - sheerssoft.com

## 🔍 Issue Identified

**Problem:** Nothing displaying at sheerssoft.com
**Root Cause:** Domain mapping configuration issue

---

## ✅ What's Working

- ✅ **Code:** Latest build successful (v2.0.0)
- ✅ **Cloud Run Service:** `sheersdigital-site` is running and healthy
- ✅ **Direct URL:** https://sheersdigital-site-afznrjo3ba-as.a.run.app works (200 OK)
- ✅ **Build Output:** All assets in `dist/` folder

---

## ⚠️ What's Not Working

- ❌ **Domain Mapping:** sheerssoft.com not properly mapped to Cloud Run service
- ⚠️ **Current Mapping:** servora-ai.sheerssoft.com → wastewise-30 (different service)

---

## 🔧 Solutions Applied

### 1. Updated Domain Mappings

**www.sheerssoft.com:**
```bash
✅ Mapped to sheersdigital-site service
✅ DNS Record Needed: CNAME → ghs.googlehosted.com
```

**sheerssoft.com:**
```bash
🔄 Currently updating via deployment
```

### 2. Redeploying Service

Running deployment command:
```bash
gcloud run deploy sheersdigital-site \
  --source . \
  --region=asia-southeast1 \
  --allow-unauthenticated \
  --port=80
```

This will:
- ✅ Build the latest code (v2.0.0)
- ✅ Create new Docker image
- ✅ Deploy to Cloud Run
- ✅ Update service with new revision

---

## 📋 DNS Configuration Required

For sheerssoft.com to work, your DNS must have these records:

### Root Domain (sheerssoft.com)
```
Type: A
Name: @
Value: [Cloud Run IP - will be provided after deployment]
```

OR use domain mapping:
```
gcloud beta run domain-mappings create \
  --service=sheersdigital-site \
  --domain=sheerssoft.com \
  --region=asia-southeast1
```

Then add DNS record:
```
Type: A
Name: @
Value: 216.239.32.21 (Google Cloud Run)
        216.239.34.21
        216.239.36.21
        216.239.38.21
```

### WWW Subdomain (www.sheerssoft.com)
```
Type: CNAME
Name: www
Value: ghs.googlehosted.com.
```

---

## 🚀 Quick Fix Steps

### Option 1: Use Cloud Run Direct URL (Fastest)
While fixing domain, you can access the site at:
**https://sheersdigital-site-afznrjo3ba-as.a.run.app**

### Option 2: Fix Domain Mapping (Complete Solution)

**Step 1: Wait for current deployment to finish**
```bash
gcloud run services describe sheersdigital-site --region=asia-southeast1
```

**Step 2: Map domain (if needed)**
```bash
# For root domain
gcloud beta run domain-mappings create \
  --service=sheersdigital-site \
  --domain=sheerssoft.com \
  --region=asia-southeast1

# Already done for www
```

**Step 3: Update DNS Records**
In your domain registrar (GoDaddy/Cloudflare/etc):

```
A     @    216.239.32.21
A     @    216.239.34.21  
A     @    216.239.36.21
A     @    216.239.38.21
CNAME www  ghs.googlehosted.com.
```

**Step 4: Wait for DNS propagation (5-30 minutes)**

---

## 🔍 Verification Commands

### Check Cloud Run Service
```bash
gcloud run services describe sheersdigital-site --region=asia-southeast1
```

### Check Domain Mappings
```bash
gcloud beta run domain-mappings list
```

### Check DNS Records
```bash
nslookup sheerssoft.com
nslookup www.sheerssoft.com
```

### Test Direct Access
```bash
curl -I https://sheersdigital-site-afznrjo3ba-as.a.run.app
```

---

## 🎯 Expected Results

After deployment completes:

1. **Cloud Run URL:** ✅ Working
   https://sheersdigital-site-afznrjo3ba-as.a.run.app

2. **www subdomain:** ✅ Working (mapped)
   https://www.sheerssoft.com

3. **Root domain:** 🔄 Needs DNS update
   https://sheerssoft.com

---

## ⏱️ Timeline

- **Deployment:** ~5-10 minutes (in progress)
- **DNS Propagation:** 5-30 minutes
- **SSL Certificate:** 15-30 minutes
- **Total:** ~30-60 minutes for full resolution

---

## 🐛 Troubleshooting

### If site still doesn't load:

**1. Check deployment status:**
```bash
gcloud run revisions list --service=sheersdigital-site --region=asia-southeast1
```

**2. Check domain mappings:**
```bash
gcloud beta run domain-mappings list
```

**3. Check DNS records:**
```bash
# PowerShell
Resolve-DnsName sheerssoft.com
Resolve-DnsName www.sheerssoft.com
```

**4. Check service logs:**
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=sheersdigital-site" --limit=50
```

**5. Test direct URL first:**
Visit: https://sheersdigital-site-afznrjo3ba-as.a.run.app
If this works, it's a domain mapping issue, not a code issue.

---

## 🎯 Next Steps

### 1. Wait for Deployment (In Progress)
The deployment is currently running in the background. Check status with:
```bash
gcloud run services describe sheersdigital-site --region=asia-southeast1
```

### 2. Verify Domain Mapping
Once deployment completes, ensure domain is mapped:
```bash
gcloud beta run domain-mappings describe --domain=sheerssoft.com --region=asia-southeast1
```

### 3. Update DNS (If Needed)
Add the required A and CNAME records in your DNS provider.

### 4. Test Access
- Direct URL: https://sheersdigital-site-afznrjo3ba-as.a.run.app
- WWW: https://www.sheerssoft.com
- Root: https://sheerssoft.com

---

## 📞 Manual Override (If Needed)

If automatic deployment doesn't work, manually deploy with:

```bash
# Build locally
npm run build:prod

# Deploy via gcloud
gcloud run deploy sheersdigital-site \
  --source . \
  --region=asia-southeast1 \
  --allow-unauthenticated \
  --port=80 \
  --memory=512Mi \
  --cpu=1 \
  --max-instances=10 \
  --set-env-vars="NODE_ENV=production,VITE_SUPABASE_URL=$VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY"
```

---

**Status:** 🔄 Deployment in progress...
**ETA:** 5-10 minutes
**Action Required:** Wait for deployment, then verify domain DNS settings

