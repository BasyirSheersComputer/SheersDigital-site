import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Utensils, ChevronDown, Search, ShoppingCart, User } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add listeners for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (solutionsHoverTimeoutRef.current) {
        clearTimeout(solutionsHoverTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = (path: string) => {
    setIsMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsProductsDropdownOpen(false);
    
    // Use React Router navigation instead of window.location.href
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const handleTestimonialsClick = () => {
    if (location.pathname === '/') {
      scrollToSection('testimonials');
    } else {
      navigate('/#testimonials');
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scrollToSection('contact');
    } else {
      navigate('/#contact');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Branding and Primary Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Servora</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate('/');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
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
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              
                {isSolutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <Link
                        to="/inventory-integration"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                      >
                        <div className="font-semibold text-gray-900">Eliminate Stockouts & Overstocking</div>
                        <div className="text-xs text-gray-600 mt-1">From RM 8,500 • 7 days setup</div>
                      </Link>
                      <Link
                        to="/waste-logging-automation"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                      >
                        <div className="font-semibold text-gray-900">End Food Waste & Boost Profit Margins</div>
                        <div className="text-xs text-gray-600 mt-1">From RM 6,500 • 5 days setup</div>
                      </Link>
                      <Link
                        to="/supplier-integration"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                      >
                        <div className="font-semibold text-gray-900">Optimize Procurement & Reduce Costs</div>
                        <div className="text-xs text-gray-600 mt-1">From RM 12,500 • 10 days setup</div>
                      </Link>
                      <Link
                        to="/ai-forecasting"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                      >
                        <div className="font-semibold text-gray-900">Predict Demand & Maximize Sales</div>
                        <div className="text-xs text-gray-600 mt-1">From RM 18,500 • 14 days setup</div>
                      </Link>
                      <Link
                        to="/compliance-automation"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-900">Automate Compliance & Reduce Risk</div>
                        <div className="text-xs text-gray-600 mt-1">From RM 7,500 • 7 days setup</div>
                      </Link>
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
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <Link
                        to="/servora-development"
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-900">Servora Platform</div>
                        <div className="text-xs text-gray-600 mt-1">Under Development</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToSection('testimonials');
                  } else {
                    navigate('/#testimonials');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
              >
                Testimonials
              </button>
              
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToSection('contact');
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
              >
                Contact
              </button>
              
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToSection('contact');
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
              >
                Support
              </button>
            </nav>
          </div>

          {/* Right Side - Utility Navigation */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
              <span>All Servora</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            
            <button className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
              <ShoppingCart className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
              <User className="w-4 h-4" />
              <span>Sign in</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden min-h-[44px] min-w-[44px] touch-manipulation mobile-menu-btn text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            ref={mobileMenuRef}
            className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white mobile-nav"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
              >
                Home
              </button>
              
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-3 bg-gray-50 rounded-lg p-3 mobile-dropdown border border-gray-200">
                    <button
                      onClick={() => handleMobileLinkClick('/inventory-integration')}
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors text-left w-full min-h-[44px] touch-manipulation mobile-button bg-transparent border-none"
                    >
                      <div className="font-semibold text-gray-900">Eliminate Stockouts & Overstocking</div>
                      <div className="text-xs text-gray-600">From RM 8,500 • 7 days</div>
                    </button>
                    <button
                      onClick={() => handleMobileLinkClick('/waste-logging-automation')}
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors text-left w-full min-h-[44px] touch-manipulation mobile-button bg-transparent border-none"
                    >
                      <div className="font-semibold text-gray-900">End Food Waste & Boost Profit Margins</div>
                      <div className="text-xs text-gray-600">From RM 6,500 • 5 days</div>
                    </button>
                    <button
                      onClick={() => handleMobileLinkClick('/supplier-integration')}
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors text-left w-full min-h-[44px] touch-manipulation mobile-button bg-transparent border-none"
                    >
                      <div className="font-semibold text-gray-900">Optimize Procurement & Reduce Costs</div>
                      <div className="text-xs text-gray-600">From RM 12,500 • 10 days</div>
                    </button>
                    <button
                      onClick={() => handleMobileLinkClick('/ai-forecasting')}
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors text-left w-full min-h-[44px] touch-manipulation mobile-button bg-transparent border-none"
                    >
                      <div className="font-semibold text-gray-900">Predict Demand & Maximize Sales</div>
                      <div className="text-xs text-gray-600">From RM 18,500 • 14 days</div>
                    </button>
                    <button
                      onClick={() => handleMobileLinkClick('/compliance-automation')}
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors text-left w-full min-h-[44px] touch-manipulation mobile-button bg-transparent border-none"
                    >
                      <div className="font-semibold text-gray-900">Automate Compliance & Reduce Risk</div>
                      <div className="text-xs text-gray-600">From RM 7,500 • 7 days</div>
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-3 mobile-dropdown border border-gray-200">
                    <Link
                      to="/servora-development"
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors min-h-[44px] touch-manipulation mobile-button flex items-center"
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="font-semibold text-gray-900">Servora Platform</div>
                      <div className="text-xs text-gray-600 ml-1">Under Development</div>
                    </Link>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleTestimonialsClick}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
              >
                Contact
              </button>
              <button 
                onClick={handleContactClick}
                className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-left min-h-[44px] touch-manipulation mobile-button font-medium"
              >
                Support
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;