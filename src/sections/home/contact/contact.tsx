import { HoverLabel } from '@/components/ui/hover-label';
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
      <h2 id="contact-title" className="contact-accessible">
        {contactContent.description}
      </h2>
      {[false, true].map((stroke) => (
        <div
          className="contact-marquee"
          data-stroke={stroke}
          aria-hidden="true"
          key={String(stroke)}
        >
          <div>
            {[0, 1].map((n) => (
              <span key={n}>{contactContent.title}</span>
            ))}
          </div>
        </div>
      ))}
      <a
        href={whatsappUrl(contactContent.context)}
        className="contact-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp da Fritz — abrir em nova aba"
        data-track-contact="orçamento home"
      >
        <span className="contact-button-gaps" aria-hidden="true">
          <span className="contact-button-gap" />
          <span className="contact-button-gap" />
          <span className="contact-button-gap" />
        </span>
        <span className="contact-button-text">
          <HoverLabel variant="cta">Orçamento pelo WhatsApp</HoverLabel>
        </span>
        <span className="contact-button-icon" aria-hidden="true">
          →
        </span>
      </a>
    </section>
  );
}
