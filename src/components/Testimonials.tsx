import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import CalendlyModal from './CalendlyModal';
import { AnimatedSection } from './AnimatedSection';

const Testimonials = () => {
  const { isOpen, openModal, closeModal } = useCalendlyModal();
  const testimonials = [
    {
      name: "Ahmad Rahman",
      position: "Owner, Nasi Lemak Corner",
      company: "F&B Business",
              content: "Servora transformed our inventory management. We reduced food waste by 45% and saved RM 25,000 monthly. The platform is so easy to use and gives us complete visibility over our operations.",
      rating: 5,
      image: "👨‍🍳",
      category: "Servora Platform"
    },
    {
      name: "Sarah Lim",
      position: "Operations Manager",
      company: "Café Delight Chain",
              content: "The Servora platform was game-changing for our 5-location chain. Our systems are now 3x faster and we can manage all locations from one dashboard. The AI forecasting is incredibly accurate and saved us RM 45,000 monthly.",
      rating: 5,
      image: "👩‍💼",
      category: "Servora Platform"
    },
    {
      name: "David Chen",
      position: "CEO",
      company: "Fresh Bites Restaurant",
              content: "Servora gave us complete visibility and control over our inventory. The supplier integration feature alone saved us 15 hours per week and RM 35,000 monthly. Our food costs dropped by 30% in the first quarter.",
      rating: 5,
      image: "👨‍💻",
      category: "Servora Platform"
    },
    {
      name: "Nurul Huda",
      position: "Manager",
      company: "Warung Pak Mat",
      content: "The Servora platform helped us manage our increased inventory perfectly. The waste logging automation feature is brilliant - we now track everything automatically and have reduced waste by 60%.",
      rating: 5,
      image: "👩‍🍳",
      category: "Servora Platform"
    },
    {
      name: "Rajesh Kumar",
      position: "Operations Director",
      company: "Spice Garden Group",
      content: "Servora was the foundation of our digital transformation. The compliance automation feature ensures we never miss regulatory requirements, and the reporting is comprehensive and easy to understand.",
      rating: 5,
      image: "👨‍🔧",
      category: "Servora Platform"
    },
    {
      name: "Lisa Wong",
      position: "Owner",
      company: "Bubble Tea Paradise",
      content: "Servora's inventory tracking and AI forecasting saved us 20 hours per week. We now have complete control over our supply chain and operations. The ROI calculator showed us exactly how much we'd save.",
      rating: 5,
      image: "👩‍🎨",
      category: "Servora Platform"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Success Stories from Malaysian F&B Leaders
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              See how the Servora platform is transforming F&B operations across Malaysia with intelligent inventory management and waste reduction.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4 text-yellow-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="text-lg text-slate-800 mb-4">
                  <Quote className="h-6 w-6 inline-block mr-2 text-slate-600" />
                  {testimonial.content}
                </p>
                <div className="flex items-center mt-4 text-slate-600 text-sm">
                  <span>{testimonial.name}</span>
                  <span className="mx-1">•</span>
                  <span>{testimonial.position}</span>
                  <span className="mx-1">•</span>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">
                Join These Success Stories
              </h3>
              <p className="text-blue-700 text-base md:text-lg mb-4 md:mb-6">
                Start with Servora and transform your F&B operations. Get a free consultation to see how our platform can help you reduce waste and increase profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button 
                  onClick={openModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
                >
                  Book Free Consultation
                </button>
                <Link to="/get-started" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
                  View Case Studies
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
