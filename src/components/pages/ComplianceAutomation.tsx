import React from 'react';
import { ArrowRight, CheckCircle, Shield, FileText, AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';
import SuccessCases from '../SuccessCases';

const ComplianceAutomation = () => {
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
                Achieve 95-100% Compliance and Avoid RM 50,000-250,000 in Fines
              </h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Stop worrying about regulatory violations. Our automated compliance system achieves 95-100% regulatory compliance, 
                saves 20-30 hours weekly on paperwork (60-75% time reduction), and helps you avoid costly RM 50,000-250,000 fines. 
                Industry data shows 60-75% reduction in compliance time (Food Safety Magazine, 2023).
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div>
                  <div className="text-2xl font-bold text-teal-600">95-100%</div>
                  <div className="text-sm text-neutral-600">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">60-75%</div>
                  <div className="text-sm text-neutral-600">Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">20-30 hrs</div>
                  <div className="text-sm text-neutral-600">Weekly Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">Immediate</div>
                  <div className="text-sm text-neutral-600">Results</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('compliance-automation')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Your Free Compliance Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-neutral-500 text-sm mt-4">
                30-day money-back guarantee • Immediate compliance • Zero violations
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Automated Compliance That Works for You
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our comprehensive compliance automation system handles all regulatory requirements 
                while you focus on running your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Automated Reporting</h3>
                      <p className="text-slate-600">
                        Generate pre-formatted reports for all regulatory bodies automatically. 
                        No more manual data compilation or formatting errors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Real-Time Audit Trails</h3>
                      <p className="text-slate-600">
                        Maintain unalterable logs of all waste activities. Complete transparency 
                        and traceability for regulatory inspections.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Regulation Updates</h3>
                      <p className="text-slate-600">
                        Stay current with automatic updates on regulatory changes. 
                        Never miss important compliance deadlines or new requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Smart Alerts & Reminders</h3>
                      <p className="text-slate-600">
                        Get timely notifications for upcoming deadlines, required actions, 
                        and potential compliance issues before they become problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      What's Included in Your Assessment
                    </h3>
                    <ul className="text-slate-700 space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>Current compliance status evaluation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>Risk assessment and mitigation strategies</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>Regulatory requirement checklist</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>Implementation roadmap</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>Cost-benefit analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                      Get Your Free Assessment
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 text-center">
                      Get your personalized compliance roadmap and stop worrying about regulatory violations.
                    </p>
                    <button 
                      onClick={() => openForm('compliance-automation')}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Get Free Assessment
                    </button>
                    <p className="text-slate-600 text-sm mt-4 text-center">
                      No spam • Instant access • No commitment required
                    </p>
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
                Transform Your Compliance Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join hundreds of Malaysian F&B businesses that have automated their compliance 
                and eliminated regulatory worries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Save 20-30 Hours Weekly</h3>
                <p className="text-neutral-600 mb-4">
                  Reduce compliance paperwork time by 60-75%, saving 20-30 hours weekly on manual reporting
                </p>
                <div className="text-3xl font-bold text-teal-600 mb-2">20-30 hrs</div>
                <div className="text-sm text-neutral-500">Weekly time saved</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">95-100% Compliance</h3>
                <p className="text-neutral-600 mb-4">
                  Virtually eliminate regulatory violations through automated tracking and alerts
                </p>
                <div className="text-3xl font-bold text-green-600 mb-2">95-100%</div>
                <div className="text-sm text-neutral-500">Compliance rate</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Avoid RM 50-250k in Fines</h3>
                <p className="text-neutral-600 mb-4">
                  Never miss a regulatory requirement - prevent costly violations and fines
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">RM 50-250k</div>
                <div className="text-sm text-neutral-500">Potential fines avoided</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <SuccessCases 
          category="compliance-automation"
          title="Compliance Automation: Industry Results"
          subtitle="Real data from Food Safety Magazine showing the impact of automated compliance tracking on F&B operations."
          limit={1}
          showCTA={true}
          onCTAClick={() => openForm('compliance-automation')}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Achieve 95-100% Compliance Immediately
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Get your free compliance assessment. Save 20-30 hours weekly and avoid RM 50,000-250,000 in fines. 
              30-day money-back guarantee.
            </p>
            
            {/* Value Equation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <div className="text-sm opacity-90 mb-1">Time Wasted</div>
                  <div className="text-2xl font-bold">20-30 hrs</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Fine Risk</div>
                  <div className="text-2xl font-bold">RM 50-250k</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Time Saved</div>
                  <div className="text-2xl font-bold">60-75%</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('compliance-automation')}
                className="bg-white text-teal-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Your Free Compliance Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-teal-100 text-sm mt-4">
              30-day money-back guarantee • Immediate compliance • Zero risk
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

export default ComplianceAutomation;
