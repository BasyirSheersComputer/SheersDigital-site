import React from 'react';
import { Star, Quote, MapPin, Building, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import CollapsibleSection from './CollapsibleSection';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Ahmad Rahman",
      position: "Owner",
      company: "Nasi Lemak Corner",
      location: "Kuala Lumpur",
      content: "Servora transformed our inventory management completely. We reduced food waste by 45% and saved RM 20,000+ monthly. The platform is so intuitive and gives us complete visibility over our operations.",
      rating: 5,
      image: "👨‍🍳",
      savings: "RM 20,000+/month",
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
        <CollapsibleSection
          id="customer-reviews-section"
          title="Real Results from Real Malaysian F&B Businesses"
          icon={Users}
          defaultExpanded={false}
          className="mb-8"
          maxContentHeight="600px"
          enableVerticalScroll={true}
        >
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how Servora is transforming operations and driving profitability across Malaysia's F&B industry
            </p>
          </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center mb-5 sm:mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6 sm:mb-8">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4 opacity-50" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                    {review.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{review.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{review.position}</p>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-5 sm:mb-6 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{review.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{review.location}</span>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-green-600">{review.savings}</div>
                      <div className="text-xs sm:text-sm text-green-700">Monthly savings</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-semibold text-slate-600">{review.timeframe}</div>
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-slate-200">
              <div className="text-center mb-10 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                  Average Results Across All Clients
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Based on 250+ F&B businesses using Servora across Malaysia
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-3 sm:mb-4">RM 32,000</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">Average monthly savings</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">42%</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">Waste reduction</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-3 sm:mb-4">18 hours</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">Time saved weekly</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-3 sm:mb-4">2.3 months</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">Average ROI timeline</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default CustomerReviews;
