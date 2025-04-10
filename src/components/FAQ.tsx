import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Sheers Digital IT Security Assessment?",
    answer: "Our IT Security Assessment is a comprehensive evaluation of your infrastructure worth RM10,000, provided free to qualified Malaysian enterprises. We analyze your current IT setup, identify vulnerabilities, and provide actionable recommendations that have helped companies reduce security incidents by 85% while cutting IT costs by 40%. The assessment includes network security analysis, compliance evaluation, and cost optimization strategies."
  },
  {
    question: "How to schedule an assessment?",
    answer: "Scheduling an assessment is simple. Fill out our brief qualification form or call us at +6 (011) 6326-3808. Our team will review your application within 24 hours. If qualified, you'll receive immediate access to our calendar to book your preferred assessment date. The entire process takes just 2-3 business days, and we prioritize businesses operating in Kuala Lumpur with revenue above RM10M."
  },
  {
    question: "Who is the right fit for an assessment?",
    answer: "Our assessment is specifically designed for Malaysian enterprises with: 1) Annual revenue exceeding RM10M, 2) At least 50 employees, 3) Growing IT infrastructure needs, 4) Concerns about cybersecurity or compliance, 5) Interest in optimizing IT costs. We've particularly helped businesses in financial services, healthcare, and manufacturing sectors achieve significant improvements in their IT infrastructure."
  },
  {
    question: "Who are the security experts conducting the assessment?",
    answer: "Your assessment will be conducted by our senior security consultants, led by our CTO with 15+ years of experience in Malaysian enterprise IT. Our team includes certified cybersecurity experts, compliance specialists, and infrastructure architects who have worked with major Malaysian banks, healthcare providers, and multinational corporations operating in Southeast Asia."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg focus:outline-none transition-all duration-200 ${
                  openIndex === index
                    ? 'bg-blue-50'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <div
                  className={`mt-4 text-gray-600 transition-all duration-200 overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;