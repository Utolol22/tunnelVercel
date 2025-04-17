// Fonction pour détecter les appareils à faible performance
export function isLowPerformanceDevice() {
  if (typeof window === "undefined") return false

  // Vérifier si l'appareil est mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  // Vérifier si le navigateur est une ancienne version
  const isOldBrowser = !("IntersectionObserver" in window) || !("requestAnimationFrame" in window)

  // Vérifier si l'appareil a une mémoire limitée (si disponible)
  const hasLimitedMemory = "deviceMemory" in navigator && (navigator as any).deviceMemory < 4

  // Vérifier si l'appareil a un processeur lent (si disponible)
  const hasSlowProcessor = "hardwareConcurrency" in navigator && (navigator as any).hardwareConcurrency < 4

  // Retourner true si l'un des critères est rempli
  return isMobile && (isOldBrowser || hasLimitedMemory || hasSlowProcessor)
}

// Fonction pour ajuster les animations en fonction des performances
export function getAnimationSettings(isLowPerformance = false) {
  return {
    duration: isLowPerformance ? 0.2 : 0.5,
    stagger: isLowPerformance ? 0.05 : 0.1,
    scrub: isLowPerformance ? false : 1,
    ease: isLowPerformance ? "power1.out" : "power2.out",
  }
}
