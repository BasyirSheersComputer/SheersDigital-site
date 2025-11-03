#!/bin/bash

# Build script with Supabase credentials
# This ensures environment variables are baked into the production build

set -e

echo "Building with Supabase credentials..."

# Get credentials from .env
SUPABASE_URL="https://nbupfkhtkoggqnyvpdfl.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idXBma2h0a29nZ3FueXZwZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxODA4NDksImV4cCI6MjA1OTc1Njg0OX0.4k29V3KVHIt-JAu8RNxL6udtpHqvq3j3ek6FySC_HoI"

# Build Docker image with build args
docker build \
  --build-arg VITE_SUPABASE_URL="$SUPABASE_URL" \
  --build-arg VITE_SUPABASE_ANON_KEY="$SUPABASE_KEY" \
  --build-arg VITE_APP_NAME="WasteWise" \
  --build-arg VITE_DOMAIN="sheerssoft.com" \
  -t gcr.io/wastewise-402ba/sheersdigital-site:latest \
  .

echo "Build complete! Push with:"
echo "docker push gcr.io/wastewise-402ba/sheersdigital-site:latest"
echo ""
echo "Then deploy with:"
echo "gcloud run deploy sheersdigital-site --image gcr.io/wastewise-402ba/sheersdigital-site:latest --region=asia-southeast1"

