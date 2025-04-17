"use client"
import { Ban, Lightbulb, Target, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  containerVariants,
  fadeInVariants,
  slideUpVariants,
  listContainerVariants,
  listItemVariants,
} from "@/lib/motionVariants"

export function MethodSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      id="method"
      className="bg-[#F5E6D3] py-20 md:py-28 text-[#2A2A2A]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="method__content max-w-4xl mx-auto">
          <motion.h3
            className="font-heading text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-[#1A1A1A] text-center"
            variants={fadeInVariants}
          >
            La clé : Comprendre pour ne plus avoir à lutter.
          </motion.h3>

          <motion.div className="method__points space-y-6 md:space-y-8 mb-12 md:mb-16" variants={listContainerVariants}>
            <motion.div
              className="method__point flex items-start bg-blanc-purete p-6 rounded-lg shadow-md border-l-4 border-rouge-liberation transition-shadow hover:shadow-lg"
              variants={listItemVariants}
            >
              <Ban className="h-8 w-8 mr-4 md:mr-6 text-rouge-liberation flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg text-gris-sagesse space-y-2">
                <p>
                  Il ne s'agit pas d'éviter l'alcool par peur.
                  <br />
                  Ni de serrer les dents pour résister aux pulsions jour après jour. <strong>C'est épuisant.</strong>
                </p>
                <p>
                  Ni de mener une guerre intérieure permanente.
                  <br />
                  (Crois-moi, après <strong>plus de 1000 jours libéré(e)</strong> de ça, je sais la différence.)
                </p>
                <p className="italic text-sm text-gris-sagesse/80 mt-3">
                  (<em>Ni de rester dans le regret, la honte, le doute à vie.</em>)
                </p>
              </div>
            </motion.div>

            <motion.div
              className="method__point flex items-start bg-blanc-purete p-6 rounded-lg shadow-md border-l-4 border-yellow-400 transition-shadow hover:shadow-lg"
              variants={listItemVariants}
            >
              <Lightbulb className="h-8 w-8 mr-4 md:mr-6 text-yellow-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg text-gris-sagesse space-y-2">
                <p>
                  Mon approche est différente.
                  <br />
                  Elle vise à <strong>éteindre le désir à la source</strong>.
                </p>
                <p>
                  L'objectif n'est pas de t'apprendre à vivre <em>avec</em> une envie latente en te considérant comme
                  *"malade à vie"*.
                </p>
                <p>
                  L'objectif est <strong>d'éteindre cette envie pour de bon</strong>, pour que tu redeviennes
                  simplement... toi. Libre.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="method__point flex items-start bg-blanc-purete p-6 rounded-lg shadow-md border-l-4 border-yellow-400 transition-shadow hover:shadow-lg"
              variants={listItemVariants}
            >
              <Target className="h-8 w-8 mr-4 md:mr-6 text-yellow-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg text-gris-sagesse space-y-2">
                <p>Je ne vais pas t'apprendre à "tenir bon".</p>
                <p>
                  Je vais t'aider à <strong>comprendre si profondément</strong> la nature de l'alcool et de l'addiction
                  que l'envie de boire <strong>perdra son sens</strong>.
                </p>
                <p>
                  On va déconstruire ensemble l'idée que l'alcool *"aide"*, *"apaise"* ou *"comble"* quoi que ce soit.
                  <br />
                  Tu verras qu'il crée souvent l'inconfort même qu'il prétend soulager.
                </p>
                <p>
                  L'objectif ?<br />
                  Que la question de boire ou ne pas boire <strong>ne se pose même plus</strong> dans ton quotidien.
                  <br />
                  Que ça devienne <strong>non pertinent</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-noir-profond text-blanc-purete p-6 rounded-lg shadow-md my-12 md:my-16"
            variants={slideUpVariants}
          >
            <h4 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-yellow-400">
              Tu vas apprendre à :
            </h4>
            <motion.ul className="space-y-3 text-base md:text-lg" variants={listContainerVariants}>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Créer un environnement qui <strong>facilite</strong> ta sobriété.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Identifier les déclencheurs et surtout <strong>la logique erronée</strong> qui t'amènent à boire.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <strong>Démystifier</strong> l'alcool pour qu'il perde son pouvoir sur toi.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Reconnecter avec tes <strong>vraies ressources intérieures</strong> pour gérer les émotions et le
                  stress.
                </span>
              </motion.li>
              <motion.li className="flex items-start" variants={listItemVariants}>
                <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Reconstruire une <strong>identité alignée</strong> avec la vie <strong>claire et sereine</strong> que
                  tu veux vivre.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="text-center text-base md:text-lg text-[#2A2A2A] my-12 md:my-16 space-y-3 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            <p>Mon accompagnement est là pour ça.</p>
            <p>Pas pour te faire lutter.</p>
            <p>
              Mais pour provoquer ce <strong>déclic de compréhension</strong> qui mène à une sobriété stable, naturelle,
              et <strong>paisible de façon permanente.</strong>
            </p>
          </motion.div>

          <motion.div
            className="text-center text-base md:text-lg text-[#2A2A2A] my-12 md:my-16 space-y-3 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            <p>
              Grâce à des outils concrets, alliant <strong>clarté mentale</strong>, <strong>présence à soi</strong> et{" "}
              <strong>gestion émotionnelle</strong>,
            </p>
            <p>tu vas découvrir une manière nouvelle d'être en lien avec toi-même,</p>
            <p>
              et une sobriété <strong>qui ne repose plus sur l'effort</strong>, mais sur une{" "}
              <strong>compréhension libératrice</strong>.
            </p>
          </motion.div>

          <motion.div
            className="text-center text-base md:text-lg text-[#2A2A2A] mt-12 md:mt-16 space-y-3 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            <p>Avec cette approche, j'ai accompagné des dizaines de personnes</p>
            <p>qui pensaient être condamnées à se battre toute leur vie.</p>
            <p>
              Mais le combat cesse quand on <strong>comprend la nature de l'adversaire</strong> (l'illusion)
              <br />
              et qu'on arrête de lui donner du pouvoir.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
