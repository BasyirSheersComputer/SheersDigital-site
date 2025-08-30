import React, { useState } from 'react';
import { ArrowRight, Calculator, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    manualHours: 8,
    employees: 3,
    wasteDisposalCost: 5000,
    manualErrors: 2000
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const currentCost = (formData.manualHours * 50 * 4) + formData.wasteDisposalCost + formData.manualErrors;
    const projectedCost = (formData.manualHours * 0.2 * 50 * 4) + (formData.wasteDisposalCost * 0.6) + (formData.manualErrors * 0.1);
    const savings = currentCost - projectedCost;
    const roi = ((savings / 15000) * 100).toFixed(1);
    
    return {
      currentCost,
      projectedCost,
      savings,
      roi
    };
  };

  const results = calculateROI();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                See Your Savings: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Calculate Your ROI</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Discover exactly how much you can save with WasteWise. Our ROI calculator shows you 
                the potential cost savings and return on investment from implementing our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Tool */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  ROI Calculator Tool
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Input your current waste management costs and see how much you can save with WasteWise.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Fields */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-green-600" />
                    Your Current Costs
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Manual hours spent on waste management per week
                      </label>
                      <input 
                        type="number" 
                        value={formData.manualHours}
                        onChange={(e) => setFormData({...formData, manualHours: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="8"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Number of employees involved in waste management
                      </label>
                      <input 
                        type="number" 
                        value={formData.employees}
                        onChange={(e) => setFormData({...formData, employees: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Average cost of waste disposal per month (RM)
                      </label>
                      <input 
                        type="number" 
                        value={formData.wasteDisposalCost}
                        onChange={(e) => setFormData({...formData, wasteDisposalCost: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="5000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Cost of manual errors per month (RM)
                      </label>
                      <input 
                        type="number" 
                        value={formData.manualErrors}
                        onChange={(e) => setFormData({...formData, manualErrors: parseInt(e.target.value) || 0})}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="2000"
                      />
                    </div>

                    <button 
                      onClick={() => setShowResults(true)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                    >
                      Calculate My ROI
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Results Display */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                    Your Potential Savings
                  </h3>

                  {showResults ? (
                    <div className="space-y-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-bold text-red-800 mb-2">Current Monthly Cost</h4>
                        <div className="text-3xl font-bold text-red-600">RM {results.currentCost.toLocaleString()}</div>
                        <p className="text-red-700 text-sm mt-2">What you're spending now</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-bold text-green-800 mb-2">Projected Monthly Cost</h4>
                        <div className="text-3xl font-bold text-green-600">RM {results.projectedCost.toLocaleString()}</div>
                        <p className="text-green-700 text-sm mt-2">With WasteWise platform</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-bold text-blue-800 mb-2">Monthly Savings</h4>
                        <div className="text-3xl font-bold text-blue-600">RM {results.savings.toLocaleString()}</div>
                        <p className="text-blue-700 text-sm mt-2">Money back in your pocket</p>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h4 className="font-bold text-purple-800 mb-2">ROI Percentage</h4>
                        <div className="text-3xl font-bold text-purple-600">{results.roi}%</div>
                        <p className="text-purple-700 text-sm mt-2">Return on investment</p>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-bold text-slate-800 mb-2">Annual Savings</h4>
                        <div className="text-2xl font-bold text-slate-600">RM {(results.savings * 12).toLocaleString()}</div>
                        <p className="text-slate-600 text-sm">Total yearly savings</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-slate-600">
                        Enter your data on the left to see your potential savings and ROI.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How the Calculation Works */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  How the Calculation Works
                </h2>
                <p className="text-xl text-slate-600">
                  Our ROI calculator uses industry-standard metrics and real data from Malaysian F&B businesses.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Time Savings</h3>
                  <p className="text-slate-600 mb-4">
                    We calculate labor cost savings based on 80% reduction in manual waste management time.
                  </p>
                  <div className="text-2xl font-bold text-green-600">80% reduction</div>
                </div>

                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Waste Reduction</h3>
                  <p className="text-slate-600 mb-4">
                    Average 40% reduction in waste disposal costs through better inventory management.
                  </p>
                  <div className="text-2xl font-bold text-blue-600">40% reduction</div>
                </div>

                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Error Reduction</h3>
                  <p className="text-slate-600 mb-4">
                    90% reduction in manual errors through automated processes and real-time tracking.
                  </p>
                  <div className="text-2xl font-bold text-purple-600">90% reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get your full personalized report and discover how WasteWise can transform your waste management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Get Your Full Report
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Learn More About Our Solutions
              </button>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Free consultation • Detailed analysis • No commitment required
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ROICalculator;
