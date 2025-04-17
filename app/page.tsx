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
import { VideoSection } from "@/components/sections/video-section"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export default function Home() {
  const [snapEnabled, setSnapEnabled] = useState(false)

  // Effet pour charger Calendly
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }

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
    }

    window.addEventListener("scroll", handleUserScroll)

    return () => {
      window.removeEventListener("load", enableSnapAfterLoad)
      window.removeEventListener("scroll", handleUserScroll)
    }
  }, [])

  // Fonction pour vérifier si on est sur mobile
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

  return (
    <main className={`min-h-screen ${snapEnabled && !isMobile ? "snap-mandatory" : ""}`}>
      <SmoothScroll />
      <HeroSection />
      <VideoSection />
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
