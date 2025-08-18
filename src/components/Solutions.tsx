import React from 'react';
import { Brain, BarChart3, Zap, CheckCircle, ArrowRight, Smartphone, Users, Shield } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface SolutionsProps {
  onBookCall: () => void;
}

export default function Solutions({ onBookCall }: SolutionsProps) {
  const handleStartTrial = (source: string) => {
    trackCTAClick('solutions', source);
    window.location.href = '/signup';
  };

  const handleBookDemo = (source: string) => {
    trackCTAClick('solutions', source);
    trackCalendlyOpen('solutions');
    onBookCall();
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      problem: "You're Guessing How Much Food to Prepare",
      solution: "AI predicts demand with 95% accuracy",
      benefits: [
        "Predict daily demand based on 50+ factors",
        "Weather, events, and historical data analysis",
        "Reduce overproduction by 40%",
        "Never run out of popular items again"
      ],
      timeline: "Immediate results",
      investment: "Included in $29/month",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Real-Time Waste Tracking",
      problem: "Manual Tracking Takes Hours Daily",
      solution: "Automated waste monitoring & analytics",
      benefits: [
        "Photo-based waste documentation",
        "Real-time waste composition analysis",
        "Staff accountability tracking",
        "Automated compliance reporting"
      ],
      timeline: "Set up in 1 day",
      investment: "Included in $29/month",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Smart Inventory Management",
      problem: "Stockouts & Overstocking Cost You $20K+ Yearly",
      solution: "Intelligent inventory optimization",
      benefits: [
        "Automatic reorder recommendations",
        "Multi-location inventory sync",
        "Supplier performance tracking",
        "Cost optimization suggestions"
      ],
      timeline: "Optimized in 1 week",
      investment: "Included in $29/month",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Interface",
      problem: "Complex Systems Confuse Your Staff",
      solution: "Simple mobile app for everyone",
      benefits: [
        "One-tap waste logging",
        "Photo documentation",
        "Real-time notifications",
        "Works on any device"
      ],
      timeline: "Staff trained in 1 day",
      investment: "Included in $29/month",
      color: "orange"
    },
    {
      icon: Users,
      title: "Staff Training & Engagement",
      problem: "Untrained Staff Waste More Food",
      solution: "Built-in training & gamification",
      benefits: [
        "Interactive training modules",
        "Waste reduction challenges",
        "Performance leaderboards",
        "Certification system"
      ],
      timeline: "Engagement starts immediately",
      investment: "Included in $29/month",
      color: "green"
    },
    {
      icon: Shield,
      title: "Compliance & Reporting",
      problem: "Manual Reports Take Days to Create",
      solution: "Automated compliance & analytics",
      benefits: [
        "Regulatory compliance reports",
        "Sustainability reporting",
        "Executive dashboards",
        "Export to PDF/Excel"
      ],
      timeline: "Reports generated instantly",
      investment: "Included in $29/month",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
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
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "bg-purple-600",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-600",
        text: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-600",
        text: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "bg-red-600",
        text: "text-red-600",
        button: "bg-red-600 hover:bg-red-700"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How WasteWise Solves Your Waste Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines 6 powerful features to eliminate food waste and boost your profits. 
            Everything you need in one simple platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}>
                <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-medium text-sm">❌ {feature.problem}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-6 border">
                  <p className="text-gray-900 font-medium text-sm">✅ {feature.solution}</p>
                </div>

                <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className={`${colors.text} flex-shrink-0 mt-0.5`} size={16} />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-600 text-xs font-medium">Results:</p>
                    <p className="text-gray-900 font-bold">{feature.timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs font-medium">Cost:</p>
                    <p className="text-gray-900 font-bold">{feature.investment}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleStartTrial(`Start Trial - ${feature.title}`)}
                    className={`flex-1 ${colors.button} text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium`}
                  >
                    Start Free Trial
                  </button>
                  <button
                    onClick={() => handleBookDemo(`Book Demo - ${feature.title}`)}
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                  >
                    See Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get All 6 Features + 30-Day Free Trial
          </h3>
          <p className="text-green-100 text-lg mb-6">
            Complete waste management solution. Most restaurants see 30% waste reduction within 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-white">
              <span className="text-3xl font-bold">$29/month</span>
              <span className="text-green-200 text-sm ml-2">after free trial</span>
            </div>
            <button
              onClick={() => handleStartTrial('Complete Package - Start Free Trial')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}