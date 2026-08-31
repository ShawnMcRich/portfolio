export const SITE_URL = "https://shahinghanizadeh.ir";
export const SITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#shahin-ghanizadeh`;

export const PERSON_NAME = "Shahin Ghanizadeh";
export const PERSON_NAME_FA = "شاهین غنی‌زاده";
export const PERSON_ALIASES = [PERSON_NAME_FA, "شاهین غنی زاده"];

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/shahinghanizadeh",
  "https://github.com/ShawnMcRich",
  "https://www.instagram.com/shahinghanizadeh/",
];

export function absoluteUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  alternateName: PERSON_ALIASES,
  url: SITE_URL,
  mainEntityOfPage: absoluteUrl("/about"),
  image: [
    absoluteUrl("/shahin-ghanizadeh.jpg"),
    absoluteUrl("/shahin-ghanizadeh-4x3.jpg"),
    absoluteUrl("/shahin-ghanizadeh-16x9.jpg"),
  ],
  description:
    "Senior Technical Product Manager focused on AI products, with 10 years across product, UX, and software engineering, leading products from unclear problem through launch and operation.",
  jobTitle: "Senior Technical Product Manager - AI Products",
  knowsAbout: [
    "Technical product management",
    "Product strategy",
    "Product design",
    "User experience design",
    "Frontend engineering",
    "Applied artificial intelligence",
    "Large language model products",
    "Voice artificial intelligence",
    "AI evaluation and guardrails",
    "Compliance-constrained AI design",
    "Quality assurance",
  ],
  knowsLanguage: ["English", "Persian"],
  sameAs: SOCIAL_PROFILES,
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: PERSON_NAME,
  alternateName: PERSON_ALIASES,
  description: "The official portfolio and product work of Shahin Ghanizadeh.",
  inLanguage: ["en", "fa"],
  publisher: { "@id": PERSON_ID },
};

export function profilePageJsonLd(locale: "en" | "fa") {
  const path = locale === "fa" ? "/fa/about" : "/about";
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(path)}#profile-page`,
    url: absoluteUrl(path),
    name: locale === "fa" ? `درباره ${PERSON_NAME_FA}` : `About ${PERSON_NAME}`,
    description:
      locale === "fa"
        ? `پروفایل حرفه‌ای ${PERSON_NAME_FA}، مدیر ارشد محصول فنی با تمرکز بر محصولات هوش مصنوعی.`
        : `Professional profile of ${PERSON_NAME}, a Senior Technical Product Manager focused on AI products.`,
    inLanguage: locale,
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": SITE_ID },
    dateCreated: "2026-07-31T00:00:00+03:30",
    dateModified: "2026-08-31T00:00:00+03:30",
  };
}

export function serializeJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
