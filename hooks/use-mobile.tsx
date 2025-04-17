"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", checkMobile)
    checkMobile() // Initial check

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
