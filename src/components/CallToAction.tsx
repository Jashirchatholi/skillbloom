import React, { useEffect, useState, useRef } from 'react';

const CallToAction = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);

      // Check if section is in viewport
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="parallax-section relative py-20 overflow-hidden"
      style={{
        backgroundPosition: `50% ${offset * 0.1}px`
      }}
    >
      <div 
        className="parallax-overlay"
        style={{
          opacity: Math.max(0.5, Math.min(0.8, 0.5 + offset * 0.001))
        }}
      />
      <div 
        className={`parallax-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
          isVisible ? 'visible' : ''
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Start Selling Your{' '}
          <span className="text-[#ff6b6b]">Online Courses</span>{' '}
          Today
        </h2>
        
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Transform your knowledge into a thriving online academy with SkillBloom.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Get Started
          </button>
          <button className="border border-white/20 hover:border-blue-600 hover:text-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 