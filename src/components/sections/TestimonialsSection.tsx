import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="bg-sable-introspection py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="testimonials__content max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 text-noir-profond">
            🧾 Témoignages et preuves sociales
          </h2>
          <p className="text-base md:text-lg text-center mb-12 md:mb-16 text-gris-sagesse">
            Ne me croyez pas sur parole, écoutez ceux qui ont transformé leur vie :
          </p>
          
          <div className="testimonials__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="testimonial bg-blanc-purete p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <Quote className="h-8 w-8 text-rouge-liberation mb-4 opacity-50" aria-hidden="true" />
              <p className="testimonial__quote text-base italic mb-6 leading-relaxed text-gris-sagesse">
                "Avant de travailler avec Pierre, j'étais désespérée. J'avais tout essayé.<br/>
                Aujourd'hui, je ne me reconnais plus : je suis libre, sereine et je reconstruis ma vie.<br/>
                Merci Pierre !"
              </p>
              <p className="testimonial__author text-sm font-semibold text-rouge-liberation text-right">
                — Julie, 34 ans – Paris
              </p>
            </div>
            
            <div className="testimonial bg-blanc-purete p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <Quote className="h-8 w-8 text-rouge-liberation mb-4 opacity-50" aria-hidden="true" />
              <p className="testimonial__quote text-base italic mb-6 leading-relaxed text-gris-sagesse">
                "La méthode de Pierre m'a permis de comprendre enfin mes émotions<br/>
                et de sortir du cycle infernal de l'alcool.<br/>
                Sa douceur et sa bienveillance ont fait toute la différence dans mon parcours."
              </p>
              <p className="testimonial__author text-sm font-semibold text-rouge-liberation text-right">
                — Marc, 42 ans – Lyon
              </p>
            </div>
            
            <div className="testimonial bg-blanc-purete p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <Quote className="h-8 w-8 text-rouge-liberation mb-4 opacity-50" aria-hidden="true" />
              <p className="testimonial__quote text-base italic mb-6 leading-relaxed text-gris-sagesse">
                "Deux ans après avoir suivi ce programme, je peux confirmer que ma sobriété est devenue naturelle.<br/>
                Ce n'est plus un combat quotidien, mais simplement ma nouvelle façon de vivre, plus épanouie et authentique."
              </p>
              <p className="testimonial__author text-sm font-semibold text-rouge-liberation text-right">
                — Sophie, 39 ans – Bordeaux
              </p>
            </div>
          </div>
          
          <div className="testimonials__cta text-center">
            <Link href="#calendly">
              <Button variant="primary" size="lg" className="group">
                Je veux reprendre le contrôle
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 