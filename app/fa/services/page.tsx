import type { Metadata } from "next";
import { ServicesPage } from "../../site";

export const metadata: Metadata = {
  title: "خدمات مدیریت محصول، طراحی و توسعه وب",
  description: "خدمات مدیریت محصول، طراحی تجربه کاربر، توسعه فرانت‌اند و وب توسط شاهین غنی‌زاده.",
  alternates: { canonical: "/fa/services", languages: { en: "/services", fa: "/fa/services" } },
};

export default function Page() {
  return <ServicesPage locale="fa" />;
}
