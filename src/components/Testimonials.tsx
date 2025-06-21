import React from 'react';
import { Star, TrendingUp, Shield, Clock } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dato' Ahmad Rahman",
      company: "Rahman Holdings",
      industry: "Manufacturing",
      result: "Reduced IT costs by 60% in 90 days",
      quote: "Sheers Digital transformed our entire IT infrastructure. We went from constant system crashes to 99.9% uptime. The ROI was immediate - we're saving RM30,000 monthly.",
      metric: "RM360K",
      metricLabel: "Annual Savings",
      avatar: "AR"
    },
    {
      name: "Sarah Lim",
      company: "KL Property Solutions",
      industry: "Real Estate",
      result: "Prevented RM500K cybersecurity breach",
      quote: "Their cybersecurity audit revealed 12 critical vulnerabilities we didn't know existed. Two weeks after implementing their solutions, we blocked 3 major attack attempts.",
      metric: "100%",
      metricLabel: "Attack Prevention",
      avatar: "SL"
    },
    {
      name: "David Tan",
      company: "Tan & Associates Law Firm",
      industry: "Legal Services",
      result: "Automated 80% of document processing",
      quote: "Our team was drowning in paperwork. Now our document processing is fully automated, saving 35 hours per week. We can handle 3x more clients with the same staff.",
      metric: "300%",
      metricLabel: "Productivity Increase",
      avatar: "DT"
    },
    {
      name: "Dr. Priya Sharma",
      company: "Metro Medical Center",
      industry: "Healthcare",
      result: "HIPAA-compliant cloud migration",
      quote: "They migrated our entire patient database to the cloud with zero downtime. Patient data is now secure, accessible, and compliant. Our staff loves the new system.",
      metric: "0",
      metricLabel: "Security Incidents",
      avatar: "PS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real KL Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it. Here's what happens when KL businesses work with us:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs">{testimonial.industry}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                <p className="text-emerald-800 font-semibold text-sm">✅ {testimonial.result}</p>
              </div>

              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{testimonial.metric}</div>
                  <div className="text-xs text-gray-600">{testimonial.metricLabel}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Project Completed</div>
                  <div className="text-sm font-medium text-gray-900">2024</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">200+</h3>
            <p className="text-gray-600">Projects Completed</p>
            <p className="text-gray-500 text-sm mt-2">Across all industries in KL</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-2">98%</h3>
            <p className="text-gray-600">Success Rate</p>
            <p className="text-gray-500 text-sm mt-2">Projects delivered on time</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">24h</h3>
            <p className="text-gray-600">Response Time</p>
            <p className="text-gray-500 text-sm mt-2">Average support response</p>
          </div>
        </div>
      </div>
    </section>
  );
}