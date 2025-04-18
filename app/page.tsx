"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemAgitationSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { MethodSection } from "@/components/sections/method-section"
import { StruggleCessationSection } from "@/components/sections/struggle-cessation-section"
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
  const [activeSection, setActiveSection] = useState("")

  // Effet pour charger Calendly et gérer les animations
  useEffect(() => {
    // Fonction pour déterminer la section active
    const handleUserScroll = () => {
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
            targetElement.classList.add("force-visible")

            // Forcer l'activation des animations GSAP
            window.dispatchEvent(new Event("scroll"))

            // Forcer l'affichage de tous les éléments dans la section
            const allElements = targetElement.querySelectorAll("*")
            allElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                el.classList.add("animate-now")
                el.style.opacity = "1"
                el.style.transform = "none"
              }
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
      window.removeEventListener("scroll", handleUserScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <HeroSection />
      <ProblemAgitationSection />
      <SolutionSection />
      <MethodSection />
      <StruggleCessationSection />
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
