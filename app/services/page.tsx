import type { Metadata } from "next";
import { ServicesPage } from "../site";

export const metadata: Metadata = {
  title: "Product, UX, and Web Development Services",
  description: "Selected product management, UX, frontend, and web development services by Shahin Ghanizadeh.",
  alternates: { canonical: "/services", languages: { en: "/services", fa: "/fa/services" } },
  openGraph: { type: "website", siteName: "Shahin Ghanizadeh", locale: "en_US", url: "/services", title: "Product, UX, and Web Development Services", description: "Product management, UX, frontend, and web development services by Shahin Ghanizadeh.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Services by Shahin Ghanizadeh" }] },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
