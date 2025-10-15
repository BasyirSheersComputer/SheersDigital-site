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
    <section id="comparison" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Why Servora Solves Problems Others Can't
          </h2>
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our comprehensive platform addresses the critical pain points that traditional solutions miss
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-sm border border-gray-200">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900 min-w-[300px]">
                    Pain Points
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="text-center p-6 font-semibold text-gray-900 min-w-[150px]">
                      <div className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${competitor.color}`}>
                        {competitor.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody>
                {painPoints.map((pain, painIndex) => (
                  <tr key={painIndex} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    {/* Pain Point Column */}
                    <td className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-red-600 flex-shrink-0 mt-1">
                          {pain.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{pain.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{pain.description}</p>
                        </div>
                      </div>
                    </td>
                    
                    {/* Competitor Solution Columns */}
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className="text-center p-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
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
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 border border-green-100">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Complete Solution for F&B Excellence
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                While other solutions address individual problems, Servora provides comprehensive operational transformation 
                that eliminates all major pain points simultaneously.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-red-600 mb-3">0%</div>
                  <div className="text-sm text-gray-600">Pain points solved by Traditional solutions</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-orange-600 mb-3">0%</div>
                  <div className="text-sm text-gray-600">Pain points solved by Basic software</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-green-600 mb-3">100%</div>
                  <div className="text-sm text-gray-600">Pain points solved by Servora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
