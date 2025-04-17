"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  href?: string
  className?: string
}

export function ProgressBar({ href = "#calendly-widget", className }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la progression du scroll
      const scrollTop = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100

      setProgress(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200", className)}>
      <Link href={href}>
        <div
          className="h-full bg-rouge-liberation transition-all duration-100 relative group"
          style={{ width: `${progress}%` }}
        >
          {/* Tooltip qui apparaît au survol */}
          <div className="absolute top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-noir-profond text-blanc-purete text-xs py-1 px-2 rounded whitespace-nowrap transform translate-x-1/2">
            Étape suivante : Réserve ton appel
          </div>
        </div>
      </Link>
    </div>
  )
}
