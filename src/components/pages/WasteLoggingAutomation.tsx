import React from 'react';
import { ArrowRight, DollarSign, TrendingUp, Target } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';
import { getSEOConfig } from '../../config/seo';
import SuccessCases from '../SuccessCases';

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
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Reduce Food Waste by 25-40% Within 60 Days
              </h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Stop losing RM 15,000-25,000 monthly per outlet to preventable waste. Our automated waste tracking 
                system helps you identify waste sources, reduce waste by 25-40%, and save RM 15,000-25,000 monthly within 60 days. 
                Industry data shows restaurants achieve 25-40% reduction (World Resources Institute, 2023).
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div>
                  <div className="text-2xl font-bold text-teal-600">25-40%</div>
                  <div className="text-sm text-neutral-600">Waste Reduced</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">RM 15-25k</div>
                  <div className="text-sm text-neutral-600">Monthly Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-sm text-neutral-600">Waste Tracked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">60 days</div>
                  <div className="text-sm text-neutral-600">To Results</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('waste-logging-automation')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Your Free Waste Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-neutral-500 text-sm mt-4">
                30-day money-back guarantee • Immediate visibility • Savings in 60 days
              </p>
            </div>
          </div>
        </section>

        {/* Financial Impact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                The Cost of Doing Nothing
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Average Malaysian F&B outlets waste 15-20% of food cost monthly (Ministry of Environment).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Monthly Waste Loss</h3>
                <p className="text-neutral-600 mb-4">
                  Average F&B outlet loses RM 15,000-25,000 monthly to preventable food waste
                </p>
                <div className="text-3xl font-bold text-red-600 mb-2">RM 15-25k</div>
                <div className="text-sm text-neutral-500">Per outlet monthly</div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Profit Impact</h3>
                <p className="text-neutral-600 mb-4">
                  Food waste represents 15-20% of food cost, directly impacting profit margins
                </p>
                <div className="text-3xl font-bold text-orange-600 mb-2">15-20%</div>
                <div className="text-sm text-neutral-500">Of food cost wasted</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Time Wasted</h3>
                <p className="text-neutral-600 mb-4">
                  Manual tracking wastes 10-15 hours weekly without accurate data
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">10-15 hrs</div>
                <div className="text-sm text-neutral-500">Weekly time wasted</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Annual Cost: RM 180,000-300,000 Per Outlet
              </h3>
              <p className="text-red-100 text-lg">
                Money that could go directly to profit, staff bonuses, or business expansion. Every month you wait costs you RM 15,000-25,000 you'll never recover.
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

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Expected Outcomes</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">What You Get</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Waste Reduction</span>
                        <span className="font-bold text-teal-600">25-40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Monthly Savings</span>
                        <span className="font-bold text-teal-600">RM 15,000-25,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Waste Tracking</span>
                        <span className="font-bold text-teal-600">100% Automated</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Time to Results</span>
                        <span className="font-bold text-teal-600">60 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">ROI</span>
                        <span className="font-bold text-green-600">500-800%</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border border-neutral-200">
                      <p className="text-neutral-700 text-sm">
                        <strong>Industry Data:</strong> 25-40% waste reduction based on World Resources Institute 2023 research. Results vary by current waste levels and implementation quality.
                      </p>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                What You'll Achieve
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Specific, measurable outcomes based on industry data from reputable sources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Save RM 15-25k Monthly</h3>
                <p className="text-neutral-600 mb-4">
                  Track 100% of waste automatically and identify reduction opportunities saving RM 15,000-25,000 per outlet monthly
                </p>
                <div className="text-3xl font-bold text-green-600 mb-2">RM 15-25k</div>
                <div className="text-sm text-neutral-500">Monthly savings per outlet</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Reduce Waste 25-40%</h3>
                <p className="text-neutral-600 mb-4">
                  Industry standard: restaurants achieve 25-40% waste reduction within the first year
                </p>
                <div className="text-3xl font-bold text-teal-600 mb-2">25-40%</div>
                <div className="text-sm text-neutral-500">Waste reduction (WRI, 2023)</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">See Results in 60 Days</h3>
                <p className="text-neutral-600 mb-4">
                  Immediate visibility, measurable savings within 60 days of implementation
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">60 days</div>
                <div className="text-sm text-neutral-500">To measurable savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases - Conversion optimized positioning */}
        <SuccessCases 
          category="waste-logging"
          title="Waste Reduction: Real Industry Results"
          subtitle="Data from World Resources Institute and industry leaders showing the impact of automated waste tracking systems."
          limit={1}
          showCTA={true}
          onCTAClick={() => openForm('waste-logging-automation')}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Save RM 15,000-25,000 Monthly Per Outlet
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Get your free waste audit to see exactly where you're losing money. 30-day money-back guarantee. 
              If you don't see measurable improvement, full refund - no questions asked.
            </p>
            
            {/* Value Equation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <div className="text-sm opacity-90 mb-1">You're Losing</div>
                  <div className="text-2xl font-bold">RM 15-25k</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Our Cost</div>
                  <div className="text-2xl font-bold">From RM 6,500</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Your ROI</div>
                  <div className="text-2xl font-bold">5-8x</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('waste-logging-automation')}
                className="bg-white text-teal-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Your Free Waste Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-teal-100 text-sm mt-4">
              30-day money-back guarantee • Immediate visibility • Savings in 60 days
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
