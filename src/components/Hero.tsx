/**
 * Hero Section - AG1 Inspired
 * Clean, professional, outcome-focused
 * No AI-generated fluff, just real value
 */

import React, { useState } from 'react';
import { ArrowRight, TrendingDown, Clock, Shield } from 'lucide-react';
import MinimalContactForm from './MinimalContactForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-white overflow-hidden">
        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Value Proposition */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full">
                <span className="text-teal-700 font-semibold text-sm">For Malaysian F&B Operators</span>
              </div>

              {/* Headline - Outcome Focused */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Reduce Food Waste by <span className="text-teal-600">30-40%</span> in 60 Days
              </h1>

              {/* Subheadline - Problem + Solution */}
              <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
                Stop losing RM 15,000-25,000 monthly to preventable waste. Our proven system helps F&B businesses increase profit margins by 10-15% through smart inventory management and waste reduction.
              </p>

              {/* Key Metrics - Social Proof */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-neutral-200">
                <div>
                  <div className="text-3xl font-bold text-teal-600">30-40%</div>
                  <div className="text-sm text-neutral-600">Waste Reduced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">60 Days</div>
                  <div className="text-sm text-neutral-600">To Results</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-neutral-600">Active Clients</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl group"
                >
                  Get Your Free Waste Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg font-semibold text-lg transition-all"
                >
                  See Pricing
                </a>
              </div>

              {/* Trust Indicators */}
              <p className="text-sm text-neutral-500">
                ✓ No credit card required  •  ✓ 30-day money-back guarantee  •  ✓ Setup in 5 days
              </p>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-50 to-neutral-100 aspect-[4/3]">
                <img
                  src="/img/slide1.jpg"
                  alt="F&B waste management dashboard"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 text-red-600 mb-1">
                        <TrendingDown className="w-5 h-5" />
                        <span className="font-semibold">Waste Down</span>
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">38%</div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-green-600 mb-1">
                        <TrendingDown className="w-5 h-5 transform rotate-180" />
                        <span className="font-semibold">Profit Up</span>
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Agitation - Below Hero */}
        <div className="bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pain Point 1 */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💸</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Unpredictable Waste</h3>
                  <p className="text-sm text-neutral-600">
                    Losing RM 15,000-25,000 monthly per outlet to food waste you can't track or predict
                  </p>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Manual Everything</h3>
                  <p className="text-sm text-neutral-600">
                    Wasting 20-30 hours weekly on manual tracking, paperwork, and compliance documentation
                  </p>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Compliance Stress</h3>
                  <p className="text-sm text-neutral-600">
                    Living in fear of RM 50,000-250,000 fines from missing one compliance requirement
                  </p>
                </div>
              </div>
            </div>

            {/* Urgency Statement */}
            <div className="mt-8 text-center">
              <p className="text-neutral-700 font-medium">
                <span className="text-red-600 font-bold">Every month you wait</span> costs you RM 15,000-25,000 in preventable waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Contact Form Modal */}
      <MinimalContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source="hero-cta"
        cta="Get My Free Waste Audit"
      />
    </>
  );
};

export default Hero;
