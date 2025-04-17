"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MicroPopupProps {
  text?: string
  href?: string
  className?: string
  autoShowDelay?: number
  autoHideDelay?: number
}

export function MicroPopup({
  text = "Réserve ton appel gratuit",
  href = "https://calendly.com/utolol22",
  className,
  autoShowDelay = 5000, // 5 secondes après le chargement
  autoHideDelay = 8000, // Visible pendant 3 secondes
}: MicroPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolledHalfway, setHasScrolledHalfway] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Vérifier si l'utilisateur a scrollé à mi-page
      const scrollThreshold = document.body.scrollHeight * 0.5
      if (window.scrollY > scrollThreshold) {
        setHasScrolledHalfway(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Vérifier immédiatement au cas où la page est déjà scrollée
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (hasScrolledHalfway && !isDismissed) {
      // Afficher après le délai
      const showTimer = setTimeout(() => {
        setIsVisible(true)

        // Masquer automatiquement après le délai
        const hideTimer = setTimeout(() => {
          setIsVisible(false)
        }, autoHideDelay)

        return () => clearTimeout(hideTimer)
      }, autoShowDelay)

      return () => clearTimeout(showTimer)
    }
  }, [hasScrolledHalfway, isDismissed, autoShowDelay, autoHideDelay])

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (!hasScrolledHalfway || isDismissed) return null

  return (
    <div
      className={cn(
        "fixed bottom-16 left-4 right-4 z-50 transition-all duration-300 md:w-auto md:right-auto md:left-4",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="bg-blanc-purete text-noir-profond rounded-lg shadow-lg p-4 pr-10 border-l-4 border-rouge-liberation">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 text-gris-sagesse hover:text-noir-profond"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="font-medium">{text}</p>
        </div>
      </Link>
    </div>
  )
}
