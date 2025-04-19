"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, ArrowRight, Phone } from "lucide-react"

export function CalendlySection() {
  const [isClient, setIsClient] = useState(false)
  // État pour animer le CTA en fonction du scroll
  const [ctaHighlighted, setCtaHighlighted] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Ajouter l'effet de mise en évidence du CTA au scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const ctaSection = document.getElementById("cta-highlight-zone")

      if (ctaSection) {
        const ctaSectionRect = ctaSection.getBoundingClientRect()
        const ctaSectionTop = window.scrollY + ctaSectionRect.top

        // Mettre en évidence le CTA lorsque l'utilisateur atteint cette section
        if (scrollPosition > ctaSectionTop - 300) {
          setCtaHighlighted(true)
        } else {
          setCtaHighlighted(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Exécuter une fois au chargement
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="calendly" className="bg-blanc-purete py-20 md:py-28">
      <div className="container mx-auto">
        <div className="calendly__content max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-rouge-liberation mb-10 md:mb-12 flex items-center justify-center gap-3">
            <Gift className="h-8 w-8" />
            Prends un vrai temps pour toi. Gratuitement.
          </h2>
          <div className="calendly__intro text-base md:text-lg text-gris-sagesse mb-10 max-w-3xl mx-auto space-y-4 text-left">
            <p>Peut-être que tu m'as découvert sur YouTube, que mon parcours résonne avec le tien...</p>
            <p>
              Ce premier appel, c'est notre <strong>"état des lieux"</strong>.
            </p>
            <p>
              C'est un temps de parole d'environ une heure, <strong>100% confidentiel et sans aucun engagement</strong>,
              où on regarde ensemble où tu en es, ce que tu traverses, ce qui bloque.
            </p>
            <p>
              Tu poses ce que tu as à poser. Je t'écoute. Vraiment. Et je te dis en toute honnêteté si je pense pouvoir
              t'aider avec mon approche.
            </p>
          </div>

          <div className="text-base md:text-lg text-noir-profond mb-10 max-w-3xl mx-auto space-y-4 text-left font-semibold bg-yellow-400/10 p-6 rounded-lg border border-yellow-400/50">
            <p>
              J'accompagne <strong>un petit nombre de personnes à la fois</strong> pour garantir une vraie disponibilité
              et un suivi de qualité.
            </p>
            <p>
              Je travaille avec des gens <strong>prêts à s'engager</strong> dans leur compréhension et leur
              transformation.
            </p>
          </div>

          <div
            id="cta-highlight-zone"
            className="text-base md:text-lg text-gris-sagesse mb-12 max-w-3xl mx-auto space-y-2 text-left"
          >
            <p>
              👉 Si tu sens que c'est <strong>ton moment</strong>,
            </p>
            <p>
              👉 si tu veux une <strong>écoute honnête et sans jugement</strong>,
            </p>
            <p>
              👉 <strong>prends ce temps. Il est pour toi.</strong>
            </p>
          </div>

          {/* Bouton CTA amélioré avec effet visuel */}
          <div className={`mb-16 relative ${ctaHighlighted ? "animate-fadeScale" : ""}`}>
            <div className="absolute inset-0 rounded-xl bg-rouge-liberation opacity-20 blur-lg transform -translate-y-2 scale-105 animate-pulse-slow"></div>
            <Link href="https://calendly.com/uto-ias">
              <Button
                variant="primary"
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
            <p className="mt-4 text-xs text-gris-sagesse/80 italic">
              Entretien confidentiel de 60 minutes - Places limitées
            </p>
          </div>

          {/* Calendly Widget Container */}
          <div className="mt-16 border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div
              id="calendly-widget"
              className="calendly-inline-widget"
              data-url="https://calendly.com/uto-ias"
              style={{ minWidth: "320px", height: "700px" }}
            >
              {/* Calendly injects iframe here */}
              {isClient ? null : (
                <div
                  className="bg-gray-100 flex items-center justify-center"
                  style={{ minWidth: "320px", height: "700px" }}
                >
                  Chargement...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
