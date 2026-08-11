import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { noteSlugs, notes, type NoteSlug } from "../../data";
import {
  PERSON_ID,
  PERSON_NAME,
  SITE_ID,
  absoluteUrl,
  serializeJsonLd,
} from "../../seo";
import { ThoughtPage } from "../../site";

export function generateStaticParams() {
  return noteSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find(item => item.slug === slug);
  if (!note) return {};
  const url = `/thinking/${slug}`;
  return {
    title: note.title.en,
    description: note.lead.en,
    authors: [{ name: PERSON_NAME, url: "/about" }],
    alternates: { canonical: url, languages: { en: url, fa: `/fa/thinking/${slug}` } },
    openGraph: {
      type: "article",
      siteName: PERSON_NAME,
      locale: "en_US",
      url,
      title: `${note.title.en} | ${PERSON_NAME}`,
      description: note.lead.en,
      publishedTime: note.published,
      modifiedTime: note.updated,
      authors: [absoluteUrl("/about")],
      section: "Product thinking",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${note.title.en} by ${PERSON_NAME}` }],
    },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find(item => item.slug === slug);
  if (!note) notFound();
  const url = absoluteUrl(`/thinking/${slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: note.title.en,
        description: note.lead.en,
        datePublished: note.published,
        dateModified: note.updated,
        inLanguage: "en",
        articleSection: "Product thinking",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
        about: { "@type": "SoftwareApplication", name: note.project === "apex" ? "Apex" : "Vibe" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Product notes", item: absoluteUrl("/thinking") },
          { "@type": "ListItem", position: 3, name: note.title.en, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <ThoughtPage locale="en" slug={slug as NoteSlug} />
      <script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
