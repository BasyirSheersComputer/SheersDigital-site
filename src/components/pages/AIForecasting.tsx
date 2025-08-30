import React from 'react';
import { ArrowRight, CheckCircle, Brain, TrendingUp, BarChart3, Calendar, Zap, Target } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AIForecasting = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Predict with Precision: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> AI-Powered Forecasting</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop guessing what you'll need tomorrow. Our AI analyzes your historical data to predict 
                demand with 95% accuracy, reducing waste by 40% and boosting profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Explore Our Forecasting Solution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Try Sample Forecast
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How the AI Works */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How Our AI Predicts Your Needs
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our advanced machine learning algorithms analyze multiple data points to provide 
                accurate forecasts that adapt to your business patterns.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Data Analysis</h3>
                      <p className="text-slate-600">
                        Our AI processes historical sales data, seasonal trends, weather patterns, 
                        and operational metrics to identify demand patterns and correlations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Predictive Modeling</h3>
                      <p className="text-slate-600">
                        Advanced algorithms generate accurate forecasts for each product, 
                        considering factors like holidays, events, and market trends.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Scenario Planning</h3>
                      <p className="text-slate-600">
                        Run "what-if" scenarios to prepare for different outcomes. 
                        Test the impact of promotions, weather changes, or supply disruptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Continuous Learning</h3>
                      <p className="text-slate-600">
                        The AI continuously learns from new data, improving accuracy over time. 
                        Your forecasts get better with every prediction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Forecasting Accuracy</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Overall Accuracy</span>
                      <span className="font-bold text-green-600">95%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Waste Reduction</span>
                      <span className="font-bold text-blue-600">40%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Cost Savings</span>
                      <span className="font-bold text-purple-600">RM 15,000/month</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Transform Decision Making with AI Insights
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Move from reactive to proactive management. Our AI forecasting gives you the insights 
                you need to make smarter business decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Smarter Decisions</h3>
                <p className="text-slate-600 mb-4">
                  Make data-driven decisions about inventory, staffing, and promotions. 
                  Eliminate guesswork and optimize resource allocation.
                </p>
                <div className="text-2xl font-bold text-indigo-600">95% accuracy</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Proactive Planning</h3>
                <p className="text-slate-600 mb-4">
                  Anticipate demand spikes and prepare accordingly. 
                  Never be caught off guard by unexpected customer surges.
                </p>
                <div className="text-2xl font-bold text-purple-600">40% reduction</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Reduced Waste</h3>
                <p className="text-slate-600 mb-4">
                  Accurate forecasting means you order exactly what you need. 
                  Minimize food waste and maximize profitability.
                </p>
                <div className="text-2xl font-bold text-green-600">RM 15K saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tool */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Try Our Sample Forecast Calculator
                </h2>
                <p className="text-xl text-slate-600">
                  See how AI forecasting can transform your business. Input your basic data and get a sample forecast.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Your Business Data</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Average Daily Sales (RM)
                        </label>
                        <input 
                          type="number" 
                          placeholder="5000" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Current Waste Percentage
                        </label>
                        <input 
                          type="number" 
                          placeholder="15" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Number of Products
                        </label>
                        <input 
                          type="number" 
                          placeholder="50" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Generate Sample Forecast
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Sample Forecast Results</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Predicted Demand Increase</span>
                        <span className="font-bold text-green-600">+25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Waste Reduction Potential</span>
                        <span className="font-bold text-blue-600">-40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Monthly Cost Savings</span>
                        <span className="font-bold text-purple-600">RM 12,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Forecast Accuracy</span>
                        <span className="font-bold text-indigo-600">95%</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Note:</strong> This is a sample forecast. Actual results may vary based on your specific business data and market conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Predict Your Success?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Stop guessing and start predicting. Join hundreds of F&B businesses that have 
              transformed their operations with AI-powered forecasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Explore Our Forecasting Solution
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Try Sample Forecast
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              Free consultation • 14-day trial • 95% accuracy guarantee
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIForecasting;
