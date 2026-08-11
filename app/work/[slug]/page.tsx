import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, projects, type ProjectSlug } from "../../data";
import {
  PERSON_ID,
  PERSON_NAME,
  SITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "../../seo";
import { CaseStudyPage } from "../../site";

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
  const url = `/work/${slug}`;
  return {
    title: `${p.title} Product Case Study`,
    description: p.deck.en,
    authors: [{ name: PERSON_NAME, url: "/about" }],
    alternates: { canonical: url, languages: { en: url, fa: `/fa/work/${slug}` } },
    openGraph: {
      type: "article",
      siteName: PERSON_NAME,
      locale: "en_US",
      url,
      title: `${p.title} Product Case Study by ${PERSON_NAME}`,
      description: p.deck.en,
      publishedTime: publicationDates[slug as ProjectSlug],
      modifiedTime: "2026-08-12",
      authors: [absoluteUrl("/about")],
      images: p.cover ? [{ url: p.cover, alt: `${p.title} product case study` }] : undefined,
    },
  };
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug as ProjectSlug)) notFound();
  const projectSlug = slug as ProjectSlug;
  const p = projects[projectSlug];
  const url = absoluteUrl(`/work/${slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#case-study`,
        url,
        mainEntityOfPage: url,
        headline: `${p.title}: ${p.headline.en}`,
        description: p.deck.en,
        image: absoluteUrl(p.cover ?? "/og.png"),
        datePublished: publicationDates[projectSlug],
        dateModified: "2026-08-12",
        inLanguage: "en",
        articleSection: "Product case study",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
        about: { "@type": "SoftwareApplication", name: p.title },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Work", item: absoluteUrl("/work") },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <CaseStudyPage locale="en" slug={projectSlug} />
      <script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
