import type { Metadata } from "next";
import { ServicesPage } from "../../site";

export const metadata: Metadata = {
  title: "خدمات مدیریت محصول، طراحی و توسعه وب",
  description: "خدمات مدیریت محصول، طراحی تجربه کاربر، توسعه فرانت‌اند و وب توسط شاهین غنی‌زاده.",
  alternates: { canonical: "/fa/services", languages: { en: "/services", fa: "/fa/services" } },
  openGraph: { type: "website", siteName: "Shahin Ghanizadeh", locale: "fa_IR", url: "/fa/services", title: "خدمات مدیریت محصول، طراحی و توسعه وب", description: "خدمات مدیریت محصول، طراحی تجربه کاربر، توسعه فرانت‌اند و وب توسط شاهین غنی‌زاده.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "خدمات شاهین غنی‌زاده" }] },
};

export default function Page() {
  return <ServicesPage locale="fa" />;
}
