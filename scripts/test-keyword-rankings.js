#!/usr/bin/env node

/**
 * Keyword Ranking Test Script for Sheers Software
 * This script helps monitor keyword rankings and SEO performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target keywords for ranking monitoring
const targetKeywords = [
  // Tier 1 Keywords (Highest Priority)
  {
    keyword: "restaurant software Malaysia",
    priority: "Tier 1",
    targetRanking: 1,
    searchVolume: "2,400-4,800/month",
    competition: "Medium",
    commercialIntent: "Very High"
  },
  {
    keyword: "restaurant inventory management system Malaysia",
    priority: "Tier 1", 
    targetRanking: 1,
    searchVolume: "1,800-3,600/month",
    competition: "Medium",
    commercialIntent: "Very High"
  },
  {
    keyword: "food waste management software Malaysia",
    priority: "Tier 1",
    targetRanking: 1,
    searchVolume: "1,200-2,400/month",
    competition: "Low-Medium",
    commercialIntent: "Very High"
  },
  
  // Tier 2 Keywords (High Priority)
  {
    keyword: "F&B management system Malaysia",
    priority: "Tier 2",
    targetRanking: 3,
    searchVolume: "1,600-3,200/month",
    competition: "Medium",
    commercialIntent: "High"
  },
  {
    keyword: "real-time stock tracking F&B",
    priority: "Tier 2",
    targetRanking: 3,
    searchVolume: "800-1,600/month",
    competition: "Low",
    commercialIntent: "Very High"
  },
  
  // Tier 3 Keywords (Medium Priority)
  {
    keyword: "restaurant automation Malaysia",
    priority: "Tier 3",
    targetRanking: 5,
    searchVolume: "600-1,200/month",
    competition: "Low",
    commercialIntent: "High"
  },
  {
    keyword: "AI demand forecasting restaurant",
    priority: "Tier 3",
    targetRanking: 5,
    searchVolume: "400-800/month",
    competition: "Low",
    commercialIntent: "Very High"
  },
  {
    keyword: "restaurant supplier management software",
    priority: "Tier 3",
    targetRanking: 5,
    searchVolume: "300-600/month",
    competition: "Low",
    commercialIntent: "Very High"
  }
];

// Generate keyword ranking test report
function generateRankingReport() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let report = `# Keyword Ranking Test Report - ${currentDate}

## 🎯 Target Keywords Performance

### Tier 1 Keywords (Highest Priority - Target: #1 Ranking)

`;

  // Tier 1 Keywords
  const tier1Keywords = targetKeywords.filter(k => k.priority === "Tier 1");
  tier1Keywords.forEach((keyword, index) => {
    report += `${index + 1}. **${keyword.keyword}**
   - Target Ranking: #${keyword.targetRanking}
   - Search Volume: ${keyword.searchVolume}
   - Competition: ${keyword.competition}
   - Commercial Intent: ${keyword.commercialIntent}
   - Current Ranking: [TO BE TESTED]
   - Change: [TO BE RECORDED]

`;
  });

  report += `### Tier 2 Keywords (High Priority - Target: Top 3)

`;

  // Tier 2 Keywords
  const tier2Keywords = targetKeywords.filter(k => k.priority === "Tier 2");
  tier2Keywords.forEach((keyword, index) => {
    report += `${index + 1}. **${keyword.keyword}**
   - Target Ranking: Top ${keyword.targetRanking}
   - Search Volume: ${keyword.searchVolume}
   - Competition: ${keyword.competition}
   - Commercial Intent: ${keyword.commercialIntent}
   - Current Ranking: [TO BE TESTED]
   - Change: [TO BE RECORDED]

`;
  });

  report += `### Tier 3 Keywords (Medium Priority - Target: Top 5)

`;

  // Tier 3 Keywords
  const tier3Keywords = targetKeywords.filter(k => k.priority === "Tier 3");
  tier3Keywords.forEach((keyword, index) => {
    report += `${index + 1}. **${keyword.keyword}**
   - Target Ranking: Top ${keyword.targetRanking}
   - Search Volume: ${keyword.searchVolume}
   - Competition: ${keyword.competition}
   - Commercial Intent: ${keyword.commercialIntent}
   - Current Ranking: [TO BE TESTED]
   - Change: [TO BE RECORDED]

`;
  });

  report += `## 📊 Testing Instructions

### Manual Testing Steps:
1. **Google Search**: Search each keyword in incognito mode
2. **Record Position**: Note the position of sheerssoft.com in results
3. **Check Local Pack**: Look for local business listings
4. **Monitor Competitors**: Note who ranks above us
5. **Update Report**: Record findings in this report

### Automated Testing Tools:
- **Google Search Console**: Monitor organic performance
- **SEMrush**: Track keyword rankings
- **Ahrefs**: Analyze backlink profile
- **Google Analytics**: Measure traffic and conversions

## 🎯 Success Metrics

### Ranking Targets:
- **Month 1**: Top 50 for all target keywords
- **Month 2**: Top 20 for Tier 1 keywords
- **Month 3**: Top 10 for Tier 1 keywords
- **Month 6**: #1 ranking for "Restaurant Software Malaysia"
- **Month 9**: #1 ranking for all Tier 1 keywords

### Traffic Targets:
- **Month 1**: 25% increase in organic traffic
- **Month 3**: 75% increase in organic traffic
- **Month 6**: 150% increase in organic traffic
- **Month 12**: 300% increase in organic traffic

## 📈 Next Actions

### Immediate Actions (This Week):
1. Set up Google Search Console monitoring
2. Create SEMrush project for tracking
3. Implement technical SEO improvements
4. Start content creation for target keywords

### Short-term Actions (Next Month):
1. Publish 4-6 optimized blog posts
2. Create solution-specific landing pages
3. Build local citations and directories
4. Start link building campaign

### Long-term Actions (Next 3 Months):
1. Scale successful content strategies
2. Build high-quality backlinks
3. Optimize conversion funnels
4. Expand to additional keywords

---

*Report generated on ${currentDate}*
*Next update: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}*
`;

  return report;
}

// Generate and save the ranking report
function createRankingReport() {
  const report = generateRankingReport();
  const reportsDir = path.join(__dirname, '..', 'reports');
  const reportPath = path.join(reportsDir, `keyword-ranking-report-${new Date().toISOString().split('T')[0]}.md`);

  // Ensure reports directory exists
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(reportPath, report, 'utf8');
  console.log(`✅ Keyword ranking report generated: ${reportPath}`);
  console.log(`📊 Report includes ${targetKeywords.length} target keywords`);
  console.log(`🎯 Focus on Tier 1 keywords for maximum impact`);
}

// Generate keyword research data
function generateKeywordData() {
  const keywordData = {
    timestamp: new Date().toISOString(),
    totalKeywords: targetKeywords.length,
    tier1Keywords: targetKeywords.filter(k => k.priority === "Tier 1").length,
    tier2Keywords: targetKeywords.filter(k => k.priority === "Tier 2").length,
    tier3Keywords: targetKeywords.filter(k => k.priority === "Tier 3").length,
    keywords: targetKeywords
  };

  const dataPath = path.join(__dirname, '..', 'reports', 'keyword-data.json');
  fs.writeFileSync(dataPath, JSON.stringify(keywordData, null, 2), 'utf8');
  console.log(`📊 Keyword data saved: ${dataPath}`);
}

// Main execution
function main() {
  console.log('🔍 Generating keyword ranking test report...');
  createRankingReport();
  generateKeywordData();
  console.log('✅ Keyword ranking test setup complete!');
  console.log('');
  console.log('📋 Next Steps:');
  console.log('1. Test each keyword manually in Google');
  console.log('2. Record current rankings in the report');
  console.log('3. Set up automated monitoring tools');
  console.log('4. Start implementing optimization strategies');
}

// Run the script
main();

export { generateRankingReport, createRankingReport, targetKeywords };
