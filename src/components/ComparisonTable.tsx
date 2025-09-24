import React from 'react';
import { Check, X, AlertTriangle, DollarSign, Clock, TrendingDown } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import CollapsibleSection from './CollapsibleSection';

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
    { 
      name: "Traditional", 
      color: "bg-red-100 text-red-800 border-red-200",
      solves: false
    },
    { 
      name: "Basic", 
      color: "bg-orange-100 text-orange-800 border-orange-200",
      solves: false
    },
    { 
      name: "Servora", 
      color: "bg-green-100 text-green-800 border-green-200",
      solves: true
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <CollapsibleSection
          id="comparison-section"
          title="Why Servora Solves Problems Others Can't"
          defaultExpanded={true}
          className="mb-8"
          maxContentHeight="80vh"
          enableVerticalScroll={true}
        >
          <div className="text-center mb-8">
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our comprehensive platform addresses the critical pain points that traditional solutions miss
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            {/* Scrollable Content */}
            <div 
              className="overflow-x-auto horizontal-scroll-container scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="min-w-max pb-4">
                {/* Standard Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-slate-200">
                    {/* Table Header */}
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-4 font-semibold text-slate-800 min-w-[300px]">
                          Pain Points
                        </th>
                        {competitors.map((competitor, index) => (
                          <th key={index} className="text-center p-4 font-semibold text-slate-800 min-w-[120px]">
                            <div className={`inline-block px-3 py-1 rounded-lg text-sm ${competitor.color}`}>
                              {competitor.name}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    
                    {/* Table Body */}
                    <tbody>
                      {painPoints.map((pain, painIndex) => (
                        <AnimatedSection key={painIndex} animation="slideUp" delay={0.1 * (painIndex + 1)}>
                          <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            {/* Pain Point Column */}
                            <td className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className="text-red-600 flex-shrink-0 mt-1">
                                  {pain.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-slate-800 mb-1">{pain.title}</h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">{pain.description}</p>
                                </div>
                              </div>
                            </td>
                            
                            {/* Competitor Solution Columns */}
                            {competitors.map((competitor, compIndex) => (
                              <td key={compIndex} className="text-center p-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                                  competitor.solves 
                                    ? 'bg-green-100 text-green-600' 
                                    : 'bg-red-100 text-red-600'
                                }`}>
                                  {competitor.solves ? (
                                    <Check className="w-5 h-5" />
                                  ) : (
                                    <X className="w-5 h-5" />
                                  )}
                                </div>
                              </td>
                            ))}
                          </tr>
                        </AnimatedSection>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
                          <div className="text-sm text-slate-600">Pain points solved by Traditional solutions</div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                          <div className="text-3xl font-bold text-orange-600 mb-2">0%</div>
                          <div className="text-sm text-slate-600">Pain points solved by Basic software</div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                          <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                          <div className="text-sm text-slate-600">Pain points solved by Servora</div>
                        </div>
                      </div>
              </div>
            </div>
          </AnimatedSection>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default ComparisonTable;
