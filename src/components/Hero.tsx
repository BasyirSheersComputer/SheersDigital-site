import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';

const Hero = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            {/* Main Headline Section */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Stop Losing <span className="text-red-400">RM 45,000+</span> Monthly: The Secret to Turning 
                <span className="text-blue-300"> Chaos into Competitive Advantage</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Premium F&B chains lose <strong>RM 45,000+ monthly</strong> through operational inefficiencies that kill your profit margins. 
                Our enterprise-grade solutions powered by the WasteWise platform turn chaos into competitive advantage in 7 days.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="space-y-4">
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center group shadow-2xl transform hover:scale-105 mx-auto"
              >
                Claim Your Free Profit Recovery Plan
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-slate-400 text-sm">
                No credit card required. Instant access.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="flex items-center justify-center space-x-12 text-sm text-slate-400">
              <div className="flex items-center">
                <TrendingDown className="w-4 h-4 mr-2" />
                Reduce Waste by 40%
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Setup in 7 Days
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm mb-6">
                Trusted by 100+ F&B chains including...
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-70">
                <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-white font-semibold">McDonald's</span>
                </div>
                <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-white font-semibold">KFC</span>
                </div>
                <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-white font-semibold">Pizza Hut</span>
                </div>
                <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-white font-semibold">Starbucks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;