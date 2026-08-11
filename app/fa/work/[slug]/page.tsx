import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, projects, type ProjectSlug } from "../../../data";
import {
  PERSON_ID,
  PERSON_NAME_FA,
  SITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "../../../seo";
import { CaseStudyPage } from "../../../site";

const publicationDates: Record<ProjectSlug, string> = {
  apex: "2026-07-31",
  vibe: "2026-07-31",
  "first-choice": "2026-08-02",
  hosseintalab: "2026-08-11",
  mrm: "2026-08-02",
};

export function generateStaticParams() {
  return projectSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!projectSlugs.includes(slug as ProjectSlug)) return {};
  const p = projects[slug as ProjectSlug];
  const url = `/fa/work/${slug}`;
  return {
    title: `مطالعه موردی محصول ${p.title}`,
    description: p.deck.fa,
    authors: [{ name: PERSON_NAME_FA, url: "/fa/about" }],
    alternates: { canonical: url, languages: { en: `/work/${slug}`, fa: url } },
    openGraph: {
      type: "article",
      siteName: "Shahin Ghanizadeh",
      url,
      locale: "fa_IR",
      title: `مطالعه موردی محصول ${p.title}، نوشته ${PERSON_NAME_FA}`,
      description: p.deck.fa,
      publishedTime: publicationDates[slug as ProjectSlug],
      modifiedTime: "2026-08-12",
      authors: [absoluteUrl("/fa/about")],
      images: p.cover ? [{ url: p.cover, alt: `مطالعه موردی محصول ${p.title}` }] : undefined,
    },
  };
}

export default async function PersianProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug as ProjectSlug)) notFound();
  const projectSlug = slug as ProjectSlug;
  const p = projects[projectSlug];
  const url = absoluteUrl(`/fa/work/${slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#case-study`,
        url,
        mainEntityOfPage: url,
        headline: `${p.title}: ${p.headline.fa}`,
        description: p.deck.fa,
        image: absoluteUrl(p.cover ?? "/og.png"),
        datePublished: publicationDates[projectSlug],
        dateModified: "2026-08-12",
        inLanguage: "fa",
        articleSection: "مطالعه موردی محصول",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
        about: { "@type": "SoftwareApplication", name: p.title },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/fa") },
          { "@type": "ListItem", position: 2, name: "پروژه‌ها", item: absoluteUrl("/fa/work") },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <CaseStudyPage locale="fa" slug={projectSlug} />
      <script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
