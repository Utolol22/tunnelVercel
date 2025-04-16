import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Phone, Target, ArrowRight } from 'lucide-react';

export function FinalCtaSection() {
  // État pour animer le CTA
  const [ctaHighlighted, setCtaHighlighted] = useState(false);
  
  // Effet pour gérer l'animation du CTA
  useEffect(() => {
    const highlightInterval = setInterval(() => {
      setCtaHighlighted(true);
      
      const resetTimeout = setTimeout(() => {
        setCtaHighlighted(false);
      }, 1800);
      
      return () => clearTimeout(resetTimeout);
    }, 8000);
    
    // Trigger initial
    setCtaHighlighted(true);
    const initialResetTimeout = setTimeout(() => {
      setCtaHighlighted(false);
    }, 1800);
    
    return () => {
      clearInterval(highlightInterval);
      clearTimeout(initialResetTimeout);
    };
  }, []);
  
  // Effet pour charger Calendly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="final-cta" 
      className="bg-noir-profond text-blanc-purete py-20 md:py-28 mobile-padding relative"
    >
      {/* Fond avec dégradé noir vers rouge */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-noir-profond to-[#C41E3A]/20 z-0"></div>
      
      {/* Vignettage pour effet cinématographique */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ 
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.7)'
        }}
      ></div>
      
      <div className="container mx-auto relative z-20">
        <div className="final-cta__content max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8 text-[#C41E3A] flex items-center justify-center gap-3">
            <Target className="h-8 w-8" />
            C'est le moment de te libérer
          </h2>
          <h3 className="font-heading text-2xl md:text-3xl mb-8 text-blanc-purete/90">
            Fais le premier pas vers ta liberté.
          </h3>
          <p className="text-base md:text-lg text-[#EDEDED] mb-10 md:mb-12 max-w-3xl mx-auto">
            Réserve ton appel <em>"État des Lieux"</em> gratuit et confidentiel.<br/>
            Pendant une heure, nous allons explorer ta situation unique<br/>
            et voir comment mon approche basée sur la compréhension peut t'aider<br/>
            à sortir définitivement du piège de l'alcool, <strong>sans lutte inutile</strong>.<br/>
            <em>Aucun engagement requis.</em>
          </p>

          {/* Trust Elements */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-noir-profond/80 p-4 rounded-lg border border-[#C41E3A]/20">
              <p className="text-sm text-blanc-purete/90 font-medium">Confidentialité assurée</p>
              <p className="text-xs text-[#EDEDED]/70 mt-1">Notre conversation reste privée à 100%</p>
            </div>
            
            <div className="bg-noir-profond/80 p-4 rounded-lg border border-[#C41E3A]/20">
              <p className="text-sm text-blanc-purete/90 font-medium">Sans jugement</p>
              <p className="text-xs text-[#EDEDED]/70 mt-1">Tu es accueilli(e) tel que tu es, sans aucun jugement</p>
            </div>
            
            <div className="bg-noir-profond/80 p-4 rounded-lg border border-[#C41E3A]/20">
              <p className="text-sm text-blanc-purete/90 font-medium">Expertise vécue</p>
              <p className="text-xs text-[#EDEDED]/70 mt-1">Je comprends ce que tu traverses</p>
            </div>
          </div>
          
          <div className={`mb-16 relative ${ctaHighlighted ? 'animate-fadeScale' : ''}`}>
            <div className="absolute inset-0 rounded-xl bg-[#C41E3A] opacity-20 blur-lg transform -translate-y-2 scale-105 animate-pulse-slow"></div>
            <Link href="#calendly-widget-final"> {/* Link to final widget */}
              <Button 
                variant="default" 
                size="xl" 
                animation="pulse" 
                roundness="lg" 
                fullWidthMobile={true}
                className="shadow-cta relative z-10 px-8 uppercase font-semibold tracking-wide"
              >
                <Phone className="mr-3 h-5 w-5" />
                J'appelle Pierre
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-xs text-[#EDEDED]/60 italic">Entretien confidentiel de 60 minutes - Places limitées</p>
          </div>

          {/* Calendly Widget */}
          <p className="text-sm text-[#EDEDED]/60 mb-4">Calendrier de réservation :</p>
          <div 
            id="calendly-widget-final" // Unique ID for the final widget
            className="calendly-inline-widget bg-white rounded-lg overflow-hidden shadow-xl border border-gray-700" // Added border
            data-url="https://calendly.com/utolol22" 
            style={{minWidth: "320px", height: "700px"}}
          ></div>
        </div>
      </div>
    </section>
  );
}