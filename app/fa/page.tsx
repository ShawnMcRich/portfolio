import type { Metadata } from "next";
import { HomePage } from "../site";

export const metadata: Metadata = {
  title: { absolute: "شاهین غنی زاده | مدیر فنی محصول" },
  description: "مدیر فنی محصول و توسعه دهنده ارشد فرانت اند با تمرکز بر هوش مصنوعی، مارکت پلیس و محصولات داده محور.",
  alternates: { canonical: "https://shahinghanizadeh.ir/fa", languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" } },
};
export default function PersianHome() { return <HomePage locale="fa"/>; }
