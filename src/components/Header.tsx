import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle hover with delay for Products
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150); // 150ms delay
  };

  // Handle hover with delay for Solutions
  const handleSolutionsMouseEnter = () => {
    if (solutionsHoverTimeoutRef.current) {
      clearTimeout(solutionsHoverTimeoutRef.current);
      solutionsHoverTimeoutRef.current = null;
    }
    setIsSolutionsDropdownOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setIsSolutionsDropdownOpen(false);
    }, 150); // 150ms delay
  };

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsDropdownOpen(false);
      }
    };

    // Only add listener on mobile devices
    if (window.innerWidth < 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (solutionsHoverTimeoutRef.current) {
        clearTimeout(solutionsHoverTimeoutRef.current);
      }
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
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/';
                }
              }}
              className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative" 
              ref={solutionsDropdownRef}
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-lg border border-slate-600 z-50">
                  <div className="py-2">
                    <a
                      href="/inventory-integration"
                      className="block px-4 py-3 text-sm hover:bg-slate-600 transition-colors border-b border-slate-600"
                    >
                      <div className="font-semibold text-blue-400">Eliminate Stockouts & Overstocking</div>
                      <div className="text-xs text-slate-300 mt-1">From RM 8,500 • 7 days setup</div>
                    </a>
                    <a
                      href="/waste-logging-automation"
                      className="block px-4 py-3 text-sm hover:bg-slate-600 transition-colors border-b border-slate-600"
                    >
                      <div className="font-semibold text-blue-400">End Food Waste & Boost Profit Margins</div>
                      <div className="text-xs text-slate-300 mt-1">From RM 6,500 • 5 days setup</div>
                    </a>
                    <a
                      href="/supplier-integration"
                      className="block px-4 py-3 text-sm hover:bg-slate-600 transition-colors border-b border-slate-600"
                    >
                      <div className="font-semibold text-blue-400">Optimize Procurement & Reduce Costs</div>
                      <div className="text-xs text-slate-300 mt-1">From RM 12,500 • 10 days setup</div>
                    </a>
                    <a
                      href="/ai-forecasting"
                      className="block px-4 py-3 text-sm hover:bg-slate-600 transition-colors border-b border-slate-600"
                    >
                      <div className="font-semibold text-blue-400">Predict Demand & Maximize Sales</div>
                      <div className="text-xs text-slate-300 mt-1">From RM 18,500 • 14 days setup</div>
                    </a>
                    <a
                      href="/compliance-automation"
                      className="block px-4 py-3 text-sm hover:bg-slate-600 transition-colors"
                    >
                      <div className="font-semibold text-blue-400">Automate Compliance & Reduce Risk</div>
                      <div className="text-xs text-slate-300 mt-1">From RM 7,500 • 7 days setup</div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Products Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    window.location.href = '/';
                  }
                  setIsMenuOpen(false);
                }}
                className="hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer text-left"
              >
                Home
              </button>
              
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                  className="flex items-center justify-between w-full hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-3">
                    <a
                      href="/inventory-integration"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-blue-400">Eliminate Stockouts & Overstocking</div>
                      <div className="text-xs text-slate-300">From RM 8,500 • 7 days</div>
                    </a>
                    <a
                      href="/waste-logging-automation"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-blue-400">End Food Waste & Boost Profit Margins</div>
                      <div className="text-xs text-slate-300">From RM 6,500 • 5 days</div>
                    </a>
                    <a
                      href="/supplier-integration"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-blue-400">Optimize Procurement & Reduce Costs</div>
                      <div className="text-xs text-slate-300">From RM 12,500 • 10 days</div>
                    </a>
                    <a
                      href="/ai-forecasting"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-blue-400">Predict Demand & Maximize Sales</div>
                      <div className="text-xs text-slate-300">From RM 18,500 • 14 days</div>
                    </a>
                    <a
                      href="/compliance-automation"
                      className="block text-sm hover:text-blue-400 transition-colors"
                      onClick={() => {
                        setIsSolutionsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-blue-400">Automate Compliance & Reduce Risk</div>
                      <div className="text-xs text-slate-300">From RM 7,500 • 7 days</div>
                    </a>
                  </div>
                )}
              </div>
              
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