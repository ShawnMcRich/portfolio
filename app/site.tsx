/* eslint-disable @next/next/no-img-element -- product screenshots are local static evidence. */
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Github,
  MessageCircle,
  Menu,
} from "lucide-react";
import {
  experience,
  Locale,
  NoteSlug,
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
      ["Services", "services"],
    ],
    language: "FA",
    languageHref: "/fa",
    resume: "Download résumé",
    role: "Technical Product Manager · Product Designer · Senior Frontend Engineer",
    intro: "I work across product management, product design, and frontend engineering.",
    subintro:
      "My work usually starts with defining the problem and setting priorities, then continues through UX, technical coordination, QA, and release. On several products, I also built the frontend or the complete application.",
    availability: "Current work",
    workCta: "View projects",
    contactCta: "Discuss a project",
    selectedWork: "Selected work",
    selectedIntro:
      "Five products showing the scope of my work, the decisions I owned, and the current state of each project.",
    allWork: "All projects",
    proof: "The short version",
    capabilities: "What I do in a product team",
    capabilitiesIntro:
      "My responsibilities vary by project, but they usually cover the work between an initial business need and a tested release.",
    capabilityItems: [
      ["Problem definition", "Speak with users and stakeholders, understand the business, and define the problem before committing to a feature."],
      ["Scope and priority", "Separate the product core from later work, identify dependencies, and set an executable order."],
      ["UX and specification", "Prepare user flows, interfaces, requirements, and acceptance criteria so the team can work from the same understanding."],
      ["Delivery", "Work directly with frontend, backend, and QA; contribute to implementation when the project needs it."],
      ["Release and review", "Test the main journeys, classify defects, support release, and revise decisions when the evidence changes."],
    ],
    path: "Experience",
    pathIntro:
      "Some periods overlap because I built my own products while running a software company and delivering client work.",
    fullHistory: "Full experience",
    notes: "Product notes",
    notesIntro:
      "Notes on decisions I have made in live and pre-launch products.",
    readNote: "Read note",
    contactTitle: "Have a project in mind?",
    contactBody:
      "Send me a short message on WhatsApp about what you are building, what already exists, and where you need help.",
    workTitle: "Product work",
    workIntro:
      "Each case study covers the problem, my responsibilities, major decisions, implementation, and current status.",
    viewCase: "View project",
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
    thinkingTitle: "Product notes",
    thinkingIntro:
      "Three notes based on work in Apex and Vibe.",
    aboutTitle: "My work has covered engineering, product, and company operations.",
    aboutBody: [
      "I started in frontend engineering and UX. As my responsibilities grew, I also took ownership of feature definition, prioritization, user flows, coordination with backend teams, QA, and release readiness.",
      "I later founded products and managed a software company. That added pricing, customer conversations, support, infrastructure, launch planning, and day-to-day operating decisions to my work. I continue to write code, particularly when direct technical involvement helps the team move faster or make a better decision.",
    ],
    principles: "How I tend to work",
    principleItems: [
      ["Prioritization", "I define the core user journey first and add later features around it."],
      ["Documentation", "I use requirements, flows, and acceptance criteria when they make a decision or handoff clearer."],
      ["Operations", "Moderation, privacy, support, and appeals are designed as part of the product, not left for after launch."],
      ["Technical involvement", "I distinguish clearly between work that is live, implemented but not yet proven, and still in design."],
    ],
    education: "Education and communication",
    educationBody:
      "MBA in Technology Management (2026), with research on digital technology, innovation, and productivity. Bachelor's degree in Architecture. IELTS 7.5. Native Persian and professional English.",
  },
  fa: {
    nav: [
      ["پروژه‌ها", "work"],
      ["سابقه", "about#experience"],
      ["یادداشت‌ها", "thinking"],
      ["درباره من", "about"],
      ["خدمات", "services"],
    ],
    language: "EN",
    languageHref: "/",
    resume: "دانلود رزومه",
    role: "مدیر فنی محصول · طراح محصول · توسعه‌دهنده ارشد فرانت‌اند",
    intro: "در مدیریت محصول، طراحی تجربه کاربر و توسعه فرانت‌اند کار می‌کنم.",
    subintro:
      "کارم معمولاً از شناخت مسئله و تعیین اولویت شروع می‌شود و تا طراحی، هماهنگی با تیم فنی، تست و انتشار ادامه دارد. در چند محصول، فرانت‌اند یا کل برنامه را هم خودم ساخته‌ام.",
    availability: "کارهای فعلی",
    workCta: "مشاهده پروژه‌ها",
    contactCta: "گفت‌وگو در واتساپ",
    selectedWork: "پروژه‌های منتخب",
    selectedIntro:
      "این پنج پروژه بخش‌های مختلف کارم را نشان می‌دهند؛ از تعریف محصول و طراحی تا اجرا و اداره آن.",
    allWork: "مشاهده همه پروژه‌ها",
    proof: "خلاصه ماجرا",
    capabilities: "کاری که در یک تیم محصول انجام می‌دهم",
    capabilitiesIntro:
      "دامنه مسئولیتم در هر پروژه فرق دارد، اما معمولاً فاصله میان نیاز اولیه کسب‌وکار و انتشار یک نسخه قابل استفاده را پوشش می‌دهم.",
    capabilityItems: [
      ["تعریف مسئله", "با کاربر، کارفرما و اعضای تیم صحبت می‌کنم تا قبل از تعریف قابلیت، خود مسئله روشن باشد."],
      ["محدوده و اولویت", "هسته محصول، وابستگی‌ها و ترتیب اجرا را مشخص می‌کنم و کارهای قابل تعویق را کنار می‌گذارم."],
      ["طراحی و مستندات", "مسیر کاربر، رابط، نیازمندی‌ها و شرایط پذیرش را آماده می‌کنم تا برداشت تیم از کار یکسان باشد."],
      ["اجرا", "با تیم‌های فرانت‌اند، بک‌اند و QA کار می‌کنم و هرجا لازم باشد در پیاده‌سازی هم نقش مستقیم دارم."],
      ["تست و انتشار", "مسیرهای اصلی را تست می‌کنم، ایرادها را اولویت‌بندی می‌کنم و نتیجه را بعد از انتشار دوباره می‌سنجم."],
    ],
    path: "سابقه کاری",
    pathIntro:
      "بعضی دوره‌ها هم‌زمان‌اند، چون در کنار اداره یک شرکت نرم‌افزاری و انجام پروژه‌های مشتری، محصولات خودم را هم توسعه می‌دادم.",
    fullHistory: "سابقه کامل",
    notes: "یادداشت‌های محصول",
    notesIntro:
      "سه یادداشت درباره تصمیم‌هایی که در Apex و Vibe گرفته‌ام.",
    readNote: "خواندن یادداشت",
    contactTitle: "پروژه‌ای در ذهن دارید؟",
    contactBody:
      "در واتساپ یک توضیح کوتاه درباره کاری که می‌خواهید انجام دهید، وضعیت فعلی و کمکی که لازم دارید بفرستید.",
    workTitle: "پروژه‌های محصول",
    workIntro:
      "در هر مطالعه موردی، مسئله، مسئولیت من، تصمیم‌های اصلی، نحوه اجرا و وضعیت فعلی پروژه آمده است.",
    viewCase: "مشاهده پروژه",
    caseNav: [
      ["خلاصه", "brief"],
      ["چالش‌ها", "constraints"],
      ["ترتیب ساخت", "journey"],
      ["تصمیم‌ها", "decisions"],
      ["سیستم", "system"],
      ["جزئیات قابل بررسی", "evidence"],
      ["نتیجه", "outcome"],
    ],
    labels: {
      period: "زمان",
      stage: "وضعیت",
      role: "نقش من",
      team: "تیم",
      context: "داستان پروژه",
      problem: "مسئله اصلی",
      users: "برای چه کسانی",
      northStar: "نتیجه‌ای که دنبالش بودم",
      constraints: "چه چیزی کار را سخت می‌کرد",
      journey: "اول چه چیزی را ساختم و چرا",
      decisions: "تصمیم‌های اصلی من",
      system: "سیستم چطور کار می‌کند",
      scope: "کارهایی که خودم انجام دادم",
      evidence: "چیزهایی که می‌شود بررسی کرد",
      gallery: "داخل محصول",
      outcome: "امروز پروژه کجاست",
      lessons: "چیزی که یاد گرفتم",
      next: "پروژه بعدی",
      live: "فعال",
      shipped: "اجراشده",
      designed: "طراحی‌شده",
      artifact: "جزئیات",
    },
    thinkingTitle: "یادداشت‌های محصول",
    thinkingIntro:
      "سه یادداشت بر اساس تجربه کار در Apex و Vibe.",
    aboutTitle: "در سال‌های مختلف، هم توسعه‌دهنده بوده‌ام، هم مسئول محصول و هم مدیر یک شرکت نرم‌افزاری.",
    aboutBody: [
      "کارم را با توسعه فرانت‌اند و طراحی تجربه کاربر شروع کردم. با بزرگ‌تر شدن مسئولیتم، تعریف قابلیت‌ها، اولویت‌بندی، طراحی مسیرهای کاربر، هماهنگی با بک‌اند، QA و آماده‌سازی انتشار هم به کارم اضافه شد.",
      "بعدتر محصولات خودم را ساختم و یک شرکت نرم‌افزاری را اداره کردم. در آن دوره با قیمت‌گذاری، مذاکره با مشتری، پشتیبانی، زیرساخت و برنامه‌ریزی لانچ هم درگیر بودم. هنوز کد می‌زنم، به‌خصوص زمانی که حضور مستقیم فنی باعث تصمیم بهتر یا اجرای سریع‌تر می‌شود.",
    ],
    principles: "روش کاری من",
    principleItems: [
      ["اولویت‌بندی", "ابتدا مسیر اصلی کاربر را مشخص می‌کنم و قابلیت‌های بعدی را بر اساس آن می‌چینم."],
      ["مستندسازی", "از نیازمندی، فلو و شرایط پذیرش زمانی استفاده می‌کنم که تصمیم یا تحویل کار را روشن‌تر کنند."],
      ["عملیات محصول", "رسیدگی، حریم خصوصی، پشتیبانی و اعتراض را بخشی از خود محصول می‌دانم، نه کاری برای بعد از لانچ."],
      ["درگیری فنی", "بین قابلیت فعال، کار اجراشده اما هنوز اثبات‌نشده و چیزی که فعلاً در مرحله طراحی است تفاوت می‌گذارم."],
    ],
    education: "تحصیلات و زبان",
    educationBody:
      "MBA مدیریت فناوری (۱۴۰۵) با پژوهش درباره فناوری دیجیتال، نوآوری و بهره‌وری. کارشناسی معماری. نمره آیلتس ۷.۵؛ فارسی زبان مادری و انگلیسی در سطح حرفه‌ای.",
  },
} as const;

const serviceCopy = {
  en: {
    eyebrow: "Services",
    title: "Product, UX, and web development services",
    intro: "I work on projects where the responsibility extends beyond implementation. Depending on the project, my role can include product definition, UX, frontend or full-stack development, testing, and release preparation.",
    whatsapp: "Discuss a project on WhatsApp",
    work: "Review my work",
    scopeLabel: "Types of work",
    scopeTitle: "Projects I can take responsibility for",
    services: [
      ["New digital products", "Turning an early idea or business need into a defined scope, user flows, interface, technical plan, and working release."],
      ["Business websites and platforms", "Designing and building multilingual websites, customer portals, dashboards, publishing systems, and internal operating tools."],
      ["Existing product improvement", "Reviewing a product that is slow, confusing, incomplete, or difficult to maintain, then addressing the most important product and technical problems."],
      ["Technical product support", "Supporting a founder or team with roadmap decisions, PRDs, UX, frontend leadership, QA, release planning, and coordination with developers."],
    ],
    ownershipLabel: "Responsibilities",
    ownershipTitle: "What I can cover",
    ownership: [
      "Product discovery, scope, roadmap, and prioritization",
      "User flows, UX/UI, prototypes, and design systems",
      "Frontend development and, where appropriate, full-stack delivery",
      "API requirements and coordination with backend teams",
      "QA planning, defect triage, release checks, and documentation",
      "Performance work, AI integration, and operating-cost review",
    ],
    evidenceLabel: "Relevant work",
    evidenceTitle: "Examples with implementation details",
    processLabel: "Working process",
    processTitle: "A clear scope before a long commitment",
    process: [
      ["Initial conversation", "We discuss the business, users, current product, constraints, timing, and the result you need."],
      ["Scope and proposal", "I review the available material and write down the work, responsibilities, deliverables, schedule, and assumptions."],
      ["Delivery", "The work is divided into reviewable stages. Decisions, progress, risks, and changes remain documented."],
      ["Release and handover", "I test the agreed journeys, support deployment, document the system, and hand over the work and access clearly."],
    ],
    modelsLabel: "Engagement",
    models: ["Complete project", "Defined product or UX phase", "Fractional product support", "Audit and recovery work"],
    contactLabel: "Project enquiry",
    contactTitle: "What to include in your first message",
    contactBody: "A short description of the business, what currently exists, the problem you want to solve, your preferred timing, and an approximate budget range are enough for an initial review.",
  },
  fa: {
    eyebrow: "خدمات",
    title: "مدیریت محصول، طراحی تجربه کاربر و توسعه وب",
    intro: "در پروژه‌هایی کار می‌کنم که به ترکیبی از مدیریت محصول، طراحی و اجرا نیاز دارند. بسته به نیاز پروژه، مسئولیتم می‌تواند تعریف محصول، طراحی تجربه، توسعه فرانت‌اند یا Full-stack، تست و آماده‌سازی انتشار را شامل شود.",
    whatsapp: "گفت‌وگو درباره پروژه در واتساپ",
    work: "مشاهده پروژه‌ها",
    scopeLabel: "نوع پروژه",
    scopeTitle: "کارهایی که می‌توانم مسئولیتشان را بر عهده بگیرم",
    services: [
      ["محصول دیجیتال جدید", "تبدیل یک ایده اولیه یا نیاز کسب‌وکار به محدوده روشن، مسیرهای کاربر، رابط، برنامه فنی و یک نسخه قابل استفاده."],
      ["وب‌سایت و پلتفرم کسب‌وکار", "طراحی و توسعه وب‌سایت چندزبانه، پنل مشتری، داشبورد، سیستم انتشار محتوا و ابزارهای داخلی شرکت."],
      ["بهبود محصول موجود", "بررسی محصولی که کند، نامفهوم، ناقص یا دشوار برای نگهداری است و اصلاح مهم‌ترین مشکلات محصول و فنی آن."],
      ["همراهی فنی در مدیریت محصول", "کمک به مدیر یا تیم در نقشه راه، PRD، طراحی تجربه، هدایت فرانت‌اند، QA، برنامه انتشار و هماهنگی با توسعه‌دهندگان."],
    ],
    ownershipLabel: "دامنه مسئولیت",
    ownershipTitle: "بخش‌هایی که می‌توانم پوشش دهم",
    ownership: [
      "بررسی مسئله، تعیین محدوده، نقشه راه و اولویت‌بندی",
      "مسیرهای کاربر، UX و UI، نمونه اولیه و سیستم طراحی",
      "توسعه فرانت‌اند و در پروژه‌های مناسب، اجرای Full-stack",
      "تعریف نیازمندی API و هماهنگی با تیم بک‌اند",
      "برنامه QA، دسته‌بندی ایرادها، بررسی انتشار و مستندسازی",
      "بهینه‌سازی سرعت، استفاده از AI و بررسی هزینه‌های عملیاتی",
    ],
    evidenceLabel: "پروژه‌های مرتبط",
    evidenceTitle: "نمونه‌هایی همراه با جزئیات تصمیم و اجرا",
    processLabel: "روش همکاری",
    processTitle: "قبل از شروع بلندمدت، محدوده کار را روشن می‌کنیم",
    process: [
      ["گفت‌وگوی اولیه", "درباره کسب‌وکار، کاربران، وضعیت فعلی، محدودیت‌ها، زمان و نتیجه مورد انتظار صحبت می‌کنیم."],
      ["محدوده و پیشنهاد", "اطلاعات موجود را بررسی می‌کنم و شرح کار، مسئولیت‌ها، خروجی‌ها، زمان‌بندی و فرض‌های پروژه را می‌نویسم."],
      ["اجرا", "کار به بخش‌های قابل بررسی تقسیم می‌شود و تصمیم‌ها، پیشرفت، ریسک‌ها و تغییرات ثبت می‌شوند."],
      ["انتشار و تحویل", "مسیرهای توافق‌شده را تست می‌کنم، در استقرار همراهی می‌کنم و مستندات، کد و دسترسی‌ها را روشن تحویل می‌دهم."],
    ],
    modelsLabel: "نوع همکاری",
    models: ["اجرای کامل پروژه", "یک مرحله مشخص محصول یا UX", "همراهی پاره‌وقت با تیم محصول", "بررسی و اصلاح محصول موجود"],
    contactLabel: "درخواست پروژه",
    contactTitle: "در پیام اول چه اطلاعاتی لازم است؟",
    contactBody: "یک توضیح کوتاه درباره کسب‌وکار، چیزی که الان وجود دارد، مسئله‌ای که می‌خواهید حل شود، زمان مورد نظر و حدود بودجه برای بررسی اولیه کافی است.",
  },
} as const;

const featured: ProjectSlug[] = ["apex", "vibe", "first-choice", "hosseintalab"];

function root(locale: Locale) {
  return locale === "fa" ? "/fa" : "";
}

function href(locale: Locale, path = "") {
  return `${root(locale)}${path ? `/${path}` : ""}` || "/";
}

function whatsappHref(locale: Locale) {
  const message = locale === "fa"
    ? "سلام شاهین، سایتت رو دیدم و می‌خوام درباره یه پروژه باهات صحبت کنم."
    : "Hi Shahin, I found your portfolio and would like to discuss a project.";
  return `https://wa.me/989381011212?text=${encodeURIComponent(message)}`;
}

function local<T extends { en: string; fa: string }>(value: T, locale: Locale) {
  return value[locale];
}

function metricValue(value: string | { en: string; fa: string }, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

function Arrow({ locale, size = 18 }: { locale: Locale; size?: number }) {
  return locale === "fa" ? <ArrowLeft size={size} /> : <ArrowRight size={size} />;
}

export function Header({ locale, languagePath }: { locale: Locale; languagePath?: string }) {
  const c = copy[locale];
  const languageHref = languagePath ? (locale === "fa" ? `/${languagePath}` : `/fa/${languagePath}`) : c.languageHref;
  return (
    <header className="site-header">
      <Link className="brand" href={href(locale)} aria-label={locale === "fa" ? "صفحه اصلی شاهین غنی‌زاده" : "Shahin Ghanizadeh home"}>
        <span>SG</span>
        <strong>{locale === "fa" ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</strong>
      </Link>
      <nav className="desktop-nav" aria-label={locale === "fa" ? "ناوبری اصلی" : "Primary navigation"}>
        {c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}
        <a className="language-link" href={languageHref}>{c.language}</a>
        <a className="icon-link" href="/documents/shahin-ghanizadeh-resume.pdf" aria-label={c.resume} title={c.resume}><Download size={17} /></a>
      </nav>
      <details className="mobile-nav">
        <summary aria-label={locale === "fa" ? "باز کردن منو" : "Open menu"}><Menu size={20} /></summary>
        <div>
          {c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}
          <a href={languageHref}>{c.language}</a>
          <a href="/documents/shahin-ghanizadeh-resume.pdf">{c.resume}</a>
        </div>
      </details>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div><strong>{locale === "fa" ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</strong><p>{locale === "fa" ? "مدیر فنی محصول و توسعه‌دهنده فرانت‌اند" : "Technical product manager and frontend engineer"}</p></div>
      <div className="footer-links">
        <a href={whatsappHref(locale)} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="mailto:shahinghani@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/shahinghanizadeh" target="_blank" rel="me noreferrer">LinkedIn</a>
        <a href="https://github.com/ShawnMcRich" target="_blank" rel="me noreferrer">GitHub</a>
        <a href="https://www.instagram.com/shahinghanizadeh/" target="_blank" rel="me noreferrer">Instagram</a>
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
      <div className="contact-actions">
        <a className="button button-dark button-emphasis" href={whatsappHref(locale)} target="_blank" rel="noreferrer"><MessageCircle size={19} />{c.contactCta}</a>
        <Link className="text-link" href={href(locale, "services")}>{locale === "fa" ? "اطلاعات همکاری پروژه‌ای" : "Project services"}<Arrow locale={locale} /></Link>
      </div>
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
          {project.metrics.slice(0, compact ? 2 : 3).map(metric => <div key={metricValue(metric.value, locale) + local(metric.label, locale)}><strong>{metricValue(metric.value, locale)}</strong><span>{local(metric.label, locale)}</span></div>)}
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
            <a className="button button-dark button-emphasis" href={whatsappHref(locale)} target="_blank" rel="noreferrer"><MessageCircle size={19} />{c.contactCta}</a>
            <Link className="button button-plain" href={href(locale, "work")}>{c.workCta}<Arrow locale={locale} /></Link>
          </div>
        </div>
        <aside className="hero-note">
          <div className="availability"><span />{c.availability}</div>
          <p>{rtl
            ? "در حال حاضر Apex را اداره می‌کنم و همراه تیم Vibe روی آماده‌سازی نسخه عمومی کار می‌کنم."
            : "I currently operate Apex and work with the Vibe team on its public-launch readiness."}</p>
        </aside>
      </section>

      <section className="work-window" aria-label={rtl ? "تصویری از محصولات" : "A look inside the products"}>
        <figure className="work-window-main">
          <img src="/projects/apex/new/app-dashboard.jpg" alt={rtl ? "داشبورد محصول Apex" : "Apex product dashboard"} />
          <figcaption><span>Apex</span>{rtl ? "محصول تحلیل بازار؛ فعال و درآمدزا" : "Live, paid market-analysis product"}</figcaption>
        </figure>
        <figure>
          <img src="/projects/vibe/new/discovery-home.jpg" alt={rtl ? "صفحه کشف Vibe" : "Vibe discovery experience"} />
          <figcaption><span>Vibe</span>{rtl ? "پلتفرم بررسی کسب‌وکار؛ پیش از لانچ" : "Pre-launch business-review platform"}</figcaption>
        </figure>
      </section>

      <section className="content-section selected-work">
        <header className="section-heading">
          <div><p className="kicker">{c.selectedWork}</p><h2>{c.selectedIntro}</h2></div>
          <Link className="text-link" href={href(locale, "work")}>{c.allWork}<Arrow locale={locale} /></Link>
        </header>
        <div className="project-stack">{featured.map(slug => <ProjectPreview key={slug} project={projects[slug]} locale={locale} />)}</div>
        <div className="resilience-callout">
          <div><p className="kicker">05 · {local(projects.mrm.stage, locale)}</p><h2>{projects.mrm.title}</h2><p>{local(projects.mrm.headline, locale)}</p></div>
          <div><strong>{rtl ? "حدود ۴۰" : "~40"}</strong><span>{rtl ? "نفر از ابزار استفاده کردند تا اینترنت بازگشت" : "people used the tool until connectivity returned"}</span></div>
          <Link className="button button-plain" href={href(locale, "work/mrm")}>{c.viewCase}<Arrow locale={locale} /></Link>
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
        <div>{notes.map((note, index) => <Link key={note.slug} href={href(locale, `thinking/${note.slug}`)}><span>0{index + 1}</span><h3>{local(note.title, locale)}</h3><p>{local(note.lead, locale)}</p><Arrow locale={locale} /></Link>)}</div>
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

export function ServicesPage({ locale }: { locale: Locale }) {
  const s = serviceCopy[locale];
  const rtl = locale === "fa";
  const evidence: ProjectSlug[] = ["first-choice", "hosseintalab", "apex", "vibe"];

  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} languagePath="services" />
      <section className="service-hero">
        <div>
          <p className="kicker">{s.eyebrow}</p>
          <h1>{s.title}</h1>
          <p>{s.intro}</p>
          <div className="actions">
            <a className="button button-dark button-emphasis" href={whatsappHref(locale)} target="_blank" rel="noreferrer"><MessageCircle size={19} />{s.whatsapp}</a>
            <Link className="button button-plain" href={href(locale, "work")}>{s.work}<Arrow locale={locale} /></Link>
          </div>
        </div>
        <aside>
          <p className="kicker">{s.modelsLabel}</p>
          <ul>{s.models.map(item => <li key={item}>{item}</li>)}</ul>
        </aside>
      </section>

      <section className="service-section">
        <header><p className="kicker">{s.scopeLabel}</p><h2>{s.scopeTitle}</h2></header>
        <div className="service-rows">{s.services.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="service-section service-ownership">
        <header><p className="kicker">{s.ownershipLabel}</p><h2>{s.ownershipTitle}</h2></header>
        <ul>{s.ownership.map(item => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul>
      </section>

      <section className="service-section service-evidence">
        <header><p className="kicker">{s.evidenceLabel}</p><h2>{s.evidenceTitle}</h2></header>
        <div>{evidence.map(slug => {
          const project = projects[slug];
          return <Link className={`accent-${project.accent}`} key={slug} href={href(locale, `work/${slug}`)}>{project.cover && <img src={project.cover} alt={local(project.headline, locale)} />}<p className="kicker">{local(project.productType, locale)}</p><h3>{project.title}</h3><p>{local(project.deck, locale)}</p><span>{copy[locale].viewCase}<Arrow locale={locale} /></span></Link>;
        })}</div>
      </section>

      <section className="service-section service-process">
        <header><p className="kicker">{s.processLabel}</p><h2>{s.processTitle}</h2></header>
        <ol>{s.process.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="service-contact">
        <div><p className="kicker">{s.contactLabel}</p><h2>{s.contactTitle}</h2><p>{s.contactBody}</p></div>
        <a className="button button-dark button-emphasis" href={whatsappHref(locale)} target="_blank" rel="noreferrer"><MessageCircle size={19} />{s.whatsapp}</a>
      </section>
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
            <p className="case-byline">
              {rtl ? "مطالعه موردی و اجرای محصول توسط " : "Product case study and delivery by "}
              <Link href={href(locale, "about")}>{rtl ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</Link>
            </p>
            {p.links && <div className="case-links">{p.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.href.includes("github") ? <Github size={17} /> : <ExternalLink size={17} />}{local(link.label, locale)}</a>)}</div>}
          </div>
          <dl className="case-meta">
            <div><dt>{l.period}</dt><dd>{local(p.period, locale)}</dd></div>
            <div><dt>{l.stage}</dt><dd>{local(p.stage, locale)}</dd></div>
            <div><dt>{l.role}</dt><dd>{local(p.role, locale)}</dd></div>
            <div><dt>{l.team}</dt><dd>{local(p.team, locale)}</dd></div>
          </dl>
        </header>

        <section className="case-metrics">{p.metrics.map(metric => <div key={metricValue(metric.value, locale) + local(metric.label, locale)}><strong>{metricValue(metric.value, locale)}</strong><span>{local(metric.label, locale)}</span>{metric.note && <small>{local(metric.note, locale)}</small>}</div>)}</section>

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
      <section className="essay-index">{notes.map((note, index) => <Link key={note.slug} href={href(locale, `thinking/${note.slug}`)}><span>0{index + 1}</span><strong>{local(note.title, locale)}</strong></Link>)}</section>
      <section className="essays essays-index">{notes.map((note, index) => <article key={note.slug}><header><span>0{index + 1}</span><div><h2>{local(note.title, locale)}</h2><p>{local(note.lead, locale)}</p></div></header><div><p>{local(note.paragraphs[0], locale)}</p></div><Link className="text-link" href={href(locale, `thinking/${note.slug}`)}>{c.readNote}<Arrow locale={locale} /></Link></article>)}</section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

export function ThoughtPage({ locale, slug }: { locale: Locale; slug: NoteSlug }) {
  const note = notes.find(item => item.slug === slug)!;
  const rtl = locale === "fa";
  const project = projects[note.project];
  const published = rtl ? "منتشرشده در ۲۱ مرداد ۱۴۰۵" : "Published August 12, 2026";
  return (
    <main lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <Header locale={locale} languagePath={`thinking/${slug}`} />
      <article className="thought-article">
        <header className="thought-hero">
          <p className="kicker">{rtl ? "یادداشت محصول" : "Product note"}</p>
          <h1>{local(note.title, locale)}</h1>
          <p className="thought-lead">{local(note.lead, locale)}</p>
          <div className="thought-meta">
            <span>{rtl ? "نوشته شاهین غنی‌زاده" : "By Shahin Ghanizadeh"}</span>
            <time dateTime={note.published}>{published}</time>
            <span>{project.title}</span>
          </div>
        </header>
        <div className="thought-body">
          {note.paragraphs.map(paragraph => <p key={local(paragraph, locale)}>{local(paragraph, locale)}</p>)}
        </div>
        <footer className="thought-footer">
          <div>
            <p className="kicker">{rtl ? "نویسنده" : "Author"}</p>
            <strong>{rtl ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</strong>
            <p>{rtl ? "مدیر فنی محصول، طراح محصول و توسعه‌دهنده ارشد فرانت‌اند" : "Technical product manager, product designer, and senior frontend engineer"}</p>
            <Link className="text-link" href={href(locale, "about")}>{rtl ? "درباره من" : "About Shahin"}<Arrow locale={locale} /></Link>
          </div>
          <Link className="thought-project" href={href(locale, `work/${note.project}`)}>
            <span>{rtl ? "پروژه مرتبط" : "Related project"}</span>
            <strong>{project.title}</strong>
            <Arrow locale={locale} size={22} />
          </Link>
        </footer>
      </article>
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
      <section className="about-hero"><header className="about-heading"><img className="about-portrait" src="/shahin-ghanizadeh.jpg" width="1200" height="1200" alt={rtl ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"} /><p className="kicker">{rtl ? "درباره من" : "About"}</p><h1>{rtl ? "شاهین غنی‌زاده" : "Shahin Ghanizadeh"}</h1><p>{c.aboutTitle}</p></header><div>{c.aboutBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <section className="principles-band"><header><p className="kicker">{c.principles}</p></header><div>{c.principleItems.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section>
      <section id="experience" className="content-section full-experience"><header className="section-heading"><div><p className="kicker">{c.path}</p><h2>{c.pathIntro}</h2></div></header><div className="timeline">{experience.map(item => <article key={item.company}><time>{local(item.period, locale)}</time><div><h3>{local(item.title, locale)}</h3><strong>{item.company}</strong><p>{local(item.summary, locale)}</p></div></article>)}</div></section>
      <section className="education-band"><p className="kicker">{c.education}</p><p>{c.educationBody}</p><a className="button button-dark" href="/documents/shahin-ghanizadeh-resume.pdf"><Download size={18} />{c.resume}</a></section>
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
