import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Shield, Package, Target, ChevronDown } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useCalendlyModal } from '../../hooks/useCalendlyModal';
import CalendlyModal from '../CalendlyModal';
import { useLocation } from 'react-router-dom';

const GetStarted = () => {
  const [selectedPackage, setSelectedPackage] = useState('quick-win');
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const { isOpen, openModal, closeModal } = useCalendlyModal();
  const location = useLocation();

  // Progress steps data
  const progressSteps = [
    { id: 1, title: 'Choose Package', icon: Package, section: 'packages', completed: selectedPackage !== 'quick-win' },
    { id: 2, title: 'Select Solutions', icon: Target, section: 'solutions', completed: selectedSolutions.length > 0 },
    { id: 3, title: 'Review & Book', icon: CheckCircle, section: 'summary', completed: false }
  ];

  // Calculate progress percentage
  const progressPercentage = Math.round((currentStep / progressSteps.length) * 100);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Determine current section based on scroll position
      const sections = ['hero', 'packages', 'solutions', 'summary'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setCurrentSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation to solutions section
  useEffect(() => {
    if (location.hash === '#solutions') {
      setSelectedPackage('quick-win');
      setCurrentStep(2);
      // Scroll to solutions section after a short delay to ensure it's rendered
      setTimeout(() => {
        const element = document.getElementById('solutions');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  // Update current step based on user actions
  useEffect(() => {
    if (selectedPackage === 'wastewise-platform') {
      setCurrentStep(3);
    } else if (selectedSolutions.length > 0) {
      setCurrentStep(3);
    } else if (selectedPackage === 'quick-win') {
      setCurrentStep(2);
    }
  }, [selectedPackage, selectedSolutions]);

     const solutions = [
     {
       id: 'inventory-integration',
       title: 'Eliminate Stockouts & Overstocking',
       description: 'Never run out of ingredients or waste money on excess inventory again',
       price: 'RM 8,500',
       timeline: '7 days',
       features: ['Real-time stock alerts', 'POS integration', 'Automated reporting', 'Mobile dashboard', 'Multi-location sync', 'Advanced analytics'],
       savings: 'RM 25,000/month'
     },
     {
       id: 'waste-logging',
       title: 'End Food Waste & Boost Profit Margins',
       description: 'Automatically track and eliminate waste to maximize your profitability',
       price: 'RM 6,500',
       timeline: '5 days',
       features: ['Mobile waste logging', 'Photo documentation', 'Automated categorization', 'Weekly insights', 'AI-powered analysis', 'Real-time alerts'],
       savings: 'RM 18,000/month'
     },
     {
       id: 'supplier-integration',
       title: 'Optimize Procurement & Reduce Costs',
       description: 'Get the best prices and quality from suppliers while automating orders',
       price: 'RM 12,500',
       timeline: '10 days',
       features: ['Supplier performance tracking', 'Cost comparison tools', 'Order automation', 'Quality metrics', 'Contract management', 'Payment automation'],
       savings: 'RM 35,000/month'
     },
     {
       id: 'ai-forecasting',
       title: 'Predict Demand & Maximize Sales',
       description: 'Use AI to forecast customer demand and optimize your menu planning',
       price: 'RM 18,500',
       timeline: '14 days',
       features: ['AI demand prediction', 'Sales pattern analysis', 'Seasonal adjustments', 'Order recommendations', 'Machine learning optimization', 'Predictive analytics'],
       savings: 'RM 45,000/month'
     },
     {
       id: 'compliance-automation',
       title: 'Automate Compliance & Reduce Risk',
       description: 'Stay compliant with regulations while saving time on reporting',
       price: 'RM 7,500',
       timeline: '7 days',
       features: ['Automated compliance reports', 'Custom dashboards', 'Audit trail', 'Regulatory alignment', 'Real-time monitoring', 'Automated submissions'],
       savings: 'RM 22,000/month'
     }
   ];

  const packages = [
    {
      id: 'quick-win',
             title: 'Enterprise Starter Solution',
       subtitle: 'Start Small, Dominate Big',
       description: 'Choose one targeted solution and see immediate competitive advantage in 7 days',
      price: 'From RM 6,500',
      savings: 'RM 18,000-45,000/month',
      features: [
        'Free consultation & audit',
        '7-day implementation',
        '50% off WasteWise upgrade',
        '30-day support included',
        'ROI guarantee',
        'Premium onboarding'
      ],
      popular: false
    },
    {
      id: 'wastewise-platform',
             title: 'Full WasteWise Platform',
       subtitle: 'Complete Market Domination',
       description: 'Get everything you need for complete operational excellence and market leadership',
      price: 'RM 25,000/month',
      savings: 'RM 75,000-120,000/month',
      features: [
        'All 5 solutions included',
        '30-day free trial',
        'Dedicated success manager',
        '24/7 priority support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-location support',
        'Executive dashboard',
        'White-label options'
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
      return 'RM 25,000/month';
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
      return 'RM 75,000-120,000/month';
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
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Progress Guide */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-4 w-56">
                     <div className="text-center mb-4">
             <div className="text-2xl font-bold text-blue-600">{Math.round(scrollProgress)}%</div>
             <div className="text-xs text-slate-500">Progress</div>
           </div>
          
          {/* Current Section Indicator */}
          <div className="mb-4">
            <div className="text-xs text-slate-500 mb-2">Current Section:</div>
            <div className="text-sm font-semibold text-blue-600 capitalize">
              {currentSection === 'hero' ? 'Getting Started' : 
               currentSection === 'packages' ? 'Choose Package' :
               currentSection === 'solutions' ? 'Select Solutions' :
               currentSection === 'summary' ? 'Review & Book' : currentSection}
            </div>
          </div>
          
                     {/* Progress Steps */}
           <div className="space-y-3">
             {progressSteps.map((step) => {
               const Icon = step.icon;
               const isActive = currentSection === step.section;
               const isCompleted = step.completed || (currentSection !== step.section && progressSteps.findIndex(s => s.section === currentSection) > progressSteps.findIndex(s => s.section === step.section));
               
               const handleStepClick = () => {
                 const element = document.getElementById(step.section);
                 if (element) {
                   element.scrollIntoView({ behavior: 'smooth' });
                 }
               };
               
               return (
                 <div 
                   key={step.id} 
                   className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50 rounded-lg p-2 transition-all duration-200"
                   onClick={handleStepClick}
                 >
                   <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                     isCompleted 
                       ? 'bg-green-500 text-white' 
                       : isActive 
                         ? 'bg-blue-500 text-white animate-pulse' 
                         : 'bg-slate-200 text-slate-500'
                   }`}>
                     {isCompleted ? (
                       <CheckCircle className="w-3 h-3" />
                     ) : (
                       <Icon className="w-3 h-3" />
                     )}
                   </div>
                   <div className="flex-1">
                     <div className={`text-xs font-medium transition-all duration-300 ${
                       isCompleted 
                         ? 'text-green-600' 
                         : isActive 
                           ? 'text-blue-600' 
                           : 'text-slate-500'
                     }`}>
                       {step.title}
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
          
          {/* Next Action Hint */}
          {currentSection !== 'summary' && (
            <div className="mt-4 p-2 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-xs text-blue-600 font-medium mb-1">Next:</div>
              <div className="text-xs text-blue-800">
                {currentSection === 'hero' ? 'Scroll down to choose your package' : 
                 currentSection === 'packages' ? 'Select your package type' :
                 currentSection === 'solutions' ? 'Choose your solutions and continue' : ''}
              </div>
            </div>
          )}
        </div>
      </div>
      
                            {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden">
           {/* Floating Orbs with Enhanced Animation */}
           <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-float animate-glow" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
           <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-float animate-glow" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
           <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-float animate-glow" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
           <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-blue-200 rounded-full opacity-25 animate-float animate-glow" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
           
           {/* Additional Floating Elements */}
           <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
           <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-indigo-400 rounded-full opacity-35 animate-float" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>
           
           {/* Animated Grid Lines */}
           <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
             <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
             <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
           </div>
           
           {/* Enhanced Particle Effects */}
           <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }}></div>
           <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-80 animate-ping" style={{ animationDelay: '1.5s' }}></div>
           <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '3s' }}></div>
           <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-90 animate-ping" style={{ animationDelay: '2.5s' }}></div>
           
                       {/* Animated Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400 rounded-full opacity-5 animate-ping" style={{ animationDuration: '4s' }}></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center max-w-4xl mx-auto">
             {/* Animated Title */}
             <div className="mb-6">
               <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                 <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                   Build Your Perfect
                 </span>
                 <br />
                 <span className="inline-block animate-slide-in-right text-blue-300" style={{ animationDelay: '0.6s' }}>
                   F&B Empire
                 </span>
               </h1>
             </div>
             
             {/* Animated Description */}
             <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
               Choose the solutions that fit your enterprise needs. Start with one or get everything. 
               Every option comes with guaranteed competitive advantage and expert support.
             </p>
             
             {/* Animated Feature Icons */}
             <div className="flex items-center justify-center space-x-8 text-sm text-slate-400 mb-8">
               <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                 <TrendingUp className="w-4 h-4 mr-2 animate-pulse" />
                 <span className="animate-slide-in-right">Guaranteed ROI</span>
               </div>
               <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                 <Clock className="w-4 h-4 mr-2 animate-pulse" />
                 <span className="animate-slide-in-right">Fast Implementation</span>
               </div>
               <div className="flex items-center animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                 <Shield className="w-4 h-4 mr-2 animate-pulse" />
                 <span className="animate-slide-in-right">Expert Support</span>
               </div>
             </div>
             
             {/* Animated Stats */}
             <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
               <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                 <div className="text-3xl font-bold text-blue-300 mb-1 animate-count-up">250+</div>
                 <div className="text-sm text-slate-400">Premium Chains</div>
               </div>
               <div className="text-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
                 <div className="text-3xl font-bold text-blue-300 mb-1 animate-count-up">RM 2.3M</div>
                 <div className="text-sm text-slate-400">Total Savings</div>
               </div>
               <div className="text-center animate-fade-in-up" style={{ animationDelay: '2.2s' }}>
                 <div className="text-3xl font-bold text-blue-300 mb-1 animate-count-up">98%</div>
                 <div className="text-sm text-slate-400">Success Rate</div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Animated Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
           </div>
         </div>
       </section>

             {/* Package Selection */}
       <section id="packages" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Path to Market Dominance</h2>
             <p className="text-lg text-slate-600">Select the package that best fits your enterprise needs</p>
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
         <section id="solutions" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                           <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Enterprise Solution</h2>
             <p className="text-lg text-slate-600">Select one or more solutions to build your custom enterprise package</p>
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
             
             {/* Continue Button */}
             <div className="text-center mt-12">
               <button 
                 onClick={() => {
                   const summarySection = document.querySelector('#summary');
                   if (summarySection) {
                     summarySection.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto group"
               >
                 Continue to Summary
                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
             </div>
          </div>
        </section>
      )}

             {/* Summary & CTA */}
       <section id="summary" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8">
                             <h2 className="text-3xl font-bold mb-8 text-center">Your Enterprise Transformation Summary</h2>
              
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
                                 <button 
                   onClick={openModal}
                   className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center mx-auto group"
                 >
                   Start Your Market Domination Now
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
                         <h2 className="text-3xl font-bold text-slate-800 mb-12">Trusted by 250+ Premium Malaysian F&B Chains</h2>
            
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
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default GetStarted;
