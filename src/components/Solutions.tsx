import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Database, Smartphone, Users, FileText, ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI DEMAND FORECASTING",
      subtitle: "94% Accuracy in Predicting Needs",
      description: "Machine learning algorithms trained on Malaysian F&B patterns deliver 94% accurate demand predictions 7 days ahead, optimizing inventory and reducing waste.",
      benefits: [
        "94% forecast accuracy",
        "7-day advance predictions",
        "Malaysia-specific AI models",
        "Automated reordering"
      ],
      problem: "Poor demand forecasting leads to overproduction and waste"
    },
    {
      icon: TrendingUp,
      title: "REAL-TIME WASTE TRACKING",
      subtitle: "Gram-Level Precision Monitoring",
      description: "Track waste with gram-level precision across all locations. Automated alerts and root cause analysis prevent future waste incidents.",
      benefits: [
        "Gram-level precision",
        "Real-time alerts",
        "Root cause analysis",
        "Cross-location optimization"
      ],
      problem: "Manual waste tracking is inaccurate and time-consuming"
    },
    {
      icon: Database,
      title: "MULTI-LOCATION INVENTORY CONTROL",
      subtitle: "Centralized Management System",
      description: "Manage inventory across all locations from a single dashboard. Automated reordering, cross-location transfers, and supplier integration.",
      benefits: [
        "Centralized control",
        "Automated reordering",
        "Cross-location transfers",
        "Supplier integration"
      ],
      problem: "Scattered inventory data across multiple locations"
    },
    {
      icon: Smartphone,
      title: "OPERATIONAL INTELLIGENCE DASHBOARD",
      subtitle: "Real-Time KPI Monitoring",
      description: "Comprehensive dashboard with real-time KPI monitoring, AI-powered trend analysis, and automated performance alerts.",
      benefits: [
        "Real-time KPIs",
        "AI trend analysis",
        "Performance alerts",
        "Operational insights"
      ],
      problem: "Lack of real-time operational visibility"
    },
    {
      icon: Users,
      title: "STAFF TRAINING & ENGAGEMENT",
      subtitle: "Gamified Waste Reduction",
      description: "Engage your team with gamified waste reduction challenges, training modules, and performance tracking to drive behavioral change.",
      benefits: [
        "Gamified challenges",
        "Training modules",
        "Performance tracking",
        "Behavioral change"
      ],
      problem: "Staff not engaged in waste reduction efforts"
    },
    {
      icon: FileText,
      title: "COMPLIANCE & REPORTING",
      subtitle: "Automated Regulatory Compliance",
      description: "Automated compliance reporting meets all Malaysian regulatory requirements with complete audit trails and verification systems.",
      benefits: [
        "Automated reports",
        "Regulatory compliance",
        "Audit trails",
        "Verification systems"
      ],
      problem: "Manual compliance reporting is error-prone"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            PREMIUM AI FEATURES FOR TOP F&B REVENUE GENERATORS
          </h2>
          <p className="text-subheading text-primary/80 max-w-3xl mx-auto">
            WasteWise AI delivers enterprise-grade features designed specifically for Malaysia's top F&B revenue generators. 
            Achieve 35-45% waste reduction with guaranteed ROI in 30 days.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary rounded-card p-8 shadow-card border border-accent-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent-1/10 rounded-layout flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-accent-1" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              
              <p className="text-accent-1 font-semibold text-sm mb-4">
                {feature.subtitle}
              </p>
              
              <p className="text-body text-primary/70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="bg-accent-2/50 rounded-layout p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-3">SOLVES:</p>
                <p className="text-sm text-primary/70">{feature.problem}</p>
              </div>
              
              <div className="space-y-2 mb-8">
                <p className="text-sm font-semibold text-primary">KEY BENEFITS:</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-primary/70 flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-1 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <Link
                  to="/signup"
                  className="flex-1 bg-accent-1 text-secondary px-4 py-2 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold text-sm text-center shadow-card"
                >
                  START FREE TRIAL
                </Link>
                <button className="flex-1 border border-accent-1 text-accent-1 px-4 py-2 rounded-layout hover:bg-accent-1 hover:text-secondary transition-all duration-200 font-semibold text-sm">
                  SEE DEMO
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Positioning */}
        <div className="mt-16 bg-primary rounded-card p-8 text-secondary">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              PREMIUM POSITIONING FOR TOP REVENUE GENERATORS
            </h3>
            <p className="text-subheading opacity-90">
              Designed exclusively for Malaysia's top 10% F&B revenue generators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">RM 2M-10M</div>
              <div className="text-sm opacity-80">ANNUAL REVENUE TARGET</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">35-45%</div>
              <div className="text-sm opacity-80">GUARANTEED WASTE REDUCTION</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-1 mb-2">30 DAYS</div>
              <div className="text-sm opacity-80">MONEY-BACK GUARANTEE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;