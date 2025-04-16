import React, { useEffect } from 'react';

import { cn } from "@/lib/utils"

interface ProgressMarker {
  section: string;
  title: string;
  number: number;
}

interface ProgressBarProps {
  markers: ProgressMarker[];
}

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: number
    max?: number
    className?: string
  }
>(({ className, value, max = 100, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-gradient-to-r from-red-900 to-red-600 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export function ProgressBar({ markers }: ProgressBarProps) {
  useEffect(() => {
    // Gestion de la barre de progression et des marqueurs
    const progressBar = document.getElementById('progressBar');
    const sections = document.querySelectorAll('section[id]'); // Sélectionne uniquement les sections avec un ID
    const markerElements = document.querySelectorAll('.progress-marker');
    
    // Observer pour les sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Met à jour le marqueur actif
          markerElements.forEach(marker => {
            if ((marker as HTMLElement).dataset.section === sectionId) {
              marker.classList.add('active');
            } else {
              marker.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    // Observe chaque section
    sections.forEach(section => observer.observe(section));

    // Mise à jour de la barre de progression
    const handleScroll = () => {
      if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Gestion des clics sur les marqueurs - CORRECTION ICI
    markerElements.forEach(marker => {
      marker.addEventListener('click', () => {
        const sectionId = (marker as HTMLElement).dataset.section;
        if (sectionId) {
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        sections.forEach(section => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <div id="progressContainer" className="fixed top-0 left-0 right-0 z-[95] bg-white/90 shadow-sm h-8">
      <div className="container mx-auto relative h-full">
        <div id="progressBar" className="h-1 bg-gradient-to-r from-rouge-sombre to-rouge-liberation absolute top-0 left-0 w-0 transition-all duration-200"></div>
        <div className="flex justify-between items-center h-full max-w-3xl mx-auto px-4">
          {markers.map((marker) => (
            <a 
              href={`#${marker.section}`} 
              key={marker.section}
              className="progress-marker relative text-xs text-gris-sagesse hover:text-rouge-liberation transition-colors duration-200 cursor-pointer px-2 py-1" 
              data-section={marker.section} 
              title={marker.title}
              aria-label={`Section ${marker.title}`}
            >
              <span className="hidden md:inline-block">{marker.title}</span>
              <span className="md:hidden">{marker.number}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Progress }