import { HoverLabel } from '@/components/ui/hover-label';
import { whatsappUrl } from '@/config/contact';
import './process-banner.css';

export function ProcessBanner() {
  return (
    <div className="process-banner">
      <div className="process-banner-copy">
        <h3 className="process-banner-title">
          O cuidado com seu estofado começa aqui.
        </h3>
        <a
          className="process-banner-cta pill-link"
          href={whatsappUrl('orçamento para cuidar do meu estofado')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp do Fritz — abrir em nova aba"
          data-track-contact="banner como funciona"
        >
          <HoverLabel variant="primary">Solicitar orçamento</HoverLabel>
        </a>
      </div>
    </div>
  );
}
