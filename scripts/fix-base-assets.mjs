/**
 * Rewrites hardcoded absolute `/assets/...` references to sit under a base path.
 *
 * The app references public assets with absolute paths (e.g. "/assets/logo.png").
 * Vite's --base only rewrites asset references it manages (the entry bundle,
 * imported assets), not string literals baked into the JS. When deploying to a
 * subpath like GitHub Pages project sites (/advsigns/), those bare paths 404.
 *
 * Usage: node scripts/fix-base-assets.mjs /advsigns/
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";

const base = process.argv[2] || "/";
const baseNoSlash = base.replace(/\/+$/, "");
const DIST = "dist";
const EXTS = new Set([".js", ".html", ".css"]);

if (baseNoSlash === "") {
  console.log("Base is '/', nothing to rewrite.");
  process.exit(0);
}

const esc = baseNoSlash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Match bare /assets/ that is NOT already prefixed with the base.
const re = new RegExp(`(?<!${esc})/assets/`, "g");

let changed = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (EXTS.has(extname(p))) {
      const src = readFileSync(p, "utf8");
      const out = src.replace(re, `${baseNoSlash}/assets/`);
      if (out !== src) {
        writeFileSync(p, out);
        changed++;
      }
    }
  }
}

walk(DIST);
console.log(`Rewrote /assets/ -> ${baseNoSlash}/assets/ in ${changed} file(s).`);
