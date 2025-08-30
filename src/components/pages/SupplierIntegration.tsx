import React from 'react';
import { ArrowRight, CheckCircle, Truck, Clock, TrendingUp, Database, Users, DollarSign } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SupplierIntegration = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Streamline Operations: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Connect with Your Suppliers</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Eliminate manual ordering, reduce lead times by 60%, and never run out of ingredients again. 
                Our supplier integration creates a seamless supply chain that saves you time and money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Connect Your Suppliers
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  See a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What It Does */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Transform Your Supply Chain with Smart Integration
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Connect directly with your suppliers' systems for automated ordering, real-time tracking, 
                and collaborative forecasting that benefits both parties.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Automated Ordering</h3>
                      <p className="text-slate-600">
                        Orders are automatically placed when inventory reaches pre-defined thresholds. 
                        No more manual phone calls or emails to suppliers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Real-Time Status Updates</h3>
                      <p className="text-slate-600">
                        Track order status from confirmation to delivery. Get instant notifications 
                        on delays, changes, or delivery confirmations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Shared Data & Reporting</h3>
                      <p className="text-slate-600">
                        Share relevant data with suppliers to improve forecasting accuracy. 
                        Collaborative insights lead to better pricing and availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Supplier Performance Tracking</h3>
                      <p className="text-slate-600">
                        Monitor delivery times, quality metrics, and pricing trends. 
                        Make data-driven decisions about supplier relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Integration Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Reduce Lead Times</h4>
                      <p className="text-slate-600 text-sm">Faster order processing</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">60%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Optimize Stock Levels</h4>
                      <p className="text-slate-600 text-sm">Prevent overstocking</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Strengthen Partnerships</h4>
                      <p className="text-slate-600 text-sm">Better collaboration</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why Supplier Integration Matters
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Traditional supplier relationships are riddled with inefficiencies. 
                Our integration solution transforms these pain points into competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Reduce Lead Times</h3>
                <p className="text-slate-600 mb-4">
                  Automated ordering eliminates manual delays. Get ingredients faster 
                  and reduce the risk of running out during peak hours.
                </p>
                <div className="text-2xl font-bold text-purple-600">60% faster</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Optimize Stock Levels</h3>
                <p className="text-slate-600 mb-4">
                  AI-powered forecasting prevents overstocking and shortages. 
                  Maintain perfect inventory levels automatically.
                </p>
                <div className="text-2xl font-bold text-blue-600">40% reduction</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Strengthen Partnerships</h3>
                <p className="text-slate-600 mb-4">
                  Transparent data sharing builds trust with suppliers. 
                  Collaborative forecasting leads to better pricing and availability.
                </p>
                <div className="text-2xl font-bold text-green-600">Better deals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Success Story: Café Delight Chain
                </h2>
                <p className="text-xl text-slate-600">
                  How a 5-location café chain transformed their supply chain with supplier integration.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      The Challenge
                    </h3>
                    <ul className="text-slate-600 space-y-2 mb-6">
                      <li>• Manual ordering across 5 locations</li>
                      <li>• 3-5 day lead times for ingredients</li>
                      <li>• Frequent stockouts during peak hours</li>
                      <li>• 15% waste due to overordering</li>
                      <li>• 8 hours weekly spent on supplier coordination</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      The Solution
                    </h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Integrated with 12 key suppliers</li>
                      <li>• Automated ordering based on real-time inventory</li>
                      <li>• Centralized dashboard for all locations</li>
                      <li>• AI-powered demand forecasting</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                      Results After 6 Months
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Lead Time Reduction</span>
                        <span className="font-bold text-green-600">60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Waste Reduction</span>
                        <span className="font-bold text-green-600">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Time Saved Weekly</span>
                        <span className="font-bold text-green-600">6 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Cost Savings</span>
                        <span className="font-bold text-green-600">RM 12,000/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Order Fulfillment</span>
                        <span className="font-bold text-green-600">99%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Connect with your suppliers today and start seeing results in just 30 days. 
              Join hundreds of F&B businesses that have revolutionized their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Connect Your Suppliers
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                See a Demo
              </button>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Free consultation • 30-day implementation • 99% supplier compatibility
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SupplierIntegration;
