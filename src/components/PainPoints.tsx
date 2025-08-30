import React from 'react';
import { AlertTriangle, DollarSign, Clock, TrendingDown } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "RM 180,000 Annual Losses",
      description: "Malaysian F&B outlets lose an average of RM 180,000 yearly due to food waste and poor inventory control.",
      stat: "78% of operators"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "8 Hours Weekly Waste",
      description: "Staff spend 8+ hours per week on manual inventory counting and waste tracking instead of serving customers.",
      stat: "Every outlet"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "32% Order Errors",
      description: "Nearly 1 in 3 inventory orders contain errors due to manual processes and poor demand forecasting.",
      stat: "Industry average"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "15% Profit Margin Lost",
      description: "Poor inventory management directly reduces profit margins by 15-20% across Malaysian F&B operations.",
      stat: "Proven impact"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            The Hidden Costs Crushing Malaysian F&B Operators
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Based on 2024 industry research across 500+ Malaysian F&B outlets, 
            these challenges are costing you thousands monthly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{point.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{point.description}</p>
              <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                {point.stat}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Are You Ready to Stop the Bleeding?
            </h3>
            <p className="text-red-700 text-lg">
              Every day you delay is another RM 500+ lost to preventable waste and inefficiencies. 
              Our quick-win solutions can turn this around in just one week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;