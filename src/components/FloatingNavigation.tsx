import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Home, Users, BarChart3, HelpCircle, MessageCircle, Target, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path?: string;
  section?: string;
  color: string;
}

const FloatingNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Define navigation items based on the screenshots
  const navigationItems: NavigationItem[] = [
    {
      id: 'hero',
      label: 'Home',
      icon: Home,
      path: '/',
      color: 'bg-blue-500'
    },
    {
      id: 'testimonials',
      label: 'Reviews',
      icon: Users,
      section: 'testimonials',
      color: 'bg-green-500'
    },
    {
      id: 'comparison',
      label: 'Comparison',
      icon: BarChart3,
      section: 'comparison',
      color: 'bg-purple-500'
    },
    {
      id: 'benefits',
      label: 'Benefits',
      icon: TrendingUp,
      section: 'benefits',
      color: 'bg-orange-500'
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: Target,
      section: 'pricing',
      color: 'bg-red-500'
    },
    {
      id: 'faq',
      label: 'FAQ',
      icon: HelpCircle,
      section: 'faq',
      color: 'bg-indigo-500'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: MessageCircle,
      section: 'contact',
      color: 'bg-teal-500'
    }
  ];

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show/hide floating nav based on scroll position
      setIsVisible(scrollY > windowHeight * 0.3);

      // Determine active section based on scroll position
      const sections = [
        { id: 'hero', element: document.getElementById('hero') },
        { id: 'testimonials', element: document.getElementById('testimonials') },
        { id: 'comparison', element: document.getElementById('comparison') },
        { id: 'benefits', element: document.getElementById('benefits') },
        { id: 'pricing', element: document.getElementById('pricing') },
        { id: 'faq', element: document.getElementById('faq') },
        { id: 'contact', element: document.getElementById('contact') }
      ];

      let currentSection = '';
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.3 && rect.bottom > windowHeight * 0.3) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: NavigationItem) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      if (location.pathname === '/') {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.section}`);
      }
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {isExpanded ? (
          <div className="p-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600 px-2">Navigate</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id || 
                  (item.path && location.pathname === item.path);
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? `${item.color} text-white shadow-md` 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <span className="text-xs font-medium leading-tight text-center">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="flex space-x-1">
                {navigationItems.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id || 
                    (item.path && location.pathname === item.path);
                  
                  return (
                    <div
                      key={item.id}
                      className={`w-2 h-2 rounded-full ${
                        isActive ? item.color : 'bg-gray-300'
                      }`}
                    />
                  );
                })}
              </div>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingNavigation;
