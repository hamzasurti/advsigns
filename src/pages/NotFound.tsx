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
    <div className="pt-20 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="text-8xl font-bold text-gray-200 mb-4">404</p>
        <h1 className="text-3xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="bg-gray-100 text-navy px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
