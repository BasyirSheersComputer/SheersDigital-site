import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';
import { AnimatedSection } from './AnimatedSection';

const GetStartedCTA = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7-Day Implementation",
      description: "See results in just one week"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "30-Day Guarantee",
      description: "Money-back if you don't save RM 25K+"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant ROI",
      description: "Start saving from day one"
    }
  ];

  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your F&B Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join 250+ premium Malaysian F&B chains who've already eliminated operational chaos 
              and secured their market leadership with Servora.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Start Option */}
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Starter Solution</h3>
                <p className="text-blue-100 mb-6">
                  Start with one targeted solution and see immediate competitive advantage in 7 days.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Free consultation & waste audit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>7-day implementation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>50% off full platform upgrade</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">From RM 6,500</div>
                  <div className="text-blue-200 text-sm">One-time setup • No monthly fees</div>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg transform hover:scale-105"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>

            {/* Full Platform Option */}
            <AnimatedSection animation="slideRight" delay={0.4}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Complete Servora Platform</h3>
                <p className="text-blue-100 mb-6">
                  Full market domination with all features and ongoing optimization support.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>All features included</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Dedicated success manager</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Unlimited locations</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">RM 2,500/month</div>
                  <div className="text-blue-200 text-sm">Per location • Cancel anytime</div>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Benefits Row */}
          <AnimatedSection animation="slideUp" delay={0.6}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-blue-300 flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Urgency Element */}
          <AnimatedSection animation="fadeIn" delay={0.8}>
            <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-6">
              <div className="flex items-center justify-center space-x-3 text-yellow-200">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">
                  Limited Time: 50% off first year when you start with a Quick-Win solution
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default GetStartedCTA;
