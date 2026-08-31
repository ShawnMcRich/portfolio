import type { MetadataRoute } from "next";
import { noteSlugs, projectSlugs } from "./data";
import { absoluteUrl } from "./seo";

export const dynamic = "force-static";

type RoutePair = {
  en: string;
  fa: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routePairs: RoutePair[] = [
    { en: "", fa: "/fa", priority: 1, changeFrequency: "monthly" },
    { en: "/about", fa: "/fa/about", priority: 0.9, changeFrequency: "yearly" },
    { en: "/work", fa: "/fa/work", priority: 0.9, changeFrequency: "monthly" },
    { en: "/thinking", fa: "/fa/thinking", priority: 0.8, changeFrequency: "monthly" },
    { en: "/services", fa: "/fa/services", priority: 0.75, changeFrequency: "monthly" },
    ...projectSlugs.map(slug => ({
      en: `/work/${slug}`,
      fa: `/fa/work/${slug}`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    })),
    ...noteSlugs.map(slug => ({
      en: `/thinking/${slug}`,
      fa: `/fa/thinking/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  return routePairs.flatMap(pair => {
    const languages = {
      en: absoluteUrl(pair.en),
      fa: absoluteUrl(pair.fa),
      "x-default": absoluteUrl(pair.en),
    };
    return [pair.en, pair.fa].map(path => ({
      url: absoluteUrl(path),
      lastModified: new Date("2026-08-31T00:00:00Z"),
      changeFrequency: pair.changeFrequency,
      priority: pair.priority,
      alternates: { languages },
    }));
  });
}
