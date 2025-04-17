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
          // Calculer la position avec un petit décalage pour le header
          const headerOffset = 80
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

    // Nettoyer l'écouteur d'événements
    return () => {
      document.body.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
