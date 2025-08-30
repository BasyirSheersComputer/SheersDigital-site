import React from 'react';
import { Link } from 'react-router-dom';
import { Package, BarChart3, Users, Brain, FileText, ArrowRight, CheckCircle } from 'lucide-react';

const QuickWinServices = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory & Stock Management Integration",
      description: "Seamlessly connect your existing POS and inventory systems with real-time stock tracking and automated alerts.",
      pain: "Eliminates manual tracking errors and stockouts",
      timeline: "7 days",
      price: "From RM 2,500",
      features: ["Real-time stock alerts", "POS integration", "Automated reporting", "Mobile dashboard"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Waste Logging & Data Capture Automation",
      description: "Implement automated waste data collection using mobile apps and barcode scanning integrated with analytics.",
      pain: "Simplifies daily waste tracking, improves accuracy",
      timeline: "5 days",
      price: "From RM 1,800",
      features: ["Mobile waste logging", "Photo documentation", "Automated categorization", "Weekly insights"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supplier & Procurement System Integration",
      description: "Integrate supplier databases and procurement workflows for better performance tracking and cost comparison.",
      pain: "Reduces procurement costs by 15-20%",
      timeline: "10 days",
      price: "From RM 3,200",
      features: ["Supplier performance tracking", "Cost comparison tools", "Order automation", "Quality metrics"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Driven Demand Forecasting Plug-in",
      description: "Deploy AI forecasting tools that predict demand patterns using your sales and operational data.",
      pain: "Solves overstock/understock issues immediately",
      timeline: "14 days",
      price: "From RM 4,500",
      features: ["AI demand prediction", "Sales pattern analysis", "Seasonal adjustments", "Order recommendations"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Custom Reporting & Compliance Automation",
      description: "Automate regulatory and internal reporting for quick, error-free compliance and transparency.",
      pain: "Cuts 8+ hours of manual reporting weekly",
      timeline: "7 days",
      price: "From RM 2,000",
      features: ["Automated compliance reports", "Custom dashboards", "Audit trail", "Regulatory alignment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Quick-Win Solutions That Pay for Themselves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose any one of our targeted solutions to see immediate results. 
            Each service integrates seamlessly with our WasteWise platform for long-term success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
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

              <Link to="/get-started" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Start This Solution
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              🚀 Fast Track to Success
            </h3>
            <p className="text-blue-700 text-lg mb-6">
              Start with any Quick-Win solution and automatically qualify for 50% off 
              your first year of WasteWise platform subscription.
            </p>
            <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Claim This Offer Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickWinServices;