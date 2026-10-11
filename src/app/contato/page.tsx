import '@/sections/home/home-colors.css';
import '@/sections/contact/contact-colors.css';
import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ContactForm } from '@/sections/contact/form/contact-form';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = {
  title: 'Solicite seu orçamento — Fritz',
  description:
    'Conte quais ambientes deseja planejar e envie suas referências para iniciar a conversa sobre seu projeto de móveis planejados.',
  alternates: { canonical: '/contato' },
};
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
        title="Conte como você imagina seu espaço."
      />
      <ContactForm />
      <Contact />
    </main>
  );
}
