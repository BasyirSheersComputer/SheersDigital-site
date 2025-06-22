import { useEffect, useRef, useState } from 'react';
import { trackSectionView } from '../utils/analytics';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  sectionName?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.5,
  rootMargin = '0px',
  sectionName
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasBeenViewed && sectionName) {
          setHasBeenViewed(true);
          trackSectionView(sectionName);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, sectionName, hasBeenViewed]);

  return { ref, isIntersecting, hasBeenViewed };
};