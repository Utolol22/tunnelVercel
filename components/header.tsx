"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Accueil", href: "#" },
  { name: "Le problème", href: "#problem" },
  { name: "La solution", href: "#promise" },
  { name: "Le programme", href: "#offer" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "À propos", href: "#author" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#calendly" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fonction pour fermer le menu mobile après un clic sur un lien
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
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
          <Link href="#" className="text-blanc-purete font-bold text-xl">
            <span className="text-rouge-liberation">Uto</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rouge-liberation ${
                  isScrolled ? "text-blanc-purete" : "text-blanc-purete/90"
                }`}
                onClick={handleLinkClick}
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
                className="text-blanc-purete text-lg font-medium py-2 border-b border-blanc-purete/10 hover:text-rouge-liberation transition-colors"
                onClick={handleLinkClick}
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
