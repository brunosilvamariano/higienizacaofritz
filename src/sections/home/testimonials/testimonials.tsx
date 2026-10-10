import { TitleReveal } from '@/animations/title-reveal';
import Image from 'next/image';
import { googleReviews } from '@/content/google-reviews';
import { developer } from '@/config/developer';
import { HoverLabel } from '@/components/ui/hover-label';
import './testimonials.css';
function GoogleMark() {
  return (
    <svg className="review-google-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.92a6 6 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.59Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.51 3.83 1.51l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59A5.98 5.98 0 0 1 12 5.96Z"
      />
    </svg>
  );
}
export function Testimonials() {
  return (
    <section
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="reference-heading">
        <TitleReveal id="testimonials-title" text="Avaliações no Google" />
        <p className="review-profile-name">Fritz — Higienização e impermeabilização</p>
      </div>
      <div className="review-summary">
        <a
          href={developer.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleMark />
          <span>
            <strong>{googleReviews.rating} de 5</strong> · {googleReviews.count}{' '}
            avaliações · Ver no Google ↗
          </span>
        </a>
      </div>
      <div className="testimonial-cards" data-slide-cards="">
        {googleReviews.items.map((item) => (
          <article
            key={item.name}
            className="testimonial-card"
            data-slide-card=""
          >
            <div className="review-card-top">
              <span
                className="testimonial-stars"
                role="img"
                aria-label="5 de 5 estrelas"
              >
                ★★★★★
              </span>
              <GoogleMark />
            </div>
            <div className="review-card-body">
              {item.text ? (
                <blockquote>“{item.text}”</blockquote>
              ) : (
                <p className="review-no-comment">
                  Avaliação de 5 estrelas, sem comentário escrito.
                </p>
              )}
              <div className="testimonial-author">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  unoptimized
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.excerpt
                      ? 'Trecho de avaliação no Google'
                      : 'Avaliação no Google'}
                  </p>
                </div>
              </div>
              <a
                className="review-source"
                href={item.profile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver avaliações de ${item.name} no Google`}
              >
                Ver no Google ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="review-actions">
        <a
          className="pill-link"
          href={developer.googleReview}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverLabel variant="primary">
            Deixar uma avaliação no Google
          </HoverLabel>
        </a>
      </div>
      <p className="review-disclosure">
        Avaliações públicas do perfil de Bruno Mariano Silva sobre serviços de
        criação de sites. Nota e quantidade conferidas em{' '}
        {googleReviews.checkedAt}.
      </p>
    </section>
  );
}
