import React, { useState } from 'react';
import { Download, PlayCircle, FileText, FileCheck, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "IT Security Masterclass",
    type: "Video Series",
    description: "3-part video series on protecting your business from cyber threats",
    icon: PlayCircle,
    cta: "Watch Now",
    value: "$997 Value"
  },
  {
    title: "Infrastructure Audit Checklist",
    type: "Template",
    description: "Complete checklist for auditing your IT infrastructure",
    icon: FileCheck,
    cta: "Download Template",
    value: "$497 Value"
  },
  {
    title: "Cost Reduction Playbook",
    type: "eBook",
    description: "Step-by-step guide to reduce IT costs by 40%",
    icon: FileText,
    cta: "Get the Playbook",
    value: "$297 Value"
  },
  {
    title: "Security Assessment Tools",
    type: "Downloads",
    description: "Essential tools for evaluating your security posture",
    icon: Download,
    cta: "Access Tools",
    value: "$797 Value"
  }
];

const FreeResources = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            FREE ADVANCED TRAINING
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Videos, eBooks, Guides, Templates, Downloads & more to help you succeed
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="uppercase text-sm font-semibold text-blue-600 mb-2">
                  {resource.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="text-lg font-semibold text-purple-600 mb-4">
                  {resource.value}
                </div>
                <button
                  onClick={() => {
                    setSelectedResource(resource);
                    setShowForm(true);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-2 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  {resource.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Instant Access to {selectedResource?.title}
            </h3>
            <p className="text-gray-600 mb-6">
              Enter your work email to receive your free {selectedResource?.type.toLowerCase()}.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Instant Access
              </button>
            </form>
            
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 w-full px-6 py-3 text-gray-600 hover:text-gray-800"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeResources;