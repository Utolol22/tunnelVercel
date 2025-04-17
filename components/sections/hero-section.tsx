"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="hero bg-black text-blanc-purete pt-24 pb-16 min-h-screen flex items-center animate-fadeIn relative">
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
          <div className="hero__image flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-rouge-liberation animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-rouge-liberation">
                <Image
                  src="/img/pierre-portrait.png"
                  alt="Pierre, coach en libération de l'alcool"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="hero__content flex-1 max-w-2xl animate-slideInLeft text-center md:text-left">
            <p className="text-sm md:text-base text-sable-introspection mb-2">Jour 0 : Le début du vrai changement</p>
            <h1 className="text-blanc-purete text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              LIBÈRE-TOI
              <br />
              DE L'ALCOOL
            </h1>
            <p className="hero__subtitle text-lg md:text-xl mb-3">
              Tu veux arrêter de boire mais tu sais que la simple volonté
              <br />
              ne suffit pas?
            </p>
            <p className="hero__description text-base md:text-lg text-sable-introspection mb-8">
              Découvre comment sortir du cycle sans lutte.
            </p>
            <div className="hero__cta">
              <Link href="#calendly">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-rouge-liberation hover:bg-rouge-liberation/90 text-white px-6 py-3 rounded-md font-medium"
                >
                  J'APPELLE PIERRE
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
