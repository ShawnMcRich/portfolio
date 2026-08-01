import assert from "node:assert/strict";
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
  assert.match(html, /See what I built/);
  assert.match(html, /Apex/);
  assert.match(html, /Vibe/);
  assert.match(html, /First Choice/);
  assert.match(html, /MRM/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the Persian portfolio", async () => {
  const response = await render("/fa");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /شاهین/);
  assert.match(html, /مدیر فنی محصول/);
  assert.match(html, /چند محصولی که ساخته‌ام/);
  assert.match(html, /انتخاب اول/);
});

test("server-renders a deep case study", async () => {
  const response = await render("/work/vibe");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Why this product exists/);
  assert.match(html, /The calls I had to make/);
  assert.match(html, /What you can inspect/);
  assert.match(html, /What I am not claiming/);
});
