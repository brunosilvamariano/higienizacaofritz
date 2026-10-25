import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { RoundLink } from '@/components/ui/round-link';
import { whatsappUrl } from '@/config/contact';
import { serviceAreaNames } from '@/content/service-areas';

export function ServicesIntroduction() {
  return (
    <section
      className="services-introduction"
      aria-labelledby="services-page-title"
    >
      <nav className="services-breadcrumb" aria-label="Caminho de navegação">
        <a href="/">Início</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Serviços</span>
      </nav>
      <div className="services-introduction-grid tw:grid">
        <div>
          <SectionEyebrow>Higienização e proteção</SectionEyebrow>
          <h1 id="services-page-title" data-title-anim>
            Um cuidado para{' '}
            <span className="section-title-accent">cada tecido.</span>
          </h1>
        </div>
        <div className="services-introduction-copy">
          <p>
            Conheça os serviços do Fritz para estofados, colchões e tapetes. Do
            orçamento aos cuidados após o atendimento, tudo começa com uma
            conversa.
          </p>
          <RoundLink
            href={whatsappUrl()}
            icon="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar os serviços do Fritz pelo WhatsApp — abrir em nova aba"
            data-track-contact="servicos abertura"
          >
            Consultar atendimento
          </RoundLink>
          <a className="services-process-link" href="/servicos#processo">
            Entenda como funciona <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div id="onde-atendemos" className="services-coverage" tabIndex={-1}>
        <span>Onde atendemos</span>
        <p>{serviceAreaNames.join(' · ')}.</p>
        <small>Informe seu bairro para consultar a disponibilidade.</small>
      </div>
    </section>
  );
}
