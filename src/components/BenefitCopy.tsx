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
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Transform Your F&B Operations with Proven Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how Servora's comprehensive platform delivers measurable results across every aspect of your business
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-blue-700">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <AnimatedSection animation="slideUp" delay={0.8}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Calculate Your Potential Savings
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Based on average Malaysian F&B performance, here's what you could save with Servora:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">RM 20,000+</div>
                <div className="text-blue-100">Monthly waste reduction</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-blue-100">Profit margin improvement</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">32 hours</div>
                <div className="text-blue-100">Staff time saved monthly</div>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">Your Investment vs. Returns</h4>
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-sm text-blue-200 mb-2">Initial Investment</div>
                  <div className="text-2xl font-bold">RM 6,500 - 18,500</div>
                  <div className="text-sm text-blue-200">One-time setup</div>
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-2">Monthly Returns</div>
                  <div className="text-2xl font-bold">RM 20,000+ - 45,000</div>
                  <div className="text-sm text-blue-200">Ongoing savings</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-sm text-blue-200 mb-1">ROI Timeline</div>
                  <div className="text-3xl font-bold text-green-300">2-3 months</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BenefitCopy;
