import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const vazir = Vazirmatn({ variable: "--font-vazir", subsets: ["arabic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shahinghanizadeh.ir"),
  title: { default: "Shahin Ghanizadeh", template: "%s | Shahin Ghanizadeh" },
  description: "Technical Product Manager and Senior Frontend Engineer who stays with the work from problem to release.",
  applicationName: "Shahin Ghanizadeh Portfolio",
  authors: [{ name: "Shahin Ghanizadeh" }],
  creator: "Shahin Ghanizadeh",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    title: "Shahin Ghanizadeh | Technical Product Manager",
    description: "Products I have shaped, designed, built, tested, and taken into real use.",
    url: "https://shahinghanizadeh.ir",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shahin Ghanizadeh - Technical Product Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahin Ghanizadeh | Technical Product Manager",
    description: "Products I have shaped, designed, built, tested, and taken into real use.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahin Ghanizadeh",
    alternateName: "شاهین غنی زاده",
    url: "https://shahinghanizadeh.ir",
    jobTitle: "Technical Product Manager and Senior Frontend Engineer",
    knowsLanguage: ["English", "Persian"],
    sameAs: [
      "https://www.linkedin.com/in/shahinghanizadeh",
      "https://github.com/ShawnMcRich",
      "https://www.instagram.com/shahinghanizadeh/",
    ],
  };

  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable} ${vazir.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
