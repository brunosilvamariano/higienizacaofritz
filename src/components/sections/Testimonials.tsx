export function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="testimonials__layout">
        <div className="testimonials__intro">
          <p className="testimonials__eyebrow">
            <span aria-hidden="true" className="testimonials__eyebrow-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3.5 19c.6-3.4 2.6-5.2 5.5-5.2s4.9 1.8 5.5 5.2"></path>
                <path d="M15.5 5.5a3 3 0 0 1 0 5.8"></path>
                <path d="M16.5 13.8c2.2.4 3.6 2.1 4 4.7"></path>
              </svg>
            </span>
            Quem confia na Fritz
          </p>
          <h2 id="testimonials-title">
            Cuidado que conquista
            <strong>
              a confiança.
            </strong>
          </h2>
          <p className="testimonials__lead">
            Trechos de avaliações publicadas no Google. Acesse a fonte em cada card para consultar o comentário.
          </p>
          <div className="testimonials__rating">
            <div>
              <div className="testimonials__google-title">
                <span className="google-word" aria-label="Google">
                  <span>
                    G
                  </span>
                  <span>
                    o
                  </span>
                  <span>
                    o
                  </span>
                  <span>
                    g
                  </span>
                  <span>
                    l
                  </span>
                  <span>
                    e
                  </span>
                </span>
                <strong>
                  Avaliações
                </strong>
              </div>
              <div className="testimonials__score">
                <b>
                  5,0
                </b>
                <span aria-label="5 de 5 estrelas" className="testimonial__stars">
                  ★★★★★
                </span>
                <span>
                  (286)
                </span>
              </div>
            </div>
          </div>
          <a className="testimonials__source" href="https://search.google.com/local/writereview?placeid=ChIJ-1-NVCabyEQRIdEgkmcPAzo" target="_blank" rel="noopener noreferrer">
            Avalie-nos no Google ↗
          </a>
        </div>
        <div className="testimonials__carousel">
          <div className="testimonials__cards" id="reviews-track" role="region" aria-label="Avaliações de clientes, deslize ou use as setas do teclado" tabIndex="0">
            <figure className="testimonial" aria-label="Avaliação 1 de 8, Camila Rosa Gomes">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-1.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Camila Rosa Gomes
                    </cite>
                  </div>
                  <small>
                    6 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Alfredo é muito cuidadoso e comprometido, o produto que é utilizado é muito cheiroso”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/113089659287269548207/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 2 de 8, Bia Marina">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-2.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Bia Marina
                    </cite>
                  </div>
                  <small>
                    6 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Excelente serviço! Limpeza de qualidade, bom atendimento e trabalho muito limpo”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/107311281463588243509/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 3 de 8, Ketti Pars">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-3.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Ketti Pars
                    </cite>
                  </div>
                  <small>
                    11 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Super recomendo o trabalho do Fritz! Caprichoso, cuidadoso e empenhado em solucionar o problema.”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/109811868611662659037/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 4 de 8, Aline Grasso">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-4.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Aline Grasso
                    </cite>
                  </div>
                  <small>
                    um mês atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Serviço impecável e ele deixa tudo bem limpinho depois. Passa pano no chão e tudo!”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/108130488889070730570/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 5 de 8, Fernanda Almeida">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-5.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Fernanda Almeida
                    </cite>
                  </div>
                  <small>
                    4 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Excelente serviço, atendimento e custo benefício! Deixou meu sofá e cadeiras impecaveis”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/111042481565476517886/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 6 de 8, Thays Leal">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-6.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Thays Leal
                    </cite>
                  </div>
                  <small>
                    5 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Serviço excelente! Impermeabilizei minhas cadeiras e cabeceira, ele isolou a parte de madeira com cuidado.”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/105085449511163122408/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 7 de 8, Andrey Eduardo">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-7.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Andrey Eduardo
                    </cite>
                  </div>
                  <small>
                    4 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “os sofás ficaram perfeitos, bem limpos e parecendo novos. A impermeabilização também foi realizada com maestria”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/106761727875842005597/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
            <figure className="testimonial" aria-label="Avaliação 8 de 8, Vera R">
              <figcaption className="testimonial__header">
                <span className="testimonial__portrait">
                  <img src="/assets/images/avaliacoes/cliente-8.png" alt="" width="44" height="44" loading="lazy" />
                  <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                </span>
                <div className="testimonial__identity">
                  <div className="testimonial__name">
                    <cite>
                      Vera R
                    </cite>
                  </div>
                  <small>
                    3 meses atrás
                  </small>
                </div>
              </figcaption>
              <div className="testimonial__stars" aria-label="5 de 5 estrelas">
                <span aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote>
                “Foi muito boa,empresa top sempre faço com eles indico de olhos fechados 🥰🤩”
              </blockquote>
              <a className="testimonial__original" href="https://www.google.com/maps/contrib/114502203980078275041/reviews?hl=pt-BR" target="_blank" rel="noopener noreferrer">
                Avaliação no Google
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </figure>
          </div>
          <div className="testimonials__controls" hidden>
            <button type="button" data-review-prev="" aria-label="Avaliações anteriores" aria-controls="reviews-track">
              ←
            </button>
            <div className="testimonials__progress" data-review-progress="" role="progressbar" aria-label="Progresso das avaliações" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
              <span className="testimonials__progress-fill" data-review-progress-fill=""></span>
            </div>
            <button type="button" data-review-next="" aria-label="Próximas avaliações" aria-controls="reviews-track">
              →
            </button>
          </div>
          <p className="testimonials__hint">
            Deslize para ler os outros depoimentos →
          </p>
        </div>
      </div>
    </section>
  );
}
