import { site } from '@/config/site';
import { contact } from '@/config/contact';
import socialImage from '@/assets/images/shared/fritz/social-share.jpg';
import logo from '@/assets/images/shared/fritz/fritz-mark.png';
import { serviceAreaNames } from '@/content/service-areas';
import { googleReviews } from '@/content/google-reviews';

export function BusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#fritz`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(socialImage.src, site.url).href,
    logo: new URL(logo.src, site.url).href,
    telephone: `+${contact.whatsappNumber}`,
    sameAs: [contact.instagram, googleReviews.profile],
    areaServed: serviceAreaNames.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'State', name: 'Santa Catarina' },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Fritz',
      itemListElement: [
        'Higienização de estofados',
        'Higienização de colchões',
        'Higienização de tapetes',
        'Impermeabilização de estofados',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD contains only trusted configuration and escapes HTML delimiters.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\u003c'),
      }}
    />
  );
}
