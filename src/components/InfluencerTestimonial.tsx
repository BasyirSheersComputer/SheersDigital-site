import React from 'react';
import { Star, Quote, Award, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const InfluencerTestimonial = () => {
  return (
    <section id="influencer-testimonial" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Industry Expert Endorsement</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Recommended by Malaysia's Leading F&B Consultant
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.4}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
              <div className="flex items-center justify-center mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6 opacity-50" />
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic">
                  "After analyzing 500+ F&B operations across Malaysia, I can confidently say that Servora's platform 
                  is the most comprehensive solution for restaurant automation. Their waste reduction technology alone 
                  has helped my clients save an average of RM 35,000 monthly. This is not just software - it's a 
                  complete operational transformation."
                </blockquote>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">DR</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-800">Dr. Sarah Lim</h4>
                    <p className="text-slate-600">F&B Operations Consultant</p>
                    <p className="text-sm text-slate-500">15+ years experience • 500+ restaurants optimized</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>500+ clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Industry Expert</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">RM 2.3M</div>
                    <div className="text-sm text-slate-600">Total savings generated</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                    <div className="text-sm text-slate-600">Client success rate</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">7 days</div>
                    <div className="text-sm text-slate-600">Average ROI timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default InfluencerTestimonial;
