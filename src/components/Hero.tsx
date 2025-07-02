import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Shield, Zap, Play } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';
import ROIChart from './charts/ROIChart';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const handleBookCall = () => {
    trackCTAClick('hero', 'Get My Free Digital Transformation Audit (Worth RM5,000)');
    trackCalendlyOpen('hero');
    onBookCall();
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
          alt="Digital transformation technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-indigo-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🚀 STOP! Your Competitors Are Already 10X Ahead
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              The $100M Digital Transformation Secret That 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Malaysian CEOs Don't Want You to Know</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              While your competitors automate everything with AI and cloud tech, you're still doing things the "old way." 
              <span className="text-yellow-400 font-semibold">Here's how to leapfrog them in 90 days</span> and become the market leader 
              (even if you're starting from zero).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-bold shadow-2xl transform hover:scale-105"
              >
                <span>Get My Free Digital Transformation Audit (Worth RM5,000)</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-gray-300 mb-10">
              <Clock size={16} />
              <span className="text-sm">30-min call • Zero fluff • Immediate action plan • KL-based team</span>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Businesses Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">10X</div>
                <div className="text-sm text-gray-400">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">90</div>
                <div className="text-sm text-gray-400">Days to Results</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* ROI Chart */}
            <div className="mb-8">
              <ROIChart />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-600" size={20} />
                <div>
                  <div className="text-lg font-bold text-gray-900">1,247%</div>
                  <div className="text-xs text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-600" size={20} />
                <div>
                  <div className="text-lg font-bold text-gray-900">85%</div>
                  <div className="text-xs text-gray-600">Tasks Automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Trusted by Malaysia's fastest-growing companies:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-bold text-lg">GENTING</div>
            <div className="text-white font-bold text-lg">MAYBANK</div>
            <div className="text-white font-bold text-lg">AXIATA</div>
            <div className="text-white font-bold text-lg">PETRONAS</div>
          </div>
        </div>
      </div>
    </section>
  );
}