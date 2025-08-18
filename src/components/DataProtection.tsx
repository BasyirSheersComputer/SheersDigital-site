import React from 'react';
import { Shield, Lock, Database, AlertCircle, Phone, Mail } from 'lucide-react';

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Data Protection Notice</h1>
            <p className="text-gray-600 mt-2">Compliance with Personal Data Protection Act (PDPA) 2010</p>
            <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="mr-2 text-emerald-600" size={24} />
                PDPA 2010 Compliance Statement
              </h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <p className="text-emerald-800 leading-relaxed mb-4">
                  Sheers Software Sdn. Bhd. is committed to full compliance with the Personal Data Protection Act 2010 (Act 709) of Malaysia. This notice explains how we handle your personal data in accordance with the seven principles of data protection under Malaysian law.
                </p>
                <div className="bg-white border border-emerald-300 rounded-lg p-4">
                  <p className="text-emerald-900 font-medium">
                    <strong>Data User Registration:</strong> We are registered with the Personal Data Protection Department as required under Section 16 of the PDPA 2010.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Seven Principles of PDPA 2010</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">1. General Principle</h3>
                  <p className="text-blue-700 text-sm">
                    Personal data shall not be processed unless consent is given or processing is necessary for legitimate interests.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">2. Notice & Choice</h3>
                  <p className="text-purple-700 text-sm">
                    Data subjects must be informed about data processing and given choices where applicable.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">3. Disclosure</h3>
                  <p className="text-orange-700 text-sm">
                    Personal data shall not be disclosed without consent except as permitted by law.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">4. Security</h3>
                  <p className="text-green-700 text-sm">
                    Appropriate security measures must protect personal data from unauthorized access.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">5. Retention</h3>
                  <p className="text-red-700 text-sm">
                    Personal data shall not be kept longer than necessary for the purpose.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">6. Data Integrity</h3>
                  <p className="text-yellow-700 text-sm">
                    Personal data must be accurate, complete, and kept up-to-date.
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <h3 className="font-semibold text-indigo-800 mb-2">7. Access</h3>
                  <p className="text-indigo-700 text-sm">
                    Data subjects have the right to access and correct their personal data.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-2 text-blue-600" size={24} />
                Data Security Measures
              </h2>
              <p className="text-gray-700 mb-4">
                In compliance with Section 11 of PDPA 2010, we implement comprehensive security measures:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• 256-bit SSL/TLS encryption for data transmission</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Multi-factor authentication for system access</li>
                      <li>• Regular security vulnerability assessments</li>
                    </ul>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Automated backup systems with encryption</li>
                      <li>• Intrusion detection and prevention systems</li>
                      <li>• Regular security patches and updates</li>
                      <li>• Secure data centers with 24/7 monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Administrative Safeguards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Staff background checks and security clearance</li>
                      <li>• Mandatory data protection training programs</li>
                      <li>• Confidentiality agreements for all personnel</li>
                      <li>• Role-based access controls and permissions</li>
                    </ul>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Regular security audits and compliance reviews</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Data retention and disposal policies</li>
                      <li>• Third-party vendor security assessments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing Purposes</h2>
              <p className="text-gray-700 mb-4">
                Under Section 6 of PDPA 2010, we process personal data only for the following lawful purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Primary Purposes</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Providing IT project management services</li>
                    <li>• Customer relationship management</li>
                    <li>• Service delivery and support</li>
                    <li>• Billing and payment processing</li>
                    <li>• Quality assurance and improvement</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Secondary Purposes</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Marketing communications (with consent)</li>
                    <li>• Business development and research</li>
                    <li>• Legal compliance and regulatory reporting</li>
                    <li>• Risk management and fraud prevention</li>
                    <li>• Internal audit and compliance monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under PDPA 2010</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <p className="text-yellow-800 font-medium mb-3">
                  As a data subject under Malaysian law, you have the following rights:
                </p>
              </div>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Access (Section 30)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    You may request information about your personal data being processed, including:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Whether your personal data is being processed</li>
                    <li>• Description of the personal data being processed</li>
                    <li>• Purposes of processing</li>
                    <li>• Third parties to whom data may be disclosed</li>
                    <li>• Sources of the personal data</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Correction (Section 31)</h3>
                  <p className="text-gray-700 text-sm">
                    You may request correction of inaccurate, incomplete, misleading, or out-of-date personal data.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Withdraw Consent</h3>
                  <p className="text-gray-700 text-sm">
                    Where processing is based on consent, you may withdraw consent at any time (subject to legal or contractual restrictions).
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to Limit Processing</h3>
                  <p className="text-gray-700 text-sm">
                    You may request limitation of processing where data is inaccurate, processing is unlawful, or data is no longer needed.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention Schedule</h2>
              <p className="text-gray-700 mb-4">
                In accordance with the retention principle of PDPA 2010, we retain personal data only as long as necessary:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Data Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Retention Period</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Customer contracts and records</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">7 years after contract end</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Companies Act 2016</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Financial and tax records</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">7 years</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Income Tax Act 1967</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Marketing communications</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Until consent withdrawn</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">PDPA 2010</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Website analytics data</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">26 months</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Business purposes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Support and service records</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">3 years after service end</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">Business purposes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="mr-2 text-red-600" size={24} />
                Data Breach Response
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-3">Our Commitment to Data Security</h3>
                <p className="text-red-700 mb-4">
                  In the unlikely event of a data breach, we will:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>• Contain the breach within 24 hours</li>
                    <li>• Assess the scope and impact</li>
                    <li>• Notify affected individuals within 72 hours</li>
                    <li>• Report to Personal Data Protection Department if required</li>
                  </ul>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>• Implement remedial measures</li>
                    <li>• Provide support to affected individuals</li>
                    <li>• Conduct thorough investigation</li>
                    <li>• Update security measures to prevent recurrence</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cross-Border Data Transfers</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">International Transfer Safeguards</h3>
                <p className="text-blue-700 mb-4">
                  When transferring personal data outside Malaysia, we ensure adequate protection through:
                </p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Transfers only to countries with adequate data protection laws</li>
                  <li>• Standard contractual clauses with international service providers</li>
                  <li>• Binding corporate rules for intra-group transfers</li>
                  <li>• Explicit consent for transfers where required</li>
                  <li>• Regular monitoring of international data protection standards</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="font-semibold text-emerald-800 mb-3">Contact Our DPO</h3>
                <p className="text-emerald-700 mb-4">
                  Our Data Protection Officer is responsible for ensuring PDPA compliance and handling data protection inquiries:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-emerald-600" size={16} />
                    <span className="text-emerald-700">dpo@sheerstechnologies.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-emerald-600" size={16} />
                    <span className="text-emerald-700">+60 11-6326 3808 (Ext. 101)</span>
                  </div>
                  <div className="text-emerald-700">
                    <strong>Data Protection Officer</strong><br />
                    Sheers Software Sdn. Bhd.<br />
                    Level 1, Villa Putra<br />
                    Jalan Sultan Ismail<br />
                    Kuala Lumpur 50480, Malaysia
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints and Enforcement</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-3">Filing a Complaint</h3>
                <p className="text-yellow-700 mb-4">
                  If you believe we have not handled your personal data in accordance with PDPA 2010, you may:
                </p>
                <ol className="text-yellow-700 space-y-2 list-decimal list-inside">
                  <li>Contact our Data Protection Officer directly</li>
                  <li>File a complaint with the Personal Data Protection Department</li>
                  <li>Seek legal remedies through Malaysian courts</li>
                </ol>
                <div className="mt-4 p-4 bg-white border border-yellow-300 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Personal Data Protection Department</strong><br />
                    Ministry of Communications and Multimedia Malaysia<br />
                    Website: www.pdp.gov.my<br />
                    Email: pdp@kkmm.gov.my
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">
                This Data Protection Notice is regularly reviewed and updated to ensure continued compliance with Malaysian data protection laws and international best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}