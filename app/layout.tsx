import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { siteGraphJsonLd } from "@/lib/json-ld";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gtmId = "GTM-W25FQX2Z";

// Favicon: Next.js nutzt `app/icon.png` (Bienen-Mark) automatisch.

export const metadata: Metadata = {
  metadataBase: new URL("https://mentionbee.ai"),
  title: "MentionBee – AI Visibility Audit",
  description:
    "Warum empfiehlt KI deine Konkurrenz – dich aber nicht? MentionBee zeigt dir, warum ChatGPT, Claude, Gemini & Co. dein Unternehmen (noch) nicht empfehlen – und was du tun kannst.",
  openGraph: {
    title: "MentionBee – Warum empfiehlt KI deine Konkurrenz?",
    description:
      "AI Visibility Audit: MentionBee zeigt dir, warum ChatGPT, Claude, Gemini und Perplexity dein Unternehmen (noch) nicht empfehlen – und wo du ansetzen kannst.",
    url: "https://mentionbee.ai",
    siteName: "MentionBee",
    images: [{ url: "https://mentionbee.ai/opengraph-image", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentionBee – AI Visibility Audit",
    description:
      "Finde heraus, warum ChatGPT, Claude, Gemini und Perplexity deine Konkurrenz empfehlen – und dich vielleicht nicht.",
    images: ["https://mentionbee.ai/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-24 md:pb-0">
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
            __html: JSON.stringify(siteGraphJsonLd()),
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
        <main className="flex min-w-0 flex-1 flex-col">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
