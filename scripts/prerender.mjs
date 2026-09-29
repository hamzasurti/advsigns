/**
 * Post-build prerendering script.
 *
 * After `vite build` produces dist/, this script:
 * 1. Starts a local static server on the dist directory
 * 2. Uses Puppeteer to visit each route
 * 3. Waits for React to render + hooks to set meta tags & structured data
 * 4. Captures the full rendered HTML
 * 5. Saves as dist/[route]/index.html (or dist/index.html for /)
 *
 * This ensures crawlers see fully rendered HTML with correct titles,
 * meta descriptions, canonical URLs, OG tags, and JSON-LD structured data.
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, extname } from "path";
import puppeteer from "puppeteer";

const DIST = resolve("dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/public-works",
  "/services",
  "/about",
  "/contact",
  "/portfolio",
  "/testimonials",
  "/signs/construction",
  "/signs/building",
  "/signs/ada",
  "/signs/lobby",
  "/signs/vehicle-wraps",
  "/signs/wall-graphics",
  "/signs/laser-engraving",
];

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".mp4": "video/mp4",
};

function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "/index.html" : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolvePromise(server);
    });
  });
}

async function prerender() {
  console.log("Starting prerender...\n");

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Rendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Wait a bit for React effects (usePageMeta, useStructuredData) to run
    await page.waitForFunction(() => {
      // Check that the title has been set by usePageMeta (not the default index.html title)
      return document.title && !document.title.startsWith("Advanced Sign & Banner |");
    }, { timeout: 10000 }).catch(() => {
      // Homepage title starts with the base pattern, so this check may timeout for /
      // That's fine — the page is still rendered
    });

    // Small extra delay for structured data scripts to inject
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();
    await page.close();

    // Determine output path
    let outPath;
    if (route === "/") {
      outPath = join(DIST, "index.html");
    } else {
      const dir = join(DIST, route.slice(1));
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      outPath = join(dir, "index.html");
    }

    writeFileSync(outPath, html, "utf-8");
    console.log(`  -> Saved ${outPath}`);
  }

  await browser.close();
  server.close();
  console.log("\nPrerender complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
