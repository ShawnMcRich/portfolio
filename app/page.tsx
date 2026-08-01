import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Shahin Ghanizadeh | Technical Product Manager" },
  description:
    "I build products from the first messy question through UX, engineering, QA, and release. Technical Product Manager and Senior Frontend Engineer.",
  alternates: {
    canonical: "https://shahinghanizadeh.ir",
    languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" },
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
