import React from 'react';
import { ArrowRight, CheckCircle, Cloud, Server, Shield, Zap, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface CloudMigrationProps {
  onBookCall?: () => void;
}

export default function CloudMigration({ onBookCall }: CloudMigrationProps) {
  const handleBookCall = () => {
    trackCTAClick('cloud_migration', 'Book Free Cloud Assessment');
    trackCalendlyOpen('cloud_migration');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  ☁️ Cloud Migration Specialists
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Migrate to the Cloud
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Without Downtime</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop losing RM25,000+ monthly to outdated systems. Our proven cloud migration process 
                reduces IT costs by 60% while improving performance by 300%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free Cloud Assessment</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Downtime Days</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cloud Migration Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Reduce IT infrastructure costs by 60%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Improve system performance by 300%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Automatic scaling and load balancing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">24/7 monitoring and support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is Your Legacy Infrastructure Costing You Thousands?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day you delay cloud migration, you're losing money to inefficient systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">High Maintenance Costs</h3>
              <p className="text-red-700">
                On-premise servers require constant maintenance, updates, and hardware replacements. 
                Average cost: RM15,000-25,000 monthly.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Poor Performance</h3>
              <p className="text-orange-700">
                Legacy systems slow down operations, frustrate employees, and lose customers. 
                Productivity drops by 40% with outdated infrastructure.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Security Vulnerabilities</h3>
              <p className="text-yellow-700">
                Outdated systems are prime targets for cyber attacks. 
                One breach can cost RM300,000+ in damages and reputation loss.
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
              Our Proven 4-Step Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zero downtime, maximum results. Here's exactly how we migrate your systems to the cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment & Planning</h3>
              <p className="text-gray-600">
                Complete audit of your current infrastructure, identifying migration priorities and creating a detailed roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Architecture Design</h3>
              <p className="text-gray-600">
                Design optimal cloud architecture tailored to your business needs, ensuring scalability and security.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Migration Execution</h3>
              <p className="text-gray-600">
                Seamless data and application migration with zero downtime using our proven methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization & Support</h3>
              <p className="text-gray-600">
                Continuous monitoring, optimization, and 24/7 support to ensure peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Migration Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with guaranteed ROI. Most clients save their investment cost within 6 months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter Migration</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">RM15,000</div>
              <p className="text-gray-600 mb-6">Perfect for small businesses with basic infrastructure</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 5 servers migration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Basic cloud setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">30 days support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Migration</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">RM35,000</div>
              <p className="text-gray-600 mb-6">Comprehensive migration for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 20 servers migration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Advanced cloud architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">90 days support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Performance optimization</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Migration</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">RM75,000</div>
              <p className="text-gray-600 mb-6">Complete enterprise-grade cloud transformation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Unlimited servers migration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Multi-cloud architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">12 months support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">24/7 monitoring</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Cut Your IT Costs by 60%?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free cloud assessment and discover exactly how much you can save with cloud migration.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free Cloud Assessment</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}