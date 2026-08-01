import type { Metadata } from "next";
import { WorkPage } from "../site";
export const metadata: Metadata = { title: "Work", description: "Selected product case studies by Shahin Ghanizadeh.", alternates: { canonical: "/work", languages: { en: "/work", fa: "/fa/work" } } };
export default function Work() { return <WorkPage locale="en"/>; }
