import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ShoppingCart, User, X as XIcon } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isAllSheerssoftDropdownOpen, setIsAllSheerssoftDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const allSheerssoftDropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const allSheerssoftHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Handle hover with delay for All Sheerssoft
  const handleAllSheerssoftMouseEnter = () => {
    if (allSheerssoftHoverTimeoutRef.current) {
      clearTimeout(allSheerssoftHoverTimeoutRef.current);
      allSheerssoftHoverTimeoutRef.current = null;
    }
    setIsAllSheerssoftDropdownOpen(true);
  };

  const handleAllSheerssoftMouseLeave = () => {
    allSheerssoftHoverTimeoutRef.current = setTimeout(() => {
      setIsAllSheerssoftDropdownOpen(false);
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
      if (allSheerssoftDropdownRef.current && !allSheerssoftDropdownRef.current.contains(event.target as Node)) {
        setIsAllSheerssoftDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
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
      if (allSheerssoftHoverTimeoutRef.current) {
        clearTimeout(allSheerssoftHoverTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsProductsDropdownOpen(false);
    setIsAllSheerssoftDropdownOpen(false);
    setIsSearchOpen(false);
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

  // Search functionality
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchCancel = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Quick win solutions for search recommendations
  const quickWinSolutions = [
    { title: "Eliminate Stockouts & Overstocking", description: "From RM 8,500 • 7 days setup", link: "/inventory-integration" },
    { title: "End Food Waste & Boost Profit Margins", description: "From RM 6,500 • 5 days setup", link: "/waste-logging-automation" },
    { title: "Optimize Procurement & Reduce Costs", description: "From RM 12,500 • 10 days setup", link: "/supplier-integration" },
    { title: "Predict Demand & Maximize Sales", description: "From RM 18,500 • 14 days setup", link: "/ai-forecasting" },
    { title: "Automate Compliance & Reduce Risk", description: "From RM 7,500 • 7 days setup", link: "/compliance-automation" }
  ];

  return (
    <header className="bg-white text-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 min-h-0">
          {/* Left Side - Branding and Primary Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 min-w-0 flex-shrink-0">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex space-x-0.5 sm:space-x-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-sm"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-sm"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-sm"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900 whitespace-nowrap">Sheerssoft</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a 
                href="https://servora-ai.sheerssoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Servora AI
              </a>
            
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
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0 flex-shrink-0">
            {/* All Sheerssoft Dropdown */}
            <div 
              className="relative hidden sm:block" 
              ref={allSheerssoftDropdownRef}
              onMouseEnter={handleAllSheerssoftMouseEnter}
              onMouseLeave={handleAllSheerssoftMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
                <span className="hidden md:inline">All Sheerssoft</span>
                <span className="md:hidden">All</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAllSheerssoftDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAllSheerssoftDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-72 sm:w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      For Restaurants & Cafes
                    </div>
                    <Link to="/inventory-integration" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <div className="font-semibold text-gray-900">Inventory Management</div>
                      <div className="text-xs text-gray-600 mt-1">Eliminate stockouts & overstocking</div>
                    </Link>
                    <Link to="/waste-logging-automation" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <div className="font-semibold text-gray-900">Waste Reduction</div>
                      <div className="text-xs text-gray-600 mt-1">End food waste & boost profit margins</div>
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mt-2">
                      For Food Chains & Enterprises
                    </div>
                    <Link to="/supplier-integration" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <div className="font-semibold text-gray-900">Procurement Optimization</div>
                      <div className="text-xs text-gray-600 mt-1">Optimize procurement & reduce costs</div>
                    </Link>
                    <Link to="/ai-forecasting" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <div className="font-semibold text-gray-900">AI Demand Forecasting</div>
                      <div className="text-xs text-gray-600 mt-1">Predict demand & maximize sales</div>
                    </Link>
                    <Link to="/compliance-automation" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                      <div className="font-semibold text-gray-900">Compliance Automation</div>
                      <div className="text-xs text-gray-600 mt-1">Automate compliance & reduce risk</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Search Functionality */}
            <div className="relative" ref={searchRef}>
              {!isSearchOpen ? (
                <button 
                  onClick={handleSearchToggle}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              ) : (
                <div className="absolute top-full right-0 mt-1 w-80 sm:w-96 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Search Sheerssoft.com"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          autoFocus
                        />
                        <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                      </div>
                      <button 
                        onClick={handleSearchCancel}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                    
                    {searchQuery === '' && (
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-900 mb-2">Quick Win Solutions</div>
                        {quickWinSolutions.map((solution, index) => (
                          <Link
                            key={index}
                            to={solution.link}
                            className="block p-3 hover:bg-gray-50 transition-colors border border-gray-100 rounded-md"
                            onClick={handleSearchCancel}
                          >
                            <div className="font-medium text-gray-900">{solution.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{solution.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <button className="text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium hidden sm:block">
              <ShoppingCart className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer font-medium">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Sign in</span>
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
              <a 
                href="https://servora-ai.sheerssoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors text-left min-h-[44px] touch-manipulation mobile-button font-medium"
              >
                Servora AI
              </a>
              
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