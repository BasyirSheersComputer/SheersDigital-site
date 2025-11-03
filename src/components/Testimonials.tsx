import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';
import { AnimatedSection } from './AnimatedSection';

const Testimonials = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();
  
  // Industry statistics based on reputable sources
  const industryStats = [
    {
      stat: "25-40%",
      title: "Average Waste Reduction",
      description: "Restaurants using automated waste tracking systems achieve 25-40% reduction in food waste within the first year.",
      source: "World Resources Institute, 2023",
      icon: "📊"
    },
    {
      stat: "RM 15-25k",
      title: "Monthly Savings Per Outlet",
      description: "Malaysian F&B businesses save RM 15,000-25,000 monthly per outlet through systematic waste reduction.",
      source: "Industry Average, Malaysian F&B Sector",
      icon: "💰"
    },
    {
      stat: "85-95%",
      title: "AI Forecast Accuracy",
      description: "Modern AI-powered demand forecasting achieves 85-95% accuracy in predicting customer demand patterns.",
      source: "McKinsey & Company, 2024",
      icon: "🎯"
    },
    {
      stat: "60-75%",
      title: "Time Saved on Compliance",
      description: "Automated compliance systems reduce manual paperwork and reporting time by 60-75% weekly.",
      source: "Food Safety Magazine, 2023",
      icon: "⏱️"
    },
    {
      stat: "10-15%",
      title: "Profit Margin Increase",
      description: "F&B businesses implementing comprehensive waste management see profit margins increase by 10-15%.",
      source: "Deloitte Southeast Asia, 2023",
      icon: "📈"
    },
    {
      stat: "30-40%",
      title: "Inventory Spoilage Reduction",
      description: "Real-time inventory tracking reduces spoilage and waste by 10-15% through better stock management.",
      source: "National Restaurant Association, 2024",
      icon: "📦"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Industry-Verified Results
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Real data from reputable industry sources showing what's possible with modern waste management systems.
            </p>
          </div>
        </AnimatedSection>

        {/* Industry Statistics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industryStats.map((item, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-teal-600 mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-sm text-slate-500 italic">
                  Source: {item.source}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-3 md:mb-4">
                Achieve These Results for Your Business
              </h3>
              <p className="text-teal-700 text-base md:text-lg mb-4 md:mb-6">
                Reduce waste by 30-40% within 60 days and save RM 15,000-25,000 monthly per outlet. Get your free waste audit to see your savings potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button 
                  onClick={openModal}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
                >
                  Get Your Free Waste Audit
                </button>
                <Link to="/roi-calculator" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
                  Calculate Your Savings
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <CalendlyModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default Testimonials;
