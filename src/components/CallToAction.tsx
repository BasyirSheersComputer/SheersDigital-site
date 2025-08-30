import React from 'react';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';

const CallToAction = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your F&B Operation?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join 250+ Malaysian F&B operators who've already eliminated inventory chaos 
            and boosted their profits with our solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Start Option */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick-Win Solution</h3>
              <p className="text-blue-100 mb-6">
                Start with one targeted solution and see immediate results in 7 days.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free consultation & audit</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>7-day implementation</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>50% off WasteWise upgrade</span>
                </div>
              </div>
              <button 
                onClick={openModal}
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-colors w-full"
              >
                Book Free Consultation
              </button>
            </div>

            {/* Full Platform Option */}
            <div className="bg-slate-800 border border-slate-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Full WasteWise Platform</h3>
              <p className="text-slate-300 mb-6">
                Complete transformation with all features and ongoing optimization support.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>All features included</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Dedicated success manager</span>
                </div>
              </div>
              <button 
                onClick={openModal}
                className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors w-full"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Speak with Our F&B Specialists</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Call Now</p>
                  <p className="text-slate-300">+60 11-6326 3808</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Email Us</p>
                  <p className="text-slate-300">a.basyir@sheerssoft.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-8 flex items-center justify-center space-x-3 text-slate-400">
            <Clock className="w-5 h-5" />
            <span>Limited time: 50% off first year when you start with a Quick-Win solution</span>
          </div>
        </div>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default CallToAction;