import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { XCircle, CheckCircle, ArrowRight, AlertTriangle, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function TargetAudienceSection() {
  // Intersection observer hooks pour les animations
  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [notForYouRef, notForYouInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [forYouRef, forYouInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [innerVoiceRef, innerVoiceInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="target-audience" 
      className="relative bg-gradient-to-b from-[#1A1A1A] via-[#262218] to-sable-introspection py-20 md:py-28 overflow-hidden"
    >
      {/* Vague de transition supérieure */}
      <div className="absolute top-0 left-0 w-full overflow-hidden text-[#1A1A1A] z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] md:h-[80px] rotate-180"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,113.63,287.64,89.17,258.94,67.76,321.39,56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Overlay gradient pour effet cinématique */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#00000030] pointer-events-none z-0"></div>
      
      {/* Cercles abstraits flous en arrière-plan */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rouge-liberation/10 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-[80px] opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-bleu-serenite/20 rounded-full blur-[60px] opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Titre animé */}
        <div 
          ref={titleRef}
          className={`max-w-4xl mx-auto mb-16 md:mb-20 transform transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-blanc-purete">
            Est-ce que cet accompagnement 
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-rouge-liberation via-yellow-400 to-orange-espoir">
              est fait pour toi ?
            </span>
          </h2>
          <p className="text-center text-lg md:text-xl text-sable-introspection max-w-2xl mx-auto">
            Chaque chemin n&apos;est pas adapté à tous. Voici comment savoir si ma méthode te correspond.
          </p>
        </div>

        {/* Layout asymétrique avec "voice box" au milieu */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 max-w-6xl mx-auto">
          
          {/* NOT FOR YOU - à gauche */}
          <div 
            ref={notForYouRef}
            className={`lg:col-span-5 lg:col-start-1 transform transition-all duration-1000 ease-out delay-200 ${notForYouInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-gradient-to-br from-[#211111] to-[#301010] p-6 md:p-8 rounded-lg shadow-xl border-l-4 border-rouge-liberation relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-[#ff000010] to-transparent opacity-60"></div>
              
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-rouge-liberation relative z-10">
                Cette méthode <strong>n&apos;est pas faite pour toi</strong> si…
              </h3>
              
              <ul className="list-none space-y-5 text-base text-sable-introspection relative z-10">
                {[
                  "Tu cherches une <strong>pilule magique</strong> sans vouloir comprendre les mécanismes.",
                  "Tu attends que l&apos;arrêt se fasse sans ton <strong>implication active</strong> dans ta propre réflexion.",
                  "Tu <strong>n&apos;es pas prêt(e) à remettre en question</strong> tes croyances sur l&apos;alcool et ce qu&apos;il t&apos;apporte <em>réellement</em>.",
                  "Tu cherches à <em>modérer</em> ta consommation (mon approche vise l&apos;arrêt complet, car c&apos;est la seule vraie <strong>libération du piège</strong>)."
                ].map((text, index) => (
                  <li 
                    key={`not-for-${index}`} 
                    className={`flex items-start transform transition-all ease-out ${notForYouInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${300 + (index * 150)}ms`, transitionDuration: '700ms' }}
                  >
                    <XCircle className="h-5 w-5 text-rouge-liberation mr-3 mt-1 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* VOIX INTÉRIEURE - au centre */}
          <div 
            ref={innerVoiceRef}
            className={`lg:col-span-12 lg:row-start-1 lg:pt-48 transform transition-all duration-1000 ease-out delay-100 ${innerVoiceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] p-5 md:p-6 rounded-lg shadow-inner border border-sable-introspection/20 max-w-2xl mx-auto relative">
              <div className="absolute -top-5 left-6">
                <div className="bg-sable-introspection text-noir-profond px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>La voix intérieure qui t&apos;empêche d&apos;avancer</span>
                </div>
              </div>
              
              <div className="pt-3 italic text-lg md:text-xl text-blanc-purete/80 relative">
                <p className="before:content-['\22'] before:absolute before:-left-2 before:-top-3 before:text-4xl before:text-rouge-liberation/40 after:content-['\22'] after:absolute after:-bottom-3 after:-right-2 after:text-4xl after:text-rouge-liberation/40">
                  Je veux arrêter, mais je ne veux pas <span className="text-rouge-transition font-medium">renoncer à ma vie sociale</span>... Et si <span className="text-rouge-transition font-medium">je deviens ennuyeux</span> ? Comment vais-je gérer <span className="text-rouge-transition font-medium">le stress et l&apos;anxiété</span> sans cette échappatoire ?
                </p>
              </div>
            </div>
          </div>
          
          {/* FOR YOU - à droite */}
          <div 
            ref={forYouRef}
            className={`lg:col-span-6 lg:col-start-7 lg:row-start-1 transform transition-all duration-1000 ease-out delay-400 ${forYouInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-gradient-to-br from-[#252210] to-[#32301C] p-6 md:p-8 rounded-lg shadow-xl border-l-4 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-[#f9dc5c20] to-transparent opacity-60"></div>
              
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-yellow-400 relative z-10">
                Par contre, elle <strong>est faite pour toi</strong> si…
              </h3>
              
              <ul className="list-none space-y-5 text-base text-sable-introspection relative z-10">
                {[
                  "Tu es <strong>VRAIMENT prêt(e)</strong> à en finir avec ce cycle épuisant.",
                  "Tu as compris que <strong>la volonté seule ne suffit pas</strong> et qu&apos;il faut une autre approche.",
                  "Tu veux <strong>comprendre</strong> pour te libérer durablement <strong>et sans lutte</strong>.",
                  "Tu es prêt(e) à t&apos;impliquer avec <strong>honnêteté et ouverture d&apos;esprit</strong>.",
                  "Tu es fatigué(e) des approches qui te demandent de te voir comme <strong>impuissant(e) ou malade à vie</strong>, et tu sens qu&apos;il doit y avoir une autre voie basée sur la <strong>compréhension et la clarté</strong>.",
                  "Tu vises <strong>l&apos;arrêt complet</strong> comme chemin vers une liberté totale."
                ].map((text, index) => (
                  <li 
                    key={`for-${index}`} 
                    className={`flex items-start transform transition-all ease-out ${forYouInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${300 + (index * 150)}ms`, transitionDuration: '700ms' }}
                  >
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile scroll indicator pour les petits écrans */}
        <div className="lg:hidden text-center mt-6 text-sm text-sable-introspection/60 flex items-center justify-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          <span>Fais défiler pour voir tous les critères</span>
        </div>

        {/* CTA Text & Button */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 md:mt-24 max-w-2xl mx-auto transform transition-all duration-1000 ease-out ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-xl md:text-2xl mb-4 font-bold text-blanc-purete">
            Prêt(e) à provoquer ton déclic ?
          </p>
          <p className="text-lg md:text-xl mb-8 text-sable-introspection">
            La liberté est plus proche que tu ne le penses.<br/>
            <span className="text-yellow-400 font-medium">Elle commence par la clarté.</span>
          </p>
          <Link href="#calendly">
            <button
              className="px-8 py-4 bg-gradient-to-r from-[#C41E3A] to-[#B3000C] text-blanc-purete font-bold tracking-wider shadow-lg rounded-md group hover:shadow-rouge-liberation/20 hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              Je réserve mon appel gratuit pour faire le point
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* Vague de transition inférieure */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] md:h-[80px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,113.63,287.64,89.17,258.94,67.76,321.39,56.44Z" 
            fill="#F5E6D3"
          ></path>
        </svg>
      </div>
    </section>
  );
} 