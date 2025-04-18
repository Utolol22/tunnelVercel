import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Fonction pour désactiver temporairement le scroll snapping
const disableSnapDuringAnimation = () => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("animating")

    // Réactiver après un délai
    setTimeout(() => {
      document.documentElement.classList.remove("animating")
    }, 800)
  }
}

// Fonction pour créer une animation de fade-in depuis le bas
export function fadeInUp(element: Element | null, options = {}) {
  if (!element) return

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

  const defaults = {
    y: isMobile ? 15 : 30,
    opacity: 0,
    duration: isMobile ? 0.4 : 0.6,
    ease: "power2.out",
    scrollTrigger: {
      start: isMobile ? "top 90%" : "top 80%",
      end: isMobile ? "top 70%" : "top 50%",
      scrub: isMobile ? false : 0.5,
      onEnter: disableSnapDuringAnimation,
      onEnterBack: disableSnapDuringAnimation,
    },
  }

  const mergedOptions = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      y: mergedOptions.y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
      scrollTrigger: {
        trigger: element,
        ...mergedOptions.scrollTrigger,
      },
    },
  )
}

// Fonction pour créer une animation de fade-in avec scale
export function fadeInScale(element: Element | null, options = {}) {
  if (!element) return

  const defaults = {
    scale: 0.95,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      start: "top 80%",
      end: "top 40%",
      scrub: 0.5,
      onEnter: disableSnapDuringAnimation,
      onEnterBack: disableSnapDuringAnimation,
    },
  }

  const mergedOptions = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      scale: mergedOptions.scale,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
      scrollTrigger: {
        trigger: element,
        ...mergedOptions.scrollTrigger,
      },
    },
  )
}

// Fonction pour créer une animation de fade-in avec stagger pour les enfants
export function staggerFadeIn(parent: Element | null, childSelector: string, options = {}) {
  if (!parent) return

  const children = parent.querySelectorAll(childSelector)
  if (!children.length) return

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

  const defaults = {
    y: isMobile ? 10 : 20,
    opacity: 0,
    stagger: isMobile ? 0.03 : 0.05,
    duration: isMobile ? 0.4 : 0.6,
    ease: "power2.out",
    scrollTrigger: {
      start: isMobile ? "top 90%" : "top 80%",
      end: isMobile ? "bottom 70%" : "bottom 60%",
      scrub: isMobile ? false : 0.5,
      onEnter: disableSnapDuringAnimation,
      onEnterBack: disableSnapDuringAnimation,
    },
  }

  const mergedOptions = { ...defaults, ...options }

  return gsap.fromTo(
    children,
    {
      y: mergedOptions.y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: mergedOptions.stagger,
      duration: mergedOptions.duration,
      ease: mergedOptions.ease,
      scrollTrigger: {
        trigger: parent,
        ...mergedOptions.scrollTrigger,
      },
    },
  )
}

// Fonction pour nettoyer toutes les animations ScrollTrigger
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
