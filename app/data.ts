export type Locale = "en" | "fa";
export type ProjectSlug = "apex" | "vibe" | "first-choice" | "hosseintalab" | "mrm";
export type NoteSlug = "llm-should-do-less" | "trust-is-a-product-cost" | "roadmaps-are-layers";

type LocalizedText = { en: string; fa: string };
type Metric = { value: string | LocalizedText; label: LocalizedText; note?: LocalizedText };
type Detail = { title: LocalizedText; body: LocalizedText; status?: "live" | "shipped" | "designed" };
type Evidence = { title: LocalizedText; body: LocalizedText; kind: LocalizedText };
type Image = { src: string; alt: LocalizedText; compact?: boolean };

export type Note = {
  slug: NoteSlug;
  project: ProjectSlug;
  published: string;
  updated: string;
  title: LocalizedText;
  lead: LocalizedText;
  paragraphs: LocalizedText[];
};

export type Project = {
  slug: ProjectSlug;
  number: string;
  accent: "green" | "blue" | "red" | "navy" | "amber";
  title: string;
  productType: LocalizedText;
  period: LocalizedText;
  stage: LocalizedText;
  headline: LocalizedText;
  deck: LocalizedText;
  role: LocalizedText;
  team: LocalizedText;
  cover?: string;
  links?: { label: LocalizedText; href: string }[];
  metrics: Metric[];
  context: LocalizedText;
  problem: LocalizedText;
  users: LocalizedText;
  northStar: LocalizedText;
  constraints: Detail[];
  phases: Detail[];
  decisions: Detail[];
  architecture: Detail[];
  scope: LocalizedText[];
  evidence: Evidence[];
  outcome: LocalizedText;
  statusNote: LocalizedText;
  lessons: LocalizedText[];
  images: Image[];
};

const t = (en: string, fa: string): LocalizedText => ({ en, fa });

export const projects: Record<ProjectSlug, Project> = {
  apex: {
    slug: "apex",
    number: "01",
    accent: "green",
    title: "Apex",
    productType: t("AI market intelligence", "تحلیل بازار با هوش مصنوعی"),
    period: t("2025-present", "۱۴۰۴ تا امروز"),
    stage: t("Live · Monetized", "فعال · درآمدزا"),
    headline: t("Apex combines my market-analysis algorithms with an LLM that explains the results.", "Apex حاصل چند سال کار من روی تحلیل بازار، الگوریتم‌های معاملاتی و ساخت یک ابزار قابل استفاده برای معامله‌گرهاست."),
    deck: t(
      "I turned several years of market research and TradingView experiments into Python algorithms, then used an LLM to explain their output in plain language. The product is live and paid.",
      "منطق اسکریپت‌های TradingView را به سرویس‌های Python منتقل کردم و LLM را برای توضیح نتیجه‌های محاسبه‌شده به کار گرفتم. Apex اکنون فعال است و کاربر پرداخت‌کننده دارد."
    ),
    role: t("Founder · AI Product Manager · Product Designer · Full-stack builder", "بنیان‌گذار · مدیر محصول هوش مصنوعی · طراح محصول · توسعه‌دهنده Full-stack"),
    team: t("Founder-led product with production infrastructure and paid users", "محصولی که خودم ساخته و اداره کرده‌ام، با کاربر پرداخت‌کننده و زیرساخت واقعی"),
    cover: "/projects/apex/new/app-dashboard.jpg",
    links: [
      { label: t("Live product", "محصول فعال"), href: "https://apexpnl.com" },
      { label: t("GitHub", "گیت هاب"), href: "https://github.com/ShawnMcRich/CryptoSight" },
    ],
    metrics: [
      { value: t("Live + paid", "فعال و درآمدزا"), label: t("product taken from thesis to revenue", "از ایده تا محصول واقعی") },
      { value: t("~95%", "حدود ۹۵٪"), label: t("lower LLM cost", "کاهش هزینه LLM"), note: t("after deterministic preprocessing and model changes", "بعد از تغییر مدل و آماده‌سازی داده پیش از ارسال") },
      { value: t("4", "۴"), label: t("asset classes", "نوع بازار") },
      { value: t("~30 sec", "حدود ۳۰ ثانیه"), label: t("analysis delivery", "تا آماده شدن تحلیل") },
    ],
    context: t(
      "Traders can access endless indicators and opinions, but more input often creates less conviction. Generic chatbots can explain a chart, yet they lack the domain pipeline, live context, and deterministic checks needed for a repeatable market product.",
      "ابزار و تحلیل بازار کم نیست؛ مشکل این است که زیاد بودن آن‌ها اغلب تصمیم را سخت‌تر می‌کند. یک چت‌بات عمومی می‌تواند درباره نمودار حرف بزند، اما به داده زنده، منطق ثابت و کنترل‌هایی که Apex دارد دسترسی ندارد."
    ),
    problem: t(
      "The product had to reduce analytical overload and emotional decision-making while keeping inference cost low enough for a credit-based business. It also had to explain uncertainty without presenting probabilistic output as financial certainty.",
      "Apex باید به کاربر کمک می‌کرد از شلوغی تحلیل و تصمیم احساسی فاصله بگیرد. در عین حال، هزینه هر تحلیل باید آن‌قدر پایین می‌ماند که مدل اعتباری محصول صرفه اقتصادی داشته باشد. خروجی هم نباید یک احتمال را شبیه قطعیت مالی نشان می‌داد."
    ),
    users: t("Active traders, market analysts, and beginners who need a clearer second opinion before acting.", "معامله‌گرها، تحلیل‌گرها و افراد تازه‌کاری که قبل از تصمیم به یک نظر دوم روشن نیاز دارند."),
    northStar: t("A useful analysis helps a user understand the setup, risk, and counter-case in time to make a considered decision.", "معیار من این بود که کاربر بتواند موقعیت، ریسک و سناریوی مخالف را به‌موقع بفهمد و با اطلاعات بیشتری تصمیم بگیرد."),
    constraints: [
      { title: t("Cost", "هزینه"), body: t("A premium model making every analytical decision made the unit economics fragile.", "وقتی تمام تحلیل را به یک مدل گران می‌سپردم، هزینه هر خروجی بیش از حد بالا می‌رفت.") },
      { title: t("Control", "کنترل"), body: t("Raw-data prompting made output harder to reproduce, test, and guard against fabricated claims.", "دادن داده خام به مدل، تست و پیدا کردن علت خروجی اشتباه را سخت می‌کرد.") },
      { title: t("Time", "سرعت"), body: t("Users needed a decisive read in seconds, not a research report that arrived after the moment passed.", "کاربر نتیجه را همان لحظه می‌خواست، نه گزارشی که بعد از گذشت فرصت آماده شود.") },
      { title: t("Responsibility", "مسئولیت"), body: t("The product had to support decisions without promising returns or hiding uncertainty.", "قرار نبود Apex جای کاربر تصمیم بگیرد، وعده سود بدهد یا ریسک را پنهان کند.") },
    ],
    phases: [
      { title: t("Build the analytical core", "ساخت هسته تحلیلی"), body: t("I converted years of Pine Script experiments and market logic into Python services that could process normalized live data.", "منطق بازار و نتیجه چند سال کار با Pine Script را به سرویس‌های Python تبدیل کردم تا روی داده زنده و یکدست اجرا شوند."), status: "shipped" },
      { title: t("Structured analytical input", "ساخت ورودی ساختاریافته برای LLM"), body: t("The pipeline calculates signals, regimes, levels, conflicts, and risk first. The LLM receives evidence, not an open-ended chart-reading task.", "سیستم ابتدا سیگنال، وضعیت بازار، سطوح، تناقض‌ها و ریسک را محاسبه می‌کند. LLM به‌جای داده خام، مجموعه مشخصی از نتیجه‌ها را دریافت می‌کند."), status: "live" },
      { title: t("Analysis output structure", "ساختار خروجی تحلیل"), body: t("Outputs lead with a verdict, confidence, why-now context, key levels, invalidation, and the strongest counter-case.", "در خروجی، کاربر ابتدا نتیجه و میزان اطمینان را می‌بیند و بعد به دلیل تحلیل، سطوح مهم، نقطه بی‌اعتبار شدن و سناریوی مخالف دسترسی دارد."), status: "live" },
      { title: t("Payment and retention", "پرداخت و بازگشت کاربر"), body: t("I introduced prepaid credits, a free trial, simplified analysis modes, daily grants, and targeted win-back communication.", "اعتبار پیش‌پرداخت، دوره آزمایشی، دو حالت تحلیل، اعتبار روزانه و پیام‌های بازگشت کاربر را طراحی و اجرا کردم."), status: "live" },
    ],
    decisions: [
      { title: t("Separate computation from explanation", "تقسیم کار میان الگوریتم‌ها و LLM"), body: t("This moved expensive reasoning out of the language layer, reduced cost by roughly 95%, and made failures easier to trace.", "با این تغییر، محاسبات اصلی در الگوریتم‌ها انجام می‌شود و LLM نتیجه را توضیح می‌دهد. هزینه حدود ۹۵ درصد کاهش پیدا کرد و بررسی خطاها هم ساده‌تر شد."), status: "live" },
      { title: t("Reduce configuration to two modes", "کاهش تنظیمات کاربر به دو حالت"), body: t("The analysis builder was simplified to Standard and Forecast. Complexity still exists in the engine, but no longer becomes the user's burden.", "فرایند ساخت تحلیل را به دو حالت استاندارد و پیش‌بینی محدود کردم. پیچیدگی موتور حفظ شد، اما کاربر دیگر با تنظیمات غیرضروری درگیر نمی‌شود."), status: "live" },
      { title: t("Limit LLM usage", "محدود کردن استفاده از LLM"), body: t("Always-on market content uses deterministic language generation; deeper paid analyses use the LLM. This removed about 80 redundant daily calls.", "محتوای روزانه بازار بدون LLM تولید می‌شود و مدل فقط برای تحلیل‌های عمیق و پولی به کار می‌رود. با این تصمیم حدود ۸۰ درخواست تکراری روزانه حذف شد."), status: "shipped" },
      { title: t("Support users during an open trade", "دکمه Panic برای معامله باز"), body: t("The Panic Button reframes an open position through risk, invalidation, and evidence when a user is most likely to act impulsively.", "دکمه Panic برای زمانی طراحی شد که کاربر در میانه معامله تحت فشار است. این بخش ریسک، شواهد و نقطه بی‌اعتبار شدن تحلیل را دوباره در اختیار او می‌گذارد."), status: "live" },
    ],
    architecture: [
      { title: t("Acquire", "دریافت"), body: t("Market, macro, and event data from multiple APIs and exchanges." , "داده بازار، اقتصاد کلان و رویدادها از چند API و صرافی.") },
      { title: t("Normalize", "یکدست‌سازی"), body: t("Asset-aware timeframes, validation, caching, and source fallbacks.", "بازه زمانی مناسب هر دارایی، اعتبارسنجی، کش و منبع جایگزین.") },
      { title: t("Compute", "محاسبه"), body: t("Python algorithms calculate signals, levels, regimes, conflicts, and risk.", "الگوریتم‌های Python سیگنال، سطوح، وضعیت بازار، تناقض‌ها و ریسک را حساب می‌کنند.") },
      { title: t("Explain", "توضیح"), body: t("A cost-optimized LLM turns structured evidence into a consistent decision format.", "یک LLM کم‌هزینه، نتیجه محاسبه‌شده را به گزارشی روشن و یکدست تبدیل می‌کند.") },
      { title: t("Deliver", "تحویل نتیجه"), body: t("Celery and Redis run non-blocking jobs; React presents the result and credit usage.", "Celery و Redis پردازش را در پس‌زمینه انجام می‌دهند و React نتیجه و اعتبار مصرف‌شده را نشان می‌دهد.") },
    ],
    scope: [
      t("Product thesis, positioning, roadmap, pricing, and launch", "تعریف محصول، جایگاه، نقشه راه، قیمت‌گذاری و لانچ"),
      t("Complete product UX, analysis flow, output hierarchy, and design system", "طراحی کامل تجربه، جریان تحلیل، ساختار خروجی و سیستم طراحی"),
      t("Market algorithms, Python services, prompt architecture, and guardrails", "الگوریتم‌های بازار، سرویس‌های Python، معماری پرامپت و گاردریل‌ها"),
      t("React and TypeScript frontend, APIs, infrastructure, billing, and production operations", "فرانت‌اند React و TypeScript، APIها، زیرساخت، پرداخت و عملیات محصول"),
      t("Instrumentation, retention experiments, incident fixes, and ongoing iteration", "اندازه‌گیری رفتار محصول، آزمایش‌های بازگشت کاربر، رفع خطاهای عملیاتی و بهبود مداوم"),
    ],
    evidence: [
      { kind: t("Live product", "محصول فعال"), title: t("Working customer journey", "مسیر واقعی کاربر"), body: t("Account creation, credit purchase, analysis configuration, queued processing, structured result, and history are in production.", "ثبت‌نام، خرید اعتبار، تنظیم تحلیل، پردازش در پس‌زمینه، نمایش نتیجه و تاریخچه همگی در محصول فعال کار می‌کنند.") },
      { kind: t("Repository", "مخزن کد"), title: t("Product decisions connected to implementation", "ارتباط تصمیم‌های محصول با کد"), body: t("The codebase contains the analysis engine, provider-aware AI service, usage logging, pricing, retention tasks, and explicit TODOs when a promise is not yet true.", "موتور تحلیل، سرویس چندارائه‌دهنده AI، ثبت مصرف، قیمت‌گذاری و فرایندهای بازگشت کاربر در مخزن قابل بررسی‌اند. قابلیت‌های ساخته‌نشده هم به‌صورت شفاف به‌عنوان کار آینده ثبت شده‌اند.") },
      { kind: t("Operations", "عملیات"), title: t("Production infrastructure", "زیرساخت عملیاتی"), body: t("FastAPI, PostgreSQL, Celery, Redis, Docker, Nginx, and Cloudflare support live delivery and paid usage.", "FastAPI، PostgreSQL، Celery، Redis، Docker، Nginx و Cloudflare زیرساخت نسخه فعال و پرداخت را فراهم می‌کنند.") },
    ],
    outcome: t("Apex is live and monetized. Moving computation into deterministic services reduced LLM cost by roughly 95% and made the analytical pipeline easier to test and operate.", "Apex اکنون فعال و درآمدزاست. انتقال محاسبات اصلی به سرویس‌های مشخص، هزینه LLM را حدود ۹۵ درصد کاهش داد و تست و نگهداری فرایند تحلیل را ساده‌تر کرد."),
    statusNote: t("Live capabilities are separated here from future ideas. Level-triggered email alerts, for example, remain documented but are not presented as shipped.", "هر چیزی که در برنامه آینده است با قابلیت فعال قاطی نشده. مثلاً هشدار ایمیلی رسیدن قیمت به یک سطح مشخص هنوز ساخته نشده و اینجا هم آن را جزو امکانات فعلی حساب نکرده‌ام."),
    lessons: [
      t("An LLM becomes more useful when the product gives it less ambiguity.", "هرچه ابهام ورودی کمتر باشد، LLM در محصول بهتر کار می‌کند."),
      t("Unit economics is a product design constraint, not a backend cleanup task.", "اقتصاد هر استفاده، بخشی از طراحی محصول است نه کاری برای بعد."),
      t("Advanced products can keep a sophisticated engine while offering a simple decision surface.", "یک محصول پیشرفته می‌تواند موتور پیچیده‌ای داشته باشد و در عین حال برای کاربر ساده بماند."),
    ],
    images: [
      { src: "/projects/apex/new/marketing-home.jpg", alt: t("Apex public market dashboard", "داشبورد عمومی بازار Apex") },
      { src: "/projects/apex/new/analysis-builder.jpg", alt: t("Apex analysis builder", "سازنده تحلیل Apex") },
      { src: "/projects/apex/new/analysis-history.jpg", alt: t("Apex analysis history", "تاریخچه تحلیل Apex") },
      { src: "/projects/apex/new/credit-model.jpg", alt: t("Apex prepaid credit model", "مدل اعتبار پیش‌پرداخت Apex") },
    ],
  },
  vibe: {
    slug: "vibe",
    number: "02",
    accent: "blue",
    title: "Vibe",
    productType: t("Local business discovery and reviews", "کشف و بررسی کسب‌وکارهای محلی"),
    period: t("2023-present", "۱۴۰۲ تا امروز"),
    stage: t("Pre-launch · Built and being tested", "پیش از لانچ · ساخته شده و در حال تست"),
    headline: t("Tehran had plenty of opinions about local businesses and no dependable place to check them.", "درباره کسب‌وکارهای محلی تهران نظر زیاد بود، اما مرجع قابل اعتمادی برای بررسی آن‌ها وجود نداشت."),
    deck: t("I co-founded Vibe, shaped the roadmap, designed every customer and business flow, built the frontend from zero, and worked with the team on the trust and moderation systems needed before launch.", "Vibe را با هم‌بنیان‌گذارم شروع کردم، نقشه راه را چیدم، تمام مسیرهای کاربر و کسب‌وکار را طراحی کردم، فرانت‌اند را از صفر ساختم و همراه تیم سراغ سیستم‌های اعتماد و رسیدگی لازم برای لانچ رفتم."),
    role: t("Co-founder · Technical Product Lead · Senior Frontend Engineer · Product Designer", "هم‌بنیان‌گذار · رهبر فنی محصول · توسعه‌دهنده ارشد فرانت‌اند · طراح محصول"),
    team: t("Small cross-functional team across product, frontend, backend, and operations", "یک تیم کوچک شامل محصول، فرانت‌اند، بک‌اند و عملیات"),
    cover: "/projects/vibe/new/business-dashboard.jpg",
    links: [{ label: t("GitHub", "گیت هاب"), href: "https://github.com/faraz-naeinian/vibe-frontend" }],
    metrics: [
      { value: t("0→1", "صفر تا یک"), label: t("product, UX, and frontend ownership", "محصول، UX و فرانت‌اند") },
      { value: t("3 surfaces", "۳ بخش"), label: t("customer, business, and admin operations", "کاربر، کسب‌وکار و پنل ادمین") },
      { value: t("Trust-first", "اعتماد از روز اول"), label: t("identity, moderation, fairness, and AI quality", "هویت، رسیدگی، انصاف و کنترل کیفیت با AI") },
      { value: t("Pre-launch", "پیش از لانچ"), label: t("QA and operational readiness", "آمادگی QA و عملیات") },
    ],
    context: t("People in Tehran lacked a regional source of truth for local businesses and often relied on influencers or scattered social content. Businesses, especially restaurants, cafes, and services, had no durable place where real customer value could compound into reputation.", "برای پیدا کردن یک کافه، رستوران یا سرویس خوب در تهران، بیشتر آدم‌ها یا سراغ اینفلوئنسرها می‌رفتند یا بین چند صفحه پراکنده می‌گشتند. از طرف دیگر، کسب‌وکار خوب هم جایی نداشت که رضایت واقعی مشتری‌ها به مرور برایش اعتبار بسازد."),
    problem: t("A review marketplace has a cold start and a trust problem at the same time. Vibe needed a useful customer loop, a reason for businesses to participate, and moderation operations that did not silence genuine criticism or sell credibility to paying accounts.", "Vibe از روز اول دو مسئله داشت: بدون نظر برای کاربر فایده‌ای ندارد و بدون کاربر، کسب‌وکار دلیلی برای گرفتن نظر ندارد. تازه همه این‌ها فقط وقتی ارزشمند است که نظرها قابل اعتماد باشند و پول نتواند نتیجه رسیدگی را تغییر دهد."),
    users: t("Consumers seeking better local value; business owners building reputation; moderators, support, and administrators protecting the system.", "مردمی که می‌خواهند انتخاب بهتری داشته باشند، صاحبان کسب‌وکار که دنبال ساختن اعتبارند و تیمی که گزارش‌ها و اختلاف‌ها را بررسی می‌کند."),
    northStar: t("More credible reviews. Each useful review improves discovery, gives the business actionable feedback, and makes the next customer's decision easier.", "شاخص اصلی برای من تعداد نظرهای قابل اعتماد است. هر نظر خوب هم انتخاب نفر بعدی را آسان‌تر می‌کند و هم به کسب‌وکار بازخورد واقعی می‌دهد."),
    constraints: [
      { title: t("Cold start", "شروع از نقطه صفر"), body: t("No reviews means no discovery value; no audience means little reason for businesses to ask for reviews.", "تا وقتی نظری وجود ندارد، محصول برای کاربر فایده زیادی ندارد؛ تا وقتی کاربری نیست، کسب‌وکار هم دلیلی برای گرفتن نظر ندارد.") },
      { title: t("Trust without coercion", "اعتماد بدون اجبار"), body: t("KYC could add evidence, but forcing it would damage participation and exclude legitimate reviewers.", "KYC می‌تواند یک نشانه مثبت باشد، اما اجباری کردنش مشارکت را کم می‌کند و بعضی کاربران واقعی را کنار می‌گذارد.") },
      { title: t("Fairness in both directions", "انصاف برای هر دو طرف"), body: t("Users need protection from pressure; businesses need a structured route to challenge fabrication and conflicts of interest.", "کاربر باید بتواند بدون فشار نظر بدهد و کسب‌وکار هم باید راه مشخصی برای اعتراض به نظر جعلی یا دارای تعارض منافع داشته باشد.") },
      { title: t("Small team", "تیم کوچک"), body: t("The roadmap had to sequence customer value, business tools, moderation, admin, and monetization without building every layer at once.", "با یک تیم کوچک نمی‌شد تجربه کاربر، ابزار کسب‌وکار، رسیدگی، پنل ادمین و درآمدزایی را هم‌زمان ساخت. ترتیب کار خودش یک تصمیم مهم محصول بود.") },
    ],
    phases: [
      { title: t("Core value", "هسته محصول"), body: t("Business profiles, reviews, discovery, and a fast scan of core information, rating, and review summary.", "اول پروفایل کسب‌وکار، نظرها و جست‌وجو را ساختیم؛ جایی که کاربر بتواند اطلاعات مهم، امتیاز و خلاصه نظرها را سریع ببیند."), status: "live" },
      { title: t("Trust and safety", "اعتماد و ایمنی"), body: t("Optional KYC, KYB, reviewer history, AI-assisted rating checks, reporting, anti-fraud signals, and human moderation.", "بعد سراغ KYC اختیاری، تأیید کسب‌وکار، سابقه کاربر، کنترل امتیاز با AI، گزارش تخلف، نشانه‌های ضدتقلب و رسیدگی انسانی رفتیم."), status: "shipped" },
      { title: t("Operations", "عملیات"), body: t("Admin queues, support, claims, evidence access, audit trails, risk states, and launch-day metrics.", "برای اداره روزمره محصول هم صف رسیدگی، پشتیبانی، ادعای مالکیت، دسترسی امن به مدارک، سابقه تصمیم‌ها و شاخص‌های روز لانچ را آماده کردیم."), status: "shipped" },
      { title: t("Monetization", "درآمدزایی"), body: t("Business packages came last, after the team could define what businesses valued without making trust purchasable.", "بسته‌های تجاری را آخر گذاشتم؛ بعد از اینکه فهمیدیم کسب‌وکار برای چه ارزشی حاضر است پول بدهد، بدون اینکه بتواند اعتماد یا نتیجه رسیدگی را بخرد."), status: "designed" },
    ],
    decisions: [
      { title: t("Sequence the roadmap by dependency", "ترتیب لایه‌های نقشه راه"), body: t("I sequenced the product from the core review loop outward: trust, operations, growth, then monetization. This kept dependencies visible and reduced premature feature work.", "ترتیب ساخت از پروفایل کسب‌وکار و نظرها شروع شد، سپس به اعتماد و عملیات، رشد و در نهایت درآمدزایی رسید. این ترتیب وابستگی بخش‌ها را روشن نگه داشت و جلوی ساخت زودهنگام قابلیت‌های فرعی را گرفت."), status: "shipped" },
      { title: t("Keep AI rating changes optional", "پیشنهاد امتیاز با AI"), body: t("If review tone and stars differ by more than one, Vibe explains a suggested rating. The original rating never changes without explicit consent.", "اگر لحن متن با امتیاز بیش از یک ستاره اختلاف داشته باشد، Vibe امتیاز پیشنهادی و دلیل آن را نشان می‌دهد. امتیاز اصلی فقط با تأیید خود کاربر تغییر می‌کند."), status: "shipped" },
      { title: t("Keep identity verification optional", "KYC اختیاری"), body: t("KYC is optional and clearly explained. Credibility also considers contribution history and suspicious patterns so privacy is not the price of being heard.", "KYC اختیاری است و کاربرد آن به‌روشنی توضیح داده می‌شود. برای سنجش اعتبار نظر، سابقه فعالیت و الگوهای مشکوک هم در نظر گرفته می‌شوند و ارائه مدرک هویتی تنها معیار نیست."), status: "designed" },
      { title: t("Define a fair moderation process", "قواعد رسیدگی برای کاربر و کسب‌وکار"), body: t("The fairness constitution protects genuine reviews, lets businesses challenge fabrication with private evidence, keeps paid tiers away from moderation outcomes, and provides an appeal path.", "قواعد رسیدگی از نظر واقعی محافظت می‌کند، به کسب‌وکار اجازه می‌دهد با مدرک خصوصی به نظر جعلی اعتراض کند و برای تصمیم‌ها مسیر اعتراض در نظر می‌گیرد. نوع حساب تجاری هم روی نتیجه رسیدگی اثری ندارد."), status: "designed" },
    ],
    architecture: [
      { title: t("Experience", "تجربه کاربر"), body: t("Responsive RTL customer and business experiences built from zero in React and TypeScript.", "تجربه کاربر و کسب‌وکار را از صفر، به‌صورت واکنش‌گرا و RTL با React و TypeScript ساختم.") },
      { title: t("Contracts", "هماهنگی با بک‌اند"), body: t("API handoffs define data, states, fallbacks, permissions, and acceptance conditions before backend implementation.", "پیش از اجرای بک‌اند، داده‌ها، وضعیت‌ها، fallbackها، سطح دسترسی و شرایط پذیرش هر API را مشخص کردیم.") },
      { title: t("Quality", "کیفیت"), body: t("Requirements are traced through manual, visual, and scripted QA, triaged from P0 to P2, fixed, and retested.", "مسیرها را دستی، بصری و با اسکریپت تست کردیم؛ ایرادها از P0 تا P2 دسته‌بندی شدند و بعد از رفع دوباره تست شدند.") },
      { title: t("Moderation", "رسیدگی"), body: t("A single case model connects reports, evidence, human decisions, enforcement, appeals, and closure.", "هر گزارش در یک پرونده دنبال می‌شود؛ از دریافت مدرک و تصمیم انسانی تا اجرا، اعتراض و بستن پرونده.") },
      { title: t("Readiness", "آمادگی لانچ"), body: t("The admin surface is prepared to track conversion and operational metrics from day one of public launch.", "پنل ادمین طوری آماده شده که از روز اول لانچ، تبدیل‌ها و وضعیت عملیات را نشان دهد.") },
    ],
    scope: [
      t("Core concept, customer problem, product strategy, layered roadmap, and prioritization", "ایده اصلی، مسئله کاربر، استراتژی محصول، نقشه راه لایه‌ای و اولویت‌بندی"),
      t("All customer and business UX/UI, RTL design system, and senior frontend delivery from zero", "تمام UX و UI کاربر و کسب‌وکار، سیستم طراحی RTL و پیاده‌سازی فرانت‌اند از صفر"),
      t("Cross-functional sequencing and specifications for frontend, backend, admin, and operations", "ترتیب کار و مشخصات اجرایی برای فرانت‌اند، بک‌اند، پنل ادمین و عملیات"),
      t("AI review quality, KYC/KYB, claims, moderation, support, packages, and trust architecture", "کنترل کیفیت نظر با AI، فرایندهای KYC و KYB، ادعای مالکیت، رسیدگی، پشتیبانی، بسته‌ها و معماری اعتماد"),
      t("QA strategy, P0-P2 triage, release audits, and pre-launch readiness", "برنامه QA، اولویت‌بندی P0 تا P2، بازبینی انتشار و آمادگی پیش از لانچ"),
    ],
    evidence: [
      { kind: t("Product", "محصول"), title: t("Customer, business, and admin surfaces", "بخش کاربر، کسب‌وکار و ادمین"), body: t("The repository and screenshots show working profiles, discovery, reviews, identity flows, business tools, admin reporting, and moderation interfaces.", "در مخزن کد و تصاویر می‌شود پروفایل‌ها، جست‌وجو، نظرها، احراز هویت، ابزارهای کسب‌وکار، گزارش‌های ادمین و محیط رسیدگی را دید.") },
      { kind: t("Delivery", "اجرا"), title: t("Documentation from planning through QA", "مستندات برنامه‌ریزی، اجرا و QA"), body: t("Jira planning, Git history, backend handoffs, QA tracking, and acceptance criteria connect the idea to implementation and retesting.", "برنامه‌های Jira، تاریخچه Git، اسناد تحویل به بک‌اند، پیگیری QA و شرایط پذیرش نشان می‌دهند هر ایده چطور به اجرا و تست دوباره رسیده است.") },
      { kind: t("Governance", "قواعد محصول"), title: t("Fairness and moderation documentation", "مستندات انصاف و رسیدگی"), body: t("The product includes a written fairness constitution, credibility model, moderation lifecycle, and explicit boundaries between current and proposed systems.", "برای انصاف، اعتبار نظر و چرخه رسیدگی سند مشخص نوشته‌ایم و مرز بین سیستم فعلی و ایده‌های آینده هم روشن است.") },
    ],
    outcome: t("Vibe has a substantial pre-launch foundation across product, design, frontend, backend handoffs, QA, and operations. The work proves launch readiness and product judgment, not public-market traction that has not happened yet.", "بخش اصلی محصول، طراحی، فرانت‌اند، هماهنگی با بک‌اند، QA و پنل‌های عملیاتی آماده شده است. Vibe هنوز لانچ عمومی نشده؛ بنابراین درباره رشد یا موفقیت بازار ادعایی ندارم. چیزی که می‌توانم نشان بدهم کیفیت تصمیم‌ها و آمادگی قبل از لانچ است."),
    statusNote: t("The current product, deployed behavior, and future trust framework are intentionally separated. Proposed scoring details and private moderation weights are not published.", "در این صفحه مشخص کرده‌ام چه چیزی الان کار می‌کند و چه چیزی هنوز در مرحله طراحی است. جزئیات داخلی امتیازدهی و وزن‌های سیستم رسیدگی هم عمداً عمومی نشده‌اند."),
    lessons: [
      t("Trust cannot be delegated to one badge, one score, or one identity check.", "اعتماد با یک تیک، یک امتیاز یا یک احراز هویت ساخته نمی‌شود."),
      t("A two-sided marketplace needs operational design as early as interface design.", "در یک مارکت‌پلیس دوطرفه، فرایندهای پشت صحنه باید همان‌قدر زود طراحی شوند که رابط کاربر."),
      t("Monetization becomes clearer after the free core has proven what people value.", "وقتی ارزش هسته رایگان روشن شود، تصمیم درباره درآمدزایی هم دقیق‌تر می‌شود."),
    ],
    images: [
      { src: "/projects/vibe/new/discovery-home.jpg", alt: t("Vibe accountable review discovery", "صفحه کشف نظرهای قابل اعتماد در Vibe") },
      { src: "/projects/vibe/new/ai-review-system.jpg", alt: t("Vibe AI-assisted rating check", "بررسی امتیاز نظر با هوش مصنوعی در Vibe") },
      { src: "/projects/vibe/new/identity-verification.jpg", alt: t("Vibe optional identity verification", "احراز هویت اختیاری در Vibe") },
      { src: "/projects/vibe/new/review-transparency.jpg", alt: t("Vibe reviewer transparency", "شفافیت نویسنده نظر در Vibe") },
      { src: "/projects/vibe/new/trust-layers.jpg", alt: t("Vibe trust layers", "لایه‌های اعتماد در Vibe") },
    ],
  },
  "first-choice": {
    slug: "first-choice",
    number: "03",
    accent: "red",
    title: "First Choice",
    productType: t("Multilingual real-estate platform", "پلتفرم چندزبانه املاک"),
    period: t("2026", "۱۴۰۵"),
    stage: t("Live · Production platform", "فعال · محصول عملیاتی"),
    headline: t("I rebuilt First Choice as a multilingual property platform and an internal operating tool.", "وب‌سایت و ابزارهای داخلی انتخاب اول را بر اساس فرایند واقعی یک مجموعه املاک باسابقه بازطراحی و پیاده‌سازی کردم."),
    deck: t("The live product covers property discovery, qualified enquiries, multilingual publishing, and private staff workflows.", "نسخه جدید سه‌زبانه است و جست‌وجوی ملک، دریافت درخواست مشتری، انتشار محتوا و فرایندهای داخلی تیم را پوشش می‌دهد."),
    role: t("Product Owner · Technical Lead · Full-stack builder", "مالک محصول · رهبر فنی · توسعه‌دهنده Full-stack"),
    team: t("Direct collaboration with the real-estate operator and internal staff", "همکاری مستقیم با مدیر مجموعه و تیم داخلی املاک"),
    cover: "/projects/first-choice/homepage.jpg",
    links: [{ label: t("Live product", "محصول فعال"), href: "https://firstchoiceco.com" }],
    metrics: [
      { value: t("38 years", "۳۸ سال"), label: t("of business knowledge turned into one product", "تجربه کسب‌وکار در یک محصول") },
      { value: t("3", "۳"), label: t("fully designed languages", "زبان کامل محصول") },
      { value: t("44", "۴۴"), label: t("published property guides", "راهنمای منتشرشده املاک"), note: t("24 Persian, 10 English, 10 Arabic", "۲۴ فارسی، ۱۰ انگلیسی و ۱۰ عربی") },
      { value: t("53 → 95", "از ۵۳ به ۹۵"), label: t("mobile Lighthouse performance", "امتیاز Performance موبایل در Lighthouse") },
    ],
    context: t("First Choice has operated in Tehran since 1988, serving both local customers and diplomatic or corporate relocation needs. Its knowledge lived across staff, listings, calls, and an aging web presence rather than one product system.", "انتخاب اول از سال ۱۳۶۷ در بازار املاک تهران کار می‌کند. تجربه مجموعه بین حافظه کارکنان، فایل‌ها، تماس‌ها و یک وب‌سایت قدیمی پخش شده بود؛ محصول واحدی وجود نداشت که این دانش را جمع کند."),
    problem: t("The platform had to serve different languages, transaction models, privacy expectations, and operational roles without becoming three translated brochures. Public discovery and internal dossier data also needed a hard boundary.", "سه زبان فقط به معنی ترجمه سه نسخه از یک سایت نبود. مخاطب فارسی، انگلیسی و عربی نیازهای متفاوتی داشت. هم‌زمان باید بین چیزی که مردم می‌بینند و اطلاعات خصوصی مالک و پرونده داخلی مرز محکمی وجود می‌داشت."),
    users: t("Persian-speaking buyers and renters; English- and Arabic-speaking relocation clients; property owners; agents; and internal staff managing listings and leads.", "خریدار و مستأجر فارسی‌زبان، مشتریان انگلیسی و عربی‌زبان، مالکان، کارشناسان املاک و کارکنانی که فایل‌ها و درخواست‌ها را مدیریت می‌کنند."),
    northStar: t("A qualified property conversation: help the right audience find relevant inventory, understand it, and reach the team with enough context to act.", "کاربر فایل مناسب را پیدا کند، اطلاعات کافی برای تصمیم اولیه داشته باشد و وقتی با تیم تماس می‌گیرد، گفت‌وگو از یک نقطه مشخص شروع شود."),
    constraints: [
      { title: t("Three real audiences", "سه مخاطب متفاوت"), body: t("Persian, English, and Arabic journeys differ in priorities and services; localization could not stop at copy translation.", "نیاز مخاطب فارسی، انگلیسی و عربی یکی نبود؛ بنابراین بومی‌سازی نمی‌توانست به ترجمه همان صفحه‌ها محدود شود.") },
      { title: t("Privacy", "حریم خصوصی"), body: t("Internal owner details, exact location clues, and staff notes must remain searchable for operations but invisible publicly.", "لازم بود اطلاعات مالک، نشانی دقیق و یادداشت‌های داخلی برای تیم قابل جست‌وجو باشند، اما در نسخه عمومی کاملاً پنهان بمانند.") },
      { title: t("Market-specific data", "داده متناسب با بازار"), body: t("Iranian property transactions require distinct deposit, rent, sale, and short-term structures plus Persian calendar and phone behavior.", "بازار املاک ایران برای ودیعه، اجاره، فروش و اقامت کوتاه‌مدت ساختارهای متفاوتی دارد و تقویم و شماره تلفن هم باید بومی باشند.") },
      { title: t("Shared production host", "سرور مشترک"), body: t("Deployment had to avoid risky in-place builds and coexist with other live services on a constrained Ubuntu host.", "چند سرویس فعال دیگر روی همان سرور Ubuntu بودند؛ استقرار باید بدون build مستقیم و بدون ایجاد اختلال برای آن‌ها انجام می‌شد.") },
    ],
    phases: [
      { title: t("Model the real-estate operation", "مدل‌سازی فرایندهای املاک"), body: t("I mapped public listings, staff dossiers, owner submissions, buyer requests, valuation, leads, and international enquiries into one domain model.", "فایل عمومی، پرونده داخلی، سپردن ملک، درخواست خریدار، ارزیابی، سرنخ و درخواست بین‌المللی را در یک مدل واحد کنار هم قرار دادم."), status: "live" },
      { title: t("Design distinct language experiences", "طراحی جداگانه سه نسخه زبانی"), body: t("The Persian experience supports the local market; English and Arabic emphasize relocation, privacy, and assisted service rather than cloning every page.", "نسخه فارسی برای بازار محلی طراحی شد و نسخه‌های انگلیسی و عربی بیشتر روی اسکان، حریم خصوصی و خدمات همراه تمرکز دارند. ساختار هر نسخه بر اساس نیاز همان مخاطب تنظیم شده است."), status: "live" },
      { title: t("Build the staff administration panel", "پنل داخلی کارکنان"), body: t("A Persian-first admin lets staff manage properties, people, leads, submissions, media, and private dossiers without developer help.", "یک پنل فارسی ساختم تا کارکنان بدون کمک توسعه‌دهنده بتوانند فایل‌ها، اشخاص، سرنخ‌ها، درخواست‌ها، تصاویر و پرونده‌های خصوصی را مدیریت کنند."), status: "live" },
      { title: t("Implement search and publishing", "جست‌وجو و محتوای پایدار"), body: t("Search, neighborhood pages, structured data, guides, FAQs, IndexNow, and clean sitemaps create useful entry points beyond paid traffic.", "جست‌وجو، صفحه‌های محله، داده ساختاریافته، راهنماها، پرسش‌های پرتکرار، IndexNow و sitemap تمیز، مسیرهای ورودی پایدارتری برای سایت ایجاد می‌کنند."), status: "live" },
    ],
    decisions: [
      { title: t("Neighborhood pins, not exact coordinates", "نمایش محله، نه مختصات دقیق"), body: t("Public maps provide enough geographic context to compare areas without exposing a private home or an owner's operational data.", "نقشه عمومی برای مقایسه محله اطلاعات کافی می‌دهد، اما موقعیت دقیق خانه یا اطلاعات خصوصی مالک را لو نمی‌دهد."), status: "live" },
      { title: t("Separate inventory by audience", "فایل مناسب برای هر مخاطب"), body: t("Local and foreign-facing inventory can differ because language, lease expectations, furnishing, and relocation needs are not interchangeable.", "فایل مناسب مشتری محلی لزوماً برای مشتری خارجی مناسب نیست؛ نوع قرارداد، مبله بودن، زبان و نیازهای اسکان فرق می‌کنند."), status: "live" },
      { title: t("Keep the dossier private by architecture", "حریم خصوصی در خود معماری"), body: t("Owner contacts, source notes, and internal location clues live in staff-only fields and are excluded from public listing queries.", "شماره مالک، یادداشت منبع و جزئیات داخلی مکان در فیلدهای مخصوص کارکنان می‌مانند و اصلاً وارد query عمومی نمی‌شوند."), status: "live" },
      { title: t("Improve mobile performance", "بهینه‌سازی عملکرد موبایل"), body: t("Selective prefetching, caching, image work, and rendering changes moved mobile Lighthouse performance from 53 to 95 and LCP from 9.6 to 2.8 seconds.", "با prefetch انتخابی، کش، بهینه‌سازی تصویر و اصلاح رندر، امتیاز Performance موبایل از ۵۳ به ۹۵ رسید و LCP از ۹.۶ به ۲.۸ ثانیه کاهش پیدا کرد."), status: "shipped" },
    ],
    architecture: [
      { title: t("Public discovery", "بخش عمومی"), body: t("Localized home, search, listing, map, guide, and service journeys.", "صفحه اصلی، جست‌وجو، فایل، نقشه، راهنما و خدمات متناسب با هر زبان.") },
      { title: t("Lead intake", "دریافت درخواست"), body: t("Property request, owner submission, valuation, contact, and diplomatic enquiry forms.", "فرم درخواست ملک، سپردن ملک، ارزیابی، تماس و درخواست بین‌المللی.") },
      { title: t("Operations", "عملیات"), body: t("Persian admin for listings, people, leads, media, private dossiers, and publishing.", "پنل فارسی برای فایل، اشخاص، سرنخ، رسانه، پرونده خصوصی و انتشار.") },
      { title: t("Discovery infrastructure", "زیرساخت جست‌وجو"), body: t("Structured data, multilingual metadata, sitemaps, IndexNow, guides, and FAQs.", "داده ساختاریافته، metadata چندزبانه، sitemap، IndexNow، راهنماها و پرسش‌های پرتکرار.") },
      { title: t("Production", "عملیات فنی"), body: t("Locally built standalone Next.js bundle, Nginx routing, externalized secrets, and documented deployment.", "build مستقل Next.js، مسیریابی Nginx، secretهای خارج از کد و روند استقرار مستند.") },
    ],
    scope: [
      t("Product discovery with the business owner, service model, roadmap, and domain decisions", "شناخت مسئله همراه مدیر کسب‌وکار، تعریف مدل خدمات، نقشه راه و تصمیم‌های اصلی محصول"),
      t("Complete UX and full-stack implementation across public and admin experiences", "طراحی کامل تجربه و اجرای تمام پشته برای بخش عمومی و پنل مدیریت"),
      t("Persian, English, and Arabic product localization", "بومی‌سازی کامل محصول برای فارسی، انگلیسی و عربی"),
      t("Property search, map behavior, lead flows, private dossiers, content workflow, SEO, and analytics", "جست‌وجوی ملک، رفتار نقشه، مسیرهای جذب سرنخ، پرونده خصوصی، انتشار محتوا، SEO و تحلیل داده"),
      t("Performance optimization, production deployment, monitoring, and operational documentation", "بهینه‌سازی سرعت، استقرار روی سرور، پایش و مستندسازی عملیات"),
    ],
    evidence: [
      { kind: t("Live product", "محصول فعال"), title: t("Three product experiences", "سه تجربه متناسب با سه زبان"), body: t("The live site presents Persian, English, and Arabic journeys with market-specific services, content, forms, and metadata.", "سایت فعال برای هر سه زبان، خدمات، محتوا، فرم‌ها و metadata متناسب با همان مخاطب را دارد.") },
      { kind: t("Decision record", "سابقه تصمیم"), title: t("Architecture decisions with consequences", "تصمیم‌های معماری و دلیلشان"), body: t("Written ADRs cover audience separation, map privacy, transaction fields, private dossier boundaries, server validation, and production deployment.", "در ADRها دلیل تفکیک مخاطب‌ها، حریم خصوصی نقشه، فیلدهای معامله، مرز پرونده داخلی، اعتبارسنجی سرور و روش استقرار ثبت شده است.") },
      { kind: t("Measured delivery", "نتیجه قابل اندازه‌گیری"), title: t("Performance and content results", "سرعت و محتوای قابل بررسی"), body: t("The project records Lighthouse and LCP improvements, a clean crawl, multilingual guides, FAQs, and publishing workflows instead of relying on visual claims alone.", "بهبود Lighthouse و LCP، crawl تمیز، راهنماهای چندزبانه، پرسش‌های پرتکرار و روند انتشار همگی ثبت شده‌اند؛ نتیجه فقط به ظاهر سایت محدود نیست." ) },
    ],
    outcome: t("First Choice is now a live operating platform connecting public property discovery, multilingual enquiries, publishing, and private staff workflows.", "First Choice اکنون یک پلتفرم فعال است که جست‌وجوی عمومی ملک، درخواست‌های چندزبانه، انتشار محتوا و فرایندهای خصوصی کارکنان را در یک سیستم قرار می‌دهد."),
    statusNote: t("Performance figures are from the project's recorded Lighthouse work. Search growth and conversion outcomes should be evaluated over time and are not overstated here.", "عددهای Performance از تست‌های ثبت‌شده Lighthouse آمده‌اند. برای قضاوت درباره رشد جست‌وجو و نرخ تبدیل هنوز به زمان بیشتری نیاز است، بنابراین اینجا نتیجه‌ای برای آن‌ها نساخته‌ام."),
    lessons: [
      t("Localization is a product architecture decision when audiences have different needs.", "وقتی نیاز مخاطب‌ها فرق دارد، بومی‌سازی فقط کار ترجمه نیست؛ بخشی از معماری محصول است."),
      t("Operational privacy is strongest when enforced by the data model, not staff memory.", "حریم عملیاتی وقتی قوی است که در مدل داده اجرا شود، نه اینکه به حافظه کارکنان وابسته باشد."),
      t("A business website creates more value when it also improves internal work.", "وب‌سایت وقتی ارزش بیشتری می‌سازد که کار داخل مجموعه را هم بهتر کند."),
    ],
    images: [
      { src: "/projects/first-choice/homepage.jpg", alt: t("First Choice Persian homepage", "صفحه اصلی فارسی انتخاب اول") },
      { src: "/projects/first-choice/diplomatic.jpg", alt: t("English international relocation experience", "نسخه انگلیسی خدمات اسکان بین‌المللی") },
      { src: "/projects/first-choice/search.jpg", alt: t("Tehran property search and filtering", "جست‌وجو و فیلتر ملک در تهران") },
    ],
  },
  hosseintalab: {
    slug: "hosseintalab",
    number: "04",
    accent: "navy",
    title: "Hosseintalab",
    productType: t("Persian handwoven-carpet commerce", "فروشگاه آنلاین فرش دستباف"),
    period: t("2026", "۱۴۰۵"),
    stage: t("Live · Publicly launched", "فعال · لانچ عمومی"),
    headline: t(
      "I took a multigenerational Tehran carpet business from an undefined online presence to a launched Persian storefront.",
      "حضور آنلاین حسین‌طلب را از یک درخواست کلی به فروشگاهی واقعی با ۲۰ فرش، صفحه محصول و مسیر روشن مشاوره و خرید تبدیل کردم."
    ),
    deck: t(
      "I led product strategy, catalog architecture, brand direction, Persian UX writing, interface design, frontend delivery, content standards, QA, and launch.",
      "استراتژی محصول، ساختار کاتالوگ، مسیر برند، متن فارسی، طراحی رابط، توسعه فرانت‌اند، استانداردهای محتوا، QA و لانچ را بر عهده داشتم."
    ),
    role: t("Product Manager · Product Designer · Frontend Engineer · Brand and Content Lead", "مدیر محصول · طراح محصول · توسعه‌دهنده فرانت‌اند · مسئول برند و محتوا"),
    team: t("Direct collaboration with the family business owner and carpet specialists", "همکاری مستقیم با صاحب کسب‌وکار خانوادگی و کارشناسان فرش"),
    cover: "/projects/hosseintalab/storefront-home.png",
    links: [
      { label: t("Live product", "محصول فعال"), href: "https://hosseintalab.ir" },
      { label: t("GitHub", "گیت هاب"), href: "https://github.com/ShawnMcRich/HTCarpets" },
    ],
    metrics: [
      { value: t("20", "۲۰"), label: t("live individual carpet records", "فرش واقعی در مجموعه فعال") },
      { value: t("13", "۱۳"), label: t("weaving origins represented", "محل بافت در کاتالوگ") },
      { value: t("2 paths", "۲ مسیر"), label: t("home and antique buying journeys", "فرش خانه و فرش آنتیک") },
      { value: t("Est. 1290 SH", "از ۱۲۹۰"), label: t("offline heritage brought online", "سابقه کسب‌وکار خانوادگی") },
    ],
    context: t(
      "Hossein Talab is a family carpet business in Tehran's carpet bazaar with a long-standing offline reputation and experience in rare and export-quality carpets. That expertise was not represented in a coordinated digital product.",
      "حسین‌طلب یک کسب‌وکار خانوادگی در بازار فرش تهران است که سال‌ها در فروش فرش‌های دستباف، آنتیک و صادراتی فعالیت داشته، اما این سابقه و تخصص در یک محصول دیجیتال منسجم دیده نمی‌شد."
    ),
    problem: t(
      "A handwoven carpet is a unique, expensive item. Buyers need to inspect the exact piece, understand specialist attributes, compare price and condition, and know how to continue the purchase without being expected to speak like a carpet dealer.",
      "هر فرش دستباف یک تخته منحصربه‌فرد و خریدی پرهزینه است. خریدار باید بتواند همان فرش را کامل ببیند، مشخصات تخصصی و وضعیتش را بفهمد، قیمت را بداند و بدون آشنایی قبلی با اصطلاحات بازار برای خرید یا مشاوره اقدام کند."
    ),
    users: t(
      "People furnishing a home, collectors and antique buyers, interior designers, and customers who want specialist guidance before purchasing.",
      "افرادی که برای خانه فرش می‌خواهند، خریداران فرش آنتیک، طراحان داخلی و کسانی که پیش از خرید به راهنمایی کارشناس نیاز دارند."
    ),
    northStar: t(
      "A customer can inspect one real carpet, understand its important facts and price, and contact the seller with enough context to continue the purchase.",
      "کاربر بتواند یک فرش واقعی را با اطلاعات و قیمتش بررسی کند و هنگام تماس با فروشنده دقیقاً بداند درباره کدام تخته صحبت می‌کند."
    ),
    constraints: [
      { title: t("Unique inventory", "موجودی تک‌تخته"), body: t("Every carpet needs its own images, dimensions, origin, condition, price, and availability state; generic product templates are not enough.", "هر فرش به تصویر، ابعاد، محل بافت، وضعیت، قیمت و موجودی جداگانه نیاز دارد و نمی‌شود اطلاعات چند تخته را با یک قالب عمومی جایگزین کرد.") },
      { title: t("Visual accuracy", "دقت تصویر"), body: t("Context images can help with scale, but they must be clearly separated from documentary images of the actual carpet.", "تصویر محیطی به درک اندازه و حضور فرش در فضا کمک می‌کند، اما باید کاملاً از تصاویر واقعی همان تخته جدا و مشخص باشد.") },
      { title: t("Specialist language", "اصطلاحات تخصصی"), body: t("The product had to preserve real carpet terminology while explaining enough for a non-specialist customer to make progress.", "محصول باید اصطلاحات درست بازار فرش را حفظ می‌کرد و در عین حال برای خریدار غیرمتخصص قابل فهم می‌ماند.") },
      { title: t("Operational readiness", "آمادگی فروش"), body: t("Publishing pages was only useful if the business could identify enquiries, confirm inventory, share further evidence, and coordinate visits or purchases.", "انتشار سایت زمانی ارزش داشت که فروشگاه بتواند درخواست را به فرش مشخص وصل کند، موجودی را تأیید کند و ادامه خرید یا بازدید را هماهنگ کند.") },
    ],
    phases: [
      { title: t("Define the business and product", "تعریف محصول و مدل فروش"), body: t("I worked with the owner to turn a broad request for an online presence into clear audiences, commercial paths, priorities, and an executable roadmap.", "همراه صاحب کسب‌وکار، درخواست کلی حضور آنلاین را به مخاطب‌های مشخص، مسیرهای فروش، اولویت‌ها و نقشه راه قابل اجرا تبدیل کردم."), status: "shipped" },
      { title: t("Structure the brand and catalog", "ساخت برند و کاتالوگ"), body: t("I established the digital identity, Persian voice, product taxonomy, required product fields, photography rules, and the distinction between home and antique inventory.", "هویت دیجیتال، لحن فارسی، دسته‌بندی فرش‌ها، اطلاعات لازم هر محصول، قواعد عکاسی و مرز میان فرش خانه و فرش آنتیک را مشخص کردم."), status: "shipped" },
      { title: t("Design and build the storefront", "طراحی و توسعه فروشگاه"), body: t("I designed the RTL journeys and implemented the responsive frontend, catalog controls, product records, buying guides, and consultation routes.", "مسیرهای RTL را طراحی کردم و فرانت‌اند واکنش‌گرا، فیلتر و مرتب‌سازی کاتالوگ، صفحات محصول، راهنمای خرید و مسیرهای مشاوره را ساختم."), status: "live" },
      { title: t("Publish real inventory and launch", "ثبت موجودی واقعی و لانچ"), body: t("The launch version went public with 20 individual carpets, visible prices, product photography, origin pages, and direct contact options.", "نسخه عمومی با ۲۰ فرش واقعی، قیمت‌های مشخص، تصاویر هر تخته، صفحات محل بافت و راه‌های مستقیم تماس لانچ شد."), status: "live" },
    ],
    decisions: [
      { title: t("Separate home and antique journeys", "تفکیک فرش خانه و فرش آنتیک"), body: t("Residential selection starts with practical fit and appearance. Antique evaluation places more weight on authenticity, age, condition, restoration, and specialist consultation.", "در مسیر فرش خانه، تناسب با فضا و ظاهر اهمیت بیشتری دارد. در مسیر آنتیک، اصالت، قدمت، سلامت، مرمت و نظر کارشناس پررنگ‌تر است."), status: "live" },
      { title: t("Show the complete piece first", "نمایش کامل همان تخته"), body: t("Every listing begins with a full, uncropped view of the actual carpet. Environmental imagery is labeled separately and never replaces the documentary record.", "هر محصول با نمای کامل و بدون برش همان فرش شروع می‌شود. تصاویر محیطی جداگانه معرفی می‌شوند و جای تصویر مستند محصول را نمی‌گیرند."), status: "live" },
      { title: t("Publish price before contact", "نمایش قیمت پیش از تماس"), body: t("The catalog shows recorded prices directly so customers can define a realistic shortlist before speaking with the store.", "قیمت ثبت‌شده در خود کاتالوگ نمایش داده می‌شود تا کاربر پیش از تماس بتواند محدوده انتخابش را مشخص کند."), status: "live" },
      { title: t("Make consultation part of the journey", "قرار دادن مشاوره در مسیر خرید"), body: t("Customers can continue with a name, page link, or screenshot instead of memorizing an inventory code or completing a generic contact form.", "کاربر می‌تواند نام فرش، لینک صفحه یا اسکرین‌شات را بفرستد و بدون حفظ کردن کد موجودی، گفت‌وگو را درباره همان تخته ادامه دهد."), status: "live" },
    ],
    architecture: [
      { title: t("Discovery", "کشف"), body: t("Current collection, weaving-origin pages, guides, and home versus antique entry points.", "مجموعه موجود، صفحه‌های محل بافت، راهنماها و مسیرهای جدا برای خانه و آنتیک.") },
      { title: t("Catalog", "کاتالوگ"), body: t("Search, origin filter, collection type, sorting, availability, and visible pricing across real inventory.", "جست‌وجو، فیلتر محل بافت، نوع مجموعه، مرتب‌سازی، وضعیت موجودی و قیمت.") },
      { title: t("Product record", "شناسنامه محصول"), body: t("Full and detail photography, dimensions, origin, materials, age and condition notes, price, and unique identity.", "تصاویر کامل و جزئیات، ابعاد، محل بافت، جنس، توضیح قدمت و وضعیت، قیمت و شناسه هر تخته.") },
      { title: t("Knowledge", "راهنما"), body: t("Buying guidance and carpet terminology explain what customers should inspect before contacting the store.", "راهنمای خرید و اصطلاحات فرش مشخص می‌کنند کاربر پیش از تماس چه چیزهایی را بررسی کند.") },
      { title: t("Enquiry", "ارتباط"), body: t("WhatsApp, Instagram, phone, and store-visit routes preserve the context of the selected carpet.", "واتساپ، اینستاگرام، تماس تلفنی و بازدید حضوری، گفت‌وگو را با همان فرش انتخاب‌شده ادامه می‌دهند.") },
    ],
    scope: [
      t("Product strategy, launch scope, roadmap, Jira backlog, and stakeholder coordination", "استراتژی محصول، محدوده لانچ، نقشه راه، بک‌لاگ Jira و هماهنگی با صاحب کسب‌وکار"),
      t("Brand positioning, identity direction, Persian voice, and customer-facing content", "جایگاه برند، مسیر هویت بصری، لحن فارسی و محتوای کاربر"),
      t("Information architecture, catalog taxonomy, customer journeys, UX/UI, and frontend implementation", "معماری اطلاعات، دسته‌بندی کاتالوگ، مسیرهای کاربر، UX و UI و پیاده‌سازی فرانت‌اند"),
      t("Product-data requirements, photography standards, image integrity, and launch content", "نیازمندی داده محصول، استاندارد عکاسی، حفظ اصالت تصویر و محتوای لانچ"),
      t("Responsive QA, accessibility, production validation, launch checks, and documentation", "QA واکنش‌گرایی، دسترس‌پذیری، بررسی نسخه نهایی، کنترل‌های لانچ و مستندسازی"),
    ],
    evidence: [
      { kind: t("Live product", "محصول فعال"), title: t("A public catalog with real inventory", "کاتالوگ عمومی با موجودی واقعی"), body: t("The launched site currently presents 20 individual carpets with searchable records, prices, origin data, product pages, and direct enquiry routes.", "سایت فعال در حال حاضر ۲۰ فرش را با جست‌وجو، قیمت، محل بافت، صفحه محصول و مسیر مستقیم ارتباط نمایش می‌دهد.") },
      { kind: t("Delivery", "اجرا"), title: t("Decisions documented from strategy through launch", "مستندات از استراتژی تا لانچ"), body: t("The repository, Jira project, decision records, roadmap, taxonomy, content guide, photography standard, and project journal connect product choices to delivery.", "مخزن کد، پروژه Jira، سابقه تصمیم‌ها، نقشه راه، دسته‌بندی کاتالوگ، راهنمای محتوا، استاندارد عکاسی و گزارش پروژه، مسیر تصمیم تا اجرا را ثبت کرده‌اند.") },
      { kind: t("Content integrity", "اصالت محتوا"), title: t("A documented boundary between evidence and illustration", "مرز مشخص میان تصویر واقعی و تصویر محیطی"), body: t("The product treats the carpet as documentary evidence: environmental scenes are labeled, while motifs, borders, wear, damage, and colors of the actual piece are preserved.", "در محصول، خود فرش یک سند است. تصاویر محیطی برچسب مشخص دارند و نقش، حاشیه، فرسودگی، آسیب و رنگ تخته واقعی تغییر داده نمی‌شود.") },
    ],
    outcome: t(
      "Hossein Talab is publicly launched with 20 real inventory records, product-detail pages, visible pricing, origin-based discovery, buying guidance, and direct consultation paths.",
      "حسین‌طلب با ۲۰ فرش واقعی، صفحه‌های محصول، قیمت مشخص، جست‌وجو بر اساس محل بافت، راهنمای خرید و مسیرهای مستقیم مشاوره به‌صورت عمومی لانچ شده است."
    ),
    statusNote: t(
      "The product is live, but sales conversion, search growth, and retention need a longer measurement period and are not claimed here.",
      "محصول فعال است، اما برای اعلام نتیجه درباره فروش، رشد جست‌وجو و بازگشت کاربر هنوز به دوره اندازه‌گیری طولانی‌تری نیاز داریم."
    ),
    lessons: [
      t("For unique inventory, the product record has to be treated as evidence, not promotional decoration.", "در فروش کالای تک‌تخته، صفحه محصول باید سند قابل بررسی باشد، نه فقط تصویر تبلیغاتی."),
      t("Specialist terminology can remain accurate while the journey begins with questions an ordinary customer can answer.", "می‌شود اصطلاحات تخصصی را دقیق نگه داشت و در عین حال مسیر خرید را با سؤال‌های ساده و قابل پاسخ شروع کرد."),
      t("A consultation flow works better when it carries the exact product context into the conversation.", "وقتی اطلاعات همان محصول وارد گفت‌وگو شود، مشاوره برای مشتری و فروشنده روشن‌تر پیش می‌رود."),
    ],
    images: [
      { src: "/projects/hosseintalab/storefront-home.png", alt: t("Launched Hosseintalab Persian storefront", "صفحه اصلی فروشگاه فعال حسین‌طلب") },
      { src: "/projects/hosseintalab/featured-carpet.webp", alt: t("Full documentary view of a live Hossein Talab carpet", "نمای کامل و مستند یکی از فرش‌های فعال حسین‌طلب"), compact: true },
      { src: "/projects/hosseintalab/tree-of-life.webp", alt: t("Individual Tree of Life carpet record", "تصویر کامل فرش درخت زندگی در کاتالوگ"), compact: true },
      { src: "/projects/hosseintalab/kashan-context.jpg", alt: t("Clearly labeled environmental context image for a Kashan carpet", "تصویر محیطی برچسب‌خورده برای نمایش فرش کاشان در فضا"), compact: true },
      { src: "/projects/hosseintalab/tabriz-context.jpg", alt: t("Environmental context image for a Tabriz carpet", "تصویر محیطی فرش تبریز"), compact: true },
    ],
  },
  mrm: {
    slug: "mrm",
    number: "05",
    accent: "amber",
    title: "MRM",
    productType: t("Business continuity messenger", "پیام‌رسان داخلی برای زمان قطعی"),
    period: t("2026", "۱۴۰۵"),
    stage: t("Internal · Used during shutdown", "داخلی · استفاده شده هنگام قطعی"),
    headline: t("When internet access disappeared, I built the tool my company needed to keep working.", "وقتی اینترنت قطع شد، ابزاری را ساختم که شرکت برای ادامه کار به آن نیاز داشت."),
    deck: t("MRM is a self-hosted company messenger I scoped, designed, built, and deployed during the shutdown. Around 40 people used it until normal access returned.", "MRM یک پیام‌رسان داخلی و خودمیزبان است که همان روزهای قطعی تعریف، طراحی، ساخته و راه‌اندازی کردم. حدود ۴۰ نفر تا برگشت اینترنت از آن استفاده کردند."),
    role: t("Product Owner · Designer · Engineer · Operator", "مالک محصول · طراح · توسعه‌دهنده · مسئول راه‌اندازی"),
    team: t("Built for and adopted by an approximately 40-person company", "برای یک شرکت حدود ۴۰ نفره ساختم و همان تیم از آن استفاده کرد"),
    links: [{ label: t("GitHub", "گیت هاب"), href: "https://github.com/ShawnMcRich/MRM" }],
    metrics: [
      { value: t("~40 people", "حدود ۴۰ نفر"), label: t("kept coordinating during the shutdown", "در زمان قطعی با هم در ارتباط ماندند") },
      { value: t("Built in crisis", "ساخته‌شده در بحران"), label: t("scoped, implemented, and deployed under pressure", "تعریف، ساخت و راه‌اندازی در زمان محدود") },
      { value: t("Self-hosted", "خودمیزبان"), label: t("designed around restricted infrastructure", "متناسب با زیرساخت محدود شرکت") },
      { value: t("Real adoption", "استفاده واقعی"), label: t("used until normal connectivity returned", "تا زمان برگشت اینترنت در استفاده بود") },
    ],
    context: t("During the first days of war in Iran, normal internet access disappeared. The company could no longer depend on its cloud communication tools, and work slowed because coordination itself had become unavailable.", "در روزهای اول جنگ، اینترنت عادی از دسترس خارج شد و ابزارهای ارتباطی شرکت هم دیگر کار نمی‌کردند. مشکل فقط قطع یک سرویس نبود؛ خود هماهنگی تیم متوقف شده بود."),
    problem: t("The team did not need a new social platform. It needed a familiar, deployable communication path that could survive blocked registries, unreachable CDNs, intermittent connectivity, and limited operational support.", "تیم یک پیام‌رسان تازه و پر از قابلیت نمی‌خواست. ابزاری آشنا لازم داشت که سریع روی زیرساخت خود شرکت بالا بیاید و برای اجرا به CDN، سرویس ابری یا دانلود از خارج وابسته نباشد."),
    users: t("Employees and managers who needed direct and group coordination, file exchange, presence, and reliable message recovery during disruption.", "کارکنان و مدیرانی که برای ادامه کار به پیام مستقیم و گروهی، فایل، وضعیت حضور و برگشت مطمئن پیام بعد از قطعی نیاز داشتند."),
    northStar: t("Essential coordination continues even when external infrastructure does not.", "اگر تیم بتواند در زمان قطعی همچنان با هم هماهنگ بماند، محصول کارش را انجام داده است."),
    constraints: [
      { title: t("No reliable international network", "دسترسی ناپایدار به اینترنت بین‌الملل"), body: t("Package registries, CDN assets, and cloud platforms could not be assumed available.", "نمی‌شد روی package registryها، فایل‌های CDN یا پلتفرم‌های ابری حساب کرد.") },
      { title: t("Urgent adoption", "استفاده فوری"), body: t("People needed to understand the product immediately, with no training program and little tolerance for novelty.", "فرصتی برای آموزش نبود؛ لازم بود اعضای تیم از همان نگاه اول ابزار را بفهمند و با آن احساس آشنایی کنند.") },
      { title: t("Intermittent connectivity", "اتصال مقطعی"), body: t("Short outages could not lose the conversation or leave outgoing messages in an unknown state.", "قطع‌و‌وصل کوتاه نباید باعث می‌شد گفت‌وگوها از بین بروند یا وضعیت پیام‌های خروجی نامعلوم بماند.") },
      { title: t("Low operational overhead", "راه‌اندازی ساده"), body: t("The application and database needed to run on company-managed infrastructure without a cloud platform or globally installed process manager.", "برنامه و دیتابیس باید روی زیرساخت خود شرکت و بدون وابستگی به پلتفرم ابری یا ابزارهای نصب‌شده از اینترنت اجرا می‌شدند.") },
    ],
    phases: [
      { title: t("Reduce to the essential workflow", "فقط مسیرهای ضروری"), body: t("I scoped direct and group messaging, files, delivery state, presence, and admin approval before secondary customization.", "پیام مستقیم و گروهی، ارسال فایل، وضعیت تحویل، حضور کاربران و تأیید مدیر را در اولویت گذاشتم و شخصی‌سازی‌های فرعی را کنار گذاشتم."), status: "shipped" },
      { title: t("Remove external runtime dependencies", "حذف وابستگی به سرویس‌های خارجی"), body: t("Browser libraries are served locally; production dependencies are bundled; bootstrap can select reachable domestic Ubuntu mirrors.", "کتابخانه‌های مرورگر محلی سرو می‌شوند، وابستگی‌های production همراه پروژه‌اند و راه‌انداز می‌تواند mirror در دسترس Ubuntu را انتخاب کند."), status: "live" },
      { title: t("Make interruption recoverable", "بازیابی بعد از قطع‌و‌وصل"), body: t("IndexedDB caches conversations, outgoing messages queue locally, and reconnection synchronizes state.", "IndexedDB گفت‌وگوها را نگه می‌دارد، پیام‌های خروجی در صف محلی می‌مانند و بعد از اتصال دوباره همگام می‌شوند."), status: "live" },
      { title: t("Deploy and support real use", "راه‌اندازی برای استفاده واقعی"), body: t("The system was installed on internal infrastructure and used by around 40 people until normal connectivity returned.", "سیستم را روی زیرساخت داخلی راه انداختم و حدود ۴۰ نفر تا برگشت اینترنت عادی با آن کار کردند."), status: "shipped" },
    ],
    decisions: [
      { title: t("Use familiar messaging patterns", "استفاده از الگوی آشنای پیام‌رسان‌ها"), body: t("The interface follows established messenger behavior because pressured users needed confidence, not a new mental model.", "رابط را بر اساس الگوی پیام‌رسان‌های آشنا طراحی کردم تا اعضای تیم بدون آموزش بتوانند از آن استفاده کنند."), status: "live" },
      { title: t("A conventional self-hosted stack", "یک استک ساده و خودمیزبان"), body: t("Node, Express, Socket.IO, MongoDB, Nginx, and systemd kept the runtime understandable and recoverable on company infrastructure.", "Node، Express، Socket.IO، MongoDB، Nginx و systemd باعث شدند اجرای سیستم روی زیرساخت شرکت ساده و قابل بازیابی بماند."), status: "live" },
      { title: t("Recover from short network interruptions", "پشتیبانی از قطع‌و‌وصل کوتاه"), body: t("Local caching and pending queues handle short interruptions; real-time communication still requires a reachable internal network path.", "کش محلی و صف پیام، قطع‌و‌وصل کوتاه را پوشش می‌دهند. ارتباط لحظه‌ای همچنان به یک مسیر در دسترس در شبکه داخلی نیاز دارد."), status: "live" },
      { title: t("Private deployment boundary", "محدوده استقرار خصوصی"), body: t("MRM is positioned for company-managed infrastructure and explicitly requires security review before any public exposure.", "MRM برای زیرساخت داخلی شرکت ساخته شده است. پیش از هر دسترسی عمومی، به بررسی امنیتی مستقل نیاز دارد."), status: "shipped" },
    ],
    architecture: [
      { title: t("Browser/PWA", "مرورگر و PWA"), body: t("Framework-free client, locally served libraries, IndexedDB, service worker, and push.", "کلاینت بدون فریم‌ورک، کتابخانه‌های محلی، IndexedDB، service worker و اعلان.") },
      { title: t("Local network", "شبکه محلی"), body: t("HTTPS and WebSocket communication through Nginx without a public SaaS dependency.", "ارتباط HTTPS و WebSocket از طریق Nginx بدون وابستگی به SaaS عمومی.") },
      { title: t("Application", "برنامه"), body: t("A Node and Express service exposes REST APIs; Socket.IO handles real-time events.", "سرویس Node و Express، REST APIها را ارائه می‌دهد و Socket.IO رویدادهای لحظه‌ای را مدیریت می‌کند.") },
      { title: t("Persistence", "ذخیره‌سازی"), body: t("A self-hosted MongoDB instance stores records; a local file store handles shared media and documents.", "MongoDB خودمیزبان اطلاعات را نگه می‌دارد و فایل‌ها و رسانه‌ها در فضای محلی ذخیره می‌شوند.") },
      { title: t("Operations", "عملیات"), body: t("Systemd, bundled dependencies, mirror selection, and Nginx keep deployment recoverable.", "Systemd، وابستگی‌های همراه پروژه، انتخاب mirror و Nginx راه‌اندازی دوباره سیستم را ساده نگه می‌دارند.") },
    ],
    scope: [
      t("Emergency problem framing, prioritization, interaction design, and implementation", "تعریف مسئله در شرایط اضطراری، اولویت‌بندی، طراحی تعامل و پیاده‌سازی"),
      t("Real-time messaging, presence, delivery/read state, reactions, replies, files, and groups", "پیام لحظه‌ای، حضور کاربران، وضعیت تحویل و خواندن، واکنش، پاسخ، فایل و گروه"),
      t("Offline queueing, local cache, reconnection sync, PWA, and push notifications", "صف آفلاین، کش محلی، همگام‌سازی بعد از اتصال، PWA و اعلان"),
      t("Self-hosted deployment, network-aware bootstrap, admin approval, and adoption support", "استقرار خودمیزبان، راه‌اندازی متناسب با وضعیت شبکه، تأیید مدیر و پشتیبانی کاربران"),
    ],
    evidence: [
      { kind: t("Real use", "استفاده واقعی"), title: t("Adopted during the disruption", "استفاده در زمان اختلال"), body: t("About 40 people used MRM as an operational fallback through the shutdown until normal internet access returned.", "حدود ۴۰ نفر در دوره قطعی، تا زمان برگشت اینترنت عادی از MRM برای هماهنگی کار استفاده کردند.") },
      { kind: t("Repository", "مخزن کد"), title: t("Resilience is implemented", "تاب‌آوری واقعاً در کد پیاده شده"), body: t("Bundled dependencies, local assets, mirror testing, systemd, offline queues, IndexedDB, and reconnect behavior are present in the working repository.", "وابستگی‌های همراه پروژه، فایل‌های محلی، تست mirror، systemd، صف آفلاین، IndexedDB و رفتار اتصال دوباره همگی در مخزن قابل بررسی‌اند.") },
      { kind: t("Boundary", "مرزبندی"), title: t("Documented technical limits", "محدودیت‌های فنی مستندشده"), body: t("The project describes where it is resilient and where it still needs a reachable internal network and independent security review.", "در مستندات مشخص شده سیستم در چه شرایطی تاب‌آور است و در چه بخش‌هایی به شبکه داخلی در دسترس و بررسی امنیتی مستقل نیاز دارد.") },
    ],
    outcome: t("MRM kept essential coordination available for an approximately 40-person company during shutdown conditions and remained in use until normal internet access returned.", "MRM در دوره قطعی امکان هماهنگی ضروری یک شرکت حدود ۴۰ نفره را فراهم کرد و تا زمان برگشت اینترنت عادی مورد استفاده بود."),
    statusNote: t("MRM is an internal continuity tool, not a publicly audited secure messenger. Public exposure would require a separate security review.", "MRM به‌عنوان ابزار داخلی تداوم کار ساخته شد و یک پیام‌رسان عمومی با ممیزی امنیتی نیست. هر نوع دسترسی عمومی به بررسی امنیتی جداگانه نیاز دارد."),
    lessons: [
      t("In a crisis, the best roadmap is the shortest route back to essential work.", "در بحران، بهترین نقشه راه کوتاه‌ترین مسیر برای برگشتن به کار ضروری است."),
      t("Infrastructure constraints belong in product discovery, not only DevOps.", "محدودیت زیرساخت بخشی از کشف محصول است، نه فقط کار DevOps."),
      t("Adoption under pressure depends on familiarity and operational simplicity.", "پذیرش زیر فشار به آشنایی رابط و سادگی عملیات وابسته است."),
    ],
    images: [],
  },
};

export const projectSlugs = Object.keys(projects) as ProjectSlug[];

export const experience = [
  {
    period: t("2025-present", "۱۴۰۴ تا امروز"),
    title: t("Founder & AI Product Manager", "بنیان‌گذار و مدیر محصول هوش مصنوعی"),
    company: "Apex",
    summary: t("Built and operate a live, monetized market-intelligence product across strategy, algorithms, UX, engineering, pricing, and production.", "Apex را از الگوریتم‌های اولیه تا محصول فعال و درآمدزا ساختم و امروز استراتژی، طراحی، تصمیم‌های فنی، قیمت‌گذاری و عملیاتش را اداره می‌کنم."),
  },
  {
    period: t("2023-present", "۱۴۰۲ تا امروز"),
    title: t("Co-founder & Technical Product Lead", "هم‌بنیان‌گذار و رهبر فنی محصول"),
    company: "Vibe",
    summary: t("Defined the product, designed the full RTL experience, built the frontend, and led cross-functional delivery and launch readiness.", "ایده و نقشه راه محصول را شکل دادم، تمام UX و فرانت‌اند RTL را از صفر ساختم و هماهنگی تیم‌ها و آماده‌سازی برای لانچ را جلو بردم."),
  },
  {
    period: t("2020-2024", "۱۳۹۹ تا ۱۴۰۳"),
    title: t("Founder & Managing Director", "بنیان‌گذار و مدیر اجرایی"),
    company: "Monorro",
    summary: t("Led a software-services company across client discovery, scoping, proposals, delivery coordination, quality, and executive operations.", "شرکت خدمات نرم‌افزاری Monorro را اداره کردم؛ از مذاکره و تعریف پروژه تا هماهنگی اجرا، کنترل کیفیت و کارهای اجرایی شرکت."),
  },
  {
    period: t("2019-2023", "۱۳۹۸ تا ۱۴۰۲"),
    title: t("Product Creator & Operator", "سازنده و مدیر محصول"),
    company: "MonoCoin",
    summary: t("Built a paid signal and automation product using Pine Script, TradingView webhooks, Telegram, and Cornix for 300+ paying members and a 13,000+ audience.", "یک محصول اشتراکی سیگنال و اتوماسیون معامله ساختم که با Pine Script، وب‌هوک TradingView، تلگرام و Cornix کار می‌کرد و بیش از ۳۰۰ عضو پرداخت‌کننده داشت."),
  },
  {
    period: t("2016-2021", "۱۳۹۵ تا ۱۴۰۰"),
    title: t("Frontend Engineer & Product Contributor", "توسعه‌دهنده فرانت‌اند و همکار محصول"),
    company: "The Pol / Beshknow · Independent",
    summary: t("Built web experiences and contributed product and UX thinking to an in-store music platform, client products, and independent market-analysis tools.", "برای یک پلتفرم موسیقی داخل فروشگاه، پروژه‌های مشتری و ابزارهای تحلیل بازار، تجربه وب ساختم و در تصمیم‌های محصول و UX هم نقش داشتم."),
  },
];

export const notes: Note[] = [
  {
    slug: "llm-should-do-less",
    project: "apex",
    published: "2026-08-12",
    updated: "2026-08-12",
    title: t("Reducing LLM cost in Apex", "کاهش هزینه LLM در Apex"),
    lead: t("A product lesson from cutting Apex model cost by roughly 95%.", "چطور هزینه LLM در Apex را حدود ۹۵ درصد پایین آوردم و محصول هم بهتر شد."),
    paragraphs: [
      t("The first version gave an expensive model too much responsibility. It received broad market context, performed much of the reasoning, and generated the explanation. The result could look intelligent while remaining expensive and difficult to reproduce.", "در نسخه اول کار زیادی را به یک مدل گران سپرده بودم. هم داده بازار را می‌گرفت، هم بخش بزرگی از تحلیل را انجام می‌داد و هم متن را می‌نوشت. خروجی هوشمند به نظر می‌رسید، اما گران بود و هر بار هم دقیقاً تکرار نمی‌شد."),
      t("The better architecture separated computation from communication. Python services now calculate market state, levels, conflicts, and risk. The LLM receives a compact evidence package and translates it into a consistent decision format.", "راه بهتر این بود که محاسبه را از توضیح جدا کنم. حالا سرویس‌های Python وضعیت بازار، سطوح، تناقض‌ها و ریسک را حساب می‌کنند. LLM فقط نتیجه آماده را می‌گیرد و آن را به زبان قابل فهم توضیح می‌دهد."),
      t("The change also made the system easier to test, trace, guard, and price. I now use an LLM for explanation and language tasks, while deterministic services handle calculations that need to be repeatable.", "این تغییر علاوه بر کاهش هزینه، تست، بررسی خطا و قیمت‌گذاری محصول را هم ساده‌تر کرد. حالا LLM را برای توضیح و تولید متن به کار می‌برم و محاسباتی را که باید قابل تکرار باشند به سرویس‌های مشخص می‌سپارم."),
    ],
  },
  {
    slug: "trust-is-a-product-cost",
    project: "vibe",
    published: "2026-08-12",
    updated: "2026-08-12",
    title: t("Designing trust and moderation in Vibe", "طراحی اعتماد و رسیدگی در Vibe"),
    lead: t("A review platform cannot outsource credibility to a verified badge.", "اعتماد در یک پلتفرم نظر با یک تیک تأیید ساخته نمی‌شود."),
    paragraphs: [
      t("Vibe was designed to help people make better local decisions through real experiences. That requires operational work: reports need triage, evidence needs privacy, businesses need a fair challenge path, and users need protection from retaliation.", "هدف Vibe این بود که افراد با استفاده از تجربه واقعی دیگران انتخاب بهتری داشته باشند. برای رسیدن به این هدف، گزارش‌ها باید بررسی شوند، مدارک خصوصی بمانند، کسب‌وکار امکان اعتراض منصفانه داشته باشد و کاربر هم در برابر فشار و تلافی محافظت شود."),
      t("KYC can add evidence, but it cannot become a wall. A real reviewer may value privacy; a verified account may still manipulate. Credibility therefore needs several signals, a human decision for consequential cases, and a way to appeal.", "KYC می‌تواند یک نشانه مثبت باشد، اما نباید تبدیل به دیوار ورود شود. کاربر واقعی ممکن است نخواهد مدرک بدهد و حساب تأییدشده هم می‌تواند تخلف کند. برای همین اعتبار باید از چند نشانه، بررسی انسانی در پرونده‌های مهم و امکان اعتراض ساخته شود."),
      t("The commercial boundary matters just as much. A paid business can buy analytics and better tools, but not a cleaner reputation, a different evidence standard, or a moderation outcome.", "مرز درآمدزایی هم باید روشن باشد. کسب‌وکار می‌تواند برای آمار و ابزار بهتر پول بدهد، اما اعتبار بیشتر، معیار متفاوت برای بررسی مدرک یا نتیجه رسیدگی نباید قابل خرید باشد."),
    ],
  },
  {
    slug: "roadmaps-are-layers",
    project: "vibe",
    published: "2026-08-12",
    updated: "2026-08-12",
    title: t("Layered roadmap prioritization in Vibe", "اولویت‌بندی لایه‌ای در نقشه راه Vibe"),
    lead: t("How I sequence core value, safety, operations, and monetization.", "چرا در Vibe بعضی قابلیت‌های جذاب را عمداً برای بعد گذاشتم."),
    paragraphs: [
      t("A roadmap becomes useful when it expresses dependency and value, not when it contains every good idea. For Vibe, reviews and business profiles were the core layer because no other feature mattered without credible local information.", "نقشه راه برای من فهرست همه ایده‌های خوب نیست. باید نشان بدهد کدام بخش پایه بخش بعدی است. در Vibe، نظر و پروفایل کسب‌وکار هسته بودند؛ چون بدون اطلاعات محلی قابل اعتماد، بقیه قابلیت‌ها ارزش زیادی نداشتند."),
      t("Trust and operations came next: identity, claims, support, moderation, and admin visibility. These systems protect the core loop and make public launch governable. Growth tools and richer discovery can then compound a system that is already usable and manageable.", "بعد از هسته سراغ اعتماد و عملیات رفتم: هویت، ادعای مالکیت، پشتیبانی، رسیدگی و پنل ادمین. این‌ها کمک می‌کنند محصول در لانچ عمومی قابل کنترل باشد. ابزار رشد وقتی معنا دارد که سیستم اصلی هم قابل استفاده باشد و هم قابل اداره."),
      t("Packages came last. Until the free product made its value visible, pricing would have been a guess about a product that did not yet exist. Layering prevented us from selling features before understanding what businesses would actually value.", "بسته‌های تجاری را آخر گذاشتم. تا وقتی ارزش نسخه اصلی برای کسب‌وکار روشن نبود، قیمت‌گذاری فقط حدس زدن درباره محصولی بود که هنوز خودش را ثابت نکرده بود. اول باید می‌فهمیدیم صاحب کسب‌وکار واقعاً برای چه چیزی حاضر است پول بدهد."),
    ],
  },
];

export const noteSlugs = notes.map(note => note.slug);
