"use client"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fadeInUp, staggerFadeIn, cleanupScrollTriggers } from "@/lib/gsap-utils"
import { Lightbulb, Flame, Heart } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  // Vérification si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", checkMobile)
    checkMobile() // Initialisation

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return

    // Animation pour le titre
    fadeInUp(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? "top 95%" : "top 80%",
        end: isMobile ? "top 70%" : "top 50%",
        scrub: isMobile ? false : 1,
      },
    })

    // Animation pour le sous-titre
    fadeInUp(subtitleRef.current, {
      y: isMobile ? 15 : 30,
      delay: isMobile ? 0.05 : 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? "top 90%" : "top 75%",
        end: isMobile ? "top 65%" : "top 45%",
        scrub: isMobile ? false : 1,
      },
    })

    // Animation pour les colonnes
    staggerFadeIn(columnsRef.current, ".solution-column", {
      y: isMobile ? 10 : 20,
      stagger: isMobile ? 0.05 : 0.1,
      scrollTrigger: {
        trigger: columnsRef.current,
        start: isMobile ? "top 90%" : "top 70%",
        end: isMobile ? "bottom 70%" : "bottom 50%",
        scrub: isMobile ? false : 1,
      },
    })

    // Animation pour le CTA
    fadeInUp(ctaRef.current, {
      y: isMobile ? 15 : 30,
      delay: isMobile ? 0.1 : 0.3,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: isMobile ? "top 95%" : "top 90%",
        end: isMobile ? "top 80%" : "top 70%",
        scrub: isMobile ? false : 1,
      },
    })

    // Nettoyage des animations lors du démontage du composant
    return () => {
      cleanupScrollTriggers()
    }
  }, [])

  // Ajouter une classe pour gérer la transition en haut de la section
  return (
    <section
      ref={sectionRef}
      id="solution"
      className="bg-[#F5E6D3] py-12 sm:py-16 md:py-20 lg:py-28 text-[#2A2A2A] snap-section flex items-center relative"
    >
      {/* Ombre subtile en haut pour améliorer la transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F5E6D3]/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="solution__content max-w-4xl mx-auto">
          <h2 ref={titleRef} className="font-heading text-3xl md:text-4xl text-center mb-6 text-rouge-liberation">
            Et si le problème, ce n'était pas ta volonté ?
          </h2>
          <p ref={subtitleRef} className="text-xl md:text-2xl font-semibold text-center mb-12 text-[#1A1A1A]">
            Et si la clé n'était pas de <em>forcer plus</em>, mais de <strong>comprendre différemment</strong> ?
          </p>

          {/* 3 colonnes avec icônes */}
          <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Colonne 1 */}
            <div className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-rouge-liberation/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-rouge-liberation" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Comprendre l'illusion</h3>
              <p className="text-gris-sagesse">
                Déconstruire les croyances qui te font penser que l'alcool t'apporte quelque chose de positif.
              </p>
            </div>

            {/* Colonne 2 */}
            <div className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-rouge-liberation/10 rounded-full flex items-center justify-center">
                  <Flame className="h-8 w-8 text-rouge-liberation" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Éteindre le désir</h3>
              <p className="text-gris-sagesse">
                Quand tu comprends vraiment, le désir s'éteint naturellement, sans effort ni lutte constante.
              </p>
            </div>

            {/* Colonne 3 */}
            <div className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-rouge-liberation/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-rouge-liberation" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Cultiver la force intérieure</h3>
              <p className="text-gris-sagesse">
                Reconnecter avec tes ressources naturelles pour gérer émotions et stress sans béquille.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="text-center mt-12">
            <CTAButton variant="solution" pulse={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
