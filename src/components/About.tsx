import React from 'react';
import { Users, Award, Target, Clock, CheckCircle, TrendingUp, Brain, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Restaurants Using WasteWise', icon: Users },
    { number: '30%', label: 'Average Waste Reduction', icon: Target },
    { number: '95%', label: 'AI Prediction Accuracy', icon: Brain },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  const team = [
    {
      name: 'Ahmad Basyir',
      role: 'Founder & CEO',
      experience: '10+ years in food service tech',
      specialization: 'AI & Machine Learning for Restaurants',
      credentials: 'Stanford AI, Former Google ML Engineer',
      avatar: 'AB'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Product',
      experience: '8+ years in restaurant operations',
      specialization: 'Restaurant Technology & UX Design',
      credentials: 'Former Starbucks Operations Manager',
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Data Scientist',
      experience: '12+ years in predictive analytics',
      specialization: 'Demand Forecasting & Inventory Optimization',
      credentials: 'PhD in Operations Research, MIT',
      avatar: 'MR'
    }
  ];

  const values = [
    {
      title: 'Sustainability First',
      description: 'We believe every restaurant can be profitable while being environmentally responsible. Our AI helps you achieve both.',
      icon: Target
    },
    {
      title: 'Data-Driven Decisions',
      description: 'No more guessing. Our AI analyzes 50+ factors to predict demand with 95% accuracy, eliminating waste and stockouts.',
      icon: Brain
    },
    {
      title: 'Simple & Fast',
      description: 'Get started in minutes, not months. Our mobile-first platform works on any device and requires no technical expertise.',
      icon: Clock
    },
    {
      title: 'Restaurant-Focused',
      description: 'Built by restaurant people, for restaurant people. We understand your challenges because we\'ve lived them.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The AI Platform That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Eliminates Food Waste</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not just another software company. We're the team that's revolutionizing how restaurants 
              manage waste, predict demand, and optimize operations using cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We Built WasteWise
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In 2020, we watched restaurants throw away 30-40% of their food while customers went hungry. 
                  The problem wasn't lack of care - it was lack of data and predictive capabilities.
                </p>
                <p>
                  Traditional inventory management relied on guesswork and manual tracking. 
                  Restaurants were either overstocking (wasting money) or understocking (losing customers).
                </p>
                <p>
                  We decided to solve this with AI. By analyzing weather, events, historical data, and 50+ other factors, 
                  we can predict demand with 95% accuracy, helping restaurants reduce waste by 30% on average.
                </p>
                <p className="font-semibold text-green-600">
                  Today, 500+ restaurants worldwide use WasteWise to save millions annually while serving their communities better.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                To eliminate food waste in restaurants worldwide through AI-powered demand forecasting and 
                intelligent inventory management, making sustainability profitable.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Our Promise</h4>
                <p className="text-green-100 text-sm">
                  Reduce your food waste by 30% in 30 days, or your subscription is free until you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the WasteWise Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep expertise in AI, restaurant operations, and sustainability. 
              We're passionate about solving real problems with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Experience</h4>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Specialization</h4>
                    <p className="text-gray-600 text-sm">{member.specialization}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Credentials</h4>
                    <p className="text-gray-600 text-sm">{member.credentials}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every feature, 
              every decision, and every interaction with our restaurant partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Eliminate Food Waste?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ restaurants worldwide who've reduced waste by 30% and saved thousands monthly.
          </p>
          <button 
            onClick={() => window.location.href = '/signup'}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 text-lg font-semibold"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}