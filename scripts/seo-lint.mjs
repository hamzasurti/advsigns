#!/usr/bin/env node

/**
 * SEO lint. Builds the site and checks dist/, so it tests what visitors and
 * crawlers actually get rather than the source.
 * Exit 0 = pass, 1 = errors.
 */

import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { resolve, join, relative } from "path";
import { execSync } from "child_process";

const ROOT = resolve(import.meta.dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITE = "https://advsigns.net";

const errors = [], warnings = [], pass = [];
const error = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const ok = (m) => pass.push(m);

/* Always lint a fresh build; it takes about a second. */
try { execSync("npx astro build", { cwd: ROOT, stdio: "ignore" }); } catch { console.error("astro build failed"); process.exit(1); }
if (!existsSync(DIST)) { console.error("dist/ is missing after the build"); process.exit(1); }

/* Every page that should be public, with the ceilings for its title and description. */
const PUBLIC_ROUTES = [
  "/", "/public-works", "/services", "/about", "/contact", "/portfolio", "/testimonials",
  "/signs/street", "/signs/building", "/signs/ada", "/signs/lobby",
  "/signs/vehicle-wraps", "/signs/wall-graphics", "/signs/laser-engraving",
];
const REDIRECTS = { "/signs/construction": "/signs/street", "/government-services": "/public-works" };
const TITLE_MAX = 60;
const DESC_MAX = 155;

const fileFor = (route) => join(DIST, route === "/" ? "index.html" : `${route}.html`);
const html = (route) => readFileSync(fileFor(route), "utf-8");
const meta = (src, attr, key) => {
  const m = src.match(new RegExp(`<meta[^>]*${attr}="${key}"[^>]*content="([^"]*)"`)) || src.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${key}"`));
  return m ? m[1] : null;
};
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');

// ─── Pages ─────────────────────────────────────────────────────────
console.log("--- Pages ---");
const titles = new Map(), descs = new Map();
for (const route of PUBLIC_ROUTES) {
  if (!existsSync(fileFor(route))) { error(`${route}: not built`); continue; }
  const src = html(route);
  const title = decode((src.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = decode(meta(src, "name", "description") || "");
  const canonical = (src.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!title) error(`${route}: missing <title>`);
  else if (title.length > TITLE_MAX) error(`${route}: title is ${title.length} chars (max ${TITLE_MAX}): ${title}`);
  else if (titles.has(title)) error(`${route}: title duplicates ${titles.get(title)}`);
  else { titles.set(title, route); ok(`${route}: title ${title.length} chars`); }
  if (!desc) error(`${route}: missing description`);
  else if (desc.length > DESC_MAX) error(`${route}: description is ${desc.length} chars (max ${DESC_MAX})`);
  else if (descs.has(desc)) error(`${route}: description duplicates ${descs.get(desc)}`);
  else { descs.set(desc, route); ok(`${route}: description ${desc.length} chars`); }
  const want = `${SITE}${route}`;
  if (canonical !== want) error(`${route}: canonical is ${canonical}, want ${want}`);
  else ok(`${route}: canonical`);
  const h1s = (src.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) error(`${route}: ${h1s} <h1> tags`); else ok(`${route}: one h1`);
  if (/<meta name="robots" content="noindex"/.test(src)) error(`${route}: public page is noindex`);
  if (!meta(src, "property", "og:title")) error(`${route}: missing og:title`);
  if (!meta(src, "property", "og:image")) error(`${route}: missing og:image`);
  const ld = [...src.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (ld.length === 0) error(`${route}: no JSON-LD`);
  for (const [, json] of ld) { try { JSON.parse(json); } catch { error(`${route}: JSON-LD does not parse`); } }
  if (ld.length) ok(`${route}: ${ld.length} JSON-LD block(s) parse`);
}

// ─── Structured data details ───────────────────────────────────────
console.log("\n--- Structured data ---");
const home = html("/");
const business = [...home.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])).find((d) => d["@type"] === "LocalBusiness");
if (!business) error("home: no LocalBusiness JSON-LD");
else {
  ok("LocalBusiness present");
  if (business["@id"]) ok("LocalBusiness has @id"); else error("LocalBusiness missing @id");
  if (!business.hasCredential?.every((c) => typeof c === "object")) error("hasCredential entries must be objects");
  for (const county of ["Los Angeles", "Ventura", "Orange", "San Bernardino", "Riverside", "Santa Barbara"]) {
    if (JSON.stringify(business.areaServed || "").includes(`${county} County`)) ok(`areaServed includes ${county} County`);
    else warn(`areaServed may be missing ${county} County`);
  }
}
for (const [route, want] of [["/public-works", "Service"], ["/public-works", "FAQPage"], ["/services", "Service"], ["/testimonials", "AggregateRating"]]) {
  if (html(route).includes(`"@type":"${want}"`)) ok(`${route}: has ${want}`); else error(`${route}: missing ${want} JSON-LD`);
}

// ─── Redirects, 404, sitemap, robots ───────────────────────────────
console.log("\n--- Redirects, 404, sitemap, robots ---");
for (const [from, to] of Object.entries(REDIRECTS)) {
  const f = fileFor(from);
  if (!existsSync(f)) { error(`${from}: redirect page not built`); continue; }
  const src = readFileSync(f, "utf-8");
  if (src.includes(`url=${to}`) || src.includes(`href="${to}"`)) ok(`${from} → ${to}`); else error(`${from}: does not redirect to ${to}`);
}
const nf = join(DIST, "404.html");
if (!existsSync(nf)) error("404.html missing");
else {
  const src = readFileSync(nf, "utf-8");
  if (/<meta name="robots" content="noindex"/.test(src)) ok("404 is noindex"); else error("404 is not noindex");
  if (/rel="canonical"/.test(src)) error("404 claims a canonical URL"); else ok("404 has no canonical");
}
const sitemapIndex = join(DIST, "sitemap-index.xml");
if (!existsSync(sitemapIndex)) error("sitemap-index.xml missing");
else {
  const urls = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f)).map((f) => readFileSync(join(DIST, f), "utf-8")).join("");
  for (const route of PUBLIC_ROUTES) {
    if (urls.includes(`<loc>${SITE}${route}</loc>`)) ok(`sitemap has ${route}`); else error(`sitemap missing ${route}`);
  }
  if (urls.includes("/404")) error("sitemap lists the 404 page");
  for (const from of Object.keys(REDIRECTS)) if (urls.includes(`${SITE}${from}<`)) error(`sitemap lists redirect ${from}`);
}
const robots = join(DIST, "robots.txt");
if (!existsSync(robots)) error("robots.txt missing");
else if (readFileSync(robots, "utf-8").includes("Sitemap: https://advsigns.net/sitemap-index.xml")) ok("robots.txt points at the sitemap index");
else error("robots.txt must point at https://advsigns.net/sitemap-index.xml");
if (existsSync(join(DIST, "CNAME"))) ok("CNAME present"); else warn("CNAME missing (needed for the custom domain on GitHub Pages)");

// ─── Footer and phone ──────────────────────────────────────────────
console.log("\n--- Footer, phone, local ---");
for (const literal of ["818-346-2142", "Chatsworth", "91311"]) {
  if (home.includes(literal)) ok(`home has ${literal}`); else error(`home is missing "${literal}"`);
}
if (home.includes('href="tel:818-346-2142"')) ok("tel: link present"); else error("no tel:818-346-2142 link");
if (/geo\.region/.test(home)) ok("geo meta present"); else error("geo meta missing");
if (!/San Fernando Valley|Burbank|Glendale|Pasadena/.test(home)) warn("footer: no service-area city names for local SEO");

// ─── Assets ─────────────────────────────────────────────────────────
console.log("\n--- Assets ---");
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const big = walk(DIST).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f) && statSync(f).size > 600_000);
if (big.length) warn(`${big.length} image(s) over 600 KB: ${big.slice(0, 3).map((f) => relative(DIST, f)).join(", ")}${big.length > 3 ? "…" : ""}`);
else ok("no image over 600 KB");

// ─── Report ─────────────────────────────────────────────────────────
console.log(`\n${"=".repeat(50)}\nSEO LINT RESULTS\n${"=".repeat(50)}`);
console.log(`  PASS:     ${pass.length}\n  WARNINGS: ${warnings.length}\n  ERRORS:   ${errors.length}\n${"=".repeat(50)}`);
if (warnings.length) { console.log("\nWARNINGS:"); for (const w of warnings) console.log(`  ⚠  ${w}`); }
if (errors.length) { console.log("\nERRORS:"); for (const e of errors) console.log(`  ✗  ${e}`); process.exit(1); }
console.log("\nAll SEO checks passed!");
