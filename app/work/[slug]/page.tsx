import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, projects, type ProjectSlug } from "../../data";
import { CaseStudyPage } from "../../site";
export function generateStaticParams() { return projectSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; if (!projectSlugs.includes(slug as ProjectSlug)) return {}; const p = projects[slug as ProjectSlug].en; return { title: `${p.title} Case Study`, description: p.short }; }
export default async function Project({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!projectSlugs.includes(slug as ProjectSlug)) notFound(); return <CaseStudyPage locale="en" slug={slug as ProjectSlug}/>; }
