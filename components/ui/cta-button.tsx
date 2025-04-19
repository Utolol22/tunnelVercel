"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

export type CTAVariant = "hero" | "problem" | "solution" | "program" | "testimonial" | "final"

interface CTAButtonProps {
  variant?: CTAVariant
  className?: string
  href?: string
  showIcon?: boolean
  pulse?: boolean
  fullWidth?: boolean
  badge?: {
    text: string
    color: string
  }
  text?: string
}

export function CTAButton({
  variant = "hero",
  className,
  href = "https://calendly.com/uto-ias",
  showIcon = true,
  pulse = false,
  fullWidth = false,
  badge,
  text,
}: CTAButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Animation d'entrée
    const timer = setTimeout(() => {
      const button = document.getElementById(`cta-button-${variant}`)
      if (button) {
        button.classList.add("animate-fadeScale")
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [variant])

  // Textes et styles selon la variante
  const getButtonText = () => {
    if (text) return text

    switch (variant) {
      case "hero":
        return "Provoque ton déclic – Réserve ton appel offert"
      case "problem":
        return "Je veux comprendre pourquoi j'échoue"
      case "solution":
        return "Découvre la clé de ta liberté"
      case "program":
        return "Passe à l'action dès aujourd'hui"
      case "testimonial":
        return "Rejoins Julie, Marc, Sophie"
      case "final":
        return "Réserve ta session privée"
      default:
        return "Réserve ton appel offert"
    }
  }

  // Désactiver l'effet de pulse pour le bouton de la section solution
  const shouldPulse = variant === "solution" ? false : pulse

  const getIcon = () => {
    switch (variant) {
      case "hero":
      case "final":
        return <Phone className="mr-2 h-5 w-5" />
      default:
        return <Calendar className="mr-2 h-5 w-5" />
    }
  }

  const getButtonSize = () => {
    switch (variant) {
      case "hero":
      case "final":
        return "xl"
      case "problem":
        return "lg"
      default:
        return "lg"
    }
  }

  return (
    <div
      className={cn(
        "relative transition-all duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        fullWidth ? "w-full" : "",
        className,
      )}
    >
      {shouldPulse && (
        <div
          className="absolute rounded-xl bg-rouge-liberation opacity-20 animate-pulse-slower"
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            filter: "blur(8px)",
            transform: "scale(1)",
          }}
        ></div>
      )}
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Button
          id={`cta-button-${variant}`}
          variant="primary"
          size={getButtonSize() as any}
          animation={shouldPulse ? "pulse" : "none"}
          roundness="lg"
          fullWidthMobile={fullWidth}
          className={cn(
            "shadow-cta relative z-10 px-6 font-semibold tracking-wide",
            variant === "final" ? "uppercase" : "",
          )}
          badge={badge}
        >
          {showIcon && getIcon()}
          {getButtonText()}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
