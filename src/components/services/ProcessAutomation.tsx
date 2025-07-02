import React from 'react';
import { ArrowRight, CheckCircle, Zap, Cog, BarChart, Clock, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface ProcessAutomationProps {
  onBookCall?: () => void;
}

export default function ProcessAutomation({ onBookCall }: ProcessAutomationProps) {
  const handleBookCall = () => {
    trackCTAClick('process_automation', 'Book Free Automation Audit');
    trackCalendlyOpen('process_automation');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  ⚡ Automation Specialists
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Eliminate 80% of Manual Work with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600"> Smart Automation</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop wasting 25+ hours weekly on repetitive tasks. Our automation solutions 
                free up your team to focus on growth while reducing errors by 95%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free Automation Audit</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">80%</div>
                  <div className="text-sm text-gray-600">Tasks Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">95%</div>
                  <div className="text-sm text-gray-600">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">25h</div>
                  <div className="text-sm text-gray-600">Weekly Time Saved</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Processes We Automate</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Data entry & processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Invoice generation & billing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Report generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Email & communication workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Hidden Cost of Manual Processes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every manual task is costing you money, time, and opportunities. Here's the brutal truth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/50 border border-red-800 rounded-lg p-6">
              <div className="bg-red-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-red-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-200 mb-3">Time Waste</h3>
              <p className="text-red-300">
                Your team spends 40% of their time on repetitive tasks. 
                That's RM15,000+ monthly in wasted salary costs per employee.
              </p>
            </div>

            <div className="bg-orange-900/50 border border-orange-800 rounded-lg p-6">
              <div className="bg-orange-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-orange-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-3">Human Errors</h3>
              <p className="text-orange-300">
                Manual data entry has 1% error rate. In a business processing 10,000 records monthly, 
                that's 100 costly mistakes.
              </p>
            </div>

            <div className="bg-yellow-900/50 border border-yellow-800 rounded-lg p-6">
              <div className="bg-yellow-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Cog className="text-yellow-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-200 mb-3">Scalability Limits</h3>
              <p className="text-yellow-300">
                Manual processes don't scale. As your business grows, 
                you need more people to handle the same tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 4-Step Automation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We identify, design, implement, and optimize automation solutions that deliver immediate ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Process Audit</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current workflows to identify automation opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solution Design</h3>
              <p className="text-gray-600">
                Custom automation workflows designed specifically for your business processes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Seamless deployment with minimal disruption to your current operations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and improvement to maximize efficiency and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Automation We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple task automation to complex workflow orchestration, we handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Processing</h3>
              <p className="text-gray-600 mb-4">
                Automated data collection, validation, transformation, and reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Excel/CSV processing</li>
                <li>• Database synchronization</li>
                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Cog className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                End-to-end business process automation with approval workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Purchase order processing</li>
                <li>• Invoice approval</li>
                <li>• Employee onboarding</li>
                <li>• Document routing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated email campaigns, notifications, and customer communications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Email marketing</li>
                <li>• Customer notifications</li>
                <li>• Follow-up sequences</li>
                <li>• SMS automation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduling Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated appointment booking, resource scheduling, and calendar management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Appointment booking</li>
                <li>• Resource allocation</li>
                <li>• Meeting scheduling</li>
                <li>• Reminder systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600 mb-4">
                Automated testing, validation, and quality assurance processes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data validation</li>
                <li>• Compliance checking</li>
                <li>• Error detection</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated invoicing, payment processing, and financial reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Invoice generation</li>
                <li>• Payment processing</li>
                <li>• Expense tracking</li>
                <li>• Financial reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Automation ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with process automation
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Average Business Savings:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Time saved per week</span>
                    <span className="text-2xl font-bold text-orange-600">25 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Monthly cost savings</span>
                    <span className="text-2xl font-bold text-green-600">RM18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Annual ROI</span>
                    <span className="text-2xl font-bold text-blue-600">400%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Error reduction</span>
                    <span className="text-2xl font-bold text-purple-600">95%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-600 mb-4">RM216K</div>
                  <p className="text-xl text-gray-700 mb-6">Average Annual Savings</p>
                  <button
                    onClick={handleBookCall}
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    Calculate Your Savings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Wasting Time on Manual Tasks
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your free automation audit and discover which processes we can automate to save you 25+ hours weekly.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free Automation Audit</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}