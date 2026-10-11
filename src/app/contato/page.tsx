import '@/sections/home/home-colors.css';
import '@/sections/contact/contact-colors.css';
import type { Metadata } from 'next';
import { pageMetadata } from '@/config/metadata';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ContactForm } from '@/sections/contact/form/contact-form';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = pageMetadata(
  'Solicite seu orçamento',
  'Envie fotos, quantidade de peças e sua localização para solicitar à Fritz um orçamento de higienização ou impermeabilização.',
  '/contato',
);
export default function ContactPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper contact-page home-palette"
      tabIndex={-1}
    >
      <PageOpening
        decorated={false}
        caption="Entre em contato"
        title="Vamos cuidar dos seus estofados."
      />
      <ContactForm />
      <Contact />
    </main>
  );
}
