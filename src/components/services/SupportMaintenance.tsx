import React from 'react';
import { ArrowRight, CheckCircle, Headphones, Clock, Shield, Wrench, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface SupportMaintenanceProps {
  onBookCall?: () => void;
}

export default function SupportMaintenance({ onBookCall }: SupportMaintenanceProps) {
  const handleBookCall = () => {
    trackCTAClick('support_maintenance', 'Book Free Support Assessment');
    trackCalendlyOpen('support_maintenance');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  🛠️ 24/7 Support Specialists
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Never Worry About IT Issues with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> 24/7 Support</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Prevent costly downtime with proactive monitoring and instant support. 
                Our clients experience 99.9% uptime and resolve issues 5x faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free Support Assessment</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">15min</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Services</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">24/7 helpdesk support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Proactive system monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Preventive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Emergency response</span>
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
              The True Cost of IT Downtime
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every minute of downtime costs your business money, productivity, and customer trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900/50 border border-red-800 rounded-lg p-6">
              <div className="bg-red-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-red-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-200 mb-3">Revenue Loss</h3>
              <p className="text-red-300">
                Average downtime costs RM5,600 per minute for small businesses. 
                A 4-hour outage can cost RM1.3 million.
              </p>
            </div>

            <div className="bg-orange-900/50 border border-orange-800 rounded-lg p-6">
              <div className="bg-orange-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-orange-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-3">Productivity Loss</h3>
              <p className="text-orange-300">
                When systems fail, your entire team stops working. 
                Recovery time averages 4-6 hours without proper support.
              </p>
            </div>

            <div className="bg-yellow-900/50 border border-yellow-800 rounded-lg p-6">
              <div className="bg-yellow-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-yellow-200" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-200 mb-3">Customer Impact</h3>
              <p className="text-yellow-300">
                81% of customers will switch to competitors after a poor 
                digital experience caused by system failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Support & Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support packages designed to keep your systems running smoothly 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Helpdesk Support</h3>
              <p className="text-gray-600">
                24/7 technical support via phone, email, and chat with guaranteed response times.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">
                Continuous system monitoring with automated alerts and issue prevention.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600">
                Regular system updates, patches, and optimization to prevent issues.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600">
                Rapid response team for critical issues with guaranteed resolution times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage for all your IT infrastructure and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Headphones className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Support</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hardware troubleshooting</li>
                <li>• Software issue resolution</li>
                <li>• Network connectivity problems</li>
                <li>• User account management</li>
                <li>• Email & communication issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Monitoring</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Server performance monitoring</li>
                <li>• Network uptime tracking</li>
                <li>• Security threat detection</li>
                <li>• Backup verification</li>
                <li>• Capacity planning alerts</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wrench className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance Tasks</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Software updates & patches</li>
                <li>• System optimization</li>
                <li>• Database maintenance</li>
                <li>• Security updates</li>
                <li>• Performance tuning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Response Times</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Critical issues: 15 minutes</li>
                <li>• High priority: 2 hours</li>
                <li>• Medium priority: 4 hours</li>
                <li>• Low priority: 24 hours</li>
                <li>• Scheduled maintenance windows</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting & Analytics</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• Incident tracking & analysis</li>
                <li>• System health dashboards</li>
                <li>• Trend analysis & recommendations</li>
                <li>• SLA compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Backup & Recovery</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated backup monitoring</li>
                <li>• Disaster recovery planning</li>
                <li>• Data restoration services</li>
                <li>• Business continuity support</li>
                <li>• Recovery testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support & Maintenance Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support level that matches your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential Support</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">RM2,500/mo</div>
              <p className="text-gray-600 mb-6">Basic support for small businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Business hours support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Basic monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Monthly maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Email & phone support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Support</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">RM5,500/mo</div>
              <p className="text-gray-600 mb-6">Comprehensive support for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">24/7 support coverage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Proactive monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Weekly maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Priority response</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Monthly reports</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">RM12,000/mo</div>
              <p className="text-gray-600 mb-6">Premium support for mission-critical systems</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Dedicated support team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Advanced monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Daily maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">15-minute response</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Custom SLA</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Experience IT Downtime Again
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Book your free support assessment and discover how we can keep your systems running 24/7.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free Support Assessment</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}