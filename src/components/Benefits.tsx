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
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={0.1 * index}>
              <div className="text-center group">
                <div className="text-blue-600 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI Calculator */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Calculate Your Potential Savings</h3>
            <p className="text-xl text-blue-100 mb-8">
              Based on average Malaysian F&B performance, here's what you could save:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">RM 20,000+</div>
                <div className="text-blue-100">Monthly waste reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">15-20%</div>
                <div className="text-blue-100">Profit margin improvement</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">32 hours</div>
                <div className="text-blue-100">Staff time saved monthly</div>
              </div>
            </div>

            <button 
              onClick={openModal}
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Your Custom ROI Report
            </button>
          </div>
        </AnimatedSection>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default Benefits;