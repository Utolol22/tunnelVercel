import React from 'react';
import { Handshake, BrainCircuit, Unlock, CheckSquare } from 'lucide-react';

export function MethodSection() {
  return (
    <section id="method" className="bg-sable-introspection py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="method__content max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-6 text-noir-profond">
            Ce que je te propose : La Clarté qui Libère
          </h2>
          <p className="text-center text-base md:text-lg text-gris-sagesse mb-10 md:mb-12">
            Un accompagnement humain, basé sur le vécu, pour <strong>comprendre et désactiver</strong> le mécanisme de l'addiction à la racine.
          </p>

          <h3 className="font-heading text-2xl md:text-3xl text-center font-semibold mb-10 md:mb-12 text-rouge-liberation">
            Ce qui rend ma méthode différente :
          </h3>

          <div className="method__points grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Point 1 */}
            <div className="method__point bg-blanc-purete p-6 rounded-lg shadow-md border-t-4 border-rouge-liberation transition-shadow hover:shadow-lg">
              <h4 className="font-heading text-lg md:text-xl font-semibold mb-4 text-noir-profond flex items-center">
                <Handshake className="h-5 w-5 mr-3 text-rouge-liberation flex-shrink-0" />
                🤝 Un Accompagnement par Quelqu'un qui Est Passé par Là
              </h4>
              <p className="text-sm md:text-base text-gris-sagesse leading-relaxed">
                Je connais les doutes, les peurs, les rechutes.<br/>
                Mais j'ai aussi trouvé la sortie <strong>définitive</strong>.<br/>
                Je t'offre une écoute et un soutien <strong>authentiques</strong>.
              </p>
            </div>

            {/* Point 2 */}
            <div className="method__point bg-blanc-purete p-6 rounded-lg shadow-md border-t-4 border-rouge-liberation transition-shadow hover:shadow-lg">
              <h4 className="font-heading text-lg md:text-xl font-semibold mb-4 text-noir-profond flex items-center">
                <BrainCircuit className="h-5 w-5 mr-3 text-rouge-liberation flex-shrink-0" />
                🧠 Focus sur la Compréhension, Pas sur la Volonté
              </h4>
              <p className="text-sm md:text-base text-gris-sagesse leading-relaxed">
                On ne se bat pas contre l'envie.<br/>
                On <strong>démonte les raisons</strong> pour lesquelles l'envie apparaît.<br/>
                Quand la compréhension est profonde, <strong>le désir s'éteint de lui-même</strong>.<br/>
                Pas besoin de volonté surhumaine quand il n'y a plus d'envie !
              </p>
            </div>

            {/* Point 3 */}
            <div className="method__point bg-blanc-purete p-6 rounded-lg shadow-md border-t-4 border-rouge-liberation transition-shadow hover:shadow-lg">
              <h4 className="font-heading text-lg md:text-xl font-semibold mb-4 text-noir-profond flex items-center">
                <Unlock className="h-5 w-5 mr-3 text-rouge-liberation flex-shrink-0" />
                🔓 La Fin de la Lutte Intérieure (et de l'étiquette 'à vie')
              </h4>
              <p className="text-sm md:text-base text-gris-sagesse leading-relaxed">
                Oublie l'idée qu'il faut se battre chaque jour pour le restant de ses jours.<br/>
                Ici, on vise la <strong>libération totale du désir</strong>.<br/>
                Quand l'envie disparaît parce qu'on a compris l'illusion, il n'y a plus de combat à mener.<br/>
                Tu n'es pas *"en convalescence"*, tu es <strong>simplement libre</strong>.
              </p>
            </div>

            {/* Point 4 */}
            <div className="method__point bg-blanc-purete p-6 rounded-lg shadow-md border-t-4 border-rouge-liberation transition-shadow hover:shadow-lg">
              <h4 className="font-heading text-lg md:text-xl font-semibold mb-4 text-noir-profond flex items-center">
                <CheckSquare className="h-5 w-5 mr-3 text-rouge-liberation flex-shrink-0" />
                🌱 Des Outils Concrets pour le Quotidien
              </h4>
              <p className="text-sm md:text-base text-gris-sagesse leading-relaxed">
                Gestion des émotions, clarté mentale, présence à soi...<br/>
                On travaille sur ce qui t'aide à <strong>vivre mieux, ici et maintenant</strong>, sans avoir besoin de fuir dans l'alcool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 