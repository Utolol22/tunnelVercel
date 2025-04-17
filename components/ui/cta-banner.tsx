"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  text?: string
  subtext?: string
  href?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export function CTABanner({
  text = "Prêt(e) pour un appel offert ?",
  subtext = "Réserve ton appel gratuit et sans engagement",
  href = "https://calendly.com/utolol22",
  className,
  bgColor = "bg-rouge-liberation",
  textColor = "text-blanc-purete",
}: CTABannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={bannerRef}
      className={cn(
        "w-full py-8 px-4 transition-all duration-700",
        bgColor,
        textColor,
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <div className="container mx-auto">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col sm:flex-row items-center justify-between cursor-pointer group">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{text}</h3>
              <p className="text-sm sm:text-base opacity-90">{subtext}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blanc-purete/20 group-hover:bg-blanc-purete/30 transition-colors">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
