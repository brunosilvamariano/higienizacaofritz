import '@/sections/home/home-colors.css';
import '@/sections/home/services/services-colors.css';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { Showreel } from '@/sections/home/showreel/showreel';
import { Services, ServicesOpening } from '@/sections/home/services/services';
import { Testimonials } from '@/sections/home/testimonials/testimonials';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = pageMetadata(
  'Higienização e impermeabilização de estofados',
  'Conheça os serviços da Fritz para sofás, colchões, cadeiras, poltronas e tapetes. Consulte orçamento e atendimento em Joinville e região.',
  '/servicos',
);
export default function ServicesPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper services-page home-palette"
      tabIndex={-1}
    >
      <ServicesOpening />
      <Showreel variant="services" />
      <Services />
      <div className="tw:pt-[100px]">
        <Testimonials />
      </div>
      <Contact />
    </main>
  );
}
