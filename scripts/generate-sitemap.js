#!/usr/bin/env node

/**
 * Sitemap Generator for Sheers Software Website
 * This script generates an XML sitemap for better SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes and their metadata
const routes = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/inventory-integration',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/waste-logging-automation',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/supplier-integration',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/ai-forecasting',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/compliance-automation',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/wastewise-platform',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/roi-calculator',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/industry-reports',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/implementation-guide',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/support-center',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/get-started',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Base URL for the website
const baseUrl = 'https://sheerssoft.com';

// Generate XML sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>

`;
  });

  sitemap += '</urlset>';

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📊 Generated sitemap with ${routes.length} URLs`);
}

// Run the script
writeSitemap();

export { generateSitemap, writeSitemap };
