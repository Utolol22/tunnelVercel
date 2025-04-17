"use client"

import { useEffect } from "react"
import { applyBrowserSpecificFixes } from "@/lib/browser-detection"

export function SmoothScroll() {
  useEffect(() => {
    // Fonction pour gérer le défilement fluide
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Vérifier si c'est un lien interne (commence par #)
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href") as string

        // Si c'est juste #, défiler vers le haut
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
          return
        }

        // Sinon, défiler vers l'élément ciblé
        const targetElement = document.querySelector(href)
        if (targetElement) {
          // Calculer la position avec un décalage adapté selon la taille de l'écran
          const isMobile = window.innerWidth < 640
          const headerOffset = isMobile ? 60 : 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Appliquer les correctifs spécifiques aux navigateurs
    applyBrowserSpecificFixes()

    // Ajouter l'écouteur d'événements
    document.body.addEventListener("click", handleSmoothScroll)

    // Ajuster le comportement de défilement sur mobile
    const adjustMobileScrolling = () => {
      const isMobile = window.innerWidth < 640
      if (isMobile) {
        // Désactiver temporairement le snap sur mobile pour les sections problématiques
        const problemSection = document.getElementById("problem")
        const solutionSection = document.getElementById("solution")

        if (problemSection) problemSection.style.scrollSnapAlign = "none"
        if (solutionSection) solutionSection.style.scrollSnapAlign = "none"

        // Réactiver après le chargement complet
        setTimeout(() => {
          if (problemSection) problemSection.style.scrollSnapAlign = "start"
          if (solutionSection) solutionSection.style.scrollSnapAlign = "start"
        }, 1000)
      }
    }

    adjustMobileScrolling()
    window.addEventListener("resize", adjustMobileScrolling)

    // Nettoyer les écouteurs d'événements
    return () => {
      document.body.removeEventListener("click", handleSmoothScroll)
      window.removeEventListener("resize", adjustMobileScrolling)
    }
  }, [])

  return null
}
