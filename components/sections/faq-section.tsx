"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface FaqItemProps {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onClick: () => void
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item border-b border-gray-200 last:border-b-0 py-5">
      <button
        className="faq-question flex justify-between items-center w-full text-left text-base md:text-lg font-medium text-noir-profond hover:text-rouge-liberation transition-colors duration-200 focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="w-5 h-5 text-rouge-liberation group-hover:text-rouge-liberation/80 transition-colors duration-200" />
        </span>
      </button>
      <div
        className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="text-sm md:text-base text-gris-sagesse space-y-3 pt-2 pb-2 leading-relaxed">{answer}</div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Seulement les 3 questions les plus importantes
  const mainFaqData = [
    {
      question: "Est-ce que ce programme me convient si je ne veux pas arrêter complètement l'alcool ?",
      answer: (
        <>
          <p>
            Mon approche est conçue pour ceux qui visent un <strong>arrêt complet et définitif</strong>.<br />
            L'objectif ici est d'atteindre une <strong>liberté totale</strong>, ce qui passe par l'arrêt.
            <br />
            Si ton objectif est uniquement de réduire, ce programme n'est probablement pas le plus adapté.
          </p>
        </>
      ),
    },
    {
      question: "Comment se déroulent les séances de coaching ?",
      answer: (
        <>
          <p>
            Il s'agit d'un accompagnement <strong>individuel et personnalisé</strong>.<br />
            Nos séances (généralement hebdomadaires au début) se font en visioconférence.
            <br />
            C'est un espace d'échange sécurisé, pour identifier et déconstruire les croyances limitantes.
          </p>
        </>
      ),
    },
    {
      question: "Que se passe-t-il si je rechute pendant le programme ?",
      answer: (
        <>
          <p>
            Une rechute n'est <strong>jamais un échec</strong>, mais une <strong>information précieuse</strong>.<br />
            On en parle ensemble, sans jugement, pour comprendre ce qui a joué.
            <br />
            C'est une opportunité d'ajuster la compréhension pour consolider la liberté.
          </p>
        </>
      ),
    },
  ]

  return (
    <section id="faq" className="bg-[#F5E6D3] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="faq__content max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 text-noir-profond">Questions fréquentes</h2>
          <p className="text-center text-base md:text-lg text-gris-sagesse mb-10 md:mb-12">
            <strong>
              Tu as des questions ? C'est parfaitement normal. Voici quelques réponses aux interrogations les plus
              courantes :
            </strong>
          </p>
          <div className="faq__list bg-blanc-purete p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
            {mainFaqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}

            <div className="mt-8 text-center">
              <Link
                href="/faq-complete"
                className="inline-block text-rouge-liberation hover:text-rouge-liberation/80 font-medium underline"
              >
                Voir toutes les questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
