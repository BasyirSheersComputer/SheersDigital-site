import React, { useState } from 'react';
import { Menu, X, Calendar, ChevronDown, MapPin, Phone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface HeaderProps {
  onBookCall: () => void;
}

export default function Header({ onBookCall }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleBookCall = () => {
    trackCTAClick('header', 'Get My Free Digital Audit');
    trackCalendlyOpen('header');
    onBookCall();
  };

  const services = [
    { name: 'AI Automation Revolution', path: '/services/cloud-migration' },
    { name: 'Cybersecurity & Data Protection', path: '/services/cybersecurity' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Web Application Development', path: '/services/web-application-development' },
    { name: 'Business Process Automation', path: '/services/process-automation' },
    { name: 'Digital Transformation Consulting', path: '/services/it-consulting' },
    { name: '24/7 Digital Support', path: '/services/support-maintenance' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Zap size={14} />
                <span>🚀 Digital Transformation Experts | Malaysia's #1 AI Automation Company</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+60 11-6326 3808</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">24/7 Digital Support</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-3">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Sheers Technologies
                </h1>
                <p className="text-xs text-gray-600">Digital Transformation | AI Automation | Malaysia</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1 font-medium"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Digital Solutions</span>
                  <ChevronDown size={16} />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Why Transform</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Success Stories</a>
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center space-x-2 font-bold shadow-lg transform hover:scale-105"
              >
                <Calendar size={16} />
                <span>Get My Free Digital Audit</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1 w-full text-left font-medium"
                  >
                    <span>Digital Solutions</span>
                    <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Why Transform</a>
                <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Success Stories</a>
                <button
                  onClick={handleBookCall}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 font-bold"
                >
                  <Calendar size={16} />
                  <span>Get My Free Digital Audit</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}