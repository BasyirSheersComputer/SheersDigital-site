import React from 'react';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

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
      icon: Cloud,
      title: "Cloud Migration & Digital Transformation",
      problem: "Your Legacy Systems Are Costing You RM25,000/Month",
      solution: "Complete cloud migration with zero downtime",
      benefits: [
        "50% reduction in IT costs within 90 days",
        "3x faster system performance",
        "Automatic backups & disaster recovery",
        "Scale resources up/down instantly"
      ],
      timeline: "30-45 days",
      investment: "From RM15,000",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Data Protection",
      problem: "One Breach Could Cost You RM300,000+",
      solution: "Military-grade security infrastructure",
      benefits: [
        "99.99% protection against cyber attacks",
        "Real-time threat monitoring & response",
        "Compliance with Malaysian data laws",
        "Employee security training included"
      ],
      timeline: "14-21 days",
      investment: "From RM8,000",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Business Process Automation",
      problem: "Manual Processes Are Killing Your Productivity",
      solution: "Custom automation & system integration",
      benefits: [
        "Eliminate 80% of manual data entry",
        "Reduce errors by 95%",
        "Free up 25+ hours per week per employee",
        "Real-time reporting & analytics"
      ],
      timeline: "21-30 days",
      investment: "From RM12,000",
      color: "purple"
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
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Solve Your 3 Biggest IT Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've perfected a proven 3-step system that eliminates these problems permanently. 
            Here's exactly what we do and the results you can expect:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            const Icon = solution.icon;
            
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}>
                <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-medium text-sm">❌ {solution.problem}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-6 border">
                  <p className="text-gray-900 font-medium text-sm">✅ {solution.solution}</p>
                </div>

                <h4 className="font-bold text-gray-900 mb-3">What You Get:</h4>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className={`${colors.text} flex-shrink-0 mt-0.5`} size={16} />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-600 text-xs font-medium">Timeline:</p>
                    <p className="text-gray-900 font-bold">{solution.timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs font-medium">Investment:</p>
                    <p className="text-gray-900 font-bold">{solution.investment}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleBookCall(`Get ${solution.title}`)}
                  className={`w-full ${colors.button} text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2`}
                >
                  <span>Get This Solution</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get All 3 Solutions + Save RM10,000
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Complete IT transformation package. Most KL businesses see ROI within 60 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-white">
              <span className="text-3xl font-bold">RM25,000</span>
              <span className="text-blue-200 line-through ml-2">RM35,000</span>
            </div>
            <button
              onClick={() => handleBookCall('Complete Package - Book Strategy Call')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center space-x-2"
            >
              <span>Book Strategy Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}