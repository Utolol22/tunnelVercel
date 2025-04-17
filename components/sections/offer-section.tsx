import { RefreshCw, Search, Sprout, Flame } from "lucide-react"

export function OfferSection() {
  return (
    <section id="offer" className="bg-[#F5E6D3] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="offer__content max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 text-[#1A1A1A]">
            Voilà comment on avance ensemble.
          </h2>
          <div className="offer__intro text-base md:text-lg text-center mb-10 md:mb-12 max-w-3xl mx-auto space-y-3 text-[#2A2A2A]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* PHASE 1 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <RefreshCw className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 1: Clarification</h3>
              </div>
              <ul className="space-y-3 text-[#2A2A2A]">
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Comprendre ton <strong>schéma de consommation</strong> actuel
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Identifier les <strong>déclencheurs</strong> et cycles automatiques
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Repérer les <strong>croyances limitantes</strong> à déconstruire
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Établir un <strong>plan de transformation</strong> personnalisé
                  </span>
                </li>
              </ul>
            </div>

            {/* PHASE 2 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Search className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 2: Compréhension</h3>
              </div>
              <ul className="space-y-3 text-[#2A2A2A]">
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Découvrir les <strong>mécanismes de l'addiction</strong> et du cerveau
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Comprendre la <strong>relation illusoire</strong> avec l'alcool
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Explorer les <strong>besoins fondamentaux</strong> que tu cherches à combler
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Acquérir des <strong>outils de gestion émotionnelle</strong> sains
                  </span>
                </li>
              </ul>
            </div>

            {/* PHASE 3 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Sprout className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 3: Transformation</h3>
              </div>
              <ul className="space-y-3 text-[#2A2A2A]">
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Installer de <strong>nouvelles routines</strong> alignées
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Renforcer ta <strong>confiance et résilience</strong>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Créer des <strong>réponses spécifiques</strong> aux situations sociales
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Développer une <strong>nouvelle relation</strong> à toi-même
                  </span>
                </li>
              </ul>
            </div>

            {/* PHASE 4 */}
            <div className="bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Flame className="w-8 h-8 text-rouge-liberation mr-3" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">Phase 4: Intégration</h3>
              </div>
              <ul className="space-y-3 text-[#2A2A2A]">
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Solidifier ton <strong>identité sans alcool</strong>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Intégrer les <strong>leçons de transformation</strong>
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Ancrer les <strong>nouvelles habitudes</strong> durablement
                  </span>
                </li>
                <li className="flex">
                  <span className="text-rouge-liberation font-bold mr-2">•</span>
                  <span>
                    Cultiver une <strong>vie riche</strong> et épanouissante
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-rouge-liberation/10 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">Ton guide tout au long du processus</h3>
            <p className="text-[#2A2A2A] text-lg">
              J'apporte non seulement une <strong>méthode structurée</strong>,<br /> mais aussi une{" "}
              <strong>présence personnalisée</strong> à chaque étape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
