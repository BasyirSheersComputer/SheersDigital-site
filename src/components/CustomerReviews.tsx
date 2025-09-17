import React from 'react';
import { Star, Quote, MapPin, Building } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Ahmad Rahman",
      position: "Owner",
      company: "Nasi Lemak Corner",
      location: "Kuala Lumpur",
      content: "Servora transformed our inventory management completely. We reduced food waste by 45% and saved RM 25,000 monthly. The platform is so intuitive and gives us complete visibility over our operations.",
      rating: 5,
      image: "👨‍🍳",
      savings: "RM 25,000/month",
      timeframe: "3 months"
    },
    {
      name: "Sarah Lim",
      position: "Operations Manager",
      company: "Café Delight Chain",
      location: "Penang",
      content: "The Servora platform was a game-changer for our 5-location chain. Our systems are now 3x faster and we can manage all locations from one dashboard. The AI forecasting is incredibly accurate.",
      rating: 5,
      image: "👩‍💼",
      savings: "RM 45,000/month",
      timeframe: "2 months"
    },
    {
      name: "David Chen",
      position: "CEO",
      company: "Fresh Bites Restaurant",
      location: "Johor Bahru",
      content: "Servora gave us complete control over our inventory. The supplier integration feature alone saved us 15 hours per week and RM 35,000 monthly. Our food costs dropped by 30% in the first quarter.",
      rating: 5,
      image: "👨‍💻",
      savings: "RM 35,000/month",
      timeframe: "4 months"
    },
    {
      name: "Nurul Huda",
      position: "Manager",
      company: "Warung Pak Mat",
      location: "Klang",
      content: "The waste logging automation feature is brilliant - we now track everything automatically and have reduced waste by 60%. The mobile app makes it so easy for our staff to use.",
      rating: 5,
      image: "👩‍🍳",
      savings: "RM 18,000/month",
      timeframe: "2 months"
    },
    {
      name: "Rajesh Kumar",
      position: "Operations Director",
      company: "Spice Garden Group",
      location: "Ipoh",
      content: "Servora was the foundation of our digital transformation. The compliance automation feature ensures we never miss regulatory requirements, and the reporting is comprehensive and easy to understand.",
      rating: 5,
      image: "👨‍🔧",
      savings: "RM 52,000/month",
      timeframe: "6 months"
    },
    {
      name: "Lisa Wong",
      position: "Owner",
      company: "Bubble Tea Paradise",
      location: "Petaling Jaya",
      content: "Servora's inventory tracking and AI forecasting saved us 20 hours per week. We now have complete control over our supply chain and operations. The ROI calculator showed us exactly how much we'd save.",
      rating: 5,
      image: "👩‍🎨",
      savings: "RM 28,000/month",
      timeframe: "3 months"
    }
  ];

  return (
    <section id="customer-reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Real Results from Real Malaysian F&B Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how Servora is transforming operations and driving profitability across Malaysia's F&B industry
            </p>
          </div>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
                  <p className="text-slate-700 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    {review.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{review.name}</h4>
                    <p className="text-sm text-slate-600">{review.position}</p>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{review.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{review.location}</span>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-green-600">{review.savings}</div>
                      <div className="text-sm text-green-700">Monthly savings</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-600">{review.timeframe}</div>
                      <div className="text-xs text-slate-500">Time to results</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection animation="slideUp" delay={0.8}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Average Results Across All Clients
              </h3>
              <p className="text-slate-600">
                Based on 250+ F&B businesses using Servora across Malaysia
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">RM 32,000</div>
                <div className="text-sm text-slate-600">Average monthly savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
                <div className="text-sm text-slate-600">Waste reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">18 hours</div>
                <div className="text-sm text-slate-600">Time saved weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2.3 months</div>
                <div className="text-sm text-slate-600">Average ROI timeline</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomerReviews;
