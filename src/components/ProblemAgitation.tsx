import React from 'react';
import { AlertTriangle, DollarSign, Clock, Users, TrendingDown, Shield } from 'lucide-react';

const ProblemAgitation: React.FC = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "RM 3.2B ANNUAL WASTE COST",
      description: "Malaysia's F&B industry loses RM 3.2 billion annually to food waste, directly impacting your bottom line and profitability.",
      impact: "RM 50K-200K monthly waste per location"
    },
    {
      icon: Clock,
      title: "MANUAL INVENTORY NIGHTMARE",
      description: "Staff spend 20+ hours weekly on manual tracking, leading to human errors, stockouts, and overordering that compounds waste.",
      impact: "40% of inventory goes unused"
    },
    {
      icon: TrendingDown,
      title: "42% AVERAGE WASTE RATE",
      description: "Coffee chains and restaurants average 42% waste rates due to poor demand forecasting and reactive inventory management.",
      impact: "RM 100K+ annual losses per location"
    },
    {
      icon: Users,
      title: "STAFF FRUSTRATION & TURNOVER",
      description: "Kitchen staff overwhelmed with paperwork instead of focusing on food quality and customer experience.",
      impact: "15% higher staff turnover rates"
    },
    {
      icon: AlertTriangle,
      title: "COMPLIANCE & AUDIT RISKS",
      description: "Manual processes create audit trails that are difficult to maintain and verify, risking regulatory compliance issues.",
      impact: "RM 50K+ potential fines annually"
    },
    {
      icon: Shield,
      title: "COMPETITIVE DISADVANTAGE",
      description: "While you struggle with waste, competitors using AI solutions are optimizing operations and capturing market share.",
      impact: "15-25% market share loss risk"
    }
  ];

  return (
    <section className="py-20 bg-secondary font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            THE REAL COST OF F&B WASTE IN MALAYSIA
          </h2>
          <p className="text-subheading text-primary/80 max-w-3xl mx-auto">
            Every year, Malaysia's F&B industry loses RM 3.2 billion to preventable waste. 
            Top revenue generators are losing RM 50K-200K monthly per location. 
            It's time to stop the bleeding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-background rounded-card p-8 shadow-card border border-accent-2 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent-1/10 rounded-layout flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-accent-1" />
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-4">
                {problem.title}
              </h3>
              
              <p className="text-body text-primary/70 mb-6 leading-relaxed">
                {problem.description}
              </p>
              
              <div className="bg-accent-1/5 rounded-layout p-4 border-l-4 border-accent-1">
                <p className="text-sm font-semibold text-accent-1">
                  IMPACT: {problem.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Impact Summary */}
        <div className="mt-16 bg-primary rounded-card p-8 text-secondary">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              THE BOTTOM LINE IMPACT
            </h3>
            <p className="text-subheading opacity-90">
              For Malaysia's top F&B revenue generators (RM 2M-10M annually)
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">RM 3.2B</div>
              <div className="text-sm opacity-80">ANNUAL INDUSTRY WASTE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">RM 150K</div>
              <div className="text-sm opacity-80">AVERAGE MONTHLY LOSS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">42%</div>
              <div className="text-sm opacity-80">AVERAGE WASTE RATE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">20hr</div>
              <div className="text-sm opacity-80">WEEKLY MANUAL WORK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;