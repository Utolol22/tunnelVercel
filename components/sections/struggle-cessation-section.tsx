"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, TreesIcon as Lungs, Settings } from "lucide-react"
import { containerVariants, fadeInVariants, slideUpVariants, subtlePulseVariants } from "@/lib/motionVariants"
import { SectionTransition } from "@/components/ui/section-transition"

export function StruggleCessationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      id="struggle-cessation"
      className="bg-[#F5E6D3] py-16 md:py-24 text-[#2A2A2A]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="struggle-cessation__content max-w-4xl mx-auto">
          {/* Titre et premier paragraphe avec animation */}
          <motion.div variants={slideUpVariants}>
            <h2 className="font-heading text-3xl md:text-4xl text-center mb-8 text-rouge-liberation">
              Quand la Lutte Cesse Vraiment
              <span className="block text-2xl md:text-3xl mt-2 text-[#1A1A1A]">
                (Et Pourquoi c'est Mental, Émotionnel et PHYSIQUE)
              </span>
            </h2>
            <p className="text-lg md:text-xl text-center mb-10 text-gris-sagesse max-w-3xl mx-auto">
              Vivre sans alcool comme une bataille constante ? Une privation à vie ? C'est l'impasse épuisante où mène
              souvent la seule force de la volonté, luttant contre un désir qui reste ancré. Tant que tu auras
              l'impression de perdre quelque chose, tu vas galérer...
            </p>
          </motion.div>

          {/* Paragraphe suivant animé */}
          <motion.div className="bg-blanc-purete p-6 rounded-lg shadow-md mb-10" variants={fadeInVariants}>
            <p className="text-base md:text-lg text-gris-sagesse mb-6">
              Mais ce que nous visons ici, c'est une libération plus profonde. Elle commence par la clarté mentale, oui
              : démonter les illusions, comprendre vraiment que l'alcool est un piège qui coûte bien plus qu'il ne
              semble apporter. Quand l'esprit profond intègre cela, une partie du désir perd déjà sa force.
            </p>

            {/* Mise en exergue avec animation pulse subtile */}
            <motion.div
              className="bg-rouge-liberation/10 p-4 rounded-lg border-l-4 border-rouge-liberation mb-6"
              variants={subtlePulseVariants}
            >
              <p className="text-lg md:text-xl font-semibold text-noir-profond text-center">
                Mais le Désir n'est pas que dans la Tête. Il est aussi dans le Corps et les Habitudes.
              </p>
            </motion.div>
          </motion.div>

          {/* Texte suivant animé avec icônes */}
          <motion.div variants={slideUpVariants}>
            <p className="text-base md:text-lg text-gris-sagesse mb-6">
              C'est pourquoi on ne s'arrête pas là. On va explorer :
            </p>

            <div className="space-y-6 mb-10">
              {/* Environnement */}
              <div className="flex items-start bg-blanc-purete p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rouge-liberation/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Settings className="h-6 w-6 text-rouge-liberation" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-noir-profond mb-2">Ton environnement</h3>
                  <p className="text-base md:text-lg text-gris-sagesse">
                    Comment tes routines et habitudes actuelles nourrissent (souvent inconsciemment) le cycle ? On va
                    créer un cadre qui soutient ta nouvelle trajectoire.
                  </p>
                </div>
              </div>

              {/* État intérieur PHYSIQUE */}
              <div className="flex items-start bg-blanc-purete p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rouge-liberation/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="h-6 w-6 text-rouge-liberation" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-noir-profond mb-2">
                    Ton état intérieur PHYSIQUE
                  </h3>
                  <p className="text-base md:text-lg text-gris-sagesse">
                    Le stress chronique, cette tension sourde qui pèse sur le système nerveux, est un moteur puissant de
                    l'addiction. Il crée un "besoin" de soulagement immédiat que l'alcool semble combler. On va
                    travailler à désamorcer ce stress à la source.
                  </p>
                </div>
              </div>

              {/* Ressources CORPORELLES */}
              <div className="flex items-start bg-blanc-purete p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rouge-liberation/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Lungs className="h-6 w-6 text-rouge-liberation" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-noir-profond mb-2">
                    Tes ressources CORPORELLES
                  </h3>
                  <p className="text-base md:text-lg text-gris-sagesse">
                    Tu as en toi une capacité incroyable à réguler tes émotions et ton énergie. Par des pratiques comme
                    la méditation, le travail respiratoire ciblé (oui, on va parler du diaphragme !), tu vas réapprendre
                    à calmer ton système nerveux, à naviguer l'inconfort, à trouver la paix sans béquille chimique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paragraphe de synthèse animé */}
          <motion.div className="bg-blanc-purete p-6 rounded-lg shadow-md mb-10" variants={fadeInVariants}>
            <p className="text-base md:text-lg text-gris-sagesse mb-6">
              Quand la clarté mentale s'associe à un corps qui retrouve son équilibre et à des habitudes qui te
              soutiennent, alors l'envie de boire ne se combat plus : elle se dissout. La pensée peut traverser
              l'esprit, mais elle n'a plus de prise, plus d'urgence. Elle devient juste... du bruit de fond sans
              intérêt. Un vague souvenir...
            </p>

            {/* Phrase finale en exergue avec animation pulse subtile */}
            <motion.div
              className="bg-noir-profond p-5 rounded-lg text-blanc-purete text-center"
              variants={subtlePulseVariants}
            >
              <p className="text-lg md:text-xl font-semibold">
                C'est là que la "sobriété" devient libération naturelle. Une paix retrouvée, dans ta tête et dans ton
                corps.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transition vers la section suivante */}
      <SectionTransition from="#F5E6D3" to="#F5E6D3" />
    </motion.section>
  )
}
