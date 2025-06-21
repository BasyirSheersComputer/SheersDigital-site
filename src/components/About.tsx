import React from 'react';
import { Users, Award, Target, Clock, CheckCircle, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '200+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '24h', label: 'Response Time', icon: Clock },
    { number: '5 Years', label: 'Industry Experience', icon: TrendingUp }
  ];

  const team = [
    {
      name: 'Raj Kumar',
      role: 'Founder & CEO',
      experience: '15+ years in enterprise IT',
      specialization: 'Cloud Architecture & Digital Transformation',
      credentials: 'AWS Certified Solutions Architect, PMP',
      avatar: 'RK'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Cybersecurity',
      experience: '12+ years in cybersecurity',
      specialization: 'Enterprise Security & Compliance',
      credentials: 'CISSP, CISM, ISO 27001 Lead Auditor',
      avatar: 'SC'
    },
    {
      name: 'Ahmad Faiz',
      role: 'Lead Automation Engineer',
      experience: '10+ years in process automation',
      specialization: 'Business Process Automation & Integration',
      credentials: 'Microsoft Certified: Azure Solutions Architect',
      avatar: 'AF'
    }
  ];

  const values = [
    {
      title: 'Results-Driven',
      description: 'We measure success by your ROI, not hours billed. Every project must deliver measurable business value.',
      icon: Target
    },
    {
      title: 'Transparency',
      description: 'No hidden costs, no technical jargon. We explain everything in plain English and deliver exactly what we promise.',
      icon: CheckCircle
    },
    {
      title: 'Speed',
      description: 'Time is money. We deliver solutions in 30-90 days, not 6-12 months like traditional IT companies.',
      icon: Clock
    },
    {
      title: 'Partnership',
      description: 'We become an extension of your team, not just another vendor. Your success is our success.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The IT Problem Solvers
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> KL Trusts</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not your typical IT company. We're the team that fixes what others can't, 
              delivers what others won't, and guarantees results that others don't dare promise.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Why We Started Sheers Digital
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In 2019, we watched too many KL businesses struggle with the same 3 IT problems: 
                  outdated systems draining profits, security vulnerabilities threatening their future, 
                  and manual processes killing productivity.
                </p>
                <p>
                  Traditional IT companies were charging premium prices for mediocre results, 
                  taking 6-12 months for projects that should take weeks, and speaking in technical 
                  jargon that left business owners confused and frustrated.
                </p>
                <p>
                  We decided to do things differently. We focus on solving problems, not selling products. 
                  We deliver results in 30-90 days, not quarters. We speak in ROI, not technical specifications.
                </p>
                <p className="font-semibold text-blue-600">
                  Today, we've helped 200+ KL businesses save millions in IT costs while scaling faster than ever.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                To eliminate the 3 biggest IT problems that prevent KL businesses from scaling, 
                so they can focus on what they do best: growing their business.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Our Promise</h4>
                <p className="text-blue-100 text-sm">
                  Every project delivers measurable ROI within 90 days, or we work for free until it does.
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
              Meet the Problem Solvers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of enterprise IT experience with a startup mentality. 
              We move fast, think strategically, and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
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
              These aren't just words on a wall. They're the principles that guide every decision, 
              every project, and every client interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Solve Your IT Problems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 200+ KL businesses who've eliminated their biggest IT headaches and scaled faster than ever.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg font-semibold">
            Book Your Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
}