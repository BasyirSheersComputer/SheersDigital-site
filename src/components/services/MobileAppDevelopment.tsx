import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, Tablet, Zap, Users, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../../utils/analytics';

interface MobileAppDevelopmentProps {
  onBookCall?: () => void;
}

export default function MobileAppDevelopment({ onBookCall }: MobileAppDevelopmentProps) {
  const handleBookCall = () => {
    trackCTAClick('mobile_app', 'Book Free App Consultation');
    trackCalendlyOpen('mobile_app');
    onBookCall?.();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  📱 Mobile App Specialists
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Build Mobile Apps That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Drive Revenue</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your business with custom mobile apps. Our apps generate 
                average ROI of 300% within 12 months for KL businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book Free App Consultation</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Apps Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">300%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.8★</div>
                  <div className="text-sm text-gray-600">App Store Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">App Development Services</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">iOS & Android native apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">Cross-platform development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">UI/UX design & prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-700">App Store optimization</span>
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
              Why Your Business Needs a Mobile App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile commerce is growing 300% faster than e-commerce. Don't get left behind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Customer Engagement</h3>
              <p className="text-blue-700">
                Mobile apps increase customer engagement by 88%. Push notifications 
                have 50% higher open rates than emails.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Revenue Growth</h3>
              <p className="text-green-700">
                Businesses with mobile apps see 20% increase in sales. 
                In-app purchases generate 95% of mobile revenue.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Market Reach</h3>
              <p className="text-purple-700">
                92% of Malaysians use smartphones. Mobile apps provide 
                direct access to your customers' pockets.
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
              Our Proven App Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to App Store launch, we handle everything to ensure your app's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business goals and target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm">
                Creating wireframes and stunning UI/UX designs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600 text-sm">
                Building your app with cutting-edge technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Testing</h3>
              <p className="text-gray-600 text-sm">
                Rigorous testing across all devices and platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600 text-sm">
                App Store submission and launch optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance and feature updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to enterprise solutions, we build apps that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Apps</h3>
              <p className="text-gray-600 mb-4">
                Mobile shopping apps with payment integration, inventory management, and analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product catalog & search</li>
                <li>• Secure payment processing</li>
                <li>• Order tracking & notifications</li>
                <li>• Customer reviews & ratings</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Apps</h3>
              <p className="text-gray-600 mb-4">
                Internal business apps for productivity, communication, and workflow management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Employee management</li>
                <li>• Task & project tracking</li>
                <li>• Document sharing</li>
                <li>• Time & attendance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Apps</h3>
              <p className="text-gray-600 mb-4">
                On-demand service apps connecting customers with service providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time booking</li>
                <li>• GPS tracking & navigation</li>
                <li>• In-app messaging</li>
                <li>• Rating & review system</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Tablet className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Apps</h3>
              <p className="text-gray-600 mb-4">
                Learning management systems and educational content delivery platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Course management</li>
                <li>• Video streaming</li>
                <li>• Progress tracking</li>
                <li>• Interactive quizzes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Apps</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant healthcare apps for patient management and telemedicine.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Patient records</li>
                <li>• Appointment scheduling</li>
                <li>• Telemedicine features</li>
                <li>• Prescription management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored mobile solutions for unique business requirements and workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom features</li>
                <li>• Third-party integrations</li>
                <li>• Scalable architecture</li>
                <li>• Advanced analytics</li>
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
              Mobile App Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic App</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">RM25,000</div>
              <p className="text-gray-600 mb-6">Perfect for simple business apps</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Single platform (iOS or Android)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 10 screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Basic UI/UX design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">3 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional App</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">RM45,000</div>
              <p className="text-gray-600 mb-6">Complete solution for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Cross-platform (iOS & Android)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Up to 25 screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Premium UI/UX design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">API integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">6 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise App</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">RM85,000</div>
              <p className="text-gray-600 mb-6">Advanced features for large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Cross-platform + Web app</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Unlimited screens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Custom UI/UX design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">Advanced integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700">12 months support</span>
                </li>
              </ul>
              <button
                onClick={handleBookCall}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book your free consultation and discover how a mobile app can transform your business.
          </p>
          <button
            onClick={handleBookCall}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold flex items-center space-x-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book Free App Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}