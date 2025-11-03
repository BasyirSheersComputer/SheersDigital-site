/**
 * Lightweight Animated Section Component
 * Uses CSS animations instead of framer-motion for better performance
 * Reduces bundle size by ~60KB
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce
  });

  // Map animation types to CSS classes
  const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scaleIn: 'animate-scale-in'
  };

  const animationClass = animationClasses[animation];
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};
  const durationStyle = { animationDuration: `${duration}s` };

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ ...delayStyle, ...durationStyle }}
    >
      {children}
    </div>
  );
};
