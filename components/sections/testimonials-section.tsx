"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { containerVariants, fadeInVariants } from "@/lib/motionVariants"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      quote: "Avant de travailler avec Pierre, j'étais désespérée. Aujourd'hui, je suis libre et sereine.",
      author: "Julie, 34 ans - Paris",
      image: "/img/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      quote: "Sa méthode m'a permis de comprendre mes émotions et de sortir du cycle infernal de l'alcool.",
      author: "Marc, 42 ans - Lyon",
      image: "/img/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      quote: "Deux ans après, ma sobriété est naturelle. Ce n'est plus un combat, mais ma nouvelle façon de vivre.",
      author: "Sophie, 39 ans - Bordeaux",
      image: "/img/placeholder.svg?height=200&width=200",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="bg-noir-profond text-blanc-purete py-20 sm:py-24 lg:py-28"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="testimonials__content max-w-5xl mx-auto">
          <motion.h2
            className="text-center mb-12 text-yellow-400 text-3xl sm:text-3xl lg:text-4xl font-bold"
            variants={fadeInVariants}
          >
            Ils ont transformé leur vie :
          </motion.h2>

          {/* Slider de témoignages */}
          <motion.div className="relative max-w-3xl mx-auto mb-16" variants={fadeInVariants}>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg">
                      <div className="p-6 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-yellow-400">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            sizes="96px"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESEHEhMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AmeMuJLzT1nLa6XuSNFJLbxnqgLe9j8qiiiA//9k="
                          />
                        </div>
                        <p className="text-xl italic mb-4 text-center">{testimonial.quote}</p>
                        <p className="text-yellow-400 font-bold text-center">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrôles du slider */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-noir-profond/80 text-blanc-purete rounded-full p-2 hover:bg-rouge-liberation/80 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-noir-profond/80 text-blanc-purete rounded-full p-2 hover:bg-rouge-liberation/80 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-yellow-400" : "bg-white/30"
                  } transition-colors`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="text-center" variants={fadeInVariants}>
            <CTAButton variant="testimonial" pulse={true} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
