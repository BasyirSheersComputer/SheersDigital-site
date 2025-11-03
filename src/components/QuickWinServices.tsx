import React from 'react';
import { Package, BarChart3, Users, Brain, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';
import { AnimatedSection } from './AnimatedSection';

const QuickWinServices = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Real-Time Inventory Tracking",
      description: "Reduce spoilage by 10-15% through real-time inventory tracking. Save RM 8,000-12,000 monthly by preventing stockouts and over-ordering.",
      outcome: "10-15% spoilage reduction",
      savings: "RM 8-12k monthly",
      timeline: "30-45 days",
      source: "National Restaurant Association, 2024",
      features: ["Real-time stock alerts", "POS integration", "Spoilage tracking", "Mobile dashboard", "Multi-location sync", "Automated ordering"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Automated Waste Tracking",
      description: "Track 100% of waste automatically and reduce waste by 25-40%. Industry data shows average savings of RM 15,000-25,000 monthly per outlet.",
      outcome: "25-40% waste reduction",
      savings: "RM 15-25k monthly",
      timeline: "60 days",
      source: "World Resources Institute, 2023",
      features: ["Mobile waste logging", "Photo documentation", "Automated categorization", "Trend analysis", "AI-powered insights", "Real-time alerts"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supplier Integration & Auto-Ordering",
      description: "Save 15-20 hours weekly on supplier coordination. Automated ordering prevents stockouts costing RM 5,000-10,000 in lost sales.",
      outcome: "15-20 hrs weekly saved",
      savings: "RM 5-10k monthly",
      timeline: "Immediate",
      source: "Restaurant Operations Study, 2023",
      features: ["Supplier performance tracking", "Automated ordering", "Price comparison", "Quality metrics", "Contract management", "Delivery tracking"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Demand Forecasting",
      description: "Predict demand with 85-95% accuracy. Reduce overproduction by 30-40%, saving RM 10,000-20,000 monthly through precise forecasting.",
      outcome: "85-95% forecast accuracy",
      savings: "RM 10-20k monthly",
      timeline: "30 days",
      source: "McKinsey & Company, 2024",
      features: ["AI demand prediction", "Sales pattern analysis", "Seasonal adjustments", "Order recommendations", "Machine learning optimization", "Predictive analytics"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Compliance Automation",
      description: "Achieve 95-100% regulatory compliance. Save 20-30 hours weekly on paperwork and avoid RM 50,000-250,000 in fines.",
      outcome: "95-100% compliance",
      savings: "20-30 hrs weekly",
      timeline: "Immediate",
      source: "Food Safety Magazine, 2023",
      features: ["Automated compliance reports", "Custom dashboards", "Audit trail", "Regulatory alignment", "Real-time monitoring", "Violation alerts"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Template Solutions + Professional Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Start with our scalable template solutions, then add professional services for custom integrations, 
              dedicated support, and bespoke implementations tailored to your enterprise needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-neutral-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 right-0 bg-teal-600 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                  {service.timeline}
                </div>
                
                <div className="text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-base text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Outcome Metrics */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-neutral-600 mb-1">Outcome</div>
                      <div className="text-lg font-bold text-teal-600">{service.outcome}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 mb-1">Savings</div>
                      <div className="text-lg font-bold text-green-600">{service.savings}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-teal-200 text-center">
                    <div className="text-xs text-neutral-500 italic">Source: {service.source}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-teal-600 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-neutral-500 italic ml-6">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Get Your Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 max-w-4xl mx-auto text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Reduce Waste by 30-40% Within 60 Days
              </h3>
              <p className="text-teal-100 text-lg mb-6">
                Stop losing RM 15,000-25,000 monthly per outlet to preventable waste. Get your free waste audit 
                to see exactly where you're losing money and how much you can save.
              </p>
              
              {/* Value Equation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm opacity-90 mb-1">You're Losing</div>
                    <div className="text-2xl font-bold">RM 15-25k</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Our Solutions</div>
                    <div className="text-2xl font-bold">From RM 2,997</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Your ROI</div>
                    <div className="text-2xl font-bold">5-10x</div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={openModal}
                className="bg-white text-teal-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center group"
              >
                Get Your Free Waste Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-teal-100 text-sm mt-4">
                30-day money-back guarantee • See savings within 60 days • Cancel after 90 days
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default QuickWinServices;