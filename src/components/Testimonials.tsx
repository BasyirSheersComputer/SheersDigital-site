import React from 'react';
import { Star, TrendingUp, Shield, Clock, DollarSign, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Testimonials() {
  const { ref } = useIntersectionObserver({ sectionName: 'testimonials' });

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Green Bites Cafe",
      industry: "Coffee Chain",
      result: "Reduced food waste by 35% in 30 days",
      quote: "WasteWise transformed how we manage inventory. The AI predictions are incredibly accurate - we've eliminated overproduction and never run out of popular items anymore.",
      metric: "$12K",
      metricLabel: "Annual Savings",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      company: "Taco Fiesta",
      industry: "Quick Service",
      result: "Cut waste costs by 40% in 45 days",
      quote: "Before WasteWise, we were throwing away $800 worth of food weekly. Now we're down to $200. The mobile app makes it so easy for our staff to track everything.",
      metric: "$31K",
      metricLabel: "Annual Savings",
      avatar: "MR"
    },
    {
      name: "Jennifer Park",
      company: "Sakura Sushi",
      industry: "Fine Dining",
      result: "Optimized inventory with 95% accuracy",
      quote: "The AI demand forecasting is game-changing. We used to guess how much fish to order, now we know exactly. Our food costs dropped 25% while quality improved.",
      metric: "$18K",
      metricLabel: "Annual Savings",
      avatar: "JP"
    },
    {
      name: "David Thompson",
      company: "Brew & Bites",
      industry: "Gastropub",
      result: "Eliminated 50% of food waste",
      quote: "WasteWise helped us identify exactly where waste was happening. The staff training modules got everyone engaged. We're saving money and feeling good about sustainability.",
      metric: "$24K",
      metricLabel: "Annual Savings",
      avatar: "DT"
    }
  ];

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it. Here's what happens when restaurants use WasteWise:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
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

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-semibold text-sm">✅ {testimonial.result}</p>
              </div>

              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{testimonial.metric}</div>
                  <div className="text-xs text-gray-600">{testimonial.metricLabel}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Results Achieved</div>
                  <div className="text-sm font-medium text-gray-900">2024</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">500+</h3>
            <p className="text-gray-600">Restaurants</p>
            <p className="text-gray-500 text-sm mt-2">Using WasteWise worldwide</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">30%</h3>
            <p className="text-gray-600">Avg. Waste Reduction</p>
            <p className="text-gray-500 text-sm mt-2">Within first 30 days</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">$50K</h3>
            <p className="text-gray-600">Avg. Annual Savings</p>
            <p className="text-gray-500 text-sm mt-2">Per restaurant</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">95%</h3>
            <p className="text-gray-600">AI Accuracy</p>
            <p className="text-gray-500 text-sm mt-2">Demand prediction rate</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 500+ Restaurants Already Saving Money
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Start your free trial today and see results in 30 days.
            </p>
            <button 
              onClick={() => window.location.href = '/signup'}
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}