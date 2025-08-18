import React from 'react';
import { Menu, X, Calendar, Play } from 'lucide-react';
import { trackCTAClick, trackCalendlyOpen } from '../utils/analytics';

interface HeaderProps {
  onBookCall: () => void;
}

export default function Header({ onBookCall }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleStartTrial = () => {
    trackCTAClick('header', 'Start Free Trial');
    window.location.href = '/signup';
  };

  const handleBookDemo = () => {
    trackCTAClick('header', 'Book Demo');
    trackCalendlyOpen('header');
    onBookCall();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WasteWise</h1>
              <p className="text-xs text-gray-600">AI Waste Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Results</a>
            <button
              onClick={handleBookDemo}
              className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2"
            >
              <Play size={16} />
              <span>Watch Demo</span>
            </button>
            <button
              onClick={handleStartTrial}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center space-x-2"
            >
              <Calendar size={16} />
              <span>Start Free Trial</span>
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
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Results</a>
              <button
                onClick={handleBookDemo}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play size={16} />
                <span>Watch Demo</span>
              </button>
              <button
                onClick={handleStartTrial}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={16} />
                <span>Start Free Trial</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}