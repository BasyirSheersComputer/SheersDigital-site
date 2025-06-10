import React, { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setCurrentPage(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <div className="flex items-center justify-center flex-1">
              <div 
                className="flex items-center mr-12 cursor-pointer"
                onClick={() => handleNavClick('home')}
              >
                <Server className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">Sheers Digital</span>
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-12">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    currentPage === 'home' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('partner')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    currentPage === 'partner' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Partner With Us
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    currentPage === 'about' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  About the Firm
                </button>
                <button 
                  onClick={() => handleNavClick('careers')}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    currentPage === 'careers' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  Careers
                </button>
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
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                currentPage === 'home'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('partner')}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                currentPage === 'partner'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Partner With Us
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                currentPage === 'about'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              About the Firm
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 ${
                currentPage === 'careers'
                  ? 'border-white text-white bg-gray-900'
                  : 'border-transparent text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-300'
              } text-base font-medium`}
            >
              Careers
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;