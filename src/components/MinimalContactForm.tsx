/**
 * Minimal Contact Form - AG1 Inspired
 * Only 4 fields: Name, Email, Phone, Company
 * Purpose: Build leads list for direct phone follow-up
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2, X } from 'lucide-react';
import { FormService, ContactFormData } from '../services/formService';
import { useLanguage } from '../contexts/LanguageContext';

interface MinimalContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  cta?: string;
}

const MinimalContactForm: React.FC<MinimalContactFormProps> = ({ 
  isOpen, 
  onClose, 
  source = 'website',
  cta = 'Get Started'
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: source,
        message: `Lead from: ${source}`,
      };

      const result = await FormService.submitContactForm(contactData);
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', company: '' });
        }, 3000);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Success State
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fade-in">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-scale-in">
          <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">{t('form.success.title')}</h3>
          <p className="text-neutral-600 mb-2">
            {t('form.success.message')}
          </p>
          <p className="text-sm text-neutral-500 mt-4">
            {t('form.success.checkEmail')} <span className="font-semibold">{formData.email}</span> {t('form.success.confirmation')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-white relative">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-3xl font-bold mb-2">{t('form.title')}</h2>
          <p className="text-teal-100">
            {t('form.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
              {t('form.fields.name')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-neutral-900 placeholder-neutral-400"
              placeholder={t('form.placeholders.name')}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
              {t('form.fields.email')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-neutral-900 placeholder-neutral-400"
              placeholder={t('form.placeholders.email')}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
              {t('form.fields.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-neutral-900 placeholder-neutral-400"
              placeholder={t('form.placeholders.phone')}
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-2">
              {t('form.fields.company')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-neutral-900 placeholder-neutral-400"
              placeholder={t('form.placeholders.company')}
            />
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-neutral-500 leading-relaxed">
            {t('form.privacy')}
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all flex items-center justify-center group shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t('form.submitting')}
              </>
            ) : (
              <>
                {cta || t('form.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Social Proof */}
          <p className="text-center text-sm text-neutral-600">
            {t('form.socialProof')}
          </p>
        </form>
      </div>
    </div>
  );
};

export default MinimalContactForm;

