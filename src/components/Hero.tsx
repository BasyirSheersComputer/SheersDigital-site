import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Users, Clock } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="bg-background font-montserrat py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-layout bg-accent-1/10 text-accent-1 text-sm font-semibold mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            TRUSTED BY MALAYSIA'S TOP F&B REVENUE GENERATORS
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            ELIMINATE
            <span className="text-accent-1"> RM 3.2B</span>
            <br />
            ANNUAL WASTE
          </h1>

          {/* Subheadline */}
          <p className="text-subheading text-primary/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            WasteWise AI delivers premium AI-powered waste management for Malaysia's top F&B revenue generators. 
            Achieve 35-45% waste reduction with guaranteed ROI in 30 days.
          </p>

          {/* Problem Statement */}
          <div className="bg-secondary rounded-card p-6 mb-8 max-w-4xl mx-auto shadow-card border border-accent-2">
            <p className="text-lg text-primary mb-4 font-semibold">
              <strong>MALAYSIA'S F&B INDUSTRY IS DROWNING IN WASTE:</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-primary/70">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-1 rounded-full mr-3"></div>
                RM 3.2B annual waste cost
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-1 rounded-full mr-3"></div>
                42% average waste rate in coffee chains
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-1 rounded-full mr-3"></div>
                RM 50K-200K monthly waste per location
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/signup"
              className="bg-accent-1 text-secondary px-8 py-4 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 shadow-card hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>START FREE 30-DAY TRIAL</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onBookDemo}
              className="border-2 border-accent-1 text-accent-1 px-8 py-4 rounded-layout hover:bg-accent-1 hover:text-secondary transition-all duration-200 font-semibold text-lg flex items-center space-x-2 bg-secondary"
            >
              <Play className="w-5 h-5" />
              <span>BOOK LIVE DEMO</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-primary/60 mb-8">
            <p>NO CREDIT CARD REQUIRED • CANCEL ANYTIME • FULL ACCESS TO ALL FEATURES</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">35-45%</div>
              <div className="text-primary/70 font-medium">WASTE REDUCTION</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">RM 100K+</div>
              <div className="text-primary/70 font-medium">ANNUAL SAVINGS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">94%</div>
              <div className="text-primary/70 font-medium">FORECAST ACCURACY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">30 DAYS</div>
              <div className="text-primary/70 font-medium">GUARANTEED ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;