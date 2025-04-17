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
        const targetId = href.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Calculer la position avec un décalage adapté selon la taille de l'écran
          const isMobile = window.innerWidth < 640
          const headerOffset = isMobile ? 60 : 80
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerOffset

          // Défiler vers la position calculée
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })

          // Forcer l'activation des animations dans la section cible
          setTimeout(() => {
            const animatedElements = targetElement.querySelectorAll("[data-animate]")
            animatedElements.forEach((el) => {
              el.classList.add("animate-now")
            })
          }, 300) // Petit délai pour laisser le temps au défilement de commencer
        }
      }
    }

    // Appliquer les correctifs spécifiques aux navigateurs
    applyBrowserSpecificFixes()

    // Ajouter l'écouteur d'événements
    document.body.addEventListener("click", handleSmoothScroll)

    // Fonction pour activer les animations des éléments visibles au chargement
    const activateInitialAnimations = () => {
      const viewportHeight = window.innerHeight
      document.querySelectorAll("[data-animate]").forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < viewportHeight && rect.bottom > 0) {
          el.classList.add("animate-now")
        }
      })
    }

    // Activer les animations initiales après un court délai
    setTimeout(activateInitialAnimations, 300)

    // Nettoyer les écouteurs d'événements
    return () => {
      document.body.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
