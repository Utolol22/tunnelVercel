"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { containerVariants, fadeInVariants, scaleVariants } from "@/lib/motionVariants"
import { blurDataURLs } from "@/lib/image-blur"
import { Sun, GlassWater, Feather, Heart, Waves, Shield, Sparkles } from "lucide-react"

// Ajouter ce code après les imports de motionVariants:
// Créer une version personnalisée de slideUpVariants qui accepte un délai personnalisé
const staggeredSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: custom * 0.15, // Délai progressif basé sur l'index
    },
  }),
  exit: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

export function FutureVisionSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.section
      ref={ref}
      id="future-vision"
      className="bg-[#F5E6D3] py-20 sm:py-24 lg:py-28 text-[#2A2A2A]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="future-vision__content max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl sm:text-3xl lg:text-4xl text-center mb-10 text-[#1A1A1A]"
            variants={fadeInVariants}
          >
            Imagine-toi dans un an.
          </motion.h2>

          <motion.div className="relative rounded-xl overflow-hidden shadow-xl mb-10" variants={scaleVariants}>
            <Image
              src="/img/liberation.png"
              alt="Libération et nouvelle vie sans alcool"
              width={1200}
              height={800}
              className="w-full"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 50vw)"
              placeholder="blur"
              blurDataURL={blurDataURLs["liberation"]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5E6D3]/30 to-transparent"></div>
          </motion.div>

          <motion.div
            className="text-base sm:text-lg space-y-8 bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-200"
            variants={staggeredSlideUpVariants}
          >
            <motion.p variants={staggeredSlideUpVariants} custom={0}>
              <span className="font-bold text-lg text-rouge-liberation">Visualise ceci :</span>
            </motion.p>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={1}>
              <Sun className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p>
                Tu te réveilles le matin avec <strong>l'esprit cristallin</strong>. Pas de brouillard mental, pas de
                honte lancinante, pas de souvenirs flous. Juste toi, pleinement présent(e), ici et maintenant.
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={2}>
              <GlassWater className="h-5 w-5 text-rouge-liberation mt-1 flex-shrink-0" />
              <p>
                Et l'alcool ? Il devient <strong>étrange, presque incongru</strong>. Il ne te manque plus, non pas par
                effort, mais par évidence. L'idée même de boire te semble désormais distante, comme un film dont tu te
                souviens vaguement.
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={3}>
              <Feather className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p>
                Le <strong>contrôle permanent</strong> qui t'épuisait laisse place à une
                <strong> légèreté authentique</strong>. Tu n'es plus dans la négociation intérieure constante, mais dans
                un espace de choix libre.
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={4}>
              <Heart className="h-5 w-5 text-rouge-liberation mt-1 flex-shrink-0" />
              <p>
                Une <strong>confiance sereine</strong> s'installe, une <strong>joie tranquille</strong> mais profonde
                d'être simplement toi, pleinement présent(e) à ta vie.
                <span className="italic text-sm block mt-2">
                  (Et oui, ta santé et tes finances te remercient aussi !)
                </span>
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={5}>
              <Waves className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p>
                Tu <strong>accueilles</strong> ce qui te traverse – pensées et émotions – sans te laisser submerger. Tu
                navigues dans les vagues de la vie avec une nouvelle stabilité intérieure.
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={6}>
              <Shield className="h-5 w-5 text-rouge-liberation mt-1 flex-shrink-0" />
              <p>
                Tu poses des <strong>limites saines</strong> avec aisance. Tu sais rester là, avec toi-même, même quand
                c'est inconfortable, parce que tu as <strong>retrouvé tes propres ressources intérieures</strong>.
              </p>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={staggeredSlideUpVariants} custom={7}>
              <Sparkles className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p>
                Tu ne vis plus dans le doute et la négociation permanente. Tu n'as plus à cacher, à compenser, à
                t'excuser. Ta vie n'est pas devenue parfaite (la vie reste la vie !). Mais ta{" "}
                <strong>relation à toi-même s'est apaisée</strong>. Elle est vivante. Claire. Honnête.
              </p>
            </motion.div>

            <motion.p
              className="text-center text-lg font-bold text-rouge-liberation mt-8 border-t border-gray-200 pt-6"
              variants={staggeredSlideUpVariants}
              custom={8}
              whileInView={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: 0 } }}
            >
              Et elle t'appartient enfin, totalement.
            </motion.p>
          </motion.div>

          <motion.div className="text-center mt-10" variants={fadeInVariants}>
            <p className="text-xl font-semibold text-rouge-liberation">
              Si cette vision te parle...
              <br />
              C'est exactement là où je peux t'aider à aller.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
