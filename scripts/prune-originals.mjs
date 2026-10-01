// After `astro build`: drop the original JPEGs that the photo glob copies into
// dist/_astro but no page references (every <img> uses the WebP variants).
import { readdirSync, readFileSync, statSync, unlinkSync } from "fs";
import { join, resolve } from "path";
const dist = resolve(import.meta.dirname, "../dist");
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(dist);
const text = files.filter((f) => /\.(html|css|js|xml)$/.test(f)).map((f) => readFileSync(f, "utf-8")).join("\n");
let removed = 0, bytes = 0;
for (const f of files.filter((f) => /_astro\/.*\.jpe?g$/i.test(f))) {
  const name = f.slice(f.lastIndexOf("/") + 1);
  if (!text.includes(name)) { bytes += statSync(f).size; unlinkSync(f); removed++; }
}
console.log(`pruned ${removed} unreferenced originals (${(bytes / 1e6).toFixed(1)} MB)`);
