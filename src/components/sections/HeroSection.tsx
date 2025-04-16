import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';

export function HeroSection() {
  // État pour animer le CTA
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Effet pour gérer le chargement et le scroll
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero"
      className="bg-noir-profond text-blanc-purete min-h-[90vh] flex items-center relative"
    >
      {/* Overlay de fond avec dégradé noir vers rouge #C41E3A */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-noir-profond to-[#C41E3A]/30 z-0"></div>
      
      {/* Vignettage cinématographique */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ 
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.7)'
        }}
      ></div>
      
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-12 md:px-8 lg:px-12 max-w-[1280px] mx-auto gap-8">
          
          {/* Portrait - Colonne gauche - Simplifié */}
          <div className="flex justify-center md:justify-end items-center md:col-span-5 mb-8 md:mb-0">
            <div 
              className={`relative w-[250px] h-[330px] sm:w-[280px] sm:h-[370px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[500px] z-20 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* Halo rouge léger */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-[40%_60%_55%_45%/60%_40%_60%_40%] bg-[#C41E3A]/10 blur-xl transform scale-110"></div>
              
              {/* Image avec masque ovale */}
              <div className="absolute inset-0 overflow-hidden rounded-[40%_60%_40%_60%/60%_40%_55%_45%]">
                <Image 
                  src="/img/Portrait pierre Pro Sourire.png"
                  alt="Pierre Arsaut"
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                  className="object-cover grayscale contrast-125"
                  priority
                  style={{
                    objectPosition: '50% 20%'
                  }}
                />
              </div>
              
              {/* Effet de contour léger */}
              <div className="absolute inset-0 rounded-[40%_60%_40%_60%/60%_40%_55%_45%] ring-1 ring-[#C41E3A]/20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Contenu texte - Colonne droite */}
          <div className={`flex flex-col text-center md:text-left md:col-span-7 md:pl-4 lg:pl-8 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Texte intro */}
            <p className="text-sm md:text-base italic tracking-wider text-[#EDEDED] font-barlow mb-4">
              Jour 0 : Le début du vrai changement
            </p>
            
            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-blanc-purete leading-tight font-anton">
              Libère-toi<br />
              de l'alcool
            </h1>
            
            {/* Sous-texte - Format bullet point centré */}
            <div className="text-[#EDEDED] text-center mx-auto md:text-left max-w-lg mt-6 font-barlow space-y-3">
              <div className="flex items-start justify-center md:justify-start">
                <span className="text-[#C41E3A] mr-2 text-xl">•</span>
                <p className="text-base sm:text-lg md:text-xl">T'en as marre ?</p>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <span className="text-[#C41E3A] mr-2 text-xl">•</span>
                <p className="text-base sm:text-lg md:text-xl">Tu ne veux plus continuer comme ça ?</p>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <span className="text-[#C41E3A] mr-2 text-xl">•</span>
                <p className="text-base sm:text-lg md:text-xl">Tu sais que ça ne peut plus durer mais tu ne sais plus comment faire ?</p>
              </div>
            </div>
            
            {/* CTA principal avec couleur rouge-liberation et halo discret */}
            <div className="mt-8 pt-8 pb-16 relative">
              <Link href="#calendly" className="relative z-10 inline-block group">
                <button
                  className="px-8 py-4 bg-rouge-liberation text-blanc-purete uppercase font-bold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center rounded-lg group-hover:translate-y-[-2px] animate-pulse-cta"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  <span className="relative z-10">
                    J'appelle Pierre
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5 inline" />
                    </span>
                  </span>
                </button>
                {/* Halo discret */}
                <div className="absolute inset-0 bg-rouge-liberation/20 blur-md rounded-lg -z-10 transform scale-105"></div>
              </Link>
              
              {/* Message sous le CTA */}
              <p className="mt-2 text-xs text-[#EDEDED]/80 italic">Entretien gratuit de 60 minutes - Places limitées</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transition élégante vers la section Problem */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        {/* Vague SVG stylisée */}
        <div className="relative w-full h-32 overflow-hidden">
          <svg 
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,80 C320,100 420,50 640,60 C860,70 980,40 1200,30 L1440,60 L1440,100 L0,100 Z" 
              fill="#120000"
              opacity="0.8"
            />
            <path 
              d="M0,90 C240,70 480,100 720,85 C960,70 1200,90 1440,80 L1440,100 L0,100 Z" 
              fill="#120000" 
              opacity="0.9"
            />
          </svg>
          
          {/* Ligne décorative avec gradient */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#C41E3A]/50 to-transparent"></div>
            <div className="w-[1px] h-10 bg-gradient-to-t from-[#C41E3A]/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Flèche animée vers le bas sans texte */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 animate-pulse">
          <ChevronDown className="w-6 h-6 text-[#C41E3A]/80" />
        </div>
        
        {/* Gradient de transition final */}
        <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-b from-transparent to-[#120000] opacity-95"></div>
      </div>
    </section>
  );
} 