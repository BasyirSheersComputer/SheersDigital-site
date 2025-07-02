import React from 'react';
import { Brain, Cloud, Zap, CheckCircle, ArrowRight, Award, Clock, TrendingUp, Rocket } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';
import GrowthChart from './charts/GrowthChart';

interface SolutionsProps {
  onBookCall: () => void;
}

export default function Solutions({ onBookCall }: SolutionsProps) {
  const handleBookCall = (source: string) => {
    trackCTAClick('solutions', source);
    trackCalendlyOpen('solutions');
    onBookCall();
  };

  const solutions = [
    {
      icon: Brain,
      title: "AI Automation Revolution",
      hook: "The $1M AI Secret That Automates 85% of Your Business",
      problem: "Your team wastes 40+ hours weekly on tasks AI can do in minutes",
      solution: "Custom AI automation that runs your business while you sleep",
      benefits: [
        "Eliminate 85% of manual work in 30 days",
        "AI customer service that never sleeps (24/7 revenue)",
        "Predictive analytics that see the future",
        "Scale to 10X revenue without hiring anyone"
      ],
      timeline: "30 days",
      investment: "From RM25,000",
      color: "purple",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&q=80",
      keywords: "AI automation malaysia, artificial intelligence, machine learning, business automation"
    },
    {
      icon: Cloud,
      title: "Cloud Transformation Domination",
      hook: "How to 10X Your Business Speed While Cutting Costs 60%",
      problem: "Legacy systems are bleeding RM50K+ monthly and killing growth",
      solution: "Military-grade cloud infrastructure that scales infinitely",
      benefits: [
        "10X faster operations overnight",
        "60% cost reduction guaranteed",
        "Infinite scalability (handle 1M customers instantly)",
        "Bulletproof security (Fort Knox level)"
      ],
      timeline: "45 days",
      investment: "From RM35,000",
      color: "blue",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80",
      keywords: "cloud transformation malaysia, digital infrastructure, cloud migration, scalability"
    },
    {
      icon: Rocket,
      title: "Digital Ecosystem Mastery",
      hook: "The Complete Digital Empire That Prints Money 24/7",
      problem: "Disconnected systems creating chaos and lost opportunities",
      solution: "Integrated digital ecosystem that works like a money machine",
      benefits: [
        "All systems talking to each other (no more chaos)",
        "Real-time business intelligence (see everything)",
        "Automated revenue streams (money while sleeping)",
        "Market domination positioning"
      ],
      timeline: "60 days",
      investment: "From RM50,000",
      color: "emerald",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80",
      keywords: "digital ecosystem malaysia, business integration, digital solutions, automation platform"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "bg-purple-600",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-600",
        text: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        icon: "bg-emerald-600",
        text: "text-emerald-600",
        button: "bg-emerald-600 hover:bg-emerald-700"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="solutions" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="text-yellow-500" size={24} />
            <span className="text-yellow-600 font-bold">Malaysia's #1 Digital Transformation Company</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The 3-Step System That Turns Any Business Into a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Digital Money Machine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Stop competing on price. Start dominating with technology. Here's the exact system we use to 
            10X Malaysian businesses in 90 days (even if they're starting from zero).
          </p>
        </div>

        {/* Growth Chart */}
        <div className="mb-20">
          <GrowthChart />
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            const Icon = solution.icon;
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${colors.icon} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{solution.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Hook */}
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 font-bold text-sm">{solution.hook}</p>
                  </div>
                  
                  {/* Problem */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <p className="text-red-800 text-sm">❌ {solution.problem}</p>
                  </div>
                  
                  {/* Solution */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-medium text-sm">✅ {solution.solution}</p>
                  </div>

                  {/* Benefits */}
                  <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                  <ul className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className={`${colors.text} flex-shrink-0 mt-0.5`} size={16} />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Timeline & Investment */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-gray-600 text-xs font-medium">Timeline:</p>
                      <p className="text-gray-900 font-bold">{solution.timeline}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-xs font-medium">Investment:</p>
                      <p className="text-gray-900 font-bold">{solution.investment}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookCall(`Get ${solution.title}`)}
                    className={`w-full ${colors.button} text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 font-semibold`}
                  >
                    <span>Get This Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Rocket className="text-blue-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-blue-600">1,247%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="text-emerald-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-emerald-600">90</div>
            <div className="text-sm text-gray-600">Days to 10X</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-yellow-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-yellow-600">4.9★</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
        </div>

        {/* Ultimate Package */}
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop&q=80" 
              alt="Digital transformation success"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The "Digital Empire" Package
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              All 3 systems + 12 months of hand-holding + guaranteed 10X results or we work for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-white">
                <span className="text-4xl font-bold">RM75,000</span>
                <span className="text-blue-200 line-through ml-2 text-xl">RM110,000</span>
                <div className="text-sm text-blue-200">Save RM35,000 + Risk-Free Guarantee</div>
              </div>
              <button
                onClick={() => handleBookCall('Digital Empire Package - Book Strategy Call')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-bold flex items-center space-x-2 shadow-xl"
              >
                <span>Claim Your Digital Empire</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}