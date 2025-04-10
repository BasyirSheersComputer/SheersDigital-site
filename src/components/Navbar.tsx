import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <div className="flex items-center justify-center flex-1">
              <div className="flex items-center mr-12">
                <Server className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">Sheers Digital</span>
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-12">
                <a 
                  href="#home" 
                  onClick={() => handleNavClick('home')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    activeSection === 'home' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#partner" 
                  onClick={() => handleNavClick('partner')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    activeSection === 'partner' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Partner With Us
                </a>
                <a 
                  href="#about" 
                  onClick={() => handleNavClick('about')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    activeSection === 'about' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  About the Firm
                </a>
                <a 
                  href="#careers" 
                  onClick={() => handleNavClick('careers')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    activeSection === 'careers' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Careers
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'home'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Home
            </a>
            <a
              href="#partner"
              onClick={() => handleNavClick('partner')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'partner'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Partner With Us
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'about'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              About the Firm
            </a>
            <a
              href="#careers"
              onClick={() => handleNavClick('careers')}
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                activeSection === 'careers'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;