import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Enterprise Network Overhaul',
    category: 'Network Infrastructure',
    description: 'Complete redesign and implementation of network infrastructure for a Fortune 500 company, resulting in 40% improved performance and enhanced security.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 2,
    title: 'Cloud Migration Strategy',
    category: 'Cloud Integration',
    description: 'Developed and executed a comprehensive cloud migration strategy for a healthcare provider, ensuring zero downtime and full compliance with industry regulations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 3,
    title: 'Cybersecurity Enhancement',
    category: 'Cybersecurity',
    description: 'Implemented advanced threat detection and prevention systems for a financial institution, reducing security incidents by 75% and ensuring regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    title: 'Data Warehouse Implementation',
    category: 'Data Management',
    description: 'Designed and deployed a scalable data warehouse solution for a retail chain, enabling real-time analytics and data-driven decision making across 200+ locations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 5,
    title: 'Custom ERP Solution',
    category: 'Custom Software Development',
    description: 'Developed a tailored ERP system for a manufacturing company, integrating all business processes and increasing operational efficiency by 35%.',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 6,
    title: 'IT Strategy Consulting',
    category: 'IT Consulting',
    description: 'Provided strategic IT consulting for a growing startup, helping them establish a scalable technology foundation that supported 300% growth over two years.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const categories = ['All', ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Success Stories</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-2 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors duration-200 mb-2`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{project.description}</p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {activeProject.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{activeProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{activeProject.description}</p>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-medium text-gray-900">Project Highlights</h4>
                  <ul className="mt-2 pl-5 list-disc text-gray-600">
                    <li>Successfully implemented within the projected timeline</li>
                    <li>Exceeded client expectations in performance metrics</li>
                    <li>Provided comprehensive training and documentation</li>
                    <li>Ongoing support and maintenance with 99.9% uptime</li>
                  </ul>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;