"use client"

import React, { useState, useEffect } from "react"
import { HeroSection } from "../components/sections/HeroSection"
import { ProblemAgitationSection } from "../components/sections/ProblemSection"
import { PromiseSection } from "../components/sections/PromiseSection"
import { SobrietyEaseSection } from "../components/sections/SobrietyEaseSection"
import { TransformationSection } from "../components/sections/TransformationSection"
import { TransitionImageSection } from "../components/sections/TransitionImageSection"
import { OfferSection } from "../components/sections/OfferSection"
import { TestimonialsSection } from "../components/sections/TestimonialsSection"
import { CalendlySection } from "../components/sections/CalendlySection"
import { AuthorSection } from "../components/sections/AuthorSection"
import { MethodSection } from "../components/sections/MethodSection"
import { TargetAudienceSection } from "../components/sections/TargetAudienceSection"
import { FaqSection } from "../components/sections/FaqSection"
import { FinalCtaSection } from "../components/sections/FinalCtaSection"
import { ProgressBar } from "../components/ui/progress"
import { Footer } from "../components/ui/footer"
import { HomeIcon, ClipboardList, MessagesSquare, CalendarCheck, ChevronUp } from 'lucide-react'

export default function Home() {
  // État pour gérer la visibilité et l'opacité de la barre de navigation
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  
  // Gestionnaire de défilement pour les animations de la barre de navigation avec throttling
  useEffect(() => {
    let isThrottled = false;
    
    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      
      // Libérer le throttle après 100ms
      setTimeout(() => {
        isThrottled = false;
      }, 100);
      
      // Déterminer si l'utilisateur est en train de défiler
      setScrolling(window.scrollY > 100);
      
      // Calculer la progression du défilement pour l'indicateur
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Déterminer la section actuelle pour mettre en évidence l'élément de navigation
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + sectionRect.top;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setCurrentSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Exécuter une fois au chargement
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Updated progress markers according to V5 structure
  const progressMarkers = [
    { section: "hero", title: "Déclic", number: 1 },
    { section: "problem-agitation", title: "Le Cycle", number: 2 },
    { section: "promise", title: "La Clé", number: 3 },
    { section: "sobriety-ease", title: "Facile?", number: 4 }, 
    { section: "transformation", title: "Imagine", number: 5 },
    { section: "offer", title: "Programme", number: 6 },
    { section: "testimonials", title: "Avis", number: 7 },
    { section: "author", title: "Qui suis-je", number: 8 },
    { section: "method", title: "Méthode", number: 9 },
    { section: "target-audience", title: "Pour Qui?", number: 10 },
    { section: "calendly", title: "Appel", number: 11 },
    { section: "faq", title: "FAQ", number: 12 },
    { section: "final-cta", title: "Réserver", number: 13 },
  ];

  return (
    <>
      <main className="min-h-screen bg-sable-introspection pb-20 md:pb-0">
        {/* Barre de progression */}
        <ProgressBar markers={progressMarkers} />

        {/* Section Hero */}
        <HeroSection />

        {/* Section Problème & Agitation (Fused) */}
        <ProblemAgitationSection />

        {/* Section Promise */}
        <PromiseSection />

        {/* Section Sobriety Ease */}
        <SobrietyEaseSection />
        
        {/* Section de Transition avec Image */}
        <TransitionImageSection />

        {/* Section Transformation */}
        <TransformationSection />

        {/* Section Offer */}
        <OfferSection />

        {/* Section Testimonials */}
        <TestimonialsSection />

        {/* Section Author */}
        <AuthorSection />

        {/* Section Method */}
        <MethodSection />

        {/* Section Target Audience */}
        <TargetAudienceSection />
        
        {/* Section Calendly (Initial Booking) */}
        <CalendlySection />

        {/* Section FAQ */}
        <FaqSection />

        {/* Section Final CTA (with Calendly) */}
        <FinalCtaSection />

        {/* Navigation mobile simplifiée */}
        <nav 
          className="mobile-nav-overlay fixed bottom-0 left-0 right-0 py-3 px-5 flex justify-around z-[100] md:hidden bg-blanc-purete/85 shadow-md"
        >
          <a 
            href="#hero" 
            className={`nav-item flex flex-col items-center p-2 rounded-md
                      ${currentSection === 'hero' 
                        ? 'text-rouge-liberation' 
                        : 'text-gris-sagesse hover:text-rouge-liberation/80'}`}
          >
            <HomeIcon className="h-5 w-5 mb-1" />
            {currentSection === 'hero' && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-rouge-liberation rounded-full"></span>
            )}
            <span className="nav-label text-xs font-medium">Accueil</span>
          </a>
          
          <a 
            href="#offer" 
            className={`nav-item flex flex-col items-center p-2 rounded-md
                      ${currentSection === 'offer' 
                        ? 'text-rouge-liberation' 
                        : 'text-gris-sagesse hover:text-rouge-liberation/80'}`}
          >
            <ClipboardList className="h-5 w-5 mb-1" />
            {currentSection === 'offer' && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-rouge-liberation rounded-full"></span>
            )}
            <span className="nav-label text-xs font-medium">Programme</span>
          </a>
          
          <a 
            href="#testimonials" 
            className={`nav-item flex flex-col items-center p-2 rounded-md
                      ${currentSection === 'testimonials' 
                        ? 'text-rouge-liberation' 
                        : 'text-gris-sagesse hover:text-rouge-liberation/80'}`}
          >
            <MessagesSquare className="h-5 w-5 mb-1" />
            {currentSection === 'testimonials' && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-rouge-liberation rounded-full"></span>
            )}
            <span className="nav-label text-xs font-medium">Avis</span>
          </a>
          
          <a 
            href="#final-cta" 
            className={`nav-item flex flex-col items-center p-2 rounded-md
                      ${currentSection === 'final-cta' || currentSection === 'calendly'
                        ? 'text-rouge-liberation' 
                        : 'text-gris-sagesse hover:text-rouge-liberation/80'}`}
          >
            <CalendarCheck className="h-5 w-5 mb-1" />
            {(currentSection === 'final-cta' || currentSection === 'calendly') && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-rouge-liberation rounded-full"></span>
            )}
            <span className="nav-label text-xs font-medium">Réserver</span>
          </a>
        </nav>

        {/* Indicateur de scroll-up, visible seulement lorsqu'on défile suffisamment */}
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className={`fixed bottom-20 right-6 p-3 bg-rouge-liberation/80 hover:bg-rouge-liberation text-blanc-purete rounded-full shadow-lg transition-all duration-300 md:bottom-10 ${scrolling ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </main>

      <Footer />
    </>
  )
}