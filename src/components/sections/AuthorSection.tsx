import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // Importer icône

export function AuthorSection() {
  return (
    <section 
      id="author" 
      className="bg-noir-profond text-blanc-purete py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="author__content flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Author Image */}
          <div className="author__image flex-shrink-0 w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400/60 mx-auto md:mx-0">
            <Image
              src="/img/Portrait pierre Pro Sourire.png" // Remplacé par la nouvelle image
              alt="Portrait de Pierre"
              width={320} // Provide appropriate width
              height={320} // Provide appropriate height
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Author Text Content */}
          <div className="author__text flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8 text-yellow-400">
              ✋ J'ai connu ce combat. J'ai trouvé la paix.
            </h2>
            <div className="text-base md:text-lg space-y-4 md:space-y-5 mb-8 text-blanc-purete/90">
              <p>
                Pendant des années, j'ai cru devoir lutter contre l'alcool.<br/>
                J'alternais contrôle et rechutes, prisonnier d'un cycle épuisant.
              </p>
              <p>
                J'ai essayé la volonté. Elle a cédé. Maintes fois.
              </p>
              <p>
                J'ai aussi exploré d'autres chemins, mais je me sentais parfois <strong>encore plus perdu(e)</strong>,<br/> 
                catalogué(e) comme *"malade à vie"*, sans trouver la clé personnelle pour <strong>sortir réellement du mécanisme mental</strong>.
              </p>
              <p>
                Ce n'est pas la force qui m'a libéré, ni le fait de me voir comme *"impuissant"*. <br/>C'est la <strong>compréhension</strong>. <br/>
                Le jour où j'ai <em>vraiment</em> compris la nature du piège, l'illusion derrière le prétendu plaisir ou soulagement. <br/>
                Le jour où j'ai vu l'alcool pour ce qu'il est : <strong>un poison qui ne résout rien et crée ses propres problèmes</strong>.
              </p>
              <p className="font-semibold text-yellow-400">
                Ce <strong>déclic mental</strong>, cette <strong>clarté</strong>, a tout changé.<br/>La lutte s'est arrêtée car <strong>l'envie avait disparu.</strong>
              </p>
            </div>
            <hr className="border-yellow-400/30 my-6 md:my-8" /> 
            <div className="text-base md:text-lg space-y-4 md:space-y-5 mb-8 text-blanc-purete/90">
              <p>
                Ce que j'ai trouvé, ce n'est pas une solution miracle.<br/>
                C'est un chemin basé sur la <strong>lucidité</strong> et la <strong>reconnexion à ses propres ressources</strong>.
              </p>
              <p>
                Un chemin qui demande de l'honnêteté, oui,<br/>mais qui est <strong>profondément libérateur</strong>.
              </p>
              <p>
                Aujourd'hui, après <strong>plus de 1000 jours d'une sobriété devenue naturelle et paisible</strong>,<br/>
                j'accompagne des personnes comme toi à :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 text-blanc-purete">
                <li>Sortir du cycle <strong>en comprenant enfin sa logique</strong>.</li>
                <li><strong>Retrouver leur souveraineté</strong> intérieure.</li>
                <li>Construire une vie où la sobriété n'est <strong>plus un combat, mais une évidence.</strong></li>
              </ul>
            </div>
             <hr className="border-yellow-400/30 my-6 md:my-8" />
             <div className="text-base md:text-lg space-y-4 mb-8 text-blanc-purete/90">
              <p>
                Je ne suis pas là pour te juger ou te dire quoi faire.<br/>
                Je suis là pour <strong>partager mon expérience</strong>,<br/>
                t'aider à trouver ta propre clarté,<br/>
                te soutenir,<br/>
                et te transmettre les <strong>outils et la posture mentale</strong> qui rendent la <strong>liberté possible et durable.</strong>
              </p>
              <p className="font-semibold mt-6">
                Si tu ressens que c'est le moment,<br/>
                je suis là.
              </p>
            </div>
             {/* CTA Button */}
            <div className="mt-10 text-center md:text-left">
              <Link href="#calendly"> {/* Changed link to Calendly section for clarity */}
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group"
                >
                  Discutons de votre déclic (Appel Offert)
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 