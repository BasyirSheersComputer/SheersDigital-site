/**
 * Hormozi-Style Value-Based Pricing
 * Risk reversal guarantees aligned with customer outcomes
 */

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  setupFee: number;
  guarantees: string[];
  included: string[];
  outcomes: {
    metric: string;
    value: string;
  }[];
  riskReversal: {
    type: string;
    details: string;
  };
  ideal

For: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'quick-win',
    name: 'Quick Win Solution',
    tagline: 'Solve One Critical Problem in 30 Days',
    monthlyPrice: 2997,
    setupFee: 0, // Waived to remove friction
    guarantees: [
      '30-Day Results Guarantee: See measurable improvement or full refund',
      'Zero Long-Term Commitment: Cancel anytime after 90 days',
      'Free Implementation Support: We set it up for you',
    ],
    included: [
      'One solution of your choice (AI Forecasting, Waste Logging, or Compliance)',
      'Complete setup and integration',
      'Staff training (up to 10 employees)',
      'Daily waste tracking and reporting',
      'Monthly optimization review',
      'Email and phone support',
    ],
    outcomes: [
      { metric: 'Waste Reduction', value: '20-30%' },
      { metric: 'Time Saved', value: '10-15 hours/week' },
      { metric: 'Monthly Savings', value: 'RM 15,000-25,000' },
      { metric: 'ROI', value: '500-800%' },
    ],
    riskReversal: {
      type: '30-Day Money-Back Guarantee',
      details: 'If you don\'t see measurable reduction in waste or time savings within 30 days, we refund 100% - no questions asked. You risk nothing.',
    },
    idealFor: 'Single-location or small chains (2-5 outlets) wanting to solve one specific problem fast',
  },
  
  {
    id: 'growth',
    name: 'Growth System',
    tagline: 'Complete Waste & Inventory Optimization',
    monthlyPrice: 5997,
    setupFee: 4997, // One-time, but worth it for full integration
    guarantees: [
      '60-Day Savings Guarantee: Save minimum RM 30,000 monthly or pay nothing',
      '6-Month Performance Lock: If system doesn\'t perform, we work for free until it does',
      'Zero Downtime Guarantee: 99.9% uptime or monthly fee waived',
    ],
    included: [
      'Full WasteWise platform access',
      'AI demand forecasting',
      'Automated waste logging',
      'Real-time inventory tracking',
      'Supplier integration and auto-ordering',
      'Compliance automation with alerts',
      'Unlimited staff training',
      'Dedicated success manager',
      'Weekly optimization calls',
      'Priority support (4-hour response)',
    ],
    outcomes: [
      { metric: 'Waste Reduction', value: '35-45%' },
      { metric: 'Time Saved', value: '20-30 hours/week' },
      { metric: 'Monthly Savings', value: 'RM 35,000-50,000' },
      { metric: 'Profit Margin Increase', value: '10-15%' },
      { metric: 'ROI', value: '600-1000%' },
    ],
    riskReversal: {
      type: 'Performance-Based Guarantee',
      details: 'We guarantee minimum RM 30,000 monthly savings within 60 days. If you don\'t hit this, you pay nothing until you do. We only win when you win.',
    },
    idealFor: 'Multi-location chains (6-20 outlets) serious about maximizing profitability and operational excellence',
  },
  
  {
    id: 'enterprise',
    name: 'Enterprise Transformation',
    tagline: 'Full-Scale Digital Transformation',
    monthlyPrice: 0, // Custom pricing
    setupFee: 0, // Custom
    guarantees: [
      '90-Day Transformation Guarantee: Complete digital transformation or extended support at no cost',
      'Profit Increase Guarantee: Minimum 8% profit margin increase in 6 months',
      'White-Glove Service: Dedicated team ensures flawless execution',
    ],
    included: [
      'Everything in Growth System',
      'Custom integrations with your existing POS/ERP',
      'Advanced analytics and predictive modeling',
      'Multi-location centralized dashboard',
      'Custom reporting and KPI tracking',
      'Quarterly strategic planning sessions',
      'On-site training and implementation',
      'Dedicated technical account manager',
      '24/7 priority support',
      'Annual system optimization reviews',
    ],
    outcomes: [
      { metric: 'Waste Reduction', value: '40-50%' },
      { metric: 'Operational Efficiency', value: '50-70% improvement' },
      { metric: 'Monthly Savings', value: 'RM 100,000-300,000+' },
      { metric: 'Profit Margin Increase', value: '12-18%' },
      { metric: 'Scalability', value: 'Unlimited outlets' },
    ],
    riskReversal: {
      type: 'Results or We Work For Free',
      details: 'We guarantee 8% profit margin increase within 6 months. If we don\'t deliver, we continue working at no additional cost until you hit your goals. Your success is our success.',
    },
    idealFor: 'Large chains (20+ outlets) and franchise operations ready to dominate their market through operational excellence',
  },
];

// Additional value bonuses (Hormozi stack)
export const bonuses = [
  {
    name: 'Waste Audit Report',
    value: 'RM 5,000',
    description: 'Comprehensive audit identifying exactly where you\'re losing money (Included Free)',
  },
  {
    name: 'Staff Training Program',
    value: 'RM 8,000',
    description: 'Complete training for your team on waste reduction best practices (Included Free)',
  },
  {
    name: 'Monthly Optimization Reviews',
    value: 'RM 3,000/month',
    description: 'We continuously optimize your system for maximum savings (Included Free)',
  },
  {
    name: 'Compliance Checklist Templates',
    value: 'RM 2,500',
    description: 'Pre-built templates ensuring you never miss a regulatory requirement (Included Free)',
  },
];

// Value equation (Hormozi formula)
export const valueEquation = {
  dreamOutcome: 'Reduce waste by 40%+ and increase profit margins by 10-15%',
  perceivedLikelihood: 'Backed by industry data showing 85%+ of implementations succeed',
  timeToAchievement: 'See results in 30-60 days, not 6-12 months',
  effortAndSacrifice: 'We do everything - you just need to let us access your data',
};

// Pricing psychology notes
export const pricingStrategy = {
  anchor: 'Cost of doing nothing: RM 20,000-50,000 lost monthly in waste',
  comparison: 'vs. System cost: RM 3,000-6,000 monthly (5-10x ROI)',
  urgency: 'Every month you wait costs you RM 20,000-50,000 in preventable waste',
  guarantee: 'Zero risk - you only pay if it works',
};

export default {
  pricingTiers,
  bonuses,
  valueEquation,
  pricingStrategy,
};

