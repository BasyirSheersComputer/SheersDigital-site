import React, { useState, useEffect } from 'react';
import { Menu, X, Server } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll and update active section
  const handleScroll = () => {
    const sections = ['home', 'services', 'projects', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + 100; // Adding offset to account for navbar height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle click on nav links
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Server className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sheers Digital</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a 
                href="#home" 
                onClick={() => handleNavClick('home')}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'home' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-300'
                }`}
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={() => handleNavClick('services')}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'services' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-300'
                }`}
              >
                Services
              </a>
              <a 
                href="#projects" 
                onClick={() => handleNavClick('projects')}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'projects' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-300'
                }`}
              >
                Projects
              </a>
              <a 
                href="#testimonials" 
                onClick={() => handleNavClick('testimonials')}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'testimonials' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-300'
                }`}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => handleNavClick('contact')}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'contact' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-300'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get a Quote
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'home'
                  ? 'border-blue-500 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
              } text-base font-medium`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => handleNavClick('services')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'services'
                  ? 'border-blue-500 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
              } text-base font-medium`}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => handleNavClick('projects')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'projects'
                  ? 'border-blue-500 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
              } text-base font-medium`}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={() => handleNavClick('testimonials')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'testimonials'
                  ? 'border-blue-500 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
              } text-base font-medium`}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'contact'
                  ? 'border-blue-500 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
              } text-base font-medium`}
            >
              Contact
            </a>
            <div className="mt-4 pl-3 pr-4">
              <a
                href="#contact"
                className="block w-full px-4 py-2 text-center text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;