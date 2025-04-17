import { UserCheck, Lightbulb, Unlock, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DifferentiationSection() {
  return (
    <section id="differentiation" className="bg-noir-profond text-blanc-purete py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="differentiation__content max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 text-blanc-purete">
            Ce que je te propose : <span className="text-yellow-400">La Clarté qui Libère</span>
          </h2>

          <p className="text-center text-lg md:text-xl mb-12">
            Un accompagnement humain, basé sur le vécu,
            <br />
            pour comprendre et désactiver le mécanisme de l'addiction à la racine.
          </p>

          <h3 className="text-2xl md:text-3xl text-center mb-10 text-yellow-400">
            Ce qui rend ma méthode différente :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start mb-4">
                <UserCheck className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                <h4 className="text-xl font-semibold text-yellow-400">
                  Un Accompagnement par Quelqu'un qui Est Passé par Là
                </h4>
              </div>
              <p className="text-blanc-purete/80">
                Je connais les doutes, les peurs, les rechutes.
                <br />
                Mais j'ai aussi trouvé la sortie définitive.
                <br />
                Je t'offre une écoute et un soutien authentiques.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start mb-4">
                <Lightbulb className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                <h4 className="text-xl font-semibold text-yellow-400">
                  Focus sur la Compréhension, Pas sur la Volonté
                </h4>
              </div>
              <p className="text-blanc-purete/80">
                On ne se bat pas contre l'envie.
                <br />
                On démonte les raisons pour lesquelles l'envie apparaît.
                <br />
                Quand la compréhension est profonde, le désir s'éteint de lui-même.
                <br />
                Pas besoin de volonté surhumaine quand il n'y a plus d'envie !
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start mb-4">
                <Unlock className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                <h4 className="text-xl font-semibold text-yellow-400">
                  La Fin de la Lutte Intérieure (et de l'étiquette 'à vie')
                </h4>
              </div>
              <p className="text-blanc-purete/80">
                Oublie l'idée qu'il faut se battre chaque jour pour le restant de ses jours.
                <br />
                Ici, on vise la libération totale du désir.
                <br />
                Quand l'envie disparaît parce qu'on a compris l'illusion, il n'y a plus de combat à mener.
                <br />
                Tu n'es pas "en convalescence", tu es simplement libre.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start mb-4">
                <Tool className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                <h4 className="text-xl font-semibold text-yellow-400">Des Outils Concrets pour le Quotidien</h4>
              </div>
              <p className="text-blanc-purete/80">
                Gestion des émotions, clarté mentale, présence à soi...
                <br />
                On travaille sur ce qui t'aide à vivre mieux, ici et maintenant, sans avoir besoin de fuir dans
                l'alcool.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#calendly">
              <Button variant="default" size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-noir-profond">
                Discutons de ton déclic (Appel Offert)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
