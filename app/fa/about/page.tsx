import type { Metadata } from "next";
import { profilePageJsonLd, serializeJsonLd } from "../../seo";
import { AboutPage } from "../../site";

export const metadata: Metadata = {
  title: "درباره شاهین غنی‌زاده",
  description:
    "درباره شاهین غنی‌زاده، مدیر فنی محصول، طراح محصول و توسعه‌دهنده ارشد فرانت‌اند با تجربه در محصولات هوش مصنوعی، UX، اجرا، QA و عملیات.",
  alternates: { canonical: "/fa/about", languages: { en: "/about", fa: "/fa/about" } },
  openGraph: {
    type: "profile",
    siteName: "Shahin Ghanizadeh",
    url: "/fa/about",
    locale: "fa_IR",
    title: "درباره شاهین غنی‌زاده",
    description: "مدیر فنی محصول، طراح محصول و توسعه‌دهنده ارشد فرانت‌اند.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "درباره شاهین غنی‌زاده" }],
  },
};

export default function PersianAbout() {
  return (
    <>
      <AboutPage locale="fa" />
      <script
        id="profile-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(profilePageJsonLd("fa")) }}
      />
    </>
  );
}
