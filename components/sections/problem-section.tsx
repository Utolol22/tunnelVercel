"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProblemAgitationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
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

  // Effet pour les animations GSAP
  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return

    // Animation pour le titre
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            // markers: true, // Utile pour le débogage
          },
        },
      )
    }

    // Animation pour le contenu textuel
    const paragraphs = contentRef.current?.querySelectorAll("p")
    if (paragraphs) {
      gsap.fromTo(
        paragraphs,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
        },
      )
    }

    // Animation pour l'image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )
    }

    // Animation pour le CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
        },
      )
    }

    // Nettoyage des animations lors du démontage du composant
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative snap-section text-white overflow-hidden pt-36 sm:pt-40 pb-20 flex items-center"
    >
      {/* Arrière-plan simplifié qui s'aligne avec la HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-profond to-[#0A0000] z-0"></div>

      {/* Effet de vignettage statique et léger */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.7)",
        }}
      ></div>

      {/* Conteneur principal */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre */}
        <div className="mb-8 sm:mb-12 text-center relative pt-4">
          <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-bold relative">
            T'en as marre ?{" "}
            <span className="text-[#C41E3A] relative">
              Tu ne veux plus continuer comme ça ?{/* Halo subtil sous le texte */}
              <span className="absolute inset-0 bg-[#C41E3A]/10 blur-md -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Contenu simplifié */}
        <div className="max-w-4xl mx-auto relative">
          <div ref={contentRef}>
            <div className="prose prose-invert mx-auto mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-6 sm:mb-8">
                Tu sais que ça ne peut plus durer.
                <br className="hidden sm:block" />
                Tu te l'es déjà dit. Plusieurs fois.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Tu t'es promis que c'était la dernière.
                <br className="hidden sm:block" />
                Tu as tenu quelques jours, semaines, mois ?
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Et puis... la rechute.
                <br className="hidden sm:block" />
                Souvent déclenchée par une émotion forte, la tension, l'ennui, le stress...
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Le fameux verre "juste pour se détendre"...
                <br className="hidden sm:block" />
                Ou plutôt, pour chercher une pause illusoire, un court instant de silence dans le bruit intérieur ?
              </p>
            </div>

            {/* Image du cycle de l'addiction - conditionnelle sur mobile */}
            <div ref={imageRef} className={`${isMobile ? "max-h-[60vh] overflow-hidden" : ""}`}>
              <div className="relative mx-auto max-w-full sm:max-w-2xl my-8 sm:my-16">
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-rouge-liberation/20">
                  <Image
                    src="/img/cycle-addiction.png"
                    alt="Le cycle de l'addiction : Émotion, Consommation, Soulagement Illusoire, Culpabilité, Envie"
                    width={800}
                    height={600}
                    className="w-full"
                  />

                  {/* Overlay léger pour meilleure lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/30 to-transparent"></div>
                </div>

                {/* Légende */}
                <p className="text-center text-sable-introspection/80 mt-4 sm:mt-6 italic text-sm sm:text-base">
                  Ce cycle d'addiction t'emprisonne dans une boucle sans fin de{" "}
                  <span className="text-rouge-liberation font-medium">souffrance</span> et de{" "}
                  <span className="text-rouge-liberation font-medium">dépendance</span>.
                </p>
              </div>
            </div>

            <div className="prose prose-invert mx-auto mt-8 sm:mt-12">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Tu n'es pas seul(e).
                <br className="hidden sm:block" />
                Des gens brillants, sensibles, lucides comme toi tombent là-dedans.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Pas parce qu'ils sont faibles.
                <br className="hidden sm:block" />
                Mais parce que le piège de l'alcool est complexe et mentalement très puissant.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Tu vois le piège de l'alcool, mais tu ne sais plus comment en sortir.
                <br className="hidden sm:block" />
                Tu veux arrêter, mais une partie de toi panique à l'idée de vivre sans cette béquille.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Comment vas-tu faire pour gérer les hauts et les bas de la vie, les soirées, la solitude, ce sentiment
                de vide parfois ?
                <br className="hidden sm:block" />
                Rien que d'y penser, ça te fige !
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Et cette peur... c'est souvent elle qui te ramène au point de départ.
                <br className="hidden sm:block" />
                Comme si une partie de toi préférait la prison connue à l'inconnu de la liberté.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6 font-semibold">
                C'est comme si tu étais condamné(e) à tourner en rond.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-rouge-liberation mb-4 sm:mb-6 font-bold text-center">
                Jour 0. Encore...
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                C'est ce cycle que nous allons briser.
                <br className="hidden sm:block" />
                Tu n'es ni foutu(e), ni cassé(e).
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
                Tu n'as juste pas encore la bonne clé, la bonne compréhension pour ouvrir la porte de sortie — sans que
                ça ressemble à un combat perdu d'avance.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6 italic">
                Forcément que ça paraît impossible depuis l'intérieur.
              </p>
            </div>
          </div>

          <div ref={ctaRef} className="mt-8 sm:mt-16 text-center">
            <Link
              href="#calendly"
              className="inline-block bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg transform transition duration-300 hover:translate-y-[-2px] border border-[#C41E3A]/50"
            >
              J'APPELLE PIERRE
            </Link>
          </div>
        </div>
      </div>

      {/* Transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-[#F5E6D3]/10 pointer-events-none z-10"></div>
    </section>
  )
}
