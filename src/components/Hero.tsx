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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Multi-Location 
              <span className="text-blue-300"> F&B Empire</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Premium F&B chains lose <strong>RM 45,000+ monthly</strong> through operational inefficiencies that kill your profit margins. 
              Our enterprise-grade solutions turn chaos into competitive advantage in 7 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                Get Your Profit Recovery Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/get-started#solutions" className="border-2 border-slate-400 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                See Enterprise Solutions
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center">
                <TrendingDown className="w-4 h-4 mr-2" />
                Reduce Waste by 40%
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Setup in 7 Days
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Premium F&B Profit Killers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                  <span>Profit Margin Erosion</span>
                  <span className="font-bold text-red-300">RM 45,000/month</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-500/20 rounded-lg border border-orange-500/30">
                  <span>Operational Inefficiencies</span>
                  <span className="font-bold text-orange-300">32% of orders</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                  <span>Management Overhead</span>
                  <span className="font-bold text-yellow-300">8 hours/week</span>
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