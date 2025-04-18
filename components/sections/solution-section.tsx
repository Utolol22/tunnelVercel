"use client"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fadeInUp, staggerFadeIn, cleanupScrollTriggers } from "@/lib/gsap-utils"
import { Eye, Lightbulb, X } from "lucide-react"
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
  const mainTextRef = useRef<HTMLDivElement>(null)
  const analogyRef = useRef<HTMLDivElement>(null)
  const listContainerRef = useRef<HTMLDivElement>(null)
  const listItemsRef = useRef<HTMLDivElement[]>([])
  const conclusionRef = useRef<HTMLDivElement>(null)
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

      // Animation simplifiée pour le texte principal
      if (mainTextRef.current) {
        gsap.to(mainTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.2,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour l'analogie
      if (analogyRef.current) {
        gsap.to(analogyRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour la liste
      if (listContainerRef.current) {
        gsap.to(listContainerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.4,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour la conclusion
      if (conclusionRef.current) {
        gsap.to(conclusionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.5,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le CTA
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.6,
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

      // Animation pour le texte principal
      fadeInUp(mainTextRef.current, {
        y: 30,
        delay: 0.2,
        scrollTrigger: {
          trigger: mainTextRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      })

      // Animation pour l'analogie
      fadeInUp(analogyRef.current, {
        y: 30,
        delay: 0.3,
        scrollTrigger: {
          trigger: analogyRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      })

      // Animation pour la liste
      fadeInUp(listContainerRef.current, {
        y: 30,
        delay: 0.4,
        scrollTrigger: {
          trigger: listContainerRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      })

      // Animation pour les éléments de la liste
      if (listContainerRef.current) {
        staggerFadeIn(listContainerRef.current, ".list-item", {
          y: 15,
          stagger: 0.1,
          scrollTrigger: {
            trigger: listContainerRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
        })
      }

      // Animation pour la conclusion
      fadeInUp(conclusionRef.current, {
        y: 30,
        delay: 0.5,
        scrollTrigger: {
          trigger: conclusionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      })

      // Animation pour le CTA
      fadeInUp(ctaRef.current, {
        y: 30,
        delay: 0.6,
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

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="bg-[#F5E6D3] py-12 sm:py-16 md:py-20 lg:py-28 text-[#2A2A2A] snap-section flex items-center relative"
      data-animate="true"
    >
      {/* Ombre subtile en haut pour améliorer la transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F5E6D3]/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div
          className={`solution__content max-w-4xl mx-auto ${isContentVisible ? "opacity-100" : "opacity-0"}`}
          data-animate="true"
        >
          {/* Titre principal avec animation fadeInUp */}
          <h2
            ref={titleRef}
            className="font-heading text-3xl md:text-4xl text-center mb-6 text-rouge-liberation"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            Et si le Vrai Problème, ce n'était <span className="font-bold">PAS</span> ta Volonté ?
          </h2>

          {/* Sous-titre avec animation fadeInUp */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-semibold text-center mb-10 text-[#1A1A1A]"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            Si la clé n'était pas de <em>forcer plus</em>, mais de <strong>changer son regard</strong> ?
          </p>

          {/* Texte principal avec animation fadeInUp */}
          <div
            ref={mainTextRef}
            className="bg-blanc-purete p-6 rounded-lg shadow-md mb-8"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rouge-liberation/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Eye className="h-6 w-6 text-rouge-liberation" />
              </div>
              <div>
                <p className="text-lg text-gris-sagesse">
                  Oublie l'idée que tu dois être <em>"plus fort(e)"</em> que l'alcool. La vraie puissance, pour sortir
                  de là durablement, c'est de <strong>voir clair</strong> à travers la grande illusion.
                </p>
              </div>
            </div>
          </div>

          {/* Analogie avec animation fadeInUp */}
          <div
            ref={analogyRef}
            className="bg-blanc-purete p-6 rounded-lg shadow-md mb-8"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rouge-liberation/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-rouge-liberation" />
              </div>
              <div>
                <p className="text-lg text-gris-sagesse mb-4">
                  Pense à ça : As-tu besoin de volonté pour ne pas mettre ta main sur une plaque brûlante ?{" "}
                  <strong>Non</strong>. Tu le fais naturellement, parce que tu as intégré, dans ton corps et ton esprit,
                  que ça brûle.
                </p>
                <p className="text-lg text-gris-sagesse">
                  C'est pareil avec l'alcool. Quand tu comprends vraiment que tu vas perdre à chaque fois, que tu n'as
                  plus aucun intérêt à jouer, et que ton inconscient l'accepte totalement, alors le désir s'éteint.
                  Vraiment. La lutte cesse. Et les jours de liberté s'accumulent, sans même t'en rendre compte.
                </p>
              </div>
            </div>
          </div>

          {/* Liste avec animation staggerFadeIn */}
          <div
            ref={listContainerRef}
            className="bg-noir-profond text-blanc-purete p-6 rounded-lg shadow-md mb-8"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Il ne s'agit plus de :</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-center list-none">
                <X className="h-5 w-5 text-rouge-liberation mr-3 flex-shrink-0" />
                <span>Serrer les dents pour résister jour après jour (c'est épuisant).</span>
              </li>
              <li className="flex items-center list-none">
                <X className="h-5 w-5 text-rouge-liberation mr-3 flex-shrink-0" />
                <span>Mener une guerre intérieure permanente.</span>
              </li>
              <li className="flex items-center list-none">
                <X className="h-5 w-5 text-rouge-liberation mr-3 flex-shrink-0" />
                <span>Rester dans le regret, la honte, le doute à vie.</span>
              </li>
            </ul>
          </div>

          {/* Suppression du div conclusionRef vide qui créait l'espace blanc */}
          {/* Conclusion avec animation fadeInUp */}
          {/*
          <div
            ref={conclusionRef}
            className="bg-blanc-purete p-6 rounded-lg shadow-md mb-10"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
          </div>
          */}

          {/* CTA avec animation fadeInUp - sans effet de flou */}
          <div
            ref={ctaRef}
            className="text-center mt-4 mb-2"
            style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(30px)" }}
            data-animate="true"
          >
            <CTAButton variant="solution" pulse={false} text="✨ Découvrir Comment Atteindre cette Clarté" />
          </div>
        </div>
      </div>
    </section>
  )
}
