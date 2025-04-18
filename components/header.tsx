"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Mise à jour des liens pour correspondre aux IDs exacts des sections
const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Le problème", href: "#problem" },
  { name: "La solution", href: "#solution" },
  { name: "La libération", href: "#struggle-cessation" },
  { name: "Le programme", href: "#program" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "À propos", href: "#author" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "https://calendly.com/utolol22" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Déterminer la section active
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter((id) => id && document.getElementById(id))

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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fonction pour gérer la navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    // Si c'est un lien externe (Calendly)
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer")
      return
    }

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Calculer la position avec un décalage adapté
      const headerHeight = 80 // Hauteur approximative du header
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      // Défilement fluide vers la cible
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Forcer l'activation des animations IMMÉDIATEMENT
      targetElement.classList.add("animate-now")
      const animatedElements = targetElement.querySelectorAll("[data-animate]")
      animatedElements.forEach((el) => {
        el.classList.add("animate-now")
      })

      // AJOUT: Forcer l'activation des animations GSAP
      if (targetId === "solution") {
        // Déclencher un petit événement de scroll pour activer les animations GSAP
        setTimeout(() => {
          window.dispatchEvent(new Event("scroll"))

          // Forcer l'activation des animations dans la section solution
          const solutionContent = document.querySelector(".solution__content")
          if (solutionContent) {
            const allElements = solutionContent.querySelectorAll("*")
            allElements.forEach((el) => {
              el.style.opacity = "1"
              el.style.transform = "none"
            })
          }
        }, 100)
      }

      // Mettre à jour la section active
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-noir-profond/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo ou nom du site */}
          <Link
            href="#hero"
            className="text-blanc-purete font-bold text-xl"
            onClick={(e) => handleNavigation(e, "#hero")}
          >
            <span className="text-rouge-liberation">Uto</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rouge-liberation ${
                  activeSection === item.href.replace("#", "")
                    ? "text-rouge-liberation"
                    : isScrolled
                      ? "text-blanc-purete"
                      : "text-blanc-purete/90"
                }`}
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-blanc-purete"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-noir-profond/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-blanc-purete text-lg font-medium py-2 border-b border-blanc-purete/10 hover:text-rouge-liberation transition-colors ${
                  activeSection === item.href.replace("#", "") ? "text-rouge-liberation" : ""
                }`}
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
