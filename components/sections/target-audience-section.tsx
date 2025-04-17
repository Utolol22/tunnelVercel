import { Check, X } from "lucide-react"

export function TargetAudienceSection() {
  return (
    <section id="target-audience" className="bg-noir-profond text-blanc-purete py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Titre et introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Est-ce que cet accompagnement <span className="text-yellow-400 block md:inline">est fait pour toi ?</span>
            </h2>
          </div>

          {/* Grille de comparaison - Utilisation de grid au lieu de colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Colonne "Pas pour toi si..." */}
            <div className="bg-rouge-liberation/20 border-l-4 border-rouge-liberation p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-rouge-liberation">
                Cette méthode n'est pas faite pour toi si...
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <X className="h-6 w-6 text-rouge-liberation mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu cherches une pilule magique</p>
                    <p className="text-blanc-purete/80 mt-1">
                      sans vouloir comprendre les mécanismes profonds de ton addiction.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-rouge-liberation mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu attends que l'arrêt se fasse sans ton implication</p>
                    <p className="text-blanc-purete/80 mt-1">active dans ta propre réflexion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-rouge-liberation mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu n'es pas prêt(e) à remettre en question tes croyances</p>
                    <p className="text-blanc-purete/80 mt-1">sur l'alcool et ce qu'il t'apporte réellement.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-rouge-liberation mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu cherches à modérer ta consommation</p>
                    <p className="text-blanc-purete/80 mt-1">
                      (mon approche vise l'arrêt complet, car c'est la seule vraie libération du piège).
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne "Pour toi si..." */}
            <div className="bg-yellow-400/20 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-400">
                Par contre, elle est faite pour toi si...
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu es VRAIMENT prêt(e)</p>
                    <p className="text-blanc-purete/80 mt-1">à en finir avec ce cycle épuisant.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu as compris que la volonté seule ne suffit pas</p>
                    <p className="text-blanc-purete/80 mt-1">et qu'il faut une autre approche.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu veux comprendre pour te libérer durablement et sans lutte</p>
                    <p className="text-blanc-purete/80 mt-1">
                      et tu es prêt(e) à t'impliquer avec honnêteté et ouverture d'esprit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">
                      Tu es fatigué(e) des approches qui te demandent de te voir comme impuissant(e) ou malade à vie
                    </p>
                    <p className="text-blanc-purete/80 mt-1">
                      et tu sens qu'il doit y avoir une autre voie basée sur la compréhension et la clarté.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tu vises l'arrêt complet</p>
                    <p className="text-blanc-purete/80 mt-1">comme chemin vers une liberté totale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section "La voix intérieure" */}
          <div className="max-w-3xl mx-auto bg-noir-profond/50 p-8 rounded-lg border border-gray-700 relative mt-16">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-noir-profond text-blanc-purete px-4 py-1 rounded-full border border-gray-700 whitespace-nowrap">
              <span className="text-sm">La voix intérieure qui t'empêche d'avancer</span>
            </div>
            <div className="text-center">
              <p className="italic text-rouge-liberation text-lg mb-4">
                "Je veux arrêter, mais je ne veux pas <span className="font-semibold">renoncer à ma vie sociale</span>
                ...
              </p>
              <p className="italic text-rouge-liberation text-lg mb-4">
                Et si <span className="font-semibold">je deviens ennuyeux</span> ? Comment vais-je gérer{" "}
                <span className="font-semibold">le stress et l'anxiété</span> sans cette échappatoire ?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
