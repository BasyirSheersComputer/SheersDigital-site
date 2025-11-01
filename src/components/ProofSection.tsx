/**
 * Proof Section - Real Data Only
 * No fake testimonials - only publicly available data from reputable sources
 * Replaces CustomerReviews/Testimonials components
 */

import React from 'react';
import { TrendingUp, Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { industryCaseStudies, malaysiaFBData } from '../data/realCaseStudies';

const ProofSection = () => {
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Proven Results from Real Implementations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            These aren't made-up testimonials. This is real data from publicly available sources showing how similar systems delivered measurable results.
          </p>
        </div>

        {/* Malaysia Market Context */}
        <div className="bg-teal-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">Malaysian F&B Market Size</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.marketSize.value}</div>
              <div className="text-sm text-neutral-600">
                ({malaysiaFBData.marketSize.year}) - {malaysiaFBData.marketSize.source}
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">Average Waste Impact</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.wasteStatistics.averageWastePercentage}</div>
              <div className="text-sm text-neutral-600">
                {malaysiaFBData.wasteStatistics.costImpact} per outlet monthly
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">Industry Growth</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.growthPotential.industryGrowth}</div>
              <div className="text-sm text-neutral-600">
                {malaysiaFBData.growthPotential.digitalizationAdoption} adopting digital solutions
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {industryCaseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-teal-300 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <Building2 className="w-4 h-4" />
                    <span>{study.company}</span>
                  </div>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold text-sm">{study.metric}</span>
                </div>
              </div>

              {/* Key Metric */}
              <div className="bg-white rounded-lg p-6 mb-6 border border-neutral-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-600 mb-1">Improvement Achieved</div>
                    <div className="text-4xl font-bold text-teal-600">{study.improvement}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-neutral-600 mb-1">Timeframe</div>
                    <div className="text-lg font-semibold text-neutral-900">{study.timeframe}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {study.description}
              </p>

              {/* Source */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <div className="text-sm text-neutral-600">
                  <span className="font-semibold">Source:</span> {study.source}
                </div>
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 text-sm font-semibold inline-flex items-center"
                >
                  Verify
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-12 bg-neutral-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">What This Means for You</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Proven Technology</div>
                <div className="text-neutral-300 text-sm">
                  These results come from systems similar to ours, proven across hundreds of implementations
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Realistic Expectations</div>
                <div className="text-neutral-300 text-sm">
                  We show you real ranges, not cherry-picked best cases. Your results will vary based on current waste levels
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Verifiable Data</div>
                <div className="text-neutral-300 text-sm">
                  Every claim is backed by reputable sources. Click "Verify" on any case study to see the original data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 italic">
            All data presented is from publicly available sources. Individual results may vary based on business size, current waste levels, and implementation quality. We cannot guarantee specific outcomes, but we guarantee our best effort to help you achieve similar results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

