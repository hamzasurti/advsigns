import { useEffect } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Return to the Advanced Sign & Banner homepage.",
  });

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "robots");
    meta.setAttribute("content", "noindex");
    document.head.appendChild(meta);
    return () => { meta.remove(); };
  }, []);

  return (
    <div className="bg-paper min-h-[80vh] flex items-center justify-center pt-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="font-display font-bold text-blue-strong/20 text-[9rem] leading-none">404</p>
        <h1 className="font-display font-bold tracking-tight text-ink text-3xl mb-4">
          Page not found
        </h1>
        <p className="text-ink/65 mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-flare text-paper px-7 py-3 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors">
            Go Home
          </Link>
          <Link to="/contact" className="border border-blue text-blue-strong px-7 py-3 font-display font-semibold tracking-normal text-base hover:bg-blue hover:text-paper transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
