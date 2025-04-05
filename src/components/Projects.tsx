import React, { useState } from 'react';
import { ArrowRight, X, Download, CheckCircle } from 'lucide-react';
import Services from './Services';

const projects = [
  {
    id: 1,
    title: 'How We Helped a Fortune 500 Company Save $2M Annually in IT Costs',
    problem: 'A global corporation was bleeding money due to frequent network outages and security breaches, facing:',
    problemPoints: [
      'Over $2M in annual losses from system downtime',
      'Rising cybersecurity threats and data breaches',
      'Frustrated employees and declining productivity',
      'Mounting compliance risks'
    ],
    solution: 'We implemented our proven 3-step infrastructure optimization process:',
    solutionPoints: [
      'Complete network infrastructure audit and redesign',
      'Advanced security protocol implementation',
      'Automated monitoring and response systems'
    ],
    outcome: {
      metrics: [
        '99.99% network uptime achieved',
        '40% reduction in IT costs',
        'Zero security breaches since implementation',
        '$1.5M annual cost savings'
      ],
      longTerm: 'The enhanced infrastructure enabled seamless global operations and supported a 200% increase in remote workforce.',
    },
    category: 'Cost Reduction & Security',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    downloadable: 'Complete Infrastructure Audit Checklist',
    theme: 'from-blue-900 to-black',
  },
  {
    id: 2,
    title: 'Healthcare Provider Avoids $5M in Fines & Improves Patient Care',
    problem: 'A major healthcare network was at risk of massive fines and reputation damage due to:',
    problemPoints: [
      'Non-compliance with HIPAA regulations',
      'Slow access to critical patient data',
      'Rising IT operational costs',
      'Security vulnerabilities in patient records'
    ],
    solution: 'We deployed our healthcare-specific compliance framework:',
    solutionPoints: [
      'HIPAA-compliant cloud migration strategy',
      'Real-time data synchronization system',
      'Automated compliance monitoring'
    ],
    outcome: {
      metrics: [
        '100% HIPAA compliance achieved',
        '65% faster patient data access',
        '45% reduction in IT costs',
        'Zero downtime during migration'
      ],
      longTerm: 'Enhanced patient care through immediate access to medical records and enabled telemedicine capabilities across 50 locations.',
    },
    category: 'Healthcare IT Compliance',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80',
    downloadable: 'Healthcare IT Compliance Checklist',
    theme: 'from-emerald-900 to-black',
  },
  {
    id: 3,
    title: 'Bank Prevents $100M Cyber Threat & Attracts High-Value Clients',
    problem: 'A leading financial institution faced existential threats from:',
    problemPoints: [
      '300% increase in annual cyber attacks',
      '$100M at risk from potential breaches',
      'Outdated security infrastructure',
      'Growing customer security concerns'
    ],
    solution: 'We implemented our banking-grade security framework:',
    solutionPoints: [
      'AI-powered threat detection system',
      'Real-time monitoring and response',
      'Employee security training program'
    ],
    outcome: {
      metrics: [
        '75% reduction in security incidents',
        '100% regulatory compliance',
        '90% faster threat detection',
        '$2M saved in potential breach costs'
      ],
      longTerm: 'Established the bank as an industry leader in cybersecurity, attracting high-value clients and increasing deposits by 40%.',
    },
    category: 'Financial Security',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    downloadable: 'Financial Institution Security Checklist',
    theme: 'from-purple-900 to-black',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedDownload, setSelectedDownload] = useState(null);

  return (
    <section id="projects" className="bg-black">
      <div className="text-center py-20">
        <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Case Studies</h2>
        <p className="mt-2 text-4xl md:text-5xl font-extrabold text-white sm:text-4xl">
          Real Results for Real Businesses
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto px-4">
          See how we've helped companies like yours overcome critical challenges and achieve extraordinary results.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={project.id} className={`relative bg-gradient-to-b ${project.theme}`}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-screen px-4 py-20">
              <div className="text-white space-y-8">
                <div>
                  <span className="inline-block px-4 py-1 text-sm font-semibold bg-blue-500/20 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-4xl font-bold leading-tight">{project.title}</h3>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-red-400">The Challenge</h4>
                  <p className="mt-2 text-gray-300">{project.problem}</p>
                  <ul className="mt-4 space-y-2">
                    {project.problemPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-red-500" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400">The Solution</h4>
                  <p className="mt-2 text-gray-300">{project.solution}</p>
                  <ul className="mt-4 space-y-2">
                    {project.solutionPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedDownload(project.downloadable);
                      setShowLeadForm(true);
                    }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Get the {project.downloadable}
                  </button>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
                  >
                    See Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Magnet Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Download {selectedDownload}</h3>
            <p className="text-gray-600 mb-6">
              Get instant access to our comprehensive checklist and start optimizing your IT infrastructure today.
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
              onClick={() => setShowLeadForm(false)}
              className="mt-4 w-full px-6 py-3 text-gray-600 hover:text-gray-800"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                {activeProject.category}
              </span>
              <h3 className="mt-2 text-3xl font-bold text-gray-900">{activeProject.title}</h3>
              
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-red-600">The Challenge</h4>
                  <p className="mt-2 text-gray-600">{activeProject.problem}</p>
                  <ul className="mt-4 space-y-2">
                    {activeProject.problemPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-red-500" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-600">Our Solution</h4>
                  <p className="mt-2 text-gray-600">{activeProject.solution}</p>
                  <ul className="mt-4 space-y-2">
                    {activeProject.solutionPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-green-600">The Results</h4>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {activeProject.outcome.metrics.map((metric, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-gray-600">{activeProject.outcome.longTerm}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => {
                    setActiveProject(null);
                    setSelectedDownload(activeProject.downloadable);
                    setShowLeadForm(true);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Download className="h-5 w-5 inline mr-2" />
                  Get the {activeProject.downloadable}
                </button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setActiveProject(null)}
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Modal */}
      {showServices && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
              <button
                onClick={() => setShowServices(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <Services />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;