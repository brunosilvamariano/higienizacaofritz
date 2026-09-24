import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Fritz Higienização",
  authors: [{ name: "Bruno Mariano" }],
  generator: "Desenvolvido por Bruno Mariano",
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
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{
      url: "/assets/images/og-fritz-social-1200x628.jpg",
      width: 1200,
      height: 628,
      alt: SITE_NAME,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/images/og-fritz-social-1200x628.jpg"],
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
    title: "Fritz Higienização",
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
    <html lang="pt-BR">
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
          href="/assets/images/hero/fritz-hero.webp"
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
