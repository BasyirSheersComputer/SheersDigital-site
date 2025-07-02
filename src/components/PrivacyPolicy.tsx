import React from 'react';
import { Shield, Lock, Eye, FileText, Phone, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2 text-blue-600" size={24} />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sheers Technologies Sdn. Bhd. (Company No. 1234567-X) ("we," "our," or "us") is committed to protecting your privacy and personal data in accordance with the Personal Data Protection Act 2010 (PDPA) of Malaysia and other applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website, use our services, or interact with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="mr-2 text-blue-600" size={24} />
                Personal Data We Collect
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Information you provide directly:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company name and business information</li>
                  <li>Communication preferences</li>
                  <li>Information provided during consultations or service requests</li>
                  <li>Feedback, testimonials, and survey responses</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Information collected automatically:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Personal Data</h2>
              <p className="text-gray-700 mb-4">We process your personal data for the following purposes:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-800 mb-2">Service Delivery</h3>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Providing IT project management services</li>
                    <li>• Scheduling consultations and meetings</li>
                    <li>• Delivering technical support</li>
                    <li>• Processing service requests</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Communication</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Responding to inquiries</li>
                    <li>• Sending service updates</li>
                    <li>• Marketing communications (with consent)</li>
                    <li>• Customer satisfaction surveys</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Legal Compliance</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Meeting regulatory requirements</li>
                    <li>• Maintaining business records</li>
                    <li>• Protecting against fraud</li>
                    <li>• Resolving disputes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Business Operations</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Website analytics and improvement</li>
                    <li>• Service quality enhancement</li>
                    <li>• Business development</li>
                    <li>• Risk management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
              <p className="text-gray-700 mb-4">Under the PDPA 2010, we process your personal data based on:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Consent:</strong> When you voluntarily provide information or agree to marketing communications</li>
                <li><strong>Contract:</strong> To fulfill our service agreements with you</li>
                <li><strong>Legitimate Interest:</strong> For business operations, security, and service improvement</li>
                <li><strong>Legal Obligation:</strong> To comply with Malaysian laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your personal data with:</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="text-gray-700 space-y-3">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in service delivery (cloud hosting, payment processing, analytics)</li>
                  <li><strong>Business Partners:</strong> Technology partners for joint service delivery (with your consent)</li>
                  <li><strong>Legal Authorities:</strong> When required by Malaysian law or court orders</li>
                  <li><strong>Professional Advisors:</strong> Lawyers, accountants, and consultants bound by confidentiality</li>
                </ul>
                <p className="text-yellow-800 font-medium mt-4">
                  We do not sell, rent, or trade your personal data to third parties for marketing purposes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-2 text-blue-600" size={24} />
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your personal data:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Measures</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• SSL/TLS encryption</li>
                    <li>• Secure data centers</li>
                    <li>• Regular security updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Organizational Measures</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Staff training on data protection</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Regular security audits</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under PDPA 2010</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Access</h3>
                  <p className="text-gray-700 text-sm">Request information about personal data we hold about you</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Correction</h3>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete personal data</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Withdraw Consent</h3>
                  <p className="text-gray-700 text-sm">Withdraw consent for processing where consent is the legal basis</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Limit Processing</h3>
                  <p className="text-gray-700 text-sm">Request limitation of processing in certain circumstances</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain your personal data for as long as necessary to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations (typically 7 years for business records)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Fulfill legitimate business purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Some of our service providers may be located outside Malaysia. When we transfer personal data internationally, we ensure adequate protection through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contractual safeguards and data processing agreements</li>
                <li>Transfers to countries with adequate data protection laws</li>
                <li>Implementation of appropriate technical and organizational measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-blue-600" size={16} />
                    <span className="text-gray-700">privacy@sheerscomputer.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-blue-600" size={16} />
                    <span className="text-gray-700">+60 11-6326 3808</span>
                  </div>
                  <div className="text-gray-700">
                    <strong>Sheers Technologies Sdn. Bhd.</strong><br />
                    Level 1, Villa Putra<br />
                    Jalan Sultan Ismail<br />
                    Kuala Lumpur 50300<br />
                    Malaysia
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                <strong>Complaints:</strong> If you believe we have not handled your personal data in accordance with this policy or Malaysian law, you may file a complaint with the Personal Data Protection Department of Malaysia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}