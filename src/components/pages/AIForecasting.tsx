import React from 'react';
import { ArrowRight, CheckCircle, Brain, TrendingUp, BarChart3, Calendar, Zap, Target } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';
import SuccessCases from '../SuccessCases';

const AIForecasting = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Reduce Overproduction by 30-40% with 85-95% Accurate AI Forecasting
              </h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Stop losing RM 10,000-20,000 monthly to overproduction. Our AI analyzes your sales data, 
                seasonal trends, and market patterns to predict demand with 85-95% accuracy (McKinsey & Company, 2024), 
                helping you save money and reduce waste within 30 days.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white rounded-xl p-6 shadow-sm">
                <div>
                  <div className="text-2xl font-bold text-teal-600">85-95%</div>
                  <div className="text-sm text-neutral-600">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">30-40%</div>
                  <div className="text-sm text-neutral-600">Waste Reduced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">RM 10-20k</div>
                  <div className="text-sm text-neutral-600">Monthly Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">30 days</div>
                  <div className="text-sm text-neutral-600">To Results</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('ai-forecasting')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Your Free AI Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-neutral-500 text-sm mt-4">
                30-day money-back guarantee • See improvements within 30 days
              </p>
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

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Expected Outcomes</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">What You Get</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Forecast Accuracy</span>
                        <span className="font-bold text-teal-600">85-95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Overproduction Reduced</span>
                        <span className="font-bold text-teal-600">30-40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Monthly Savings</span>
                        <span className="font-bold text-teal-600">RM 10,000-20,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Time to Results</span>
                        <span className="font-bold text-teal-600">30 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">ROI</span>
                        <span className="font-bold text-green-600">500-800%</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border border-neutral-200">
                      <p className="text-neutral-700 text-sm">
                        <strong>Industry Data:</strong> AI forecasting accuracy based on McKinsey & Company 2024 research. Savings potential varies by outlet size and current waste levels.
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openForm('ai-forecasting')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                  >
                    Get Your Personalized Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What You'll Achieve
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Specific, measurable outcomes based on industry data from McKinsey & Company and World Resources Institute.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Reduce Overproduction</h3>
                <p className="text-neutral-600 mb-4">
                  Cut overproduction by 30-40% by predicting exactly what you need, when you need it
                </p>
                <div className="text-3xl font-bold text-teal-600 mb-2">30-40%</div>
                <div className="text-sm text-neutral-500">Less waste from overproduction</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Save RM 10-20k Monthly</h3>
                <p className="text-neutral-600 mb-4">
                  Average savings of RM 10,000-20,000 per month per outlet through reduced waste
                </p>
                <div className="text-3xl font-bold text-green-600 mb-2">RM 10-20k</div>
                <div className="text-sm text-neutral-500">Monthly savings per outlet</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">See Results in 30 Days</h3>
                <p className="text-neutral-600 mb-4">
                  Start seeing improvements in forecasting accuracy and waste reduction within the first month
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">30 days</div>
                <div className="text-sm text-neutral-500">To measurable results</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases - Strategically positioned before CTA for conversion */}
        <SuccessCases 
          category="ai-forecasting"
          title="AI Forecasting: Proven Industry Results"
          subtitle="Real data from McKinsey & Company and other reputable sources showing the impact of AI-powered demand forecasting."
          limit={1}
          showCTA={true}
          onCTAClick={() => openForm('ai-forecasting')}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Saving RM 10,000-20,000 Monthly
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Get your free AI assessment to see exactly how much you can save. 30-day money-back guarantee. 
              If you don't see measurable improvements, full refund - no questions asked.
            </p>
            
            {/* Value Equation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <div className="text-sm opacity-90 mb-1">You're Losing</div>
                  <div className="text-2xl font-bold">RM 10-20k</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Our Cost</div>
                  <div className="text-2xl font-bold">From RM 18,500</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Your ROI</div>
                  <div className="text-2xl font-bold">5-8x</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('ai-forecasting')}
                className="bg-white text-teal-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group min-h-[44px] touch-manipulation mobile-button"
              >
                Get Your Free AI Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-teal-100 text-sm mt-4">
              30-day money-back guarantee • See improvements within 30 days • Cancel after 90 days
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
