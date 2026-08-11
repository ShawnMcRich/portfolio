import type { Metadata } from "next";
import { ThinkingPage } from "../../site";
export const metadata: Metadata = { title: "یادداشت‌های محصول شاهین غنی‌زاده", description: "یادداشت‌های شاهین غنی‌زاده درباره کاهش هزینه LLM، طراحی اعتماد و رسیدگی، و اولویت‌بندی نقشه راه در Apex و Vibe.", alternates: { canonical: "/fa/thinking", languages: { en: "/thinking", fa: "/fa/thinking" } }, openGraph: { type: "website", siteName: "Shahin Ghanizadeh", locale: "fa_IR", url: "/fa/thinking", title: "یادداشت‌های محصول شاهین غنی‌زاده", description: "یادداشت‌هایی درباره هزینه LLM، اعتماد و رسیدگی، و اولویت‌بندی نقشه راه.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "یادداشت‌های محصول شاهین غنی‌زاده" }] } };
export default function PersianThinking() { return <ThinkingPage locale="fa"/>; }
