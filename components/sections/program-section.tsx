"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Anchor, Search, Lightbulb, Heart, Star } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Données des phases
const phases = [
  {
    id: 1,
    icon: <Anchor className="w-12 h-12 text-rouge-liberation" />,
    title: "Ancrage & Sécurité",
    description: [
      "Poser les bases : Faire le point honnêtement sur vos habitudes.",
      "Sécuriser l'environnement immédiat pour faciliter les premiers jours.",
      "Créer un espace de confiance et de stabilité pour démarrer sereinement.",
    ],
  },
  {
    id: 2,
    icon: <Search className="w-12 h-12 text-rouge-liberation" />,
    title: "Comprendre le Piège",
    description: [
      "Démonter les illusions sur ce que l'alcool semble apporter.",
      "Observer vos déclencheurs, pensées automatiques et émotions liées.",
      "Comprendre la mécanique personnelle de votre cycle d'addiction.",
    ],
  },
  {
    id: 3,
    icon: <Lightbulb className="w-12 h-12 text-rouge-liberation" />,
    title: "Le Déclic : Éteindre le Désir",
    description: [
      "Intégrer la CLARTÉ : Voir l'alcool comme le poison/l'arnaque qu'il est.",
      "Observer le désir perdre son sens et sa force naturellement.",
      "Renforcer les nouvelles perspectives où l'alcool devient non pertinent.",
    ],
  },
  {
    id: 4,
    icon: <Heart className="w-12 h-12 text-rouge-liberation" />,
    title: "Renforcer Vos Vraies Forces",
    description: [
      "Se tourner vers vos ressources intérieures (calme, résilience).",
      "Apprendre à gérer stress et émotions sainement, sans béquille.",
      "Explorer vos aspirations profondes maintenant libérées.",
    ],
  },
  {
    id: 5,
    icon: <Star className="w-12 h-12 text-rouge-liberation" />,
    title: "Vivre Libre & Aligné",
    description: [
      "Consolider l'identité d'une personne libre qui n'a plus besoin d'alcool.",
      "Ancrer les nouvelles habitudes de vie et de pensée pour le long terme.",
      "Vivre une sobriété naturelle, paisible et épanouissante.",
    ],
  },
]

export function ProgramSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activePhaseIndex, setActivePhaseIndex] = useState<number | null>(null)

  // Animation de la ligne de progression avec Framer Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  // Effet pour initialiser les animations GSAP
  useEffect(() => {
    if (!sectionRef.current) return

    // Animation du titre et de l'introduction
    gsap.fromTo(
      ".program-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".program-title",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".program-intro",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".program-intro",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    // Animation de la ligne de progression
    gsap.fromTo(
      progressLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      },
    )

    // Animation des phases
    phaseRefs.current.forEach((phaseRef, index) => {
      if (!phaseRef) return

      // Animation d'entrée de la carte
      gsap.fromTo(
        phaseRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: phaseRef,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
            onEnter: () => setActivePhaseIndex(index),
            onEnterBack: () => setActivePhaseIndex(index),
          },
        },
      )

      // Animation des éléments internes avec staggering
      const elements = phaseRef.querySelectorAll(".phase-content > *")
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: phaseRef,
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
          },
        },
      )
    })

    // Animation du CTA
    gsap.fromTo(
      ".program-cta",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".program-cta",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    return () => {
      // Nettoyer les ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Effet pour mettre à jour les marqueurs de phase active
  useEffect(() => {
    if (activePhaseIndex === null) return

    // Mettre à jour les classes des marqueurs
    phaseRefs.current.forEach((_, index) => {
      const marker = document.getElementById(`phase-marker-${index}`)
      if (!marker) return

      if (index === activePhaseIndex) {
        marker.classList.add("active-marker")
      } else {
        marker.classList.remove("active-marker")
      }
    })
  }, [activePhaseIndex])

  return (
    <section ref={sectionRef} id="program" className="bg-[#F5E6D3] py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Titre et introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="program-title font-heading text-3xl md:text-4xl mb-6 text-[#1A1A1A]">
            Votre Chemin Vers la Liberté Sans Effort : Les 5 Étapes Clés
          </h2>
          <p className="program-intro text-base md:text-lg text-[#2A2A2A] max-w-3xl mx-auto">
            Un parcours structuré qui transforme la <strong>compréhension</strong> en <strong>liberté</strong>, adapté à
            votre rythme et à vos besoins spécifiques. Chaque étape vous rapproche d'une sobriété naturelle et paisible.
          </p>
        </div>

        {/* Ligne de progression verticale */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 sm:w-2 bg-gray-200/70 rounded-full transform -translate-x-1/2 z-10">
            <motion.div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full bg-rouge-liberation rounded-full"
              style={{
                height: "100%",
                scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Phases */}
          <div className="relative z-20 space-y-16 md:space-y-24 lg:space-y-32 w-full px-4 md:px-0">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => (phaseRefs.current[index] = el)}
                className={`relative w-full ${index % 2 === 0 ? "md:ml-auto md:mr-12" : "md:mr-auto md:ml-12"} md:w-[80%] max-w-3xl`}
              >
                {/* Marqueur sur la ligne de progression */}
                <div
                  id={`phase-marker-${index}`}
                  className={`absolute left-4 sm:left-8 md:left-0 top-12 w-6 h-6 sm:w-8 sm:h-8 bg-blanc-purete border-4 border-rouge-liberation rounded-full transform -translate-x-1/2 z-20 transition-all duration-300 ease-out
                    ${index === activePhaseIndex ? "scale-125 bg-rouge-liberation border-blanc-purete" : ""}
                  `}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-rouge-liberation">
                    {phase.id}
                  </span>
                </div>

                {/* Carte de phase */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="ml-12 sm:ml-16 md:ml-0 w-full"
                >
                  <Card className="border-none rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      {/* En-tête de phase avec dégradé */}
                      <div className="bg-gradient-to-r from-rouge-liberation to-rouge-liberation/80 text-blanc-purete p-6 flex items-center">
                        <div className="w-16 h-16 rounded-full bg-blanc-purete/20 flex items-center justify-center mr-4 backdrop-blur-sm">
                          {phase.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{phase.title}</h3>
                      </div>

                      {/* Contenu de la phase */}
                      <div className="p-6 bg-blanc-purete phase-content">
                        <ul className="space-y-4">
                          {phase.description.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-rouge-liberation font-bold text-lg mr-3">•</span>
                              <span className="text-[#2A2A2A] text-base md:text-lg">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="program-cta text-center mt-24 max-w-3xl mx-auto">
          <div className="relative inline-block">
            <div
              className="absolute rounded-xl bg-rouge-liberation opacity-20 animate-pulse-slow"
              style={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                filter: "blur(8px)",
                transform: "scale(1.05)",
              }}
            ></div>
            <CTAButton
              variant="program"
              pulse={true}
              badge={{
                text: "COMMENCEZ VOTRE TRANSFORMATION",
                color: "bg-yellow-400",
              }}
              text="Discutons de Votre Parcours Personnalisé (Appel Gratuit)"
              href="https://calendly.com/uto-ias"
            />
          </div>
          <p className="mt-4 text-sm text-gris-sagesse/80 italic">
            Découvrez comment ce parcours peut s'adapter à votre situation unique
          </p>
        </div>
      </div>
    </section>
  )
}
