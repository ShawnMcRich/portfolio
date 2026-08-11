import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { noteSlugs, notes, type NoteSlug } from "../../../data";
import {
  PERSON_ID,
  PERSON_NAME_FA,
  SITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "../../../seo";
import { ThoughtPage } from "../../../site";

export function generateStaticParams() {
  return noteSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find(item => item.slug === slug);
  if (!note) return {};
  const url = `/fa/thinking/${slug}`;
  return {
    title: note.title.fa,
    description: note.lead.fa,
    authors: [{ name: PERSON_NAME_FA, url: "/fa/about" }],
    alternates: { canonical: url, languages: { en: `/thinking/${slug}`, fa: url } },
    openGraph: {
      type: "article",
      siteName: "Shahin Ghanizadeh",
      url,
      locale: "fa_IR",
      title: `${note.title.fa} | ${PERSON_NAME_FA}`,
      description: note.lead.fa,
      publishedTime: note.published,
      modifiedTime: note.updated,
      authors: [absoluteUrl("/fa/about")],
      section: "یادداشت محصول",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${note.title.fa}، نوشته ${PERSON_NAME_FA}` }],
    },
  };
}

export default async function PersianNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find(item => item.slug === slug);
  if (!note) notFound();
  const url = absoluteUrl(`/fa/thinking/${slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: note.title.fa,
        description: note.lead.fa,
        datePublished: note.published,
        dateModified: note.updated,
        inLanguage: "fa",
        articleSection: "یادداشت محصول",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
        about: { "@type": "SoftwareApplication", name: note.project === "apex" ? "Apex" : "Vibe" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "خانه", item: absoluteUrl("/fa") },
          { "@type": "ListItem", position: 2, name: "یادداشت‌های محصول", item: absoluteUrl("/fa/thinking") },
          { "@type": "ListItem", position: 3, name: note.title.fa, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <ThoughtPage locale="fa" slug={slug as NoteSlug} />
      <script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
