import React from 'react';
import { ArrowRight, CheckCircle, Shield, Lock, AlertTriangle, Eye, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface CybersecurityProps {
  onBookCall?: () => void;
}

export default function Cybersecurity({ onBookCall }: CybersecurityProps) {
  const handleBookCall = () => {
    trackCTAClick('cybersecurity', 'Book Free Security Audit');
    trackCalendlyOpen('cybersecurity');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  🛡️ Cybersecurity Experts
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Protect Your Business from
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"> Cyber Attacks</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                68% of KL businesses were attacked in 2024. Average cost: RM284,000. 
                Our military-grade security prevents 99.99% of cyber threats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free Security Audit</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">99.99%</div>
                  <div className="text-sm text-gray-600">Attack Prevention</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <div className="text-sm text-gray-600">Successful Breaches</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Security Threats We Stop</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="text-gray-700">Ransomware attacks (avg. cost: RM180,000)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="text-gray-700">Data breaches (avg. cost: RM284,000)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="text-gray-700">Phishing and social engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="text-gray-700">Insider threats and data theft</span>
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
              The Cost of Poor Cybersecurity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day without proper security is a day closer to a devastating cyber attack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/50 border border-red-800 rounded-lg p-6">
              <div className="bg-red-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-200 mb-3">Financial Losses</h3>
              <p className="text-red-300">
                Average cyber attack costs RM284,000 in direct damages, plus lost revenue, 
                legal fees, and regulatory fines.
              </p>
            </div>

            <div className="bg-orange-900/50 border border-orange-800 rounded-lg p-6">
              <div className="bg-orange-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="text-orange-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-3">Reputation Damage</h3>
              <p className="text-orange-300">
                73% of customers stop doing business with companies after a data breach. 
                Recovery takes 2-5 years on average.
              </p>
            </div>

            <div className="bg-yellow-900/50 border border-yellow-800 rounded-lg p-6">
              <div className="bg-yellow-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-yellow-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-200 mb-3">Business Disruption</h3>
              <p className="text-yellow-300">
                Ransomware attacks shut down operations for 23 days on average. 
                60% of small businesses close within 6 months of an attack.
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
              Our 5-Layer Security Defense System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Military-grade protection that stops threats before they reach your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Perimeter Defense</h3>
              <p className="text-gray-600 text-sm">
                Advanced firewalls and intrusion detection systems block threats at the network edge.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Threat Monitoring</h3>
              <p className="text-gray-600 text-sm">
                24/7 AI-powered monitoring detects and responds to threats in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                Military-grade encryption protects data at rest and in transit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Access Control</h3>
              <p className="text-gray-600 text-sm">
                Multi-factor authentication and zero-trust architecture prevent unauthorized access.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Incident Response</h3>
              <p className="text-gray-600 text-sm">
                Rapid response team contains and eliminates threats within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to implementation, we provide end-to-end cybersecurity solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive audit of your current security posture with detailed vulnerability report.
              </p>
              <div className="text-2xl font-bold text-red-600">RM5,000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Firewall & Network Security</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade firewall setup with intrusion detection and prevention systems.
              </p>
              <div className="text-2xl font-bold text-orange-600">RM12,000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Security Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock monitoring with AI-powered threat detection and response.
              </p>
              <div className="text-2xl font-bold text-yellow-600">RM8,000/mo</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Training</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cybersecurity awareness training for all staff members.
              </p>
              <div className="text-2xl font-bold text-green-600">RM3,000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Emergency response service for security incidents with forensic analysis.
              </p>
              <div className="text-2xl font-bold text-blue-600">RM15,000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-red-600">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Security Package</h3>
              <p className="text-gray-600 mb-4">
                All services included with 12 months support and maintenance.
              </p>
              <div className="text-2xl font-bold text-red-600">RM45,000</div>
              <div className="text-sm text-gray-500 line-through">RM55,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait for a Cyber Attack
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Book your free security audit and discover your vulnerabilities before hackers do.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free Security Audit</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}