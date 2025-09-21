# SheersSoft.com Deployment Guide

## Overview
This guide will help you deploy your website to https://sheerssoft.com/ so that Gemini and other AI tools can access it.

## Prerequisites
1. Google Cloud Platform account with billing enabled
2. Domain ownership of sheerssoft.com
3. Google Cloud CLI installed and configured

## Step 1: Domain Configuration

### 1.1 DNS Setup
Configure your domain's DNS records to point to Google Cloud:

```
# A Records
@ -> [Your GCP Load Balancer IP]
www -> [Your GCP Load Balancer IP]

# CNAME Records (if using Cloud Run)
@ -> [your-service-name-hash-uc.a.run.app]
www -> [your-service-name-hash-uc.a.run.app]
```

### 1.2 SSL Certificate
Google Cloud Run automatically provides SSL certificates for custom domains.

## Step 2: Google Cloud Setup

### 2.1 Set Project ID
```bash
export PROJECT_ID="your-gcp-project-id"
gcloud config set project $PROJECT_ID
```

### 2.2 Enable Required APIs
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### 2.3 Build and Deploy
```bash
# Build the application
npm run build:prod

# Deploy to Cloud Run
npm run deploy:gcp
```

## Step 3: Custom Domain Mapping

### 3.1 Map Domain to Cloud Run Service
```bash
gcloud run domain-mappings create \
  --service sheersdigital-site \
  --domain sheerssoft.com \
  --region asia-southeast1

gcloud run domain-mappings create \
  --service sheersdigital-site \
  --domain www.sheerssoft.com \
  --region asia-southeast1
```

### 3.2 Verify Domain Mapping
```bash
gcloud run domain-mappings list --region asia-southeast1
```

## Step 4: Environment Variables

### 4.1 Update Environment Variables
```bash
gcloud run services update sheersdigital-site \
  --region asia-southeast1 \
  --set-env-vars VITE_DOMAIN=sheerssoft.com \
  --set-env-vars VITE_API_URL=https://api.sheerssoft.com
```

## Step 5: Testing

### 5.1 Test Website Access
- Visit https://sheerssoft.com/
- Test all pages and functionality
- Verify SSL certificate is working

### 5.2 Test AI Tool Access
- Try accessing the website through Gemini
- Verify that all content is accessible
- Test form submissions and interactions

## Troubleshooting

### Common Issues

1. **Domain Not Resolving**
   - Check DNS propagation (can take up to 48 hours)
   - Verify DNS records are correct
   - Check Google Cloud domain mapping status

2. **SSL Certificate Issues**
   - Wait for automatic SSL provisioning (up to 24 hours)
   - Check domain mapping status
   - Verify DNS records are pointing to the correct service

3. **Service Not Responding**
   - Check Cloud Run service status
   - Verify service is running and healthy
   - Check logs for errors

### Useful Commands

```bash
# Check service status
gcloud run services describe sheersdigital-site --region asia-southeast1

# View service logs
gcloud run services logs read sheersdigital-site --region asia-southeast1

# Check domain mappings
gcloud run domain-mappings list --region asia-southeast1

# Update service
gcloud run services update sheersdigital-site --region asia-southeast1
```

## Monitoring

### 5.1 Set Up Monitoring
- Enable Cloud Monitoring for your service
- Set up alerts for service availability
- Monitor response times and error rates

### 5.2 Analytics
- Verify Google Analytics is working
- Check Facebook Pixel integration
- Monitor user engagement metrics

## Security

### 5.1 Security Headers
The nginx configuration includes security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content Security Policy

### 5.2 SSL/TLS
- Automatic SSL certificate provisioning
- HTTPS redirect enforcement
- Modern TLS configuration

## Cost Optimization

### 5.1 Cloud Run Settings
- Min instances: 0 (scales to zero when not in use)
- Max instances: 10 (prevents runaway costs)
- CPU and memory limits set appropriately

### 5.2 Monitoring Costs
- Set up billing alerts
- Monitor Cloud Run usage
- Optimize resource allocation

## Support

If you encounter issues:
1. Check Google Cloud Console logs
2. Review service status and metrics
3. Consult Google Cloud documentation
4. Contact Google Cloud support if needed

## Next Steps

After successful deployment:
1. Set up monitoring and alerting
2. Configure backup and disaster recovery
3. Implement CI/CD pipeline
4. Set up staging environment
5. Plan for scaling and optimization
