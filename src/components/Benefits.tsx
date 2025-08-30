import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Clock, Award } from 'lucide-react';

const Benefits = () => {
  const testimonials = [
    {
      name: "Ahmad Rahman",
      position: "Operations Manager",
      company: "Warung Sedap Chain",
      testimonial: "After implementing the Inventory Integration solution, we reduced food waste by 40% and saved RM 12,000 in the first month alone.",
      result: "40% waste reduction"
    },
    {
      name: "Siti Nurhaliza",
      position: "F&B Director",
      company: "Mamak Express",
      testimonial: "The AI forecasting solution transformed our ordering process. No more surprise stockouts or overordering. Our profit margins improved by 18%.",
      result: "18% profit increase"
    },
    {
      name: "David Lim",
      position: "Restaurant Owner",
      company: "Fusion Delights",
      testimonial: "WasteWise platform gave us visibility we never had before. Now we make data-driven decisions instead of guessing.",
      result: "Complete visibility"
    }
  ];

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: "RM 2.3M", label: "Saved by clients in 2024" },
    { icon: <Shield className="w-8 h-8" />, value: "250+", label: "F&B outlets optimized" },
    { icon: <Clock className="w-8 h-8" />, value: "7 days", label: "Average implementation" },
    { icon: <Award className="w-8 h-8" />, value: "98%", label: "Client satisfaction rate" }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-blue-600 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Success Stories from Malaysian F&B Leaders
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <p className="text-slate-700 italic leading-relaxed">"{testimonial.testimonial}"</p>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.position}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Calculate Your Potential Savings</h3>
          <p className="text-xl text-blue-100 mb-8">
            Based on average Malaysian F&B performance, here's what you could save:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">RM 8,500</div>
              <div className="text-blue-100">Monthly waste reduction</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">15%</div>
              <div className="text-blue-100">Profit margin improvement</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">32 hours</div>
              <div className="text-blue-100">Staff time saved monthly</div>
            </div>
          </div>

          <Link to="/get-started" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Your Custom ROI Report
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;