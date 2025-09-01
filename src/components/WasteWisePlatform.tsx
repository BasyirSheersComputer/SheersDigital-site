import React from 'react';
import { Smartphone, Brain, BarChart, Shield, Users, Zap } from 'lucide-react';

const WasteWisePlatform = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Intuitive Mobile App",
      description: "Log waste, track inventory, and access insights from anywhere in your restaurant."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations to optimize menu items and reduce waste patterns."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Monitor performance with live dashboards and automated reporting for all locations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Stay ahead of Malaysian food safety regulations with automated compliance tracking."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Training Hub",
      description: "Built-in training modules help your staff master waste reduction techniques."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant ROI Tracking",
      description: "See your savings in real-time with detailed cost impact analysis and profit optimization."
    }
  ];

  return (
    <section id="platform" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              The WasteWise Platform That Powers Everything
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our comprehensive WasteWise platform powers all our solutions, providing 
              the foundation for complete F&B optimization and market dominance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Comprehensive Dashboard</h4>
                  <p className="text-slate-400">Monitor all aspects of your operation from a single, intuitive interface.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Predictive Analytics</h4>
                  <p className="text-slate-400">AI algorithms learn your patterns and optimize inventory automatically.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Multi-Location Management</h4>
                  <p className="text-slate-400">Scale across all your outlets with centralized control and insights.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-600/20 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-semibold mb-2">Included with Every Solution</h4>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">No Extra Cost</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">Full platform access included with any enterprise solution</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors duration-300">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Started with Any Solution
          </button>
          <p className="text-slate-400 mt-3">Full WasteWise platform access included • No additional cost</p>
        </div>
      </div>
    </section>
  );
};

export default WasteWisePlatform;