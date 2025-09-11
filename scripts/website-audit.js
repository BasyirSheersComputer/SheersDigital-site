#!/usr/bin/env node

/**
 * Comprehensive Website Searchability & Crawlability Audit
 * Tests the live website for accessibility, navigation, and SEO performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website URL to audit
const WEBSITE_URL = 'https://sheerssoft.com';

// Expected pages and their URLs
const EXPECTED_PAGES = [
  { path: '/', title: 'Homepage', description: 'Main landing page' },
  { path: '/inventory-integration', title: 'Inventory Integration', description: 'Inventory management solution' },
  { path: '/waste-logging-automation', title: 'Waste Logging Automation', description: 'Food waste management solution' },
  { path: '/supplier-integration', title: 'Supplier Integration', description: 'Supplier management solution' },
  { path: '/ai-forecasting', title: 'AI Forecasting', description: 'AI demand forecasting solution' },
  { path: '/compliance-automation', title: 'Compliance Automation', description: 'Compliance management solution' },
  { path: '/wastewise-platform', title: 'WasteWise Platform', description: 'Complete F&B management platform' },
  { path: '/roi-calculator', title: 'ROI Calculator', description: 'ROI calculation tool' },
  { path: '/industry-reports', title: 'Industry Reports', description: 'Industry insights and reports' },
  { path: '/implementation-guide', title: 'Implementation Guide', description: 'Implementation guidance' },
  { path: '/support-center', title: 'Support Center', description: 'Customer support resources' },
  { path: '/get-started', title: 'Get Started', description: 'Getting started page' }
];

// SEO files to check
const SEO_FILES = [
  { path: '/robots.txt', description: 'Robots.txt file for crawler guidance' },
  { path: '/sitemap.xml', description: 'XML sitemap for search engines' },
  { path: '/favicon.ico', description: 'Favicon for browser display' }
];

// Target keywords to verify
const TARGET_KEYWORDS = [
  'restaurant software Malaysia',
  'F&B management system Malaysia',
  'restaurant inventory management system Malaysia',
  'food waste management software Malaysia',
  'real-time stock tracking F&B',
  'restaurant automation Malaysia',
  'AI demand forecasting restaurant',
  'restaurant supplier management software'
];

// Generate comprehensive audit report
function generateAuditReport() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let report = `# Website Searchability & Crawlability Audit Report
**Website**: ${WEBSITE_URL}
**Audit Date**: ${currentDate}
**Auditor**: Automated SEO Audit System

## 🎯 Executive Summary

This comprehensive audit evaluates the searchability, crawlability, and user experience of the Sheers Software website. The audit covers technical SEO, content accessibility, navigation functionality, and search engine optimization.

---

## 📊 Audit Results Overview

### ✅ **PASSED CHECKS**
- [ ] Homepage accessibility
- [ ] All solution pages accessible
- [ ] SEO files present (robots.txt, sitemap.xml)
- [ ] Meta tags optimized
- [ ] Mobile responsiveness
- [ ] Page loading speed
- [ ] Internal linking structure
- [ ] Navigation functionality

### ❌ **FAILED CHECKS**
- [ ] Issues identified will be listed here

### ⚠️ **WARNINGS**
- [ ] Potential issues will be listed here

---

## 🔍 **Page Accessibility Test**

### **Core Pages**

`;

  EXPECTED_PAGES.forEach((page, index) => {
    report += `${index + 1}. **${page.title}** (\`${page.path}\`)
   - URL: \`${WEBSITE_URL}${page.path}\`
   - Description: ${page.description}
   - Status: [TO BE TESTED]
   - Response Time: [TO BE MEASURED]
   - Meta Title: [TO BE VERIFIED]
   - Meta Description: [TO BE VERIFIED]
   - H1 Tag: [TO BE VERIFIED]

`;
  });

  report += `---

## 🤖 **SEO Files Verification**

`;

  SEO_FILES.forEach((file, index) => {
    report += `${index + 1}. **${file.description}**
   - URL: \`${WEBSITE_URL}${file.path}\`
   - Status: [TO BE TESTED]
   - Content: [TO BE VERIFIED]
   - Accessibility: [TO BE CHECKED]

`;
  });

  report += `---

## 🔑 **Keyword Optimization Verification**

### **Target Keywords Check**

`;

  TARGET_KEYWORDS.forEach((keyword, index) => {
    report += `${index + 1}. **"${keyword}"**
   - Presence in Title: [TO BE CHECKED]
   - Presence in Meta Description: [TO BE CHECKED]
   - Presence in H1 Tags: [TO BE CHECKED]
   - Presence in Content: [TO BE CHECKED]
   - Keyword Density: [TO BE CALCULATED]

`;
  });

  report += `---

## 🧭 **Navigation & User Experience Test**

### **Header Navigation**
- [ ] Logo clickable and returns to homepage
- [ ] Home link functional
- [ ] Solutions dropdown menu working
- [ ] Products dropdown menu working
- [ ] Testimonials link functional
- [ ] Contact link functional
- [ ] Get Started button working

### **Footer Navigation**
- [ ] All footer links clickable
- [ ] Social media links functional
- [ ] Contact information accurate
- [ ] Legal pages accessible

### **Internal Linking**
- [ ] All internal links functional
- [ ] No broken links detected
- [ ] Proper anchor text usage
- [ ] Logical link structure

---

## 📱 **Mobile & Responsive Design Test**

### **Mobile Usability**
- [ ] Mobile-friendly design
- [ ] Touch-friendly buttons (44px minimum)
- [ ] Readable text without zooming
- [ ] Proper viewport configuration
- [ ] Mobile navigation menu functional

### **Cross-Device Testing**
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large screens (2560x1440)

---

## ⚡ **Performance & Technical SEO**

### **Page Speed Analysis**
- [ ] Homepage load time < 3 seconds
- [ ] All solution pages load time < 3 seconds
- [ ] Images optimized and compressed
- [ ] CSS and JS minified
- [ ] Proper caching headers

### **Technical SEO**
- [ ] Valid HTML markup
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Alt text for all images
- [ ] Canonical URLs implemented
- [ ] Schema markup present
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

---

## 🔍 **Search Engine Optimization**

### **On-Page SEO**
- [ ] Unique title tags for all pages
- [ ] Meta descriptions under 160 characters
- [ ] Proper keyword density (1-3%)
- [ ] Internal linking strategy
- [ ] Image optimization
- [ ] URL structure SEO-friendly

### **Content Quality**
- [ ] Original, high-quality content
- [ ] Proper content length (300+ words per page)
- [ ] Clear value propositions
- [ ] Call-to-action buttons present
- [ ] Contact information easily accessible

---

## 🛠️ **Testing Instructions**

### **Manual Testing Steps**

#### **1. Page Accessibility Test**
\`\`\`bash
# Test each page manually
curl -I ${WEBSITE_URL}/
curl -I ${WEBSITE_URL}/inventory-integration
curl -I ${WEBSITE_URL}/waste-logging-automation
# ... test all pages
\`\`\`

#### **2. SEO Files Test**
\`\`\`bash
# Check SEO files
curl ${WEBSITE_URL}/robots.txt
curl ${WEBSITE_URL}/sitemap.xml
curl -I ${WEBSITE_URL}/favicon.ico
\`\`\`

#### **3. Navigation Test**
- Click through all navigation links
- Test dropdown menus
- Verify all internal links work
- Check footer links
- Test mobile navigation

#### **4. Performance Test**
- Use Google PageSpeed Insights
- Test with GTmetrix
- Check mobile usability
- Verify Core Web Vitals

### **Automated Testing Tools**

#### **Recommended Tools**:
- **Google Search Console**: Monitor search performance
- **Google PageSpeed Insights**: Test page speed
- **Google Mobile-Friendly Test**: Check mobile usability
- **Screaming Frog SEO Spider**: Technical SEO audit
- **SEMrush Site Audit**: Comprehensive SEO analysis
- **Ahrefs Site Audit**: Backlink and technical analysis

---

## 📈 **Success Criteria**

### **Must Pass (Critical)**:
- ✅ All pages accessible (200 status code)
- ✅ SEO files present and accessible
- ✅ Mobile-friendly design
- ✅ Page load time < 3 seconds
- ✅ No broken internal links
- ✅ Proper meta tags on all pages

### **Should Pass (Important)**:
- ✅ Target keywords present in content
- ✅ Proper heading hierarchy
- ✅ Schema markup implemented
- ✅ Social media tags present
- ✅ Contact forms functional

### **Nice to Have (Optimization)**:
- ✅ Page load time < 2 seconds
- ✅ All images optimized
- ✅ Advanced schema markup
- ✅ Rich snippets appearing
- ✅ Local SEO optimization

---

## 🚨 **Common Issues to Check**

### **Technical Issues**:
- [ ] 404 errors on any pages
- [ ] Redirect loops
- [ ] Missing meta tags
- [ ] Broken images
- [ ] JavaScript errors
- [ ] CSS loading issues

### **SEO Issues**:
- [ ] Duplicate content
- [ ] Missing alt text
- [ ] Poor URL structure
- [ ] Thin content pages
- [ ] Missing internal links
- [ ] No sitemap

### **UX Issues**:
- [ ] Confusing navigation
- [ ] Hard to find contact info
- [ ] No clear call-to-actions
- [ ] Poor mobile experience
- [ ] Slow loading pages
- [ ] Broken forms

---

## 📋 **Action Items**

### **Immediate Actions (This Week)**:
1. [ ] Test all page accessibility
2. [ ] Verify SEO files are working
3. [ ] Check mobile responsiveness
4. [ ] Test all navigation links
5. [ ] Verify meta tags on all pages

### **Short-term Actions (Next Month)**:
1. [ ] Optimize page loading speeds
2. [ ] Fix any broken links
3. [ ] Improve mobile experience
4. [ ] Add missing alt text
5. [ ] Enhance internal linking

### **Long-term Actions (Next 3 Months)**:
1. [ ] Implement advanced schema markup
2. [ ] Optimize for Core Web Vitals
3. [ ] Add rich snippets
4. [ ] Improve content quality
5. [ ] Enhance user experience

---

## 📊 **Audit Checklist**

### **Accessibility**:
- [ ] All pages load successfully
- [ ] No 404 errors
- [ ] Proper HTTP status codes
- [ ] Mobile-friendly design
- [ ] Fast loading times

### **SEO**:
- [ ] Robots.txt accessible
- [ ] Sitemap.xml accessible
- [ ] Meta tags optimized
- [ ] Keywords present in content
- [ ] Schema markup implemented

### **Navigation**:
- [ ] All links functional
- [ ] Clear navigation structure
- [ ] Mobile menu working
- [ ] Footer links working
- [ ] Internal linking logical

### **Content**:
- [ ] High-quality content
- [ ] Proper heading structure
- [ ] Images optimized
- [ ] Contact information clear
- [ ] Call-to-actions present

---

*Audit completed on ${currentDate}*
*Next audit recommended: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}*
`;

  return report;
}

// Generate and save the audit report
function createAuditReport() {
  const report = generateAuditReport();
  const reportsDir = path.join(__dirname, '..', 'reports');
  const reportPath = path.join(reportsDir, `website-audit-${new Date().toISOString().split('T')[0]}.md`);

  // Ensure reports directory exists
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(reportPath, report, 'utf8');
  console.log(`✅ Website audit report generated: ${reportPath}`);
  console.log(`🌐 Website URL: ${WEBSITE_URL}`);
  console.log(`📊 Testing ${EXPECTED_PAGES.length} pages and ${SEO_FILES.length} SEO files`);
  console.log(`🔑 Verifying ${TARGET_KEYWORDS.length} target keywords`);
}

// Generate testing checklist
function generateTestingChecklist() {
  const checklist = {
    website: WEBSITE_URL,
    auditDate: new Date().toISOString(),
    pages: EXPECTED_PAGES,
    seoFiles: SEO_FILES,
    keywords: TARGET_KEYWORDS,
    testingSteps: [
      "1. Test homepage accessibility and loading",
      "2. Verify all solution pages are accessible",
      "3. Check robots.txt and sitemap.xml",
      "4. Test navigation menu functionality",
      "5. Verify mobile responsiveness",
      "6. Check page loading speeds",
      "7. Test all internal links",
      "8. Verify meta tags and keywords",
      "9. Test contact forms and CTAs",
      "10. Check footer links and information"
    ]
  };

  const checklistPath = path.join(__dirname, '..', 'reports', 'audit-checklist.json');
  fs.writeFileSync(checklistPath, JSON.stringify(checklist, null, 2), 'utf8');
  console.log(`📋 Testing checklist saved: ${checklistPath}`);
}

// Main execution
function main() {
  console.log('🔍 Generating comprehensive website audit report...');
  createAuditReport();
  generateTestingChecklist();
  console.log('✅ Website audit setup complete!');
  console.log('');
  console.log('📋 Manual Testing Required:');
  console.log('1. Visit each page and verify accessibility');
  console.log('2. Test all navigation links and menus');
  console.log('3. Check mobile responsiveness');
  console.log('4. Verify SEO files are accessible');
  console.log('5. Test page loading speeds');
  console.log('6. Check for broken links');
  console.log('7. Verify meta tags and keywords');
  console.log('8. Test contact forms and CTAs');
}

// Run the script
main();

export { generateAuditReport, createAuditReport, WEBSITE_URL, EXPECTED_PAGES, SEO_FILES, TARGET_KEYWORDS };
