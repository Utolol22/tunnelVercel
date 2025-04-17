import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Fonction pour créer une animation de fade-in depuis le bas
export function fadeInUp(element: Element | null, options = {}) {
  if (!element) return

  const defaults = {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
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
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
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

  const defaults = {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      start: "top 80%",
      end: "bottom 50%",
      scrub: 1,
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
