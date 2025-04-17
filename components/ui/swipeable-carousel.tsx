"use client"

import type React from "react"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SwipeableCarouselProps {
  children: ReactNode[]
  className?: string
}

export function SwipeableCarousel({ children, className = "" }: SwipeableCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setIsDragging(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleMouseLeave = () => {
      setIsDragging(false)
    }

    carousel.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      carousel.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className={`relative ${className}`}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 snap-center">
              {child}
            </div>
          ))}
        </div>
      </div>

      {children.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-noir-profond/50 text-blanc-purete rounded-full p-2 hover:bg-rouge-liberation/80 transition-colors z-10"
            aria-label="Précédent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-noir-profond/50 text-blanc-purete rounded-full p-2 hover:bg-rouge-liberation/80 transition-colors z-10"
            aria-label="Suivant"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "bg-rouge-liberation" : "bg-blanc-purete/50"
                } transition-colors`}
                aria-label={`Aller à l'élément ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
