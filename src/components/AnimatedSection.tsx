import React from 'react';
import { motion } from 'framer-motion';
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

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

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

  return (
    <motion.div
      ref={elementRef}
      className={className}
      variants={animations[animation]}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};
