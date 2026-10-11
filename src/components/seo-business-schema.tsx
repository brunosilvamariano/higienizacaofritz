import { site } from '@/config/site';
import { contact } from '@/config/contact';
import socialImage from '@/assets/images/shared/fritz/social-share.jpg';

export function BusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#fritz`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(socialImage.src, site.url).href,
    telephone: `+${contact.whatsappNumber}`,
    sameAs: [contact.instagram],
    areaServed: [
      'Joinville',
      'Itapoá',
      'São Francisco do Sul',
      'Balneário Camboriú',
      'Balneário Piçarras',
      'Balneário Barra do Sul',
      'Barra Velha',
    ].map((name) => ({ '@type': 'City', name })),
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
