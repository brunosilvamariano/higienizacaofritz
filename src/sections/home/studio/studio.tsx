import { HoverLabel } from '@/components/ui/hover-label';
import Link from 'next/link';
import Image from 'next/image';
import pattern from '@/assets/images/shared/traco/simbolo.svg';
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
              Por dentro <i>(da)</i> Traço
            </span>
          </span>
          <StudioTitle />
          <Link href="/sobre" className="pill-link">
            <HoverLabel variant="primary">Conheça a Traço</HoverLabel>
          </Link>
        </div>
        <Image
          src={pattern}
          alt="Símbolo da Traço — dois traços diagonais"
          className="studio-pattern"
        />
      </div>
      <div className="studio-demo">
        <DemoNote>
          Estudos conceituais para inspirar seu próximo ambiente.
        </DemoNote>
      </div>
      <StudioPanels />
    </section>
  );
}
