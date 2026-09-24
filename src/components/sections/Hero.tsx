export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="inicio">
      <svg aria-hidden="true" className="hero__radial-wave" viewBox="0 0 1200 900" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hero-radial-fill" cx="72%" cy="40%" r="72%">
            <stop offset="0%" stopColor="#2f6fed" stopOpacity="0.26"></stop>
            <stop offset="38%" stopColor="#5f8ff3" stopOpacity="0.17"></stop>
            <stop offset="68%" stopColor="#9bb8f8" stopOpacity="0.08"></stop>
            <stop offset="100%" stopColor="#dbe6ff" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
        <path d="M405 0H1200V900H320C426 841 471 768 488 684C507 588 466 535 397 512C325 488 283 446 293 390C304 327 380 305 414 253C455 191 425 119 405 0Z" fill="url(#hero-radial-fill)"></path>
      </svg>
      <div className="hero__location">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M18.5 9.7c0 4.3-6.5 9.1-6.5 9.1S5.5 14 5.5 9.7a6.5 6.5 0 1 1 13 0Z"></path>
          <circle cx="12" cy="9.7" r="1.8"></circle>
        </svg>
        <span>
          <strong>
            Joinville — SC
          </strong>
          <small>
            Itapoá • Barra Velha e +
          </small>
        </span>
      </div>
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Higienização de estofados
            <span>
              •
            </span>
            Joinville e região
          </p>
          <h1 className="hero__title" id="hero-title">
            <span>
              Higienização
            </span>
            <span className="hero__title-accent">
              Impermeabilização
            </span>
          </h1>
          <p className="hero__lead">
            Limpeza e proteção para sofás, cadeiras, colchões, poltronas e outros estofados, com avaliação conforme o tecido e a necessidade da peça.
          </p>
          <div aria-label="Ações principais" className="hero__actions">
            <a className="hero-cta hero-cta--primary" href="https://wa.me/5547999051278?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20estofado." rel="noopener noreferrer" target="_blank">
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
            <a className="hero-cta hero-cta--secondary" href="#galeria">
              <span aria-hidden="true" className="hero-cta__icon">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect height="6.5" rx="1.4" width="6.5" x="4" y="4"></rect>
                  <rect height="6.5" rx="1.4" width="6.5" x="13.5" y="4"></rect>
                  <rect height="6.5" rx="1.4" width="6.5" x="4" y="13.5"></rect>
                  <path d="M15 17h5M17.5 14.5V20"></path>
                </svg>
              </span>
              <span className="hero-cta__label">
                Ver resultados
              </span>
              <span aria-hidden="true" className="hero-cta__arrow">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M6 12h11"></path>
                  <path d="m13.5 8.5 3.5 3.5-3.5 3.5"></path>
                </svg>
              </span>
            </a>
          </div>
          <section className="hero__proof" aria-label="Avaliações no Google">
            <div className="hero__proof-avatars" aria-hidden="true">
              <img src="/assets/images/hero/reviews/review-1.webp" alt="" width="52" height="52" />
              <img src="/assets/images/hero/reviews/review-2.webp" alt="" width="52" height="52" />
              <img src="/assets/images/hero/reviews/review-3.webp" alt="" width="52" height="52" />
              <span className="hero__proof-more">
                +286
              </span>
            </div>
            <span className="hero__proof-divider" aria-hidden="true"></span>
            <div className="hero__proof-google">
              <img className="hero__proof-google-icon" src="/assets/brand/google-g.svg" alt="Google" width="32" height="32" />
              <div className="hero__proof-copy">
                <strong>
                  Mais de 286 avaliações
                </strong>
                <div className="hero__proof-rating" aria-label="Avaliação 5,0 de 5">
                  <span className="hero__proof-stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span>
                    5,0 de 5
                  </span>
                </div>
                <small>
                  Clientes que confiam e recomendam.
                </small>
              </div>
            </div>
          </section>
        </div>
        <div aria-label="Profissional da Fritz Higienização e Impermeabilização" className="hero__visual">
          <img alt="Profissional da Fritz Higienização e Impermeabilização durante atendimento" className="hero__portrait" fetchPriority="high" height="2048" src="/assets/images/hero/fritz-hero.webp" width="1675" />
        </div>
      </div>
    </section>
  );
}
