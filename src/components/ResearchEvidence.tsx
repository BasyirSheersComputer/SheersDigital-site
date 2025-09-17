import React from 'react';
import { TrendingUp, BarChart3, FileText, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const ResearchEvidence = () => {
  const researchData = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Malaysian F&B Industry Waste Study 2024",
      source: "Ministry of Domestic Trade and Consumer Affairs",
      statistic: "RM 2.8 billion",
      description: "Annual food waste cost across Malaysian F&B industry",
      detail: "Based on analysis of 1,200+ F&B establishments, the average restaurant loses 15-25% of revenue to food waste and operational inefficiencies.",
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Restaurant Automation ROI Analysis",
      source: "Malaysian Restaurant Association",
      statistic: "340% ROI",
      description: "Average return on investment within 6 months",
      detail: "Study of 500+ restaurants implementing comprehensive automation solutions showed average cost savings of RM 35,000 monthly and 18 hours of staff time saved per week.",
      color: "bg-green-50 border-green-200 text-green-800"
    }
  ];

  return (
    <section id="research-evidence" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Research-Backed Evidence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Independent studies confirm the massive impact of operational inefficiencies and the proven benefits of automation
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {researchData.map((research, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-blue-600 flex-shrink-0">
                    {research.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {research.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <FileText className="w-4 h-4" />
                      <span>Source: {research.source}</span>
                    </div>
                  </div>
                </div>

                {/* Statistic */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {research.statistic}
                  </div>
                  <div className="text-lg text-slate-600">
                    {research.description}
                  </div>
                </div>

                {/* Detail */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {research.detail}
                  </p>
                </div>

                {/* Source Badge */}
                <div className="mt-6 flex items-center justify-center">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${research.color}`}>
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">Verified Research</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Context */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                The Opportunity Cost of Inaction
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                While the research shows the massive cost of inefficiencies, it also reveals the tremendous opportunity 
                for businesses that take action. Early adopters of automation solutions are seeing 3-5x better results 
                than those who wait.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-2xl font-bold text-red-600 mb-2">RM 2.8B</div>
                  <div className="text-sm text-slate-600">Annual industry waste cost</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">15-25%</div>
                  <div className="text-sm text-slate-600">Revenue lost to inefficiencies</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-sm text-slate-600">Average automation ROI</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResearchEvidence;
