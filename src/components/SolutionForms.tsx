import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, X, CheckCircle, Brain, Shield, BarChart3, Package, Users, FileText, Target, TrendingUp } from 'lucide-react';
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
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Prepare data for database
      const solutionInquiryData: SolutionInquiry = {
        solution_type: solution as any,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        company_size: formData.companySize as any,
        locations: formData.locations as any,
        current_waste: formData.currentWaste as any,
        monthly_revenue: formData.monthlyRevenue as any,
        specific_needs: formData.specificNeeds
      };
      
      // Save to database
      const result = await FormService.submitSolutionForm(solutionFormData);
      console.log('Solution inquiry saved to database:', result);
      
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
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving solution inquiry:', error);
      // You could show an error message to the user here
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (backdropRef.current && !backdropRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Close form on Escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
        description: 'Stop losing RM 25,000+ monthly. Get your personalized waste reduction plan',
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

  const renderField = (fieldName: string) => {
    const fieldConfigs: Record<string, FieldConfig> = {
      name: {
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your full name',
        required: true
      },
      email: {
        label: 'Email Address',
        type: 'email',
        placeholder: 'your.email@company.com',
        required: true
      },
      company: {
        label: 'Company Name',
        type: 'text',
        placeholder: 'Your company name',
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
        options: ['Under RM 5,000', 'RM 5,000 - RM 15,000', 'RM 15,000 - RM 25,000', 'RM 25,000+'],
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

    const fieldConfig = fieldConfigs[fieldName];
    if (!fieldConfig) return null;

    if (fieldConfig.type === 'select') {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {fieldConfig.label}
          </label>
          <select
            name={fieldName}
            value={formData[fieldName as keyof FormData] || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select an option</option>
            {fieldConfig.options?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    }

    if (fieldConfig.type === 'textarea') {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {fieldConfig.label}
          </label>
          <textarea
            name={fieldName}
            value={formData[fieldName as keyof FormData] || ''}
            onChange={handleInputChange}
            placeholder={fieldConfig.placeholder}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      );
    }

    return (
      <div key={fieldName}>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {fieldConfig.label}
          {fieldConfig.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type={fieldConfig.type}
          name={fieldName}
          value={formData[fieldName as keyof FormData] || ''}
          onChange={handleInputChange}
          placeholder={fieldConfig.placeholder}
          required={fieldConfig.required}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    );
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div 
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 backdrop-mobile modal-mobile"
        onClick={handleBackdropClick}
      >
        <div 
          ref={modalRef}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center modal-fix"
          onClick={handleModalClick}
        >
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h3>
          <p className="text-slate-600 mb-4">
            Your request has been submitted successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[44px] touch-manipulation w-full mobile-button"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 backdrop-mobile modal-mobile"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-fix form-scroll-mobile"
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r from-${config.color}-600 to-${config.color}-700 p-6 rounded-t-2xl text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation mobile-button"
            aria-label="Close form"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{config.title}</h2>
              <p className={`text-${config.color}-100`}>{config.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <p className="text-slate-600 mb-6">{config.description}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {config.fields.map(field => renderField(field))}
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className={`w-full bg-${config.color}-600 hover:bg-${config.color}-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group min-h-[44px] touch-manipulation mobile-button`}
              >
                Submit Request
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-slate-500 text-sm mt-4 text-center">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionForms;
