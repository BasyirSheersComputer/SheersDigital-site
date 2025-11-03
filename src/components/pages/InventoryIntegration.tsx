import React from 'react';
import { ArrowRight, CheckCircle, Package, BarChart3, Clock, Users, Zap } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';
import SuccessCases from '../SuccessCases';

const InventoryIntegration = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Inventory Integration System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Real-time inventory management system for F&B businesses. Eliminate stockouts and overstocking with automated ordering and multi-location sync.",
    "offers": {
      "@type": "Offer",
      "price": "8500",
      "priceCurrency": "MYR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Servora"
    },
    "featureList": [
      "Real-time inventory tracking",
      "Automated supplier ordering",
      "Multi-location synchronization",
      "Smart alerts and notifications"
    ]
  };

  return (
    <>
      <SEOHead
        title="Real-Time Inventory Management - Eliminate Stockouts & Overstocking"
        description="Stop losing sales to stockouts and money to over-ordering. Our integrated inventory system gives you real-time visibility and automated ordering to optimize your supply chain. From RM 8,500 • 7 days setup."
        keywords="inventory management Malaysia, restaurant inventory system, stock management, automated ordering, F&B inventory software, real-time tracking, multi-location inventory"
        canonicalUrl="https://sheerssoft.com/inventory-integration"
        structuredData={structuredData}
      />
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Restaurant Inventory Management System Malaysia: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Real-Time Stock Tracking F&B</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop losing sales to stockouts and money to over-ordering. Our <strong>restaurant inventory management system Malaysia</strong> 
                provides <strong>real-time stock tracking F&B</strong> with <strong>automated restaurant ordering system</strong> to optimize your supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('inventory-integration')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Free Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Multi-Location Inventory Software with POS Integration Malaysia
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our comprehensive <strong>restaurant inventory management system</strong> connects all your locations, suppliers, and POS systems 
                for seamless <strong>multi-location inventory software</strong> control and optimization with <strong>POS inventory integration Malaysia</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Real-Time Tracking</h3>
                      <p className="text-slate-600">
                        See your inventory levels across all locations in real-time. 
                        Track stock movements, usage patterns, and reorder points instantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Automated Ordering</h3>
                      <p className="text-slate-600">
                        Set up automatic reorder points and let our system handle supplier orders. 
                        Never run out of ingredients or over-order again.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Multi-Location Sync</h3>
                      <p className="text-slate-600">
                        Manage inventory across all your outlets from one dashboard. 
                        Transfer stock between locations and optimize distribution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Smart Alerts</h3>
                      <p className="text-slate-600">
                        Get instant notifications for low stock, expiring items, and unusual usage patterns. 
                        Stay ahead of inventory issues before they become problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Inventory Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Stockout Prevention</h4>
                      <p className="text-slate-600 text-sm">Never lose sales to missing ingredients</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">99%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Waste Reduction</h4>
                      <p className="text-slate-600 text-sm">Optimize ordering quantities</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">45%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Time Savings</h4>
                      <p className="text-slate-600 text-sm">Automated inventory management</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">6 hours/week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Get Started in 7 Days
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our proven 3-step process gets your inventory system up and running quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Connect Systems</h3>
                <p className="text-slate-600 text-sm">
                  We integrate with your existing POS, accounting, and supplier systems in 3 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Configure Rules</h3>
                <p className="text-slate-600 text-sm">
                  Set up your tracking preferences, alert thresholds, and supplier connections in 3 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Monitor & Optimize</h3>
                <p className="text-slate-600 text-sm">
                  Start seeing results immediately. Our team helps you optimize for maximum savings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases - Conversion optimized */}
        <SuccessCases 
          category="inventory-integration"
          title="Inventory Management: Industry Success Data"
          subtitle="Real results from National Restaurant Association showing the impact of automated inventory systems on F&B operations."
          limit={1}
          showCTA={true}
          onCTAClick={() => openForm('inventory-integration')}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Save RM 8,000-12,000 Monthly Per Outlet
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Get your free demo to see how real-time inventory tracking can reduce spoilage by 10-15% and eliminate stockouts. 
              30-day money-back guarantee.
            </p>
            
            {/* Value Equation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <div className="text-sm opacity-90 mb-1">You're Losing</div>
                  <div className="text-2xl font-bold">RM 8-12k</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Our Cost</div>
                  <div className="text-2xl font-bold">From RM 8,500</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Your ROI</div>
                  <div className="text-2xl font-bold">5-8x</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('inventory-integration')}
                className="bg-white text-teal-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Your Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-teal-100 text-sm mt-4">
              30-day money-back guarantee • See results in 30-45 days • Cancel after 90 days
            </p>
          </div>
        </section>
      </div>
      <Footer />
      
      {/* Solution Form Modal */}
      <SolutionForms
        solution={currentSolution}
        isOpen={isFormOpen}
        onClose={closeForm}
      />
    </>
  );
};

export default InventoryIntegration;
