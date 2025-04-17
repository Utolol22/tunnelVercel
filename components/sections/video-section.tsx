"use client"
import { YouTubeVideo } from "@/components/ui/youtube-video"

export function VideoSection() {
  return (
    <section className="bg-noir-profond py-20 snap-section flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blanc-purete text-center mb-10">
            Découvre mon approche en vidéo
          </h2>
          <div className="video-container mx-auto">
            <YouTubeVideo
              videoId="_1jBhCjJvwo"
              autoplay={false}
              muted={false}
              loop={false}
              controls={true}
              height="500px"
              className="shadow-xl mx-auto w-full max-w-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
