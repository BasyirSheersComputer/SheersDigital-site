import React from 'react';
import { ArrowRight, CheckCircle, Zap, AlertTriangle, Database, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const InventoryIntegration = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Seamless Inventory Management: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Integrated for Efficiency</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop losing money to inventory chaos. Our integrated system provides real-time tracking, 
                automated alerts, and supplier sync to eliminate waste and boost your bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
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

        {/* Key Features & Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why Malaysian F&B Businesses Choose Our Integration
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join 500+ restaurants that have eliminated inventory waste and saved an average of RM 15,000 monthly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Automated Tracking</h3>
                <p className="text-slate-600">
                  Real-time updates when waste is logged or supplies received. No more manual counting errors.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Centralized Dashboard</h3>
                <p className="text-slate-600">
                  Single view of all inventory across multiple locations. Make decisions with confidence.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Smart Alerts</h3>
                <p className="text-slate-600">
                  Low-stock alerts and expiration reminders prevent waste and stockouts automatically.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Supplier Sync</h3>
                <p className="text-slate-600">
                  Direct connection with supplier systems for automated reordering and better pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our streamlined setup process gets you up and running in just 7 days, not months.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Connect Your System</h3>
                <p className="text-slate-600">
                  We integrate with your existing POS and inventory systems in just 2 days. No disruption to your operations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Configure Rules</h3>
                <p className="text-slate-600">
                  Set up your tracking preferences, alert thresholds, and supplier connections in 3 days.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Monitor & Optimize</h3>
                <p className="text-slate-600">
                  Start seeing results immediately. Our team helps you optimize for maximum savings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Real Results from Malaysian Restaurants
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">👨‍🍳</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Ahmad Rahman</h4>
                    <p className="text-slate-600 text-sm">Owner, Nasi Lemak Corner</p>
                  </div>
                </div>
                <p className="text-slate-700 italic mb-4">
                  "The inventory integration saved us RM 8,000 monthly. We now know exactly what we have, 
                  what we need, and when to order. No more guesswork!"
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>45% reduction in waste</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">👩‍💼</div>
                  <div>
                    <h4 className="font-bold text-slate-800">Sarah Lim</h4>
                    <p className="text-slate-600 text-sm">Manager, Café Delight</p>
                  </div>
                </div>
                <p className="text-slate-700 italic mb-4">
                  "Automated supplier ordering means we never run out of ingredients. 
                  Our customers always get their favorite dishes, and we save 6 hours weekly on ordering."
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>99% order fulfillment rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of Malaysian F&B businesses that have eliminated waste and increased profits 
              with our integrated inventory solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Get Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Start Free Trial
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No credit card required • 14-day free trial • Setup in 7 days
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InventoryIntegration;
