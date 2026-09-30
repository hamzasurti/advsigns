import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import Arrow from "../components/Arrow";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Return to the Advanced Sign & Banner homepage.",
  });

  /* Not indexed, so it should not claim a canonical URL either. */
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "robots");
    meta.setAttribute("content", "noindex");
    document.head.appendChild(meta);
    document.querySelector('link[rel="canonical"]')?.remove();
    return () => { meta.remove(); };
  }, []);

  return (
    <section className="mat on-mat min-h-[78vh] grid items-center">
      <div className="wrap py-[var(--s13)]">
        <div className="split-5-8 items-center">
          <div>
            <p className="label text-mark">Error 404</p>
            <h1 className="display display-2 mt-5">This sign hasn&rsquo;t been made yet</h1>
            <p className="lead mt-5 text-on-mat">
              The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/" className="btn btn-mark">Go home <Arrow /></Link>
              <Link to="/contact" className="btn btn-line">Contact us</Link>
            </div>
          </div>
          <div className="crop text-on-mat" aria-hidden="true">
            <div className="ratio-wide bg-paper grid place-items-center">
              <span className="label text-ink-soft">Blank, 4 ft x 8 ft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
