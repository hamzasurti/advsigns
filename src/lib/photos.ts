import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/*
  Every photo under src/assets/photos, keyed by the path the content layer
  uses ("/assets/live/x.jpg"), with WebP variants built by Astro. Server only:
  the Astro pages call this and hand the map to the React views as a prop.
*/
export interface PhotoSource { src: string; srcSet: string; width: number; height: number }
export type PhotoMap = Record<string, PhotoSource>;

const files = import.meta.glob<ImageMetadata>("../assets/photos/**/*.jpg", { eager: true, import: "default" });
let cache: PhotoMap | null = null;

/* The whole map, or only the photos a page shows (keeps island props small). */
export async function photoSources(only?: string[]): Promise<PhotoMap> {
  const all = await allPhotos();
  if (!only) return all;
  return Object.fromEntries(only.filter((k) => all[k]).map((k) => [k, all[k]]));
}

async function allPhotos(): Promise<PhotoMap> {
  if (cache) return cache;
  const out: PhotoMap = {};
  for (const [file, img] of Object.entries(files)) {
    const key = file.replace("../assets/photos", "/assets");
    const widths = [480, 960, 1600].filter((w) => w < img.width).concat(img.width);
    const r = await getImage({ src: img, widths, format: "webp", quality: 78 });
    out[key] = { src: r.src, srcSet: r.srcSet.attribute, width: img.width, height: img.height };
  }
  cache = out;
  return out;
}
