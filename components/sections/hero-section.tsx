"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { blurDataURLs } from "@/lib/image-blur"
import { CTAButton } from "@/components/ui/cta-button"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return

    // Animation pour le contenu textuel
    const contentElements = contentRef.current?.children
    if (contentElements) {
      gsap.fromTo(
        contentElements,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
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
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )
    }

    // Animation immédiate si la classe animate-now est présente
    const handleAnimateNow = () => {
      if (sectionRef.current?.closest(".animate-now")) {
        if (contentElements) {
          gsap.to(contentElements, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          })
        }
      }
    }

    handleAnimateNow()
    sectionRef.current?.addEventListener("animationstart", handleAnimateNow)

    // Nettoyage des animations lors du démontage du composant
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      sectionRef.current?.removeEventListener("animationstart", handleAnimateNow)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero text-blanc-purete pt-24 pb-16 snap-section flex items-center relative"
      data-animate="true"
    >
      {/* Dégradé de fond amélioré */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-profond via-noir-profond to-[#1A0000] z-0"></div>

      {/* Effet de vignettage subtil */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.7)",
        }}
      ></div>

      {/* Overlay subtil rouge */}
      <div className="absolute inset-0 bg-rouge-liberation/5 mix-blend-overlay z-5"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Image avec le "0" */}
          <div ref={imageRef} className="hero__image w-64 h-96 md:w-80 md:h-[28rem] flex-shrink-0" data-animate="true">
            <div className="relative w-full h-full">
              {/* Effet de pulsation rouge discret */}
              <div
                className="absolute inset-0 zero-shape-tall filter blur-[2px] animate-pulse-slow"
                style={{
                  boxShadow: "0 0 15px 2px rgba(196, 30, 58, 0.4)",
                  transform: "scale(1.05)",
                }}
              ></div>

              {/* Forme du "0" en blanc avec effet de profondeur et liseret noir externe */}
              <div
                className="absolute inset-0 zero-shape-tall bg-blanc-purete"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #000000", // Liseret noir externe
                }}
              >
                {/* Trou intérieur du "0" - transparent pour voir l'image */}
                <div
                  className="absolute inset-[15%] zero-shape-tall-inner bg-transparent"
                  style={{
                    border: "2px solid #000000", // Liseret noir interne
                  }}
                ></div>
              </div>

              {/* Image à l'intérieur du "0" */}
              <div className="absolute inset-[15%] overflow-hidden zero-shape-tall-inner">
                <Image
                  src="/img/pierre-portrait.png"
                  alt="Pierre, coach en libération de l'alcool"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 50vw"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURLs["pierre-portrait"]}
                />
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div ref={contentRef} className="hero__content max-w-2xl text-center md:text-left" data-animate="true">
            <p className="text-sm sm:text-base md:text-lg text-sable-introspection mb-4 animate-pulse-slow">
              <span className="text-base sm:text-lg md:text-xl font-semibold">
                Jour 0 : Le début du vrai changement
              </span>
            </p>
            <h1 className="text-blanc-purete text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Et si cesser de boire ne tenait pas à la volonté, mais à la conscience ?
            </h1>
            <p className="hero__subtitle text-lg sm:text-xl mb-6">
              Découvre comment sortir du cycle sans lutte et retrouver ta liberté.
            </p>
            <div className="hero__cta">
              <CTAButton variant="hero" pulse={true} text="Provoque ton déclic !" />
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé subtil vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A0000] to-noir-profond pointer-events-none"></div>
    </section>
  )
}
