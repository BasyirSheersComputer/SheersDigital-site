import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Clock, DollarSign, Shield } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    email: '',
    password: '',
    restaurantType: '',
    locations: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding py-12">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent-1 hover:text-accent-1/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Signup Form */}
          <div className="bg-secondary rounded-card shadow-card p-8 border border-accent-2">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-4">
                START YOUR FREE 30-DAY TRIAL
              </h1>
              <p className="text-primary/70">
                Join 50+ premium F&B chains already saving millions with Servora AI
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium text-primary mb-2">
                  RESTAURANT NAME *
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-2 rounded-layout focus:ring-2 focus:ring-accent-1 focus:border-transparent"
                  placeholder="Enter your restaurant name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-2 rounded-layout focus:ring-2 focus:ring-accent-1 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                  PASSWORD *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-2 rounded-layout focus:ring-2 focus:ring-accent-1 focus:border-transparent"
                  placeholder="Create a secure password"
                />
              </div>

              <div>
                <label htmlFor="restaurantType" className="block text-sm font-medium text-primary mb-2">
                  RESTAURANT TYPE *
                </label>
                <select
                  id="restaurantType"
                  name="restaurantType"
                  value={formData.restaurantType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-2 rounded-layout focus:ring-2 focus:ring-accent-1 focus:border-transparent"
                >
                  <option value="">Select restaurant type</option>
                  <option value="fine-dining">Fine Dining</option>
                  <option value="casual-dining">Casual Dining</option>
                  <option value="quick-service">Quick Service</option>
                  <option value="fast-casual">Fast Casual</option>
                  <option value="cafe">Cafe</option>
                  <option value="pizzeria">Pizzeria</option>
                  <option value="bakery">Bakery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="locations" className="block text-sm font-medium text-primary mb-2">
                  NUMBER OF LOCATIONS *
                </label>
                <select
                  id="locations"
                  name="locations"
                  value={formData.locations}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-accent-2 rounded-layout focus:ring-2 focus:ring-accent-1 focus:border-transparent"
                >
                  <option value="">Select number of locations</option>
                  <option value="1">1 location</option>
                  <option value="2-5">2-5 locations</option>
                  <option value="6-10">6-10 locations</option>
                  <option value="11-25">11-25 locations</option>
                  <option value="25+">25+ locations</option>
                </select>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-accent-1 focus:ring-accent-1 border-accent-2 rounded"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-primary/70">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-accent-1 hover:text-accent-1/80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-accent-1 hover:text-accent-1/80">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-1 text-secondary py-4 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold text-lg shadow-card hover:shadow-lg transform hover:-translate-y-1"
              >
                START FREE TRIAL
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-primary/50">
              Already have an account?{' '}
              <a href="#" className="text-accent-1 hover:text-accent-1/80 font-medium">
                Sign in
              </a>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary rounded-card p-8 text-secondary">
              <h2 className="text-2xl font-bold mb-6">WHY CHOOSE SERVORA AI?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>Reduce food waste by 35-45% in 30 days</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>Save RM 100K+ annually on waste reduction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>94% accurate AI demand forecasting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>Multi-location inventory control</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span>Malaysia-specific AI models</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-card p-6 shadow-card text-center">
                <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-accent-1" />
                </div>
                <div className="text-2xl font-bold text-accent-1 mb-2">RM 100K+</div>
                <div className="text-primary/70 text-sm">ANNUAL SAVINGS</div>
              </div>

              <div className="bg-secondary rounded-card p-6 shadow-card text-center">
                <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent-1" />
                </div>
                <div className="text-2xl font-bold text-accent-1 mb-2">20hr</div>
                <div className="text-primary/70 text-sm">TIME SAVED/WEEK</div>
              </div>
            </div>

            <div className="bg-secondary rounded-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary mb-4">WHAT'S INCLUDED:</h3>
              <ul className="space-y-3 text-sm text-primary/70">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Full access to all 6 premium AI features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Unlimited staff accounts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Multi-location inventory control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Malaysia-specific AI models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Priority enterprise support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-1" />
                  <span>Setup assistance included</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent-2/50 rounded-card p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">TRUST & SECURITY</h3>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-5 h-5 text-accent-1" />
                <span className="text-sm text-primary/70">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-5 h-5 text-accent-1" />
                <span className="text-sm text-primary/70">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-accent-1" />
                <span className="text-sm text-primary/70">Bank-level encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
