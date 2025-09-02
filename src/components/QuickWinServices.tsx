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
      title: "Eliminate Stockouts & Overstocking",
      description: "Never run out of ingredients or waste money on excess inventory again with real-time stock tracking and automated alerts.",
      pain: "Eliminates manual tracking errors and stockouts",
      timeline: "7 days",
      price: "From RM 8,500",
      features: ["Real-time stock alerts", "POS integration", "Automated reporting", "Mobile dashboard", "Multi-location sync", "Advanced analytics"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "End Food Waste & Boost Profit Margins",
      description: "Automatically track and eliminate waste to maximize your profitability with mobile apps and barcode scanning.",
      pain: "Simplifies daily waste tracking, improves accuracy",
      timeline: "5 days",
      price: "From RM 6,500",
      features: ["Mobile waste logging", "Photo documentation", "Automated categorization", "Weekly insights", "AI-powered analysis", "Real-time alerts"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Optimize Procurement & Reduce Costs",
      description: "Get the best prices and quality from suppliers while automating orders for better performance tracking.",
      pain: "Reduces procurement costs by 15-20%",
      timeline: "10 days",
      price: "From RM 12,500",
      features: ["Supplier performance tracking", "Cost comparison tools", "Order automation", "Quality metrics", "Contract management", "Payment automation"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predict Demand & Maximize Sales",
      description: "Use AI to forecast customer demand and optimize your menu planning using your sales and operational data.",
      pain: "Solves overstock/understock issues immediately",
      timeline: "14 days",
      price: "From RM 18,500",
      features: ["AI demand prediction", "Sales pattern analysis", "Seasonal adjustments", "Order recommendations", "Machine learning optimization", "Predictive analytics"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automate Compliance & Reduce Risk",
      description: "Stay compliant with regulations while saving time on reporting for quick, error-free compliance and transparency.",
      pain: "Cuts 8+ hours of manual reporting weekly",
      timeline: "7 days",
      price: "From RM 7,500",
      features: ["Automated compliance reports", "Custom dashboards", "Audit trail", "Regulatory alignment", "Real-time monitoring", "Automated submissions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Enterprise Solutions That Transform Operations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose any one of our targeted solutions to see immediate competitive advantage. 
              Each service is powered by our comprehensive WasteWise platform for seamless integration and long-term market dominance.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                  {service.timeline}
                </div>
                
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{service.pain}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-slate-800">{service.price}</span>
                  <span className="text-sm text-slate-500">One-time setup</span>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Transform This Area
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                🚀 Fast Track to Market Dominance
              </h3>
              <p className="text-blue-700 text-lg mb-6">
                Start with any enterprise solution and get immediate access to the full WasteWise platform 
                with advanced analytics, AI insights, and multi-location management included.
              </p>
              <button 
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Claim Your Competitive Advantage
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default QuickWinServices;