import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-noir-profond text-blanc-purete py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="testimonials__content max-w-5xl mx-auto">
          <h2 className="text-center mb-12 text-yellow-400 text-3xl md:text-4xl font-bold">
            Ne me croyez pas sur parole, écoutez ceux qui ont transformé leur vie :
          </h2>

          <div className="testimonials__grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="testimonial bg-white/5 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="testimonial__image h-52 overflow-hidden relative bg-gray-700 flex items-center justify-center">
                <p className="text-white text-sm text-center p-4">Photo du témoignage 1</p>
              </div>
              <div className="testimonial__text p-8">
                <p className="testimonial__quote text-base italic mb-6 leading-relaxed">
                  "Avant de travailler avec Pierre, j'étais désespérée. J'avais tout essayé. Aujourd'hui, je ne me
                  reconnais plus : je suis libre, sereine et je reconstruis ma vie. Merci Pierre !"
                </p>
                <p className="testimonial__author text-yellow-400 font-bold text-right">Julie, 34 ans - Paris</p>
              </div>
            </div>

            <div className="testimonial bg-white/5 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="testimonial__image h-52 overflow-hidden relative bg-gray-700 flex items-center justify-center">
                <p className="text-white text-sm text-center p-4">Photo du témoignage 2</p>
              </div>
              <div className="testimonial__text p-8">
                <p className="testimonial__quote text-base italic mb-6 leading-relaxed">
                  "La méthode de Pierre m'a permis de comprendre enfin mes émotions et de sortir du cycle infernal de
                  l'alcool. Sa douceur et sa bienveillance ont fait toute la différence dans mon parcours."
                </p>
                <p className="testimonial__author text-yellow-400 font-bold text-right">Marc, 42 ans - Lyon</p>
              </div>
            </div>

            <div className="testimonial bg-white/5 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="testimonial__image h-52 overflow-hidden relative bg-gray-700 flex items-center justify-center">
                <p className="text-white text-sm text-center p-4">Photo du témoignage 3</p>
              </div>
              <div className="testimonial__text p-8">
                <p className="testimonial__quote text-base italic mb-6 leading-relaxed">
                  "Deux ans après avoir suivi ce programme, je peux confirmer que ma sobriété est devenue naturelle. Ce
                  n'est plus un combat quotidien, mais simplement ma nouvelle façon de vivre, plus épanouie et
                  authentique."
                </p>
                <p className="testimonial__author text-yellow-400 font-bold text-right">Sophie, 39 ans - Bordeaux</p>
              </div>
            </div>
          </div>

          <div className="testimonials__cta text-center">
            <Link href="#calendly">
              <Button variant="default" size="lg">
                Je veux obtenir les mêmes résultats
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
