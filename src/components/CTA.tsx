import React from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface CTAProps {
  onBookCall: () => void;
}

export default function CTA({ onBookCall }: CTAProps) {
  const handleBookCall = () => {
    trackCTAClick('cta', 'Yes, I Want My Free Audit');
    trackCalendlyOpen('cta');
    onBookCall();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Losing Money to IT Problems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every day you wait costs you RM2,000+. Book your free strategy call now and 
            discover exactly how to solve your 3 biggest IT problems in the next 90 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              What You'll Get in Your Free 30-Minute Call:
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Complete IT audit of your current systems (Worth RM2,500)",
                "Identification of your 3 biggest cost-draining problems",
                "Custom roadmap to solve them in 90 days or less",
                "ROI projection showing exact savings you'll achieve",
                "Zero-pressure consultation - we're here to help, not sell"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-emerald-300 font-medium">
                ⚡ Limited Time: First 10 callers get a free cybersecurity assessment (Worth RM1,500)
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Book Your Free Strategy Call
              </h3>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                <Clock size={16} />
                <span>30 minutes • No obligations • Immediate insights</span>
              </div>

              <button
                onClick={handleBookCall}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold mb-6"
              >
                <span>Yes, I Want My Free Audit</span>
                <ArrowRight size={20} />
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Trusted by 200+ KL businesses</p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                  <span className="text-gray-600 text-sm ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-gray-300 text-sm">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}