import { HoverLabel } from '@/components/ui/hover-label';
import Image from 'next/image';
import { whatsappUrl } from '@/config/contact';
import pattern from '@/assets/images/shared/fritz/fritz-studio.svg';
import { DemoNote } from '@/components/ui/demo-note';
import { StudioPanels } from './studio-panels';
import { StudioTitle } from './studio-title';
import './studio.css';
export function Studio() {
  return (
    <section
      id="estudio"
      className="studio"
      aria-labelledby="studio-title"
      tabIndex={-1}
    >
      <div className="studio-intro section tw:flex">
        <div>
          <span className="studio-caption">
            <span className="studio-caption-circle" aria-hidden="true" />
            <span>
              Por dentro <i>(da)</i> Fritz
            </span>
          </span>
          <StudioTitle />
          <a
            href={whatsappUrl(
              'agendar a higienização ou impermeabilização do meu estofado',
            )}
            className="pill-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar higienização pelo WhatsApp"
            data-track-contact="agendamento home"
          >
            <HoverLabel variant="primary">Agendar pelo WhatsApp</HoverLabel>
          </a>
        </div>
        <Image src={pattern} alt="Logo da Fritz" className="studio-pattern" />
      </div>
      <div className="studio-demo">
        <DemoNote>O cuidado da Fritz em cada detalhe do seu estofado.</DemoNote>
      </div>
      <StudioPanels />
    </section>
  );
}
