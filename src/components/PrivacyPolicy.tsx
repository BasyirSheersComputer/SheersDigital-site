import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 19, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Your Privacy Matters</h2>
            <p className="text-blue-800">
              At Sheers Digital, we take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="mr-3 text-blue-600" size={24} />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Company name and job title</li>
              <li>Business requirements and project details</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referral source and search terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="mr-3 text-blue-600" size={24} />
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide and improve our IT services</li>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Send you relevant updates about our services</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="mr-3 text-blue-600" size={24} />
              Data Protection & Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>SSL encryption for all data transmission</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and employee training</li>
              <li>Secure data storage and backup systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under Malaysian Personal Data Protection Act (PDPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes 
              outlined in this policy, comply with legal obligations, and resolve disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Calendly for appointment scheduling</li>
              <li>Google Analytics for website analytics</li>
              <li>Facebook Pixel for marketing analytics</li>
            </ul>
            <p className="text-gray-700 mb-6">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes by posting the new policy on our website and updating the 
              "Last updated" date.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="text-gray-700">
              <p><strong>Sheers Digital Sdn Bhd</strong></p>
              <p>Level 15, Menara LGB</p>
              <p>1, Jalan Wan Kadir 3</p>
              <p>Kuala Lumpur 50300, Malaysia</p>
              <p>Email: sales@sheerscomputer.com</p>
              <p>Phone: +6011-6326 3808</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}