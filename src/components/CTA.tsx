import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';

interface CTAProps {
  onBookDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onBookDemo }) => {
  return (
    <section className="py-20 bg-primary font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            STOP LOSING RM 50K-200K MONTHLY TO F&B WASTE
          </h2>
          <p className="text-subheading text-accent-2 mb-8 max-w-3xl mx-auto">
            Join 50+ premium F&B chains already saving millions with WasteWise AI. 
            Start your free trial today and achieve 35-45% waste reduction with guaranteed ROI in 30 days.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-secondary/10 rounded-card p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent-1/20 rounded-layout flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-accent-1" />
              </div>
              <h3 className="text-secondary font-semibold mb-2">SAVE RM 100K+ ANNUALLY</h3>
              <p className="text-accent-2 text-sm">
                Achieve 35-45% waste reduction with guaranteed ROI for top revenue generators
              </p>
            </div>

            <div className="bg-secondary/10 rounded-card p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent-1/20 rounded-layout flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-accent-1" />
              </div>
              <h3 className="text-secondary font-semibold mb-2">SAVE 20+ HOURS WEEKLY</h3>
              <p className="text-accent-2 text-sm">
                Automate manual processes so your staff can focus on premium customer experience
              </p>
            </div>

            <div className="bg-secondary/10 rounded-card p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent-1/20 rounded-layout flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-accent-1" />
              </div>
              <h3 className="text-secondary font-semibold mb-2">ENTERPRISE-GRADE SOLUTION</h3>
              <p className="text-accent-2 text-sm">
                Designed exclusively for Malaysia's top 10% F&B revenue generators
              </p>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-secondary/10 rounded-card p-8 mb-12 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-secondary mb-6">WHAT YOU GET IN YOUR 30-DAY FREE TRIAL:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Full access to all 6 premium AI features</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Unlimited staff accounts</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Multi-location inventory control</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Malaysia-specific AI models</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Staff training modules</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                <span className="text-accent-2">Priority enterprise support</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/signup"
              className="bg-accent-1 text-secondary px-8 py-4 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 shadow-card hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>START FREE TRIAL NOW</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onBookDemo}
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-layout hover:bg-secondary hover:text-primary transition-all duration-200 font-semibold text-lg"
            >
              BOOK LIVE DEMO
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-accent-2 text-sm">
            <p>✓ NO CREDIT CARD REQUIRED • ✓ CANCEL ANYTIME • ✓ FULL ACCESS TO ALL FEATURES</p>
            <p className="mt-2">✓ SETUP IN UNDER 10 MINUTES • ✓ WORKS WITH YOUR EXISTING SYSTEMS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;