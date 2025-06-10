import React from 'react';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Shield } from 'lucide-react';

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              PARTNER WITH SHEERS DIGITAL
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Join forces with Malaysia's leading IT infrastructure specialists. We help businesses 
              scale their technology capabilities while reducing costs and security risks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                BECOME A PARTNER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              WHY PARTNER WITH US?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped 500+ companies reduce security vulnerabilities by 85% and cut IT costs by 40%. 
              Here's what makes us different:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Security Expertise</h3>
              <p className="text-gray-600">
                6+ years of experience in enterprise security, Active Directory, Azure AD, and 
                multi-forest environments. We've secured infrastructure for major Malaysian enterprises.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">
                Our automation and infrastructure optimization strategies have helped clients 
                reduce deployment time by 40% and cut operational costs significantly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Experience</h3>
              <p className="text-gray-600">
                From financial services to healthcare and manufacturing, we understand the unique 
                challenges of different industries and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              PARTNERSHIP OPPORTUNITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Partners</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Joint solution development and integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Co-marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Technical certification and training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Revenue sharing models</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Channel Partners</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reseller and referral programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Sales and technical support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Marketing development funds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Competitive margins and incentives</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                PARTNERSHIP REQUIREMENTS
              </h2>
              <p className="text-xl text-gray-600">
                We're selective about our partnerships to ensure mutual success
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Minimum Qualifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Established business with 3+ years operation</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Technical expertise in IT infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Commitment to customer success</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Alignment with our values and standards</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preferred Qualifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Microsoft or VMware certifications</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Existing client base in target markets</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sales and marketing capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Regional presence in Southeast Asia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            READY TO PARTNER WITH US?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our network of successful partners and start growing your business with 
            enterprise-grade IT solutions.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            START PARTNERSHIP APPLICATION
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;