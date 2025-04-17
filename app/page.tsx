"use client"

import { useEffect } from "react"
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
  // Effet pour charger Calendly
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }

    // Effet pour désactiver le scroll snapping pendant le chargement de la page
    const enableSnapAfterLoad = () => {
      document.documentElement.classList.add("snap-enabled")
    }

    // Activer le snap après le chargement complet
    if (document.readyState === "complete") {
      enableSnapAfterLoad()
    } else {
      window.addEventListener("load", enableSnapAfterLoad)
    }

    return () => {
      window.removeEventListener("load", enableSnapAfterLoad)
    }
  }, [])

  return (
    <main className="min-h-screen snap-mandatory">
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
