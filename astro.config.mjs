// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://advsigns.net",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), sitemap({ filter: (page) => !page.endsWith("/404") })],
  redirects: {
    "/signs/construction": "/signs/street",
    "/government-services": "/public-works",
  },
  vite: { plugins: [tailwindcss()] },
});
