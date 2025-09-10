import React from 'react';
import { ArrowRight, DollarSign, TrendingUp, Target } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';
import { getSEOConfig } from '../../config/seo';

const WasteLoggingAutomation = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();
  const seoConfig = getSEOConfig('wasteLoggingAutomation');

  return (
    <>
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonicalUrl={seoConfig.canonicalUrl}
        structuredData={seoConfig.structuredData}
      />
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-white to-green-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Stop Losing 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600"> RM 25,000+ Monthly</span>
                <br />to Food Waste
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Premium F&B chains hemorrhage money through preventable food waste. Our automated waste logging 
                system eliminates waste tracking errors and boosts your profit margins by 15-20% in 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('waste-logging-automation')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Your Free Waste Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Calculate Your Savings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Impact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The Hidden Cost of Poor Waste Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every RM 1,000 in food waste costs you RM 3,000 in lost revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Direct Food Loss</h3>
                <p className="text-slate-600 mb-4">
                  Average F&B outlet loses RM 15,000-25,000 monthly to expired ingredients
                </p>
                <div className="text-2xl font-bold text-red-600">RM 15K-25K/month</div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Profit Margin Erosion</h3>
                <p className="text-slate-600 mb-4">
                  Food waste directly reduces your profit margins by 15-20%
                </p>
                <div className="text-2xl font-bold text-orange-600">15-20% margin loss</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Management Time Waste</h3>
                <p className="text-slate-600 mb-4">
                  Your team wastes 8+ hours weekly on manual tracking
                </p>
                <div className="text-2xl font-bold text-blue-600">8+ hours/week</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Total Monthly Loss: RM 25,000+
              </h3>
              <p className="text-red-100 text-lg">
                This is money that could be reinvested in marketing, staff training, or new menu development
              </p>
            </div>
          </div>
        </section>

        {/* Core Solution */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How We Turn Waste into Profit
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our automated waste logging system eliminates waste tracking errors and gives you 
                real-time insights to optimize your inventory and boost profitability.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Instant Waste Capture</h3>
                      <p className="text-slate-600">
                        Scan items with your smartphone to instantly log waste. No more manual data entry 
                        or forgotten waste items that eat into your profits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Real-Time Profit Insights</h3>
                      <p className="text-slate-600">
                        See exactly how much money you're losing to waste in real-time. Track trends 
                        and identify which menu items are killing your profit margins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Predictive Ordering</h3>
                      <p className="text-slate-600">
                        AI-powered insights help you order the right quantities. Reduce over-ordering 
                        by 40% and eliminate stockouts that cost you sales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Profit Recovery Journey</h3>
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Current State (Losing Money)</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• RM 25,000+ monthly food waste losses</li>
                      <li>• 15-20% profit margin erosion</li>
                      <li>• 8+ hours weekly on manual tracking</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">With WasteWise (Profit Recovery)</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• RM 20,000+ monthly savings from waste reduction</li>
                      <li>• 15-20% profit margin recovery</li>
                      <li>• 2 minutes daily for waste logging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Results */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Proven Results: From Loss to Profit
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how Malaysian F&B businesses have transformed waste into profit with our system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Average Monthly Savings</h3>
                <p className="text-slate-600 mb-4">
                  Our clients save an average of RM 20,000+ monthly by eliminating preventable food waste
                </p>
                <div className="text-2xl font-bold text-green-600">RM 20K+/month</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Profit Margin Recovery</h3>
                <p className="text-slate-600 mb-4">
                  Recover 15-20% of your profit margins within 30 days of implementation
                </p>
                <div className="text-2xl font-bold text-blue-600">15-20% recovery</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Implementation Speed</h3>
                <p className="text-slate-600 mb-4">
                  Start seeing results in just 5 days. Full system optimization within 30 days
                </p>
                <div className="text-2xl font-bold text-purple-600">5 days to results</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Stop Losing RM 25,000+ Monthly?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Transform your waste management from a profit killer to a profit generator. 
              Get your free waste audit and see exactly how much you're losing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('waste-logging-automation')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Free Waste Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Calculate Your Savings
              </button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              Free consultation • No setup fees • 30-day money-back guarantee
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

export default WasteLoggingAutomation;
