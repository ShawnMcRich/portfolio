import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Shahin Ghanizadeh | Senior Technical Product Manager - AI Products" },
  description:
    "Official portfolio of Shahin Ghanizadeh, a Senior Technical Product Manager focused on AI products, with 10 years across product, UX, and software engineering.",
  alternates: {
    canonical: "https://shahinghanizadeh.ir",
    languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" },
  },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    locale: "en_US",
    url: "https://shahinghanizadeh.ir",
    title: "Shahin Ghanizadeh | Senior Technical Product Manager - AI Products",
    description: "AI product discovery, regulated voice AI, roadmaps, requirements, technical delivery, QA, and launch work with evidence from real products.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shahin Ghanizadeh - Technical Product Manager" }],
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
