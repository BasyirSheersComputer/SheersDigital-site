import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly can I see results with Servora?",
      answer: "Most clients see immediate improvements within the first week of implementation. Significant cost savings typically become apparent within 2-3 months, with full ROI achieved within 6 months. Our fastest client saw RM 25,000 in monthly savings within just 30 days."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Our free consultation includes a comprehensive waste audit of your current operations, identification of cost-saving opportunities, a customized implementation plan, and a detailed ROI projection. You'll receive a complete report showing exactly how much you could save with Servora."
    },
    {
      question: "Do I need technical expertise to use Servora?",
      answer: "Not at all. Servora is designed for F&B professionals, not IT experts. Our intuitive interface requires no technical knowledge, and we provide comprehensive training for your entire team. Most users are fully comfortable with the platform within the first week."
    },
    {
      question: "Can Servora integrate with my existing POS system?",
      answer: "Yes, Servora integrates seamlessly with over 95% of POS systems used in Malaysia, including popular systems like Square, Toast, and local solutions. Our integration process is typically completed within 24-48 hours with zero downtime to your operations."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee. If you don't see at least RM 25,000 in monthly savings within 30 days, we'll refund your investment completely, no questions asked. We're confident in our results because we've helped 250+ businesses achieve these savings."
    },
    {
      question: "How does Servora compare to other restaurant software?",
      answer: "Unlike basic POS systems or simple inventory software, Servora is a comprehensive operational platform that addresses all major pain points simultaneously. While others focus on single functions, we provide complete transformation with AI-powered insights, automated compliance, and multi-location management."
    },
    {
      question: "Is my data secure with Servora?",
      answer: "Absolutely. We use enterprise-grade security with 256-bit SSL encryption, regular security audits, and comply with Malaysian data protection regulations. Your data is stored in secure, locally-hosted servers with daily backups and 99.9% uptime guarantee."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide comprehensive support including dedicated account management, 24/7 technical support, regular system updates, staff training sessions, and monthly performance reviews. Our success team works with you to ensure you're maximizing your ROI and achieving your business goals."
    },
    {
      question: "Can I start with just one location and expand later?",
      answer: "Yes, Servora is designed to scale with your business. You can start with a single location and easily add more locations as you grow. Our multi-location management features make it simple to maintain centralized control while allowing location-specific customization."
    },
    {
      question: "What's the difference between the Starter Solution and Full Platform?",
      answer: "The Starter Solution focuses on one specific area (like waste reduction or inventory management) and provides immediate results. The Full Platform includes all features and is ideal for businesses wanting complete operational transformation. Both include access to our core Servora platform."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get answers to the most common questions about Servora and how it can transform your F&B operations
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={0.1 * (index + 1)}>
                <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-slate-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact CTA */}
          <AnimatedSection animation="slideUp" delay={0.8}>
            <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Our F&B specialists are here to help. Schedule a free consultation to get personalized answers 
                and see how Servora can transform your specific operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Free Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Call +60 11-6326 3808
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
