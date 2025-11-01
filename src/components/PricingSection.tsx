/**
 * Pricing Section - Hormozi Value Stack
 * Value-based pricing with risk reversal guarantees
 * Focus on outcomes, not features
 */

import React, { useState } from 'react';
import { Check, Shield, TrendingUp, Zap } from 'lucide-react';
import { pricingTiers, bonuses } from '../data/pricing';
import MinimalContactForm from './MinimalContactForm';
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleGetStarted = (tierId: string) => {
    setSelectedTier(tierId);
    setIsFormOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">{t('pricing.eyebrow')}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                  index === 1
                    ? 'border-teal-500 shadow-lg scale-105 relative'
                    : 'border-neutral-200 hover:border-teal-300'
                }`}
              >
                {/* Popular Badge */}
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {t('pricing.badge.popular')}
                    </span>
                  </div>
                )}

                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{tier.tagline}</p>
                  
                  <div className="flex items-baseline">
                    {tier.monthlyPrice > 0 ? (
                      <>
                        <span className="text-4xl font-bold text-neutral-900">RM {tier.monthlyPrice.toLocaleString()}</span>
                        <span className="text-neutral-600 ml-2">/month</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-neutral-900">Custom Pricing</span>
                    )}
                  </div>
                  
                  {tier.setupFee > 0 && (
                    <div className="text-sm text-neutral-600 mt-2">
                      +RM {tier.setupFee.toLocaleString()} one-time setup
                    </div>
                  )}
                </div>

                {/* Key Outcomes */}
                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-neutral-700 mb-3">Expected Outcomes:</div>
                  <div className="space-y-2">
                    {tier.outcomes.map((outcome, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{outcome.metric}</span>
                        <span className="font-semibold text-teal-600">{outcome.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantees */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-neutral-900">{t('pricing.guarantees')}</span>
                  </div>
                  <ul className="space-y-2">
                    {tier.guarantees.map((guarantee, i) => (
                      <li key={i} className="text-sm text-neutral-700 flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{guarantee}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <div className="font-semibold text-neutral-900 mb-3">{t('pricing.included')}</div>
                  <ul className="space-y-2">
                    {tier.included.slice(0, 6).map((item, i) => (
                      <li key={i} className="text-sm text-neutral-700 flex items-start">
                        <Check className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {tier.included.length > 6 && (
                      <li className="text-sm text-neutral-500 italic">
                        +{tier.included.length - 6} more features...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-6 p-4 bg-teal-50 rounded-lg">
                  <div className="text-xs font-semibold text-teal-700 mb-1">{t('pricing.idealFor')}</div>
                  <div className="text-sm text-neutral-700">{tier.idealFor}</div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleGetStarted(tier.id)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                    index === 1
                      ? 'gradient-cta text-white hover:shadow-lg'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  {tier.monthlyPrice > 0 ? t('pricing.cta.getStarted') : t('pricing.cta.contactUs')}
                </button>

                {/* Risk Reversal */}
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-semibold text-green-700 mb-1">{tier.riskReversal.type}</div>
                  <div className="text-xs text-neutral-700">{tier.riskReversal.details}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Stack Bonuses */}
          <div className="bg-white rounded-2xl p-8 border-2 border-teal-300 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Bonuses Included (Worth RM {bonuses.reduce((sum, b) => sum + parseInt(b.value.replace(/[^\d]/g, '')), 0).toLocaleString()})
              </h3>
              <p className="text-neutral-600">Normally charged separately - yours FREE with any plan</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-neutral-900">{bonus.name}</h4>
                      <span className="text-sm font-semibold text-teal-600">{bonus.value}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{bonus.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Equation */}
          <div className="bg-neutral-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">The Math is Simple</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-red-400 font-semibold mb-2">Cost of Doing Nothing</div>
                <div className="text-4xl font-bold mb-2">RM 20,000-50,000</div>
                <div className="text-neutral-400 text-sm">Lost monthly in preventable waste</div>
              </div>
              
              <div className="text-center">
                <div className="text-green-400 font-semibold mb-2">Investment in Solution</div>
                <div className="text-4xl font-bold mb-2">RM 3,000-6,000</div>
                <div className="text-neutral-400 text-sm">Returns 5-10x in saved waste</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl text-neutral-300">
                Every month you wait costs you <span className="font-bold text-red-400">RM 20,000-50,000</span> in waste you could prevent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <MinimalContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source={`pricing-${selectedTier}`}
        cta="Schedule My Strategy Call"
      />
    </>
  );
};

export default PricingSection;

