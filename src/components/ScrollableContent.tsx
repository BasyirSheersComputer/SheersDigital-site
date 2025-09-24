import React, { useRef, useState, useEffect } from 'react';

interface ScrollableContentProps {
  children: React.ReactNode;
  maxHeight?: string;
  className?: string;
  showScrollIndicators?: boolean;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({
  children,
  maxHeight = '400px',
  className = '',
  showScrollIndicators = true
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if content overflows
  const [contentOverflows, setContentOverflows] = useState(false);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const checkOverflow = () => {
        setContentOverflows(container.scrollHeight > container.clientHeight);
      };
      
      checkOverflow();
      
      // Use ResizeObserver to detect content changes
      const resizeObserver = new ResizeObserver(checkOverflow);
      resizeObserver.observe(container);
      
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [children]);

  return (
    <div className={`relative ${className}`}>
      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 hover:scrollbar-thumb-blue-500"
        style={{
          maxHeight,
          scrollbarWidth: 'thin',
          scrollbarColor: '#93c5fd #f3f4f6'
        }}
      >
        {children}
      </div>

      {/* Scroll Indicators */}
      {showScrollIndicators && contentOverflows && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-xs text-blue-600 font-medium">Scroll</span>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableContent;
