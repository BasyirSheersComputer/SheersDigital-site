import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };

    // Only add listener on mobile devices
    if (window.innerWidth < 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Sheers Software</h1>
              <p className="text-sm text-slate-300">Sdn Bhd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-700 rounded-lg shadow-lg border border-slate-600 z-50">
                  <div className="py-2">
                    <a
                      href="https://servora-ai.sheerssoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-slate-600 transition-colors"
                    >
                      Servora
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToSection('testimonials');
                } else {
                  window.location.href = '/#testimonials';
                }
              }}
              className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToSection('contact');
                } else {
                  window.location.href = '/#contact';
                }
              }}
              className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              
              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="flex items-center justify-between w-full hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="https://servora-ai.sheerssoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Servora
                    </a>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToSection('testimonials');
                  } else {
                    window.location.href = '/#testimonials';
                  }
                }}
                className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToSection('contact');
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer text-left"
              >
                Contact
              </button>
              <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors w-full">
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;