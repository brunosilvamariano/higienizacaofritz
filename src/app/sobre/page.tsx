import '@/sections/home/home-colors.css';
import '@/sections/about/about-colors.css';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { AboutOpening } from '@/sections/about/opening/about-opening';
import {
  AboutMotion,
  AboutStats,
  WhyChoose,
  AboutTeam,
  AboutAwards,
  AboutLife,
} from '@/sections/about/details/about-details';

import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = pageMetadata(
  'Sobre a Fritz',
  'Conheça a Fritz e seu cuidado com estofados. Higienização e impermeabilização em Joinville e região.',
  '/sobre',
);

export default function AboutPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper about-page home-palette"
      tabIndex={-1}
    >
      <AboutMotion />
      <AboutOpening />
      <AboutStats />
      <WhyChoose />
      <AboutTeam />

      <AboutAwards />
      <div
        className="reference-divider reference-divider-awards"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((n) => (
          <i key={n} />
        ))}
      </div>
      <AboutLife />
      <Contact />
    </main>
  );
}
