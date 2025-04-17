"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemAgitationSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { MethodSection } from "@/components/sections/method-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { FutureVisionSection } from "@/components/sections/future-vision-section"
import { ProgramSection } from "@/components/sections/program-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CallToActionSection } from "@/components/sections/call-to-action-section"
import { AuthorSection } from "@/components/sections/author-section"
import { DifferentiationSection } from "@/components/sections/differentiation-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/sections/footer"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export default function Home() {
  const [snapEnabled, setSnapEnabled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Effet pour charger Calendly et gérer les animations
  useEffect(() => {
    // Effet pour activer le scroll snapping après un délai
    const enableSnapAfterLoad = () => {
      // Attendre que la page soit complètement chargée
      setTimeout(() => {
        document.documentElement.classList.add("snap-enabled")
        setSnapEnabled(true)
      }, 1000) // Délai de 1 seconde pour s'assurer que tout est chargé
    }

    // Activer le snap après le chargement complet
    if (document.readyState === "complete") {
      enableSnapAfterLoad()
    } else {
      window.addEventListener("load", enableSnapAfterLoad)
    }

    // Fonction pour désactiver temporairement le snap lors du défilement manuel
    const handleUserScroll = () => {
      // Désactiver le snap pendant le défilement
      document.documentElement.classList.remove("snap-enabled")

      // Réactiver après la fin du défilement
      clearTimeout(window.scrollTimeout)
      window.scrollTimeout = setTimeout(() => {
        document.documentElement.classList.add("snap-enabled")
      }, 1000)

      // Déterminer la section active
      const sections = ["hero", "problem", "solution", "program", "testimonials", "author", "faq"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleUserScroll)

    // Gérer les liens d'ancrage dans l'URL
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        const targetElement = document.getElementById(hash)
        if (targetElement) {
          // Attendre un peu pour que la page soit chargée
          setTimeout(() => {
            const headerHeight = window.innerWidth < 640 ? 60 : 80
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })

            // Activer les animations
            targetElement.classList.add("animate-now")
            const animatedElements = targetElement.querySelectorAll("[data-animate]")
            animatedElements.forEach((el) => {
              el.classList.add("animate-now")
            })

            setActiveSection(hash)
          }, 300)
        }
      }
    }

    // Vérifier le hash au chargement initial
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("load", enableSnapAfterLoad)
      window.removeEventListener("scroll", handleUserScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Fonction pour vérifier si on est sur mobile
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

  return (
    <main className={`min-h-screen ${snapEnabled && !isMobile ? "snap-mandatory" : ""}`}>
      <SmoothScroll />
      <HeroSection />
      <ProblemAgitationSection />
      <SolutionSection />
      <MethodSection />
      <BenefitsSection />
      <FutureVisionSection />
      <ProgramSection />
      <TestimonialsSection />
      <CallToActionSection />
      <AuthorSection />
      <DifferentiationSection />
      <TargetAudienceSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
