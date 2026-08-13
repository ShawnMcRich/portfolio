import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the English portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Shahin Ghanizadeh/);
  assert.match(html, /Technical Product Manager/);
  assert.match(html, /View projects/);
  assert.match(html, /Apex/);
  assert.match(html, /Vibe/);
  assert.match(html, /First Choice/);
  assert.match(html, /Hosseintalab/);
  assert.match(html, /MRM/);
  assert.match(html, /#shahin-ghanizadeh/);
  assert.match(html, /شاهین غنی‌زاده/);
  assert.match(html, /شاهین غنی زاده/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/shahinghanizadeh/);
  assert.match(html, /https:\/\/wa\.me\/989381011212/);
  assert.match(html, /Discuss a project/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the Persian portfolio", async () => {
  const response = await render("/fa");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /شاهین/);
  assert.match(html, /مدیر فنی محصول/);
  assert.match(html, /پروژه‌های منتخب/);
  assert.match(html, /انتخاب اول/);
  assert.match(html, /حسین‌طلب/);
  assert.match(html, /گفت‌وگو در واتساپ/);
  assert.match(html, /https:\/\/wa\.me\/989381011212/);
});

test("server-renders the English services page", async () => {
  const response = await render("/services");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Product, UX, and web development services/);
  assert.match(html, /Projects I can take responsibility for/);
  assert.match(html, /First Choice/);
  assert.match(html, /Discuss a project on WhatsApp/);
});

test("server-renders the Persian services page", async () => {
  const response = await render("/fa/services");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /مدیریت محصول، طراحی تجربه کاربر و توسعه وب/);
  assert.match(html, /کارهایی که می‌توانم مسئولیتشان را بر عهده بگیرم/);
  assert.match(html, /انتخاب اول/);
  assert.match(html, /گفت‌وگو درباره پروژه در واتساپ/);
});

test("server-renders a deep case study", async () => {
  const response = await render("/work/vibe");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Why this product exists/);
  assert.match(html, /The calls I had to make/);
  assert.match(html, /What you can inspect/);
  assert.match(html, /What I am not claiming/);
  assert.match(html, /Product case study and delivery by/);
  assert.match(html, /case-study-structured-data/);
  assert.match(html, /BreadcrumbList/);
});

test("server-renders an indexable English product note", async () => {
  const response = await render("/thinking/llm-should-do-less");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Reducing LLM cost in Apex/);
  assert.match(html, /By Shahin Ghanizadeh/);
  assert.match(html, /article-structured-data/);
  assert.match(html, /https:\/\/shahinghanizadeh\.ir\/thinking\/llm-should-do-less/);
  assert.match(html, /\/fa\/thinking\/llm-should-do-less/);
});

test("server-renders an indexable Persian product note", async () => {
  const response = await render("/fa/thinking/trust-is-a-product-cost");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /طراحی اعتماد و رسیدگی در Vibe/);
  assert.match(html, /نوشته شاهین غنی‌زاده/);
  assert.match(html, /article-structured-data/);
});

test("about page declares Shahin as the profile page subject", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /About Shahin Ghanizadeh/);
  assert.match(html, /ProfilePage/);
  assert.match(html, /profile-page-structured-data/);
  assert.match(html, /dateCreated\\?\":\\?\"2026-07-31T00:00:00\+03:30/);
  assert.match(html, /dateModified\\?\":\\?\"2026-08-13T00:00:00\+03:30/);
});

test("static deployment includes crawler-facing SEO files", async () => {
  const [sitemap, robots] = await Promise.all([
    readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/robots.txt", import.meta.url), "utf8"),
  ]);

  assert.match(sitemap, /<urlset/);
  assert.match(sitemap, /https:\/\/shahinghanizadeh\.ir\/work\/apex/);
  assert.match(sitemap, /https:\/\/shahinghanizadeh\.ir\/fa\/work\/apex/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.match(robots, /Sitemap: https:\/\/shahinghanizadeh\.ir\/sitemap\.xml/);
});

test("sitemap includes bilingual case studies and product notes", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.match(xml, /\/work\/apex/);
  assert.match(xml, /\/fa\/work\/apex/);
  assert.match(xml, /\/thinking\/llm-should-do-less/);
  assert.match(xml, /\/fa\/thinking\/llm-should-do-less/);
  assert.match(xml, /hreflang="x-default"/);
});

test("server-renders the launched Hossein Talab case study", async () => {
  const response = await render("/fa/work/hosseintalab");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /۲۰ فرش واقعی/);
  assert.match(html, /نمایش قیمت پیش از تماس/);
  assert.match(html, /https:\/\/hosseintalab\.ir/);
});
