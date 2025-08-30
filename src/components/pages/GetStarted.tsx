import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp, Shield, Users, Zap } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const GetStarted = () => {
  const [selectedPackage, setSelectedPackage] = useState('quick-win');
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const solutions = [
    {
      id: 'inventory-integration',
      title: 'Inventory & Stock Management Integration',
      description: 'Seamlessly connect your existing POS and inventory systems',
      price: 'RM 2,500',
      timeline: '7 days',
      features: ['Real-time stock alerts', 'POS integration', 'Automated reporting', 'Mobile dashboard'],
      savings: 'RM 8,000/month'
    },
    {
      id: 'waste-logging',
      title: 'Waste Logging & Data Capture Automation',
      description: 'Implement automated waste data collection using mobile apps',
      price: 'RM 1,800',
      timeline: '5 days',
      features: ['Mobile waste logging', 'Photo documentation', 'Automated categorization', 'Weekly insights'],
      savings: 'RM 5,000/month'
    },
    {
      id: 'supplier-integration',
      title: 'Supplier & Procurement System Integration',
      description: 'Integrate supplier databases and procurement workflows',
      price: 'RM 3,200',
      timeline: '10 days',
      features: ['Supplier performance tracking', 'Cost comparison tools', 'Order automation', 'Quality metrics'],
      savings: 'RM 12,000/month'
    },
    {
      id: 'ai-forecasting',
      title: 'AI-Driven Demand Forecasting Plug-in',
      description: 'Deploy AI forecasting tools that predict demand patterns',
      price: 'RM 4,500',
      timeline: '14 days',
      features: ['AI demand prediction', 'Sales pattern analysis', 'Seasonal adjustments', 'Order recommendations'],
      savings: 'RM 15,000/month'
    },
    {
      id: 'compliance-automation',
      title: 'Custom Reporting & Compliance Automation',
      description: 'Automate regulatory and internal reporting',
      price: 'RM 2,000',
      timeline: '7 days',
      features: ['Automated compliance reports', 'Custom dashboards', 'Audit trail', 'Regulatory alignment'],
      savings: 'RM 6,000/month'
    }
  ];

  const packages = [
    {
      id: 'quick-win',
      title: 'Quick-Win Solution',
      subtitle: 'Start Small, Win Big',
      description: 'Choose one targeted solution and see immediate results in 7 days',
      price: 'From RM 1,800',
      savings: 'RM 5,000-15,000/month',
      features: [
        'Free consultation & audit',
        '7-day implementation',
        '50% off WasteWise upgrade',
        '30-day support included',
        'ROI guarantee'
      ],
      popular: false
    },
    {
      id: 'wastewise-platform',
      title: 'Full WasteWise Platform',
      subtitle: 'Complete Transformation',
      description: 'Get everything you need for complete inventory and waste management',
      price: 'RM 8,500/month',
      savings: 'RM 25,000-40,000/month',
      features: [
        'All 5 solutions included',
        '30-day free trial',
        'Dedicated success manager',
        '24/7 priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-location support'
      ],
      popular: true
    }
  ];

  const toggleSolution = (solutionId: string) => {
    setSelectedSolutions(prev => 
      prev.includes(solutionId) 
        ? prev.filter(id => id !== solutionId)
        : [...prev, solutionId]
    );
  };

  const calculateTotalPrice = () => {
    if (selectedPackage === 'wastewise-platform') {
      return 'RM 8,500/month';
    }
    
    const selectedSolutionsData = solutions.filter(s => selectedSolutions.includes(s.id));
    const totalPrice = selectedSolutionsData.reduce((sum, solution) => {
      const price = parseInt(solution.price.replace('RM ', '').replace(',', ''));
      return sum + price;
    }, 0);
    
    return `RM ${totalPrice.toLocaleString()}`;
  };

  const calculateTotalSavings = () => {
    if (selectedPackage === 'wastewise-platform') {
      return 'RM 25,000-40,000/month';
    }
    
    const selectedSolutionsData = solutions.filter(s => selectedSolutions.includes(s.id));
    const totalSavings = selectedSolutionsData.reduce((sum, solution) => {
      const savings = parseInt(solution.savings.replace('RM ', '').replace(',', '').split('-')[0]);
      return sum + savings;
    }, 0);
    
    return `RM ${totalSavings.toLocaleString()}/month`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your Perfect
              <span className="text-blue-300"> F&B Solution</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Choose the solutions that fit your needs. Start with one or get everything. 
              Every option comes with guaranteed ROI and expert support.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-400 mb-8">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Guaranteed ROI
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Fast Implementation
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Path to Success</h2>
            <p className="text-lg text-slate-600">Select the package that best fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                  selectedPackage === pkg.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{pkg.subtitle}</p>
                  <p className="text-slate-600 mb-6">{pkg.description}</p>
                  
                  <div className="text-3xl font-bold text-slate-800 mb-2">{pkg.price}</div>
                  <div className="text-green-600 font-semibold mb-6">Save {pkg.savings}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Selection (only for Quick-Win) */}
      {selectedPackage === 'quick-win' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Quick-Win Solution</h2>
              <p className="text-lg text-slate-600">Select one or more solutions to build your custom package</p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {solutions.map((solution) => (
                <div 
                  key={solution.id}
                  className={`rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                    selectedSolutions.includes(solution.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-blue-300'
                  }`}
                  onClick={() => toggleSolution(solution.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800">{solution.title}</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedSolutions.includes(solution.id)
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-slate-300'
                    }`}>
                      {selectedSolutions.includes(solution.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{solution.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-800">{solution.price}</span>
                    <span className="text-green-600">Save {solution.savings}</span>
                  </div>
                  
                  <div className="mt-3 text-xs text-slate-500">
                    Implementation: {solution.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Summary & CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Your Custom Solution Summary</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{calculateTotalPrice()}</div>
                  <div className="text-slate-300">Total Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{calculateTotalSavings()}</div>
                  <div className="text-slate-300">Monthly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">7-14 Days</div>
                  <div className="text-slate-300">Implementation</div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-green-400 mb-4">🎉 What You'll Get</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Free consultation & audit
                    </li>
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Expert implementation
                    </li>
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Training & support
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      ROI guarantee
                    </li>
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Ongoing optimization
                    </li>
                    <li className="flex items-center text-green-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center mx-auto group">
                  Start Your Transformation Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-slate-400 mt-4">No commitment required • Free consultation included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">Trusted by 250+ Malaysian F&B Operators</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">RM 2.3M</div>
                <div className="text-slate-600">Total Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">7 Days</div>
                <div className="text-slate-600">Average Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
