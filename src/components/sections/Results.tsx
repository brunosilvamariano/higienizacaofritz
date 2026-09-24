export function Results() {
  return (
    <section className="galeria" id="galeria" aria-labelledby="galeria-title" data-results-carousel="">
      <div className="galeria__inner">
        <header className="galeria__header">
          <div>
            <p className="galeria__eyebrow">
              <span className="galeria__eyebrow-icon" aria-hidden="true">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4 16.5 9 11l3.2 3.2L20 6.5"></path>
                  <path d="M15 6.5h5v5"></path>
                </svg>
              </span>
              Resultados reais
            </p>
            <h2 className="galeria__title" id="galeria-title">
              Resultados reais em
              <strong>
                cada detalhe.
              </strong>
            </h2>
          </div>
          <p className="galeria__lead">
            Registros de serviços realizados pela Fritz em sofás, cadeiras, camas e outros estofados.
          </p>
        </header>
        <div className="results-stage" role="region" aria-roledescription="carrossel" aria-label="Resultados de serviços realizados pela Fritz">
          <div className="results-track" data-results-track="">
            <article className="result-card" data-result-card="" data-result-index="0">
              <div className="result-card__media">
                <img src="/assets/images/resultados/higienizacao.jpg" alt="Higienização de sofá realizada pela Fritz" width="1024" height="1536" loading="lazy" decoding="async" />
              </div>
              <div className="result-card__topline">
                <span>
                  01
                </span>
                <span>
                  Higienização
                </span>
              </div>
              <div className="result-card__content">
                <span className="result-card__badge">
                  Serviço realizado
                </span>
                <h3>
                  Higienização de sofá
                </h3>
                <p>
                  Registro de atendimento em sofá, com atenção ao tecido, às áreas de uso e aos detalhes da peça.
                </p>
              </div>
            </article>
            <article className="result-card" data-result-card="" data-result-index="1">
              <div className="result-card__media">
                <img src="/assets/images/resultados/cadeira.jpg" alt="Cadeira estofada em serviço realizado pela Fritz" width="1024" height="1536" loading="lazy" decoding="async" />
              </div>
              <div className="result-card__topline">
                <span>
                  02
                </span>
                <span>
                  Cadeiras
                </span>
              </div>
              <div className="result-card__content">
                <span className="result-card__badge">
                  Serviço realizado
                </span>
                <h3>
                  Cadeiras estofadas
                </h3>
                <p>
                  Registro de atendimento em cadeira estofada, incluindo assento, encosto e acabamento do tecido.
                </p>
              </div>
            </article>
            <article className="result-card" data-result-card="" data-result-index="2">
              <div className="result-card__media">
                <img src="/assets/images/resultados/execucao.jpg" alt="Limpeza de costuras e detalhes de estofado realizada pela Fritz" width="1024" height="1536" loading="lazy" decoding="async" />
              </div>
              <div className="result-card__topline">
                <span>
                  03
                </span>
                <span>
                  Detalhes
                </span>
              </div>
              <div className="result-card__content">
                <span className="result-card__badge">
                  Execução real
                </span>
                <h3>
                  Costuras e detalhes
                </h3>
                <p>
                  Atenção às costuras e áreas de maior contato durante a higienização do estofado.
                </p>
              </div>
            </article>
            <article className="result-card" data-result-card="" data-result-index="3">
              <div className="result-card__media">
                <img src="/assets/images/resultados/cama.jpg" alt="Higienização de cama e cabeceira realizada pela Fritz" width="1024" height="1536" loading="lazy" decoding="async" />
              </div>
              <div className="result-card__topline">
                <span>
                  04
                </span>
                <span>
                  Camas
                </span>
              </div>
              <div className="result-card__content">
                <span className="result-card__badge">
                  Serviço realizado
                </span>
                <h3>
                  Camas e cabeceiras
                </h3>
                <p>
                  Registro de atendimento em colchão, base e cabeceira, conforme o material e a necessidade da peça.
                </p>
              </div>
            </article>
            <article className="result-card" data-result-card="" data-result-index="4">
              <div className="result-card__media">
                <img src="/assets/images/resultados/protecao.jpg" alt="Impermeabilização de tecido realizada pela Fritz" width="1024" height="1536" loading="lazy" decoding="async" />
              </div>
              <div className="result-card__topline">
                <span>
                  05
                </span>
                <span>
                  Impermeabilização
                </span>
              </div>
              <div className="result-card__content">
                <span className="result-card__badge">
                  Proteção do tecido
                </span>
                <h3>
                  Impermeabilização
                </h3>
                <p>
                  Aplicação de proteção para ajudar a reduzir a absorção imediata de líquidos no tecido.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="results-controls">
          <div className="results-pagination" data-results-pagination="" aria-label="Selecionar resultado"></div>
          <a className="hero-cta hero-cta--primary results-cta" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20estofado." target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento com a Fritz pelo WhatsApp">
            <span aria-hidden="true" className="hero-cta__icon">
              <svg aria-hidden="true" className="hero-cta__whatsapp" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.897 9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.89-9.885 9.89m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.688 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 0 0-3.489-8.413Z"></path>
              </svg>
            </span>
            <span className="hero-cta__label">
              Solicitar orçamento
            </span>
            <span aria-hidden="true" className="hero-cta__arrow">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 12h11"></path>
                <path d="m13.5 8.5 3.5 3.5-3.5 3.5"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
