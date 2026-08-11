import type { Metadata } from "next";
import { ServicesPage } from "../site";

export const metadata: Metadata = {
  title: "Product, UX, and Web Development Services",
  description: "Selected product management, UX, frontend, and web development services by Shahin Ghanizadeh.",
  alternates: { canonical: "/services", languages: { en: "/services", fa: "/fa/services" } },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
