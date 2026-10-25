import '@/sections/home/home.css';
import '@/sections/services/services-page.css';
import { pageMetadata } from '@/config/metadata';
import { ServicesIntroduction } from '@/sections/services/introduction/services-introduction';
import { ServiceCatalog } from '@/sections/services/catalog/service-catalog';
import { Process } from '@/sections/services/process/process';
import { Faq } from '@/sections/home/faq/faq';
import { Contact } from '@/sections/home/contact/contact';

export const metadata = pageMetadata(
  'Higienização e impermeabilização em Joinville',
  'Conheça os serviços Fritz para estofados, colchões e tapetes, a impermeabilização e as etapas do atendimento em Joinville e região.',
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
      <ServiceCatalog />
      <Process />
      <Faq />
      <Contact />
    </main>
  );
}
