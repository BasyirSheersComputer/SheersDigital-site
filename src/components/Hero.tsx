import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const handleStartTrial = () => {
    trackCTAClick('hero', 'Start Free 30-Day Trial');
    // Redirect to signup/trial page instead of Calendly
    window.location.href = '/signup';
  };

  const handleBookDemo = () => {
    trackCTAClick('hero', 'Book Demo');
    trackCalendlyOpen('hero');
    onBookCall();
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                🚨 STOP Losing $50,000+ Annually to Food Waste
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered Restaurant Waste Management That 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Saves You Money</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              While you're throwing away food and losing profits, your competitors are using AI to predict demand, 
              optimize inventory, and reduce waste by 30%. Join 500+ restaurants already saving thousands monthly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleStartTrial}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Start Free 30-Day Trial</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleBookDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Book Demo</span>
                <Clock size={20} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">30%</div>
                <div className="text-sm text-gray-600">Waste Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$50K</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The 3 Waste Problems Costing You Most:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <DollarSign className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Food Waste & Overproduction</h4>
                    <p className="text-gray-600 text-sm">Losing $15,000-25,000 annually in thrown-away food</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <AlertTriangle className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poor Inventory Management</h4>
                    <p className="text-gray-600 text-sm">Stockouts and overstocking costing $20,000+ yearly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manual Waste Tracking</h4>
                    <p className="text-gray-600 text-sm">Staff spending hours on paperwork instead of customers</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium text-center">
                  ✓ AI solves all 3 problems automatically - No manual work required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}