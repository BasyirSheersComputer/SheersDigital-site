import React from 'react';
import { Server, Cloud, Shield, Database, Code, Settings } from 'lucide-react';

const services = [
  {
    title: 'Network Infrastructure',
    description: 'Design and implementation of secure, scalable network solutions tailored to your business needs.',
    icon: Server,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless migration and management of your applications and data in the cloud environment.',
    icon: Cloud,
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
    icon: Shield,
  },
  {
    title: 'Data Management',
    description: 'Efficient data storage, processing, and analytics solutions for informed decision-making.',
    icon: Database,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business challenges.',
    icon: Code,
  },
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to optimize your IT infrastructure and align it with business objectives.',
    icon: Settings,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Comprehensive IT Solutions</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a wide range of services to help your business leverage technology for growth and innovation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-6 left-6 bg-blue-100 rounded-md p-3">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="pl-16">
                <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;