import React from 'react';
import { ArrowRight, CheckCircle, Globe, Code, Database, Zap, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface WebApplicationDevelopmentProps {
  onBookCall?: () => void;
}

export default function WebApplicationDevelopment({ onBookCall }: WebApplicationDevelopmentProps) {
  const handleBookCall = () => {
    trackCTAClick('web_app', 'Book Free Web App Consultation');
    trackCalendlyOpen('web_app');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  🌐 Web Application Experts
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Build Web Applications That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Scale Your Business</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Custom web applications that automate processes, increase efficiency, 
                and drive growth. Our solutions save businesses 40+ hours per week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free Web App Consultation</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Web Apps Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">40h</div>
                  <div className="text-sm text-gray-600">Weekly Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Web App Solutions</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Custom business applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">E-commerce platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">CRM & ERP systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">API development & integration</span>
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
              Why Your Business Needs Custom Web Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Off-the-shelf software can't handle your unique business processes. Custom solutions deliver real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Manual Processes</h3>
              <p className="text-red-700">
                Your team wastes 40% of their time on manual tasks that could be automated. 
                This costs RM20,000+ monthly in lost productivity.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Data Silos</h3>
              <p className="text-orange-700">
                Information scattered across multiple systems creates confusion, 
                errors, and missed opportunities for growth.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Scalability Issues</h3>
              <p className="text-yellow-700">
                Generic software can't grow with your business. 
                You're limited by features you don't need and missing ones you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Application Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From requirements gathering to deployment, we follow a proven methodology that delivers results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into your business processes and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm">
                Create wireframes and user interface designs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600 text-sm">
                Build your application using modern technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive testing for performance and security.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Deployment</h3>
              <p className="text-gray-600 text-sm">
                Launch and ongoing support for your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">React, Vue.js, Angular, TypeScript</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, Python, PHP, .NET</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Database</h3>
              <p className="text-gray-600 text-sm">MySQL, PostgreSQL, MongoDB</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Application Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your project requirements and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter Web App</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">RM20,000</div>
              <p className="text-gray-600 mb-6">Perfect for small business applications</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 10 pages/features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Responsive design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Basic database integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Web App</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">RM50,000</div>
              <p className="text-gray-600 mb-6">Comprehensive solution for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 25 pages/features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Advanced UI/UX design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">API integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">User management system</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">6 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Web App</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">RM100,000</div>
              <p className="text-gray-600 mb-6">Full-scale enterprise applications</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Unlimited pages/features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Custom architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Advanced integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">12 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business Processes?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book your free consultation and discover how a custom web application can transform your operations.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free Web App Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}