import React from 'react';
import { ArrowLeft, Clock, Zap, Users, BarChart3, Shield, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../SEOHead';

const ServoraDevelopment = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for predictive insights"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Collaboration",
      description: "Seamless workflow management for your entire team"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Real-time Reporting",
      description: "Comprehensive dashboards with live data visualization"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption"
    }
  ];

  const timeline = [
    {
      phase: "Phase 1",
      title: "Core Platform",
      description: "Basic AI analytics and user management",
      status: "In Progress",
      color: "bg-blue-500"
    },
    {
      phase: "Phase 2", 
      title: "Advanced Features",
      description: "Machine learning models and integrations",
      status: "Planned",
      color: "bg-slate-500"
    },
    {
      phase: "Phase 3",
      title: "Enterprise Ready",
      description: "Full deployment with enterprise features",
      status: "Planned", 
      color: "bg-slate-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead
        title="Servora AI - Coming Soon | Advanced Restaurant Analytics Platform"
        description="Servora AI is currently under development. Get early access to Malaysia's most advanced restaurant analytics and AI-powered management platform. Join our waitlist today."
        keywords="Servora AI, restaurant analytics, AI restaurant management, Malaysia restaurant software, coming soon, early access"
        canonicalUrl="/servora-development"
      />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-white hover:text-blue-400 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Servora
        </Link>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
              Servora
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
              <Clock className="w-4 h-4 mr-2" />
              Under Development
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Future of Restaurant Analytics
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building Malaysia's most advanced AI-powered restaurant management platform. 
            Get ready for intelligent insights, predictive analytics, and seamless automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
            <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What's Coming
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Timeline */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Development Roadmap
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className={`w-4 h-4 rounded-full ${item.color} flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="text-xl font-semibold text-white">{item.phase}</h4>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <h5 className="text-lg font-medium text-blue-400 mb-2">{item.title}</h5>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Stay Updated
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Want to be the first to know when Servora launches? Get in touch with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:info@sheerssoft.com"
              className="flex items-center px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg hover:border-blue-400 hover:bg-slate-700 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-white">info@sheerssoft.com</span>
            </a>
            <a 
              href="tel:+60123456789"
              className="flex items-center px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg hover:border-blue-400 hover:bg-slate-700 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 mr-3 text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-white">+60 12-345 6789</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default ServoraDevelopment;
