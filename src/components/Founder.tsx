import React from "react";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const Founder = () => {
  return (
    <section id="founder" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            ABOUT OUR FOUNDER
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex justify-center">
            <div className="border-2 border-black rounded-lg overflow-hidden bg-white shadow-md w-56 h-72">
              <img
                src="/images/ahmad_basyir.jpg"
                alt="Ahmad Basyir Azahari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Ahmad Basyir Azahari is the founder and Managing Director of
              Sheers Digital, leading innovative IT solutions and system
              integration services. Over the past six years, he has built a
              career specializing in systems engineering, infrastructure
              optimization, and project management.
            </p>
            <p>
              Before founding Sheers Digital, Ahmad served as Project Lead and
              Senior Systems Engineer at ALMEX System Technology Asia. There, he
              engineered and managed kiosk system integrations, delivering
              complex projects through a combination of technical expertise and
              operational leadership.
            </p>
            <p>
              Ahmad holds a Bachelor of Engineering from the University of
              Malaya. His mission is to make enterprise-grade IT infrastructure
              accessible and manageable for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
