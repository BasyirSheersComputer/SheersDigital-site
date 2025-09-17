import React from 'react';
import { Users, TrendingUp, Globe, Heart, Award, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const CommunityMovement = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "250+",
      label: "F&B Businesses Transformed",
      color: "text-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "RM 2.3M",
      label: "Total Savings Generated",
      color: "text-green-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "15",
      label: "Cities Across Malaysia",
      color: "text-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98%",
      label: "Client Success Rate",
      color: "text-orange-600"
    }
  ];

  const movementGoals = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Reduce Food Waste",
      description: "Eliminate 1 million kg of food waste annually across our network"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boost Efficiency",
      description: "Help F&B businesses save 1 million hours of manual work yearly"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Profits",
      description: "Generate RM 10M+ in additional profits for Malaysian F&B industry"
    }
  ];

  return (
    <section id="community-movement" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the F&B Transformation Movement
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Be part of Malaysia's largest community of forward-thinking F&B leaders who are revolutionizing 
              the industry through technology and operational excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} flex justify-center mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Movement Goals */}
        <AnimatedSection animation="slideUp" delay={0.6}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our 2025 Movement Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {movementGoals.map((goal, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-400 flex justify-center mb-4">
                    {goal.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{goal.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Community Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={0.8}>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Join Our Community?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Network with Industry Leaders</h4>
                    <p className="text-slate-300">Connect with successful F&B entrepreneurs and share best practices for operational excellence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Access Exclusive Resources</h4>
                    <p className="text-slate-300">Get early access to new features, industry reports, and specialized training materials.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Recognition & Awards</h4>
                    <p className="text-slate-300">Be recognized for your achievements and showcase your success in our community spotlight.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.8}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-center">
                Ready to Lead the Change?
              </h4>
              <p className="text-slate-300 mb-8 text-center">
                Join hundreds of F&B leaders who are already transforming their operations and setting new industry standards.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Join the Movement Today
                </button>
                <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Learn About Our Community
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm">
                  Free to join • No commitment required • Instant access
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Success Stories Preview */}
        <AnimatedSection animation="slideUp" delay={1.0}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">
              What Our Community Members Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-slate-300 italic mb-4">
                  "Being part of this community has transformed not just my business, but my entire approach to F&B operations."
                </p>
                <div className="text-sm text-slate-400">- Ahmad Rahman, Nasi Lemak Corner</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-slate-300 italic mb-4">
                  "The networking opportunities and shared knowledge have been invaluable for our growth."
                </p>
                <div className="text-sm text-slate-400">- Sarah Lim, Café Delight Chain</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-slate-300 italic mb-4">
                  "This movement is changing the entire F&B landscape in Malaysia for the better."
                </p>
                <div className="text-sm text-slate-400">- David Chen, Fresh Bites Restaurant</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CommunityMovement;
