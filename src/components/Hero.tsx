import React, { useState } from 'react';
import { ArrowRight, Download, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <section id="home" className="relative bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight uppercase tracking-tight">
            Do You Want to Secure Your IT Infrastructure?
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Learn from the team that has helped 500+ companies reduce security vulnerabilities by 85% and cut IT costs by 40%.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setShowLeadForm(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 uppercase"
            >
              Learn to Secure
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <p className="text-gray-700">Reduce security vulnerabilities by up to 85%</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <p className="text-gray-700">Cut IT maintenance costs by 40%</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <p className="text-gray-700">24/7 proactive monitoring & support</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <p className="text-gray-600">Clients Secured</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
            <p className="text-gray-600">Fewer Breaches</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">$10M+</div>
            <p className="text-gray-600">Client Savings</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
            <p className="text-gray-600">Cost Reduction</p>
          </div>
        </div>
      </div>

      {showLeadForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free IT Security Assessment</h3>
            <p className="text-gray-600 mb-6">
              Worth $2,500 - Yours Free. Includes:
              <ul className="mt-3 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Complete infrastructure audit
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Security vulnerability report
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Cost reduction recommendations
                </li>
              </ul>
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Your Free Assessment
              </button>
            </form>
            
            <button
              onClick={() => setShowLeadForm(false)}
              className="mt-4 w-full px-6 py-3 text-gray-600 hover:text-gray-800"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;