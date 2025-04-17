import { Sunrise, Feather, Smile, Bird } from "lucide-react"

export function TransformationSection() {
  return (
    <section id="transformation" className="bg-noir-profond py-16 md:py-24 text-blanc-purete relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-8 md:mb-10 text-blanc-purete uppercase tracking-wide">
            Imagine-toi dans un an.
          </h2>

          <div className="flex flex-col gap-5 md:gap-7 max-w-3xl mx-auto">
            <div className="flex items-start bg-gray-800/60 p-5 rounded-md shadow-sm transition-shadow hover:shadow-md border-l-4 border-yellow-500">
              <Sunrise className="h-6 w-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg space-y-2">
                <p>
                  Tu te réveilles le matin avec <strong>l'esprit clair</strong>.
                </p>
                <p>Pas de brouillard, pas de honte, pas de souvenirs flous.</p>
                <p>Juste toi, ici, maintenant.</p>
              </div>
            </div>

            <div className="flex items-start bg-gray-800/60 p-5 rounded-md shadow-sm transition-shadow hover:shadow-md border-l-4 border-yellow-500">
              <Feather className="h-6 w-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg space-y-2">
                <p>
                  L'alcool ne te manque plus.
                  <br />
                  Non pas par effort, mais parce que l'idée même te semble <strong>étrange, sans intérêt</strong>.
                </p>
                <p>
                  Tu ressens une <strong>confiance sereine</strong>, une <strong>joie tranquille</strong> d'être
                  simplement toi.
                </p>
                <p className="italic text-sm text-gray-300/80 mt-2">
                  (<em>Et oui, ta santé et tes finances te remercient aussi !</em>)
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-800/60 p-5 rounded-md shadow-sm transition-shadow hover:shadow-md border-l-4 border-yellow-500">
              <Smile className="h-6 w-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg space-y-2">
                <p>Tu sais mieux accueillir ce qui te traverse, pensées et émotions, sans te laisser emporter.</p>
                <p>Tu sais poser des limites saines et rester là, avec toi, même quand c'est inconfortable.</p>
                <p>
                  Tu as <strong>retrouvé tes propres ressources intérieures.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-800/60 p-5 rounded-md shadow-sm transition-shadow hover:shadow-md border-l-4 border-yellow-500">
              <Bird className="h-6 w-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="text-base md:text-lg space-y-2">
                <p>Et surtout… tu ne vis plus dans le doute et la négociation permanente.</p>
                <p>Tu n'as plus à cacher, à compenser, à t'excuser.</p>
              </div>
            </div>
          </div>

          <div className="text-base md:text-lg text-center py-6 px-6 bg-gray-800/70 border border-yellow-500/30 rounded-lg space-y-2 mt-10 md:mt-14 text-gray-200 max-w-3xl mx-auto">
            <p>
              Ta vie <strong>n'est</strong> pas devenue parfaite (la vie est la vie !).
            </p>
            <p>
              Mais <strong>ta relation à toi-même</strong> s'est apaisée. Elle est{" "}
              <strong>vivante. Claire. Honnête.</strong>
            </p>
            <p>
              Et elle <strong>t'appartient enfin, totalement.</strong>
            </p>
          </div>

          <div className="text-center text-base md:text-lg italic text-gray-300 mt-8 md:mt-10">
            <p>Si cette vision te parle…</p>
            <p>C'est exactement là où je peux t'aider à aller.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
