import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Shahin Ghanizadeh | Technical Product Manager" },
  description:
    "Official portfolio of Shahin Ghanizadeh, a technical product manager, product designer, and senior frontend engineer. Explore product strategy, UX, AI, engineering, QA, and launch case studies.",
  alternates: {
    canonical: "https://shahinghanizadeh.ir",
    languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" },
  },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    locale: "en_US",
    url: "https://shahinghanizadeh.ir",
    title: "Shahin Ghanizadeh | Technical Product Manager",
    description: "Product strategy, UX, applied AI, frontend engineering, QA, and launch work with evidence from real products.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shahin Ghanizadeh - Technical Product Manager" }],
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
