import React from 'react';
import { ArrowRight, Search, MessageCircle, Phone, Mail, FileText, Users, HelpCircle, BookOpen } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SupportCenter = () => {
  const supportSections = [
    {
      title: "Knowledge Base/FAQs",
      description: "Searchable database of articles and common questions",
      icon: <Search className="w-8 h-8" />,
      color: "blue",
      link: "#knowledge-base"
    },
    {
      title: "Contact Support",
      description: "Submit a support ticket or get in touch with our team",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "green",
      link: "#contact-support"
    },
    {
      title: "Live Chat",
      description: "Get immediate assistance with live chat support",
      icon: <Users className="w-8 h-8" />,
      color: "purple",
      link: "#live-chat"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share best practices",
      icon: <HelpCircle className="w-8 h-8" />,
      color: "orange",
      link: "#community"
    }
  ];

  const quickLinks = [
    { title: "Implementation Guide", icon: <BookOpen className="w-5 h-5" />, link: "/implementation-guide" },
    { title: "Tutorial Videos", icon: <FileText className="w-5 h-5" />, link: "#tutorials" },
    { title: "API Documentation", icon: <FileText className="w-5 h-5" />, link: "#api-docs" },
    { title: "System Status", icon: <HelpCircle className="w-5 h-5" />, link: "#status" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 text-green-800 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100"
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
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                We're Here to Help: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> The WasteWise Support Center</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get the help you need when you need it. Our comprehensive support resources and expert team 
                are here to ensure your success with WasteWise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Search Knowledge Base
                  <Search className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Submit a Ticket
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Support Sections */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the support option that works best for you. We're here to help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportSections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                  <div className={`${getIconColor(section.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{section.description}</p>
                  
                  <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Quick Links
                </h2>
                <p className="text-xl text-slate-600">
                  Popular resources and frequently accessed support materials.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => (
                  <button key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 text-left group">
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-xl text-slate-600">
                  Get in touch with our support team through your preferred method.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Phone Support</h3>
                  <p className="text-slate-600 mb-4">
                    Speak directly with our support team
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-blue-600">+60 3-1234 5678</div>
                    <div className="text-sm text-slate-600">Mon-Fri: 9AM-6PM (MYT)</div>
                    <div className="text-sm text-slate-600">24/7 for urgent issues</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Email Support</h3>
                  <p className="text-slate-600 mb-4">
                    Send us a detailed message
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-green-600">support@wastewise.my</div>
                    <div className="text-sm text-slate-600">Response within 4 hours</div>
                    <div className="text-sm text-slate-600">Available 24/7</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Live Chat</h3>
                  <p className="text-slate-600 mb-4">
                    Get instant help online
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-purple-600">Chat Now</div>
                    <div className="text-sm text-slate-600">Mon-Fri: 9AM-6PM (MYT)</div>
                    <div className="text-sm text-slate-600">Weekends: 10AM-4PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Ticket Form */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Submit a Support Ticket
                  </h2>
                  <p className="text-slate-600">
                    Need help? Fill out the form below and we'll get back to you quickly.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Low - General question</option>
                      <option>Medium - Feature request</option>
                      <option>High - System issue</option>
                      <option>Urgent - System down</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your issue in detail..."
                    ></textarea>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                    Submit Ticket
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you succeed with WasteWise. 
              Don't hesitate to reach out for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Search Knowledge Base
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Submit a Ticket
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              24/7 support • Expert team • Fast response times
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SupportCenter;
