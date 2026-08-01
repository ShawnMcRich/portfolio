import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, projects, type ProjectSlug } from "../../../data";
import { CaseStudyPage } from "../../../site";
export function generateStaticParams() { return projectSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; if (!projectSlugs.includes(slug as ProjectSlug)) return {}; const p = projects[slug as ProjectSlug]; return { title: `کیس استادی ${p.title}`, description: p.deck.fa, alternates: { canonical: `/fa/work/${slug}`, languages: { en: `/work/${slug}`, fa: `/fa/work/${slug}` } } }; }
export default async function PersianProject({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!projectSlugs.includes(slug as ProjectSlug)) notFound(); return <CaseStudyPage locale="fa" slug={slug as ProjectSlug}/>; }
