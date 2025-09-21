import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle, X } from 'lucide-react';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Prepare data for database
      const wasteAuditData: WasteAuditRequest = {
        name: formData.name,
        email: formData.email,
        company_size: formData.companySize as '1-10' | '11-50' | '51-200' | '200+',
        locations: formData.locations as '1' | '2-5' | '6-20' | '20+',
        source: 'hero_form'
      };
      
      // Save to database
      const result = await FormService.submitContactForm(contactData);
      console.log('Waste audit saved to database:', result);
      
      setIsFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsFormSubmitted(false);
        setFormData({ name: '', email: '', companySize: '', locations: '' });
        setIsFormOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving waste audit:', error);
      // You could show an error message to the user here
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
    setIsFormSubmitted(false);
    setFormData({ name: '', email: '', companySize: '', locations: '' });
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setIsFormSubmitted(false);
    setFormData({ name: '', email: '', companySize: '', locations: '' });
  };

  return (
    <>
      <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-12">
              {/* Main Headline Section */}
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Stop Losing <span className="text-red-400">RM 45,000+</span> Monthly: The Secret to Turning 
                    <span className="text-blue-300"> Chaos into Competitive Advantage</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Premium F&B chains lose <strong>RM 45,000+ monthly</strong> through operational inefficiencies that kill your profit margins. 
                    Our enterprise-grade solutions powered by the WasteWise platform turn chaos into competitive advantage in 7 days.
                  </p>
                </div>
              </AnimatedSection>
              
              {/* CTA Section */}
              <AnimatedSection animation="slideUp" delay={0.4}>
                <div className="space-y-6">
                  {/* Primary and Secondary CTAs Side by Side */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary CTA Button */}
                    <button 
                      onClick={openForm}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center group shadow-2xl transform hover:scale-105"
                    >
                      Get Your Free Waste Audit
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Secondary CTA */}
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
              </AnimatedSection>

              {/* Benefits Section */}
              <AnimatedSection animation="slideUp" delay={0.6}>
                <div className="flex items-center justify-center space-x-12 text-sm text-slate-400">
                  <div className="flex items-center">
                    <TrendingDown className="w-4 h-4 mr-2" />
                    Reduce Waste by 40%
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Setup in 7 Days
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Proof Section */}
              <AnimatedSection animation="slideUp" delay={0.8}>
                <div className="border-t border-slate-700 pt-8">
                  <p className="text-slate-400 text-sm mb-6">
                    Trusted by 100+ F&B chains including...
                  </p>
                  <div className="flex justify-center items-center space-x-8 opacity-70">
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                      <span className="text-white font-semibold">McDonald's</span>
                    </div>
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                      <span className="text-white font-semibold">KFC</span>
                    </div>
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                      <span className="text-white font-semibold">Pizza Hut</span>
                    </div>
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                      <span className="text-white font-semibold">Starbucks</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      />
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Free Waste Audit
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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