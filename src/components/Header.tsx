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
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
              {/* Corporate Logo */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 logo-transparent">
                <img 
                  src="/img/logo.png"
                  alt="Sheerssoft Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  loading="eager"
                  style={{
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                    background: 'transparent',
                    mixBlendMode: 'normal'
                  }}
                />
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
            className="lg:hidden min-h-[44px] min-w-[44px] touch-manipulation mobile-menu-btn text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <nav 
            ref={mobileMenuRef}
            className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col space-y-2 pt-6 px-2">
              {/* Servora AI Link */}
              <a 
                href="https://servora-ai.sheerssoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-blue-50 transition-all duration-200 text-left min-h-[56px] touch-manipulation mobile-button font-medium text-base rounded-lg border border-gray-100 active:bg-blue-100 active:scale-[0.98]"
              >
                <span className="text-lg">Servora AI</span>
              </a>
              
              {/* Mobile Solutions Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                  className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-blue-50 transition-all duration-200 bg-transparent border border-gray-100 cursor-pointer text-left min-h-[56px] touch-manipulation mobile-button font-medium text-base rounded-lg active:bg-blue-100 active:scale-[0.98]"
                >
                  <span className="text-lg">Solutions</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsDropdownOpen && (
                  <div className="ml-4 mt-3 space-y-3 bg-gray-50 rounded-xl p-4 mobile-dropdown border border-gray-200 shadow-sm">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Quick Win Solutions</div>
                    
                    <button
                      onClick={() => handleMobileLinkClick('/inventory-integration')}
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Eliminate Stockouts & Overstocking</div>
                      <div className="text-sm text-gray-600">From RM 8,500 • 7 days</div>
                    </button>
                    
                    <button
                      onClick={() => handleMobileLinkClick('/waste-logging-automation')}
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">End Food Waste & Boost Profit Margins</div>
                      <div className="text-sm text-gray-600">From RM 6,500 • 5 days</div>
                    </button>
                    
                    <button
                      onClick={() => handleMobileLinkClick('/supplier-integration')}
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Optimize Procurement & Reduce Costs</div>
                      <div className="text-sm text-gray-600">From RM 12,500 • 10 days</div>
                    </button>
                    
                    <button
                      onClick={() => handleMobileLinkClick('/ai-forecasting')}
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Predict Demand & Maximize Sales</div>
                      <div className="text-sm text-gray-600">From RM 18,500 • 14 days</div>
                    </button>
                    
                    <button
                      onClick={() => handleMobileLinkClick('/compliance-automation')}
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 text-base mb-1">Automate Compliance & Reduce Risk</div>
                      <div className="text-sm text-gray-600">From RM 7,500 • 7 days</div>
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Products Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-blue-50 transition-all duration-200 bg-transparent border border-gray-100 cursor-pointer text-left min-h-[56px] touch-manipulation mobile-button font-medium text-base rounded-lg active:bg-blue-100 active:scale-[0.98]"
                >
                  <span className="text-lg">Products</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="ml-4 mt-3 bg-gray-50 rounded-xl p-4 mobile-dropdown border border-gray-200 shadow-sm">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Our Products</div>
                    
                    <Link
                      to="/servora-development"
                      className="block w-full px-4 py-4 text-left min-h-[64px] touch-manipulation mobile-button bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 active:bg-blue-100 active:scale-[0.98] shadow-sm flex items-center"
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <div className="font-semibold text-gray-900 text-base">Servora Platform</div>
                        <div className="text-sm text-gray-600 mt-1">Under Development</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleContactClick}
                className="flex items-center px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-blue-50 transition-all duration-200 bg-transparent border border-gray-100 cursor-pointer text-left min-h-[56px] touch-manipulation mobile-button font-medium text-base rounded-lg active:bg-blue-100 active:scale-[0.98]"
              >
                <span className="text-lg">Support</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;