import { RefreshCw, Search, Sprout, Flame, Coffee } from "lucide-react"

export function ProgramSection() {
  return (
    <section id="program" className="bg-[#F5E6D3] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="program__content max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 text-[#1A1A1A]">
            Voilà comment on avance ensemble.
          </h2>
          <div className="program__intro text-base md:text-lg text-center mb-10 md:mb-12 max-w-3xl mx-auto space-y-3 text-[#2A2A2A]">
            <p>
              Chaque personne est unique.
              <br />
              Il n'y a pas de plan rigide.
            </p>
            <p>
              Mais au fil du temps, j'ai identifié des <strong>étapes clés de transformation</strong>.
            </p>
            <p>
              Je suis là pour t'aider à les traverser, <strong>à ton rythme</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* PHASE 1 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <RefreshCw className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 1 : Jour 0 – Ancrage et Sécurité</h3>
              </div>
              <p className="text-[#2A2A2A] italic mb-3">(Arrêt de l'alcool dès le début, avec soutien)</p>
              <p className="text-[#2A2A2A]">
                On pose les bases : faire le point, sécuriser l'environnement, créer un espace de confiance pour
                démarrer.
              </p>
            </div>

            {/* PHASE 2 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Search className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 2 : Comprendre la Mécanique du Piège</h3>
              </div>
              <p className="text-[#2A2A2A]">
                On démonte les illusions sur l'alcool.
                <br />
                On observe les déclencheurs, les pensées automatiques, les émotions liées, pour comprendre comment le
                cycle fonctionne spécifiquement pour toi.
              </p>
            </div>

            {/* PHASE 3 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Sprout className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 3 : Éteindre le Désir par la Clarté</h3>
              </div>
              <p className="text-[#2A2A2A]">
                C'est le cœur du processus : intégrer profondément la compréhension que l'alcool n'apporte rien de
                positif.
                <br />
                C'est là que le désir commence à s'éteindre naturellement.
                <br />
                On renforce les nouvelles perspectives.
              </p>
            </div>

            {/* PHASE 4 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Flame className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 4 : Renforcer les Ressources Intérieures</h3>
              </div>
              <p className="text-[#2A2A2A]">
                Maintenant que l'alcool perd son attrait, on se tourne vers tes vraies forces : comment gérer le stress,
                les émotions, les relations, sainement, sans béquille.
                <br />
                On explore tes aspirations profondes.
              </p>
            </div>

            {/* PHASE 5 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Coffee className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 5 : Incarner la Vie Sobre et Alignée</h3>
              </div>
              <p className="text-[#2A2A2A]">
                On consolide la nouvelle identité : celle d'une personne libre, qui n'a plus besoin de l'alcool.
                <br />
                On ancre les nouvelles habitudes de vie et de pensée pour un épanouissement durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
