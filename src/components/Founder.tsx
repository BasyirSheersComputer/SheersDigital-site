import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/ahmad_basyir.jpg"
              alt="Ahmad Basyir Azahari"
              className="rounded-lg shadow-xl w-full object-cover aspect-4/3"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahmad Basyir Azahari</h3>
              <p className="text-lg text-gray-600 mb-6">
                Dynamic IT Project Manager with over 6 years of comprehensive experience in systems engineering 
                and project management. Currently leading innovative IT solutions and system integration 
                services at Sheers Digital.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Journey</h4>
                  <p className="text-gray-600 mt-2">
                    As Project Lead and Sr. Systems Engineer at ALMEX System Technology Asia, 
                    Ahmad has successfully engineered and managed comprehensive project plans for 
                    kiosk system integrations. His expertise in project management, risk mitigation, 
                    and team leadership has consistently delivered exceptional results for clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expertise</h4>
                  <p className="text-gray-600 mt-2">
                    Specializing in infrastructure optimization, gap analysis, and operational resilience, 
                    Ahmad brings a wealth of experience in managing diverse IT projects, from server 
                    installations to network cabling initiatives. His approach combines technical expertise 
                    with strategic thinking to deliver sustainable solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Education & Vision</h4>
                  <p className="text-gray-600 mt-2">
                    With a Bachelor of Engineering from the University of Malaya, Ahmad combines his 
                    technical foundation with practical experience to drive innovation in IT solutions. 
                    His mission is to make enterprise-grade IT infrastructure accessible and manageable 
                    for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <blockquote className="italic text-gray-700">
                "Our goal at Sheers Digital is to transform how businesses approach their IT infrastructure. 
                We believe in making enterprise-level solutions accessible while maintaining the highest 
                standards of security and efficiency."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;