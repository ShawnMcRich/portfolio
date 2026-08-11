import type { Metadata } from "next";
import { profilePageJsonLd, serializeJsonLd } from "../seo";
import { AboutPage } from "../site";

export const metadata: Metadata = {
  title: "About Shahin Ghanizadeh",
  description:
    "Shahin Ghanizadeh is a technical product manager, product designer, and senior frontend engineer with experience across AI products, UX, delivery, QA, and operations.",
  alternates: { canonical: "/about", languages: { en: "/about", fa: "/fa/about" } },
  openGraph: {
    type: "profile",
    siteName: "Shahin Ghanizadeh",
    locale: "en_US",
    url: "/about",
    title: "About Shahin Ghanizadeh",
    description:
      "Technical product manager, product designer, and senior frontend engineer working from problem definition through release and operation.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "About Shahin Ghanizadeh" }],
  },
};

export default function About() {
  return (
    <>
      <AboutPage locale="en" />
      <script
        id="profile-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(profilePageJsonLd("en")) }}
      />
    </>
  );
}
