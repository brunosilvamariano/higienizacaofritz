import { SITE_URL } from "./site";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "HomeAndConstructionBusiness"
  ],
  "@id": `${SITE_URL}/#empresa`,
  "name": "Fritz Higienização e Impermeabilização",
  "url": `${SITE_URL}/`,
  "image": `${SITE_URL}/assets/images/og-fritz-social-1200x628.jpg`,
  "telephone": "+55 47 99905-1278",
  "sameAs": [
    "https://www.instagram.com/higienizacaofritz/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Octacílio José de Souza, 25",
    "addressLocality": "Joinville",
    "addressRegion": "SC",
    "postalCode": "89230-435",
    "addressCountry": "BR"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Joinville",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "Itapoá",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "São Francisco do Sul",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "Balneário Camboriú",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "Balneário Piçarras",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "Balneário Barra do Sul",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "City",
      "name": "Barra Velha",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SC",
        "addressCountry": "BR"
      }
    }
  ],
  "description": "Higienização e impermeabilização de sofás, cadeiras, colchões e outros estofados em Joinville e região.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Fritz",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Higienização de estofados"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Impermeabilização de estofados"
        }
      }
    ]
  }
};
