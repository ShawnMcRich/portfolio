/* eslint-disable @next/next/no-img-element -- vinext serves local assets directly. */
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Mail, Menu } from "lucide-react";
import { Locale, ProjectSlug, projectSlugs, projects } from "./data";

const copy = {
  en: {
    nav: ["Work", "Thinking", "About"],
    navPaths: ["work", "thinking", "about"],
    language: "FA",
    languageHref: "/fa",
    resume: "Résumé",
    role: "Technical Product Manager · Senior Frontend Engineer",
    intro: "I turn ambiguous product problems into shipped systems, from strategy and UX to frontend delivery, AI integration, QA, and launch.",
    viewWork: "View selected work",
    proof: "Product judgment, backed by the build.",
    proofBody: "My product work comes from inside the implementation. I can define the outcome, shape the interaction, align technical dependencies, and stay with delivery until the system works.",
    selected: "Selected work",
    selectedBody: "Four products. Different constraints. The same habit of reducing ambiguity into something useful and operational.",
    readCase: "Read case study",
    thinking: "Product thinking",
    thinkingBody: "Practical decisions from products I have actually had to build, price, debug, and operate.",
    thoughts: [
      ["When an LLM should do less", "How deterministic preprocessing cut Apex model spend by roughly 95% and improved control."],
      ["Trust is a product cost", "Why credible review systems need moderation, evidence, appeals, and restraint by design."],
      ["Roadmaps are layers, not wish lists", "A method for sequencing core value, safety, operations, and monetization."],
    ],
    open: "Open to the right product problem.",
    openBody: "I am looking for remote or international work in technical product management, AI product, product ownership, frontend leadership, or hands-on product delivery from idea and UX through launch.",
    email: "Start a conversation",
    built: "Designed and built by Shahin Ghanizadeh.",
    workTitle: "Work",
    workIntro: "Product decisions shown with the context, constraints, and delivery evidence behind them.",
    aboutTitle: "A product manager who can enter the implementation.",
    aboutP: ["I started in frontend engineering and design, but my work kept expanding: deciding what to build, turning vague ideas into flows, sequencing frontend and backend work, anticipating risk, testing the result, and helping a product reach the market.", "That combination is now my deliberate practice. I am strongest where product judgment and technical reality need to stay in the same room: applied AI, marketplaces, trust systems, operational tools, and zero-to-one products."],
    capabilities: "What I bring",
    capabilityList: ["Product strategy, discovery, and roadmaps", "UX/UI, prototypes, and design systems", "Technical requirements and API contracts", "Frontend architecture and hands-on delivery", "AI workflows, guardrails, and unit economics", "QA, launch readiness, and operational risk"],
    history: "Background",
    historyBody: "Around 10 years building software products · MBA in Technology Management · IELTS 7.5 · Native Persian · Professional English",
    contact: "Contact",
    caseLabels: { problem: "The problem", approach: "The product approach", result: "Outcome", contribution: "What I owned", decisions: "Decisions that shaped the product", evidence: "Product evidence", next: "Next project" },
  },
  fa: {
    nav: ["پروژه ها", "دیدگاه ها", "درباره من"],
    navPaths: ["work", "thinking", "about"],
    language: "EN",
    languageHref: "/",
    resume: "رزومه انگلیسی",
    role: "مدیر فنی محصول · توسعه دهنده ارشد فرانت اند",
    intro: "مسئله های مبهم محصول را به سیستم های قابل استفاده تبدیل می کنم؛ از استراتژی و تجربه کاربری تا اجرای فرانت اند، هوش مصنوعی، تست و لانچ.",
    viewWork: "مشاهده پروژه ها",
    proof: "تفکر محصول، همراه با توان ساختن.",
    proofBody: "تجربه من در محصول از دل اجرا آمده است. می توانم نتیجه مورد انتظار را تعریف کنم، تعامل را شکل بدهم، وابستگی های فنی را هماهنگ کنم و تا زمانی که سیستم درست کار کند کنار تیم بمانم.",
    selected: "پروژه های منتخب",
    selectedBody: "چهار محصول با محدودیت های متفاوت و یک روش مشترک: تبدیل ابهام به محصولی مفید و قابل اجرا.",
    readCase: "مطالعه کیس استادی",
    thinking: "دیدگاه های محصول",
    thinkingBody: "تصمیم های واقعی از محصولاتی که خودم ساخته ام، قیمت گذاری کرده ام، خطاهایشان را پیدا کرده ام و به کار انداخته ام.",
    thoughts: [
      ["چه زمانی LLM باید کار کمتری انجام دهد", "چطور پردازش قطعی، هزینه مدل در Apex را نزدیک به ۹۵ درصد کاهش داد و کنترل خروجی را بیشتر کرد."],
      ["اعتماد برای محصول هزینه دارد", "چرا اعتبار نظرها به رسیدگی، مدرک، اعتراض و تصمیم های محتاطانه در طراحی نیاز دارد."],
      ["نقشه راه فهرست آرزوها نیست", "روشی برای چیدن ارزش اصلی، ایمنی، عملیات و درآمدزایی در لایه های درست."],
    ],
    open: "آماده همکاری روی یک مسئله جدی محصول.",
    openBody: "برای موقعیت های ریموت یا بین المللی در مدیریت فنی محصول، محصول هوش مصنوعی، مالکیت محصول، رهبری فرانت اند و اجرای کامل محصول از ایده و تجربه کاربری تا لانچ آماده همکاری هستم.",
    email: "شروع گفتگو",
    built: "طراحی و ساخته شده توسط شاهین غنی زاده.",
    workTitle: "پروژه ها",
    workIntro: "تصمیم های محصول همراه با مسئله، محدودیت ها و شواهد اجرایی پشت آنها.",
    aboutTitle: "مدیر محصولی که می تواند وارد اجرای فنی شود.",
    aboutP: ["کارم را از طراحی و توسعه فرانت اند شروع کردم، اما مسئولیت هایم مدام گسترده تر شد: تصمیم درباره چیزی که باید ساخته شود، تبدیل ایده مبهم به جریان قابل اجرا، هماهنگی کار فرانت اند و بک اند، پیش بینی ریسک، تست نتیجه و رساندن محصول به بازار.", "امروز این ترکیب، مسیر حرفه ای آگاهانه من است. بیشترین ارزش را جایی ایجاد می کنم که تصمیم محصول و واقعیت فنی باید کنار هم بمانند: هوش مصنوعی کاربردی، مارکت پلیس، سیستم های اعتماد، ابزارهای عملیاتی و محصولات صفر تا یک."],
    capabilities: "توانمندی های اصلی",
    capabilityList: ["استراتژی، شناخت مسئله و نقشه راه", "تجربه کاربری، نمونه اولیه و سیستم طراحی", "نیازمندی فنی و قراردادهای API", "معماری فرانت اند و اجرای عملی", "جریان های هوش مصنوعی، گاردریل و اقتصاد محصول", "تست، آمادگی لانچ و ریسک عملیاتی"],
    history: "پیشینه",
    historyBody: "حدود ۱۰ سال ساخت محصولات نرم افزاری · MBA مدیریت فناوری · آیلتس ۷.۵ · فارسی زبان مادری · انگلیسی حرفه ای",
    contact: "ارتباط",
    caseLabels: { problem: "مسئله", approach: "رویکرد محصول", result: "نتیجه", contribution: "مسئولیت های من", decisions: "تصمیم های کلیدی محصول", evidence: "شواهد محصول", next: "پروژه بعدی" },
  },
} as const;

function base(locale: Locale) { return locale === "fa" ? "/fa" : ""; }
function route(locale: Locale, path: string) { return `${base(locale)}/${path}` || "/"; }

export function Header({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <header className="site-header" dir={locale === "fa" ? "rtl" : "ltr"}>
    <Link className="wordmark" href={base(locale) || "/"} aria-label="Shahin Ghanizadeh home"><span>SG</span><strong>{locale === "fa" ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</strong></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{c.nav.map((item, i) => <Link key={item} href={route(locale, c.navPaths[i])}>{item}</Link>)}<a className="language-link" href={c.languageHref}>{c.language}</a><a className="icon-link" href="/documents/shahin-ghanizadeh-resume.pdf" title={c.resume} aria-label={c.resume}><Download size={18}/></a></nav>
    <details className="mobile-nav"><summary aria-label="Open menu"><Menu size={22}/></summary><div>{c.nav.map((item, i) => <Link key={item} href={route(locale, c.navPaths[i])}>{item}</Link>)}<a href={c.languageHref}>{c.language}</a><a href="/documents/shahin-ghanizadeh-resume.pdf">{c.resume}</a></div></details>
  </header>;
}

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <footer className="footer" dir={locale === "fa" ? "rtl" : "ltr"}><p>{c.built}</p><div><a href="mailto:shahinghani@hotmail.com">Email</a><a href="https://www.linkedin.com/in/shahinghanizadeh" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ShawnMcRich" target="_blank" rel="noreferrer">GitHub</a></div></footer>;
}

function Arrow({ locale }: { locale: Locale }) { return locale === "fa" ? <ArrowLeft size={19}/> : <ArrowRight size={19}/>; }

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const rtl = locale === "fa";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
    <Header locale={locale}/>
    <section className="hero">
      <div className="hero-media" aria-hidden="true"><img src="/projects/apex/hero-devices.jpg" alt=""/></div>
      <div className="hero-scrim" />
      <div className="hero-content"><p className="kicker">{c.role}</p><h1>{rtl ? <>شاهین<br/>غنی زاده</> : <>Shahin<br/>Ghanizadeh</>}</h1><p className="hero-intro">{c.intro}</p><div className="hero-actions"><Link className="button button-light" href={route(locale, "work")}>{c.viewWork}<Arrow locale={locale}/></Link><a className="text-link light" href="/documents/shahin-ghanizadeh-resume.pdf"><Download size={17}/>{c.resume}</a></div></div>
      <div className="hero-note"><span>01</span><p>{rtl ? "محصول · تجربه کاربری · اجرا" : "Product · UX · Delivery"}</p></div>
    </section>

    <section className="proof section-pad"><div><p className="section-label">{rtl ? "روش کار" : "How I work"}</p><h2>{c.proof}</h2></div><p>{c.proofBody}</p></section>

    <section className="metrics" aria-label="Selected outcomes">
      <div><strong>~10</strong><span>{rtl ? "سال ساخت محصول" : "years building products"}</span></div>
      <div><strong>95%</strong><span>{rtl ? "کاهش هزینه LLM در Apex" : "lower LLM spend in Apex"}</span></div>
      <div><strong>~40</strong><span>{rtl ? "کاربر MRM هنگام قطعی" : "MRM users during shutdown"}</span></div>
      <div><strong>0→1</strong><span>{rtl ? "طراحی و فرانت اند Vibe" : "Vibe UX and frontend"}</span></div>
    </section>

    <section className="selected-work section-pad"><div className="section-heading"><div><p className="section-label">{rtl ? "کیس استادی" : "Case studies"}</p><h2>{c.selected}</h2></div><p>{c.selectedBody}</p></div>
      <div className="project-list">{(["apex", "vibe", "mrm"] as ProjectSlug[]).map((slug, index) => <ProjectFeature key={slug} slug={slug} locale={locale} index={index + 1}/>)}</div>
      <Link className="button button-dark all-work" href={route(locale, "work")}>{c.viewWork}<Arrow locale={locale}/></Link>
    </section>

    <section className="thinking-band section-pad"><div className="section-heading"><div><p className="section-label">{rtl ? "از تجربه واقعی" : "From the work"}</p><h2>{c.thinking}</h2></div><p>{c.thinkingBody}</p></div><div className="thought-grid">{c.thoughts.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><Link className="text-link" href={route(locale, "thinking")}>{rtl ? "مشاهده همه دیدگاه ها" : "Explore all thinking"}<Arrow locale={locale}/></Link></section>

    <Contact locale={locale}/><Footer locale={locale}/>
  </main>;
}

function ProjectFeature({ slug, locale, index }: { slug: ProjectSlug; locale: Locale; index: number }) {
  const p = projects[slug]; const d = p[locale]; const c = copy[locale];
  return <article className={`project-feature accent-${p.accent}`}><div className="project-copy"><span className="project-number">0{index}</span><p className="eyebrow">{d.eyebrow}</p><h3>{d.title}</h3><p className="project-summary">{d.summary}</p><p>{d.short}</p><Link className="text-link" href={route(locale, `work/${slug}`)}>{c.readCase}<Arrow locale={locale}/></Link></div><div className={`project-visual ${"cover" in p ? "has-image" : "no-image"}`}>{"cover" in p && p.cover ? <img src={p.cover} alt={`${d.title} product interface`}/> : <AbstractProof slug={slug} locale={locale}/>}</div></article>;
}

function AbstractProof({ slug, locale }: { slug: ProjectSlug; locale: Locale }) {
  const d = projects[slug][locale];
  return <div className="abstract-proof"><span>{d.title}</span>{d.metrics.slice(0, 3).map((m, i) => <div key={m}><b>0{i + 1}</b><p>{m}</p></div>)}</div>;
}

function Contact({ locale }: { locale: Locale }) { const c = copy[locale]; return <section className="contact-band"><div><p className="section-label">{c.contact}</p><h2>{c.open}</h2><p>{c.openBody}</p></div><a className="button button-light" href="mailto:shahinghani@hotmail.com"><Mail size={19}/>{c.email}</a></section>; }

export function WorkPage({ locale }: { locale: Locale }) { const c = copy[locale]; const rtl = locale === "fa"; return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="page-intro"><p className="section-label">{rtl ? "نمونه کار" : "Portfolio"}</p><h1>{c.workTitle}</h1><p>{c.workIntro}</p></section><section className="work-index section-pad">{projectSlugs.map((slug, i) => <ProjectFeature key={slug} slug={slug} locale={locale} index={i + 1}/>)}</section><Contact locale={locale}/><Footer locale={locale}/></main>; }

export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const p = projects[slug]; const d = p[locale]; const c = copy[locale]; const rtl = locale === "fa"; const nextSlug = projectSlugs[(projectSlugs.indexOf(slug) + 1) % projectSlugs.length];
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><article className={`case-study accent-${p.accent}`}>
    <header className="case-hero"><div><p className="eyebrow">{d.eyebrow}</p><h1>{d.title}</h1><p className="case-deck">{d.summary}</p><p className="case-role">{d.role}</p></div><div className="case-metrics">{d.metrics.map(m => <span key={m}>{m}</span>)}</div></header>
    {"cover" in p && p.cover ? <div className="case-cover"><img src={p.cover} alt={`${d.title} interface`}/></div> : <div className="case-cover abstract-cover"><AbstractProof slug={slug} locale={locale}/></div>}
    <section className="case-narrative"><div><p className="section-label">01</p><h2>{c.caseLabels.problem}</h2><p>{d.problem}</p></div><div><p className="section-label">02</p><h2>{c.caseLabels.approach}</h2><p>{d.approach}</p></div><div><p className="section-label">03</p><h2>{c.caseLabels.result}</h2><p>{d.result}</p></div></section>
    <section className="decision-section"><div className="decision-heading"><p className="section-label">{rtl ? "منطق پشت محصول" : "Behind the product"}</p><h2>{c.caseLabels.decisions}</h2></div><div className="decision-list">{d.decisions.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
    <section className="ownership"><div><p className="section-label">{rtl ? "نقش" : "Scope"}</p><h2>{c.caseLabels.contribution}</h2></div><ul>{d.contribution.map(item => <li key={item}>{item}</li>)}</ul></section>
    {p.images.length > 0 && <section className="evidence"><div className="section-heading"><div><p className="section-label">{rtl ? "رابط واقعی" : "Shipped interface"}</p><h2>{c.caseLabels.evidence}</h2></div></div><div className="evidence-grid">{p.images.map((img, i) => <figure key={img.src} className={i === 0 ? "lead" : ""}><div><img src={img.src} alt={img[locale]}/></div><figcaption>{img[locale]}</figcaption></figure>)}</div></section>}
    <Link className="next-project" href={route(locale, `work/${nextSlug}`)}><span>{c.caseLabels.next}</span><strong>{projects[nextSlug][locale].title}</strong><Arrow locale={locale}/></Link>
  </article><Footer locale={locale}/></main>;
}

export function ThinkingPage({ locale }: { locale: Locale }) { const c = copy[locale]; const rtl = locale === "fa"; return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="page-intro"><p className="section-label">{rtl ? "یادداشت های کاری" : "Working notes"}</p><h1>{c.thinking}</h1><p>{c.thinkingBody}</p></section><section className="essay-list section-pad">{c.thoughts.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{body}</p><p className="essay-note">{rtl ? "این یادداشت به زودی با شواهد و جزئیات کامل پروژه منتشر می شود." : "Full field note with project evidence coming next."}</p></div></article>)}</section><Contact locale={locale}/><Footer locale={locale}/></main>; }

export function AboutPage({ locale }: { locale: Locale }) { const c = copy[locale]; const rtl = locale === "fa"; return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="about-hero"><p className="section-label">{rtl ? "درباره من" : "About"}</p><h1>{c.aboutTitle}</h1><div>{c.aboutP.map(p => <p key={p}>{p}</p>)}</div></section><section className="capabilities section-pad"><div><p className="section-label">{rtl ? "از ایده تا اجرا" : "From idea to operation"}</p><h2>{c.capabilities}</h2></div><ol>{c.capabilityList.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ol></section><section className="history section-pad"><div><p className="section-label">{c.history}</p><h2>{rtl ? "ترکیب مدیریت، طراحی و مهندسی" : "Management, design, and engineering"}</h2></div><p>{c.historyBody}</p></section><Contact locale={locale}/><Footer locale={locale}/></main>; }
