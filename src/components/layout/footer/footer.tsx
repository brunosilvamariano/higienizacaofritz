import { HoverLabel } from '@/components/ui/hover-label';
import Image from 'next/image';
import Link from 'next/link';
import { PrivacyPreferences } from '@/components/analytics/consent';
import { contact } from '@/config/contact';
import { googleReviews } from '@/content/google-reviews';
import { developer } from '@/config/developer';
import vbgLogo from '@/assets/images/shared/vbg/logo.webp';
import { QuoteForm } from './quote-form';
import { FooterReveal } from './footer-reveal';
import './footer.css';
import './footer-typography.css';

export function Footer() {
  return (
    <FooterReveal>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-contact">
            <h2>Contato</h2>
            <p>
              Fritz — Higienização e impermeabilização
              <br />
              Cuidado com estofados em Joinville e região.
            </p>
            <a href={`tel:+${contact.whatsappNumber}`}>
              {contact.whatsappDisplay}
            </a>
          </div>
          <nav aria-label="Páginas principais">
            <h2>Navegue</h2>
            <a href="/#inicio">
              <HoverLabel>Início</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Início
              </span>
            </a>
            <Link href="/#sobre-a-fritz">
              <HoverLabel>Sobre</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Sobre
              </span>
            </Link>
            <Link href="/#servicos">
              <HoverLabel>Serviços</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Serviços
              </span>
            </Link>
            <Link href="/#contato">
              <HoverLabel>Contato</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Contato
              </span>
            </Link>
          </nav>
          <nav aria-label="Resultados e dúvidas">
            <h2>Resultados e dúvidas</h2>
            <Link href="/#antes-e-depois">
              <HoverLabel>Galeria</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Galeria
              </span>
            </Link>
            <Link href="/#duvidas">
              <HoverLabel>Dúvidas</HoverLabel>
              <span className="footer-link-mobile" aria-hidden="true">
                Dúvidas
              </span>
            </Link>
          </nav>
          <div className="footer-information">
            <h2>Informações</h2>
            <a
              className="footer-instagram"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Fritz — abrir em nova aba"
            >
              <span className="footer-instagram-icon" aria-hidden="true">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              Instagram da Fritz
            </a>
            <a
              href={googleReviews.profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil no{' '}
              <span className="footer-google">
                <span className="tw:sr-only">Google</span>
                <span aria-hidden="true">
                  <span className="google-blue">G</span>
                  <span className="google-red">o</span>
                  <span className="google-yellow">o</span>
                  <span className="google-blue">g</span>
                  <span className="google-green">l</span>
                  <span className="google-red">e</span>
                </span>
              </span>
            </a>
            <p>Cuidados com seus estofados</p>
            <PrivacyPreferences />
          </div>
        </div>
        <QuoteForm />
      </div>

      <div className="footer-bottom">
        <Link className="footer-wordmark" href="/">
          {'FRITZ'}
          <small className="footer-brand-subtitle">
            Higienização e impermeabilização
          </small>
        </Link>
        <div className="footer-credits">
          <p>
            © {new Date().getFullYear()} Fritz. Todos os direitos reservados.
          </p>
          <a
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-developer"
            aria-label="Criado por VBG Agency — abrir site"
          >
            <span>Criado por</span>
            <Image src={vbgLogo} alt="VBG Agency" width={112} height={42} />
          </a>
        </div>
      </div>
    </FooterReveal>
  );
}
