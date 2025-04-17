interface SectionTransitionProps {
  from: string
  to: string
  height?: string
}

export function SectionTransition({ from, to, height = "5rem" }: SectionTransitionProps) {
  return (
    <div
      className="w-full pointer-events-none"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  )
}
