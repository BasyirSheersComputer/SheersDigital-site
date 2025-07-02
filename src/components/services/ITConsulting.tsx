import React from 'react';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Lightbulb, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface ITConsultingProps {
  onBookCall?: () => void;
}

export default function ITConsulting({ onBookCall }: ITConsultingProps) {
  const handleBookCall = () => {
    trackCTAClick('it_consulting', 'Book Free IT Strategy Session');
    trackCalendlyOpen('it_consulting');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  🎯 IT Strategy Experts
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"> Strategic IT Consulting</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop making costly IT decisions in the dark. Our strategic consulting 
                helps KL businesses save RM50,000+ annually while accelerating growth by 200%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free IT Strategy Session</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">150+</div>
                  <div className="text-sm text-gray-600">Strategies Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200%</div>
                  <div className="text-sm text-gray-600">Growth Acceleration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">RM50K</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">IT Consulting Services</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">IT strategy & roadmap development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Technology assessment & optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Digital transformation planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Vendor selection & management</span>
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
              Why Most IT Decisions Fail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without proper strategy, businesses waste millions on technology that doesn't deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">No Strategic Alignment</h3>
              <p className="text-red-700">
                IT decisions made in isolation from business goals result in 
                wasted investments and missed opportunities.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Technology Debt</h3>
              <p className="text-orange-700">
                Outdated systems and poor architecture choices create 
                technical debt that costs RM25,000+ monthly to maintain.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Lack of Expertise</h3>
              <p className="text-yellow-700">
                Internal teams lack the strategic perspective needed to make 
                optimal technology decisions for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic IT Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that aligns technology with business objectives for maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Analysis</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into your business goals, challenges, and growth plans.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">IT Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of current technology infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600 text-sm">
                Create aligned IT strategy with clear roadmap and priorities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed execution plan with timelines and resource requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Continuous guidance and strategy refinement as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Consulting Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services covering all aspects of IT strategy and implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IT Strategy & Planning</h3>
              <p className="text-gray-600 mb-4">
                Develop comprehensive IT strategies aligned with business objectives and growth plans.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology roadmap development</li>
                <li>• Budget planning & optimization</li>
                <li>• Risk assessment & mitigation</li>
                <li>• Performance metrics & KPIs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Guide your organization through digital transformation initiatives for competitive advantage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Process digitization</li>
                <li>• Technology modernization</li>
                <li>• Change management</li>
                <li>• ROI measurement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of current technology stack and optimization recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infrastructure audit</li>
                <li>• Performance analysis</li>
                <li>• Security assessment</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vendor Management</h3>
              <p className="text-gray-600 mb-4">
                Strategic vendor selection, contract negotiation, and relationship management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vendor evaluation & selection</li>
                <li>• Contract negotiation</li>
                <li>• Performance monitoring</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Governance</h3>
              <p className="text-gray-600 mb-4">
                Ensure IT operations comply with industry regulations and best practices.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regulatory compliance</li>
                <li>• IT governance framework</li>
                <li>• Policy development</li>
                <li>• Audit preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Implement data-driven decision making with advanced analytics and reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data strategy development</li>
                <li>• Analytics implementation</li>
                <li>• Dashboard creation</li>
                <li>• Insights & recommendations</li>
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
              IT Consulting Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible consulting options to match your strategic needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Assessment</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">RM8,000</div>
              <p className="text-gray-600 mb-6">Comprehensive IT strategy evaluation</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Current state assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Gap analysis report</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Strategic recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">30-day follow-up</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">RM25,000</div>
              <p className="text-gray-600 mb-6">Complete IT strategy development</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Comprehensive assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">3-year strategic roadmap</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Implementation plan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Budget & ROI projections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">90-day support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Advisory</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">RM12,000/mo</div>
              <p className="text-gray-600 mb-6">Continuous strategic guidance</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Monthly strategy sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Quarterly reviews</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Priority email support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Technology recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Vendor negotiations</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Align IT with Your Business Goals?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book your free IT strategy session and discover how to maximize your technology ROI.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free IT Strategy Session</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}