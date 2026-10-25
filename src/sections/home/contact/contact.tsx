import { TitleReveal } from '@/animations/title-reveal';
import { RoundLink } from '@/components/ui/round-link';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { whatsappUrl } from '@/config/contact';
import { contactContent } from './contact.content';
import './contact.css';

export function Contact() {
  return (
    <section
      id="contato"
      className="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="contact-panel">
        <div className="contact-composition tw:grid tw:items-center">
          <div className="contact-introduction">
            <SectionEyebrow>Próximo passo</SectionEyebrow>
            <TitleReveal id="contact-title" text={contactContent.title} />
          </div>
          <div className="contact-action">
            <p className="contact-guidance">{contactContent.guidance}</p>
            <RoundLink
              className="contact-cta"
              icon="whatsapp"
              href={whatsappUrl(contactContent.context)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento pelo WhatsApp do Fritz — abrir em nova aba"
              data-track-contact="orçamento home"
            >
              Solicitar orçamento
            </RoundLink>
          </div>
        </div>
        <div className="contact-details tw:flex tw:items-center tw:justify-between">
          <span>Higienização e impermeabilização</span>
          <span>Joinville e região</span>
        </div>
      </div>
    </section>
  );
}
