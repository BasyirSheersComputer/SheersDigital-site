import React from 'react';
import { ArrowRight, CheckCircle, Brain, TrendingUp, BarChart3, Calendar, Zap, Target } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';

const AIForecasting = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();

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
                <button 
                  onClick={() => openForm('ai-forecasting')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Free AI Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Try Demo Forecast
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
                <h3 className="text-2xl font-bold text-slate-800 mb-6">See AI Forecasting in Action</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Sample Forecast Results</h4>
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
                        <span className="font-bold text-purple-600">RM 35,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Forecast Accuracy</span>
                        <span className="font-bold text-indigo-600">95%</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Note:</strong> This is a sample forecast. Get your personalized AI assessment to see your actual results.
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openForm('ai-forecasting')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                  >
                    Get Your Personalized AI Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
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
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join hundreds of Malaysian F&B businesses that have revolutionized their operations 
                with AI-powered forecasting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Increased Profits</h3>
                <p className="text-slate-600 mb-4">
                  Reduce waste by 40% and increase profits by 25% with accurate demand forecasting
                </p>
                <div className="text-2xl font-bold text-indigo-600">+25% profits</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">95% Accuracy</h3>
                <p className="text-slate-600 mb-4">
                  Our AI achieves 95% forecast accuracy, far surpassing traditional methods
                </p>
                <div className="text-2xl font-bold text-purple-600">95% accuracy</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Real-Time Updates</h3>
                <p className="text-slate-600 mb-4">
                  Get instant updates and alerts as market conditions change
                </p>
                <div className="text-2xl font-bold text-green-600">Real-time</div>
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
              <button 
                onClick={() => openForm('ai-forecasting')}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Free AI Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Try Demo Forecast
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              Free consultation • 14-day trial • 95% accuracy guarantee
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

export default AIForecasting;
