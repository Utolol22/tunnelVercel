"use client"

export function TransitionImageSection() {
  return (
    <section className="bg-gradient-to-b from-noir-profond to-gray-900 py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animation subtile de fade-in */}
          <div className="transition-opacity duration-1000 ease-in-out opacity-90 hover:opacity-100">
            <div className="bg-gray-700 rounded-lg shadow-xl w-full h-[40vh] md:h-[50vh] flex items-center justify-center">
              <p className="text-white text-center p-4">
                Image de libération
                <br />
                <span className="text-sm italic">(Veuillez ajouter votre image à public/img/liberation.png)</span>
              </p>
            </div>
          </div>

          {/* Élément décoratif optionnel pour renforcer l'effet de transition */}
          <div className="mt-10 w-24 h-0.5 bg-yellow-500/30 mx-auto"></div>
        </div>
      </div>

      {/* Éléments subtils pour renforcer l'effet cinématographique */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-noir-profond opacity-50 pointer-events-none"></div>
    </section>
  )
}
