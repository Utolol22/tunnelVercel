"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { containerVariants, fadeInVariants, slideUpVariants } from "@/lib/motionVariants"

export function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      id="benefits"
      className="bg-[#F5E6D3] py-20 md:py-28 text-[#2A2A2A]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="benefits__content max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl text-center mb-10 text-[#1A1A1A]"
            variants={fadeInVariants}
          >
            Pourquoi la Sobriété Devient Facile{" "}
            <span className="text-rouge-liberation">(Quand on Change de Regard)</span>
          </motion.h2>

          <motion.div
            className="text-base md:text-lg mb-12 md:mb-16 space-y-4 bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-200"
            variants={slideUpVariants}
          >
            <p>
              Beaucoup pensent que ne plus boire est une lutte constante.
              <br />
              C'est ce qu'on ressent quand on essaie d'arrêter sans avoir changé sa perception.
            </p>
            <p>
              Mais imagine :
              <br />
              si tu découvres que tu es allergique à un aliment qui te rendait malade depuis des années.
            </p>
            <p>
              Une fois que tu le sais, est-ce que tu luttes chaque jour pour ne pas en manger ?
              <br />
              <strong>Non.</strong>
            </p>
            <p>Tu l'évites simplement, naturellement, parce que tu te sens mieux sans.</p>
            <p>
              Ou pense à ces chaussures magnifiques mais douloureuses.
              <br />
              Une fois que tu as intégré qu'elles te font mal, est-ce que tu ressens une bataille chaque matin pour ne
              pas les remettre ?
            </p>
            <p>Non, tu choisis autre chose, sans effort.</p>
            <p>
              C'est pareil avec l'alcool, une fois le désir déraciné par la compréhension.
              <br />
              L'idée d'y revenir perd son attrait. Ne pas boire devient facile, évident.
            </p>
            <p>La lutte n'existe que tant que le désir illusoire est là.</p>
            <p>
              Mon rôle, fort de mon propre chemin (plus de 1000 jours sans ce combat),
              <br />
              c'est de t'aider à atteindre cette clarté qui éteint le désir.
            </p>
            <p>Ensuite, la sobriété devient une évidence paisible.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
