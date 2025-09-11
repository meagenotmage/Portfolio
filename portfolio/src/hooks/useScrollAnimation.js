import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px', // Only fade out when element is well past viewport
    triggerOnce = false, // Keep fade in/out effect
    delay = 0
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is entering the viewport
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          // Only fade out if triggerOnce is false and element is far from viewport
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;
