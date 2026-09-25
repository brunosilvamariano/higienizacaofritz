import { COMPANY } from "@/config/company";
import { RESULTS } from "@/content/results";
import { createWhatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

export function Results() {
  return (
    <section className="galeria" id="galeria" aria-labelledby="galeria-title" data-results-carousel="">
      <div className="galeria__inner">
        <header className="galeria__header">
          <div>
            <p className="galeria__eyebrow"><span className="galeria__eyebrow-icon" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 16.5 9 11l3.2 3.2L20 6.5" /><path d="M15 6.5h5v5" /></svg></span>Resultados reais</p>
            <h2 className="galeria__title" id="galeria-title">Resultados reais em <strong>cada detalhe.</strong></h2>
          </div>
          <p className="galeria__lead">Registros de serviços realizados pela {COMPANY.brandName} em sofás, cadeiras, camas e outros estofados.</p>
        </header>
        <div className="results-stage" role="region" aria-roledescription="carrossel" aria-label={`Resultados de serviços realizados pela ${COMPANY.brandName}`}>
          <div className="results-track" data-results-track="">
            {RESULTS.map((result, index) => (
              <article className="result-card" data-result-card="" data-result-index={index} key={result.id}>
                <div className="result-card__media"><img src={result.image.src} alt={result.image.alt} width={result.image.width} height={result.image.height} loading="lazy" decoding="async" /></div>
                <div className="result-card__topline"><span>{result.number}</span><span>{result.category}</span></div>
                <div className="result-card__content"><span className="result-card__badge">{result.badge}</span><h3>{result.title}</h3><p>{result.description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="results-controls">
          <div className="results-pagination" data-results-pagination="" aria-label="Selecionar resultado" />
          <a className="hero-cta hero-cta--primary results-cta" href={createWhatsappUrl(WHATSAPP_MESSAGES.budget)} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar orçamento com a ${COMPANY.brandName} pelo WhatsApp`}>
            <span aria-hidden="true" className="hero-cta__icon"><WhatsAppIcon className="hero-cta__whatsapp" /></span>
            <span className="hero-cta__label">Solicitar orçamento</span>
            <span aria-hidden="true" className="hero-cta__arrow"><ArrowRightIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
