import Image from "next/image"

export function FutureVisionSection() {
  return (
    <section id="future-vision" className="bg-[#F5E6D3] py-20 md:py-28 text-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <div className="future-vision__content max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 text-[#1A1A1A]">
            Imagine-toi dans un an.
          </h2>

          <div className="relative rounded-xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/img/liberation.png"
              alt="Libération et nouvelle vie sans alcool"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5E6D3]/30 to-transparent"></div>
          </div>

          <div className="text-base md:text-lg space-y-4 bg-blanc-purete p-6 rounded-lg shadow-md border border-gray-200">
            <p>
              Tu te réveilles le matin avec l'esprit clair.
              <br />
              Pas de brouillard, pas de honte, pas de souvenirs flous.
              <br />
              Juste toi, ici, maintenant.
            </p>
            <p>
              L'alcool ne te manque plus.
              <br />
              Non pas par effort, mais parce que l'idée même te semble étrange, sans intérêt.
            </p>
            <p>Tu n'es plus dans le contrôle permanent, mais dans une légèreté retrouvée.</p>
            <p>
              Tu ressens une confiance sereine, une joie tranquille d'être simplement toi,
              <br />
              pleinement présent(e) à ta vie.
            </p>
            <p className="italic">(Et oui, ta santé et tes finances te remercient aussi !)</p>
            <p>
              Tu sais mieux accueillir ce qui te traverse, pensées et émotions, sans te laisser emporter.
              <br />
              Tu sais poser des limites saines.
            </p>
            <p>
              Tu sais rester là, avec toi, même quand c'est inconfortable,
              <br />
              parce que tu as retrouvé tes propres ressources intérieures.
            </p>
            <p>
              Et surtout... tu ne vis plus dans le doute et la négociation permanente.
              <br />
              Tu n'as plus à cacher, à compenser, à t'excuser.
            </p>
            <p>
              Ta vie n'est pas devenue parfaite (la vie est la vie !).
              <br />
              Mais ta relation à toi-même s'est apaisée. Elle est vivante. Claire. Honnête.
              <br />
              Et elle t'appartient enfin, totalement.
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-xl font-semibold text-rouge-liberation">
              Si cette vision te parle...
              <br />
              C'est exactement là où je peux t'aider à aller.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
