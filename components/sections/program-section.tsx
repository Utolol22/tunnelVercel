"use client"
import { RefreshCw, Search, Sprout, Flame, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { containerVariants, fadeInVariants, listItemVariants } from "@/lib/motionVariants"
import { useState } from "react"

export function ProgramSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activePhase, setActivePhase] = useState(1)

  const phases = [
    {
      id: 1,
      icon: <RefreshCw className="w-8 h-8 text-rouge-liberation" />,
      title: "Phase 1 – Ancrage",
      description: "Tu poses les bases et sécurises ton environnement pour démarrer sereinement.",
    },
    {
      id: 2,
      icon: <Search className="w-8 h-8 text-rouge-liberation" />,
      title: "Phase 2 – Décrypter le piège",
      description: "Tu identifies tes déclencheurs et comprends les mécanismes de l'addiction.",
    },
    {
      id: 3,
      icon: <Sprout className="w-8 h-8 text-rouge-liberation" />,
      title: "Phase 3 – Éteindre le désir",
      description: "Tu intègres profondément que l'alcool n'apporte rien de positif, le désir s'éteint naturellement.",
    },
    {
      id: 4,
      icon: <Flame className="w-8 h-8 text-rouge-liberation" />,
      title: "Phase 4 – Renforcer les ressources",
      description: "Tu développes des outils pour gérer le stress et les émotions sainement, sans béquille.",
    },
    {
      id: 5,
      icon: <Coffee className="w-8 h-8 text-rouge-liberation" />,
      title: "Phase 5 – Incarner la vie sobre",
      description: "Tu consolides ta nouvelle identité libre et tes habitudes de vie épanouissantes.",
    },
  ]

  return (
    <motion.section
      ref={ref}
      id="program"
      className="bg-[#F5E6D3] py-20 md:py-28"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="program__content max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-center mb-6 text-[#1A1A1A]"
            variants={fadeInVariants}
          >
            Voilà comment on avance ensemble.
          </motion.h2>
          <motion.div
            className="program__intro text-base md:text-lg text-center mb-10 md:mb-12 max-w-3xl mx-auto space-y-3 text-[#2A2A2A]"
            variants={fadeInVariants}
          >
            <p>Un parcours structuré en 5 phases, adapté à ton rythme et à tes besoins spécifiques.</p>
          </motion.div>

          {/* Timeline horizontale */}
          <div className="mb-12">
            <div className="flex overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex space-x-2 md:space-x-4 min-w-max">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activePhase === phase.id
                        ? "bg-rouge-liberation text-white"
                        : "bg-white text-gris-sagesse hover:bg-rouge-liberation/10"
                    }`}
                  >
                    Phase {phase.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu de la phase active */}
          <motion.div
            className="bg-blanc-purete p-6 rounded-lg shadow-md"
            variants={listItemVariants}
            key={activePhase}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center mb-4">
              {phases[activePhase - 1].icon}
              <h3 className="text-xl font-bold text-[#1A1A1A] ml-3">{phases[activePhase - 1].title}</h3>
            </div>
            <p className="text-[#2A2A2A]">{phases[activePhase - 1].description}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
