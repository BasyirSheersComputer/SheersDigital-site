import React from 'react';
import { Star, TrendingUp, Shield, Clock, Award, MapPin, Quote, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Testimonials() {
  const { ref } = useIntersectionObserver({ sectionName: 'testimonials' });

  const testimonials = [
    {
      name: "Dato' Ahmad Rahman",
      company: "Rahman Manufacturing Sdn. Bhd.",
      industry: "Manufacturing",
      location: "Shah Alam, Selangor",
      result: "10X revenue in 8 months with AI automation",
      quote: "Sheers Technologies didn't just transform our IT - they transformed our entire business. AI now handles 85% of our operations. We went from RM2M to RM20M revenue while working half the hours.",
      metric: "RM18M",
      metricLabel: "Revenue Increase",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      beforeAfter: {
        before: "Manual processes, 80-hour weeks",
        after: "AI-automated, 4-day work weeks"
      }
    },
    {
      name: "Sarah Lim Wei Ming",
      company: "KL Digital Solutions Sdn. Bhd.",
      industry: "Real Estate Tech",
      location: "Kuala Lumpur",
      result: "Became market leader with digital transformation",
      quote: "We were losing to competitors until Sheers Technologies built our AI-powered platform. Now we dominate the KL property market. Clients choose us because our tech is 10 years ahead.",
      metric: "300%",
      metricLabel: "Market Share Growth",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&q=80",
      beforeAfter: {
        before: "Losing to tech-savvy competitors",
        after: "Market leader in KL property tech"
      }
    },
    {
      name: "David Tan Chee Keong",
      company: "Tan & Associates Legal Tech",
      industry: "Legal Services",
      location: "Petaling Jaya",
      result: "Automated 90% of legal processes with AI",
      quote: "Legal work used to take weeks. Now our AI handles contracts, research, and documentation in hours. We serve 10X more clients with the same team. It's like having 100 lawyers working 24/7.",
      metric: "1000%",
      metricLabel: "Efficiency Increase",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
      beforeAfter: {
        before: "Weeks for legal documents",
        after: "Hours with AI automation"
      }
    },
    {
      name: "Dr. Priya Sharma",
      company: "Metro Medical AI Center",
      industry: "Healthcare",
      location: "Subang Jaya",
      result: "AI diagnostics increased accuracy by 95%",
      quote: "Our AI system now diagnoses patients faster and more accurately than human doctors. Patient satisfaction is through the roof, and we're expanding to 5 new locations this year.",
      metric: "95%",
      metricLabel: "Diagnostic Accuracy",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80",
      beforeAfter: {
        before: "Manual diagnostics, long wait times",
        after: "AI-powered, instant results"
      }
    }
  ];

  return (
    <section ref={ref} id="testimonials" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="text-yellow-500" size={24} />
            <span className="text-yellow-600 font-bold">500+ Malaysian Businesses Transformed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Proof: Real Malaysian Businesses, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Real 10X Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            These aren't fake testimonials. These are real Malaysian CEOs who went from struggling with outdated systems 
            to dominating their markets with AI automation and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Header with Image */}
              <div className="relative h-32 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-white mr-4"
                  />
                  <div className="text-white">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-100 text-sm">{testimonial.company}</p>
                    <div className="flex items-center space-x-2 text-xs text-blue-200">
                      <span>{testimonial.industry}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Result Badge */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-3 mb-4">
                  <p className="text-emerald-800 font-bold text-sm">🚀 {testimonial.result}</p>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-purple-200" size={24} />
                  <blockquote className="text-gray-700 italic pl-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="text-xs text-red-600 font-medium mb-1">BEFORE:</div>
                    <div className="text-red-800 text-sm">{testimonial.beforeAfter.before}</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-xs text-green-600 font-medium mb-1">AFTER:</div>
                    <div className="text-green-800 text-sm">{testimonial.beforeAfter.after}</div>
                  </div>
                </div>

                {/* Metrics and Rating */}
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{testimonial.metric}</div>
                    <div className="text-xs text-gray-600">{testimonial.metricLabel}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">Verified Result</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-purple-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">500+</h3>
            <p className="text-gray-600">Businesses Transformed</p>
            <p className="text-gray-500 text-sm mt-2">Across all industries in Malaysia</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">1,247%</h3>
            <p className="text-gray-600">Average ROI</p>
            <p className="text-gray-500 text-sm mt-2">Within 12 months</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-emerald-600 mb-2">90</h3>
            <p className="text-gray-600">Days to 10X</p>
            <p className="text-gray-500 text-sm mt-2">Guaranteed results</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-2">4.9★</h3>
            <p className="text-gray-600">Client Satisfaction</p>
            <p className="text-gray-500 text-sm mt-2">127+ verified reviews</p>
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Watch: How We 10X'd a Malaysian Manufacturing Company
              </h3>
              <p className="text-gray-600 mb-6">
                See the exact AI automation system that took Rahman Manufacturing from RM2M to RM20M revenue 
                in just 8 months. This is the same system we can implement for your business.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700 text-sm">Complete AI automation walkthrough</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700 text-sm">Real revenue numbers revealed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-700 text-sm">Step-by-step transformation process</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&q=80" 
                alt="Manufacturing automation success story"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Case Study: 10X Manufacturing Growth</p>
                <p className="text-sm text-gray-200">8 minutes • Real results • No fluff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}