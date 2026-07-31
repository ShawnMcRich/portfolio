import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Shahin Ghanizadeh | Technical Product Manager" },
  description:
    "Technical Product Manager and Senior Frontend Engineer building AI, marketplace, and operational products from strategy through delivery.",
  alternates: {
    canonical: "https://shahinghanizadeh.ir",
    languages: { en: "https://shahinghanizadeh.ir", fa: "https://shahinghanizadeh.ir/fa" },
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
