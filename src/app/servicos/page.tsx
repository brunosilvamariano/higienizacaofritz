import '@/sections/home/home.css';
import '@/sections/services/services-page.css';
import '@/sections/services/comparisons.css';
import '@/sections/home/home-colors.css';
import { pageMetadata } from '@/config/metadata';
import { ServicesIntroduction } from '@/sections/services/introduction/services-introduction';
import { BeforeAfter } from '@/sections/home/before-after/before-after';
import { Differentials } from '@/sections/services/differentials/differentials';
import { Contact } from '@/sections/home/contact/contact';

export const metadata = pageMetadata(
  'Higienização e impermeabilização em Joinville',
  'Conheça os serviços Fritz para estofados, colchões e tapetes, a impermeabilização e as orientações para atendimento em Joinville e região.',
  '/servicos',
);

export default function ServicesPage() {
  return (
    <main
      id="conteudo"
      className="page-content home-palette home-refined services-page tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <ServicesIntroduction />
      <BeforeAfter compact />
      <Differentials />
      <Contact />
    </main>
  );
}
