/**
 * Success Cases Component
 * UX-optimized display of real industry success data
 * Positioned strategically for conversion
 */

import React from 'react';
import { TrendingUp, Building2, CheckCircle, ExternalLink, Clock, Target, DollarSign } from 'lucide-react';
import { industryCaseStudies } from '../data/realCaseStudies';

interface SuccessCasesProps {
  category?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  showCTA?: boolean;
  onCTAClick?: () => void;
}

const SuccessCases: React.FC<SuccessCasesProps> = ({ 
  category,
  title = "Proven Results from F&B Industry Leaders",
  subtitle = "Real data from reputable industry sources showing what's possible with modern waste management systems.",
  limit = 3,
  showCTA = false,
  onCTAClick
}) => {
  // Filter by category if specified
  const filteredCases = category 
    ? industryCaseStudies.filter(study => study.category === category)
    : industryCaseStudies;
  
  // Limit the number of cases shown
  const casesToShow = limit ? filteredCases.slice(0, limit) : filteredCases;

  // Get icon based on metric type
  const getMetricIcon = (metric: string) => {
    if (metric.includes('Waste') || metric.includes('Cost')) return DollarSign;
    if (metric.includes('Time')) return Clock;
    if (metric.includes('Accuracy') || metric.includes('Margin')) return Target;
    return TrendingUp;
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
            <span className="text-sm font-semibold text-teal-700">Industry-Verified Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Success Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {casesToShow.map((study) => {
            const MetricIcon = getMetricIcon(study.metric);
            
            return (
              <div 
                key={study.id}
                className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{study.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Key Metric - Large and Prominent */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-6 mb-6 border border-teal-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-teal-700">{study.metric}</span>
                    <MetricIcon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">
                    {study.improvement}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Within {study.timeframe}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Source with Verification Link */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">Source:</span> {study.source}
                    </div>
                    <a 
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Verify
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Building Footer */}
        <div className="bg-neutral-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Why These Numbers Matter</h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              These aren't marketing promises - they're real results from reputable industry sources 
              showing what F&B businesses achieve with proper waste management systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Verified Sources</div>
                <div className="text-neutral-300 text-sm">
                  All data comes from reputable industry research firms and associations
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Realistic Expectations</div>
                <div className="text-neutral-300 text-sm">
                  We show industry averages, not cherry-picked best cases
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Your Results May Vary</div>
                <div className="text-neutral-300 text-sm">
                  Results depend on current waste levels and implementation quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        {showCTA && onCTAClick && (
          <div className="mt-12 text-center">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-teal-700 mb-6">
                Get your free assessment to see how much you can save based on your current operations.
              </p>
              <button 
                onClick={onCTAClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center group"
              >
                Get Your Free Assessment
                <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-teal-600 text-sm mt-4">
                30-day money-back guarantee • No credit card required
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessCases;

