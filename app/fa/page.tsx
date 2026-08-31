import type { Metadata } from "next";
import { HomePage } from "../site";

export const metadata: Metadata = {
  title: { absolute: "شاهین غنی‌زاده | مدیر ارشد محصول فنی و محصولات هوش مصنوعی" },
  description: "وب‌سایت رسمی شاهین غنی‌زاده، مدیر ارشد محصول فنی با تمرکز بر محصولات هوش مصنوعی و ده سال سابقه در محصول، UX و مهندسی نرم‌افزار.",
  alternates: { canonical: "https://shahinghanizadeh.ir/fa", languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" } },
  openGraph: {
    type: "website",
    siteName: "Shahin Ghanizadeh",
    url: "https://shahinghanizadeh.ir/fa",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    title: "شاهین غنی‌زاده | مدیر ارشد محصول فنی و محصولات هوش مصنوعی",
    description: "شناخت مسئله، استراتژی محصول، Voice AI، نیازمندی‌ها، تحویل فنی، QA و لانچ در پروژه‌های واقعی.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "شاهین غنی‌زاده، مدیر فنی محصول" }],
  },
};
export default function PersianHome() { return <HomePage locale="fa"/>; }
