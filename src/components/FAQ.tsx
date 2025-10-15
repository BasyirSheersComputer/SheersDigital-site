import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import CollapsibleSection from './CollapsibleSection';

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
      answer: "We guarantee you'll start seeing results in just 5 days. Our clients see immediate improvements within the first week of implementation, with significant cost savings becoming apparent within 30 days. Most clients achieve RM 20,000+ in monthly savings within 30 days of implementation."
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
      answer: "We offer a 30-day money-back guarantee. If you don't see at least RM 20,000+ in monthly savings within 30 days, we'll refund your investment completely, no questions asked. We're confident in our results because we've helped 250+ businesses achieve these savings."
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
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about Servora and how it can transform your F&B operations
            </p>
          </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12">
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
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
