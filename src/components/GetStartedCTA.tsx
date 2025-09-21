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
      title: "Predictable Scaling",
      description: "Per-10-outlet pricing with transparent costs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Template + Custom",
      description: "Scalable platform with bespoke professional services"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enterprise Ready",
      description: "Professional services for large chains"
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
            {/* Professional Plan - Template Part */}
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Plan</h3>
                <p className="text-blue-100 mb-6">
                  Scalable template solution with core analytics, inventory management, and POS integrations.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Base analytics & reporting dashboards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Standard inventory management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>POS integrations (OMO, i-Neighbour, StoreHub)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Staff scheduling & time-tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Standard customer feedback module</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">RM 5,000/month</div>
                  <div className="text-blue-200 text-sm">Per 10 outlets • Predictable scaling</div>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg transform hover:scale-105"
                >
                  Start Professional Plan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>

            {/* Enterprise Plan - Template Part */}
            <AnimatedSection animation="slideRight" delay={0.4}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
                <p className="text-blue-100 mb-6">
                  Advanced template features with enhanced analytics and multi-location management.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>All Professional features included</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Advanced predictive analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Multi-location management suite</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Custom reporting templates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Priority support & onboarding</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">RM 10,000/month</div>
                  <div className="text-blue-200 text-sm">Per 10 outlets • Premium features</div>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Enterprise Plan
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Professional Services Section */}
          <AnimatedSection animation="slideUp" delay={0.6}>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-yellow-200 mb-4">
                  🎯 Custom Implementation & Professional Services
                </h3>
                <p className="text-yellow-100 mb-6 max-w-3xl mx-auto">
                  For large enterprise clients requiring bespoke solutions, custom integrations, and dedicated strategic support.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-200 mb-3">Project-Based Implementation</h4>
                    <div className="text-2xl font-bold text-white mb-2">RM 100,000 - 200,000+</div>
                    <p className="text-yellow-100 text-sm">One-time setup • Custom integrations • On-site training</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-200 mb-3">Dedicated Account Manager</h4>
                    <div className="text-2xl font-bold text-white mb-2">RM 15,000 - 25,000/month</div>
                    <p className="text-yellow-100 text-sm">Strategic support • Ongoing optimization • Priority access</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-200 mb-3">Success-Based Pricing</h4>
                    <div className="text-2xl font-bold text-white mb-2">1% of value unlocked</div>
                    <p className="text-yellow-100 text-sm">Performance-based • ROI guaranteed • Shared success</p>
                  </div>
                </div>

                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-100 text-sm">
                    <strong>Example:</strong> Large chain with 50 outlets would pay RM 25,000/month (Professional) or RM 50,000/month (Enterprise) 
                    for the template platform, plus RM 150,000 one-time for custom implementation and integrations.
                  </p>
                </div>

                <button 
                  onClick={openModal}
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Discuss Enterprise Solutions
                </button>
              </div>
            </div>
          </AnimatedSection>

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

          {/* Value Proposition */}
          <AnimatedSection animation="fadeIn" delay={0.8}>
            <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-6">
              <div className="flex items-center justify-center space-x-3 text-green-200">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">
                  Clear Separation: Template platform pricing + Professional services for custom needs
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
