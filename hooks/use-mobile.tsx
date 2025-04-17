"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fonction pour vérifier si l'appareil est mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Vérifier immédiatement
    checkMobile()

    // Ajouter un écouteur pour les changements de taille d'écran
    window.addEventListener("resize", checkMobile)

    // Nettoyer l'écouteur lors du démontage
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
