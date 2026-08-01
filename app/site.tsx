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
    role: "Technical Product Manager · AI Product · Senior Frontend Engineer",
    intro:
      "I find the real problem, shape the product, design the experience, and stay close enough to the code and operations to get it shipped.",
    subintro:
      "Ten years across software, founder-led products, AI systems, marketplaces, frontend engineering, and the practical work between an idea and a reliable release.",
    availability: "Open to remote and international product roles",
    workCta: "Explore the case studies",
    contactCta: "Start a conversation",
    selectedWork: "Selected product work",
    selectedIntro:
      "Four products, four different constraints. Each case shows the decisions, delivery evidence, and limits behind the result.",
    allWork: "View all work",
    proof: "Selected proof of ownership",
    capabilities: "I work across the whole product path",
    capabilitiesIntro:
      "My engineering background is useful because I can turn product intent into an executable system, not because every product decision should become a technical one.",
    capabilityItems: [
      ["Frame", "Find the user, business, and operational problem worth solving."],
      ["Sequence", "Set the product layers, dependencies, measures, and trade-offs."],
      ["Make visible", "Turn vague ideas into UX, flows, prototypes, and clear requirements."],
      ["Deliver", "Coordinate frontend, backend, QA, risk, and release work."],
      ["Learn", "Instrument, observe, fix, and revise the product after reality answers back."],
    ],
    path: "Experience path",
    pathIntro:
      "My career overlaps because I have built founder-led products alongside client and engineering work. The common thread is ownership from ambiguity to delivery.",
    fullHistory: "Read the full background",
    notes: "Field notes",
    notesIntro:
      "Product thinking written from systems I have actually built, priced, debugged, and operated.",
    readNote: "Read note",
    contactTitle: "Need product judgment that survives contact with delivery?",
    contactBody:
      "I am exploring technical product management, AI product, product ownership, and product-minded frontend leadership roles.",
    workTitle: "The work, with the decisions left in.",
    workIntro:
      "These are not launch screenshots with a success paragraph attached. The case studies show the problem, constraints, sequencing, technical system, evidence, outcome, and what remains unproven.",
    viewCase: "Read full case study",
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
      northStar: "Success direction",
      constraints: "The constraints",
      journey: "How the product took shape",
      decisions: "Decisions that changed the product",
      system: "How the system works",
      scope: "What I personally owned",
      evidence: "Evidence, not claims",
      gallery: "Product evidence",
      outcome: "Outcome and honest boundary",
      lessons: "What I learned",
      next: "Next case study",
      live: "Live",
      shipped: "Shipped",
      designed: "Designed / specified",
      artifact: "Evidence",
    },
    thinkingTitle: "Working notes, not content marketing.",
    thinkingIntro:
      "Three ideas I can defend with product decisions, code, operating constraints, and outcomes.",
    aboutTitle: "A product person who learned the job by carrying the work.",
    aboutBody: [
      "I started in frontend engineering and UX, but the work never stayed inside the frontend. I was usually the person asking what should be built, drawing the flow, deciding what had to come first, translating it for frontend and backend, testing the result, and noticing operational or legal risk before release.",
      "Over time I built companies and products of my own. That added pricing, customer conversations, support, infrastructure, launch decisions, and the uncomfortable discipline of being responsible when an idea meets reality. Today I call that work technical product management, and I still value the engineering depth that lets me understand the cost of a decision.",
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
    role: "مدیر فنی محصول · محصول هوش مصنوعی · توسعه دهنده ارشد فرانت اند",
    intro:
      "مسئله واقعی را پیدا می کنم، محصول و تجربه را شکل می دهم و آن قدر به اجرا، کد و عملیات نزدیک می مانم تا نتیجه واقعا منتشر شود.",
    subintro:
      "ده سال تجربه در نرم افزار، محصولات بنیان گذارمحور، سیستم های هوش مصنوعی، مارکت پلیس، فرانت اند و تمام کارهای میان یک ایده و انتشار قابل اتکا.",
    availability: "آماده همکاری ریموت و بین المللی در حوزه محصول",
    workCta: "مشاهده کیس استادی ها",
    contactCta: "شروع گفت وگو",
    selectedWork: "پروژه های منتخب محصول",
    selectedIntro:
      "چهار محصول با چهار محدودیت متفاوت. در هر کیس، تصمیم ها، شواهد اجرا و مرز نتیجه روشن است.",
    allWork: "مشاهده همه پروژه ها",
    proof: "شواهد منتخب از مسئولیت کامل",
    capabilities: "در تمام مسیر محصول مشارکت می کنم",
    capabilitiesIntro:
      "دانش مهندسی کمک می کند منظور محصول را به سیستم قابل اجرا تبدیل کنم؛ نه اینکه هر تصمیم محصول را به تصمیم فنی تقلیل بدهم.",
    capabilityItems: [
      ["تعریف", "پیدا کردن مسئله مهم کاربر، کسب و کار و عملیات."],
      ["چیدمان", "تعیین لایه ها، وابستگی ها، معیارها و بده بستان های محصول."],
      ["قابل مشاهده کردن", "تبدیل ایده مبهم به تجربه، جریان، نمونه و نیازمندی روشن."],
      ["اجرا", "هماهنگی فرانت اند، بک اند، تست، ریسک و انتشار."],
      ["یادگیری", "اندازه گیری، مشاهده، رفع مشکل و اصلاح محصول بعد از مواجهه با واقعیت."],
    ],
    path: "مسیر تجربه",
    pathIntro:
      "بخشی از سابقه من هم پوشانی دارد، چون هم زمان با کار مهندسی و پروژه های مشتری، محصولات خودم را هم ساخته ام. خط مشترک همه آن ها، مسئولیت از ابهام تا تحویل است.",
    fullHistory: "مشاهده سابقه کامل",
    notes: "یادداشت های کاری",
    notesIntro:
      "دیدگاه محصول از سیستم هایی که واقعا ساخته، قیمت گذاری، رفع اشکال و مدیریت کرده ام.",
    readNote: "مطالعه یادداشت",
    contactTitle: "به قضاوت محصولی نیاز دارید که در اجرا هم دوام بیاورد؟",
    contactBody:
      "برای موقعیت های مدیریت فنی محصول، محصول هوش مصنوعی، مالکیت محصول و رهبری فرانت اند با نگاه محصول آماده همکاری هستم.",
    workTitle: "پروژه ها، همراه با تصمیم های پشت آن ها.",
    workIntro:
      "این ها چند تصویر لانچ همراه با یک پاراگراف موفقیت نیستند. هر کیس، مسئله، محدودیت، چیدمان، سیستم فنی، شواهد، نتیجه و بخش های اثبات نشده را نشان می دهد.",
    viewCase: "مطالعه کامل کیس استادی",
    caseNav: [
      ["خلاصه", "brief"],
      ["محدودیت", "constraints"],
      ["مسیر", "journey"],
      ["تصمیم ها", "decisions"],
      ["سیستم", "system"],
      ["شواهد", "evidence"],
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
      northStar: "جهت موفقیت",
      constraints: "محدودیت ها",
      journey: "مسیر شکل گیری محصول",
      decisions: "تصمیم هایی که محصول را تغییر دادند",
      system: "سیستم چگونه کار می کند",
      scope: "مسئولیت مستقیم من",
      evidence: "شواهد به جای ادعا",
      gallery: "شواهد محصول",
      outcome: "نتیجه و مرز صادقانه",
      lessons: "آموخته ها",
      next: "کیس استادی بعدی",
      live: "فعال",
      shipped: "اجراشده",
      designed: "طراحی و مشخص شده",
      artifact: "شاهد",
    },
    thinkingTitle: "یادداشت کاری، نه بازاریابی محتوا.",
    thinkingIntro:
      "سه دیدگاه که می توانم با تصمیم محصول، کد، محدودیت عملیاتی و نتیجه از آن ها دفاع کنم.",
    aboutTitle: "کسی که مدیریت محصول را با به دوش کشیدن خود کار یاد گرفت.",
    aboutBody: [
      "کارم را از توسعه فرانت اند و تجربه کاربری شروع کردم، اما مسئولیت هیچ وقت در فرانت اند نماند. معمولا کسی بودم که می پرسید چه چیزی باید ساخته شود، جریان را طراحی می کرد، ترتیب کار را مشخص می کرد، آن را برای فرانت اند و بک اند قابل اجرا می ساخت، نتیجه را تست می کرد و پیش از انتشار به ریسک عملیاتی یا حقوقی توجه داشت.",
      "بعدتر شرکت و محصولات خودم را ساختم. قیمت گذاری، گفت وگو با کاربر، پشتیبانی، زیرساخت، تصمیم های لانچ و مسئولیت نتیجه هم به کار اضافه شد. امروز نام این مسیر را مدیریت فنی محصول می گذارم و همچنان عمق مهندسی را مهم می دانم، چون کمک می کند هزینه واقعی هر تصمیم را بفهمم.",
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
      <Link className="brand" href={href(locale)} aria-label={locale === "fa" ? "صفحه اصلی شاهین غنی زاده" : "Shahin Ghanizadeh home"}>
        <span>SG</span>
        <strong>{locale === "fa" ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</strong>
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
      <div><strong>{locale === "fa" ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</strong><p>{locale === "fa" ? "مدیر فنی محصول و سازنده محصول" : "Technical product manager and product builder"}</p></div>
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
          <h1>{rtl ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</h1>
          <p className="hero-statement">{c.intro}</p>
          <p className="hero-support">{c.subintro}</p>
          <div className="actions">
            <Link className="button button-dark" href={href(locale, "work")}>{c.workCta}<Arrow locale={locale} /></Link>
            <a className="button button-plain" href="mailto:shahinghani@hotmail.com">{c.contactCta}</a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="availability"><span />{c.availability}</div>
          <dl>
            <div><dt>{rtl ? "محصول" : "Products"}</dt><dd>{rtl ? "هوش مصنوعی · مارکت پلیس · عملیات" : "AI · Marketplaces · Operations"}</dd></div>
            <div><dt>{rtl ? "عمق" : "Depth"}</dt><dd>{rtl ? "استراتژی · تجربه کاربری · مهندسی · تست" : "Strategy · UX · Engineering · QA"}</dd></div>
            <div><dt>{rtl ? "همکاری" : "Working"}</dt><dd>{rtl ? "تهران · ریموت" : "Tehran · Remote"}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="proof-band" aria-label={c.proof}>
        <p className="kicker">{c.proof}</p>
        <div className="proof-grid">
          <article><strong>{rtl ? "Apex را از ایده تا درآمد ساختم" : "Built Apex from thesis to revenue"}</strong><span>{rtl ? "استراتژی، الگوریتم، تجربه، مهندسی، قیمت گذاری و عملیات محصول فعال" : "Strategy, algorithms, UX, engineering, pricing, and production operations"}</span></article>
          <article><strong>{rtl ? "بیش از ۳۰۰ عضو پرداخت کننده" : "300+ paying members"}</strong><span>{rtl ? "MonoCoin با جامعه بیش از ۱۳ هزار نفر، خودکارسازی و درآمد اشتراکی" : "MonoCoin, with a 13,000+ audience, automation, and subscription revenue"}</span></article>
          <article><strong>{rtl ? "مالکیت Vibe از محصول تا اجرا" : "Owned Vibe from product to delivery"}</strong><span>{rtl ? "ایده، نقشه راه، تجربه کامل، فرانت اند از صفر، اعتماد، تست و آمادگی لانچ" : "Concept, roadmap, full UX, frontend from zero, trust, QA, and launch readiness"}</span></article>
          <article><strong>{rtl ? "یک کسب و کار ۳۸ ساله را به محصول تبدیل کردم" : "Turned a 38-year operation into a product"}</strong><span>{rtl ? "First Choice در سه زبان، همراه با کشف، سرنخ، محتوا و پنل عملیات" : "First Choice across three languages, discovery, leads, content, and operations"}</span></article>
          <article><strong>{rtl ? "کار یک تیم ۴۰ نفره را در قطعی ادامه دادم" : "Kept a 40-person team working through a shutdown"}</strong><span>{rtl ? "MRM را هنگام بحران تعریف، ساختم، مستقر کردم و به استفاده واقعی رساندم" : "Scoped, built, deployed, and drove real adoption of MRM during the crisis"}</span></article>
        </div>
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
            <CaseSection id="brief" index="01" title={rtl ? "تعریف محصول" : "The product brief"}>
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
              <div className="decision-list">{p.decisions.map((decision, index) => <article key={local(decision.title, locale)}><div><span>Decision {String(index + 1).padStart(2, "0")}</span><Status status={decision.status} locale={locale} /></div><h3>{local(decision.title, locale)}</h3><p>{local(decision.body, locale)}</p></article>)}</div>
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
              <div className="outcome-block"><p>{local(p.outcome, locale)}</p><aside><strong>{rtl ? "مرز ادعا" : "Claim boundary"}</strong><p>{local(p.statusNote, locale)}</p></aside></div>
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
      <section className="essays">{notes.map((note, index) => <article id={note.slug} key={note.slug}><header><span>0{index + 1}</span><div><h2>{local(note.title, locale)}</h2><p>{local(note.lead, locale)}</p></div></header><div>{note.paragraphs.map(paragraph => <p key={local(paragraph, locale)}>{local(paragraph, locale)}</p>)}</div><Link className="text-link" href={href(locale, `work/${index === 0 ? "apex" : "vibe"}`)}>{rtl ? "مشاهده شواهد پروژه" : "See the project evidence"}<Arrow locale={locale} /></Link></article>)}</section>
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
