import React from 'react';
import { ArrowRight, CheckCircle, Shield, FileText, AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useSolutionForm } from '../../hooks/useSolutionForm';
import SolutionForms from '../SolutionForms';

const ComplianceAutomation = () => {
  const { isFormOpen, currentSolution, openForm, closeForm } = useSolutionForm();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Effortless Compliance: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"> Stay Ahead of Regulations</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop worrying about regulatory violations and fines. Our automated compliance system 
                ensures you're always compliant while saving 8+ hours weekly on manual reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openForm('compliance-automation')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
                >
                  Get Free Compliance Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Request Demo
                </button>
              </div>
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
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Massive Time Savings</h3>
                <p className="text-slate-600 mb-4">
                  Reduce compliance reporting time from 8 hours to just 30 minutes weekly. 
                  That's 30+ hours saved monthly for your team.
                </p>
                <div className="text-2xl font-bold text-red-600">30+ hours/month</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">100% Compliance</h3>
                <p className="text-slate-600 mb-4">
                  Never miss a deadline or requirement again. Our system ensures 
                  you're always compliant with current regulations.
                </p>
                <div className="text-2xl font-bold text-orange-600">100% compliance</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Avoid Fines</h3>
                <p className="text-slate-600 mb-4">
                  Prevent costly regulatory fines and penalties. Our system keeps you 
                  ahead of compliance requirements.
                </p>
                <div className="text-2xl font-bold text-green-600">Zero fines</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Compliance?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Stop worrying about regulatory violations. Join hundreds of F&B businesses that have 
              transformed their compliance processes with our automated solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm('compliance-automation')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group"
              >
                Get Free Compliance Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Demo
              </button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              Free consultation • 30-day trial • 100% compliance guarantee
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
