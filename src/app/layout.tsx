import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { COMPANY } from "@/config/company";
import { SEO } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: SEO.title,
  description: SEO.description,
  applicationName: COMPANY.shortName,
  publisher: COMPANY.name,
  generator: "Next.js",
  category: SEO.category,
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    siteName: COMPANY.name,
    title: SEO.title,
    description: SEO.description,
    url: "/",
    images: [
      {
        url: SEO.socialImage,
        width: SEO.socialImageWidth,
        height: SEO.socialImageHeight,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.socialImage],
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico?v=2" },
      { url: "/assets/favicon/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/assets/favicon/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest?v=2",
  appleWebApp: {
    capable: true,
    title: COMPANY.shortName,
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4a82",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={SEO.language}>
      <head>
        <link
          rel="preload"
          href="/assets/fonts/inter-latin-800-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={SEO.primaryImage}
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
