import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Chef Ahmad Hassan",
      restaurant: "Starbucks Malaysia",
      location: "Kuala Lumpur",
      role: "Operations Director",
      content: "Servora AI transformed our operations across 50+ locations. We achieved 42% waste reduction in just 30 days, saving RM 180,000 monthly. The Malaysia-specific AI models are incredibly accurate!",
      rating: 5,
      savings: "RM 180,000",
      wasteReduction: "42%",
      avatar: "AH"
    },
    {
      name: "Sarah Tan",
      restaurant: "Secret Recipe",
      location: "Penang",
      role: "General Manager",
      content: "As a premium F&B chain, we needed enterprise-grade waste management. Servora AI delivered 45% waste reduction and RM 220,000 annual savings. The multi-location control is game-changing.",
      rating: 5,
      savings: "RM 220,000",
      wasteReduction: "45%",
      avatar: "ST"
    },
    {
      name: "David Wong",
      restaurant: "Urban Coffee Co.",
      location: "Johor Bahru",
      role: "Owner",
      content: "The AI demand forecasting with 94% accuracy eliminated our overproduction issues. We're saving RM 150,000 annually and our staff can focus on customer experience instead of manual tracking.",
      rating: 5,
      savings: "RM 150,000",
      wasteReduction: "38%",
      avatar: "DW"
    },
    {
      name: "Lisa Chen",
      restaurant: "The Coffee Bean",
      location: "Klang Valley",
      role: "Operations Manager",
      content: "Servora AI's compliance reporting saved us hours of paperwork. The automated reports meet all Malaysian regulatory requirements, and the audit trail gives us complete peace of mind.",
      rating: 5,
      savings: "RM 190,000",
      wasteReduction: "41%",
      avatar: "LC"
    },
    {
      name: "Mohammed Ali",
      restaurant: "Gloria Jean's",
      location: "Malacca",
      role: "Franchise Owner",
      content: "We were losing RM 80,000 monthly to food waste. Servora AI opened our eyes to the problem and gave us the tools to fix it. Our profit margins increased by 18% in the first quarter.",
      rating: 5,
      savings: "RM 80,000",
      wasteReduction: "35%",
      avatar: "MA"
    },
    {
      name: "Nurul Huda",
      restaurant: "San Francisco Coffee",
      location: "Ipoh",
      role: "Store Manager",
      content: "The mobile interface is perfect for our fast-paced environment. Staff can log waste with one tap, and the real-time insights help us make better decisions instantly. Highly recommended!",
      rating: 5,
      savings: "RM 120,000",
      wasteReduction: "39%",
      avatar: "NH"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            SUCCESS STORIES FROM MALAYSIA'S TOP F&B CHAINS
          </h2>
          <p className="text-subheading text-primary/80 max-w-3xl mx-auto">
            See how Servora AI is transforming Malaysia's premium F&B chains, helping them save millions 
            and achieve 35-45% waste reduction with guaranteed ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary rounded-card p-8 shadow-card border border-accent-2 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-1 rounded-layout flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-primary/70">{testimonial.role}</p>
                  <p className="text-sm text-accent-1 font-medium">{testimonial.restaurant}</p>
                  <p className="text-xs text-primary/50">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-1 fill-current" />
                ))}
              </div>

              <blockquote className="text-primary/80 mb-6 italic text-sm">
                "{testimonial.content}"
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-accent-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-1">{testimonial.savings}</div>
                  <div className="text-xs text-primary/60">MONTHLY SAVINGS</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-1">{testimonial.wasteReduction}</div>
                  <div className="text-xs text-primary/60">WASTE REDUCTION</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="bg-primary rounded-card p-8 text-secondary text-center">
          <h3 className="text-2xl font-bold mb-6">SERVORA AI IMPACT ACROSS 50+ PREMIUM CLIENTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent-1 mb-2">RM 2.1M+</div>
              <div className="text-accent-2 text-sm">TOTAL ANNUAL SAVINGS</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-1 mb-2">40%</div>
              <div className="text-accent-2 text-sm">AVERAGE WASTE REDUCTION</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-1 mb-2">94%</div>
              <div className="text-accent-2 text-sm">FORECAST ACCURACY</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-1 mb-2">4.9/5</div>
              <div className="text-accent-2 text-sm">CUSTOMER RATING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;