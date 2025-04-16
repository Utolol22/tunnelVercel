import React from 'react';

export function BonusSection() {
  return (
    <section id="bonus" className="bonus bg-gradient-to-b from-blanc-purete to-noir-profond text-blanc-purete py-24 relative">
      <div className="absolute inset-0 bg-opacity-70 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bonus__content max-w-4xl mx-auto">
          <h2 className="text-center mb-6 text-yellow-400">
            Mais attendez, ce n'est pas tout !
          </h2>
          <p className="bonus__intro text-xl text-center mb-12 font-medium">
            Pour maximiser vos chances de succès, recevez ces outils précieux :<br/>
            Parce que je suis passé par là et que je veux vous donner TOUT ce qui m'a aidé :
          </p>
          
          <div className="bonus__items space-y-6 mb-16">
            <div className="bonus__item flex flex-col md:flex-row items-start bg-white/5 p-6 rounded-lg border border-white/10 shadow-md transition-all hover:-translate-y-1 hover:bg-white/8 hover:shadow-lg">
              <div className="bonus__icon text-4xl mr-8 flex-shrink-0 mb-4 md:mb-0" aria-hidden="true">🎁</div>
              <div className="bonus__details">
                <h3 className="text-yellow-400 mb-2">Bonus 1 : Maîtrisez votre esprit avec la Méditation Simplifiée</h3>
                <p className="bonus__value text-rouge-liberation font-bold mb-3 text-base">Valeur : 197€</p>
                <p className="text-base">Des ateliers pour intégrer une pratique quotidienne simple (même 2 min/jour !) qui révolutionnera votre bien-être émotionnel et mental. Pas d'inquiétude, c'est accessible à tous !</p>
              </div>
            </div>
            
            <div className="bonus__item flex flex-col md:flex-row items-start bg-white/5 p-6 rounded-lg border border-white/10 shadow-md transition-all hover:-translate-y-1 hover:bg-white/8 hover:shadow-lg">
              <div className="bonus__icon text-4xl mr-8 flex-shrink-0 mb-4 md:mb-0" aria-hidden="true">🎁</div>
              <div className="bonus__details">
                <h3 className="text-yellow-400 mb-2">Bonus 2 : Devenez Expert(e) de vos Émotions</h3>
                <p className="bonus__value text-rouge-liberation font-bold mb-3 text-base">Valeur : 247€</p>
                <p className="text-base">Des exercices spécifiques basés sur votre profil pour comprendre votre mécanique émotionnelle unique et enfin reprendre le contrôle.</p>
              </div>
            </div>
            
            <div className="bonus__item flex flex-col md:flex-row items-start bg-white/5 p-6 rounded-lg border border-white/10 shadow-md transition-all hover:-translate-y-1 hover:bg-white/8 hover:shadow-lg">
              <div className="bonus__icon text-4xl mr-8 flex-shrink-0 mb-4 md:mb-0" aria-hidden="true">🎁</div>
              <div className="bonus__details">
                <h3 className="text-yellow-400 mb-2">Bonus 3 : Votre Bibliothèque Personnelle de Sobriété</h3>
                <p className="bonus__value text-rouge-liberation font-bold mb-3 text-base">Valeur : 97€</p>
                <p className="text-base">Accès à mes réflexions, ressources et une liste de livres inspirants sur la sobriété et le développement personnel pour continuer à nourrir votre esprit.</p>
              </div>
            </div>
            
            <div className="bonus__item flex flex-col md:flex-row items-start bg-white/5 p-6 rounded-lg border border-white/10 shadow-md transition-all hover:-translate-y-1 hover:bg-white/8 hover:shadow-lg">
              <div className="bonus__icon text-4xl mr-8 flex-shrink-0 mb-4 md:mb-0" aria-hidden="true">🎁</div>
              <div className="bonus__details">
                <h3 className="text-yellow-400 mb-2">Bonus 4 : L'Allié Inattendu - Intervention auprès d'un proche</h3>
                <p className="bonus__value text-rouge-liberation font-bold mb-3 text-base">Valeur : Inestimable</p>
                <p className="text-base">Si un proche manifeste de la résistance face à votre démarche, je m'engage à intervenir (avec votre accord) pour faciliter la communication et la compréhension.</p>
              </div>
            </div>
          </div>
          
          <div className="bonus__additional text-lg text-center p-8 bg-yellow-400/10 rounded-lg space-y-4">
            <p><span className="text-2xl text-yellow-400" aria-hidden="true">✨</span> Accès à vie aux ressources partagées pendant le programme.</p>
            <p><span className="text-2xl text-yellow-400" aria-hidden="true">✨</span> Important : Pour garantir un accompagnement de qualité, j'accompagne seulement 3 nouvelles personnes par mois.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 