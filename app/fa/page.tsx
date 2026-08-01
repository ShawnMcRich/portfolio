import type { Metadata } from "next";
import { HomePage } from "../site";

export const metadata: Metadata = {
  title: { absolute: "شاهین غنی‌زاده | مدیر فنی محصول" },
  description: "از تعریف مسئله و طراحی تجربه تا مهندسی، QA و انتشار کنار محصول می‌مانم. مدیر فنی محصول و توسعه‌دهنده ارشد فرانت‌اند.",
  alternates: { canonical: "https://shahinghanizadeh.ir/fa", languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" } },
};
export default function PersianHome() { return <HomePage locale="fa"/>; }
