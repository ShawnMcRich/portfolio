import type { Metadata } from "next";
import { profilePageJsonLd, serializeJsonLd } from "../seo";
import { AboutPage } from "../site";

export const metadata: Metadata = {
  title: "About Shahin Ghanizadeh",
  description:
    "Shahin Ghanizadeh is a Senior Technical Product Manager with 10 years across product, UX, and software engineering, including AI products, marketplaces, delivery, QA, and operations.",
  alternates: { canonical: "/about", languages: { en: "/about", fa: "/fa/about" } },
  openGraph: {
    type: "profile",
    siteName: "Shahin Ghanizadeh",
    locale: "en_US",
    url: "/about",
    title: "About Shahin Ghanizadeh",
    description:
      "Senior Technical Product Manager leading products from problem definition and roadmap through technical delivery, launch, and operation.",
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
