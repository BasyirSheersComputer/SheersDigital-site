import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const handleBookCall = () => {
    trackCTAClick('hero', 'Get Free IT Audit (Worth RM2,500)');
    trackCalendlyOpen('hero');
    onBookCall();
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                🚨 STOP Losing RM50,000+ Monthly to IT Problems
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              KL's Top 3 IT Problems Are 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Killing Your Profits</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              While you're stuck dealing with system crashes, security breaches, and manual processes, 
              your competitors are scaling 10x faster. We've solved these exact problems for 200+ KL businesses 
              in the last 24 months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Get Free IT Audit (Worth RM2,500)</span>
                <ArrowRight size={20} />
              </button>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={16} />
                <span className="text-sm">30-min call • No obligations • Immediate insights</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The 3 IT Problems Costing You Most:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <TrendingUp className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Outdated Systems & Cloud Migration</h4>
                    <p className="text-gray-600 text-sm">Losing RM15,000-25,000 monthly in productivity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cybersecurity Vulnerabilities</h4>
                    <p className="text-gray-600 text-sm">Average breach costs RM180,000 + reputation damage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ArrowRight className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manual Process Inefficiencies</h4>
                    <p className="text-gray-600 text-sm">Staff spending 40% time on tasks that could be automated</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 font-medium text-center">
                  ✓ We solve all 3 in 90 days or less - Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}