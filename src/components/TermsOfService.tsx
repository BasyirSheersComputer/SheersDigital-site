import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 19, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Agreement Overview</h2>
            <p className="text-blue-800">
              These Terms of Service govern your use of Sheers Digital's website and services. 
              By using our services, you agree to these terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="mr-3 text-blue-600" size={24} />
              Service Description
            </h2>
            <p className="text-gray-700 mb-4">
              Sheers Digital provides IT project management services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cloud migration and digital transformation</li>
              <li>Cybersecurity implementation and monitoring</li>
              <li>Business process automation</li>
              <li>IT consulting and strategy development</li>
              <li>System integration and maintenance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing our website, scheduling consultations, or engaging our services, 
              you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreements</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Scope</h3>
            <p className="text-gray-700 mb-4">
              All services will be provided according to a detailed Statement of Work (SOW) that includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Project objectives and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Pricing and payment terms</li>
              <li>Roles and responsibilities</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Standards</h3>
            <p className="text-gray-700 mb-6">
              We commit to delivering services that meet industry standards and the specifications 
              outlined in your project agreement. Our 98% success rate reflects our commitment to quality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Payment schedules will be specified in individual project agreements</li>
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur interest charges of 1.5% per month</li>
              <li>Services may be suspended for overdue accounts</li>
              <li>All prices are in Malaysian Ringgit (RM) unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="mr-3 text-yellow-600" size={24} />
              Limitations and Disclaimers
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
            <p className="text-gray-700 mb-4">
              While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability. 
              Scheduled maintenance will be communicated in advance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              Our liability is limited to the amount paid for services in the 12 months preceding 
              any claim. We are not liable for indirect, consequential, or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">Clients are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Providing accurate and complete information</li>
              <li>Timely feedback and approvals</li>
              <li>Maintaining backup systems during transitions</li>
              <li>Ensuring staff cooperation and training participation</li>
              <li>Compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Data</h3>
            <p className="text-gray-700 mb-4">
              You retain all rights to your data and business information. We will not use your 
              confidential information for any purpose other than providing agreed services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Materials</h3>
            <p className="text-gray-700 mb-6">
              Our methodologies, tools, and proprietary solutions remain our intellectual property. 
              Custom solutions developed for your specific needs will be owned by you upon full payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We maintain strict confidentiality regarding all client information and business operations. 
              Our team members sign comprehensive non-disclosure agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">By Client</h3>
            <p className="text-gray-700 mb-4">
              You may terminate services with 30 days written notice. You remain responsible 
              for payment of all services provided up to the termination date.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">By Sheers Digital</h3>
            <p className="text-gray-700 mb-6">
              We may terminate services for non-payment, breach of terms, or if continuation 
              would violate applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes will be resolved through:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li>Good faith negotiation between parties</li>
              <li>Mediation if negotiation fails</li>
              <li>Arbitration under Malaysian Arbitration Act 2005</li>
              <li>Malaysian courts as final jurisdiction</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms are governed by Malaysian law. Any legal proceedings will be conducted 
              in the courts of Kuala Lumpur, Malaysia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We may update these terms periodically. Significant changes will be communicated 
              via email and posted on our website. Continued use of our services constitutes 
              acceptance of updated terms.
            </p>
          </section>

          <section className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
              <CheckCircle className="mr-3 text-emerald-600" size={24} />
              Our Guarantee
            </h2>
            <p className="text-emerald-800 mb-4">
              We stand behind our work with a satisfaction guarantee:
            </p>
            <ul className="list-disc pl-6 text-emerald-800">
              <li>Projects delivered on time and within budget</li>
              <li>Measurable ROI within 90 days or continued support at no charge</li>
              <li>24/7 support for critical issues</li>
              <li>Complete transparency in all communications</li>
            </ul>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms or our services:
            </p>
            <div className="text-gray-700">
              <p><strong>Sheers Digital Sdn Bhd</strong></p>
              <p>Level 15, Menara LGB</p>
              <p>1, Jalan Wan Kadir 3</p>
              <p>Kuala Lumpur 50300, Malaysia</p>
              <p>Email: legal@sheersdigital.my</p>
              <p>Phone: +60 3-2022 8888</p>
              <p>SSM Registration: 1234567-X</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}