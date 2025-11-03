import React from 'react';
import { Target, Users, TrendingUp, Heart, MapPin, Mail, MessageCircle, Linkedin, ExternalLink, CheckCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import SEOHead from '../SEOHead';

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us - WasteWise by Sheers Software | Reducing F&B Waste in Malaysia"
        description="Learn about Sheers Software's mission to help Malaysian F&B businesses reduce waste by 30-40% and increase profit margins through technology. Led by Ahmad Basyir Azahari."
        keywords="about sheers software, wastewise team, malaysian f&b technology, ahmad basyir azahari, food waste reduction malaysia"
        canonicalUrl="/about-us"
      />
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-neutral-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Building Technology That Helps F&B Businesses Thrive
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                We're a Malaysian technology company on a mission to help F&B businesses reduce waste, 
                increase profits, and build sustainable operations through smart, data-driven solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
                    <Target className="w-4 h-4 text-teal-600 mr-2" />
                    <span className="text-sm font-semibold text-teal-700">Our Mission</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                    Helping Malaysian F&B Businesses Stop Losing Money to Preventable Waste
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    Malaysian F&B businesses lose RM 15,000-25,000 monthly per outlet to preventable food waste 
                    (Ministry of Environment and Water Malaysia). That's RM 180,000-300,000 annually that could 
                    go directly to profit, staff development, or business expansion.
                  </p>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    We built WasteWise to solve this problem with technology that's proven, practical, and 
                    delivers results within 60 days. No corporate jargon, no overpromises—just real solutions 
                    backed by industry data.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 border border-teal-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Impact Goal</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">Reduce Food Waste</h4>
                        <p className="text-neutral-600">Help 1,000+ Malaysian F&B outlets reduce waste by 30-40% within the next 3 years</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">Increase Profitability</h4>
                        <p className="text-neutral-600">Save RM 15-25 million monthly across our client base through waste reduction</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">Build Partnerships</h4>
                        <p className="text-neutral-600">Create win-win collaborations with F&B operators, suppliers, and industry partners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Led by Industry Professionals
                </h2>
                <p className="text-xl text-neutral-600">
                  Building practical solutions for real F&B challenges
                </p>
              </div>

              {/* Ahmad Basyir Card */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-16 h-16 text-teal-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Ahmad Basyir Azahari</h3>
                    <p className="text-lg text-teal-600 font-semibold mb-4">Managing Director</p>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Ahmad Basyir leads Sheers Software with a focus on building practical technology solutions 
                      that solve real business problems. His approach combines technical expertise with deep 
                      understanding of F&B operational challenges to create systems that deliver measurable results.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-neutral-900 mb-3">Focus Areas:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                          F&B Technology Solutions
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                          Waste Reduction Systems
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                          Business Process Optimization
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                          Strategic Partnerships
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="https://www.linkedin.com/in/ahmad-basyir-azahari/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision - Aligned with Industry */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  Our Vision Aligns with Industry Transformation
                </h2>
                <p className="text-xl text-neutral-600">
                  We're building solutions that match the proven potential of F&B digital transformation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Industry Reality */}
                <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Industry Reality</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">RM 50.8B</div>
                      <div className="text-sm text-neutral-600">Malaysian F&B market size (MATRADE, 2023)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">15-20%</div>
                      <div className="text-sm text-neutral-600">Average food cost wasted (Ministry of Environment)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">6.5%</div>
                      <div className="text-sm text-neutral-600">Annual industry growth (MDEC)</div>
                    </div>
                  </div>
                </div>

                {/* Our Contribution */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-8 border border-teal-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Our Contribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-teal-600 mb-2">30-40%</div>
                      <div className="text-sm text-neutral-600">Waste reduction we help achieve (WRI standard)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">RM 15-25k</div>
                      <div className="text-sm text-neutral-600">Monthly savings per outlet we enable</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">60 days</div>
                      <div className="text-sm text-neutral-600">Time to measurable results</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shared Vision Quote */}
              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">"</div>
                  <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                    The F&B industry is growing at 6.5% annually in Malaysia, yet businesses lose 
                    15-20% of their food cost to preventable waste. Technology can close this gap—turning 
                    waste into profit and helping operators thrive.
                  </p>
                  <div className="text-teal-400 font-semibold">
                    — Industry Vision, Aligned with Our Mission
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
                Why Sheers Software Exists
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">The Problem We See</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Malaysian F&B operators work incredibly hard but lose RM 15,000-25,000 monthly per outlet 
                    to preventable waste. Manual tracking doesn't work. Expensive consultants don't stick around. 
                    Generic software doesn't understand F&B operations.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Meanwhile, industry research shows that restaurants using automated waste management achieve 
                    25-40% reduction consistently (World Resources Institute, 2023). The technology works—it just 
                    needs to be accessible and practical for Malaysian businesses.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Solution Approach</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    We build technology specifically for Malaysian F&B operations. Our systems integrate with 
                    how you already work—no massive overhauls, no months of training, no disruption to daily operations.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    We only win when you win. That's why we guarantee results: 30-day money-back for Quick Win solutions, 
                    60-day RM 30k savings guarantee for Growth plans, and we work for free until you hit goals on Enterprise.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">What Makes Us Different</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-2">Data-Driven Honesty</h4>
                      <p className="text-neutral-600 text-sm">
                        We cite sources for every claim. Industry data from WRI, McKinsey, NRA, and Deloitte—not 
                        made-up testimonials or inflated numbers.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-2">Outcome-Focused</h4>
                      <p className="text-neutral-600 text-sm">
                        We don't sell features. We deliver specific outcomes: 30-40% waste reduction, 
                        RM 15-25k monthly savings, measurable within 60 days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-2">Risk-Free Guarantees</h4>
                      <p className="text-neutral-600 text-sm">
                        Money-back guarantees, performance guarantees, no long-term lock-ins. 
                        We earn your business by delivering results.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-600 mb-2">Malaysian-First</h4>
                      <p className="text-neutral-600 text-sm">
                        Built for Malaysian regulations, business practices, and F&B culture. 
                        Local support in English, Malay, and Chinese.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership & Collaboration */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
                Open to Partnership & Collaboration
              </h2>
              
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-8 border border-teal-200">
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  We believe in collaborative growth. If you're a F&B chain looking to reduce waste, 
                  a technology partner with complementary solutions, or an industry expert who shares our 
                  vision of sustainable F&B operations—we'd love to talk.
                </p>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">We're Interested In:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-900">F&B Chain Partnerships</div>
                      <div className="text-sm text-neutral-600">Multi-location operators ready to transform operations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-900">Technology Integrations</div>
                      <div className="text-sm text-neutral-600">POS, ERP, and supply chain system partnerships</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-900">Industry Associations</div>
                      <div className="text-sm text-neutral-600">Collaborations with F&B associations and bodies</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-900">Sustainability Initiatives</div>
                      <div className="text-sm text-neutral-600">Organizations working toward F&B sustainability goals</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <a 
                    href="https://www.linkedin.com/in/ahmad-basyir-azahari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <Linkedin className="w-8 h-8 mb-3 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-semibold mb-1">LinkedIn</div>
                    <div className="text-xs text-neutral-300">Professional networking</div>
                  </a>
                  
                  <a 
                    href="https://wa.me/601163263808?text=Hi,%20I'm%20interested%20in%20partnership%20with%20Sheers%20Software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <MessageCircle className="w-8 h-8 mb-3 text-[#25D366] group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-semibold mb-1">WhatsApp</div>
                    <div className="text-xs text-neutral-300">+60 11-6326 3808</div>
                  </a>
                  
                  <a 
                    href="mailto:a.basyir@sheerssoft.com"
                    className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <Mail className="w-8 h-8 mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-semibold mb-1">Email</div>
                    <div className="text-xs text-neutral-300">a.basyir@sheerssoft.com</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
                Company Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Company Name</div>
                      <div className="text-neutral-900">Sheers Software Sdn. Bhd.</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Location</div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-teal-600 flex-shrink-0 mt-1" />
                        <div className="text-neutral-900">Suite 11.9, Megan Avenue 1<br/>50450 Kuala Lumpur, Malaysia</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">WhatsApp</div>
                      <a 
                        href="https://wa.me/601163263808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline"
                      >
                        +60 11-6326 3808
                      </a>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Email</div>
                      <a href="mailto:a.basyir@sheerssoft.com" className="text-teal-600 hover:underline">
                        a.basyir@sheerssoft.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">Our Focus</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Industry</div>
                      <div className="text-neutral-900">F&B Technology & Waste Management</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Primary Market</div>
                      <div className="text-neutral-900">Malaysian Restaurants & Food Chains</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Core Solutions</div>
                      <div className="text-neutral-900">
                        Waste Reduction • Inventory Management<br/>
                        AI Forecasting • Compliance Automation
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-600 mb-1">Languages Supported</div>
                      <div className="text-neutral-900">English, Bahasa Malaysia, Chinese</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Partnership */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Whether you're an F&B operator ready to reduce waste, a technology partner looking to integrate, 
              or an industry professional with shared vision—let's talk about how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/601163263808?text=Hi,%20I'm%20interested%20in%20partnership%20opportunities%20with%20Sheers%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: Partnership Inquiry
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ahmad-basyir-azahari/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
            
            <p className="text-teal-100 text-sm mt-6">
              Response within 24 hours • Open to collaboration • Partnership-focused approach
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutUs;

