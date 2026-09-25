import { COMPANY } from "./company";
import { SEO } from "./seo";
import { FAQ_ITEMS } from "@/content/faq";
import { SERVICES } from "@/content/services";

const areaServed = COMPANY.serviceAreas.map((name) => ({
  "@type": "City",
  name,
  containedInPlace: {
    "@type": "State",
    name: "Santa Catarina",
  },
}));

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SEO.siteUrl}/#empresa`,
      name: COMPANY.name,
      alternateName: COMPANY.shortName,
      url: `${SEO.siteUrl}/`,
      description: SEO.description,
      image: [
        `${SEO.siteUrl}${SEO.socialImage}`,
        `${SEO.siteUrl}${SEO.primaryImage}`,
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SEO.siteUrl}/assets/brand/fritz-mark.png`,
      },
      telephone: COMPANY.contact.phoneE164,
      sameAs: [COMPANY.contact.instagramUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.streetAddress,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: COMPANY.reviews.rating,
        reviewCount: COMPANY.reviews.count,
        bestRating: 5,
        worstRating: 1,
      },
      areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de higienização e impermeabilização",
        itemListElement: SERVICES.slice(0, 2).map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SEO.siteUrl}/#${service.id}`,
            name: service.schemaName,
            description: service.schemaDescription,
            provider: { "@id": `${SEO.siteUrl}/#empresa` },
            areaServed,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SEO.siteUrl}/#website`,
      url: `${SEO.siteUrl}/`,
      name: COMPANY.name,
      description: SEO.description,
      inLanguage: SEO.language,
      publisher: { "@id": `${SEO.siteUrl}/#empresa` },
    },
    {
      "@type": "WebPage",
      "@id": `${SEO.siteUrl}/#webpage`,
      url: `${SEO.siteUrl}/`,
      name: SEO.title,
      description: SEO.description,
      isPartOf: { "@id": `${SEO.siteUrl}/#website` },
      about: { "@id": `${SEO.siteUrl}/#empresa` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SEO.siteUrl}${SEO.socialImage}`,
        width: SEO.socialImageWidth,
        height: SEO.socialImageHeight,
      },
      inLanguage: SEO.language,
    },
    {
      "@type": "FAQPage",
      "@id": `${SEO.siteUrl}/#faq`,
      url: `${SEO.siteUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
      isPartOf: { "@id": `${SEO.siteUrl}/#webpage` },
      inLanguage: SEO.language,
    },
  ],
};
