import { googleReviews } from '@/content/google-reviews';
import './review-strip.css';

export function ReviewStrip() {
  return (
    <section
      className="review-strip section"
      aria-label="Resumo das avaliações do Fritz no Google"
    >
      <div className="review-strip-inner">
        <div className="review-strip-label tw:flex tw:items-center">
          <svg
            className="review-strip-google"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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
          <div className="review-strip-brand-copy">
            <span className="review-strip-caption">Avaliações no</span>
            <span
              className="review-strip-wordmark"
              role="img"
              aria-label="Google"
            >
              <span aria-hidden="true">G</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">o</span>
              <span aria-hidden="true">g</span>
              <span aria-hidden="true">l</span>
              <span aria-hidden="true">e</span>
            </span>
          </div>
        </div>
        <div
          className="review-strip-summary"
          role="img"
          aria-label={`${googleReviews.rating} de 5 estrelas, ${googleReviews.count} avaliações`}
        >
          <div
            className="review-strip-score tw:flex tw:items-center"
            aria-hidden="true"
          >
            <strong>{googleReviews.rating}</strong>
            <span className="review-strip-stars">★★★★★</span>
          </div>
          <span className="review-strip-count" aria-hidden="true">
            {googleReviews.count} avaliações
          </span>
        </div>
        <a
          className="review-strip-link tw:inline-flex tw:items-center"
          href={googleReviews.profile}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver avaliações do Fritz no Google — abrir em nova aba"
        >
          <span>Ver avaliações no Google</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
