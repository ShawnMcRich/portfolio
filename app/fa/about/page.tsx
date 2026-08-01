import type { Metadata } from "next";
import { AboutPage } from "../../site";
export const metadata: Metadata = { title: "درباره من", description: "درباره شاهین غنی زاده، مدیر فنی محصول و توسعه دهنده ارشد فرانت اند.", alternates: { canonical: "/fa/about", languages: { en: "/about", fa: "/fa/about" } } };
export default function PersianAbout() { return <AboutPage locale="fa"/>; }
