import React, { useEffect, ReactNode, useState, useRef } from 'react';
import Image from 'next/image';
import { AlertTriangle, Zap, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform, Variants, MotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Définition des types pour le composant GlitchText
interface GlitchTextProps {
  text?: string;
  className?: string;
  children?: ReactNode;
}

// Composant pour texte avec effet glitch
const GlitchText: React.FC<GlitchTextProps> = ({ text, className, children }) => (
  <span 
    className={`relative inline-block ${className}`}
  >
    <span className="relative z-10">{text || children}</span>
    <span className="absolute top-0 left-0 w-full h-full bg-noir-profond mix-blend-difference animate-glitch-1 opacity-50" style={{ animationDelay: '50ms' }}></span>
    <span className="absolute top-0 left-0 w-full h-full bg-rouge-liberation mix-blend-exclusion animate-glitch-2 opacity-30" style={{ animationDelay: '100ms' }}></span>
  </span>
);

// Interfaces
interface VignetteEffectProps {
  scrollPosition?: number;
  intensity?: number;
  color?: string;
}

interface CinematicTransitionProps {
  position: 'top' | 'bottom';
  scrollPosition?: number;
}

// Composant pour créer un effet de vignettage cinématographique
const VignetteEffect: React.FC<VignetteEffectProps> = ({ 
  intensity = 0.6,
  color = 'rgba(0,0,0,1)'
}) => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        boxShadow: `inset 0 0 150px ${color}`,
        opacity: intensity
      }}
    />
  );
};

// Élément visuel de continuité - ligne verticale qui traverse les sections
const ContinuityLine: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  // Calcul de l'opacité basée sur le défilement
  const opacity = Math.min(0.7, 0.3 + scrollPosition / 1000);
  
  return (
    <div className="fixed left-[5%] top-0 bottom-0 w-[1px] pointer-events-none z-5" 
      style={{ 
        opacity,
        background: 'linear-gradient(to bottom, transparent, rgba(179, 0, 12, 0.4) 30%, rgba(179, 0, 12, 0.6) 50%, rgba(179, 0, 12, 0.4) 70%, transparent)',
        boxShadow: '0 0 8px rgba(179, 0, 12, 0.3)'
      }}
    />
  );
};

// Nouveau composant pour une transition fluide et subtile avec parallaxe
const CinematicGradientTransition: React.FC<{ 
  scrollYProgress: MotionValue<number>, 
  scrollPosition: number 
}> = ({ scrollYProgress, scrollPosition }) => {
  // Effet de parallaxe simplifié
  const translateY = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [0, -30]  // Parallaxe léger
  );
  
  return (
    <motion.div 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ translateY }}
    >
      {/* Un seul dégradé principal avec teinte sombre */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#120000] to-black"
        style={{
          opacity: 0.95
        }}
      />
      
      {/* Halo rougeâtre très léger */}
      <div 
        className="absolute left-[10%] top-0 w-[40%] h-[70vh] opacity-5"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(179, 0, 12, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />
    </motion.div>
  );
};

// Composant pour l'élément de guide visuel
function VisualGuide({ visible = true, direction = 'down' }) {
  return (
    <div className={`flex flex-col items-center transition-opacity duration-300 ${visible ? 'opacity-80' : 'opacity-0'}`}>
      <p className="text-xs text-sable-introspection/80 font-medium tracking-wider text-center mb-2">
        {direction === 'down' ? 'COMPRENDS LE CYCLE' : 'REVIENS AU CTA'}
      </p>
      <div className={`w-0.5 h-10 bg-gradient-to-${direction === 'down' ? 'b' : 't'} from-rouge-liberation to-transparent`}></div>
      <ArrowDown 
        className={`w-4 h-4 text-rouge-liberation mt-1 animate-bounce ${direction === 'up' ? 'rotate-180' : ''}`} 
      />
    </div>
  );
}

// Composant de transition cinématographique
const CinematicTransitionCinematic = ({ position = "top", opacity = 0.9 }) => {
  const gradientDirection = position === "top" 
    ? "bg-gradient-to-b" 
    : "bg-gradient-to-t";
  
  return (
    <div 
      className={`absolute ${position}-0 left-0 right-0 h-32 ${gradientDirection} from-noir-profond to-transparent pointer-events-none z-20`}
      style={{ opacity }}
    ></div>
  );
};

// Composant pour l'effet de vignettage cinématographique
const VignetteEffectCinematic = ({ opacity = 0.7 }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-10"
    style={{ 
      boxShadow: `inset 0 0 150px rgba(0,0,0,0.9)`,
      opacity
    }}
  ></div>
);

// Composant de guide visuel pour diriger l'attention
const VisualGuideCinematic = ({ show = true }) => (
  <motion.div 
    className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-32 pointer-events-none z-10"
    initial={{ opacity: 0, height: 0 }}
    animate={{ 
      opacity: show ? 0.7 : 0, 
      height: show ? 120 : 0 
    }}
    transition={{ duration: 0.7 }}
  >
    <div className="w-full h-full bg-gradient-to-b from-rouge-liberation/80 to-transparent"></div>
  </motion.div>
);

// Composant pour le texte avec effet glitch
const GlitchTextCinematic = ({ children, delay = 0, duration = 0.8 }: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsGlitching(true);
      const glitchTimeout = setTimeout(() => {
        setIsGlitching(false);
      }, duration * 1000);
      return () => clearTimeout(glitchTimeout);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <span className={`relative inline-block ${isGlitching ? 'text-rouge-liberation' : ''}`}>
      {children}
      {isGlitching && (
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="absolute inset-0 bg-rouge-liberation/20 animate-pulse"></span>
        </span>
      )}
    </span>
  );
};

// Composant pour la connexion de flèche animée
const AnimatedArrow = ({ 
  startX, startY, endX, endY, 
  delay = 0, 
  thickness = 2,
  color = "rgba(179, 0, 12, 0.7)" 
}: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  thickness?: number;
  color?: string;
}) => {
  // Calcul de la longueur et de l'angle
  const dx = endX - startX;
  const dy = endY - startY;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <motion.div
      className="absolute"
      style={{
        left: startX,
        top: startY,
        width: 0,
        height: thickness,
        backgroundColor: color,
        transformOrigin: 'left center',
        transform: `rotate(${angle}deg)`,
      }}
      initial={{ width: 0 }}
      animate={{ width: length }}
      transition={{ 
        delay, 
        duration: 0.6,
        ease: "easeOut"
      }}
    />
  );
};

// Composant principal pour le diagramme d'addiction
interface AddictionCycleDiagramProps {
  visible?: boolean;
  scale?: number;
  opacity?: number;
}

const AddictionCycleDiagram: React.FC<AddictionCycleDiagramProps> = ({ 
  visible = false, 
  scale = 1,
  opacity = 1 
}) => {
  const mainVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity,
      scale,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Positions relatives des nœuds du cycle pour les flèches - adaptées pour mobile
  const nodePositions = {
    trigger: { x: 150, y: 60 },
    obsession: { x: 250, y: 120 },
    ritual: { x: 230, y: 220 },
    consumption: { x: 150, y: 280 },
    shame: { x: 70, y: 220 },
    guilt: { x: 50, y: 120 }
  };

  return (
    <motion.div 
      className="relative mx-auto my-8 p-4 sm:p-8 rounded-2xl overflow-hidden max-w-3xl"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={mainVariants}
    >
      {/* Un seul fond d'ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-profond/80 to-noir-profond rounded-2xl z-0"></div>
      
      {/* Contenu du diagramme */}
      <div className="relative z-30 flex flex-col items-center">
        <motion.h3 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-blanc-purete text-center"
          variants={itemVariants}
        >
          Le Cycle de l'Addiction
        </motion.h3>
        
        <div className="relative w-full aspect-square max-w-md md:max-w-lg">
          {/* Cercle central */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-noir-profond/80 border border-rouge-liberation/30 z-30 flex items-center justify-center"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-rouge-liberation font-bold text-center">
              CYCLE<br/>INFERNAL
            </p>
          </motion.div>
          
          {/* Nœuds du cycle - texte plus petit sur mobile */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={1}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Déclencheur émotionnel</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={2}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Obsession</p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 right-1/4 transform translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={3}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Rituels</p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={4}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Consommation</p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-1/4 transform -translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={5}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Honte</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-noir-profond p-2 sm:p-3 rounded-full border border-rouge-liberation z-30"
            variants={itemVariants}
            custom={6}
          >
            <p className="text-sm sm:text-base text-blanc-purete font-bold whitespace-nowrap">Culpabilité</p>
          </motion.div>
          
          {/* Lignes de connexion animées - réduites sur mobile */}
          {visible && (
            <>
              <AnimatedArrow 
                startX={nodePositions.trigger.x} 
                startY={nodePositions.trigger.y} 
                endX={nodePositions.obsession.x} 
                endY={nodePositions.obsession.y} 
                delay={1.0}
                thickness={1}
              />
              <AnimatedArrow 
                startX={nodePositions.obsession.x} 
                startY={nodePositions.obsession.y} 
                endX={nodePositions.ritual.x} 
                endY={nodePositions.ritual.y} 
                delay={1.2}
                thickness={1}
              />
              <AnimatedArrow 
                startX={nodePositions.ritual.x} 
                startY={nodePositions.ritual.y} 
                endX={nodePositions.consumption.x} 
                endY={nodePositions.consumption.y} 
                delay={1.4}
                thickness={1}
              />
              <AnimatedArrow 
                startX={nodePositions.consumption.x} 
                startY={nodePositions.consumption.y} 
                endX={nodePositions.shame.x} 
                endY={nodePositions.shame.y} 
                delay={1.6}
                thickness={1}
              />
              <AnimatedArrow 
                startX={nodePositions.shame.x} 
                startY={nodePositions.shame.y} 
                endX={nodePositions.guilt.x} 
                endY={nodePositions.guilt.y} 
                delay={1.8}
                thickness={1}
              />
              <AnimatedArrow 
                startX={nodePositions.guilt.x} 
                startY={nodePositions.guilt.y} 
                endX={nodePositions.trigger.x} 
                endY={nodePositions.trigger.y} 
                delay={2.0}
                thickness={1}
              />
            </>
          )}
        </div>
        
        <motion.p 
          className="mt-6 sm:mt-10 text-base sm:text-lg text-sable-introspection text-center max-w-xl"
          variants={itemVariants}
          custom={7}
        >
          Ce cycle d'addiction t'emprisonne dans une boucle sans fin de <span className="text-rouge-liberation font-medium">souffrance</span> et de <span className="text-rouge-liberation font-medium">dépendance</span>.
        </motion.p>
      </div>
    </motion.div>
  );
};

export function ProblemAgitationSection() {
  const ref = useRef(null);
  const [titleRef, titleInView] = useInView({ 
    threshold: 0.05, 
    rootMargin: "100px 0px 0px 0px" 
  });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgressInSection = useScroll({ target: ref }).scrollYProgress;
  
  // Animation de fondu accélérée - intervalle réduit pour atteindre l'opacité complète plus tôt
  const titleOpacity = useTransform(scrollProgressInSection, [0, 0.1], [0, 1]);
  const titleY = useTransform(scrollProgressInSection, [0, 0.1], [10, 0]);
  
  // Effet de parallaxe allégé
  const titleParallax = useTransform(scrollProgressInSection, [0, 1], [0, -20]);
  const contentParallax = useTransform(scrollProgressInSection, [0, 1], [0, -10]);
  
  // Vérification si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', checkMobile);
    checkMobile(); // Initialisation
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section ref={ref} className="relative min-h-screen text-white overflow-hidden pt-36 sm:pt-40 pb-20">
      {/* Élément de réception de la transition de la section Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden z-10">
        {/* Élément de continuité visuelle - ligne verticale */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#C41E3A]/50"></div>
        </div>
      </div>
      
      {/* Arrière-plan simplifié qui s'aligne avec la HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120000] to-black z-0"></div>
      
      {/* Effet de vignettage statique et léger */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ 
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.7)'
        }}
      ></div>
      
      {/* Conteneur principal avec effet de parallaxe réduit */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre placé plus haut dans la page avec animation simplifiée */}
        <motion.div
          ref={titleRef}
          className="mb-8 sm:mb-12 text-center relative pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: titleInView ? 1 : 0, 
            y: titleInView ? 0 : 10 
          }}
          transition={{ duration: 0.5 }}
          style={{ translateY: titleParallax }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative">
            Le problème : <span className="text-[#C41E3A] relative">
              le cycle de l'addiction
              {/* Halo subtil sous le texte */}
              <span className="absolute inset-0 bg-[#C41E3A]/10 blur-md -z-10"></span>
            </span>
          </h2>
        </motion.div>

        {/* Contenu simplifié */}
        <motion.div 
          ref={contentRef}
          className="max-w-4xl mx-auto relative"
          style={{ 
            translateY: contentParallax
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert mx-auto mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-6 sm:mb-8">
              Tu te l'es déjà dit. Plusieurs fois.<br className="hidden sm:block"/>
              Tu t'es promis que c'était la dernière.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sable-introspection mb-4 sm:mb-6">
              Et pourtant, le cycle continue.<br className="hidden sm:block"/>
              Tu te retrouves au même point, encore et encore.
            </p>
          </motion.div>
          
          {/* Image du cycle de l'addiction - conditionnelle sur mobile */}
          <div className={`${isMobile ? 'max-h-[60vh] overflow-hidden' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-full sm:max-w-2xl my-8 sm:my-16"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-rouge-liberation/20">
                <Image 
                  src="/img/CycleAddict.png" 
                  alt="Le cycle de l'addiction" 
                  width={900} 
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Overlay léger pour meilleure lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/30 to-transparent"></div>
              </div>
              
              {/* Légende */}
              <p className="text-center text-sable-introspection/80 mt-4 sm:mt-6 italic text-sm sm:text-base">
                Ce cycle d'addiction t'emprisonne dans une boucle sans fin de <span className="text-rouge-liberation font-medium">souffrance</span> et de <span className="text-rouge-liberation font-medium">dépendance</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="mt-8 sm:mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-block"
          >
            <a 
              href="#contact" 
              className="bg-[#C41E3A] hover:bg-[#C41E3A]/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg transform transition duration-300 hover:translate-y-[-2px] border border-[#C41E3A]/50"
            >
              J'APPELLE PIERRE
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
    </section>
  );
} 