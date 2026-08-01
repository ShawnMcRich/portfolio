import type { MetadataRoute } from "next";
import { projectSlugs } from "./data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://shahinghanizadeh.ir"; const staticPaths = ["", "/work", "/thinking", "/about", "/fa", "/fa/work", "/fa/thinking", "/fa/about"]; const projectPaths = projectSlugs.flatMap(slug => [`/work/${slug}`, `/fa/work/${slug}`]); return [...staticPaths, ...projectPaths].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path.includes("thinking") ? "monthly" : "weekly", priority: path === "" ? 1 : .8 })); }
