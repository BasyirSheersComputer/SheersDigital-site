import React from 'react';
import { TrendingUp, Shield, Clock, Award, Zap, Target, Users, BarChart3 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const BenefitCopy = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Maximize Profit Margins",
      description: "Eliminate waste and optimize inventory to boost profitability by 15-25% within the first quarter",
      stat: "RM 35,000+",
      statLabel: "Average monthly savings"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduce Operational Risk",
      description: "Automated compliance tracking and real-time monitoring prevent costly regulatory violations",
      stat: "98%",
      statLabel: "Compliance accuracy"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Management Time",
      description: "Automate routine tasks and free up 18+ hours weekly for strategic growth initiatives",
      stat: "18 hours",
      statLabel: "Time saved weekly"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gain Competitive Advantage",
      description: "Outperform competitors with superior operational efficiency and data-driven decision making",
      stat: "3x faster",
      statLabel: "Decision making speed"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerate Growth",
      description: "Scale operations efficiently across multiple locations with centralized control and insights",
      stat: "Unlimited",
      statLabel: "Location scaling"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Improve Accuracy",
      description: "AI-powered forecasting and automated tracking eliminate human errors and guesswork",
      stat: "95%",
      statLabel: "Forecasting accuracy"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empower Your Team",
      description: "Intuitive tools and training modules help staff perform at their highest potential",
      stat: "40%",
      statLabel: "Productivity increase"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting provide actionable insights for continuous improvement",
      stat: "Real-time",
      statLabel: "Performance tracking"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Transform Your F&B Operations with Proven Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Servora's comprehensive platform delivers measurable results across every aspect of your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-blue-600 mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {benefit.description}
              </p>

              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {benefit.stat}
                </div>
                <div className="text-xs text-blue-700 font-medium">
                  {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-blue-600 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Calculate Your Potential Savings
          </h3>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Based on average Malaysian F&B performance, here's what you could save with Servora:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">RM 20,000+</div>
              <div className="text-blue-100 text-sm">Monthly waste reduction</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">15%</div>
              <div className="text-blue-100 text-sm">Profit margin improvement</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">32 hours</div>
              <div className="text-blue-100 text-sm">Staff time saved monthly</div>
            </div>
          </div>

          <div className="bg-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold mb-8">Your Investment vs. Returns</h4>
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-sm text-blue-200 mb-2">Initial Investment</div>
                <div className="text-3xl font-bold mb-1">RM 6,500 - 18,500</div>
                <div className="text-sm text-blue-200">One-time setup</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-2">Monthly Returns</div>
                <div className="text-3xl font-bold mb-1">RM 20,000+ - 45,000</div>
                <div className="text-sm text-blue-200">Ongoing savings</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-2">ROI Timeline</div>
                <div className="text-4xl font-bold text-green-300">2-3 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitCopy;
