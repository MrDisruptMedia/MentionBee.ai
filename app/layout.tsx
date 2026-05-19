import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gtmId = "GTM-W25FQX2Z";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MentionBee",
  url: "https://www.mentionbee.ai",
  logo: "https://www.mentionbee.ai/mentionbee-logo-transparent.png",
  description:
    "MentionBee analysiert die AI-Sichtbarkeit von Unternehmen in ChatGPT, Claude, Gemini und Perplexity – mit Wettbewerbsvergleich und priorisiertem Maßnahmenplan.",
  email: "hello@mentionbee.ai",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wieslergasse 2",
      addressLocality: "Zürich",
      postalCode: "8049",
      addressCountry: "CH",
    },
  },
  sameAs: ["https://www.linkedin.com/company/mentionbee"],
};

// Favicon: Next.js nutzt `app/icon.png` automatisch; `metadata.icons` ergänzt Link-Tags.

export const metadata: Metadata = {
  title: "MentionBee.ai",
  description:
    "MentionBee analysiert, ob ChatGPT, Perplexity & Co. deine Marke nennen, empfehlen oder ignorieren – inklusive Wettbewerbsvergleich.",
  icons: {
    icon: "/mentionbee-logo-transparent.png",
    apple: "/mentionbee-logo-transparent.png",
  },
  openGraph: {
    title: "MentionBee – Wirst du von KI empfohlen?",
    description:
      "MentionBee analysiert, ob ChatGPT, Perplexity & Co. deine Marke nennen, empfehlen oder ignorieren – inklusive Wettbewerbsvergleich.",
    url: "https://www.mentionbee.ai",
    siteName: "MentionBee",
    images: [{ url: "https://www.mentionbee.ai/opengraph-image", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentionBee – Wirst du von KI empfohlen?",
    description: "AI Visibility Reports für smarte Marken im DACH-Raum.",
    images: ["https://www.mentionbee.ai/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
            `.trim(),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
