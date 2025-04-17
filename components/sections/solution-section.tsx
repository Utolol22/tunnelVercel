"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fadeInUp, fadeInScale, staggerFadeIn, cleanupScrollTriggers } from "@/lib/gsap-utils"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return

    // Animation pour le titre
    fadeInUp(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    })

    // Animation pour le sous-titre
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

    // Animation pour le contenu
    fadeInScale(contentRef.current, {
      scale: 0.95,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    })

    // Animation pour les paragraphes à l'intérieur du contenu
    staggerFadeIn(contentRef.current, "p", {
      y: 20,
      stagger: 0.05,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    })

    // Nettoyage des animations lors du démontage du composant
    return () => {
      cleanupScrollTriggers()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="bg-[#F5E6D3] py-20 md:py-28 text-[#2A2A2A] snap-section flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="solution__content max-w-4xl mx-auto">
          <h2 ref={titleRef} className="font-heading text-3xl md:text-4xl text-center mb-6 text-rouge-liberation">
            Et si le problème, ce n'était pas ta volonté ?
          </h2>
          <p ref={subtitleRef} className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-[#1A1A1A]">
            Et si la clé n'était pas de <em>forcer plus</em>, mais de <strong>comprendre différemment</strong> ?
          </p>
          <p className="text-lg md:text-xl text-center mb-10 md:mb-12 text-gris-sagesse max-w-3xl mx-auto">
            Si ce n'était pas une question de volonté surhumaine, mais de <strong>clarté du regard</strong> sur le vrai
            mécanisme de l'addiction ?
          </p>
          {/* Contenu existant... */}
          <div
            ref={contentRef}
            className="text-base md:text-lg mb-12 md:mb-16 space-y-4 bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-200"
          >
            <p>
              Oublie l'idée de devoir être <em>"plus fort(e)"</em> que l'alcool.
              <br />
              La vraie puissance, pour sortir de là <strong>durablement</strong>, c'est de <strong>voir clair</strong>.
            </p>
            <p>
              De comprendre <em>comment</em> fonctionne l'illusion qui te fait croire que tu perds quelque chose en
              arrêtant.
              <br />
              Quand tu <em>sais</em> comment le tour de magie fonctionne, tu n'es plus impressionné(e), tu es libre.
            </p>
            <p>
              Et libre, ça ne veut pas dire "en rémission" ou "en sursis".
              <br />
              Ça veut dire <strong>complètement libéré(e) du désir</strong>, pas juste en train de le combattre jour
              après jour.
              <br />
              <em>C'est une différence fondamentale.</em>
            </p>
            <p>
              Tu l'as peut-être cru : que t'étais pas assez fort(e).
              <br />
              Mais ça, c'est ce qu'on finit par croire après des échecs répétés avec les mauvaises méthodes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
