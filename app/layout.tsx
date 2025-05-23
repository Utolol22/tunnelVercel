import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { BackToTop } from "@/components/ui/back-to-top"
import { StickyCTA } from "@/components/ui/sticky-cta"
import { FloatingCTA } from "@/components/ui/floating-cta"
import { ProgressBar } from "@/components/ui/progress-bar"
import { MicroPopup } from "@/components/ui/micro-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uto - Provoque ton délic",
  description: "Tunnel de vente pour la chaîne YouTube Uto",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <ProgressBar />
          {children}
          <StickyCTA />
          <FloatingCTA />
          <MicroPopup />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
