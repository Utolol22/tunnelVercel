"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { blurDataURLs } from "@/lib/image-blur"

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

    // Nettoyage des animations lors du démontage du composant
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="hero bg-black text-blanc-purete pt-24 pb-16 snap-section flex items-center relative"
    >
      {/* Effet de vignettage subtil */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.7)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image circulaire avec bordure rouge */}
          <div ref={imageRef} className="hero__image flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-rouge-liberation animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-rouge-liberation">
                <Image
                  src="/img/pierre-portrait.png"
                  alt="Pierre, coach en libération de l'alcool"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 50vw"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURLs["pierre-portrait"]}
                />
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div ref={contentRef} className="hero__content flex-1 max-w-2xl text-center md:text-left">
            <p className="text-sm sm:text-base text-sable-introspection mb-2">Jour 0 : Le début du vrai changement</p>
            <h1 className="text-blanc-purete text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Et si cesser de boire ne tenait pas à la volonté, mais à la compréhension ?
            </h1>
            <p className="hero__subtitle text-lg sm:text-xl mb-6">
              Découvre comment sortir du cycle sans lutte et retrouver ta liberté.
            </p>
            <div className="hero__cta">
              <Link href="#solution">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-rouge-liberation hover:bg-rouge-liberation/90 text-white px-6 py-3 rounded-md font-medium"
                >
                  Découvrir la clé
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé subtil vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-noir-profond pointer-events-none"></div>
    </section>
  )
}
