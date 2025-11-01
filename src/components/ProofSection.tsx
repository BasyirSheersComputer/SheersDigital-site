/**
 * Proof Section - Real Data Only
 * No fake testimonials - only publicly available data from reputable sources
 * Replaces CustomerReviews/Testimonials components
 */

import React from 'react';
import { TrendingUp, Building2, CheckCircle, ExternalLink } from 'lucide-react';
import { industryCaseStudies, malaysiaFBData } from '../data/realCaseStudies';
import { useLanguage } from '../contexts/LanguageContext';

const ProofSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            {t('proof.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('proof.subtitle')}
          </p>
        </div>

        {/* Malaysia Market Context */}
        <div className="bg-teal-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">{t('proof.malaysiaData.marketSize')}</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.marketSize.value}</div>
              <div className="text-sm text-neutral-600">
                ({malaysiaFBData.marketSize.year}) - {malaysiaFBData.marketSize.source}
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">{t('proof.malaysiaData.wasteImpact')}</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.wasteStatistics.averageWastePercentage}</div>
              <div className="text-sm text-neutral-600">
                {malaysiaFBData.wasteStatistics.costImpact}
              </div>
            </div>
            
            <div>
              <div className="text-sm font-semibold text-teal-700 mb-2">{t('proof.malaysiaData.growth')}</div>
              <div className="text-3xl font-bold text-neutral-900 mb-1">{malaysiaFBData.growthPotential.industryGrowth}</div>
              <div className="text-sm text-neutral-600">
                {malaysiaFBData.growthPotential.digitalizationAdoption}
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
                    <div className="text-sm text-neutral-600 mb-1">{t('proof.caseStudy.improvement')}</div>
                    <div className="text-4xl font-bold text-teal-600">{study.improvement}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-neutral-600 mb-1">{t('proof.caseStudy.timeframe')}</div>
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
                  <span className="font-semibold">{t('proof.caseStudy.source')}:</span> {study.source}
                </div>
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 text-sm font-semibold inline-flex items-center"
                >
                  {t('proof.caseStudy.verify')}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-12 bg-neutral-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">{t('proof.takeaways.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{t('proof.takeaways.proven.title')}</div>
                <div className="text-neutral-300 text-sm">
                  {t('proof.takeaways.proven.description')}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{t('proof.takeaways.realistic.title')}</div>
                <div className="text-neutral-300 text-sm">
                  {t('proof.takeaways.realistic.description')}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">{t('proof.takeaways.verifiable.title')}</div>
                <div className="text-neutral-300 text-sm">
                  {t('proof.takeaways.verifiable.description')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 italic">
            {t('proof.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

