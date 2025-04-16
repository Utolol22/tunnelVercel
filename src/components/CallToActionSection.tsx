import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CallToActionSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [relativeSectionPosition, setRelativeSectionPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionPosition = sectionRect.top / viewportHeight;
        setRelativeSectionPosition(Math.max(0, Math.min(1, 1 - sectionPosition)));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0px 0px 0px rgba(196, 30, 58, 0.3)" 
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(196, 30, 58, 0.6)" 
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0px 0px 5px rgba(196, 30, 58, 0.4)" 
    }
  };

  // Calcul des effets de parallaxe basés sur le défilement
  const shadowOpacity = Math.min(0.8, 0.4 + relativeSectionPosition * 0.4);
  const buttonScale = 1 + (relativeSectionPosition * 0.05);

  return (
    <section 
      ref={sectionRef}
      id="cta-section" 
      className="relative bg-noir-profond py-16 md:py-20 overflow-hidden"
    >
      {/* Fond avec dégradé noir vers rouge */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-noir-profond to-[#C41E3A]/20 z-0"></div>
      
      {/* Élément de connexion narrative avec la section du problème */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-10 pointer-events-none">
        <div className="w-full h-24 bg-gradient-to-b from-noir-profond via-noir-profond/90 to-transparent"></div>
        
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70">
          <div className="w-0.5 h-16 bg-gradient-to-b from-[#C41E3A]/80 to-transparent"></div>
          <ChevronDown className="w-8 h-8 text-[#C41E3A] mt-1 animate-bounce" />
          <p className="text-xs text-[#EDEDED]/80 font-medium tracking-wider uppercase mt-1">
            Prends action
          </p>
        </div>
      </div>

      {/* Élément visuel cinématographique */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent to-noir-profond/70 pointer-events-none z-10"
        style={{ opacity: shadowOpacity }}
      ></div>
      
      {/* Vignettage pour effet cinématographique */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-500"
        style={{ 
          boxShadow: `inset 0 0 150px rgba(0,0,0,0.9)`,
          opacity: 0.7
        }}
      ></div>
      
      {/* Contenu principal */}
      <div 
        ref={ref} 
        className="container mx-auto px-5 text-blanc-purete relative z-30"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <span className="relative">
              Libère-toi
              {/* Effet de lueur animée derrière le texte */}
              <span className="absolute -inset-2 bg-[#C41E3A]/20 blur-xl rounded-full -z-10 animate-pulse-slow opacity-60"></span>
            </span>
          </motion.h2>
          
          <motion.div
            className="mb-8 text-xl md:text-2xl text-[#EDEDED]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={1}
          >
            <p>
              Tu viens de comprendre le cycle qui t'emprisonne.<br />
              <span className="text-blanc-purete font-medium">La prochaine étape est cruciale.</span>
            </p>
          </motion.div>
          
          <motion.div
            className="relative mb-12 text-lg"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={2}
          >
            <p className="max-w-2xl mx-auto text-[#EDEDED]">
              Prends un rendez-vous <span className="text-[#C41E3A] font-semibold">gratuit</span> et <span className="text-[#C41E3A] font-semibold">sans engagement</span> pour découvrir comment briser ce cycle addictif une fois pour toutes.
            </p>
            
            {/* Lignes de connexion visuelle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent to-[#C41E3A]/30 -bottom-10"></div>
          </motion.div>
          
          {/* Bouton CTA principal */}
          <motion.div
            className="mb-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={3}
          >
            <motion.a
              href="tel:+33666666666"
              className="inline-flex items-center justify-center gap-3 bg-[#C41E3A] text-blanc-purete py-4 px-8 rounded-lg text-xl md:text-2xl font-bold tracking-wide relative overflow-hidden"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              style={{
                transform: `scale(${buttonScale})`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <Phone className="w-6 h-6" />
              <span>J'APPELLE PIERRE</span>
              
              {/* Effet de halo discret derrière le bouton */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/70 via-[#C41E3A] to-[#C41E3A]/70 -z-10 animate-pulse-cta"></span>
              
              {/* Effet de lueur animée */}
              <span className="absolute -inset-8 bg-[#C41E3A]/30 blur-md rounded-full -z-20 opacity-70"></span>
            </motion.a>
          </motion.div>
          
          <motion.p
            className="text-sm text-[#EDEDED]/80 max-w-sm mx-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={4}
          >
            Sans obligation, sans pression.<br/>
            Il est peut-être temps de faire le premier pas.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 