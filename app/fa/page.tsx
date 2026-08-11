import type { Metadata } from "next";
import { HomePage } from "../site";

export const metadata: Metadata = {
  title: { absolute: "شاهین غنی‌زاده | مدیر فنی محصول" },
  description: "وب‌سایت رسمی شاهین غنی‌زاده، مدیر فنی محصول، طراح محصول و توسعه‌دهنده ارشد فرانت‌اند؛ همراه با پروژه‌های واقعی در محصول، UX، هوش مصنوعی، QA و لانچ.",
  alternates: { canonical: "https://shahinghanizadeh.ir/fa", languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" } },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    url: "https://shahinghanizadeh.ir/fa",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    title: "شاهین غنی‌زاده | مدیر فنی محصول",
    description: "مدیریت محصول، طراحی تجربه، هوش مصنوعی، توسعه فرانت‌اند، QA و لانچ در پروژه‌های واقعی.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "شاهین غنی‌زاده، مدیر فنی محصول" }],
  },
};
export default function PersianHome() { return <HomePage locale="fa"/>; }
