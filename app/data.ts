export type Locale = "en" | "fa";
export type ProjectSlug = "apex" | "vibe" | "first-choice" | "mrm";

type LocalizedText = { en: string; fa: string };
type Metric = { value: string; label: LocalizedText; note?: LocalizedText };
type Detail = { title: LocalizedText; body: LocalizedText; status?: "live" | "shipped" | "designed" };
type Evidence = { title: LocalizedText; body: LocalizedText; kind: LocalizedText };
type Image = { src: string; alt: LocalizedText; compact?: boolean };

export type Project = {
  slug: ProjectSlug;
  number: string;
  accent: "green" | "blue" | "red" | "amber";
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
    headline: t("Making market analysis decisive without asking an LLM to invent the analysis.", "تحلیل روشن و قابل استفاده، بدون اینکه تصمیم تحلیلی به حدس یک LLM سپرده شود."),
    deck: t(
      "Apex turns live, multi-source market data and years of trading logic into a structured read a person can understand in about 30 seconds.",
      "Apex داده زنده چندمنبعی و چند سال منطق تحلیلی را به گزارشی ساختاریافته تبدیل می کند که کاربر در حدود ۳۰ ثانیه می تواند آن را بفهمد."
    ),
    role: t("Founder · AI Product Manager · Product Designer · Full-stack builder", "بنیان گذار · مدیر محصول هوش مصنوعی · طراح محصول · توسعه دهنده تمام پشته"),
    team: t("Founder-led product with production infrastructure and paid users", "محصول بنیان گذارمحور با زیرساخت عملیاتی و کاربران پرداخت کننده"),
    cover: "/projects/apex/new/app-dashboard.jpg",
    links: [
      { label: t("Live product", "محصول فعال"), href: "https://apexpnl.com" },
      { label: t("GitHub", "گیت هاب"), href: "https://github.com/ShawnMcRich/CryptoSight" },
    ],
    metrics: [
      { value: "Live + paid", label: t("product taken from thesis to revenue", "محصول از ایده تا درآمد") },
      { value: "~95%", label: t("lower LLM cost", "کاهش هزینه LLM"), note: t("after deterministic preprocessing and model changes", "با پردازش قطعی داده و تغییر مدل") },
      { value: "4", label: t("asset classes", "کلاس دارایی") },
      { value: "~30 sec", label: t("analysis delivery", "زمان ارائه تحلیل") },
    ],
    context: t(
      "Traders can access endless indicators and opinions, but more input often creates less conviction. Generic chatbots can explain a chart, yet they lack the domain pipeline, live context, and deterministic checks needed for a repeatable market product.",
      "معامله گر به انبوهی از اندیکاتورها و تحلیل ها دسترسی دارد، اما ورودی بیشتر اغلب تصمیم را سخت تر می کند. چت بات عمومی می تواند نمودار را توضیح دهد، ولی برای ساخت یک محصول قابل تکرار به داده زنده، منطق تخصصی و کنترل های قطعی نیاز است."
    ),
    problem: t(
      "The product had to reduce analytical overload and emotional decision-making while keeping inference cost low enough for a credit-based business. It also had to explain uncertainty without presenting probabilistic output as financial certainty.",
      "محصول باید هم سردرگمی تحلیلی و تصمیم احساسی را کمتر می کرد و هم هزینه پردازش را برای مدل اعتباری کسب و کار پایین نگه می داشت. در عین حال باید عدم قطعیت را صادقانه نشان می داد، نه اینکه خروجی احتمالی را به شکل نتیجه قطعی مالی ارائه کند."
    ),
    users: t("Active traders, market analysts, and beginners who need a clearer second opinion before acting.", "معامله گرها، تحلیل گرها و کاربران تازه کاری که پیش از اقدام به یک نظر دوم روشن و ساختاریافته نیاز دارند."),
    northStar: t("A useful analysis is one that helps a user understand the setup, the risk, and the counter-case quickly enough to make a calmer decision.", "تحلیل زمانی ارزشمند است که کاربر بتواند موقعیت، ریسک و سناریوی مخالف را سریع بفهمد و با آرامش بیشتری تصمیم بگیرد."),
    constraints: [
      { title: t("Cost", "هزینه"), body: t("A premium model making every analytical decision made the unit economics fragile.", "وقتی یک مدل گران همه تصمیم های تحلیلی را می گرفت، اقتصاد هر تحلیل شکننده بود.") },
      { title: t("Control", "کنترل"), body: t("Raw-data prompting made output harder to reproduce, test, and guard against fabricated claims.", "ارسال مستقیم داده خام به مدل، تکرارپذیری، تست و جلوگیری از ادعاهای ساختگی را سخت می کرد.") },
      { title: t("Time", "سرعت"), body: t("Users needed a decisive read in seconds, not a research report that arrived after the moment passed.", "کاربر به نتیجه ای روشن در چند ثانیه نیاز داشت، نه گزارشی که بعد از گذشت فرصت آماده شود.") },
      { title: t("Responsibility", "مسئولیت"), body: t("The product had to support decisions without promising returns or hiding uncertainty.", "محصول باید به تصمیم کمک می کرد، بدون وعده سود یا پنهان کردن عدم قطعیت.") },
    ],
    phases: [
      { title: t("Build the analytical core", "ساخت هسته تحلیلی"), body: t("I converted years of Pine Script experiments and market logic into Python services that could process normalized live data.", "منطق بازار و آزمایش های چندساله Pine Script را به سرویس های Python تبدیل کردم تا داده زنده و یکدست را پردازش کنند."), status: "shipped" },
      { title: t("Structure before generation", "ساختار پیش از تولید متن"), body: t("The pipeline calculates signals, regimes, levels, conflicts, and risk first. The LLM receives evidence, not an open-ended chart-reading task.", "سیستم ابتدا سیگنال، وضعیت بازار، سطوح، تعارض ها و ریسک را محاسبه می کند. LLM به جای یک درخواست مبهم، شواهد آماده دریافت می کند."), status: "live" },
      { title: t("Design for the decision", "طراحی برای لحظه تصمیم"), body: t("Outputs lead with a verdict, confidence, why-now context, key levels, invalidation, and the strongest counter-case.", "خروجی با نتیجه، میزان اطمینان، دلیل اهمیت فعلی، سطوح کلیدی، شرایط نقض تحلیل و سناریوی مخالف شروع می شود."), status: "live" },
      { title: t("Monetize and retain", "درآمدزایی و بازگشت کاربر"), body: t("I introduced prepaid credits, a free trial, simplified analysis modes, daily grants, and targeted win-back communication.", "مدل اعتبار پیش پرداخت، دوره آزمایشی، دو حالت ساده تحلیل، اعتبار روزانه و ارتباط هدفمند برای بازگشت کاربر را طراحی و اجرا کردم."), status: "live" },
    ],
    decisions: [
      { title: t("Algorithms do the analysis; the LLM does the translation", "تحلیل با الگوریتم، توضیح با LLM"), body: t("This moved expensive reasoning out of the language layer, reduced cost by roughly 95%, and made failures easier to trace.", "با این تصمیم، پردازش سنگین از لایه زبانی خارج شد، هزینه حدود ۹۵ درصد کاهش پیدا کرد و پیدا کردن خطا ساده تر شد."), status: "live" },
      { title: t("Two modes instead of a wall of controls", "دو حالت روشن به جای تنظیمات زیاد"), body: t("The analysis builder was simplified to Standard and Forecast. Complexity still exists in the engine, but no longer becomes the user's burden.", "سازنده تحلیل به دو حالت استاندارد و پیش بینی ساده شد. پیچیدگی در موتور باقی ماند، اما دیگر به دوش کاربر نیست."), status: "live" },
      { title: t("Reserve inference for moments that create value", "استفاده از مدل فقط جایی که ارزش می سازد"), body: t("Always-on market content uses deterministic language generation; deeper paid analyses use the LLM. This removed about 80 redundant daily calls.", "محتوای روزانه بازار با تولید متن قطعی ساخته می شود و تحلیل عمیق از LLM استفاده می کند. نتیجه، حذف حدود ۸۰ فراخوانی تکراری روزانه بود."), status: "shipped" },
      { title: t("Build for emotional pressure, too", "طراحی برای فشار احساسی"), body: t("The Panic Button reframes an open position through risk, invalidation, and evidence when a user is most likely to act impulsively.", "دکمه پنیک در لحظه فشار، موقعیت باز را از زاویه ریسک، نقض تحلیل و شواهد دوباره بررسی می کند."), status: "live" },
    ],
    architecture: [
      { title: t("Acquire", "دریافت"), body: t("Market, macro, and event data from multiple APIs and exchanges." , "داده بازار، اقتصاد کلان و رویدادها از چند API و صرافی.") },
      { title: t("Normalize", "یکدست سازی"), body: t("Asset-aware timeframes, validation, caching, and source fallbacks.", "بازه های زمانی متناسب با دارایی، اعتبارسنجی، کش و منابع جایگزین.") },
      { title: t("Compute", "محاسبه"), body: t("Python algorithms calculate signals, levels, regimes, conflicts, and risk.", "الگوریتم های Python سیگنال، سطوح، وضعیت، تعارض و ریسک را محاسبه می کنند.") },
      { title: t("Explain", "توضیح"), body: t("A cost-optimized LLM turns structured evidence into a consistent decision format.", "یک LLM کم هزینه، شواهد ساختاریافته را به گزارش قابل فهم تبدیل می کند.") },
      { title: t("Deliver", "ارائه"), body: t("Celery and Redis run non-blocking jobs; React presents the result and credit usage.", "Celery و Redis پردازش را در پس زمینه انجام می دهند و React نتیجه و مصرف اعتبار را نمایش می دهد.") },
    ],
    scope: [
      t("Product thesis, positioning, roadmap, pricing, and launch", "تعریف محصول، جایگاه، نقشه راه، قیمت گذاری و لانچ"),
      t("Complete product UX, analysis flow, output hierarchy, and design system", "طراحی کامل تجربه، جریان تحلیل، ساختار خروجی و سیستم طراحی"),
      t("Market algorithms, Python services, prompt architecture, and guardrails", "الگوریتم های بازار، سرویس های Python، معماری پرامپت و گاردریل"),
      t("React and TypeScript frontend, APIs, infrastructure, billing, and production operations", "فرانت اند React و TypeScript، API، زیرساخت، پرداخت و عملیات محصول"),
      t("Instrumentation, retention experiments, incident fixes, and ongoing iteration", "اندازه گیری، آزمایش های بازگشت کاربر، رفع رخدادها و بهبود مستمر"),
    ],
    evidence: [
      { kind: t("Live product", "محصول فعال"), title: t("Working customer journey", "مسیر واقعی کاربر"), body: t("Account creation, credit purchase, analysis configuration, queued processing, structured result, and history are in production.", "ثبت نام، خرید اعتبار، تنظیم تحلیل، پردازش پس زمینه، نتیجه ساختاریافته و تاریخچه در نسخه عملیاتی وجود دارند.") },
      { kind: t("Repository", "مخزن کد"), title: t("Product decisions are visible in the system", "تصمیم های محصول در سیستم دیده می شوند"), body: t("The codebase contains the analysis engine, provider-aware AI service, usage logging, pricing, retention tasks, and explicit TODOs when a promise is not yet true.", "مخزن کد شامل موتور تحلیل، سرویس چندارائه دهنده هوش مصنوعی، ثبت مصرف، قیمت گذاری، بازگشت کاربر و حتی ثبت شفاف قابلیت های هنوز ساخته نشده است.") },
      { kind: t("Operations", "عملیات"), title: t("A product, not a prototype", "محصول، نه نمونه نمایشی"), body: t("FastAPI, PostgreSQL, Celery, Redis, Docker, Nginx, and Cloudflare support live delivery and paid usage.", "FastAPI، PostgreSQL، Celery، Redis، Docker، Nginx و Cloudflare از ارائه زنده و استفاده پولی پشتیبانی می کنند.") },
    ],
    outcome: t("Apex is live and monetized. Its strongest result is not simply adding AI; it is making AI smaller, cheaper, and more accountable inside a domain system.", "Apex فعال و درآمدزا است. مهم ترین نتیجه فقط افزودن هوش مصنوعی نیست؛ بلکه کوچک تر، کم هزینه تر و قابل کنترل کردن نقش آن در یک سیستم تخصصی است."),
    statusNote: t("Live capabilities are separated here from future ideas. Level-triggered email alerts, for example, remain documented but are not presented as shipped.", "قابلیت های فعال از ایده های آینده جدا شده اند. برای نمونه، هشدار ایمیلی بر اساس رسیدن قیمت به سطح مشخص هنوز در برنامه است و به عنوان قابلیت فعال معرفی نشده است."),
    lessons: [
      t("An LLM becomes more useful when the product gives it less ambiguity.", "هرچه ابهام ورودی کمتر باشد، LLM در محصول مفیدتر می شود."),
      t("Unit economics is a product design constraint, not a backend cleanup task.", "اقتصاد هر استفاده، بخشی از طراحی محصول است نه کاری برای بعد."),
      t("Advanced products can keep a sophisticated engine while offering a simple decision surface.", "محصول پیشرفته می تواند موتور پیچیده ای داشته باشد، اما سطح تصمیم را ساده نگه دارد."),
    ],
    images: [
      { src: "/projects/apex/new/marketing-home.jpg", alt: t("Apex public market dashboard", "داشبورد عمومی بازار Apex") },
      { src: "/projects/apex/new/analysis-builder.jpg", alt: t("Apex analysis builder", "سازنده تحلیل Apex") },
      { src: "/projects/apex/new/analysis-history.jpg", alt: t("Apex analysis history", "تاریخچه تحلیل Apex") },
      { src: "/projects/apex/new/credit-model.jpg", alt: t("Apex prepaid credit model", "مدل اعتبار پیش پرداخت Apex") },
    ],
  },
  vibe: {
    slug: "vibe",
    number: "02",
    accent: "blue",
    title: "Vibe",
    productType: t("Local discovery and reputation marketplace", "مارکت پلیس کشف و اعتبار کسب و کار"),
    period: t("2023-present", "۱۴۰۲ تا امروز"),
    stage: t("Pre-launch · Operationally prepared", "پیش از لانچ · آماده عملیات"),
    headline: t("Designing a review marketplace where trust is the product, not a badge added later.", "طراحی مارکت پلیس نظر و تجربه، با این نگاه که اعتماد خود محصول است، نه یک نشان تزئینی."),
    deck: t("Vibe helps people discover local businesses through accountable reviews while giving businesses a fair way to build and defend their reputation.", "Vibe به کاربران کمک می کند با نظرهای پاسخ گو کسب و کار محلی پیدا کنند و به کسب و کارها راهی منصفانه برای ساختن و دفاع از اعتبارشان می دهد."),
    role: t("Co-founder · Technical Product Lead · Senior Frontend Engineer · UX/UI Designer", "هم بنیان گذار · رهبر فنی محصول · توسعه دهنده ارشد فرانت اند · طراح تجربه و رابط کاربری"),
    team: t("Small cross-functional team across product, frontend, backend, and operations", "تیم کوچک چندتخصصی در محصول، فرانت اند، بک اند و عملیات"),
    cover: "/projects/vibe/new/business-dashboard.jpg",
    links: [{ label: t("GitHub", "گیت هاب"), href: "https://github.com/faraz-naeinian/vibe-frontend" }],
    metrics: [
      { value: "0→1", label: t("product, UX, and frontend ownership", "مالکیت محصول، تجربه و فرانت اند") },
      { value: "3 surfaces", label: t("customer, business, and admin operations", "کاربر، کسب و کار و عملیات ادمین") },
      { value: "Trust-first", label: t("identity, moderation, fairness, and AI quality", "هویت، رسیدگی، انصاف و کیفیت با هوش مصنوعی") },
      { value: "Pre-launch", label: t("QA and operational readiness", "آمادگی تست و عملیات") },
    ],
    context: t("People in Tehran lacked a regional source of truth for local businesses and often relied on influencers or scattered social content. Businesses, especially restaurants, cafes, and services, had no durable place where real customer value could compound into reputation.", "کاربران تهران برای شناخت کسب و کارهای محلی مرجع منطقه ای قابل اتکایی نداشتند و اغلب به اینفلوئنسرها یا محتوای پراکنده شبکه های اجتماعی وابسته بودند. کسب و کارها، به ویژه کافه، رستوران و خدمات، جایی نداشتند که تجربه واقعی مشتری به مرور برایشان اعتبار بسازد."),
    problem: t("A review marketplace has a cold start and a trust problem at the same time. Vibe needed a useful customer loop, a reason for businesses to participate, and moderation operations that did not silence genuine criticism or sell credibility to paying accounts.", "مارکت پلیس نظر هم زمان با مشکل شروع اولیه و اعتماد روبه رو است. Vibe به چرخه ای مفید برای کاربر، انگیزه ای برای حضور کسب و کار و عملیاتی نیاز داشت که نه نقد واقعی را حذف کند و نه اعتبار را به حساب های پولی بفروشد."),
    users: t("Consumers seeking better local value; business owners building reputation; moderators, support, and administrators protecting the system.", "کاربرانی که دنبال انتخاب بهتر هستند، صاحبان کسب و کار که اعتبار می سازند و تیم های رسیدگی، پشتیبانی و مدیریت که از سلامت سیستم محافظت می کنند."),
    northStar: t("More credible reviews. Each useful review improves discovery, gives the business actionable feedback, and makes the next customer's decision easier.", "نظرهای معتبر بیشتر. هر نظر مفید، کشف را بهتر می کند، به کسب و کار بازخورد می دهد و تصمیم مشتری بعدی را ساده تر می کند."),
    constraints: [
      { title: t("Cold start", "شروع اولیه"), body: t("No reviews means no discovery value; no audience means little reason for businesses to ask for reviews.", "بدون نظر، ارزش کشف شکل نمی گیرد و بدون مخاطب، کسب و کار هم انگیزه کمی برای گرفتن نظر دارد.") },
      { title: t("Trust without coercion", "اعتماد بدون اجبار"), body: t("KYC could add evidence, but forcing it would damage participation and exclude legitimate reviewers.", "احراز هویت می تواند مدرک اضافه کند، اما اجبار آن مشارکت را کم می کند و برخی کاربران واقعی را کنار می گذارد.") },
      { title: t("Fairness in both directions", "انصاف در هر دو جهت"), body: t("Users need protection from pressure; businesses need a structured route to challenge fabrication and conflicts of interest.", "کاربر باید از فشار در امان باشد و کسب و کار هم باید مسیر مشخصی برای اعتراض به جعل و تعارض منافع داشته باشد.") },
      { title: t("Small team", "تیم کوچک"), body: t("The roadmap had to sequence customer value, business tools, moderation, admin, and monetization without building every layer at once.", "نقشه راه باید ارزش کاربر، ابزار کسب و کار، رسیدگی، ادمین و درآمدزایی را مرحله بندی می کرد، نه اینکه همه چیز هم زمان ساخته شود.") },
    ],
    phases: [
      { title: t("Core value", "ارزش اصلی"), body: t("Business profiles, reviews, discovery, and a fast scan of core information, rating, and review summary.", "پروفایل کسب و کار، نظرها، کشف و مشاهده سریع اطلاعات اصلی، امتیاز و خلاصه نظرها."), status: "live" },
      { title: t("Trust and safety", "اعتماد و ایمنی"), body: t("Optional KYC, KYB, reviewer history, AI-assisted rating checks, reporting, anti-fraud signals, and human moderation.", "احراز هویت اختیاری، اعتبارسنجی کسب و کار، سابقه نویسنده، بررسی امتیاز با هوش مصنوعی، گزارش، نشانه های ضدتقلب و رسیدگی انسانی."), status: "shipped" },
      { title: t("Operations", "عملیات"), body: t("Admin queues, support, claims, evidence access, audit trails, risk states, and launch-day metrics.", "صف های مدیریتی، پشتیبانی، ادعاها، دسترسی به مدارک، سابقه تصمیم، وضعیت ریسک و شاخص های روز لانچ."), status: "shipped" },
      { title: t("Monetization", "درآمدزایی"), body: t("Business packages came last, after the team could define what businesses valued without making trust purchasable.", "بسته های تجاری در آخر وارد نقشه راه شدند؛ بعد از اینکه ارزش مورد انتظار کسب و کار روشن شد و بدون فروش اعتماد."), status: "designed" },
    ],
    decisions: [
      { title: t("Roadmap as layers", "نقشه راه لایه ای"), body: t("I sequenced the product from the core review loop outward: trust, operations, growth, then monetization. This kept dependencies visible and reduced premature feature work.", "محصول را از چرخه اصلی نظر به سمت اعتماد، عملیات، رشد و سپس درآمدزایی چیدم. این روش وابستگی ها را روشن کرد و جلوی ساخت زودهنگام قابلیت ها را گرفت."), status: "shipped" },
      { title: t("AI suggests; the user decides", "هوش مصنوعی پیشنهاد می دهد؛ کاربر تصمیم می گیرد"), body: t("If review tone and stars differ by more than one, Vibe explains a suggested rating. The original rating never changes without explicit consent.", "اگر لحن نظر و امتیاز بیش از یک ستاره فاصله داشته باشند، Vibe دلیل پیشنهاد خود را توضیح می دهد. امتیاز بدون تایید صریح کاربر تغییر نمی کند."), status: "shipped" },
      { title: t("Identity is evidence, not a verdict", "هویت مدرک است، نه حکم"), body: t("KYC is optional and clearly explained. Credibility also considers contribution history and suspicious patterns so privacy is not the price of being heard.", "احراز هویت اختیاری است و دلیل آن روشن توضیح داده می شود. سابقه مشارکت و الگوهای مشکوک هم در اعتبار نقش دارند تا شنیده شدن به قیمت از دست دادن حریم خصوصی نباشد."), status: "designed" },
      { title: t("Protect truth in both directions", "حفاظت از حقیقت در هر دو جهت"), body: t("The fairness constitution protects genuine reviews, lets businesses challenge fabrication with private evidence, keeps paid tiers away from moderation outcomes, and provides an appeal path.", "قواعد انصاف از نظر واقعی محافظت می کند، به کسب و کار اجازه می دهد با مدرک خصوصی به جعل اعتراض کند، پرداخت را از نتیجه رسیدگی جدا نگه می دارد و مسیر اعتراض فراهم می کند."), status: "designed" },
    ],
    architecture: [
      { title: t("Experience", "تجربه"), body: t("Responsive RTL customer and business experiences built from zero in React and TypeScript.", "تجربه واکنش گرا و راست چین کاربر و کسب و کار که از صفر با React و TypeScript ساخته شد.") },
      { title: t("Contracts", "قراردادها"), body: t("API handoffs define data, states, fallbacks, permissions, and acceptance conditions before backend implementation.", "اسناد API داده، وضعیت ها، رفتار جایگزین، دسترسی ها و شرایط پذیرش را پیش از اجرای بک اند مشخص می کنند.") },
      { title: t("Quality", "کیفیت"), body: t("Requirements are traced through manual, visual, and scripted QA, triaged from P0 to P2, fixed, and retested.", "نیازمندی ها با تست دستی، بصری و اسکریپتی ردیابی، از P0 تا P2 اولویت بندی، رفع و دوباره تست می شوند.") },
      { title: t("Moderation", "رسیدگی"), body: t("A single case model connects reports, evidence, human decisions, enforcement, appeals, and closure.", "یک پرونده واحد گزارش، مدرک، تصمیم انسانی، اجرا، اعتراض و بسته شدن را به هم متصل می کند.") },
      { title: t("Readiness", "آمادگی"), body: t("The admin surface is prepared to track conversion and operational metrics from day one of public launch.", "پنل مدیریت برای ردیابی تبدیل و شاخص های عملیاتی از روز اول لانچ عمومی آماده شده است.") },
    ],
    scope: [
      t("Core concept, customer problem, product strategy, layered roadmap, and prioritization", "ایده اصلی، مسئله کاربر، استراتژی محصول، نقشه راه لایه ای و اولویت بندی"),
      t("All customer and business UX/UI, RTL design system, and senior frontend delivery from zero", "تمام تجربه و رابط کاربر و کسب و کار، سیستم طراحی راست چین و اجرای فرانت اند از صفر"),
      t("Cross-functional sequencing and specifications for frontend, backend, admin, and operations", "هماهنگی و مشخصات اجرایی برای فرانت اند، بک اند، پنل مدیریت و عملیات"),
      t("AI review quality, KYC/KYB, claims, moderation, support, packages, and trust architecture", "کنترل کیفیت نظر با هوش مصنوعی، احراز هویت، ادعا، رسیدگی، پشتیبانی، بسته ها و معماری اعتماد"),
      t("QA strategy, P0-P2 triage, release audits, and pre-launch readiness", "برنامه تست، اولویت بندی P0 تا P2، بررسی انتشار و آمادگی پیش از لانچ"),
    ],
    evidence: [
      { kind: t("Product", "محصول"), title: t("Customer, business, and admin surfaces", "بخش کاربر، کسب و کار و ادمین"), body: t("The repository and screenshots show working profiles, discovery, reviews, identity flows, business tools, admin reporting, and moderation interfaces.", "مخزن و تصاویر، پروفایل، کشف، نظر، احراز هویت، ابزار کسب و کار، گزارش ادمین و رابط رسیدگی را نشان می دهند.") },
      { kind: t("Delivery", "اجرا"), title: t("Traceable cross-team work", "کار قابل ردیابی بین تیم ها"), body: t("Jira planning, Git history, backend handoffs, QA tracking, and acceptance criteria connect the idea to implementation and retesting.", "برنامه ریزی Jira، تاریخچه Git، اسناد بک اند، پیگیری تست و شرایط پذیرش، ایده را به اجرا و تست دوباره وصل می کنند.") },
      { kind: t("Governance", "حاکمیت"), title: t("Fairness and moderation artifacts", "اسناد انصاف و رسیدگی"), body: t("The product includes a written fairness constitution, credibility model, moderation lifecycle, and explicit boundaries between current and proposed systems.", "محصول دارای قواعد مکتوب انصاف، مدل اعتبار، چرخه رسیدگی و مرزبندی روشن میان سیستم فعلی و برنامه آینده است.") },
    ],
    outcome: t("Vibe has a substantial pre-launch foundation across product, design, frontend, backend handoffs, QA, and operations. The work proves launch readiness and product judgment, not public-market traction that has not happened yet.", "Vibe پیش از لانچ، زیرساخت گسترده ای در محصول، طراحی، فرانت اند، تحویل به بک اند، تست و عملیات دارد. این کار آمادگی و قضاوت محصول را نشان می دهد، نه کشش بازاری که هنوز بعد از لانچ باید سنجیده شود."),
    statusNote: t("The current product, deployed behavior, and future trust framework are intentionally separated. Proposed scoring details and private moderation weights are not published.", "محصول فعلی، رفتار نسخه عملیاتی و چارچوب آینده اعتماد عمدا از هم جدا شده اند. جزئیات امتیازدهی و وزن های داخلی رسیدگی نیز منتشر نمی شوند."),
    lessons: [
      t("Trust cannot be delegated to one badge, one score, or one identity check.", "اعتماد را نمی توان به یک نشان، یک امتیاز یا یک احراز هویت محدود کرد."),
      t("A two-sided marketplace needs operational design as early as interface design.", "مارکت پلیس دوسویه از همان ابتدا به طراحی عملیات به اندازه طراحی رابط نیاز دارد."),
      t("Monetization becomes clearer after the free core has proven what people value.", "وقتی ارزش هسته رایگان روشن شود، طراحی درآمدزایی هم دقیق تر می شود."),
    ],
    images: [
      { src: "/projects/vibe/new/discovery-home.jpg", alt: t("Vibe accountable review discovery", "صفحه کشف نظرهای پاسخ گو در Vibe") },
      { src: "/projects/vibe/new/ai-review-system.jpg", alt: t("Vibe AI-assisted rating check", "بررسی امتیاز نظر با هوش مصنوعی در Vibe") },
      { src: "/projects/vibe/new/identity-verification.jpg", alt: t("Vibe optional identity verification", "احراز هویت اختیاری در Vibe") },
      { src: "/projects/vibe/new/review-transparency.jpg", alt: t("Vibe reviewer transparency", "شفافیت نویسنده نظر در Vibe") },
      { src: "/projects/vibe/new/trust-layers.jpg", alt: t("Vibe trust layers", "لایه های اعتماد در Vibe") },
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
    headline: t("Turning a 38-year real-estate operation into one coherent multilingual product.", "تبدیل یک کسب و کار ۳۸ ساله املاک به محصولی یکپارچه و چندزبانه."),
    deck: t("A Tehran-focused property, content, lead, and operations platform for local customers, owners, agents, and international relocation clients.", "پلتفرم ملک، محتوا، سرنخ و عملیات برای مشتریان محلی، مالکان، کارشناسان و متقاضیان اسکان بین المللی در تهران."),
    role: t("Product Owner · Technical Lead · Full-stack builder", "مالک محصول · رهبر فنی · توسعه دهنده تمام پشته"),
    team: t("Direct collaboration with the real-estate operator and internal staff", "همکاری مستقیم با مدیر مجموعه و تیم داخلی املاک"),
    cover: "/projects/first-choice/homepage.jpg",
    links: [{ label: t("Live product", "محصول فعال"), href: "https://firstchoiceco.com" }],
    metrics: [
      { value: "38 years", label: t("of business knowledge turned into one product", "دانش کسب و کار در یک محصول یکپارچه") },
      { value: "3", label: t("fully designed languages", "زبان کامل محصول") },
      { value: "44", label: t("published property guides", "راهنمای منتشرشده املاک"), note: t("24 Persian, 10 English, 10 Arabic", "۲۴ فارسی، ۱۰ انگلیسی و ۱۰ عربی") },
      { value: "53 → 95", label: t("mobile Lighthouse performance", "عملکرد موبایل در Lighthouse") },
    ],
    context: t("First Choice has operated in Tehran since 1988, serving both local customers and diplomatic or corporate relocation needs. Its knowledge lived across staff, listings, calls, and an aging web presence rather than one product system.", "انتخاب اول از سال ۱۳۶۷ در تهران فعالیت دارد و به مشتریان محلی و نیازهای اسکان دیپلماتیک و شرکتی خدمات می دهد. دانش مجموعه میان کارکنان، فایل ها، تماس ها و وب سایت قدیمی پراکنده بود و یک سیستم محصول یکپارچه وجود نداشت."),
    problem: t("The platform had to serve different languages, transaction models, privacy expectations, and operational roles without becoming three translated brochures. Public discovery and internal dossier data also needed a hard boundary.", "پلتفرم باید زبان ها، مدل های معامله، انتظارهای حریم خصوصی و نقش های عملیاتی مختلف را پوشش می داد، بدون اینکه فقط سه بروشور ترجمه شده باشد. در عین حال اطلاعات عمومی ملک باید کاملا از پرونده داخلی جدا می ماند."),
    users: t("Persian-speaking buyers and renters; English- and Arabic-speaking relocation clients; property owners; agents; and internal staff managing listings and leads.", "خریدار و مستاجر فارسی زبان، مشتریان انگلیسی و عربی زبان اسکان، مالکان، کارشناسان و کارکنانی که فایل و سرنخ را مدیریت می کنند."),
    northStar: t("A qualified property conversation: help the right audience find relevant inventory, understand it, and reach the team with enough context to act.", "گفت وگوی باکیفیت درباره ملک: مخاطب درست، فایل مرتبط را پیدا کند، اطلاعاتش را بفهمد و با زمینه کافی با تیم تماس بگیرد."),
    constraints: [
      { title: t("Three real audiences", "سه مخاطب واقعی"), body: t("Persian, English, and Arabic journeys differ in priorities and services; localization could not stop at copy translation.", "مسیر فارسی، انگلیسی و عربی اولویت ها و خدمات متفاوتی دارند؛ بومی سازی نمی توانست به ترجمه متن محدود شود.") },
      { title: t("Privacy", "حریم خصوصی"), body: t("Internal owner details, exact location clues, and staff notes must remain searchable for operations but invisible publicly.", "نام و اطلاعات مالک، نشانی دقیق و یادداشت های داخلی باید برای تیم قابل جست وجو و برای عموم کاملا پنهان باشد.") },
      { title: t("Market-specific data", "داده متناسب با بازار"), body: t("Iranian property transactions require distinct deposit, rent, sale, and short-term structures plus Persian calendar and phone behavior.", "معاملات املاک ایران به ساختار جدا برای ودیعه، اجاره، فروش و کوتاه مدت و همچنین تقویم و شماره تلفن بومی نیاز دارد.") },
      { title: t("Shared production host", "سرور عملیاتی مشترک"), body: t("Deployment had to avoid risky in-place builds and coexist with other live services on a constrained Ubuntu host.", "استقرار باید بدون ساخت مستقیم روی سرور و در کنار سرویس های فعال دیگر روی یک میزبان محدود انجام می شد.") },
    ],
    phases: [
      { title: t("Model the operation", "مدل کردن عملیات"), body: t("I mapped public listings, staff dossiers, owner submissions, buyer requests, valuation, leads, and international enquiries into one domain model.", "فایل عمومی، پرونده داخلی، سپردن ملک، درخواست خریدار، ارزیابی، سرنخ و درخواست بین المللی را در یک مدل دامنه کنار هم قرار دادم."), status: "live" },
      { title: t("Design each language as a product", "طراحی هر زبان به عنوان محصول"), body: t("The Persian experience supports the local market; English and Arabic emphasize relocation, privacy, and assisted service rather than cloning every page.", "نسخه فارسی بازار محلی را پوشش می دهد و نسخه انگلیسی و عربی به جای کپی همه صفحات، اسکان، حریم خصوصی و خدمات همراه را جلوتر می آورند."), status: "live" },
      { title: t("Create the internal operating surface", "ساخت ابزار داخلی"), body: t("A Persian-first admin lets staff manage properties, people, leads, submissions, media, and private dossiers without developer help.", "پنل فارسی به کارکنان اجازه می دهد ملک، اشخاص، سرنخ، درخواست ها، رسانه و پرونده های خصوصی را بدون کمک توسعه دهنده مدیریت کنند."), status: "live" },
      { title: t("Build durable discovery", "ساخت کشف پایدار"), body: t("Search, neighborhood pages, structured data, guides, FAQs, IndexNow, and clean sitemaps create useful entry points beyond paid traffic.", "جست وجو، صفحات محله، داده ساختاریافته، راهنما، پرسش های پرتکرار، IndexNow و نقشه سایت تمیز، ورودی پایدار فراتر از تبلیغات می سازند."), status: "live" },
    ],
    decisions: [
      { title: t("Neighborhood pins, not exact coordinates", "نمایش محله به جای مختصات دقیق"), body: t("Public maps provide enough geographic context to compare areas without exposing a private home or an owner's operational data.", "نقشه عمومی اطلاعات کافی برای مقایسه محله می دهد، بدون اینکه خانه خصوصی یا اطلاعات عملیاتی مالک را آشکار کند."), status: "live" },
      { title: t("Separate inventory by audience", "تفکیک فایل بر اساس مخاطب"), body: t("Local and foreign-facing inventory can differ because language, lease expectations, furnishing, and relocation needs are not interchangeable.", "فایل مناسب مخاطب محلی و خارجی می تواند متفاوت باشد، چون زبان، قرارداد، مبله بودن و نیاز اسکان یکسان نیست."), status: "live" },
      { title: t("Keep the dossier private by architecture", "حریم پرونده در معماری"), body: t("Owner contacts, source notes, and internal location clues live in staff-only fields and are excluded from public listing queries.", "تماس مالک، یادداشت منبع و جزئیات داخلی مکان در فیلدهای مخصوص کارکنان نگهداری و از پرس وجوی عمومی حذف می شوند."), status: "live" },
      { title: t("Performance before decorative weight", "عملکرد پیش از تزئین"), body: t("Selective prefetching, caching, image work, and rendering changes moved mobile Lighthouse performance from 53 to 95 and LCP from 9.6 to 2.8 seconds.", "با پیش بارگذاری انتخابی، کش، بهینه سازی تصویر و اصلاح رندر، عملکرد موبایل از ۵۳ به ۹۵ و LCP از ۹.۶ به ۲.۸ ثانیه رسید."), status: "shipped" },
    ],
    architecture: [
      { title: t("Public discovery", "کشف عمومی"), body: t("Localized home, search, listing, map, guide, and service journeys.", "صفحه اصلی، جست وجو، فایل، نقشه، راهنما و خدمات برای هر زبان.") },
      { title: t("Lead intake", "دریافت سرنخ"), body: t("Property request, owner submission, valuation, contact, and diplomatic enquiry forms.", "فرم درخواست ملک، سپردن ملک، ارزیابی، تماس و درخواست بین المللی.") },
      { title: t("Operations", "عملیات"), body: t("Persian admin for listings, people, leads, media, private dossiers, and publishing.", "پنل فارسی برای فایل، اشخاص، سرنخ، رسانه، پرونده خصوصی و انتشار.") },
      { title: t("Discovery infrastructure", "زیرساخت کشف"), body: t("Structured data, multilingual metadata, sitemaps, IndexNow, guides, and FAQs.", "داده ساختاریافته، متادیتای چندزبانه، نقشه سایت، IndexNow، راهنما و پرسش های پرتکرار.") },
      { title: t("Production", "عملیات فنی"), body: t("Locally built standalone Next.js bundle, Nginx routing, externalized secrets, and documented deployment.", "باندل مستقل Next.js که محلی ساخته می شود، مسیریابی Nginx، اسرار خارج از کد و استقرار مستند.") },
    ],
    scope: [
      t("Product discovery with the business owner, service model, roadmap, and domain decisions", "کشف محصول با مدیر کسب و کار، مدل خدمت، نقشه راه و تصمیم های دامنه"),
      t("Complete UX and full-stack implementation across public and admin experiences", "طراحی کامل تجربه و اجرای تمام پشته برای بخش عمومی و پنل مدیریت"),
      t("Persian, English, and Arabic product localization", "بومی سازی کامل محصول در فارسی، انگلیسی و عربی"),
      t("Property search, map behavior, lead flows, private dossiers, content workflow, SEO, and analytics", "جست وجوی ملک، نقشه، سرنخ، پرونده خصوصی، جریان محتوا، سئو و تحلیل"),
      t("Performance optimization, production deployment, monitoring, and operational documentation", "بهینه سازی عملکرد، استقرار، پایش و مستندسازی عملیات"),
    ],
    evidence: [
      { kind: t("Live product", "محصول فعال"), title: t("Three product experiences", "سه تجربه محصول"), body: t("The live site presents Persian, English, and Arabic journeys with market-specific services, content, forms, and metadata.", "سایت فعال، مسیر فارسی، انگلیسی و عربی را با خدمات، محتوا، فرم و متادیتای متناسب ارائه می کند.") },
      { kind: t("Decision record", "سابقه تصمیم"), title: t("Architecture decisions with consequences", "تصمیم معماری همراه با پیامد"), body: t("Written ADRs cover audience separation, map privacy, transaction fields, private dossier boundaries, server validation, and production deployment.", "ADRهای مکتوب، تفکیک مخاطب، حریم نقشه، فیلدهای معامله، مرز پرونده خصوصی، اعتبارسنجی سرور و استقرار را ثبت کرده اند.") },
      { kind: t("Measured delivery", "اجرای قابل اندازه گیری"), title: t("Performance and content results", "نتیجه عملکرد و محتوا"), body: t("The project records Lighthouse and LCP improvements, a clean crawl, multilingual guides, FAQs, and publishing workflows instead of relying on visual claims alone.", "پروژه بهبود Lighthouse و LCP، خزش تمیز، راهنماهای چندزبانه، پرسش های پرتکرار و جریان انتشار را ثبت کرده است." ) },
    ],
    outcome: t("First Choice is a live operating system for a real-estate business, not only a redesigned website. It connects public discovery, private operations, multilingual service, content, and qualified lead capture.", "انتخاب اول فقط بازطراحی وب سایت نیست؛ یک سیستم عملیاتی فعال برای کسب و کار املاک است که کشف عمومی، عملیات خصوصی، خدمات چندزبانه، محتوا و دریافت سرنخ را به هم وصل می کند."),
    statusNote: t("Performance figures are from the project's recorded Lighthouse work. Search growth and conversion outcomes should be evaluated over time and are not overstated here.", "اعداد عملکرد از بررسی ثبت شده Lighthouse آمده اند. رشد جست وجو و تبدیل به زمان بیشتری برای اندازه گیری نیاز دارد و در اینجا بزرگ نمایی نشده است."),
    lessons: [
      t("Localization is a product architecture decision when audiences have different needs.", "وقتی نیاز مخاطبان فرق دارد، بومی سازی یک تصمیم معماری محصول است."),
      t("Operational privacy is strongest when enforced by the data model, not staff memory.", "حریم عملیاتی وقتی قوی است که در مدل داده اجرا شود، نه اینکه به حافظه کارکنان وابسته باشد."),
      t("A business website creates more value when it also improves internal work.", "وب سایت کسب و کار زمانی ارزش بیشتری می سازد که کار داخلی را هم بهتر کند."),
    ],
    images: [
      { src: "/projects/first-choice/homepage.jpg", alt: t("First Choice Persian homepage", "صفحه اصلی فارسی انتخاب اول") },
      { src: "/projects/first-choice/diplomatic.jpg", alt: t("English international relocation experience", "تجربه انگلیسی خدمات اسکان بین المللی") },
      { src: "/projects/first-choice/search.jpg", alt: t("Tehran property search and filtering", "جست وجو و فیلتر ملک در تهران") },
    ],
  },
  mrm: {
    slug: "mrm",
    number: "04",
    accent: "amber",
    title: "MRM",
    productType: t("Business continuity messenger", "پیام رسان تداوم کسب و کار"),
    period: t("2026", "۱۴۰۵"),
    stage: t("Internal · Used during shutdown", "داخلی · استفاده شده هنگام قطعی"),
    headline: t("Keeping a company coordinated when the public internet stopped working.", "ادامه هماهنگی یک شرکت زمانی که اینترنت عمومی از دسترس خارج شد."),
    deck: t("A self-hosted, offline-ready company messenger designed and deployed during wartime connectivity shutdowns.", "پیام رسان خودمیزبان و آماده قطعی که هنگام اختلال اینترنت در شرایط جنگ طراحی و راه اندازی شد."),
    role: t("Product Owner · Designer · Engineer · Operator", "مالک محصول · طراح · توسعه دهنده · مسئول عملیات"),
    team: t("Built for and adopted by an approximately 40-person company", "ساخته شده برای یک شرکت حدود ۴۰ نفره و استفاده شده توسط همان تیم"),
    links: [{ label: t("GitHub", "گیت هاب"), href: "https://github.com/ShawnMcRich/MRM" }],
    metrics: [
      { value: "~40 people", label: t("kept coordinating during the shutdown", "در دوره قطعی به هماهنگی ادامه دادند") },
      { value: "Built in crisis", label: t("scoped, implemented, and deployed under pressure", "تعریف، ساخت و راه اندازی زیر فشار") },
      { value: "Self-hosted", label: t("designed around restricted infrastructure", "طراحی شده برای زیرساخت محدود") },
      { value: "Real adoption", label: t("used until normal connectivity returned", "استفاده واقعی تا بازگشت اینترنت") },
    ],
    context: t("During the first days of war in Iran, normal internet access disappeared. The company could no longer depend on its cloud communication tools, and work slowed because coordination itself had become unavailable.", "در روزهای اول جنگ در ایران، دسترسی معمول اینترنت از بین رفت. شرکت دیگر نمی توانست به ابزارهای ارتباطی ابری متکی باشد و کار به این دلیل کند شد که خود هماهنگی در دسترس نبود."),
    problem: t("The team did not need a new social platform. It needed a familiar, deployable communication path that could survive blocked registries, unreachable CDNs, intermittent connectivity, and limited operational support.", "تیم به یک شبکه اجتماعی جدید نیاز نداشت. به مسیر ارتباطی آشنا و قابل راه اندازی نیاز داشت که با رجیستری بسته، CDN خارج از دسترس، اتصال ناپایدار و نیروی عملیاتی محدود کار کند."),
    users: t("Employees and managers who needed direct and group coordination, file exchange, presence, and reliable message recovery during disruption.", "کارکنان و مدیرانی که هنگام اختلال به گفت وگوی مستقیم و گروهی، تبادل فایل، وضعیت حضور و بازیابی مطمئن پیام نیاز داشتند."),
    northStar: t("Essential coordination continues even when external infrastructure does not.", "هماهنگی ضروری حتی زمانی که زیرساخت خارجی در دسترس نیست ادامه پیدا کند."),
    constraints: [
      { title: t("No reliable international network", "شبکه بین المللی ناپایدار"), body: t("Package registries, CDN assets, and cloud platforms could not be assumed available.", "رجیستری بسته ها، فایل های CDN و پلتفرم های ابری قابل اتکا نبودند.") },
      { title: t("Urgent adoption", "پذیرش فوری"), body: t("People needed to understand the product immediately, with no training program and little tolerance for novelty.", "کاربر باید بدون دوره آموزشی و در زمان کم، ابزار را فوری می فهمید.") },
      { title: t("Intermittent connectivity", "اتصال مقطعی"), body: t("Short outages could not lose the conversation or leave outgoing messages in an unknown state.", "قطعی کوتاه نباید گفت وگو را از بین می برد یا وضعیت پیام خروجی را نامشخص می گذاشت.") },
      { title: t("Low operational overhead", "عملیات ساده"), body: t("The application and database needed to run on company-managed infrastructure without a cloud platform or globally installed process manager.", "برنامه و پایگاه داده باید بدون پلتفرم ابری یا مدیر فرایند نصب شده از اینترنت، روی زیرساخت خود شرکت اجرا می شدند.") },
    ],
    phases: [
      { title: t("Reduce to the essential workflow", "کاهش مسئله به مسیر ضروری"), body: t("I scoped direct and group messaging, files, delivery state, presence, and admin approval before secondary customization.", "گفت وگوی مستقیم و گروهی، فایل، وضعیت تحویل، حضور و تایید مدیر را پیش از قابلیت های فرعی در محدوده قرار دادم."), status: "shipped" },
      { title: t("Remove external runtime dependencies", "حذف وابستگی اجرایی خارجی"), body: t("Browser libraries are served locally; production dependencies are bundled; bootstrap can select reachable domestic Ubuntu mirrors.", "کتابخانه های مرورگر محلی ارائه می شوند، وابستگی های محصول همراه پروژه هستند و راه اندازی می تواند مخزن Ubuntu در دسترس را انتخاب کند."), status: "live" },
      { title: t("Make interruption recoverable", "قابل بازیابی کردن قطعی"), body: t("IndexedDB caches conversations, outgoing messages queue locally, and reconnection synchronizes state.", "IndexedDB گفت وگو را ذخیره می کند، پیام خروجی محلی در صف می ماند و اتصال دوباره وضعیت را همگام می کند."), status: "live" },
      { title: t("Deploy and support real use", "راه اندازی و پشتیبانی استفاده واقعی"), body: t("The system was installed on internal infrastructure and used by around 40 people until normal connectivity returned.", "سیستم روی زیرساخت داخلی راه افتاد و حدود ۴۰ نفر تا بازگشت اتصال معمول از آن استفاده کردند."), status: "shipped" },
    ],
    decisions: [
      { title: t("Familiar interaction over novelty", "تعامل آشنا به جای نوآوری نمایشی"), body: t("The interface follows established messenger behavior because pressured users needed confidence, not a new mental model.", "رابط از الگوی شناخته شده پیام رسان پیروی می کند، چون کاربر زیر فشار به اطمینان نیاز دارد نه مدل ذهنی تازه."), status: "live" },
      { title: t("A conventional self-hosted stack", "پشته متعارف و خودمیزبان"), body: t("Node, Express, Socket.IO, MongoDB, Nginx, and systemd kept the runtime understandable and recoverable on company infrastructure.", "Node، Express، Socket.IO، MongoDB، Nginx و systemd محیط اجرا را روی زیرساخت شرکت قابل فهم و بازیابی نگه داشتند."), status: "live" },
      { title: t("Offline-ready, not offline-fiction", "آماده قطعی، نه وعده آفلاین کامل"), body: t("Local caching and pending queues handle short interruptions; the product does not pretend real-time communication can work with no reachable network path at all.", "کش محلی و صف پیام، قطعی کوتاه را پوشش می دهند؛ محصول ادعا نمی کند ارتباط لحظه ای بدون هیچ مسیر شبکه ممکن است."), status: "live" },
      { title: t("Private deployment boundary", "مرز استقرار خصوصی"), body: t("MRM is positioned for company-managed infrastructure and explicitly requires security review before any public exposure.", "MRM برای زیرساخت مدیریت شده شرکت تعریف شده و پیش از هر دسترسی عمومی به بررسی امنیت مستقل نیاز دارد."), status: "shipped" },
    ],
    architecture: [
      { title: t("Browser/PWA", "مرورگر و PWA"), body: t("Framework-free client, locally served libraries, IndexedDB, service worker, and push.", "کلاینت بدون فریم ورک، کتابخانه محلی، IndexedDB، سرویس ورکر و اعلان.") },
      { title: t("Local network", "شبکه محلی"), body: t("HTTPS and WebSocket communication through Nginx without a public SaaS dependency.", "ارتباط HTTPS و WebSocket از طریق Nginx بدون وابستگی به SaaS عمومی.") },
      { title: t("Application", "برنامه"), body: t("A Node and Express service exposes REST APIs; Socket.IO handles real-time events.", "سرویس Node و Express، API را ارائه می دهد و Socket.IO رویدادهای لحظه ای را مدیریت می کند.") },
      { title: t("Persistence", "ذخیره سازی"), body: t("A self-hosted MongoDB instance stores records; a local file store handles shared media and documents.", "MongoDB خودمیزبان رکوردها را نگه می دارد و فایل ها و رسانه در فضای محلی ذخیره می شوند.") },
      { title: t("Operations", "عملیات"), body: t("Systemd, bundled dependencies, mirror selection, and Nginx keep deployment recoverable.", "Systemd، وابستگی های همراه، انتخاب مخزن و Nginx استقرار را قابل بازیابی نگه می دارند.") },
    ],
    scope: [
      t("Emergency problem framing, prioritization, interaction design, and implementation", "تعریف مسئله اضطراری، اولویت بندی، طراحی تعامل و اجرا"),
      t("Real-time messaging, presence, delivery/read state, reactions, replies, files, and groups", "پیام لحظه ای، حضور، وضعیت تحویل و خواندن، واکنش، پاسخ، فایل و گروه"),
      t("Offline queueing, local cache, reconnection sync, PWA, and push notifications", "صف آفلاین، کش محلی، همگام سازی اتصال دوباره، PWA و اعلان"),
      t("Self-hosted deployment, network-aware bootstrap, admin approval, and adoption support", "استقرار خودمیزبان، راه اندازی متناسب با شبکه، تایید مدیر و پشتیبانی پذیرش"),
    ],
    evidence: [
      { kind: t("Real use", "استفاده واقعی"), title: t("Adopted during the disruption", "استفاده هنگام اختلال"), body: t("About 40 people used MRM as an operational fallback through the shutdown until normal internet access returned.", "حدود ۴۰ نفر در دوره قطعی تا بازگشت اینترنت معمول از MRM به عنوان ابزار عملیاتی جایگزین استفاده کردند.") },
      { kind: t("Repository", "مخزن کد"), title: t("Resilience is implemented", "تاب آوری در کد اجرا شده است"), body: t("Bundled dependencies, local assets, mirror testing, systemd, offline queues, IndexedDB, and reconnect behavior are present in the working repository.", "وابستگی همراه، فایل محلی، تست مخزن، systemd، صف آفلاین، IndexedDB و رفتار اتصال دوباره در مخزن واقعی وجود دارند.") },
      { kind: t("Boundary", "مرزبندی"), title: t("Claims match the architecture", "ادعا متناسب با معماری"), body: t("The project describes where it is resilient and where it still needs a reachable internal network and independent security review.", "پروژه روشن می کند در چه بخش هایی تاب آور است و در چه بخش هایی هنوز به شبکه داخلی و بررسی مستقل امنیت نیاز دارد.") },
    ],
    outcome: t("MRM kept essential coordination available for an approximately 40-person company during shutdown conditions. Its value came from fitting the constraint quickly, not from maximizing feature count.", "MRM در دوره قطعی، هماهنگی ضروری یک شرکت حدود ۴۰ نفره را حفظ کرد. ارزش آن از حل سریع محدودیت واقعی آمد، نه از زیاد کردن تعداد قابلیت ها."),
    statusNote: t("MRM is an internal continuity tool, not a publicly audited secure messenger. Its case study is about product judgment, deployment resilience, and real adoption under constraint.", "MRM ابزار داخلی تداوم کار است، نه پیام رسان عمومی با ممیزی امنیت. این کیس استادی بر قضاوت محصول، تاب آوری استقرار و استفاده واقعی زیر محدودیت تمرکز دارد."),
    lessons: [
      t("In a crisis, the best roadmap is the shortest route back to essential work.", "در بحران، بهترین نقشه راه کوتاه ترین مسیر برای بازگشت کار ضروری است."),
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
    title: t("Founder & AI Product Manager", "بنیان گذار و مدیر محصول هوش مصنوعی"),
    company: "Apex",
    summary: t("Built and operate a live, monetized market-intelligence product across strategy, algorithms, UX, engineering, pricing, and production.", "ساخت و مدیریت محصول فعال تحلیل بازار از استراتژی، الگوریتم و تجربه کاربری تا مهندسی، قیمت گذاری و عملیات."),
  },
  {
    period: t("2023-present", "۱۴۰۲ تا امروز"),
    title: t("Co-founder & Technical Product Lead", "هم بنیان گذار و رهبر فنی محصول"),
    company: "Vibe",
    summary: t("Defined the product, designed the full RTL experience, built the frontend, and led cross-functional delivery and launch readiness.", "تعریف محصول، طراحی کامل تجربه راست چین، ساخت فرانت اند و هدایت اجرای بین تیمی و آمادگی لانچ."),
  },
  {
    period: t("2020-2024", "۱۳۹۹ تا ۱۴۰۳"),
    title: t("Founder & Managing Director", "بنیان گذار و مدیر اجرایی"),
    company: "Monorro",
    summary: t("Led a software-services company across client discovery, scoping, proposals, delivery coordination, quality, and executive operations.", "مدیریت شرکت خدمات نرم افزاری در کشف نیاز مشتری، محدوده پروژه، پیشنهاد، هماهنگی تحویل، کیفیت و عملیات اجرایی."),
  },
  {
    period: t("2019-2023", "۱۳۹۸ تا ۱۴۰۲"),
    title: t("Product Creator & Operator", "سازنده و مدیر محصول"),
    company: "MonoCoin",
    summary: t("Built a paid signal and automation product using Pine Script, TradingView webhooks, Telegram, and Cornix for 300+ paying members and a 13,000+ audience.", "ساخت محصول اشتراکی سیگنال و خودکارسازی با Pine Script، وب هوک TradingView، تلگرام و Cornix برای بیش از ۳۰۰ عضو پرداخت کننده و جامعه بیش از ۱۳ هزار نفر."),
  },
  {
    period: t("2016-2021", "۱۳۹۵ تا ۱۴۰۰"),
    title: t("Frontend Engineer & Product Contributor", "توسعه دهنده فرانت اند و همکار محصول"),
    company: "The Pol / Beshknow · Independent",
    summary: t("Built web experiences and contributed product and UX thinking to an in-store music platform, client products, and independent market-analysis tools.", "ساخت تجربه های وب و مشارکت در محصول و تجربه کاربری پلتفرم موسیقی داخل فروشگاه، پروژه های مشتری و ابزارهای مستقل تحلیل بازار."),
  },
];

export const notes = [
  {
    slug: "llm-should-do-less",
    title: t("When an LLM should do less", "چه زمانی LLM باید کار کمتری انجام دهد"),
    lead: t("A product lesson from cutting Apex model cost by roughly 95%.", "درس محصول از کاهش حدود ۹۵ درصدی هزینه مدل در Apex."),
    paragraphs: [
      t("The first version gave an expensive model too much responsibility. It received broad market context, performed much of the reasoning, and generated the explanation. The result could look intelligent while remaining expensive and difficult to reproduce.", "در نسخه اول، مسئولیت زیادی به یک مدل گران داده شده بود. مدل زمینه گسترده بازار را دریافت می کرد، بخش زیادی از تحلیل را انجام می داد و توضیح را هم می نوشت. خروجی هوشمند به نظر می رسید، اما گران و سخت برای تکرار بود."),
      t("The better architecture separated computation from communication. Python services now calculate market state, levels, conflicts, and risk. The LLM receives a compact evidence package and translates it into a consistent decision format.", "معماری بهتر، محاسبه را از توضیح جدا کرد. سرویس های Python وضعیت بازار، سطوح، تعارض و ریسک را محاسبه می کنند. LLM یک بسته کوچک از شواهد می گیرد و آن را به قالب ثابت تصمیم تبدیل می کند."),
      t("The product result was not only lower cost. The system became easier to test, trace, guard, and price. The lesson is simple: use an LLM where language and judgment create value, not where deterministic code is cheaper and more accountable.", "نتیجه فقط کاهش هزینه نبود. تست، ردیابی، کنترل و قیمت گذاری سیستم ساده تر شد. درس روشن است: از LLM جایی استفاده کنید که زبان و قضاوت ارزش می سازد، نه جایی که کد قطعی ارزان تر و پاسخ گوتر است."),
    ],
  },
  {
    slug: "trust-is-a-product-cost",
    title: t("Trust is a product cost", "اعتماد برای محصول هزینه دارد"),
    lead: t("A review platform cannot outsource credibility to a verified badge.", "پلتفرم نظر نمی تواند اعتبار را فقط به یک نشان تاییدشده بسپارد."),
    paragraphs: [
      t("Vibe began with a simple promise: help people make better local decisions through real experiences. That promise immediately creates operational work. Reports need triage. Evidence needs privacy. Businesses need a fair challenge path. Users need protection from retaliation.", "Vibe با وعده ساده ای شروع شد: کمک به تصمیم بهتر محلی با تجربه واقعی. همین وعده بلافاصله کار عملیاتی می سازد. گزارش باید بررسی شود، مدرک باید خصوصی بماند، کسب و کار باید مسیر اعتراض منصفانه داشته باشد و کاربر باید از فشار در امان باشد."),
      t("KYC can add evidence, but it cannot become a wall. A real reviewer may value privacy; a verified account may still manipulate. Credibility therefore needs several signals, a human decision for consequential cases, and a way to appeal.", "احراز هویت می تواند مدرک اضافه کند، اما نباید دیوار ورود باشد. کاربر واقعی ممکن است حریم خصوصی بخواهد و حساب تاییدشده هم ممکن است تخلف کند. پس اعتبار به چند نشانه، تصمیم انسانی در پرونده مهم و مسیر اعتراض نیاز دارد."),
      t("The commercial boundary matters just as much. A paid business can buy analytics and better tools. It cannot buy a cleaner reputation, a different evidence standard, or a moderation outcome. If trust is the value, this restraint is part of the product cost.", "مرز تجاری به همان اندازه مهم است. کسب و کار پولی می تواند تحلیل و ابزار بهتر بخرد، اما نباید اعتبار بهتر، معیار مدرک متفاوت یا نتیجه رسیدگی بخرد. اگر اعتماد ارزش محصول است، این محدودیت بخشی از هزینه ساخت آن است."),
    ],
  },
  {
    slug: "roadmaps-are-layers",
    title: t("Roadmaps are layers, not wish lists", "نقشه راه لایه است، نه فهرست آرزوها"),
    lead: t("How I sequence core value, safety, operations, and monetization.", "روش من برای چیدن ارزش اصلی، ایمنی، عملیات و درآمدزایی."),
    paragraphs: [
      t("A roadmap becomes useful when it expresses dependency and value, not when it contains every good idea. For Vibe, reviews and business profiles were the core layer because no other feature mattered without credible local information.", "نقشه راه زمانی مفید است که وابستگی و ارزش را نشان دهد، نه اینکه همه ایده های خوب را در خود جا دهد. در Vibe، نظر و پروفایل کسب و کار هسته بودند، چون بدون اطلاعات معتبر محلی هیچ قابلیت دیگری ارزش کافی نداشت."),
      t("Trust and operations came next: identity, claims, support, moderation, and admin visibility. These systems protect the core loop and make public launch governable. Growth tools and richer discovery can then compound a system that is already usable and manageable.", "بعد از هسته، اعتماد و عملیات قرار گرفت: هویت، ادعا، پشتیبانی، رسیدگی و دید مدیریتی. این سیستم ها از چرخه اصلی محافظت می کنند و لانچ عمومی را قابل مدیریت می سازند. سپس ابزار رشد و کشف بهتر می تواند روی پایه سالم ساخته شود."),
      t("Packages came last. Until the free product made its value visible, pricing would have been a guess about a product that did not yet exist. Layering prevented us from selling features before understanding what businesses would actually value.", "بسته های تجاری در آخر قرار گرفتند. تا وقتی محصول رایگان ارزش خود را نشان نداده بود، قیمت گذاری حدس درباره چیزی بود که هنوز شکل نگرفته بود. لایه بندی جلوی فروش قابلیت پیش از فهم ارزش واقعی برای کسب و کار را گرفت."),
    ],
  },
];
