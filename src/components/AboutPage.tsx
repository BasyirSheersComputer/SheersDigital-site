import React from 'react';
import { Award, Users, Target, TrendingUp, Shield, Server, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              ABOUT SHEERS DIGITAL
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Founded on the principle that enterprise-grade IT security shouldn't be exclusive to Fortune 500 companies. 
              We make advanced infrastructure solutions accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">OUR MISSION</h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize enterprise-level IT infrastructure and security solutions, making them 
                accessible and manageable for Malaysian businesses of all sizes. We believe every company 
                deserves robust, secure, and efficient IT systems that drive growth rather than hinder it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reduce security vulnerabilities by up to 85%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Cut IT operational costs by 40%</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Deliver 24/7 proactive monitoring and support</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">OUR STORY</h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Sheers Digital was born from a simple observation: too many Malaysian businesses were 
                struggling with outdated, insecure IT infrastructure that was holding them back from growth.
              </p>
              
              <p className="mb-6">
                Founded by Ahmad Basyir Azahari, a seasoned systems engineer with over 6 years of experience 
                in enterprise IT, our company emerged from the recognition that small and medium businesses 
                deserved the same level of IT sophistication as large corporations.
              </p>
              
              <p className="mb-6">
                After working with major Malaysian enterprises in financial services, healthcare, and 
                manufacturing, Ahmad saw firsthand how proper IT infrastructure could transform business 
                operations. The challenge was making these enterprise-grade solutions accessible and 
                affordable for growing businesses.
              </p>
              
              <p className="mb-6">
                Today, we've helped over 500 companies across Malaysia strengthen their IT infrastructure, 
                with an average reduction of 85% in security incidents and 40% in IT operational costs. 
                Our approach combines deep technical expertise with practical business understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">LEADERSHIP TEAM</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/images/ahmad_basyir.jpg"
                    alt="Ahmad Basyir Azahari"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ahmad Basyir Azahari</h3>
                  <p className="text-lg text-blue-600 mb-4">Founder & Chief Technology Officer</p>
                  <p className="text-gray-700 mb-6">
                    With over 6 years of comprehensive experience in systems engineering and project management, 
                    Ahmad brings deep expertise in Microsoft Identity technologies, virtualization, and 
                    enterprise security. His background includes managing complex multi-forest Active Directory 
                    environments and leading IT infrastructure projects for major Malaysian enterprises.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Education:</strong>
                      <p className="text-gray-600">Bachelor of Engineering, University of Malaya</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Certifications:</strong>
                      <p className="text-gray-600">Microsoft Azure Fundamentals, PMP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">BY THE NUMBERS</h2>
            <p className="text-xl text-blue-100">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100">Companies Secured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <p className="text-blue-100">Reduction in Security Incidents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <p className="text-blue-100">Average Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">OUR VALUES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">
                Every solution we implement prioritizes security and compliance from the ground up.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We measure our performance by your business outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to provide cutting-edge solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We deliver exceptional quality in every project, no matter the size or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;