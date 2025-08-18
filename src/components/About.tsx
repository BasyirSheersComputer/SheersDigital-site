import React from 'react';
import { Users, Target, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              THE WASTEWISE AI STORY
            </h2>
            <p className="text-body text-primary/70 mb-6 leading-relaxed">
              WasteWise AI was born from a critical observation: Malaysia's F&B industry is losing RM 3.2 billion annually to preventable waste. 
              While top revenue generators focus on growth, they're silently losing RM 50K-200K monthly per location to inefficient operations.
            </p>
            <p className="text-body text-primary/70 mb-8 leading-relaxed">
              Our mission is to deliver premium AI-powered waste management exclusively for Malaysia's top F&B revenue generators. 
              We believe that with the right technology, every restaurant can achieve 35-45% waste reduction with guaranteed ROI.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-1 mb-2">50+</div>
                <div className="text-primary/70 font-medium">PREMIUM CLIENTS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-1 mb-2">RM 2M+</div>
                <div className="text-primary/70 font-medium">ANNUAL SAVINGS GENERATED</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-1 mb-2">40%</div>
                <div className="text-primary/70 font-medium">AVERAGE WASTE REDUCTION</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-1 mb-2">94%</div>
                <div className="text-primary/70 font-medium">FORECAST ACCURACY</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-background rounded-card p-8 shadow-card border border-accent-2">
              <h3 className="text-2xl font-bold text-primary mb-6">OUR VALUES</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">PREMIUM FOCUS</h4>
                    <p className="text-sm text-primary/70">
                      Designed exclusively for Malaysia's top 10% F&B revenue generators, 
                      delivering enterprise-grade solutions with guaranteed results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">MALAYSIA-SPECIFIC AI</h4>
                    <p className="text-sm text-primary/70">
                      AI models trained specifically on Malaysian F&B patterns, 
                      regulations, and market dynamics for maximum accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">GUARANTEED ROI</h4>
                    <p className="text-sm text-primary/70">
                      We guarantee 35-45% waste reduction with 30-day money-back guarantee. 
                      Your success is our success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">ENTERPRISE PARTNERSHIP</h4>
                    <p className="text-sm text-primary/70">
                      We partner with top F&B chains like Starbucks Malaysia, 
                      Secret Recipe, and Urban Coffee Co. for proven results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-card p-8 text-secondary">
              <h3 className="text-2xl font-bold mb-4">JOIN THE PREMIUM REVOLUTION</h3>
              <p className="text-subheading mb-6 opacity-90">
                Be part of the movement to eliminate RM 3.2B in annual F&B waste. 
                Together, we can transform Malaysia's F&B industry.
              </p>
              <div className="text-3xl font-bold">50+ PREMIUM CLIENTS</div>
              <div className="text-subheading opacity-90">Already achieving 40% waste reduction with WasteWise AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;