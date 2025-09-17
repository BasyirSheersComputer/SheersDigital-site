import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle, X, Play, Shield } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FormService, ContactFormData } from '../services/formService';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    locations: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        companySize: formData.companySize,
        locations: formData.locations,
        service: 'Homepage Contact Form'
      };

      const result = await FormService.submitContactForm(contactData);
      
      if (result.success) {
        setIsFormSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsFormSubmitted(false);
          setFormData({ name: '', email: '', companySize: '', locations: '' });
          setIsFormOpen(false);
        }, 3000);
      } else {
        setSubmitError(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
    setIsFormSubmitted(false);
    setSubmitError(null);
    setFormData({ name: '', email: '', companySize: '', locations: '' });
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setIsFormSubmitted(false);
    setSubmitError(null);
    setFormData({ name: '', email: '', companySize: '', locations: '' });
  };

  return (
    <>
      <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Video */}
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="relative">
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for video - replace with actual video */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">See Servora in Action</h3>
                      <p className="text-slate-400 text-sm">Watch how we transform F&B operations in 7 days</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      3:45 min
                    </div>
                    <div className="flex items-center">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      RM 45K+ saved
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Hero Copy */}
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Malaysia's Leading <span className="text-blue-300">Restaurant Software</span> & 
                    <span className="text-red-400"> F&B Management System</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Premium F&B chains lose <strong>RM 45,000+ monthly</strong> through operational inefficiencies. 
                    Our <strong>restaurant automation Malaysia</strong> solutions with <strong>inventory management</strong>, 
                    <strong>waste reduction</strong>, and <strong>AI forecasting</strong> turn chaos into competitive advantage in 7 days.
                  </p>
                </div>
                
                {/* CTA Section */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={openForm}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center group shadow-2xl transform hover:scale-105"
                    >
                      Get Your Free Waste Audit
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link 
                      to="/roi-calculator"
                      className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 flex items-center justify-center group"
                    >
                      See How Much You're Losing
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <p className="text-slate-400 text-sm">
                    No credit card required • Instant access
                  </p>
                </div>

                {/* Guarantee Section */}
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <h3 className="text-lg font-semibold">30-Day Money-Back Guarantee</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    If you don't see at least RM 25,000 in monthly savings within 30 days, we'll refund your investment completely. 
                    No questions asked.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm mb-4">
                    Trusted by 100+ F&B chains including...
                  </p>
                  <div className="flex flex-wrap gap-4 opacity-70">
                    <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                      <span className="text-white font-semibold text-sm">McDonald's</span>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                      <span className="text-white font-semibold text-sm">KFC</span>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                      <span className="text-white font-semibold text-sm">Pizza Hut</span>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                      <span className="text-white font-semibold text-sm">Starbucks</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Waste Audit Form Popup */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Free Waste Audit</h3>
              <button
                onClick={closeForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {!isFormSubmitted ? (
                <>
                  <p className="text-gray-600 mb-6">
                    Discover exactly how much money you're losing to waste and inefficiencies
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {submitError}
                      </div>
                    )}
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50"
                      />
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50"
                      >
                        <option value="">Company Size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                      <select
                        name="locations"
                        value={formData.locations}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50"
                      >
                        <option value="">Number of Locations</option>
                        <option value="1">1 location</option>
                        <option value="2-5">2-5 locations</option>
                        <option value="6-20">6-20 locations</option>
                        <option value="20+">20+ locations</option>
                      </select>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Free Waste Audit'}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll send your personalized waste audit within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;