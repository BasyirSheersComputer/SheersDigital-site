import React from 'react';
import { ArrowRight, CheckCircle, Globe, Database, Zap, TrendingUp, Users, Shield } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const WasteWisePlatform = () => {
  const platformModules = [
    {
      title: "Inventory Integration",
      description: "Seamless inventory management with real-time tracking and automated alerts.",
      icon: <Database className="w-8 h-8" />,
      color: "blue",
      link: "/inventory-integration"
    },
    {
      title: "Waste Logging Automation",
      description: "Simplify compliance with automated waste tracking and reporting.",
      icon: <Zap className="w-8 h-8" />,
      color: "green",
      link: "/waste-logging-automation"
    },
    {
      title: "Supplier Integration",
      description: "Connect with suppliers for automated ordering and real-time updates.",
      icon: <Users className="w-8 h-8" />,
      color: "purple",
      link: "/supplier-integration"
    },
    {
      title: "AI Forecasting",
      description: "Predict demand with 95% accuracy using advanced machine learning.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "indigo",
      link: "/ai-forecasting"
    },
    {
      title: "Compliance Automation",
      description: "Stay ahead of regulations with automated compliance management.",
      icon: <Shield className="w-8 h-8" />,
      color: "red",
      link: "/compliance-automation"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 text-green-800 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100",
      red: "bg-red-50 border-red-200 text-red-800 hover:bg-red-100"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      indigo: "text-indigo-600",
      red: "text-red-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-green-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Reduce Waste 40-50% and Increase Profit Margins 10-15%
              </h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                The complete WasteWise platform delivers 40-50% waste reduction, RM 35,000-50,000 monthly savings, 
                and 10-15% profit margin increase within 60-90 days. Full operational transformation for multi-location F&B businesses.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div>
                  <div className="text-2xl font-bold text-teal-600">40-50%</div>
                  <div className="text-sm text-neutral-600">Waste Reduced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">RM 35-50k</div>
                  <div className="text-sm text-neutral-600">Monthly Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">10-15%</div>
                  <div className="text-sm text-neutral-600">Margin Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">60-90 days</div>
                  <div className="text-sm text-neutral-600">Full Optimization</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Get Your Free Platform Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-neutral-500 text-sm mt-4">
                60-day RM 30k savings guarantee • Full optimization in 60-90 days
              </p>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Complete Waste Management Ecosystem
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Servora is more than just a platform - it's your complete digital partner for 
                transforming waste management into a competitive advantage.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Why Choose the Servora Platform?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Unified Dashboard</h4>
                      <p className="text-slate-600">
                        Single view of all your waste management operations. Monitor inventory, 
                        track waste, manage suppliers, and ensure compliance from one central location.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Data-Driven Insights</h4>
                      <p className="text-slate-600">
                        Transform raw data into actionable intelligence. Identify waste patterns, 
                        optimize inventory levels, and make informed business decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Scalability</h4>
                      <p className="text-slate-600">
                        Grow with confidence. The platform scales from single locations to multi-site 
                        operations, adapting to your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Platform Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Cost Reduction</h4>
                      <p className="text-slate-600 text-sm">Average savings per business</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">RM 15,000/month</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Waste Reduction</h4>
                      <p className="text-slate-600 text-sm">Average improvement</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Time Savings</h4>
                      <p className="text-slate-600 text-sm">Weekly time saved</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">8+ hours</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Compliance Rate</h4>
                      <p className="text-slate-600 text-sm">Regulatory compliance</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Modules */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Platform Modules
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Each module works independently or together to create a complete waste management solution. 
                Start with what you need, add more as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformModules.map((module, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                  <div className={`${getIconColor(module.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{module.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{module.description}</p>
                  
                  <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Element */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  See the Platform in Action
                </h2>
                <p className="text-xl text-slate-600">
                  Watch how the Servora platform transforms waste management for Malaysian F&B businesses.
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-center">
                <div className="bg-white/10 rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Platform Demo Video
                  </h3>
                  <p className="text-slate-300 mb-6">
                    See how our unified dashboard provides complete visibility and control 
                    over your waste management operations.
                  </p>
                  <button className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto group">
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your F&B Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 250+ premium Malaysian F&B chains with our template platform and professional services approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                View Template Plans
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Professional Services
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Professional: RM 5K/month per 10 outlets • Enterprise: RM 10K/month per 10 outlets
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WasteWisePlatform;
