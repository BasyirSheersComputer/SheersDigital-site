import React from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface CTAProps {
  onBookCall: () => void;
}

export default function CTA({ onBookCall }: CTAProps) {
  const handleStartTrial = () => {
    trackCTAClick('cta', 'Start Free Trial Now');
    window.location.href = '/signup';
  };

  const handleBookDemo = () => {
    trackCTAClick('cta', 'Book Demo');
    trackCalendlyOpen('cta');
    onBookCall();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Throwing Money Away
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join 500+ restaurants already saving thousands monthly. Start your free trial today and see results in 30 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              What You'll Get in Your Free 30-Day Trial:
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Full access to all 6 AI-powered features",
                "Real-time waste tracking & analytics",
                "AI demand forecasting with 95% accuracy",
                "Mobile app for your entire team",
                "Staff training modules & gamification",
                "Compliance reporting & sustainability metrics"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-300 font-medium">
                ⚡ No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Free Trial Today
              </h3>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                <Clock size={16} />
                <span>30 days free • No setup fees • Instant access</span>
              </div>

              <button
                onClick={handleStartTrial}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold mb-6"
              >
                <span>Start Free Trial Now</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={handleBookDemo}
                className="w-full border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold mb-6"
              >
                <Calendar size={20} />
                <span>Book Live Demo</span>
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Trusted by 500+ restaurants worldwide</p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">30%</div>
                <div className="text-gray-300 text-sm">Avg. Waste Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">$50K</div>
                <div className="text-gray-300 text-sm">Avg. Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Restaurants</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              "WasteWise helped us reduce food waste by 35% in just 30 days"
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              - Sarah Chen, Owner of Green Bites Cafe
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
              <span>• 35% waste reduction</span>
              <span>• $12,000 annual savings</span>
              <span>• Staff engagement up 40%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}