"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { blurDataURLs } from "@/lib/image-blur"
import { SwipeableCarousel } from "@/components/ui/swipeable-carousel"

export function AuthorSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", checkMobile)
    checkMobile() // Initialisation

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const imageContent = (
    <div className="author__image w-full lg:w-1/2 mb-8 lg:mb-0">
      <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-rouge-liberation/20">
        <Image
          src="/img/pierre-bain.jpeg"
          alt="Pierre, coach en libération de l'alcool"
          width={600}
          height={800}
          className="w-full"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 50vw"
          placeholder="blur"
          blurDataURL={blurDataURLs["pierre-bain"]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/50 to-transparent"></div>
      </div>
    </div>
  )

  const textContent = (
    <div className="author__text w-full lg:w-1/2 text-blanc-purete">
      <div className="space-y-4 text-base sm:text-lg">
        <p>Pendant des années, j'ai cru devoir lutter contre l'alcool.</p>
        <p>J'alternais contrôle et rechutes, prisonnier d'un cycle épuisant.</p>
        <p>J'ai essayé la volonté. Elle a cédé. Maintes fois.</p>
        <p>
          J'ai aussi exploré d'autres chemins, mais je me sentais parfois encore plus perdu(e),
          <br className="hidden sm:block" />
          catalogué(e) comme "malade à vie", sans trouver la clé personnelle pour sortir réellement du mécanisme mental.
        </p>
        <p>
          Ce n'est pas la force qui m'a libéré, ni le fait de me voir comme "impuissant".
          <br className="hidden sm:block" />
          C'est la <strong className="text-rouge-liberation">compréhension</strong>.
        </p>
        <p>
          Le jour où j'ai vraiment compris la nature du piège, l'illusion derrière le prétendu plaisir ou soulagement.
        </p>
        <p>
          Le jour où j'ai vu l'alcool pour ce qu'il est : un poison qui ne résout rien et crée ses propres problèmes.
        </p>
        <p>
          Ce déclic mental, cette clarté, a tout changé.
          <br className="hidden sm:block" />
          La lutte s'est arrêtée car l'envie avait disparu.
        </p>
        <p>
          Ce que j'ai trouvé, ce n'est pas une solution miracle.
          <br className="hidden sm:block" />
          C'est un chemin basé sur la lucidité et la reconnexion à ses propres ressources.
        </p>
        <p>
          Un chemin qui demande de l'honnêteté, oui,
          <br className="hidden sm:block" />
          mais qui est profondément libérateur.
        </p>
        <p>
          Aujourd'hui, après plus de 1000 jours d'une sobriété devenue naturelle et paisible,
          <br className="hidden sm:block" />
          j'accompagne des personnes comme toi à :
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Sortir du cycle en comprenant enfin sa logique.</li>
          <li>Retrouver leur souveraineté intérieure.</li>
          <li>Construire une vie où la sobriété n'est plus un combat, mais une évidence.</li>
        </ul>
        <p>
          Je ne suis pas là pour te juger ou te dire quoi faire.
          <br className="hidden sm:block" />
          Je suis là pour partager mon expérience,
          <br className="hidden sm:block" />
          t'aider à trouver ta propre clarté,
          <br className="hidden sm:block" />
          te soutenir,
          <br className="hidden sm:block" />
          et te transmettre les outils et la posture mentale qui rendent la liberté possible et durable.
        </p>
        <p className="font-semibold text-rouge-liberation">
          Si tu ressens que c'est le moment,
          <br className="hidden sm:block" />
          je suis là.
        </p>
      </div>
    </div>
  )

  return (
    <section id="author" className="bg-gradient-to-b from-[#F5E6D3] to-[#121212] py-20 sm:py-24 lg:py-28 relative">
      {/* Overlay pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/70 to-[#121212] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="author__content max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-3xl lg:text-4xl text-center mb-10 text-blanc-purete">
            <span className="text-rouge-liberation">J'ai connu ce combat.</span> J'ai trouvé la paix.
          </h2>

          {isMobile ? (
            <SwipeableCarousel className="mb-8">{[imageContent, textContent]}</SwipeableCarousel>
          ) : (
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {imageContent}
              {textContent}
            </div>
          )}
        </div>
      </div>

      {/* Transition subtile vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-noir-profond pointer-events-none"></div>
    </section>
  )
}
