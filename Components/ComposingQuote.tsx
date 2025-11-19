import React, { useEffect, useRef, useState } from 'react';

export const ComposingQuote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: '0px',
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={quoteRef}
      className="relative w-full flex justify-center items-center py-8"
    >
      <p
        className="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        &ldquo;Composing code, orchestrating progress&rdquo;
      </p>
    </div>
  );
};
