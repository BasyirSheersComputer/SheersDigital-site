import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, X, CheckCircle, Brain, Shield, BarChart3, Package, Users, FileText, Target, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';
import { FormService, SolutionFormData } from '../services/formService';

interface SolutionFormProps {
  solution: string;
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  companySize?: string;
  locations?: string;
  currentWaste?: string;
  monthlyRevenue?: string;
  specificNeeds?: string;
}

interface FieldConfig {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
  required: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

const SolutionForms: React.FC<SolutionFormProps> = ({ solution, isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    locations: '',
    currentWaste: '',
    monthlyRevenue: '',
    specificNeeds: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitError, setSubmitError] = useState<string>('');
  
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';
      case 'company':
        if (!value.trim()) return 'Company name is required';
        return '';
      case 'phone':
        if (value && !/^[\d\s\-+()]+$/.test(value)) return 'Please enter a valid phone number';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    const config = getSolutionConfig();
    
    config.fields.forEach(fieldName => {
      const fieldConfig = fieldConfigs[fieldName];
      if (fieldConfig?.required) {
        const value = formData[fieldName as keyof FormData] || '';
        const error = validateField(fieldName, value);
        if (error) {
          newErrors[fieldName] = error;
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const config = getSolutionConfig();
    const allTouched: { [key: string]: boolean } = {};
    config.fields.forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const solutionFormData: SolutionFormData = {
        solution: solution,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        companySize: formData.companySize,
        locations: formData.locations,
        currentWaste: formData.currentWaste,
        monthlyRevenue: formData.monthlyRevenue,
        specificNeeds: formData.specificNeeds
      };
      
      const result = await FormService.submitSolutionForm(solutionFormData);
      
      if (result.success) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            companySize: '',
            locations: '',
            currentWaste: '',
            monthlyRevenue: '',
            specificNeeds: ''
          });
          setTouched({});
          setErrors({});
          onClose();
        }, 3000);
      } else {
        setSubmitError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error saving solution inquiry:', error);
      setSubmitError('An unexpected error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Close form on Escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isSubmitting, onClose]);

  const getSolutionConfig = () => {
    const configs = {
      'ai-forecasting': {
        title: 'AI Forecasting Solution',
        subtitle: 'Get your free AI forecasting assessment',
        description: 'Discover how AI can predict your demand with 95% accuracy and reduce waste by 40%',
        color: 'indigo',
        icon: Brain,
        fields: ['name', 'email', 'company', 'companySize', 'monthlyRevenue', 'currentWaste']
      },
      'compliance-automation': {
        title: 'Compliance Automation',
        subtitle: 'Get your free compliance assessment',
        description: 'Stop worrying about regulatory violations. Get your personalized compliance roadmap',
        color: 'red',
        icon: Shield,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'specificNeeds']
      },
      'waste-logging-automation': {
        title: 'Waste Logging Automation',
        subtitle: 'Get your free waste audit',
        description: 'Stop losing RM 20,000+ monthly. Get your personalized waste reduction plan',
        color: 'red',
        icon: FileText,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'currentWaste', 'monthlyRevenue']
      },
      'inventory-integration': {
        title: 'Inventory Integration',
        subtitle: 'Get your free demo',
        description: 'Transform your inventory management with real-time tracking and automated ordering',
        color: 'blue',
        icon: Package,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'currentWaste']
      },
      'supplier-integration': {
        title: 'Supplier Integration',
        subtitle: 'Get your free consultation',
        description: 'Streamline your supply chain with automated supplier management',
        color: 'green',
        icon: Users,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'specificNeeds']
      },
      'waste-wise-platform': {
        title: 'WasteWise Platform',
        subtitle: 'Get your free platform demo',
        description: 'Experience the complete waste management solution that transforms your business',
        color: 'green',
        icon: Target,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'monthlyRevenue', 'specificNeeds']
      },
      'roi-calculator': {
        title: 'ROI Calculator Report',
        subtitle: 'Get your personalized savings report',
        description: 'See exactly how much you can save with our detailed ROI analysis',
        color: 'green',
        icon: TrendingUp,
        fields: ['name', 'email', 'company', 'companySize', 'locations', 'monthlyRevenue', 'currentWaste']
      }
    };
    return configs[solution as keyof typeof configs] || configs['ai-forecasting'];
  };

  const config = getSolutionConfig();
  const IconComponent = config.icon;

  const fieldConfigs: Record<string, FieldConfig> = {
    name: {
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      required: true
    },
    email: {
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@company.com',
      required: true
    },
    company: {
      label: 'Company Name',
      type: 'text',
      placeholder: 'Your Company Ltd',
      required: true
    },
    phone: {
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+60 12-345 6789',
      required: false
    },
    companySize: {
      label: 'Company Size',
      type: 'select',
      options: ['1-10 employees', '11-50 employees', '51-200 employees', '200+ employees'],
      required: false
    },
    locations: {
      label: 'Number of Locations',
      type: 'select',
      options: ['1 location', '2-5 locations', '6-20 locations', '20+ locations'],
      required: false
    },
    currentWaste: {
      label: 'Current Monthly Waste (RM)',
      type: 'select',
      options: ['Under RM 5,000', 'RM 5,000 - RM 15,000', 'RM 15,000 - RM 20,000', 'RM 20,000+'],
      required: false
    },
    monthlyRevenue: {
      label: 'Monthly Revenue (RM)',
      type: 'select',
      options: ['Under RM 50,000', 'RM 50,000 - RM 200,000', 'RM 200,000 - RM 500,000', 'RM 500,000+'],
      required: false
    },
    specificNeeds: {
      label: 'Specific Needs',
      type: 'textarea',
      placeholder: 'Tell us about your specific challenges or requirements...',
      required: false
    }
  };

  const renderField = (fieldName: string) => {
    const fieldConfig = fieldConfigs[fieldName];
    if (!fieldConfig) return null;

    const value = formData[fieldName as keyof FormData] || '';
    const error = touched[fieldName] && errors[fieldName];
    const hasValue = value && value.trim().length > 0;

    if (fieldConfig.type === 'select') {
      return (
        <div key={fieldName} className="relative group">
          <label 
            className={`absolute left-4 transition-all duration-200 pointer-events-none
              ${hasValue ? 'top-2 text-xs text-slate-600' : 'top-4 text-sm text-slate-500'}
              ${error ? 'text-red-500' : ''}
            `}
          >
            {fieldConfig.label}
            {fieldConfig.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full px-4 pt-7 pb-3 border rounded-xl transition-all duration-200 bg-white
              ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'}
              ${hasValue ? 'bg-slate-50' : ''}
              hover:border-slate-300 appearance-none cursor-pointer
            `}
          >
            <option value=""></option>
            {fieldConfig.options?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {error && (
            <div className="flex items-center mt-1 text-red-500 text-sm animate-slide-up">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </div>
          )}
        </div>
      );
    }

    if (fieldConfig.type === 'textarea') {
      return (
        <div key={fieldName} className="relative group">
          <label 
            className={`absolute left-4 transition-all duration-200 pointer-events-none z-10
              ${hasValue ? 'top-2 text-xs text-slate-600' : 'top-4 text-sm text-slate-500'}
              ${error ? 'text-red-500' : ''}
            `}
          >
            {fieldConfig.label}
            {fieldConfig.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            name={fieldName}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={hasValue ? '' : fieldConfig.placeholder}
            rows={4}
            className={`w-full px-4 pt-7 pb-3 border rounded-xl transition-all duration-200 resize-none
              ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'}
              ${hasValue ? 'bg-slate-50' : 'bg-white'}
              hover:border-slate-300
            `}
          />
          {error && (
            <div className="flex items-center mt-1 text-red-500 text-sm animate-slide-up">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={fieldName} className="relative group">
        <label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${hasValue ? 'top-2 text-xs text-slate-600' : 'top-4 text-sm text-slate-500'}
            ${error ? 'text-red-500' : ''}
          `}
        >
          {fieldConfig.label}
          {fieldConfig.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type={fieldConfig.type}
          name={fieldName}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={hasValue ? '' : fieldConfig.placeholder}
          required={fieldConfig.required}
          className={`w-full px-4 pt-7 pb-3 border rounded-xl transition-all duration-200
            ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'}
            ${hasValue ? 'bg-slate-50' : 'bg-white'}
            hover:border-slate-300
          `}
        />
        {error && (
          <div className="flex items-center mt-1 text-red-500 text-sm animate-slide-up">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div 
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fade-in"
        onClick={handleBackdropClick}
      >
        <div 
          ref={modalRef}
          className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-slide-up shadow-2xl"
          onClick={handleModalClick}
        >
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Thank You!</h3>
          <p className="text-slate-600 mb-2 text-lg">
            Your request has been submitted successfully.
          </p>
          <p className="text-slate-500 text-sm">
            We'll get back to you within 24 hours at <span className="font-semibold">{formData.email}</span>
          </p>
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up"
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r from-${config.color}-600 to-${config.color}-700 p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 disabled:opacity-50"
            aria-label="Close form"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">{config.title}</h2>
              <p className="text-white/90">{config.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <p className="text-slate-600 mb-8 text-lg">{config.description}</p>
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start animate-slide-up">
              <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-red-700 text-sm">{submitError}</div>
            </div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {config.fields.map(field => renderField(field))}
            </div>
            
            <div className="pt-6 border-t border-slate-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-${config.color}-600 to-${config.color}-700 hover:from-${config.color}-700 hover:to-${config.color}-800 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-slate-500 text-sm mt-6 text-center flex items-center justify-center">
            <Shield className="w-4 h-4 mr-2" />
            Your information is secure and will never be shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionForms;
