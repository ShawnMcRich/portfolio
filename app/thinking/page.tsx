import type { Metadata } from "next";
import { ThinkingPage } from "../site";
export const metadata: Metadata = { title: "Product Thinking", description: "Practical product notes from systems Shahin Ghanizadeh has built and operated.", alternates: { canonical: "/thinking", languages: { en: "/thinking", fa: "/fa/thinking" } } };
export default function Thinking() { return <ThinkingPage locale="en"/>; }
