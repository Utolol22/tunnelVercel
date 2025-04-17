export interface YouTubeVideoProps {
  videoId: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  height?: string
  className?: string
}

export function YouTubeVideo({
  videoId,
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
  height = "400px",
  className = "",
}: YouTubeVideoProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ height }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&loop=${
          loop ? 1 : 0
        }&controls=${controls ? 1 : 0}&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  )
}
