/* eslint-disable @next/next/no-img-element -- product screenshots are local static evidence. */
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Github,
  Mail,
  Menu,
} from "lucide-react";
import {
  experience,
  Locale,
  notes,
  Project,
  ProjectSlug,
  projects,
  projectSlugs,
} from "./data";

const copy = {
  en: {
    nav: [
      ["Work", "work"],
      ["Experience", "about#experience"],
      ["Notes", "thinking"],
      ["About", "about"],
    ],
    language: "FA",
    languageHref: "/fa",
    resume: "Download résumé",
    role: "Technical Product Manager · Product Designer · Senior Frontend Engineer",
    intro: "I was doing product work long before I knew what to call it.",
    subintro:
      "I started in frontend. Then I became the person deciding what we should build, sketching the UX, ordering the work, sorting things out with backend, testing the awkward cases, and staying until release. I still work that way.",
    availability: "Open to remote product roles",
    workCta: "See what I built",
    contactCta: "Email me",
    selectedWork: "A few things I built",
    selectedIntro:
      "These are the projects I can discuss properly: what was messy at the start, what I decided, what I built myself, and where the product stands now.",
    allWork: "View all work",
    proof: "The short version",
    capabilities: "I do not hand over the idea and disappear",
    capabilitiesIntro:
      "I am at my best when product, design, and engineering need to think together. I can make the call, draw the flow, explain it to the team, and understand what the implementation will cost.",
    capabilityItems: [
      ["Understand it", "Talk to people, inspect the business, and find the problem underneath the requested feature."],
      ["Choose", "Decide what belongs in the core, what depends on it, and what can wait."],
      ["Draw it", "Use flows and working UI to make the idea concrete before the team commits to it."],
      ["Build it", "Stay close to frontend, backend, QA, risk, and release instead of managing from a distance."],
      ["Correct it", "Watch what happens, trace the failures, and change the product when reality disagrees."],
    ],
    path: "Experience path",
    pathIntro:
      "Some of these dates overlap because I was building my own products while running a company and doing client work. That is the honest version of the timeline.",
    fullHistory: "See the full timeline",
    notes: "Things I have learned the expensive way",
    notesIntro:
      "Short notes from products I have built, priced, broken, fixed, and kept running.",
    readNote: "Read note",
    contactTitle: "Have a product problem that needs both judgment and delivery?",
    contactBody:
      "I am exploring technical product management, AI product, product ownership, and product-minded frontend leadership roles.",
    workTitle: "The work, including the parts that did not fit neatly.",
    workIntro:
      "Each case explains why the product existed, what I personally took responsibility for, the decisions that mattered, and what is still too early to call a success.",
    viewCase: "Open the project",
    caseNav: [
      ["Brief", "brief"],
      ["Constraints", "constraints"],
      ["Journey", "journey"],
      ["Decisions", "decisions"],
      ["System", "system"],
      ["Evidence", "evidence"],
      ["Outcome", "outcome"],
    ],
    labels: {
      period: "Period",
      stage: "Stage",
      role: "My role",
      team: "Setting",
      context: "Context",
      problem: "Product problem",
      users: "Who it serves",
      northStar: "What good looked like",
      constraints: "What made it difficult",
      journey: "What I built first, and why",
      decisions: "The calls I had to make",
      system: "How the system works",
      scope: "What I personally owned",
      evidence: "What you can inspect",
      gallery: "Inside the product",
      outcome: "Where it stands today",
      lessons: "What I learned",
      next: "Next case study",
      live: "Live",
      shipped: "Shipped",
      designed: "Designed / specified",
      artifact: "Evidence",
    },
    thinkingTitle: "Notes from products I have actually had to make work.",
    thinkingIntro:
      "Three ideas I can defend with product decisions, code, operating constraints, and outcomes.",
    aboutTitle: "Frontend was where I started. It was never where the work stopped.",
    aboutBody: [
      "I started in frontend engineering and UX, but the work never stayed inside the frontend. I was usually the person asking what should be built, drawing the flow, deciding what had to come first, translating it for frontend and backend, testing the result, and noticing operational or legal risk before release.",
      "Later I built products and a company of my own. That meant pricing, customer conversations, support, infrastructure, launch decisions, and being the person responsible when something went wrong. Today I call the job technical product management. I still write code because it keeps my decisions honest.",
    ],
    principles: "How I tend to work",
    principleItems: [
      ["Value before volume", "A roadmap should protect the core user outcome before it collects features."],
      ["Clarity before ceremony", "Documents, frameworks, and meetings should improve a decision or a handoff."],
      ["Trust needs operations", "Safety, moderation, privacy, support, and appeals are product systems."],
      ["Technical truth matters", "I separate what is live, what is shipped but not proven, and what is still designed."],
    ],
    education: "Education and communication",
    educationBody:
      "MBA in Technology Management (2026), with research on digital technology, innovation, and productivity. Bachelor's degree in Architecture. IELTS 7.5. Native Persian and professional English.",
  },
  fa: {
    nav: [
      ["پروژه ها", "work"],
      ["سابقه", "about#experience"],
      ["یادداشت ها", "thinking"],
      ["درباره من", "about"],
    ],
    language: "EN",
    languageHref: "/",
    resume: "دانلود رزومه",
    role: "مدیر فنی محصول · طراح محصول · توسعه‌دهنده ارشد فرانت‌اند",
    intro: "سال‌ها کار مدیریت محصول می‌کردم، قبل از اینکه اسمش را بدانم.",
    subintro:
      "کارم را از فرانت‌اند شروع کردم، اما خیلی زود درگیر این شدم که اصلاً چه چیزی باید ساخته شود، تجربه کاربر چطور باشد، کدام کار زودتر انجام شود و تیم فنی چطور آن را به محصول واقعی تبدیل کند. هنوز هم از ایده تا تست و انتشار کنار محصول می‌مانم.",
    availability: "آماده همکاری ریموت با تیم‌های محصول",
    workCta: "دیدن پروژه‌ها",
    contactCta: "ارسال ایمیل",
    selectedWork: "چند محصولی که ساخته‌ام",
    selectedIntro:
      "اینجا می‌توانم بدون کلی‌گویی درباره پروژه‌ها حرف بزنم؛ اینکه مسئله از کجا شروع شد، چه تصمیمی گرفتم، کدام بخش را خودم ساختم و امروز محصول کجاست.",
    allWork: "مشاهده همه پروژه ها",
    proof: "خلاصه ماجرا",
    capabilities: "فقط ایده نمی‌دهم؛ تا اجرا کنار تیم می‌مانم",
    capabilitiesIntro:
      "بهترین عملکردم زمانی است که محصول، طراحی و فنی باید کنار هم تصمیم بگیرند. می‌توانم مسیر را مشخص کنم، آن را برای تیم روشن کنم و هزینه و دردسر فنی هر انتخاب را هم بفهمم.",
    capabilityItems: [
      ["فهم مسئله", "با کاربر حرف می‌زنم، کسب‌وکار را می‌شناسم و مسئله پشت درخواست اولیه را پیدا می‌کنم."],
      ["انتخاب", "مشخص می‌کنم چه چیزی هسته محصول است، چه چیز به آن وابسته است و چه کاری می‌تواند صبر کند."],
      ["شفاف کردن راه‌حل", "با طراحی مسیر و رابط واقعی، قبل از اینکه تیم زمان زیادی صرف ساخت کند، نشان می‌دهم قرار است دقیقاً چه چیزی ساخته شود."],
      ["ساختن", "از فرانت‌اند، بک‌اند و تست فاصله نمی‌گیرم و تا انتشار کنار تیم می‌مانم."],
      ["بازبینی و اصلاح", "رفتار واقعی محصول را می‌بینم، خطاها را پیدا می‌کنم و وقتی واقعیت با فرض ما فرق دارد، مسیر را عوض می‌کنم."],
    ],
    path: "مسیر تجربه",
    pathIntro:
      "بعضی تاریخ‌ها با هم هم‌پوشانی دارند، چون هم‌زمان با اداره شرکت و انجام پروژه‌های مشتری، محصولات خودم را هم می‌ساختم. این روایت واقعی مسیر کاری من است.",
    fullHistory: "دیدن سابقه کامل",
    notes: "چیزهایی که با هزینه واقعی یاد گرفته‌ام",
    notesIntro:
      "یادداشت‌های کوتاه از محصولاتی که ساخته‌ام، برایشان قیمت گذاشته‌ام، خرابشان کرده‌ام، درستشان کرده‌ام و زنده نگه داشته‌ام.",
    readNote: "مطالعه یادداشت",
    contactTitle: "مسئله محصولی دارید که هم تصمیم می‌خواهد و هم اجرا؟",
    contactBody:
      "برای موقعیت‌های مدیریت فنی محصول، محصول هوش مصنوعی، مالکیت محصول و رهبری فرانت‌اند با نگاه محصول آماده همکاری هستم.",
    workTitle: "پروژه‌ها، با همان بخش‌هایی که همیشه مرتب و تمیز پیش نرفتند.",
    workIntro:
      "در هر پروژه توضیح داده‌ام چرا محصول ساخته شد، خودم دقیقاً مسئول چه بودم، کدام تصمیم‌ها مهم بودند و برای قضاوت درباره کدام نتیجه هنوز زود است.",
    viewCase: "دیدن جزئیات پروژه",
    caseNav: [
      ["خلاصه", "brief"],
      ["محدودیت", "constraints"],
      ["مسیر", "journey"],
      ["تصمیم ها", "decisions"],
      ["سیستم", "system"],
      ["جزئیات قابل بررسی", "evidence"],
      ["نتیجه", "outcome"],
    ],
    labels: {
      period: "بازه",
      stage: "وضعیت",
      role: "نقش من",
      team: "محیط کار",
      context: "زمینه",
      problem: "مسئله محصول",
      users: "مخاطب",
      northStar: "نتیجه‌ای که دنبالش بودم",
      constraints: "چه چیزی کار را سخت می‌کرد",
      journey: "اول چه چیزی را ساختم و چرا",
      decisions: "تصمیم‌های اصلی من",
      system: "سیستم چطور کار می‌کند",
      scope: "مسئولیت مستقیم من",
      evidence: "چیزهایی که می‌شود بررسی کرد",
      gallery: "داخل محصول",
      outcome: "امروز پروژه کجاست",
      lessons: "آموخته ها",
      next: "پروژه بعدی",
      live: "فعال",
      shipped: "اجراشده",
      designed: "طراحی و مشخص شده",
      artifact: "شاهد",
    },
    thinkingTitle: "یادداشت‌هایی از محصولاتی که واقعاً باید کار می‌کردند.",
    thinkingIntro:
      "سه دیدگاه که می توانم با تصمیم محصول، کد، محدودیت عملیاتی و نتیجه از آن ها دفاع کنم.",
    aboutTitle: "کارم از فرانت‌اند شروع شد، اما هیچ‌وقت همان‌جا متوقف نماند.",
    aboutBody: [
      "کارم را از فرانت‌اند و طراحی تجربه کاربر شروع کردم، اما مسئولیتم هیچ‌وقت همان‌جا تمام نشد. معمولاً من بودم که می‌پرسیدم چه چیزی باید ساخته شود، مسیر را طراحی می‌کردم، ترتیب کار را مشخص می‌کردم، با فرانت‌اند و بک‌اند به راه‌حل می‌رسیدم، نتیجه را تست می‌کردم و قبل از انتشار حواسم به ریسک عملیاتی یا حقوقی هم بود.",
      "بعدتر شرکت و محصولات خودم را ساختم. آنجا دیگر قیمت‌گذاری، حرف زدن با مشتری، پشتیبانی، زیرساخت، تصمیم‌های لانچ و جواب دادن بابت نتیجه هم بر عهده خودم بود. امروز اسم این کار را مدیریت فنی محصول می‌گذارم. هنوز هم کد می‌زنم، چون کمک می‌کند تصمیم‌هایم از واقعیت فنی جدا نشوند.",
    ],
    principles: "روش کاری من",
    principleItems: [
      ["ارزش پیش از تعداد", "نقشه راه باید ابتدا از نتیجه اصلی کاربر محافظت کند، نه اینکه قابلیت جمع کند."],
      ["وضوح پیش از تشریفات", "سند، چارچوب و جلسه فقط وقتی ارزش دارد که تصمیم یا تحویل را بهتر کند."],
      ["اعتماد به عملیات نیاز دارد", "ایمنی، رسیدگی، حریم خصوصی، پشتیبانی و اعتراض، سیستم های محصول هستند."],
      ["واقعیت فنی مهم است", "میان قابلیت فعال، قابلیت اجراشده اما اثبات نشده و طرح آینده مرز روشن می گذارم."],
    ],
    education: "تحصیلات و ارتباط",
    educationBody:
      "MBA مدیریت فناوری (۱۴۰۵) با پژوهش درباره فناوری دیجیتال، نوآوری و بهره وری. کارشناسی معماری. آیلتس ۷.۵. فارسی زبان مادری و انگلیسی حرفه ای.",
  },
} as const;

const featured: ProjectSlug[] = ["apex", "vibe", "first-choice"];

function root(locale: Locale) {
  return locale === "fa" ? "/fa" : "";
}

function href(locale: Locale, path = "") {
  return `${root(locale)}${path ? `/${path}` : ""}` || "/";
}

function local<T extends { en: string; fa: string }>(value: T, locale: Locale) {
  return value[locale];
}

function Arrow({ locale, size = 18 }: { locale: Locale; size?: number }) {
  return locale === "fa" ? <ArrowLeft size={size} /> : <ArrowRight size={size} />;
}

export function Header({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <header className="site-header">
      <Link className="brand" href={href(locale)} aria-label={locale === "fa" ? "صفحه اصلی شاهین غنی‌زاده" : "Shahin Ghanizadeh home"}>
        <span>SG</span>
        <strong>{locale === "fa" ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</strong>
      </Link>
      <nav className="desktop-nav" aria-label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"}>
        {c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}
        <a className="language-link" href={c.languageHref}>{c.language}</a>
        <a className="icon-link" href="/documents/shahin-ghanizadeh-resume.pdf" aria-label={c.resume} title={c.resume}><Download size={17} /></a>
      </nav>
      <details className="mobile-nav">
        <summary aria-label={locale === "fa" ? "باز کردن منو" : "Open menu"}><Menu size={20} /></summary>
        <div>
          {c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}
          <a href={c.languageHref}>{c.language}</a>
          <a href="/documents/shahin-ghanizadeh-resume.pdf">{c.resume}</a>
        </div>
      </details>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div><strong>{locale === "fa" ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</strong><p>{locale === "fa" ? "مدیر فنی محصول و سازنده محصول" : "Technical product manager and product builder"}</p></div>
      <div className="footer-links">
        <a href="mailto:shahinghani@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/shahinghanizadeh" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ShawnMcRich" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <small>© {new Date().getFullYear()}</small>
    </footer>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <section className="contact-band">
      <div>
        <p className="kicker">{locale === "fa" ? "ارتباط" : "Contact"}</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactBody}</p>
      </div>
      <a className="button button-light" href="mailto:shahinghani@hotmail.com"><Mail size={18} />{c.contactCta}</a>
    </section>
  );
}

function ProjectPreview({ project, locale, compact = false }: { project: Project; locale: Locale; compact?: boolean }) {
  return (
    <article className={`project-preview accent-${project.accent} ${compact ? "compact" : ""}`}>
      <div className="project-preview-copy">
        <div className="project-index"><span>{project.number}</span><span>{local(project.stage, locale)}</span></div>
        <p className="kicker">{local(project.productType, locale)} · {local(project.period, locale)}</p>
        <h2>{project.title}</h2>
        <p className="project-headline">{local(project.headline, locale)}</p>
        <p>{local(project.deck, locale)}</p>
        <div className="preview-metrics">
          {project.metrics.slice(0, compact ? 2 : 3).map(metric => <div key={metric.value + local(metric.label, locale)}><strong>{metric.value}</strong><span>{local(metric.label, locale)}</span></div>)}
        </div>
        <Link className="text-link" href={href(locale, `work/${project.slug}`)}>{copy[locale].viewCase}<Arrow locale={locale} /></Link>
      </div>
      <div className={`project-preview-visual ${project.cover ? "has-image" : "diagram-cover"}`}>
        {project.cover ? <img src={project.cover} alt={local(project.images[0]?.alt ?? project.headline, locale)} /> : <MRMVisual locale={locale} />}
      </div>
    </article>
  );
}

function MRMVisual({ locale }: { locale: Locale }) {
  const labels = locale === "fa"
    ? ["مرورگر و PWA", "شبکه داخلی", "Socket.IO", "ذخیره محلی"]
    : ["Browser & PWA", "Local network", "Socket.IO", "Local storage"];
  return <div className="mrm-visual">{labels.map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}</div>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} />
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">{c.role}</p>
          <h1>{rtl ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</h1>
          <p className="hero-statement">{c.intro}</p>
          <p className="hero-support">{c.subintro}</p>
          <div className="actions">
            <Link className="button button-dark" href={href(locale, "work")}>{c.workCta}<Arrow locale={locale} /></Link>
            <a className="button button-plain" href="mailto:shahinghani@hotmail.com">{c.contactCta}</a>
          </div>
        </div>
        <aside className="hero-note">
          <div className="availability"><span />{c.availability}</div>
          <p>{rtl
            ? "این روزها Apex را به‌عنوان یک محصول زنده و درآمدزا اداره می‌کنم و هم‌زمان محصول، طراحی و فرانت‌اند Vibe را تا لانچ جلو می‌برم."
            : "Right now I run Apex as a live, paid product while leading Vibe's product, design, and frontend toward launch."}</p>
        </aside>
      </section>

      <section className="work-window" aria-label={rtl ? "تصویری از محصولات" : "A look inside the products"}>
        <figure className="work-window-main">
          <img src="/projects/apex/new/app-dashboard.jpg" alt={rtl ? "داشبورد محصول Apex" : "Apex product dashboard"} />
          <figcaption><span>Apex</span>{rtl ? "از منطق بازار تا محصول درآمدزا" : "From market logic to a paid product"}</figcaption>
        </figure>
        <figure>
          <img src="/projects/vibe/new/discovery-home.jpg" alt={rtl ? "صفحه کشف Vibe" : "Vibe discovery experience"} />
          <figcaption><span>Vibe</span>{rtl ? "محصول، طراحی و فرانت‌اند از صفر" : "Product, design, and frontend from zero"}</figcaption>
        </figure>
      </section>

      <section className="content-section selected-work">
        <header className="section-heading">
          <div><p className="kicker">{c.selectedWork}</p><h2>{c.selectedIntro}</h2></div>
          <Link className="text-link" href={href(locale, "work")}>{c.allWork}<Arrow locale={locale} /></Link>
        </header>
        <div className="project-stack">{featured.map(slug => <ProjectPreview key={slug} project={projects[slug]} locale={locale} />)}</div>
        <div className="resilience-callout">
          <div><p className="kicker">04 · {local(projects.mrm.stage, locale)}</p><h2>{projects.mrm.title}</h2><p>{local(projects.mrm.headline, locale)}</p></div>
          <div><strong>~40</strong><span>{rtl ? "نفر از ابزار استفاده کردند تا اینترنت بازگشت" : "people used the tool until connectivity returned"}</span></div>
          <Link className="button button-light" href={href(locale, "work/mrm")}>{c.viewCase}<Arrow locale={locale} /></Link>
        </div>
      </section>

      <section className="method-band">
        <div className="method-intro"><p className="kicker">{rtl ? "روش کار" : "How I work"}</p><h2>{c.capabilities}</h2><p>{c.capabilitiesIntro}</p></div>
        <ol>{c.capabilityItems.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="content-section home-experience">
        <header className="section-heading"><div><p className="kicker">{c.path}</p><h2>{c.pathIntro}</h2></div><Link className="text-link" href={href(locale, "about#experience")}>{c.fullHistory}<Arrow locale={locale} /></Link></header>
        <div className="timeline compact-timeline">{experience.slice(0, 4).map(item => <article key={item.company}><time>{local(item.period, locale)}</time><div><h3>{local(item.title, locale)}</h3><strong>{item.company}</strong><p>{local(item.summary, locale)}</p></div></article>)}</div>
      </section>

      <section className="notes-band">
        <header><p className="kicker">{c.notes}</p><h2>{c.notesIntro}</h2></header>
        <div>{notes.map((note, index) => <Link key={note.slug} href={`${href(locale, "thinking")}#${note.slug}`}><span>0{index + 1}</span><h3>{local(note.title, locale)}</h3><p>{local(note.lead, locale)}</p><Arrow locale={locale} /></Link>)}</div>
      </section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export function WorkPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} />
      <section className="page-hero">
        <p className="kicker">{rtl ? "نمونه کار محصول" : "Product portfolio"}</p>
        <h1>{c.workTitle}</h1>
        <p>{c.workIntro}</p>
      </section>
      <section className="content-section work-index">
        {projectSlugs.map(slug => <ProjectPreview key={slug} project={projects[slug]} locale={locale} compact={slug === "mrm"} />)}
      </section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

function Status({ status, locale }: { status?: "live" | "shipped" | "designed"; locale: Locale }) {
  if (!status) return null;
  const labels = copy[locale].labels;
  return <span className={`status status-${status}`}>{status === "live" ? labels.live : status === "shipped" ? labels.shipped : labels.designed}</span>;
}

function CaseSection({ id, index, title, children }: { id: string; index: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="case-section"><header><span>{index}</span><h2>{title}</h2></header>{children}</section>;
}

export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const p = projects[slug];
  const c = copy[locale];
  const l = c.labels;
  const rtl = locale === "fa";
  const next = projectSlugs[(projectSlugs.indexOf(slug) + 1) % projectSlugs.length];
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} />
      <article className={`case-study accent-${p.accent}`}>
        <header className="case-hero">
          <div className="case-title">
            <p className="kicker">{p.number} · {local(p.productType, locale)}</p>
            <h1>{p.title}</h1>
            <p className="case-headline">{local(p.headline, locale)}</p>
            <p className="case-deck">{local(p.deck, locale)}</p>
            {p.links && <div className="case-links">{p.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.href.includes("github") ? <Github size={17} /> : <ExternalLink size={17} />}{local(link.label, locale)}</a>)}</div>}
          </div>
          <dl className="case-meta">
            <div><dt>{l.period}</dt><dd>{local(p.period, locale)}</dd></div>
            <div><dt>{l.stage}</dt><dd>{local(p.stage, locale)}</dd></div>
            <div><dt>{l.role}</dt><dd>{local(p.role, locale)}</dd></div>
            <div><dt>{l.team}</dt><dd>{local(p.team, locale)}</dd></div>
          </dl>
        </header>

        <section className="case-metrics">{p.metrics.map(metric => <div key={metric.value + local(metric.label, locale)}><strong>{metric.value}</strong><span>{local(metric.label, locale)}</span>{metric.note && <small>{local(metric.note, locale)}</small>}</div>)}</section>

        <div className={`case-cover ${p.cover ? "image-cover" : "system-cover"}`}>
          {p.cover ? <img src={p.cover} alt={`${p.title} ${local(p.productType, locale)}`} /> : <MRMVisual locale={locale} />}
        </div>

        <div className="case-layout">
          <aside className="case-toc"><p className="kicker">{rtl ? "در این کیس" : "In this case"}</p>{c.caseNav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</aside>
          <div className="case-content">
            <CaseSection id="brief" index="01" title={rtl ? "این محصول چرا ساخته شد" : "Why this product exists"}>
              <div className="brief-grid">
                <article><p className="kicker">{l.context}</p><p>{local(p.context, locale)}</p></article>
                <article><p className="kicker">{l.problem}</p><p>{local(p.problem, locale)}</p></article>
                <article><p className="kicker">{l.users}</p><p>{local(p.users, locale)}</p></article>
                <article className="north-star"><p className="kicker">{l.northStar}</p><p>{local(p.northStar, locale)}</p></article>
              </div>
            </CaseSection>

            <CaseSection id="constraints" index="02" title={l.constraints}>
              <div className="constraint-grid">{p.constraints.map((item, index) => <article key={local(item.title, locale)}><span>0{index + 1}</span><h3>{local(item.title, locale)}</h3><p>{local(item.body, locale)}</p></article>)}</div>
            </CaseSection>

            <CaseSection id="journey" index="03" title={l.journey}>
              <ol className="phase-list">{p.phases.map((phase, index) => <li key={local(phase.title, locale)}><div className="phase-marker"><span>{index + 1}</span></div><div><Status status={phase.status} locale={locale} /><h3>{local(phase.title, locale)}</h3><p>{local(phase.body, locale)}</p></div></li>)}</ol>
            </CaseSection>

            <CaseSection id="decisions" index="04" title={l.decisions}>
              <div className="decision-list">{p.decisions.map((decision, index) => <article key={local(decision.title, locale)}><div><span>{rtl ? `تصمیم ${index + 1}` : `Decision ${String(index + 1).padStart(2, "0")}`}</span><Status status={decision.status} locale={locale} /></div><h3>{local(decision.title, locale)}</h3><p>{local(decision.body, locale)}</p></article>)}</div>
            </CaseSection>

            <CaseSection id="system" index="05" title={l.system}>
              <div className="system-flow">{p.architecture.map((node, index) => <article key={local(node.title, locale)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{local(node.title, locale)}</h3><p>{local(node.body, locale)}</p>{index < p.architecture.length - 1 && <Arrow locale={locale} size={16} />}</article>)}</div>
              <div className="scope-block"><p className="kicker">{l.scope}</p><ul>{p.scope.map(item => <li key={local(item, locale)}><Check size={17} /><span>{local(item, locale)}</span></li>)}</ul></div>
            </CaseSection>

            <CaseSection id="evidence" index="06" title={l.evidence}>
              <div className="evidence-list">{p.evidence.map(item => <article key={local(item.title, locale)}><span>{local(item.kind, locale)}</span><h3>{local(item.title, locale)}</h3><p>{local(item.body, locale)}</p></article>)}</div>
              {p.images.length > 0 && <div className="gallery"><p className="kicker">{l.gallery}</p>{p.images.map((image, index) => <figure key={image.src} className={image.compact ? "compact" : ""}><div><img src={image.src} alt={local(image.alt, locale)} /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{local(image.alt, locale)}</figcaption></figure>)}</div>}
            </CaseSection>

            <CaseSection id="outcome" index="07" title={l.outcome}>
              <div className="outcome-block"><p>{local(p.outcome, locale)}</p><aside><strong>{rtl ? "چیزی که ادعا نمی‌کنم" : "What I am not claiming"}</strong><p>{local(p.statusNote, locale)}</p></aside></div>
              <div className="lessons"><p className="kicker">{l.lessons}</p><ol>{p.lessons.map((lesson, index) => <li key={local(lesson, locale)}><span>0{index + 1}</span><p>{local(lesson, locale)}</p></li>)}</ol></div>
            </CaseSection>
          </div>
        </div>

        <Link className="next-case" href={href(locale, `work/${next}`)}><span>{l.next}</span><strong>{projects[next].title}</strong><Arrow locale={locale} size={24} /></Link>
      </article>
      <Footer locale={locale} />
    </main>
  );
}

export function ThinkingPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} />
      <section className="page-hero thinking-hero"><p className="kicker">{rtl ? "تفکر محصول" : "Product thinking"}</p><h1>{c.thinkingTitle}</h1><p>{c.thinkingIntro}</p></section>
      <section className="essay-index">{notes.map((note, index) => <a key={note.slug} href={`#${note.slug}`}><span>0{index + 1}</span><strong>{local(note.title, locale)}</strong></a>)}</section>
      <section className="essays">{notes.map((note, index) => <article id={note.slug} key={note.slug}><header><span>0{index + 1}</span><div><h2>{local(note.title, locale)}</h2><p>{local(note.lead, locale)}</p></div></header><div>{note.paragraphs.map(paragraph => <p key={local(paragraph, locale)}>{local(paragraph, locale)}</p>)}</div><Link className="text-link" href={href(locale, `work/${index === 0 ? "apex" : "vibe"}`)}>{rtl ? "دیدن جزئیات پروژه" : "See the project details"}<Arrow locale={locale} /></Link></article>)}</section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} />
      <section className="about-hero"><p className="kicker">{rtl ? "درباره من" : "About"}</p><h1>{c.aboutTitle}</h1><div>{c.aboutBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <section className="principles-band"><header><p className="kicker">{c.principles}</p></header><div>{c.principleItems.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section>
      <section id="experience" className="content-section full-experience"><header className="section-heading"><div><p className="kicker">{c.path}</p><h2>{c.pathIntro}</h2></div></header><div className="timeline">{experience.map(item => <article key={item.company}><time>{local(item.period, locale)}</time><div><h3>{local(item.title, locale)}</h3><strong>{item.company}</strong><p>{local(item.summary, locale)}</p></div></article>)}</div></section>
      <section className="education-band"><p className="kicker">{c.education}</p><p>{c.educationBody}</p><a className="button button-dark" href="/documents/shahin-ghanizadeh-resume.pdf"><Download size={18} />{c.resume}</a></section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
