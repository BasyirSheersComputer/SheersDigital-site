import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = useScrollToSection();

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