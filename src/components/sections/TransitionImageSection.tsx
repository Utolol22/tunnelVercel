import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export function TransitionImageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #F5E6D3 0%, #968575 50%, #333333 80%, #1A1A1A 100%)'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Petite phrase de transition avant l'image */}
          <p className="text-[#2A2A2A] text-lg md:text-xl mb-10 italic font-medium">
            Et maintenant...
          </p>
          
          {/* Animation fade-in sur scroll */}
          <div 
            className={`transform transition-all duration-1000 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Image
              src="/img/libération.png"
              alt="Homme regardant vers un avenir lumineux par une porte ouverte"
              width={580}
              height={480}
              className="rounded-lg shadow-xl object-contain max-h-[50vh] md:max-h-[60vh] w-auto mx-auto"
              priority
            />
          </div>
          
          {/* Élément décoratif pour diriger vers la section suivante */}
          <div className="mt-12 w-full flex flex-col items-center space-y-2">
            <div className="w-28 h-0.5 bg-rouge-liberation/40 mb-1"></div>
            <p className="text-blanc-purete/90 text-base md:text-lg">Projetons-nous...</p>
          </div>
        </div>
      </div>
      
      {/* Vignettage subtil pour renforcer l'effet cinématographique */}
      <div className="absolute inset-0 pointer-events-none" style={{ 
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)'
      }}></div>
    </section>
  );
} 