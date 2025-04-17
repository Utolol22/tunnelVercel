interface WaveTransitionProps {
  fromColor: string
  toColor: string
  height?: string
  className?: string
  invert?: boolean
}

export function WaveTransition({
  fromColor,
  toColor,
  height = "40px",
  className = "",
  invert = false,
}: WaveTransitionProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      <div className="absolute inset-0 w-full h-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-full ${invert ? "rotate-180" : ""}`}
          fill={toColor}
          style={{ background: fromColor }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
        </svg>
      </div>
    </div>
  )
}
