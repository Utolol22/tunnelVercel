import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SnapSectionProps {
  children: ReactNode
  id?: string
  className?: string
  disableSnap?: boolean
}

export function SnapSection({ children, id, className, disableSnap = false }: SnapSectionProps) {
  return (
    <section id={id} className={cn(disableSnap ? "" : "snap-section", className)}>
      {children}
    </section>
  )
}
