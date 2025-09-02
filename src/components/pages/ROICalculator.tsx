import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';

const ROICalculator = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    currentWaste: '',
    locations: '',
    employees: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const waste = parseFloat(formData.currentWaste) || 0;
    const locations = parseInt(formData.locations) || 1;
    const employees = parseInt(formData.employees) || 10;

    // Calculate savings based on industry averages
    const wasteReduction = waste * 0.4; // 40% waste reduction
    const timeSavings = (employees * 8 * 4 * 25) / 100; // 8 hours/week, 4 weeks, RM 25/hour
    const totalSavings = wasteReduction + timeSavings;
    const roi = ((totalSavings * 12) / (locations * 5000)) * 100; // Assuming RM 5000 setup cost per location

    setResults({
      wasteReduction,
      timeSavings,
      savings: totalSavings,
      roi: Math.round(roi)
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Calculate Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Waste Management ROI</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                See exactly how much money you're losing to poor waste management and discover 
                your potential savings with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('roi-calculator')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Your Full Report
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More About Our Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Quick ROI Calculator
                </h2>
                <p className="text-xl text-slate-600">
                  Get a quick estimate of your potential savings. For a detailed analysis, get your full report.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Your Business Data</h3>
                    <form onSubmit={calculateROI} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Monthly Revenue (RM)
                        </label>
                        <input 
                          type="number" 
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleInputChange}
                          placeholder="50000" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Current Monthly Waste (RM)
                        </label>
                        <input 
                          type="number" 
                          name="currentWaste"
                          value={formData.currentWaste}
                          onChange={handleInputChange}
                          placeholder="15000" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Number of Locations
                        </label>
                        <input 
                          type="number" 
                          name="locations"
                          value={formData.locations}
                          onChange={handleInputChange}
                          placeholder="2" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Total Employees
                        </label>
                        <input 
                          type="number" 
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          placeholder="25" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Calculate ROI
                      </button>
                    </form>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Your Potential Savings</h3>
                    {results ? (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Monthly Waste Reduction</span>
                          <span className="font-bold text-green-600">RM {results.wasteReduction.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Monthly Time Savings</span>
                          <span className="font-bold text-blue-600">RM {results.timeSavings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Total Monthly Savings</span>
                          <span className="font-bold text-purple-600">RM {results.savings.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Annual ROI</span>
                          <span className="font-bold text-indigo-600">{results.roi}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Yearly Savings</span>
                          <span className="font-bold text-green-600">RM {(results.savings * 12).toLocaleString()}</span>
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
              <button 
                onClick={() => openForm('roi-calculator')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
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
      
      {/* Solution Form Modal */}
      <SolutionForms
        solution={currentSolution}
        isOpen={isFormOpen}
        onClose={closeForm}
      />
    </>
  );
};

export default ROICalculator;
