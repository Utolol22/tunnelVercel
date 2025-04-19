"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface StickyCTAProps {
  href?: string
  text?: string
  className?: string
}

export function StickyCTA({
  href = "https://calendly.com/uto-ias",
  text = "Réserve ton appel offert",
  className,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après avoir scrollé 25% de la page
      const scrollThreshold = window.innerHeight * 0.25
      if (window.scrollY > scrollThreshold) {
        setHasScrolled(true)
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!hasScrolled) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full",
        className,
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center bg-rouge-liberation text-blanc-purete p-4 shadow-lg">
          <Phone className="h-5 w-5 mr-2" />
          <span className="font-medium">{text}</span>
        </div>
      </Link>
    </div>
  )
}
