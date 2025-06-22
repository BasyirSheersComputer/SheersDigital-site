import React from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface HeaderProps {
  onBookCall: () => void;
}

export default function Header({ onBookCall }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleBookCall = () => {
    trackCTAClick('header', 'Book Free Consultation');
    trackCalendlyOpen('header');
    onBookCall();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sheers Digital</h1>
              <p className="text-xs text-gray-600">IT Project Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
            <button
              onClick={handleBookCall}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2"
            >
              <Calendar size={16} />
              <span>Book Free Consultation</span>
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
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
              <button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={16} />
                <span>Book Free Consultation</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}