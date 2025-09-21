import React from 'react';
import { AlertTriangle, DollarSign, Clock, TrendingDown, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';

const PainPoints = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();
  const painPoints = [
    {
      icon: <DollarSign className="w-8 h-8" />,
          title: "RM 540,000 Annual Profit Drain",
    description: "Premium F&B chains hemorrhage RM 540,000 yearly through operational inefficiencies that destroy your competitive edge.",
      stat: "78% of operators"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "8 Hours Weekly Management Waste",
      description: "Your management team wastes 8+ hours weekly on manual processes instead of strategic growth initiatives.",
      stat: "Every outlet"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "32% Operational Errors",
      description: "Nearly 1 in 3 operational decisions are flawed due to poor data visibility and manual forecasting.",
      stat: "Industry average"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "15% Profit Margin Erosion",
      description: "Operational inefficiencies directly erode profit margins by 15-20% across premium F&B chains.",
      stat: "Proven impact"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              The Profit Killers Destroying Premium F&B Chains
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Based on 2024 research across 500+ premium Malaysian F&B chains, 
              these operational inefficiencies are eroding your competitive advantage.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="text-red-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{point.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">{point.description}</p>
                <div className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full inline-block">
                  {point.stat}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-12 text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Ready to Reclaim Your Competitive Edge?
              </h3>
              <p className="text-red-700 text-lg mb-6">
                Every day you delay is another RM 1,500+ lost to preventable inefficiencies. 
                Our enterprise solutions can transform your operations in just one week.
              </p>
              <button 
                onClick={openModal}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg transform hover:scale-105 mx-auto"
              >
                Stop Losing Money Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-red-600 text-sm mt-3">
                Free consultation • No credit card required • Instant access
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default PainPoints;