import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import {
  PERSON_NAME,
  SITE_URL,
  personJsonLd,
  serializeJsonLd,
  websiteJsonLd,
} from "./seo";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const vazir = Vazirmatn({ variable: "--font-vazir", subsets: ["arabic"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PERSON_NAME, template: `%s | ${PERSON_NAME}` },
  description:
    "Official portfolio of Shahin Ghanizadeh, a technical product manager, product designer, and senior frontend engineer working across product strategy, UX, AI, delivery, QA, and release.",
  applicationName: "Shahin Ghanizadeh Portfolio",
  authors: [{ name: PERSON_NAME, url: "/about" }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
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
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    title: "Shahin Ghanizadeh | Technical Product Manager",
    description:
      "Product strategy, product design, frontend engineering, applied AI, and evidence from products taken into real use.",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shahin Ghanizadeh - Technical Product Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahin Ghanizadeh | Technical Product Manager",
    description: "Product strategy, UX, applied AI, frontend engineering, QA, and launch work with evidence from real products.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const identityGraph = {
    "@context": "https://schema.org",
    "@graph": [websiteJsonLd, personJsonLd],
  };

  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable} ${vazir.variable}`}>
        {children}
        <script
          id="identity-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(identityGraph) }}
        />
      </body>
    </html>
  );
}
