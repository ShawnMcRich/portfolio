import type { Metadata } from "next";
import { AboutPage } from "../site";
export const metadata: Metadata = { title: "About", description: "About Shahin Ghanizadeh, Technical Product Manager and Senior Frontend Engineer.", alternates: { canonical: "/about", languages: { en: "/about", fa: "/fa/about" } } };
export default function About() { return <AboutPage locale="en"/>; }
