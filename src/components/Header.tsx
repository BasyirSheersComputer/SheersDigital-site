import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onBookDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-accent-2/20 font-montserrat sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-layout-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-1 rounded-layout flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary">SERVORA AI</span>
                <span className="text-xs text-primary/70 block -mt-1">Premium F&B Intelligence</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-primary hover:text-accent-1 transition-colors font-medium">
              FEATURES
            </Link>
            <Link to="/#about" className="text-primary hover:text-accent-1 transition-colors font-medium">
              ABOUT
            </Link>
            <Link to="/#testimonials" className="text-primary hover:text-accent-1 transition-colors font-medium">
              SUCCESS STORIES
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onBookDemo}
              className="text-primary hover:text-accent-1 transition-colors font-medium"
            >
              WATCH DEMO
            </button>
            <Link
              to="/signup"
              className="bg-accent-1 text-secondary px-6 py-2 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold shadow-card"
            >
              START FREE TRIAL
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-accent-1 focus:outline-none focus:text-accent-1"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-accent-2/20">
              <Link
                to="/#features"
                className="block px-3 py-2 text-primary hover:text-accent-1 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FEATURES
              </Link>
              <Link
                to="/#about"
                className="block px-3 py-2 text-primary hover:text-accent-1 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/#testimonials"
                className="block px-3 py-2 text-primary hover:text-accent-1 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SUCCESS STORIES
              </Link>
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    onBookDemo();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-primary hover:text-accent-1 transition-colors font-medium"
                >
                  WATCH DEMO
                </button>
                <Link
                  to="/signup"
                  className="block w-full text-center bg-accent-1 text-secondary px-6 py-2 rounded-layout hover:bg-accent-1/90 transition-all duration-200 font-semibold shadow-card"
                  onClick={() => setIsMenuOpen(false)}
                >
                  START FREE TRIAL
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;