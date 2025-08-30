import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, QrCode, Clock, FileText, Shield, TrendingDown } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const WasteLoggingAutomation = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Simplify Compliance: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Automate Your Waste Logging</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop wasting 8+ hours weekly on manual waste tracking. Our automated system ensures 
                compliance accuracy while saving you time and reducing human error by 95%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Request Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Functionality */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How Our Automated Waste Logging Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From scan to report in seconds. Our system eliminates manual data entry and ensures 
                regulatory compliance automatically.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Barcode/QR Code Scanning</h3>
                      <p className="text-slate-600">
                        Simply scan items with your smartphone or tablet. Our system instantly recognizes 
                        products and auto-fills all required information for compliance reporting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Mobile-First Design</h3>
                      <p className="text-slate-600">
                        Log waste anywhere, anytime with our intuitive mobile app. Works offline and 
                        syncs automatically when connection is restored.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Automated Data Entry</h3>
                      <p className="text-slate-600">
                        No more manual typing. Our AI automatically categorizes waste types, calculates 
                        quantities, and generates compliance reports in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Customizable Waste Streams</h3>
                      <p className="text-slate-600">
                        Configure waste categories specific to your business. Track food waste, packaging, 
                        and hazardous materials with custom reporting templates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Before vs After</h3>
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Manual Process (Before)</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• 8+ hours weekly on data entry</li>
                      <li>• 15% error rate in reporting</li>
                      <li>• Risk of compliance violations</li>
                      <li>• Delayed insights and reporting</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Automated Process (After)</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• 2 minutes daily for scanning</li>
                      <li>• 95% reduction in errors</li>
                      <li>• Guaranteed compliance</li>
                      <li>• Real-time insights and alerts</li>
                    </ul>
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
                Transform Your Waste Management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join 300+ Malaysian F&B businesses that have revolutionized their waste tracking 
                and compliance processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Massive Time Savings</h3>
                <p className="text-slate-600 mb-4">
                  Reduce waste logging time from 8 hours to just 2 minutes daily. 
                  That's 40+ hours saved monthly for your team.
                </p>
                <div className="text-2xl font-bold text-green-600">40+ hours/month</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Improved Accuracy</h3>
                <p className="text-slate-600 mb-4">
                  Eliminate human error with automated data capture. 
                  Achieve 95% accuracy in waste reporting and compliance.
                </p>
                <div className="text-2xl font-bold text-blue-600">95% accuracy</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Enhanced Reporting</h3>
                <p className="text-slate-600 mb-4">
                  Generate detailed compliance reports instantly. 
                  Track trends and identify waste reduction opportunities.
                </p>
                <div className="text-2xl font-bold text-purple-600">Real-time reports</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Flow */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The Complete Waste Logging Flow
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From waste identification to compliance reporting - all automated and seamless.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Scan Item</h3>
                <p className="text-slate-600 text-sm">
                  Use smartphone to scan barcode or QR code on waste item
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Auto-Fill Data</h3>
                <p className="text-slate-600 text-sm">
                  System automatically populates all required information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Categorize</h3>
                <p className="text-slate-600 text-sm">
                  AI categorizes waste type and calculates quantities
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Generate Report</h3>
                <p className="text-slate-600 text-sm">
                  Compliance reports generated automatically in real-time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Waste Logging?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Stop wasting time on manual processes. Join hundreds of businesses that have 
              transformed their waste management with our automated solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Learn More
              </button>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Free consultation • No setup fees • 30-day money-back guarantee
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WasteLoggingAutomation;
