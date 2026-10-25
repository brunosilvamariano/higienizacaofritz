import { GoogleIcon, GoogleWord } from '@/components/ui/social-icons';
import { googleReviews } from '@/content/google-reviews';
import './service-marquee.css';

const featuredReviewers = googleReviews.items.filter((review) =>
  ['Bia Marina', 'Anne Karoline', 'Aline Grasso', 'Bruna Sena'].includes(
    review.name,
  ),
);

export function ServiceMarquee() {
  return (
    <section
      className="service-marquee service-trust-strip"
      aria-label="Reputação do Fritz no Google"
    >
      <div className="service-marquee-band">
        <div
          className="service-marquee-metrics"
          title={`Dados conferidos em ${googleReviews.checkedAt}`}
        >
          <div className="service-marquee-trust-heading">
            <GoogleIcon />
            <span>
              Reputação no <GoogleWord />
            </span>
          </div>
          <a
            href={googleReviews.profile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Nota ${googleReviews.rating} de 5 no Google — abrir perfil do Fritz em nova aba`}
          >
            <span className="service-marquee-number">
              {googleReviews.rating}
              <span className="service-marquee-score-scale">/5</span>
            </span>
            <span className="service-marquee-caption">Nota dos clientes</span>
            <span className="service-marquee-stars" aria-hidden="true">
              ★★★★★
            </span>
          </a>
          <a
            href={googleReviews.profile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${googleReviews.count} avaliações no Google — abrir perfil do Fritz em nova aba`}
          >
            <span className="service-marquee-number">
              {googleReviews.count}
            </span>
            <span className="service-marquee-caption">
              Avaliações publicadas
            </span>
            <span className="service-marquee-reviewers">
              {featuredReviewers.map((review) => (
                <Image
                  key={review.name}
                  src={review.image}
                  width={36}
                  height={36}
                  alt={`Foto de perfil de ${review.name}`}
                  title={review.name}
                />
              ))}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
