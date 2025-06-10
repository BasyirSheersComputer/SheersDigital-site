import React from 'react';
import { MapPin, Clock, DollarSign, Users, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Systems Engineer",
      department: "Engineering",
      location: "Kuala Lumpur",
      type: "Full-time",
      salary: "RM 8,000 - RM 12,000",
      description: "Lead infrastructure projects and mentor junior engineers in enterprise environments."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Kuala Lumpur",
      type: "Full-time",
      salary: "RM 10,000 - RM 15,000",
      description: "Design and implement cloud infrastructure solutions for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Kuala Lumpur",
      type: "Full-time",
      salary: "RM 9,000 - RM 13,000",
      description: "Protect client infrastructure and conduct security assessments and audits."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Kuala Lumpur",
      type: "Full-time",
      salary: "RM 7,000 - RM 10,000",
      description: "Manage IT infrastructure projects from conception to delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              JOIN OUR TEAM
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Build the future of IT infrastructure in Malaysia. Work with cutting-edge technology 
              while helping businesses transform their digital capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                VIEW OPEN POSITIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              WHY WORK AT SHEERS DIGITAL?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's transforming how Malaysian businesses approach IT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Growth</h3>
              <p className="text-gray-600">
                Be part of a fast-growing company that's helped 500+ businesses secure their IT infrastructure. 
                Your contributions directly impact our clients' success.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Work with the latest technologies including Azure, VMware, automation tools, and 
                enterprise security solutions. Stay ahead of industry trends.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a team of passionate professionals who support each other's growth. 
                We believe in mentorship, knowledge sharing, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              BENEFITS & PERKS
            </h2>
            <p className="text-xl text-gray-600">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Certification sponsorship (Microsoft, VMware, AWS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Conference attendance and training budget</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Mentorship programs and career coaching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Internal knowledge sharing sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work-Life Balance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Flexible working hours and remote work options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive health and dental coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Annual leave and personal development days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Team building activities and company retreats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              OPEN POSITIONS
            </h2>
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              APPLICATION PROCESS
            </h2>
            <p className="text-xl text-gray-600">
              Our hiring process is designed to be thorough yet respectful of your time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">Submit your resume and cover letter through our online portal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Screen</h3>
              <p className="text-gray-600">Initial conversation with our HR team to discuss your background</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-600">In-depth technical discussion with our engineering team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Final Interview</h3>
              <p className="text-gray-600">Meet with leadership team and discuss culture fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            READY TO JOIN OUR TEAM?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the next step in your career and help us transform IT infrastructure across Malaysia.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            EXPLORE OPPORTUNITIES
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;