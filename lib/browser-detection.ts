export function getBrowserInfo() {
  if (typeof window === "undefined") {
    return {
      isChrome: false,
      isSafari: false,
      isFirefox: false,
      isMobile: false,
      isWebkit: false,
    }
  }

  const ua = navigator.userAgent.toLowerCase()

  return {
    isChrome: ua.indexOf("chrome") > -1 && ua.indexOf("edge") === -1 && ua.indexOf("opr") === -1,
    isSafari: ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1,
    isFirefox: ua.indexOf("firefox") > -1,
    isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua),
    isWebkit: ua.indexOf("webkit") > -1,
  }
}

export function applyBrowserSpecificFixes() {
  if (typeof window === "undefined") return

  const { isSafari, isMobile } = getBrowserInfo()

  // Correctifs spécifiques pour Safari
  if (isSafari) {
    document.documentElement.classList.add("safari")

    // Correctif pour le problème de hauteur sur iOS Safari
    if (isMobile) {
      const setVh = () => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty("--vh", `${vh}px`)
      }

      setVh()
      window.addEventListener("resize", setVh)
    }
  }

  // Désactiver le scroll snapping sur les appareils à petit écran
  const checkScreenSize = () => {
    if (window.innerHeight < 500 || window.innerWidth < 640) {
      document.documentElement.classList.add("disable-snap")
    } else {
      document.documentElement.classList.remove("disable-snap")
    }
  }

  checkScreenSize()
  window.addEventListener("resize", checkScreenSize)
}
