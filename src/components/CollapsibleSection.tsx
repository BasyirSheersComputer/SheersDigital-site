import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollableContent from './ScrollableContent';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  icon?: React.ComponentType<{ className?: string }>;
  onToggle?: (isExpanded: boolean) => void;
  maxContentHeight?: string;
  enableVerticalScroll?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  title,
  children,
  defaultExpanded = false,
  className = '',
  titleClassName = '',
  contentClassName = '',
  icon: Icon,
  onToggle,
  maxContentHeight = '400px',
  enableVerticalScroll = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView && !hasBeenViewed) {
          setHasBeenViewed(true);
          // Auto-expand when first viewed
          if (!isExpanded) {
            setIsExpanded(true);
            onToggle?.(true);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isExpanded, hasBeenViewed, onToggle]);

  // Auto-collapse when section is out of view
  useEffect(() => {
    if (!isInView && isExpanded && hasBeenViewed) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
        onToggle?.(false);
      }, 2000); // Collapse after 2 seconds out of view

      return () => clearTimeout(timer);
    }
  }, [isInView, isExpanded, hasBeenViewed, onToggle]);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`collapsible-section ${className}`}
    >
      <button
        onClick={handleToggle}
        className={`w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 ${titleClassName} ${
          isExpanded ? 'shadow-sm' : 'shadow-sm'
        }`}
        aria-expanded={isExpanded}
        aria-controls={`${id}-content`}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-5 h-5 text-gray-600" />}
          <h2 className="text-lg font-semibold text-gray-900 text-left">
            {title}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          {isInView && (
            <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        id={`${id}-content`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isExpanded}
      >
        <div className={`p-4 bg-gray-50 border-l-4 border-blue-500 ${contentClassName}`}>
          {enableVerticalScroll ? (
            <ScrollableContent maxHeight={maxContentHeight}>
              {children}
            </ScrollableContent>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
