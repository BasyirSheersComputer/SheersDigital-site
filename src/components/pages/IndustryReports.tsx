import React from 'react';
import { ArrowRight, Download, FileText, TrendingUp, Calendar, Users, Globe } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const IndustryReports = () => {
  const reports = [
    {
      title: "The State of Sustainable Waste Management 2024",
      summary: "Comprehensive analysis of waste management trends, regulations, and best practices for Malaysian F&B businesses.",
      thumbnail: "📊",
      category: "Industry Analysis",
      date: "March 2024",
      downloads: "2,847",
      fileSize: "2.3 MB"
    },
    {
      title: "F&B Waste Reduction Strategies Guide",
      summary: "Practical strategies and case studies showing how restaurants can reduce waste by 40% or more.",
      thumbnail: "🍽️",
      category: "Best Practices",
      date: "February 2024",
      downloads: "1,923",
      fileSize: "1.8 MB"
    },
    {
      title: "Regulatory Compliance Handbook 2024",
      summary: "Complete guide to waste management regulations and compliance requirements for Malaysian businesses.",
      thumbnail: "📋",
      category: "Compliance",
      date: "January 2024",
      downloads: "3,156",
      fileSize: "3.1 MB"
    },
    {
      title: "Digital Transformation in F&B Operations",
      summary: "How technology is revolutionizing waste management and operational efficiency in the food industry.",
      thumbnail: "💻",
      category: "Technology",
      date: "December 2023",
      downloads: "1,445",
      fileSize: "2.7 MB"
    },
    {
      title: "Cost-Benefit Analysis: Waste Management Solutions",
      summary: "Detailed financial analysis of implementing automated waste management systems in F&B businesses.",
      thumbnail: "💰",
      category: "Financial",
      date: "November 2023",
      downloads: "2,134",
      fileSize: "1.9 MB"
    },
    {
      title: "Supplier Integration Impact Report",
      summary: "Study on how supplier integration reduces costs and improves efficiency in F&B supply chains.",
      thumbnail: "🔗",
      category: "Supply Chain",
      date: "October 2023",
      downloads: "1,678",
      fileSize: "2.2 MB"
    }
  ];

  const categories = ["All", "Industry Analysis", "Best Practices", "Compliance", "Technology", "Financial", "Supply Chain"];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Insights That Matter: 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Download Our Latest Reports</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stay informed with expert analysis on industry trends, regulations, and best practices. 
                Get the data you need to make smarter business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Browse Reports
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Search reports..." 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category, index) => (
                    <button 
                      key={index}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        index === 0 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Library */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Report Library
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Access our comprehensive collection of industry reports, guides, and research papers. 
                All reports are free to download and share.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{report.thumbnail}</div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {report.category}
                    </span>
                    <span className="text-slate-500 text-sm">{report.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
                    {report.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {report.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      <span>{report.downloads}</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                      {report.fileSize}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center group">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why Our Reports Matter
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get expert insights and data-driven analysis to stay ahead of the competition 
                and make informed business decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Stay Informed</h3>
                <p className="text-slate-600 mb-4">
                  Get expert analysis and industry insights at your fingertips. 
                  Stay current with the latest trends and regulations.
                </p>
                <div className="text-2xl font-bold text-blue-600">Monthly updates</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Gain Competitive Edge</h3>
                <p className="text-slate-600 mb-4">
                  Access data and insights that help you make smarter decisions. 
                  Outperform competitors with better information.
                </p>
                <div className="text-2xl font-bold text-green-600">Data-driven</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Industry Expertise</h3>
                <p className="text-slate-600 mb-4">
                  Reports based on real data from Malaysian F&B businesses. 
                  Relevant insights for your local market.
                </p>
                <div className="text-2xl font-bold text-purple-600">Local focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Never Miss an Update
                  </h2>
                  <p className="text-xl text-slate-600 mb-6">
                    Subscribe to our newsletter and be the first to know about new reports, 
                    industry insights, and exclusive content.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Subscribe
                    </button>
                  </div>
                  
                  <p className="text-slate-600 text-sm mt-4">
                    No spam • Unsubscribe anytime • Privacy protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download our reports to get started, then contact us to learn how Servora 
              can help implement these insights in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center group">
                Subscribe to Our Newsletter
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Contact Us
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Free reports • Expert insights • No commitment required
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IndustryReports;
