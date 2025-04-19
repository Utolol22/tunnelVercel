"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, ArrowRightCircle, Quote, X, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { CTAButton } from "@/components/ui/cta-button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Données des témoignages - Réorganisées avec Laetitia en premier
const testimonials = [
  {
    id: 2,
    name: "Nico",
    info: "10 mois d'arrêt",
    quote:
      "Grâce à Uto, j'ai complètement changé mon rapport à l'alcool et ma vision de cette substance... L'accompagnement empathique et attentionné qu'il a eu depuis le départ, ont été déterminants dans mon arrêt depuis 10 mois à présent, ce que je n'aurais jamais cru possible...",
    image: "/img/testimonial-2.png",
    emojis: true,
    highlighted: "J'ai complètement changé mon rapport à l'alcool, ce que je n'aurais jamais cru possible.",
    showFullImage: true,
  },
  {
    id: 4, // Gardé l'ID original pour maintenir la cohérence
    name: "Laetitia",
    info: "8 mois d'abstinence",
    quote:
      "Quand j'ai rencontré Pierre, je savais déjà que cesser de boire était la seule option possible. L'alcool était un refuge et grâce à Pierre, je l'ai perçu comme une prison. Je me sens libre et vivante. C'est une évidence je ne peux plus boire et je n'en ai plus envie.",
    fullQuote: `Quand j'ai rencontré Pierre, je savais déjà que cesser de boire était la seule option possible. Ma vie était un enfer. Je parvenais à l'abstinence mais un moment difficile ou au contraire une euphorie et je revenais à la bouteille. Ma dépression et mon anxiété ne cessaient de se creuser.

L'alcool était un refuge et grâce à Pierre, je l'ai perçu comme une prison. Dans sa méthode, Pierre n'impose rien ; il n'exige pas une façon de penser, de faire. C'est un réel accompagnement car il vous amène à réfléchir, questionner, trouver les solutions seul au fond de soi car c'est là qu'elles sont. Ce cheminement sert non seulement pour l'alcool mais dans tout domaine de la vie. Il ne donne pas le poisson au mort de faim, il lui apprend à pêcher.

Pierre est comme le tuteur qui permet à la plante de pousser droit. Je ne pensais pas qu'une personne beaucoup plus jeune que moi pourrait m'ouvrir à ce point. C'est une aide discrète mais profonde et présente. Je suis reconnaissante à l'univers d'avoir croisé Pierre sur mon chemin : une oreille attentive, bienveillante, qui comprend car l'a vécu, empathique. Je suis à 8 mois d'abstinence total.

Je traverse encore des troubles émotionnels mais grâce à ce travail, l'alcool n'est pas une échappatoire envisageable. Je dirai même que je ne cherche plus d'échappatoire, de fuite. Le travail avec Pierre m'a permis de déconstruire des schémas mentaux et d'en construire d'autres, de rencontrer mon égo. Son enthousiasme, son caractère passionné vous enclin à faire vos propres recherches, à comprendre. Mon regard a changé, et en seulement 8 mois, beaucoup de chose ont suivi que ce soit avec mes enfants, mon entourage, ce que je dégage, mon travail et la façon dont j'envisage l'avenir. Je me fais confiance et ne reste plus dans des situations non satisfaisantes, je me sens libre et vivante.

Il y a encore du travail, mais par rapport à l'alcool, je n'ai plus du tout à gérer de négociations, c'est une évidence je ne peux plus boire et je n'en ai plus envie. Je pourrai en parler des heures mais pour résumé, Pierre m'a non seulement permis de changer ma perception de l'alcool mais aussi celui de la vie, de ma vie.`,
    image: "/img/testimonial-4.png",
    hasFullStory: true,
    highlighted:
      "Je me fais confiance et ne reste plus dans des situations non satisfaisantes, je me sens libre et vivante.",
    showFullImage: true,
    showAsMiniature: true, // Nouvelle propriété pour afficher comme miniature
  },
  {
    id: 1,
    name: "Marion",
    info: "Accompagnement de 6 mois",
    quote:
      "Pierre transmet naturellement la motivation à se remettre dans une dynamique de vie et c'est concret, par le corps, la compréhension de soi. L'accompagnement qu'il propose inspire, nourris et change le quotidien. Merci pour les ressources qui changent la Vie.",
    image: "/img/testimonial-1.png",
    highlighted: "L'accompagnement qu'il propose inspire, nourris et change le quotidien.",
    showFullImage: true,
  },
  {
    id: 3,
    name: "Client(e)",
    info: "Transformation personnelle",
    quote:
      "Pierre m'a permis d'impulser dans ma vie une énergie constructive en accord avec ma personnalité! Il sait déceler les endroits où on a besoin de se soutenir au quotidien et donne les outils adaptés, efficaces et simple à mettre en place. Il a beaucoup de cordes à son arc, une sacré expérience de vie qu'il met au service de l'accompagnement.",
    image: "/img/testimonial-3.png",
    highlighted: "Il sait déceler les endroits où on a besoin de se soutenir et donne les outils adaptés.",
    showFullImage: true,
  },
]

// Variants pour les animations Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Hook pour détecter quand la section est visible
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Fonction pour ouvrir le modal avec le témoignage complet
  const openFullStory = (testimonial: (typeof testimonials)[0]) => {
    setSelectedTestimonial(testimonial)
    setOpenModal(true)
  }

  // Effet pour initialiser les animations GSAP
  useEffect(() => {
    if (!sectionRef.current) return

    // Animation du titre
    gsap.fromTo(
      ".testimonials-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      },
    )

    // Animation des citations mises en valeur
    if (highlightsRef.current) {
      const highlights = highlightsRef.current.querySelectorAll(".highlight-quote")
      gsap.fromTo(
        highlights,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        },
      )
    }

    // Animation du carrousel
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }

    // Animation du CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }

    return () => {
      // Nettoyer les ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Fonction pour naviguer dans le carrousel
  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section
      ref={(el) => {
        sectionRef.current = el
        ref(el)
      }}
      id="testimonials"
      className="bg-noir-profond text-blanc-purete py-20 md:py-28 relative overflow-hidden"
    >
      {/* Overlay subtil pour ajouter de la profondeur */}
      <div className="absolute inset-0 bg-gradient-radial from-noir-profond/0 to-noir-profond/80 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="testimonials__content max-w-5xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Titre de la section */}
          <motion.h2
            className="testimonials-title text-center mb-12 text-yellow-400 text-3xl sm:text-3xl lg:text-4xl font-bold"
            variants={itemVariants}
          >
            Leurs Mots, Leur Transformation :
          </motion.h2>

          {/* Citations mises en valeur - Utiliser les deux premiers témoignages (dont Laetitia maintenant) */}
          <div ref={highlightsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {testimonials.slice(0, 2).map((testimonial) => (
              <motion.div
                key={`highlight-${testimonial.id}`}
                className="highlight-quote bg-white/5 p-6 rounded-xl border border-yellow-400/30 relative"
                variants={itemVariants}
              >
                <Quote className="absolute top-4 left-4 w-8 h-8 text-yellow-400/30 -z-10" />
                <p className="text-xl italic text-blanc-purete mb-4 relative z-10">"{testimonial.highlighted}"</p>
                <p className="text-yellow-400 font-medium text-right">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Carrousel de témoignages */}
          <div ref={carouselRef} className="relative mb-16 w-full overflow-hidden">
            <div className="overflow-hidden rounded-xl w-full">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white/5 rounded-xl overflow-hidden border border-rouge-liberation/20 shadow-xl">
                      <div className="p-6 flex flex-col items-center">
                        {/* Affichage de la capture d'écran complète */}
                        {testimonial.showFullImage ? (
                          <div className="w-full mb-6 rounded-lg overflow-hidden border border-gray-700 shadow-md">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={`Témoignage de ${testimonial.name}`}
                              width={600}
                              height={400}
                              className="w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-yellow-400 shadow-glow">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Contenu du témoignage */}
                        <div className="text-center w-full px-2 sm:px-4">
                          <div className="flex items-center justify-center mb-4">
                            <h3 className="text-xl font-bold text-blanc-purete">{testimonial.name}</h3>
                            {testimonial.emojis && (
                              <div className="ml-2 flex">
                                <span className="text-2xl mr-1">👍</span>
                                <span className="text-2xl">😊</span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-yellow-400 mb-6">{testimonial.info}</p>

                          {/* Pour Laetitia, afficher une miniature cliquable au lieu du texte complet */}
                          {testimonial.showAsMiniature ? (
                            <div className="flex flex-col items-center">
                              <p className="text-lg italic mb-4">"{testimonial.quote.substring(0, 100)}..."</p>
                              <button
                                onClick={() => openFullStory(testimonial)}
                                className="flex items-center justify-center mx-auto text-yellow-400 hover:text-yellow-300 transition-colors bg-white/5 px-3 py-2 sm:px-4 rounded-lg border border-yellow-400/30 hover:bg-white/10 text-sm sm:text-base w-full sm:w-auto"
                              >
                                <span className="mr-2">Lire le témoignage complet</span>
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            testimonial.hasFullStory && (
                              <button
                                onClick={() => openFullStory(testimonial)}
                                className="flex items-center justify-center mx-auto text-yellow-400 hover:text-yellow-300 transition-colors"
                              >
                                <span className="mr-2">Lire l'histoire complète</span>
                                <ArrowRightCircle className="w-5 h-5" />
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrôles du carrousel */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1 sm:-translate-x-2 bg-noir-profond/80 text-blanc-purete rounded-full p-1 sm:p-2 hover:bg-rouge-liberation/80 transition-colors z-20"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1 sm:translate-x-2 bg-noir-profond/80 text-blanc-purete rounded-full p-1 sm:p-2 hover:bg-rouge-liberation/80 transition-colors z-20"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-yellow-400" : "bg-white/30"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div ref={ctaRef} className="text-center" variants={itemVariants}>
            <CTAButton
              variant="testimonial"
              pulse={true}
              text="Rejoignez-les dans leur transformation (Appel Gratuit)"
              href="https://calendly.com/uto-ias"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Modal pour le témoignage complet */}
      <AnimatePresence>
        {openModal && selectedTestimonial && (
          <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent className="bg-blanc-purete text-noir-profond max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rouge-liberation">{selectedTestimonial.name}</span>
                  <span className="text-sm text-yellow-400">{selectedTestimonial.info}</span>
                </DialogTitle>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                {selectedTestimonial.fullQuote.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gris-sagesse leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
