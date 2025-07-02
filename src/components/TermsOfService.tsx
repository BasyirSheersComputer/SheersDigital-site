import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2 text-blue-600" size={24} />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Sheers Technologies Sdn. Bhd. (Company No. 1234567-X) ("Company," "we," "our," or "us") regarding your use of our website and services.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Sheers Technologies Sdn. Bhd.</strong><br />
                  Company Registration No: 1234567-X<br />
                  Level 1, Villa Putra<br />
                  Jalan Sultan Ismail<br />
                  Kuala Lumpur 50480, Malaysia<br />
                  Email: sales@sheerscomputer.com<br />
                  Phone: +60 11-6326 3808
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-700 mb-4">Sheers Technologies provides IT project management services including but not limited to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-800 mb-2">Core Services</h3>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Cloud migration and digital transformation</li>
                    <li>• Cybersecurity consulting and implementation</li>
                    <li>• Business process automation</li>
                    <li>• IT infrastructure consulting</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Additional Services</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Technical support and maintenance</li>
                    <li>• IT strategy consulting</li>
                    <li>• System integration services</li>
                    <li>• Training and documentation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement Terms</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation Services</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Free initial consultations are limited to 30 minutes</li>
                    <li>• Detailed proposals require signed engagement letters</li>
                    <li>• All recommendations are based on information provided by client</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Project Implementation</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Formal contracts required for all implementation projects</li>
                    <li>• Timelines are estimates and subject to client cooperation</li>
                    <li>• Change requests may affect project scope and pricing</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Support Services</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Support hours and response times as per service level agreements</li>
                    <li>• Emergency support available with premium pricing</li>
                    <li>• Remote access requires client authorization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">General Payment Terms:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• All prices quoted in Malaysian Ringgit (MYR) unless otherwise specified</li>
                  <li>• Payment terms: Net 30 days from invoice date</li>
                  <li>• Late payment charges: 1.5% per month on overdue amounts</li>
                  <li>• GST/SST applicable as per Malaysian tax regulations</li>
                  <li>• Refunds subject to specific terms in service agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">Clients agree to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Information & Access</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Provide accurate and complete information</li>
                    <li>• Grant necessary system access for service delivery</li>
                    <li>• Maintain confidentiality of access credentials</li>
                    <li>• Backup critical data before implementations</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Cooperation & Compliance</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Cooperate with project timelines and requirements</li>
                    <li>• Ensure compliance with applicable laws and regulations</li>
                    <li>• Provide timely feedback and approvals</li>
                    <li>• Maintain appropriate insurance coverage</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-yellow-600" size={24} />
                Limitations of Liability
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-3">Important Limitations:</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Our total liability is limited to the amount paid for services in the 12 months preceding the claim</li>
                  <li>• We are not liable for indirect, consequential, or punitive damages</li>
                  <li>• Force majeure events (natural disasters, government actions, etc.) excuse performance delays</li>
                  <li>• Client must mitigate damages and notify us promptly of any issues</li>
                  <li>• These limitations apply to the fullest extent permitted by Malaysian law</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Intellectual Property</h3>
                  <p className="text-gray-700 text-sm">
                    All methodologies, processes, documentation templates, and proprietary tools remain our intellectual property. Clients receive a license to use deliverables for their internal business purposes only.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Client Intellectual Property</h3>
                  <p className="text-gray-700 text-sm">
                    We respect client intellectual property and will not use confidential information beyond the scope of providing services. Clients retain ownership of their data and business information.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Third-Party Software</h3>
                  <p className="text-gray-700 text-sm">
                    Third-party software licenses are subject to vendor terms. We assist with procurement but clients are responsible for compliance with license terms.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <p className="text-purple-800 mb-4">
                  We maintain strict confidentiality regarding client information and business operations. This includes:
                </p>
                <ul className="text-purple-700 space-y-2">
                  <li>• Non-disclosure of client business information to third parties</li>
                  <li>• Secure handling and storage of client data</li>
                  <li>• Staff confidentiality agreements and training</li>
                  <li>• Return or destruction of confidential information upon request</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">Either party may terminate services under the following conditions:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Termination for Convenience</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 30 days written notice required</li>
                    <li>• Payment for work completed to termination date</li>
                    <li>• Orderly transition of responsibilities</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Termination for Cause</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Material breach of contract terms</li>
                    <li>• Non-payment of invoices beyond 60 days</li>
                    <li>• Violation of confidentiality obligations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Malaysian Law Applies:</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• These Terms are governed by Malaysian law</li>
                  <li>• Disputes subject to jurisdiction of Malaysian courts</li>
                  <li>• Mediation preferred before litigation</li>
                  <li>• Arbitration available for commercial disputes</li>
                  <li>• Venue: Kuala Lumpur, Malaysia</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Use Terms</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Acceptable Use</h3>
                  <p className="text-gray-700 text-sm">
                    You may use our website for legitimate business purposes only. Prohibited activities include attempting to gain unauthorized access, distributing malware, or using automated systems to extract content.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Content Accuracy</h3>
                  <p className="text-gray-700 text-sm">
                    While we strive for accuracy, website content is for informational purposes only and should not be relied upon as professional advice without consultation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={24} />
                Contact Information
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-green-800 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="text-green-700">
                  <strong>Legal Department</strong><br />
                  Email: legal@sheerscomputer.com<br />
                  Phone: +60 11-6326 3808<br />
                  Address: Level 1, Villa Putra, Jalan Sultan Ismail, Kuala Lumpur 50480, Kuala Lumpur 50480, Malaysia
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email or website notice. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">
                These Terms of Service are effective as of the date last updated and supersede all prior agreements and understandings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}