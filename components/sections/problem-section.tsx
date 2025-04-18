"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AlertCircle, RefreshCw, Lock, Battery, ChevronLeft, ChevronRight } from "lucide-react"
import { blurDataURLs } from "@/lib/image-blur"
import { CTAButton } from "@/components/ui/cta-button"
import { useMobile } from "@/hooks/use-mobile"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Type pour les slides du carrousel
interface PainPointSlide {
  id: number
  title: string
  icon: React.ReactNode
  quote: string
  author: string
}

export function ProblemAgitationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const deepDiveRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const isMobile = useMobile()
  const [isContentVisible, setIsContentVisible] = useState(!isMobile)
  const [activeSlide, setActiveSlide] = useState(0)

  // Données pour le carrousel des points de douleur
  const painPoints: PainPointSlide[] = [
    {
      id: 1,
      title: "Le Cycle Infernal",
      icon: <RefreshCw className="w-10 h-10 text-rouge-liberation" />,
      quote: "J'ai tenu 5 semaines, puis j'ai craqué...",
      author: "Marie, 36 ans",
    },
    {
      id: 2,
      title: "La Peur qui Fige",
      icon: <Lock className="w-10 h-10 text-rouge-liberation" />,
      quote: "Comment vais-je gérer le stress...",
      author: "Thomas, 42 ans",
    },
    {
      id: 3,
      title: "La Volonté qui Cède",
      icon: <Battery className="w-10 h-10 text-rouge-liberation" />,
      quote: "J'ai tout essayé. Je me sens ultra motivé au début, puis je craque systématiquement...",
      author: "Sophie, 39 ans",
    },
  ]

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

  // Fonction pour naviguer dans le carrousel
  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === painPoints.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? painPoints.length - 1 : prev - 1))
  }

  // Effet pour les animations GSAP
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

      // Animation simplifiée pour l'intro
      if (introRef.current) {
        gsap.to(introRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.1,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le carrousel
      if (carouselRef.current) {
        gsap.to(carouselRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.2,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le texte d'approfondissement
      if (deepDiveRef.current) {
        gsap.to(deepDiveRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour l'image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.4,
          ease: "power1.out",
        })
      }

      // Animation simplifiée pour le CTA
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.5,
          ease: "power1.out",
        })
      }
    } else {
      // Animation pour le titre sur desktop
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
            },
          },
        )
      }

      // Animation pour l'intro sur desktop
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
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
              trigger: introRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          },
        )
      }

      // Animation pour le carrousel sur desktop
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: carouselRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
            },
          },
        )
      }

      // Animation pour le texte d'approfondissement sur desktop
      if (deepDiveRef.current) {
        gsap.fromTo(
          deepDiveRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: deepDiveRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
            },
          },
        )
      }

      // Animation pour l'image sur desktop
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

      // Animation pour le CTA sur desktop
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
    }

    // Nettoyage des animations lors du démontage du composant
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative text-white overflow-hidden pt-16 sm:pt-24 md:pt-36 pb-20 flex flex-col justify-center"
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
        <div className="mb-8 text-center relative pt-4">
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold relative ${isMobile ? "opacity-100" : "opacity-0"}`}
            style={{ transform: isMobile ? "none" : "translateY(30px)" }}
          >
            T'en as <span className="text-[#C41E3A]">VRAIMENT</span> marre ?
            <br />
            Tu ne veux plus continuer comme ça ?
          </h2>
        </div>

        {/* Texte d'introduction */}
        <div
          ref={introRef}
          className={`max-w-3xl mx-auto text-center mb-10 ${isContentVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transform: isMobile ? "none" : "translateY(30px)" }}
        >
          <p className="text-base md:text-lg text-sable-introspection">
            Peut-être te reconnais-tu dans ces situations ? Cette impression de tourner en rond, ces promesses brisées,
            cette lutte épuisante contre toi-même... C'est un chemin que beaucoup connaissent, déclenché par le stress,
            l'ennui, mais aussi parfois la joie ou la pression sociale. Toujours cette recherche d'une pause illusoire.
          </p>
        </div>

        {/* Carrousel des points de douleur */}
        <div
          ref={carouselRef}
          className={`relative max-w-3xl mx-auto mb-12 ${isContentVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transform: isMobile ? "none" : "translateY(40px)" }}
        >
          <div className="overflow-hidden rounded-lg bg-noir-profond/50 border border-rouge-liberation/20 shadow-lg">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <div className="flex">
                {painPoints.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className="p-8 flex flex-col items-center">
                      <div className="mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-rouge-liberation/10 flex items-center justify-center">
                          {slide.icon}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">{slide.title}</h3>
                      <p className="text-lg md:text-xl italic mb-3 text-center text-sable-introspection">
                        "{slide.quote}"
                      </p>
                      <p className="text-sm text-sable-introspection/80 text-center">— {slide.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrôles du carrousel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-noir-profond/70 flex items-center justify-center text-blanc-purete hover:bg-rouge-liberation/80 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-noir-profond/70 flex items-center justify-center text-blanc-purete hover:bg-rouge-liberation/80 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicateurs du carrousel */}
            <div className="flex justify-center py-4 space-x-2">
              {painPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeSlide === index ? "bg-rouge-liberation" : "bg-blanc-purete/30"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texte d'approfondissement */}
        <div
          ref={deepDiveRef}
          className={`max-w-3xl mx-auto mb-12 ${isContentVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transform: isMobile ? "none" : "translateY(40px)" }}
        >
          <div className="bg-noir-profond/30 p-6 rounded-lg border border-blanc-purete/10">
            <p className="text-lg md:text-xl font-semibold mb-4 text-blanc-purete">
              Si ça résonne, sache que ce n'est <span className="text-rouge-liberation">PAS</span> de ta faute.
            </p>

            <p className="text-base md:text-lg text-sable-introspection mb-6">
              J'ai connu par cœur ce chemin. Ces promesses répétées, ces négociations internes. Cette impression de
              tourner en rond, déclenchée par le stress, l'ennui... mais aussi, soyons honnêtes, souvent par la joie, la
              fête, la pression sociale. Ce n'est pas une question de faiblesse — des gens brillants et lucides comme
              toi tombent dans ce piège complexe.
            </p>

            <div className="space-y-5 mt-6 bg-noir-profond/40 p-5 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-rouge-liberation/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <AlertCircle className="w-4 h-4 text-rouge-liberation" />
                </div>
                <div>
                  <p className="text-blanc-purete font-medium mb-1">L'alcool crée l'inconfort qu'il prétend soulager</p>
                  <p className="text-sable-introspection">
                    Il agit sur ton cerveau de manière puissante et crée une mécanique mentale impossible à déjouer par
                    la seule volonté.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-rouge-liberation/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <AlertCircle className="w-4 h-4 text-rouge-liberation" />
                </div>
                <div>
                  <p className="text-blanc-purete font-medium mb-1">Ce n'est qu'un pansement temporaire</p>
                  <p className="text-sable-introspection">
                    L'alcool masque souvent autre chose — un vide, des émotions difficiles à gérer, ou une anesthésie
                    qui t'empêche de te sentir pleinement vivant(e).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-rouge-liberation/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <AlertCircle className="w-4 h-4 text-rouge-liberation" />
                </div>
                <div>
                  <p className="text-blanc-purete font-medium mb-1">La peur qui te paralyse</p>
                  <p className="text-sable-introspection">
                    Vivre sans cette béquille semble impensable. Gérer les hauts et les bas, les soirées, la solitude...
                    C'est souvent la prison connue préférée à l'inconnu de la liberté.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 border-l-4 border-rouge-liberation bg-noir-profond/20 rounded-r-lg">
              <p className="text-blanc-purete font-medium mb-2">
                Et même si tu as déjà arrêté... Est-ce vraiment la liberté ?
              </p>
              <p className="text-sable-introspection">
                Ressens-tu encore une lutte constante ? Un sentiment de privation ? De la frustration ou un vide ? Si
                oui, cette "sobriété" subie n'est pas une libération. C'est encore une forme de souffrance.
              </p>
            </div>
          </div>
        </div>

        {/* Image du cycle de l'addiction */}
        <div
          ref={imageRef}
          className={`${isMobile ? "max-h-[60vh] overflow-hidden" : ""} mb-12 flex justify-center w-full`}
          style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "scale(0.9)" }}
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
        <div
          ref={ctaRef}
          className="flex justify-center w-full mt-8 mb-12"
          style={{ opacity: isMobile ? 1 : 0, transform: isMobile ? "none" : "translateY(20px)" }}
        >
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
            <CTAButton
              variant="problem"
              pulse={false}
              className="relative z-10"
              text="Je veux comprendre et sortir de ce cycle"
            />
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
