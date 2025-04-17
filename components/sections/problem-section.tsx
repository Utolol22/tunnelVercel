"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AlertCircle, RefreshCw, Lock } from "lucide-react"
import { blurDataURLs } from "@/lib/image-blur"
import { CTAButton } from "@/components/ui/cta-button"

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
          duration: isMobile ? 0.4 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? "top 95%" : "top 80%",
            end: isMobile ? "top 70%" : "top 50%",
            scrub: isMobile ? false : 1,
          },
        },
      )
    }

    // Animation pour le contenu textuel
    const bulletPoints = contentRef.current?.querySelectorAll(".problem-bullet")
    if (bulletPoints) {
      gsap.fromTo(
        bulletPoints,
        {
          y: isMobile ? 20 : 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: isMobile ? 0.05 : 0.1,
          duration: isMobile ? 0.4 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: isMobile ? "top 90%" : "top 80%",
            end: isMobile ? "bottom 70%" : "bottom 50%",
            scrub: isMobile ? false : 1,
          },
        },
      )
    }

    // Animation pour l'image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          scale: isMobile ? 0.95 : 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: isMobile ? 0.5 : 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: isMobile ? "top 90%" : "top 80%",
            end: isMobile ? "top 60%" : "top 30%",
            scrub: isMobile ? false : 1,
          },
        },
      )
    }

    // Animation pour le CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        {
          y: isMobile ? 10 : 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.3 : 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: isMobile ? "top 95%" : "top 90%",
            end: isMobile ? "top 80%" : "top 70%",
            scrub: isMobile ? false : 1,
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
      className="relative snap-section text-white overflow-hidden pt-16 sm:pt-24 md:pt-36 pb-20 flex flex-col justify-center"
    >
      {/* Arrière-plan simplifié qui s'aligne avec la HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-profond via-[#1A0000] to-[#0A0000] z-0"></div>

      {/* Effet de vignettage statique et léger */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.7)",
        }}
      ></div>

      {/* Conteneur principal */}
      <div className="container relative z-10">
        {/* Titre */}
        <div className="mb-12 text-center relative pt-4">
          <h2 ref={titleRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold relative">
            T'en as marre ?{" "}
            <span className="text-[#C41E3A] relative">
              Tu ne veux plus continuer comme ça ?
              <span className="absolute inset-0 bg-[#C41E3A]/10 blur-md -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Contenu simplifié avec 3 bullets */}
        <div ref={contentRef} className="relative mt-4 sm:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 mb-12">
            {/* Bullet 1 */}
            <div className="problem-bullet bg-noir-profond/50 p-6 rounded-lg border-l-4 border-rouge-liberation shadow-lg">
              <div className="flex items-start mb-4">
                <RefreshCw className="w-8 h-8 text-rouge-liberation mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Quelques jours de sobriété, puis la rechute ?</h3>
              </div>
              <p className="text-sable-introspection mb-4">
                "J'ai tenu 3 semaines, puis j'ai craqué lors d'un dîner. Je me sentais si bien, pourquoi j'ai repris ?"
                <span className="block italic text-sm mt-2">— Marie, 36 ans</span>
              </p>
            </div>

            {/* Bullet 2 */}
            <div className="problem-bullet bg-noir-profond/50 p-6 rounded-lg border-l-4 border-rouge-liberation shadow-lg">
              <div className="flex items-start mb-4">
                <Lock className="w-8 h-8 text-rouge-liberation mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">La peur de l'inconnu te fige ?</h3>
              </div>
              <p className="text-sable-introspection mb-4">
                "Comment vais-je gérer le stress, les soirées, les moments difficiles sans cette béquille ?"
                <span className="block italic text-sm mt-2">— Thomas, 42 ans</span>
              </p>
            </div>

            {/* Bullet 3 */}
            <div className="problem-bullet bg-noir-profond/50 p-6 rounded-lg border-l-4 border-rouge-liberation shadow-lg">
              <div className="flex items-start mb-4">
                <AlertCircle className="w-8 h-8 text-rouge-liberation mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">La volonté seule ne suffit plus ?</h3>
              </div>
              <p className="text-sable-introspection mb-4">
                "J'ai tout essayé. Je me sens fort(e) puis je craque. Comme si une partie de moi sabotait mes efforts."
                <span className="block italic text-sm mt-2">— Sophie, 39 ans</span>
              </p>
            </div>
          </div>

          {/* Image du cycle de l'addiction - conditionnelle sur mobile */}
          <div
            ref={imageRef}
            className={`${isMobile ? "max-h-[60vh] overflow-hidden" : ""} mb-12 flex justify-center w-full`}
          >
            <div className="relative max-w-full sm:max-w-2xl">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-rouge-liberation/20">
                <Image
                  src="/img/cycle-addiction.png"
                  alt="Le cycle de l'addiction : Émotion, Consommation, Soulagement Illusoire, Culpabilité, Envie"
                  width={800}
                  height={600}
                  className="w-full"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurDataURLs["cycle-addiction"]}
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

          {/* CTA avec effet de halo ajusté */}
          <div ref={ctaRef} className="flex justify-center w-full mt-8 mb-12">
            <div className="relative inline-block max-w-md">
              {/* Effet de halo ajusté */}
              <div
                className="absolute bg-rouge-liberation/30 blur-sm rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  filter: "blur(8px)",
                  transform: "scale(1)",
                }}
              ></div>
              <CTAButton variant="problem" pulse={false} className="relative z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Transition élégante vers la section suivante */}
      <div className="relative w-full overflow-hidden">
        {/* Vague de transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 sm:h-32 md:h-40" fill="#F5E6D3">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
          </svg>
        </div>

        {/* Dégradé de couleur pour une transition plus douce */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F5E6D3] to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
