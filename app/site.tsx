/* eslint-disable @next/next/no-img-element -- vinext serves local assets directly. */
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Mail, Menu } from "lucide-react";
import { Locale, ProjectSlug, projectSlugs, projects } from "./data";

const copy = {
  en: {
    nav: [["Work", "work"], ["Thinking", "thinking"], ["About", "about"]],
    language: "FA", languageHref: "/fa", resume: "Résumé",
    role: "Technical Product Manager · Senior Frontend Engineer",
    intro: "I take products from a messy first idea to a system people can actually use, covering product direction, UX, technical delivery, AI integration, QA, and launch.",
    availability: "Open to remote and international product roles",
    workCta: "View selected work", contactCta: "Contact me",
    evidence: "Selected evidence", evidenceIntro: "The work is easier to judge when you can see the product and the decisions behind it.",
    owned: "What I owned", result: "Result", caseStudy: "Read the case study",
    moreWork: "Additional work", thinking: "Notes from the work",
    thinkingIntro: "Short, practical observations from products I have built, priced, tested, and operated.",
    thoughts: [
      ["When an LLM should do less", "How deterministic preprocessing cut Apex model spend by roughly 95% and made the system easier to control."],
      ["Trust is a product cost", "A credible review platform needs evidence, moderation, appeals, and deliberate restraint."],
      ["Roadmaps are layers, not wish lists", "A practical way to sequence core value, safety, operations, and monetization."],
    ],
    contactTitle: "Looking for someone who can connect product decisions to delivery?",
    contactBody: "I am interested in technical product management, AI product, product ownership, and senior frontend leadership roles.",
    workTitle: "Selected work", workIntro: "Product context, decisions, and delivery evidence. No invented growth numbers and no decorative case-study theatre.",
    case: { context: "Context", problem: "Problem", approach: "Approach", outcome: "Outcome", decisions: "Key product decisions", scope: "My scope", evidence: "Product evidence", next: "Next case study" },
    aboutTitle: "Product judgment with engineering depth.",
    aboutBody: ["I began in frontend engineering and design. Over time, the work naturally expanded into deciding what should be built, shaping user flows, coordinating frontend and backend dependencies, anticipating risk, testing the result, and helping products reach the market.", "That is now my deliberate practice. I work best on technical products where strategy, UX, implementation, and operational reality cannot be separated."],
    capabilities: "Where I contribute", capabilitiesList: ["Product strategy and roadmap", "UX/UI and prototyping", "Technical requirements and API contracts", "Frontend architecture and delivery", "AI workflows, guardrails, and unit economics", "QA, release readiness, and operational risk"],
    background: "Around 10 years building software products · MBA in Technology Management · IELTS 7.5 · Native Persian · Professional English",
  },
  fa: {
    nav: [["پروژه ها", "work"], ["دیدگاه ها", "thinking"], ["درباره من", "about"]],
    language: "EN", languageHref: "/", resume: "رزومه",
    role: "مدیر فنی محصول · توسعه دهنده ارشد فرانت اند",
    intro: "محصول را از یک ایده نامشخص تا سیستمی که واقعا قابل استفاده باشد جلو می برم؛ از جهت دهی محصول و تجربه کاربری تا اجرای فنی، هوش مصنوعی، تست و لانچ.",
    availability: "آماده همکاری ریموت و بین المللی در حوزه محصول",
    workCta: "مشاهده پروژه ها", contactCta: "ارتباط با من",
    evidence: "شواهد منتخب", evidenceIntro: "وقتی خود محصول و منطق تصمیم های پشت آن دیده شود، قضاوت درباره کار هم ساده تر است.",
    owned: "مسئولیت های من", result: "نتیجه", caseStudy: "مطالعه کیس استادی",
    moreWork: "پروژه های دیگر", thinking: "یادداشت هایی از دل کار",
    thinkingIntro: "نکته های کوتاه و کاربردی از محصولاتی که ساخته ام، قیمت گذاری کرده ام، تست کرده ام و به کار انداخته ام.",
    thoughts: [
      ["چه زمانی LLM باید کار کمتری انجام دهد", "چطور پردازش قطعی، هزینه مدل در Apex را نزدیک به ۹۵ درصد کاهش داد و کنترل سیستم را بیشتر کرد."],
      ["اعتماد برای محصول هزینه دارد", "پلتفرم نظر معتبر به مدرک، رسیدگی، اعتراض و تصمیم های محتاطانه نیاز دارد."],
      ["نقشه راه فهرست آرزوها نیست", "روشی عملی برای چیدن ارزش اصلی، ایمنی، عملیات و درآمدزایی در زمان درست."],
    ],
    contactTitle: "به کسی نیاز دارید که تصمیم محصول را به اجرای واقعی وصل کند؟",
    contactBody: "برای موقعیت های مدیریت فنی محصول، محصول هوش مصنوعی، مالکیت محصول و رهبری ارشد فرانت اند آماده همکاری هستم.",
    workTitle: "پروژه های منتخب", workIntro: "مسئله، تصمیم ها و شواهد اجرایی؛ بدون عددسازی و نمایش های تزئینی کیس استادی.",
    case: { context: "زمینه", problem: "مسئله", approach: "رویکرد", outcome: "نتیجه", decisions: "تصمیم های کلیدی محصول", scope: "محدوده مسئولیت من", evidence: "شواهد محصول", next: "کیس استادی بعدی" },
    aboutTitle: "تفکر محصول همراه با عمق فنی.",
    aboutBody: ["کارم را از طراحی و توسعه فرانت اند شروع کردم. به مرور، مسئولیت من به تصمیم درباره چیزی که باید ساخته شود، طراحی جریان کاربر، هماهنگی وابستگی های فرانت اند و بک اند، پیش بینی ریسک، تست نتیجه و رساندن محصول به بازار گسترش پیدا کرد.", "امروز این ترکیب مسیر حرفه ای آگاهانه من است. بیشترین ارزش را در محصولاتی ایجاد می کنم که استراتژی، تجربه کاربری، اجرا و واقعیت عملیاتی را نمی توان از هم جدا کرد."],
    capabilities: "حوزه های اثرگذاری", capabilitiesList: ["استراتژی محصول و نقشه راه", "تجربه کاربری و نمونه اولیه", "نیازمندی فنی و قراردادهای API", "معماری و اجرای فرانت اند", "جریان های هوش مصنوعی، گاردریل و اقتصاد محصول", "تست، آمادگی انتشار و ریسک عملیاتی"],
    background: "حدود ۱۰ سال ساخت محصولات نرم افزاری · MBA مدیریت فناوری · آیلتس ۷.۵ · فارسی زبان مادری · انگلیسی حرفه ای",
  },
} as const;

const featured: ProjectSlug[] = ["apex", "vibe"];
const additional: ProjectSlug[] = ["mrm", "first-choice"];
function root(locale: Locale) { return locale === "fa" ? "/fa" : ""; }
function href(locale: Locale, path = "") { return `${root(locale)}${path ? `/${path}` : ""}` || "/"; }
function Arrow({ locale }: { locale: Locale }) { return locale === "fa" ? <ArrowLeft size={17}/> : <ArrowRight size={17}/>; }

export function Header({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <header className="site-header">
    <Link className="brand" href={href(locale)}><span>SG</span><strong>{locale === "fa" ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</strong></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}<a className="language-link" href={c.languageHref}>{c.language}</a><a className="icon-link" href="/documents/shahin-ghanizadeh-resume.pdf" aria-label={c.resume} title={c.resume}><Download size={17}/></a></nav>
    <details className="mobile-nav"><summary aria-label="Open menu"><Menu size={20}/></summary><div>{c.nav.map(([label, path]) => <Link key={path} href={href(locale, path)}>{label}</Link>)}<a href={c.languageHref}>{c.language}</a><a href="/documents/shahin-ghanizadeh-resume.pdf">{c.resume}</a></div></details>
  </header>;
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className="footer"><p>© {new Date().getFullYear()} {locale === "fa" ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</p><div><a href="mailto:shahinghani@hotmail.com">Email</a><a href="https://www.linkedin.com/in/shahinghanizadeh" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ShawnMcRich" target="_blank" rel="noreferrer">GitHub</a></div></footer>;
}

function Contact({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <section className="contact"><div><p className="label">{locale === "fa" ? "ارتباط" : "Contact"}</p><h2>{c.contactTitle}</h2><p>{c.contactBody}</p></div><a className="button dark" href="mailto:shahinghani@hotmail.com"><Mail size={18}/>{c.contactCta}</a></section>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale]; const rtl = locale === "fa";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
    <Header locale={locale}/>
    <section className="intro">
      <div className="intro-main"><p className="role">{c.role}</p><h1>{rtl ? "شاهین غنی زاده" : "Shahin Ghanizadeh"}</h1><p className="intro-copy">{c.intro}</p><div className="actions"><Link className="button dark" href={href(locale, "work")}>{c.workCta}<Arrow locale={locale}/></Link><a className="button quiet" href="mailto:shahinghani@hotmail.com">{c.contactCta}</a></div></div>
      <aside><span className="status-dot"/><p>{c.availability}</p><dl><div><dt>{rtl ? "تمرکز" : "Focus"}</dt><dd>AI · Marketplaces · 0→1</dd></div><div><dt>{rtl ? "پایگاه" : "Based"}</dt><dd>Tehran · Remote</dd></div></dl></aside>
    </section>

    <section className="visual-lead"><div className="browser-frame dark-frame"><div className="frame-bar"><span/><span/><span/></div><img src={projects.apex.cover} alt="Apex product dashboard"/></div><div className="visual-caption"><span>01</span><p><strong>Apex</strong> · {projects.apex[locale].short}</p></div></section>

    <section className="section intro-section"><div><p className="label">{c.evidence}</p><h2>{c.evidenceIntro}</h2></div><div className="metric-list"><p><strong>~95%</strong><span>{rtl ? "کاهش هزینه LLM در Apex" : "lower LLM spend in Apex"}</span></p><p><strong>1.4MB → 165kB</strong><span>{rtl ? "کاهش باندل اصلی Vibe" : "Vibe main-bundle reduction"}</span></p><p><strong>~40</strong><span>{rtl ? "کاربر MRM هنگام قطعی اینترنت" : "MRM users during the shutdown"}</span></p></div></section>

    <section className="section projects-home">{featured.map((slug, i) => <FeaturedProject key={slug} slug={slug} locale={locale} index={i + 1}/>)}</section>

    <section className="section additional"><div className="section-title"><p className="label">{c.moreWork}</p></div>{additional.map((slug, i) => { const d=projects[slug][locale]; return <Link key={slug} href={href(locale, `work/${slug}`)}><span>0{i + 3}</span><div><h3>{d.title}</h3><p>{d.short}</p></div><Arrow locale={locale}/></Link>; })}</section>

    <section className="section notes"><div className="section-title"><p className="label">{c.thinking}</p><h2>{c.thinkingIntro}</h2></div><div>{c.thoughts.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <Contact locale={locale}/><Footer locale={locale}/>
  </main>;
}

function FeaturedProject({ slug, locale, index }: { slug: ProjectSlug; locale: Locale; index: number }) {
  const p=projects[slug]; const d=p[locale]; const c=copy[locale];
  return <article className={`featured-project ${slug}`}><div className="project-head"><span>0{index}</span><p className="eyebrow">{d.eyebrow}</p><h2>{d.title}</h2><p className="project-deck">{d.summary}</p><p>{d.short}</p><dl><div><dt>{c.owned}</dt><dd>{d.role}</dd></div><div><dt>{c.result}</dt><dd>{d.metrics.slice(0,2).join(" · ")}</dd></div></dl><Link className="text-link" href={href(locale, `work/${slug}`)}>{c.caseStudy}<Arrow locale={locale}/></Link></div><div className={`project-shot ${"cover" in p ? "" : "text-only"}`}>{"cover" in p && p.cover ? <img src={p.cover} alt={`${d.title} product interface`}/> : <strong>{d.title}</strong>}{p.images[0] && <p>{p.images[0][locale]}</p>}</div></article>;
}

export function WorkPage({ locale }: { locale: Locale }) {
  const c=copy[locale]; const rtl=locale === "fa";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="page-intro"><p className="label">{rtl ? "نمونه کار" : "Portfolio"}</p><h1>{c.workTitle}</h1><p>{c.workIntro}</p></section><section className="section projects-home">{projectSlugs.map((slug, i) => <FeaturedProject key={slug} slug={slug} locale={locale} index={i+1}/>)}</section><Contact locale={locale}/><Footer locale={locale}/></main>;
}

export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const p=projects[slug]; const d=p[locale]; const c=copy[locale]; const rtl=locale === "fa"; const next=projectSlugs[(projectSlugs.indexOf(slug)+1)%projectSlugs.length];
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><article className="case-study">
    <header className="case-header"><div><p className="eyebrow">{d.eyebrow}</p><h1>{d.title}</h1><p className="case-deck">{d.summary}</p></div><dl><div><dt>{c.case.context}</dt><dd>{d.role}</dd></div>{d.metrics.map((m,i)=><div key={m}><dt>0{i+1}</dt><dd>{m}</dd></div>)}</dl></header>
    {"cover" in p && p.cover ? <div className={`case-cover ${slug}`}><img src={p.cover} alt={`${d.title} product interface`}/></div> : <div className="case-cover empty"><span>{d.title}</span></div>}
    <section className="case-story"><div><span>01</span><h2>{c.case.problem}</h2><p>{d.problem}</p></div><div><span>02</span><h2>{c.case.approach}</h2><p>{d.approach}</p></div><div><span>03</span><h2>{c.case.outcome}</h2><p>{d.result}</p></div></section>
    <section className="case-decisions"><div><p className="label">{c.case.decisions}</p><h2>{d.summary}</h2></div><ol>{d.decisions.map(([title,body],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
    <section className="case-scope"><div><p className="label">{c.case.scope}</p></div><ul>{d.contribution.map(item=><li key={item}>{item}</li>)}</ul></section>
    {p.images.length > 0 && <section className="case-evidence"><div className="section-title"><p className="label">{c.case.evidence}</p></div><div className="evidence-grid">{p.images.map((img,i)=><figure key={img.src} className={i===0 ? "wide" : ""}><div className={img.src.includes("mobile") || img.src.includes("palette") ? "compact" : ""}><img src={img.src} alt={img[locale]}/></div><figcaption><span>0{i+1}</span>{img[locale]}</figcaption></figure>)}</div></section>}
    <Link className="next" href={href(locale, `work/${next}`)}><span>{c.case.next}</span><strong>{projects[next][locale].title}</strong><Arrow locale={locale}/></Link>
  </article><Footer locale={locale}/></main>;
}

export function ThinkingPage({ locale }: { locale: Locale }) {
  const c=copy[locale]; const rtl=locale === "fa";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="page-intro"><p className="label">{rtl ? "یادداشت های کاری" : "Working notes"}</p><h1>{c.thinking}</h1><p>{c.thinkingIntro}</p></section><section className="section essay-list">{c.thoughts.map(([title,body],i)=><article key={title}><span>0{i+1}</span><div><h2>{title}</h2><p>{body}</p><small>{rtl ? "نسخه کامل همراه با شواهد پروژه به زودی منتشر می شود." : "Full field note with project evidence coming next."}</small></div></article>)}</section><Contact locale={locale}/><Footer locale={locale}/></main>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const c=copy[locale]; const rtl=locale === "fa";
  return <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}><Header locale={locale}/><section className="about-intro"><p className="label">{rtl ? "درباره من" : "About"}</p><h1>{c.aboutTitle}</h1><div>{c.aboutBody.map(p=><p key={p}>{p}</p>)}</div></section><section className="section capability"><div><p className="label">{c.capabilities}</p><p>{c.background}</p></div><ol>{c.capabilitiesList.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ol></section><Contact locale={locale}/><Footer locale={locale}/></main>;
}
