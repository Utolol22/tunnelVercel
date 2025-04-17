"use client"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fadeInUp, staggerFadeIn, cleanupScrollTriggers } from "@/lib/gsap-utils"
import { Lightbulb, Flame, Heart } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { useMobile } from "@/hooks/use-mobile"

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

  const isMobile = useMobile()
  const [isContentVisible, setIsContentVisible] = useState(!isMobile)

  // Effet pour assurer que le contenu est visible sur mobile
  useEffect(() => {
    // Forcer l'affichage du contenu après un court délai sur mobile
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsContentVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return

    // Sur mobile, on simplifie les animations
    if (isMobile) {
      // Animation simplifiée pour le titre
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le sous-titre
      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.1,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour les colonnes
      const columns = columnsRef.current?.querySelectorAll(".solution-column")
      if (columns) {
        gsap.to(columns, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le CTA
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
          ease: "power1.out",
        })
      }
    } else {
      // Animation pour le titre sur desktop
      fadeInUp(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      })

      // Animation pour le sous-titre sur desktop
      fadeInUp(subtitleRef.current, {
        y: 30,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
        },
      })

      // Animation pour les colonnes sur desktop
      staggerFadeIn(columnsRef.current, ".solution-column", {
        y: 20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: columnsRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      })

      // Animation pour le CTA sur desktop
      fadeInUp(ctaRef.current, {
        y: 30,
        delay: 0.3,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
      })
    }

    // Nettoyage des animations lors du démontage du composant
    return () => {
      cleanupScrollTriggers()
    }
  }, [isMobile])

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
        <div className={`solution__content max-w-4xl mx-auto ${isContentVisible ? "opacity-100" : "opacity-0"}`}>
          <h2
            ref={titleRef}
            className="font-heading text-3xl md:text-4xl text-center mb-6 text-rouge-liberation"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
          >
            Et si le problème, ce n'était pas ta volonté ?
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-semibold text-center mb-12 text-[#1A1A1A]"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
          >
            Et si la clé n'était pas de <em>forcer plus</em>, mais de <strong>comprendre différemment</strong> ?
          </p>

          {/* 3 colonnes avec icônes */}
          <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Colonne 1 */}
            <div
              className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center"
              style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(20px)" }}
            >
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
            <div
              className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center"
              style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(20px)" }}
            >
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
            <div
              className="solution-column bg-blanc-purete p-6 rounded-lg shadow-md text-center"
              style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(20px)" }}
            >
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
          <div
            ref={ctaRef}
            className="text-center mt-12"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
          >
            <CTAButton variant="solution" pulse={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
