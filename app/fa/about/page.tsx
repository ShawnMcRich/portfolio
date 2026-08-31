import type { Metadata } from "next";
import { profilePageJsonLd, serializeJsonLd } from "../../seo";
import { AboutPage } from "../../site";

export const metadata: Metadata = {
  title: "درباره شاهین غنی‌زاده",
  description:
    "درباره شاهین غنی‌زاده، مدیر ارشد محصول فنی با تمرکز بر محصولات هوش مصنوعی و ده سال سابقه در محصول، UX و مهندسی نرم‌افزار.",
  alternates: { canonical: "/fa/about", languages: { en: "/about", fa: "/fa/about" } },
  openGraph: {
    type: "profile",
    siteName: "Shahin Ghanizadeh",
    url: "/fa/about",
    locale: "fa_IR",
    title: "درباره شاهین غنی‌زاده",
    description: "مدیر ارشد محصول فنی با تمرکز بر محصولات هوش مصنوعی و سابقه طراحی و مهندسی نرم‌افزار.",
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
