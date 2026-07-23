#!/usr/bin/env node

/**
 * SEO Linter — runs fast pre-commit checks on the advsigns codebase.
 * Catches the most impactful SEO regressions before they ship.
 *
 * Exit code 0 = pass, 1 = failures found.
 */

import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const read = (rel) => readFileSync(resolve(ROOT, rel), "utf-8");
const exists = (rel) => existsSync(resolve(ROOT, rel));

const errors = [];
const warnings = [];
const pass = [];

function error(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }
function ok(msg) { pass.push(msg); }

// ─── Helpers ────────────────────────────────────────────────────────

/** Extract the usePageMeta({...}) call content from source */
function extractPageMeta(src) {
  const start = src.indexOf("usePageMeta(");
  if (start === -1) return null;
  // Find the opening { after usePageMeta(
  const braceStart = src.indexOf("{", start);
  if (braceStart === -1) return null;
  // Count braces to find closing }
  let depth = 0;
  for (let i = braceStart; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") { depth--; if (depth === 0) return src.slice(braceStart, i + 1); }
  }
  return null;
}

const PAGE_FILES = [
  "src/pages/Home.tsx",
  "src/pages/GovernmentServices.tsx",
  "src/pages/Services.tsx",
  "src/pages/About.tsx",
  "src/pages/Contact.tsx",
  "src/pages/Portfolio.tsx",
  "src/pages/Testimonials.tsx",
];

const PUBLIC_ROUTES = [
  "/",
  "/public-works",
  "/services",
  "/about",
  "/contact",
  "/portfolio",
  "/testimonials",
];

const BRAND_SUFFIX = " | Advanced Sign & Banner"; // 25 chars
const MAX_TITLE_TOTAL = 60;
const MAX_DESC = 155;
const MAX_TITLE_PROP = MAX_TITLE_TOTAL - BRAND_SUFFIX.length; // 35

const GEO_KEYWORDS = [
  "chatsworth", "los angeles", "san fernando", "southern california",
  "ventura", "la county", "la ", "socal", "california",
];

const SIGN_KEYWORDS = [
  "sign", "signs", "signage", "banner",
];

// ─── 1. Title Tags ──────────────────────────────────────────────────
console.log("\n--- Title Tags ---");
const titles = [];

for (const file of PAGE_FILES) {
  const src = read(file);
  const meta = extractPageMeta(src);
  if (!meta) {
    error(`${file}: Missing usePageMeta() call`);
    continue;
  }
  const m = meta.match(/title:\s*["'`]([^"'`]+)["'`]/);
  if (!m) {
    error(`${file}: Missing title in usePageMeta()`);
    continue;
  }
  const title = m[1];
  const full = `${title}${BRAND_SUFFIX}`;
  titles.push({ file, title, full });

  if (full.length > MAX_TITLE_TOTAL) {
    error(`${file}: Title "${full}" is ${full.length} chars (max ${MAX_TITLE_TOTAL})`);
  } else {
    ok(`${file}: Title OK (${full.length} chars)`);
  }

  const lower = title.toLowerCase();
  if (!SIGN_KEYWORDS.some((kw) => lower.includes(kw)) && !file.includes("NotFound")) {
    warn(`${file}: Title "${title}" has no sign/signage keyword`);
  }
}

// Check for duplicate titles
const titleValues = titles.map((t) => t.full);
const dupes = titleValues.filter((t, i) => titleValues.indexOf(t) !== i);
if (dupes.length > 0) {
  error(`Duplicate titles found: ${dupes.join(", ")}`);
} else {
  ok("No duplicate titles");
}

// ─── 2. Meta Descriptions ───────────────────────────────────────────
console.log("\n--- Meta Descriptions ---");
const descs = [];

for (const file of PAGE_FILES) {
  const src = read(file);
  const meta = extractPageMeta(src);
  if (!meta) continue; // already reported in title check
  const m = meta.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (!m) {
    // Multi-line description
    const m2 = meta.match(/description:\s*\n\s*["'`]([^"'`]+)["'`]/);
    if (!m2) {
      error(`${file}: Missing description in usePageMeta()`);
      continue;
    }
    descs.push({ file, desc: m2[1] });
    if (m2[1].length > MAX_DESC) {
      error(`${file}: Description is ${m2[1].length} chars (max ${MAX_DESC})`);
    } else {
      ok(`${file}: Description OK (${m2[1].length} chars)`);
    }
    continue;
  }
  const desc = m[1];
  descs.push({ file, desc });

  if (desc.length > MAX_DESC) {
    error(`${file}: Description is ${desc.length} chars (max ${MAX_DESC})`);
  } else {
    ok(`${file}: Description OK (${desc.length} chars)`);
  }
}

// Check for duplicates
const descValues = descs.map((d) => d.desc);
const descDupes = descValues.filter((d, i) => descValues.indexOf(d) !== i);
if (descDupes.length > 0) {
  error(`Duplicate descriptions found`);
} else {
  ok("No duplicate descriptions");
}

// ─── 3. H1 Tags ─────────────────────────────────────────────────────
console.log("\n--- H1 Tags ---");
const SLOGAN_PATTERNS = [
  /^excellence/i, /^built on/i, /^our work$/i, /^let'?s build/i,
  /^client testimonials$/i, /^get started/i, /^welcome/i,
];

for (const file of PAGE_FILES) {
  const src = read(file);
  const h1Matches = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g);

  if (!h1Matches) {
    // Check for multi-line H1 pattern in JSX
    const h1Content = src.match(/<h1[^>]*>\s*\n\s*(.*?)\s*\n\s*<\/h1>/);
    if (!h1Content) {
      error(`${file}: No <h1> tag found`);
      continue;
    }
    const text = h1Content[1].trim();
    const lower = text.toLowerCase();

    if (SLOGAN_PATTERNS.some((p) => p.test(text))) {
      error(`${file}: H1 "${text}" is a generic slogan — needs keywords`);
    } else if (!SIGN_KEYWORDS.some((kw) => lower.includes(kw)) && !GEO_KEYWORDS.some((kw) => lower.includes(kw))) {
      warn(`${file}: H1 "${text}" has no sign or geo keyword`);
    } else {
      ok(`${file}: H1 OK — "${text}"`);
    }
    continue;
  }

  if (h1Matches.length > 1) {
    warn(`${file}: Multiple H1 tags found (${h1Matches.length})`);
  }
}

// ─── 4. Structured Data (index.html) ────────────────────────────────
console.log("\n--- Structured Data (index.html) ---");
const indexHtml = read("index.html");

if (indexHtml.includes('"@type": "SignShop"') || indexHtml.includes('"@type":"SignShop"')) {
  error("index.html: Uses @type SignShop — should be LocalBusiness");
} else if (indexHtml.includes("LocalBusiness")) {
  ok("index.html: Uses @type LocalBusiness");
}

if (indexHtml.includes('"@id"')) {
  ok("index.html: Has @id on main entity");
} else {
  error("index.html: Missing @id on main LocalBusiness entity");
}

if (indexHtml.includes("EducationalOccupationalCredential")) {
  ok("index.html: hasCredential uses proper objects");
} else if (indexHtml.includes("hasCredential")) {
  error("index.html: hasCredential should use EducationalOccupationalCredential objects, not strings");
}

if (indexHtml.includes("BreadcrumbList")) {
  warn("index.html: Contains static BreadcrumbList — should be per-page or removed");
}

if (indexHtml.match(/<link\s+rel="canonical"\s+href="/)) {
  error("index.html: Has hardcoded static canonical URL — usePageMeta should handle this dynamically");
}

// Check areaServed counties
const REQUIRED_COUNTIES = ["Los Angeles", "Ventura", "Orange", "San Bernardino", "Riverside", "Santa Barbara"];
for (const county of REQUIRED_COUNTIES) {
  if (indexHtml.includes(county)) {
    ok(`index.html: areaServed includes ${county} County`);
  } else {
    warn(`index.html: areaServed may be missing ${county} County`);
  }
}

// ─── 5. Per-Page Structured Data ────────────────────────────────────
console.log("\n--- Per-Page Structured Data ---");
const structuredDataChecks = [
  { file: "src/pages/GovernmentServices.tsx", schemas: ["useStructuredData"], label: "Public Works" },
  { file: "src/pages/Services.tsx", schemas: ["useStructuredData"], label: "Services" },
  { file: "src/pages/Testimonials.tsx", schemas: ["useStructuredData"], label: "Testimonials" },
];

for (const { file, label } of structuredDataChecks) {
  const src = read(file);
  if (src.includes("useStructuredData")) {
    ok(`${file}: Has useStructuredData (${label})`);
  } else {
    error(`${file}: Missing useStructuredData (${label})`);
  }
}

// Check for duplicate LocalBusiness on Contact
const contactSrc = read("src/pages/Contact.tsx");
if (contactSrc.includes('"@type": "LocalBusiness"') || contactSrc.includes('"@type":"LocalBusiness"')) {
  warn("Contact.tsx: Has its own LocalBusiness schema — may duplicate index.html");
}

// Check provider uses @id reference (not inline LocalBusiness)
for (const file of ["src/pages/GovernmentServices.tsx", "src/pages/Services.tsx"]) {
  const src = read(file);
  if (src.includes('"@id": "https://advsigns.net/#business"') || src.includes('"@id":"https://advsigns.net/#business"')) {
    ok(`${file}: Provider uses @id reference`);
  } else if (src.includes("useStructuredData") && src.includes('"provider"')) {
    warn(`${file}: Provider may be duplicating LocalBusiness instead of using @id reference`);
  }
}

// FAQ on Public Works
const govSrc = read("src/pages/GovernmentServices.tsx");
if (govSrc.includes("FAQPage") || govSrc.includes("faq")) {
  ok("GovernmentServices.tsx: Has FAQ structured data");
} else {
  warn("GovernmentServices.tsx: Missing FAQ structured data");
}

// AggregateRating on Testimonials
const testSrc = read("src/pages/Testimonials.tsx");
if (testSrc.includes("AggregateRating") || testSrc.includes("aggregateRating")) {
  ok("Testimonials.tsx: Has AggregateRating");
} else {
  warn("Testimonials.tsx: Missing AggregateRating structured data");
}

// ─── 6. Sitemap ─────────────────────────────────────────────────────
console.log("\n--- Sitemap ---");
if (!exists("public/sitemap.xml")) {
  error("public/sitemap.xml: File missing");
} else {
  const sitemap = read("public/sitemap.xml");
  for (const route of PUBLIC_ROUTES) {
    const url = route === "/" ? "https://advsigns.net/" : `https://advsigns.net${route}`;
    if (sitemap.includes(url)) {
      ok(`sitemap.xml: Contains ${url}`);
    } else {
      error(`sitemap.xml: Missing ${url}`);
    }
  }
  if (sitemap.includes("<lastmod>")) {
    ok("sitemap.xml: Has lastmod dates");
  } else {
    error("sitemap.xml: Missing lastmod dates");
  }
}

// ─── 7. Robots.txt ──────────────────────────────────────────────────
console.log("\n--- Robots.txt ---");
if (!exists("public/robots.txt")) {
  error("public/robots.txt: File missing");
} else {
  const robots = read("public/robots.txt");
  if (robots.includes("Sitemap:")) {
    ok("robots.txt: Has Sitemap directive");
  } else {
    error("robots.txt: Missing Sitemap directive");
  }
}

// ─── 8. Prerendering ────────────────────────────────────────────────
console.log("\n--- Prerendering ---");
if (!exists("scripts/prerender.mjs")) {
  error("scripts/prerender.mjs: File missing — prerendering not configured");
} else {
  const prerender = read("scripts/prerender.mjs");
  for (const route of PUBLIC_ROUTES) {
    if (prerender.includes(`"${route}"`)) {
      ok(`prerender.mjs: Contains route ${route}`);
    } else {
      error(`prerender.mjs: Missing route ${route}`);
    }
  }
}

const pkg = read("package.json");
if (pkg.includes("prerender")) {
  ok("package.json: Build script includes prerender step");
} else {
  error("package.json: Build script missing prerender step");
}

// ─── 9. 404 noindex ─────────────────────────────────────────────────
console.log("\n--- 404 Page ---");
if (exists("src/pages/NotFound.tsx")) {
  const nf = read("src/pages/NotFound.tsx");
  if (nf.includes("noindex")) {
    ok("NotFound.tsx: Has noindex meta");
  } else {
    warn("NotFound.tsx: Missing noindex meta tag");
  }
}

// ─── 10. Footer checks ─────────────────────────────────────────────
console.log("\n--- Footer ---");
if (exists("src/components/Footer.tsx")) {
  const footer = read("src/components/Footer.tsx");
  if (footer.includes("818-346-2142")) {
    ok("Footer.tsx: Contains phone number");
  } else {
    error("Footer.tsx: Missing phone number");
  }
  if (footer.includes("Chatsworth") && footer.includes("91311")) {
    ok("Footer.tsx: Contains full address");
  } else {
    error("Footer.tsx: Missing address");
  }
  const cityNames = ["Burbank", "Glendale", "Woodland Hills", "Northridge", "Pasadena"];
  const hasCities = cityNames.some((c) => footer.includes(c));
  if (hasCities) {
    ok("Footer.tsx: Contains service area city names");
  } else {
    warn("Footer.tsx: Missing service area city names for local SEO");
  }
}

// ─── 11. Phone CTA on pages ────────────────────────────────────────
console.log("\n--- Phone CTAs ---");
const PAGES_NEEDING_PHONE = [
  "src/pages/Services.tsx",
  "src/pages/About.tsx",
  "src/pages/Portfolio.tsx",
  "src/pages/GovernmentServices.tsx",
];
for (const file of PAGES_NEEDING_PHONE) {
  const src = read(file);
  if (src.includes("818-346-2142")) {
    ok(`${file}: Has phone CTA`);
  } else {
    warn(`${file}: No phone number in page body`);
  }
}

// ─── 12. Geo meta tags ─────────────────────────────────────────────
console.log("\n--- Geo Meta Tags ---");
const GEO_TAGS = ["geo.region", "geo.placename", "geo.position", "ICBM"];
for (const tag of GEO_TAGS) {
  if (indexHtml.includes(tag)) {
    ok(`index.html: Has ${tag}`);
  } else {
    error(`index.html: Missing ${tag} meta tag`);
  }
}

// ─── Results ────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(50));
console.log(`SEO LINT RESULTS`);
console.log("=".repeat(50));
console.log(`  PASS:     ${pass.length}`);
console.log(`  WARNINGS: ${warnings.length}`);
console.log(`  ERRORS:   ${errors.length}`);
console.log("=".repeat(50));

if (warnings.length > 0) {
  console.log("\nWARNINGS:");
  warnings.forEach((w) => console.log(`  ⚠  ${w}`));
}

if (errors.length > 0) {
  console.log("\nERRORS:");
  errors.forEach((e) => console.log(`  ✗  ${e}`));
  console.log(`\n${errors.length} SEO error(s) found. Fix before committing.`);
  process.exit(1);
}

console.log("\nAll SEO checks passed!");
process.exit(0);
