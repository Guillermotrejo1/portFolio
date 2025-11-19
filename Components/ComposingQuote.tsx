import React, { useEffect, useRef, useState } from 'react';

export const ComposingQuote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const quoteRef = useRef<HTMLDivElement>(null);
  const fullText = '"Composing code, orchestrating progress"';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setDisplayedText(''); // Reset text when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: '0px',
      }
    );

    const currentRef = quoteRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 80); // Typing speed in ms

      return () => clearInterval(intervalId);
    }
  }, [isVisible]);

  return (
    <div
      ref={quoteRef}
      className="relative w-full flex justify-center items-center py-8"
    >
      <p
        className="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        {displayedText}
        {isVisible && displayedText.length < fullText.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </div>
  );
};
