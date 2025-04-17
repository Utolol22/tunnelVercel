"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingCTAProps {
  href?: string
  showLabel?: boolean
  className?: string
}

export function FloatingCTA({ href = "https://calendly.com/utolol22", showLabel = true, className }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après avoir scrollé 40% de la page
      const scrollThreshold = window.innerHeight * 0.4
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
        "fixed bottom-20 right-4 z-50 transition-all duration-300 md:hidden",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
        className,
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center bg-rouge-liberation text-blanc-purete rounded-full shadow-lg p-3 pr-4">
          <div className="bg-blanc-purete rounded-full p-2 mr-2">
            <Phone className="h-5 w-5 text-rouge-liberation" />
          </div>
          {showLabel && <span className="font-medium whitespace-nowrap">Appel offert</span>}
        </div>
      </Link>
    </div>
  )
}
