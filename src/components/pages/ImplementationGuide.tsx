import React from 'react';
import { ArrowRight, Download, BookOpen, Users, Clock, CheckCircle, FileText, Phone } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const ImplementationGuide = () => {
  const guideSections = [
    {
      title: "Planning & Preparation",
      description: "Essential steps to prepare your business for successful implementation.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "blue",
      duration: "1-2 weeks",
      items: [
        "Assess current waste management processes",
        "Identify key stakeholders and decision makers",
        "Set clear implementation goals and KPIs",
        "Prepare your team for change management",
        "Review existing systems and integrations"
      ]
    },
    {
      title: "The Onboarding Process",
      description: "Step-by-step technical setup and system configuration.",
      icon: <Users className="w-8 h-8" />,
      color: "green",
      duration: "3-5 days",
      items: [
        "System installation and configuration",
        "Data migration from existing systems",
        "User account setup and permissions",
        "Integration with POS and inventory systems",
        "Initial testing and validation"
      ]
    },
    {
      title: "Training & Adoption",
      description: "Best practices for training teams and ensuring user adoption.",
      icon: <Clock className="w-8 h-8" />,
      color: "purple",
      duration: "1 week",
      items: [
        "Comprehensive staff training sessions",
        "Role-based training materials",
        "Hands-on practice and simulations",
        "Ongoing support and Q&A sessions",
        "Performance monitoring and feedback"
      ]
    },
    {
      title: "Go-Live & Beyond",
      description: "What to expect after launch and how to continue optimizing.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "orange",
      duration: "Ongoing",
      items: [
        "Go-live support and monitoring",
        "Performance tracking and optimization",
        "Regular system updates and maintenance",
        "Continuous improvement initiatives",
        "Scaling for business growth"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Your Blueprint for Success: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600"> The WasteWise Implementation Guide</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Implementation doesn't have to be complicated. Our comprehensive guide ensures a smooth transition 
                with dedicated support every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Download the Guide
                  <Download className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Complete Implementation Roadmap
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From initial planning to ongoing optimization, our guide covers every aspect of 
                implementing WasteWise in your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Why Our Implementation Process Works
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Proven Methodology</h4>
                      <p className="text-slate-600">
                        Based on successful implementations across 500+ Malaysian F&B businesses. 
                        Tested and refined for maximum success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Dedicated Support</h4>
                      <p className="text-slate-600">
                        Expert team assigned to your implementation. Available throughout the process 
                        to answer questions and provide guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Fast Implementation</h4>
                      <p className="text-slate-600">
                        Complete setup in just 7 days, not months. Minimal disruption to your operations 
                        with maximum results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Implementation Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Planning Phase</h4>
                      <p className="text-slate-600 text-sm">Assessment and preparation</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">1-2 weeks</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Technical Setup</h4>
                      <p className="text-slate-600 text-sm">System installation</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">3-5 days</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Training</h4>
                      <p className="text-slate-600 text-sm">Staff onboarding</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">1 week</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <h4 className="font-bold text-slate-800">Go-Live</h4>
                      <p className="text-slate-600 text-sm">Full operation</p>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">Day 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Guide Sections
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Each section provides detailed instructions, checklists, and best practices 
                to ensure successful implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guideSections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`${getIconColor(section.color)}`}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
                      <p className="text-slate-600 text-sm mb-2">{section.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(section.color)}`}>
                        {section.duration}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Dedicated Support Throughout Implementation
                </h2>
                <p className="text-xl text-slate-600">
                  Our expert team is here to ensure your implementation is smooth and successful.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">24/7 Support</h3>
                  <p className="text-slate-600">
                    Round-the-clock technical support during implementation and beyond.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Dedicated Team</h3>
                  <p className="text-slate-600">
                    Assigned implementation specialist to guide you through every step.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Documentation</h3>
                  <p className="text-slate-600">
                    Comprehensive guides, videos, and resources for ongoing reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Get Your Implementation Guide
                  </h2>
                  <p className="text-xl text-slate-600 mb-6">
                    Download our comprehensive implementation guide and start your journey 
                    to successful waste management transformation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF Guide
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                      Contact Implementation Team
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Free download</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Comprehensive guide</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Expert support included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Implementation?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Download the guide and contact our implementation team to begin your 
              waste management transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Download the Guide
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Contact Implementation Team
              </button>
            </div>
            <p className="text-orange-200 text-sm mt-4">
              Free guide • Expert support • 7-day implementation guarantee
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ImplementationGuide;
