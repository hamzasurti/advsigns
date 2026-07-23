import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const BASE_TITLE = "Advanced Sign & Banner";
const BASE_URL = "https://advsigns.net";
const DEFAULT_IMAGE = `${BASE_URL}/assets/hero/building-signs.jpg`;

export default function usePageMeta({ title, description, ogTitle, ogDescription, ogImage }: PageMeta) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    // Set document title
    document.title = `${title} | ${BASE_TITLE}`;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", ogTitle || `${title} | ${BASE_TITLE}`);
    setMeta("property", "og:description", ogDescription || description);
    setMeta("property", "og:image", ogImage || DEFAULT_IMAGE);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", ogTitle || `${title} | ${BASE_TITLE}`);
    setMeta("name", "twitter:description", ogDescription || description);
    setMeta("name", "twitter:image", ogImage || DEFAULT_IMAGE);

    return () => {
      document.title = `${BASE_TITLE} | Sign Company in Chatsworth, CA | Since 1999`;
    };
  }, [title, description, ogTitle, ogDescription, ogImage, pathname]);
}
