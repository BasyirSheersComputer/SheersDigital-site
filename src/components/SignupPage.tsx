import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
    restaurantType: '',
    locations: '1',
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
    // Here you would typically integrate with your authentication system
    // For now, we'll just redirect to a success page or dashboard
    console.log('Signup data:', formData);
    // Redirect to dashboard or show success message
    alert('Account created successfully! Welcome to WasteWise.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-2xl">W</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">WasteWise</h1>
              <p className="text-gray-600">AI-Powered Restaurant Waste Management</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Free 30-Day Trial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 500+ restaurants already saving thousands monthly. No credit card required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Signup Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your restaurant name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Create a secure password"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Type
                  </label>
                  <select
                    name="restaurantType"
                    value={formData.restaurantType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="coffee">Coffee Shop</option>
                    <option value="quick-service">Quick Service</option>
                    <option value="casual-dining">Casual Dining</option>
                    <option value="fine-dining">Fine Dining</option>
                    <option value="catering">Catering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Locations
                  </label>
                  <select
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="1">1 location</option>
                    <option value="2-5">2-5 locations</option>
                    <option value="6-10">6-10 locations</option>
                    <option value="11-25">11-25 locations</option>
                    <option value="25+">25+ locations</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms-of-service" className="text-green-600 hover:text-green-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-green-600 hover:text-green-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg"
              >
                Start Free Trial
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">30-Day Free Trial</h4>
                    <p className="text-gray-600 text-sm">Full access to all features, no credit card required</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Demand Forecasting</h4>
                    <p className="text-gray-600 text-sm">95% accurate predictions to eliminate overproduction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile App Access</h4>
                    <p className="text-gray-600 text-sm">Track waste and manage inventory from any device</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Staff Training</h4>
                    <p className="text-gray-600 text-sm">Built-in training modules and gamification</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics & Reports</h4>
                    <p className="text-gray-600 text-sm">Comprehensive insights and compliance reporting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Trusted by 500+ Restaurants</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-300 fill-current" size={16} />
                    ))}
                  </div>
                  <span className="text-sm">4.9/5 rating</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm text-green-100">Avg. Waste Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$50K</div>
                    <div className="text-sm text-green-100">Avg. Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-green-100">AI Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
