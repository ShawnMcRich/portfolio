import type { Metadata } from "next";
import { WorkPage } from "../../site";
export const metadata: Metadata = { title: "پروژه ها", description: "کیس استادی های منتخب محصول شاهین غنی زاده.", alternates: { canonical: "/fa/work", languages: { en: "/work", fa: "/fa/work" } } };
export default function PersianWork() { return <WorkPage locale="fa"/>; }
