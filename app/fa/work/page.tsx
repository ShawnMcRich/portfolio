import type { Metadata } from "next";
import { WorkPage } from "../../site";
export const metadata: Metadata = { title: "پروژه‌ها و مطالعات موردی محصول", description: "پروژه‌های شاهین غنی‌زاده در Apex، Vibe، First Choice، حسین‌طلب و MRM؛ از تعریف محصول و UX تا مهندسی، QA و لانچ.", alternates: { canonical: "/fa/work", languages: { en: "/work", fa: "/fa/work" } }, openGraph: { type: "website", siteName: "Shahin Ghanizadeh", locale: "fa_IR", url: "/fa/work", title: "پروژه‌های محصول شاهین غنی‌زاده", description: "مطالعات موردی واقعی در استراتژی محصول، UX، هوش مصنوعی، مهندسی، QA و لانچ.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "پروژه‌های محصول شاهین غنی‌زاده" }] } };
export default function PersianWork() { return <WorkPage locale="fa"/>; }
