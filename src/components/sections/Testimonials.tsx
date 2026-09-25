import { COMPANY } from "@/config/company";
import { REVIEWS } from "@/content/reviews";

export function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="testimonials__layout">
        <div className="testimonials__intro">
          <p className="testimonials__eyebrow">
            <span aria-hidden="true" className="testimonials__eyebrow-icon">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19c.6-3.4 2.6-5.2 5.5-5.2s4.9 1.8 5.5 5.2" />
                <path d="M15.5 5.5a3 3 0 0 1 0 5.8" />
                <path d="M16.5 13.8c2.2.4 3.6 2.1 4 4.7" />
              </svg>
            </span>
            Quem confia na {COMPANY.brandName}
          </p>
          <h2 id="testimonials-title">Cuidado que conquista <strong>a confiança.</strong></h2>
          <p className="testimonials__lead">
            Trechos de avaliações publicadas no Google. Acesse a fonte em cada card para consultar o comentário.
          </p>
          <div className="testimonials__rating">
            <div>
              <div className="testimonials__google-title">
                <span className="google-word" aria-label="Google">
                  {"Google".split("").map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}
                </span>
                <strong>Avaliações</strong>
              </div>
              <div className="testimonials__score">
                <b>{COMPANY.reviews.ratingLabel}</b>
                <span aria-label={`${COMPANY.reviews.rating} de 5 estrelas`} className="testimonial__stars">★★★★★</span>
                <span>({COMPANY.reviews.count})</span>
              </div>
            </div>
          </div>
          <a className="testimonials__source" href={COMPANY.reviews.writeReviewUrl} target="_blank" rel="noopener noreferrer">
            Avalie-nos no Google ↗
          </a>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__cards" id="reviews-track" role="region" aria-label="Avaliações de clientes, deslize ou use as setas do teclado" tabIndex={0}>
            {REVIEWS.map((review, index) => (
              <figure className="testimonial" aria-label={`Avaliação ${index + 1} de ${REVIEWS.length}, ${review.author}`} key={review.id}>
                <figcaption className="testimonial__header">
                  <span className="testimonial__portrait">
                    <img src={review.image} alt="" width="44" height="44" loading="lazy" />
                    <img className="testimonial__google" src="/assets/brand/google-g.svg" width="18" height="18" alt="Google" />
                  </span>
                  <div className="testimonial__identity">
                    <div className="testimonial__name"><cite>{review.author}</cite></div>
                    <small>{review.relativeDate}</small>
                  </div>
                </figcaption>
                <div className="testimonial__stars" aria-label={`${review.rating} de 5 estrelas`}><span aria-hidden="true">★★★★★</span></div>
                <blockquote>{review.quote}</blockquote>
                <a className="testimonial__original" href={review.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Avaliação no Google <span aria-hidden="true">↗</span>
                </a>
              </figure>
            ))}
          </div>
          <div className="testimonials__controls" hidden>
            <button type="button" data-review-prev="" aria-label="Avaliações anteriores" aria-controls="reviews-track">←</button>
            <div className="testimonials__progress" data-review-progress="" role="progressbar" aria-label="Progresso das avaliações" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
              <span className="testimonials__progress-fill" data-review-progress-fill="" />
            </div>
            <button type="button" data-review-next="" aria-label="Próximas avaliações" aria-controls="reviews-track">→</button>
          </div>
          <p className="testimonials__hint">Deslize para ler os outros depoimentos →</p>
        </div>
      </div>
    </section>
  );
}
