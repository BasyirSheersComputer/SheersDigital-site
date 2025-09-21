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
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-bl-lg text-xs sm:text-sm font-semibold">
                  {service.timeline}
                </div>
                
                <div className="text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                
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

                <div className="space-y-3 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-800">Template Solution</span>
                      <span className="text-sm text-slate-500">Included in plans</span>
                    </div>
                    <div className="text-sm text-slate-600 mt-1">Core features, standard integrations, basic support</div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-800">Professional Services</span>
                      <span className="text-lg font-bold text-slate-800">{service.price}</span>
                    </div>
                    <div className="text-sm text-slate-600 mt-1">Custom implementation, dedicated support, bespoke integrations</div>
                  </div>
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
                🎯 Template Platform + Professional Services
              </h3>
              <p className="text-blue-700 text-lg mb-6">
                Get started with our scalable template platform (Professional or Enterprise plans), 
                then add professional services for custom implementations, dedicated support, and bespoke integrations.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Template Platform</h4>
                  <p className="text-sm text-blue-600">Professional: RM 5,000/month per 10 outlets</p>
                  <p className="text-sm text-blue-600">Enterprise: RM 10,000/month per 10 outlets</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Professional Services</h4>
                  <p className="text-sm text-yellow-600">Implementation: RM 100K-200K+ one-time</p>
                  <p className="text-sm text-yellow-600">Account Manager: RM 15K-25K/month</p>
                </div>
              </div>
              <button 
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Discuss Your Enterprise Needs
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