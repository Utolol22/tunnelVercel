// Variants de base pour les animations de conteneur
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.3,
      ease: "easeIn",
    },
  },
}

// Variants pour les éléments qui apparaissent en fondu
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui glissent depuis la gauche
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui glissent depuis la droite
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui montent depuis le bas
export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui descendent depuis le haut
export const slideDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui apparaissent avec un effet de zoom
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

// Variants pour les éléments qui pulsent
export const pulseVariants = {
  hidden: { opacity: 0.9, scale: 1 },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

// Variants pour les éléments avec délai personnalisé
export const createDelayedVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
})

// Variants pour les listes avec effet séquentiel
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

export const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 5,
    transition: { duration: 0.2, ease: "easeIn" },
  },
}
