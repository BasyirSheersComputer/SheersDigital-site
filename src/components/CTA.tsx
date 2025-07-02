import React from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, Award, Shield, Zap, TrendingUp } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface CTAProps {
  onBookCall: () => void;
}

export default function CTA({ onBookCall }: CTAProps) {
  const handleBookCall = () => {
    trackCTAClick('cta', 'Yes, I Want My Free Digital Transformation Audit');
    trackCalendlyOpen('cta');
    onBookCall();
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&q=80" 
          alt="Digital transformation success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="text-yellow-400" size={24} />
            <span className="text-yellow-400 font-bold">Last Chance: Only 3 Spots Left This Month</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Stop Losing RM50,000 Monthly to Outdated Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Every day you wait, your competitors get stronger with AI automation. Book your free digital transformation audit now and 
            discover the 3 changes that will 10X your business in 90 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              What You Get in Your Free 45-Minute Digital Transformation Audit:
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Complete digital readiness assessment (Worth RM5,000)",
                "AI automation opportunities analysis (Worth RM3,000)",
                "Custom 90-day transformation roadmap (Worth RM2,500)",
                "ROI calculator showing exact profit increase",
                "Competitor analysis: How they're beating you",
                "Zero-pressure consultation - pure value only"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 font-medium">
                ⚡ BONUS: First 3 callers get a free AI automation blueprint (Worth RM2,500)
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Book Your Free Digital Transformation Audit
              </h3>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                <Clock size={16} />
                <span>45 minutes • Zero obligations • Immediate insights • KL-based experts</span>
              </div>

              <button
                onClick={handleBookCall}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-bold mb-6 shadow-xl transform hover:scale-105"
              >
                <span>Yes, I Want My Free Digital Transformation Audit</span>
                <ArrowRight size={20} />
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Trusted by 500+ Malaysian businesses</p>
                <div className="flex justify-center items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                  <span className="text-gray-600 text-sm ml-2">4.9/5 rating (127 reviews)</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield size={16} />
                  <span>PDPA Compliant • Malaysian Owned • Local Experts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">45min</div>
                <div className="text-gray-300 text-sm">Deep Dive Audit</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">10X</div>
                <div className="text-gray-300 text-sm">Growth Potential</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Success Stories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="mt-20 text-center">
          <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-red-400 mb-4">
              WARNING: Your Competitors Are Already 6 Months Ahead
            </h3>
            <p className="text-red-300 text-lg leading-relaxed">
              While you're thinking about it, smart Malaysian businesses are already implementing AI automation, 
              cloud transformation, and digital systems. Every day you delay costs you RM50,000+ in lost opportunities.
              <br/><br/>
              <span className="font-bold text-white text-xl">Don't let them win. Book your audit now.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}