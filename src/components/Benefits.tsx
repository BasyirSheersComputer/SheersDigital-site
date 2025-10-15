import React from 'react';
import { TrendingUp, Shield, Clock, Award } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';
import { AnimatedSection } from './AnimatedSection';

const Benefits = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: "RM 2.3M", label: "Saved by clients in 2024" },
    { icon: <Shield className="w-8 h-8" />, value: "250+", label: "F&B outlets optimized" },
    { icon: <Clock className="w-8 h-8" />, value: "5 days", label: "Results guarantee" },
    { icon: <Award className="w-8 h-8" />, value: "98%", label: "Client satisfaction rate" }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Calculate Your Potential Savings</h3>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Based on average Malaysian F&B performance, here's what you could save:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">RM 20,000+</div>
              <div className="text-blue-100 text-sm">Monthly waste reduction</div>
            </div>
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">15-20%</div>
              <div className="text-blue-100 text-sm">Profit margin improvement</div>
            </div>
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">32 hours</div>
              <div className="text-blue-100 text-sm">Staff time saved monthly</div>
            </div>
          </div>

          <button 
            onClick={openModal}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg font-medium text-base sm:text-lg transition-colors mobile-button w-full sm:w-auto justify-center"
          >
            Get Your Custom ROI Report
          </button>
        </div>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default Benefits;