import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noir-profond text-blanc-purete py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="footer__content grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="footer__brand max-w-sm">
            <h3 className="font-heading text-lg font-semibold mb-4 text-blanc-purete">Coach en Sobriété</h3>
            <p className="text-sm text-blanc-purete/70 mb-6 leading-relaxed">
              Accompagnement personnalisé pour retrouver une relation saine avec l'alcool. Reprenez le contrôle de votre
              vie.
            </p>
            <div className="footer__social flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blanc-purete/70 hover:text-rouge-liberation transition-colors"
              >
                <div className="w-9 h-9 bg-gris-sagesse/20 hover:bg-rouge-liberation/20 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-blanc-purete/70 hover:text-rouge-liberation transition-colors"
              >
                <div className="w-9 h-9 bg-gris-sagesse/20 hover:bg-rouge-liberation/20 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blanc-purete/70 hover:text-rouge-liberation transition-colors"
              >
                <div className="w-9 h-9 bg-gris-sagesse/20 hover:bg-rouge-liberation/20 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="font-heading text-lg font-semibold mb-4 text-blanc-purete">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#problem-agitation"
                  className="text-blanc-purete/70 hover:text-blanc-purete transition-colors"
                >
                  Le Cycle
                </Link>
              </li>
              <li>
                <Link href="#promise" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  La Clé
                </Link>
              </li>
              <li>
                <Link href="#offer" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  Avis
                </Link>
              </li>
              <li>
                <Link href="#calendly" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  Réserver un appel
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="font-heading text-lg font-semibold mb-4 text-blanc-purete">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-rouge-liberation mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@coachensobriete.fr"
                  className="text-blanc-purete/70 hover:text-blanc-purete transition-colors break-all"
                >
                  contact@coachensobriete.fr
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-rouge-liberation mt-1 flex-shrink-0" />
                <a href="tel:+33612345678" className="text-blanc-purete/70 hover:text-blanc-purete transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom mt-10 md:mt-12 pt-8 border-t border-gris-sagesse/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blanc-purete/60 text-xs text-center md:text-left">
            &copy; {currentYear} Coach en Sobriété. Tous droits réservés.
          </p>
          <div className="footer__legal flex gap-4 md:gap-6">
            <Link
              href="/mentions-legales"
              className="text-blanc-purete/60 hover:text-blanc-purete text-xs transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-blanc-purete/60 hover:text-blanc-purete text-xs transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
