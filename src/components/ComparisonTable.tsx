import React from 'react';
import { Check, X, AlertTriangle, DollarSign, Clock, TrendingDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const ComparisonTable = () => {
  const painPoints = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "RM 540,000 Annual Profit Drain",
      description: "Operational inefficiencies destroying competitive edge"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "8 Hours Weekly Management Waste",
      description: "Manual processes instead of strategic growth"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "32% Operational Errors",
      description: "Poor data visibility and manual forecasting"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "15% Profit Margin Erosion",
      description: "Direct impact on profitability"
    }
  ];

  const competitors = [
    { name: "Traditional POS Systems", color: "bg-red-100 text-red-800" },
    { name: "Basic Inventory Software", color: "bg-orange-100 text-orange-800" },
    { name: "Manual Processes", color: "bg-yellow-100 text-yellow-800" },
    { name: "Servora Platform", color: "bg-green-100 text-green-800" }
  ];

  const comparisonData = [
    { pain: 0, traditional: false, basic: false, manual: false, servora: true },
    { pain: 1, traditional: false, basic: false, manual: false, servora: true },
    { pain: 2, traditional: false, basic: false, manual: false, servora: true },
    { pain: 3, traditional: false, basic: false, manual: false, servora: true }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Servora Solves Problems Others Can't
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our comprehensive platform addresses the critical pain points that traditional solutions miss
            </p>
          </div>
        </AnimatedSection>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <AnimatedSection animation="slideUp" delay={0.4}>
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800">Pain Points</h3>
                </div>
                {competitors.map((competitor, index) => (
                  <div key={index} className="p-4 text-center">
                    <div className={`inline-block px-4 py-2 rounded-lg font-semibold ${competitor.color}`}>
                      {competitor.name}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {painPoints.map((pain, painIndex) => (
                <AnimatedSection key={painIndex} animation="slideUp" delay={0.1 * (painIndex + 1)}>
                  <div className="grid grid-cols-5 gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                    {/* Pain Point */}
                    <div className="flex items-start space-x-3">
                      <div className="text-red-600 flex-shrink-0 mt-1">
                        {pain.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{pain.title}</h4>
                        <p className="text-sm text-slate-600">{pain.description}</p>
                      </div>
                    </div>

                    {/* Competitor Solutions */}
                    {competitors.map((competitor, compIndex) => {
                      const isServora = compIndex === 3;
                      const solves = isServora; // Servora solves all pain points
                      
                      return (
                        <div key={compIndex} className="flex justify-center items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isServora 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-red-100 text-red-600'
                          }`}>
                            {solves ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <X className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Summary */}
            <AnimatedSection animation="slideUp" delay={0.8}>
              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    The Complete Solution for F&B Excellence
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    While other solutions address individual problems, Servora provides comprehensive operational transformation 
                    that eliminates all major pain points simultaneously.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-red-600 mb-2">0%</div>
                      <div className="text-sm text-slate-600">Pain points solved by traditional solutions</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                      <div className="text-sm text-slate-600">Pain points solved by basic software</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-sm text-slate-600">Pain points solved by Servora</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
