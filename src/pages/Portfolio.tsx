import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

type Category = "All" | "Construction" | "Building Signs" | "ADA" | "Lobby" | "Vehicle Wraps" | "Wall Graphics";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  client: string;
  description: string;
  image: string;
  year?: string;
}

// TODO: Replace ALL images with real project photos.
// Place photos in /public/assets/portfolio/ and update paths below.
// Even phone photos of completed installs are better than recycled stock images.
// A sign company without photos of actual signs is a red flag for any GC.
const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "LA Metro Station Signage", category: "Construction", client: "LA Metro", description: "Complete wayfinding and identification signage package for LA Metro transit stations.", image: "/assets/hero/construction-signage.jpg", year: "2010" },
  { id: 2, title: "Burbank Airport Terminal Signs", category: "Building Signs", client: "Hollywood Burbank Airport", description: "Interior and exterior signage for Hollywood Burbank Airport terminal renovation.", image: "/assets/hero/building-signs.jpg", year: "2015" },
  { id: 3, title: "LA County Courthouse ADA Package", category: "ADA", client: "LA County Superior Court", description: "200+ ADA-compliant signs with tactile elements and Grade 2 braille for county courthouse facilities.", image: "/assets/services/lobby-signs.jpg", year: "2015" },
  { id: 4, title: "Corporate Lobby Dimensional Letters", category: "Lobby", client: "Commercial Client", description: "Brushed aluminum dimensional letters and logo installation for corporate reception area.", image: "/assets/hero/lobby-signs.jpg" },
  { id: 5, title: "Fleet Vehicle Wrap Program", category: "Vehicle Wraps", client: "Commercial Client", description: "Full fleet wrap program for 15+ vehicles with consistent branding across all units.", image: "/assets/hero/vehicle-wraps.jpg" },
  { id: 6, title: "Office Wall Mural Installation", category: "Wall Graphics", client: "Commercial Client", description: "Large-format printed wall graphics transforming a corporate office interior space.", image: "/assets/services/wall-graphics.jpg" },
  { id: 7, title: "Construction Site Barricade Graphics", category: "Construction", client: "General Contractor", description: "Full-color barricade graphics and project identification signs for active construction sites.", image: "/assets/services/custom-signs.jpg" },
  { id: 8, title: "Retail Storefront Signage", category: "Building Signs", client: "Retail Client", description: "Channel letter and illuminated sign fabrication and installation for retail storefronts.", image: "/assets/services/building-signs.jpg" },
  { id: 9, title: "Medical Office ADA Compliance", category: "ADA", client: "Commercial Client", description: "Complete ADA signage package for multi-story medical office building.", image: "/assets/services/special-projects.jpg" },
];

const categories: Category[] = ["All", "Construction", "Building Signs", "ADA", "Lobby", "Vehicle Wraps", "Wall Graphics"];

export default function Portfolio() {
  usePageMeta({
    title: "Sign Portfolio | LA Projects",
    description: "Signage projects by Advanced Sign & Banner: construction signs, ADA signage, vehicle wraps and lobby signs. LA Metro, Burbank Airport & more.",
  });

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : i === 0 ? filtered.length - 1 : i - 1));
      else if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  const navigateLightbox = (direction: "prev" | "next") => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return direction === "prev"
        ? i === 0 ? filtered.length - 1 : i - 1
        : (i + 1) % filtered.length;
    });
  };

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-blue-deep text-paper overflow-hidden">
        <img src="/assets/hero/building-signs.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/75 to-blue-deep/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-20">
          <p className="text-sm font-semibold text-flare tracking-[0.14em] uppercase mb-4">Our work</p>
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] max-w-4xl">
            Sign projects in Los Angeles
          </h1>
          <p className="mt-6 max-w-2xl text-paper/75 text-lg leading-relaxed">
            From public works projects to commercial spaces, see the quality and
            craftsmanship we bring to every job.
          </p>
        </div>
      </section>

      {/* Photo notice */}
      <div className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <div className="flex items-center gap-2 text-sm text-ink/45 justify-center">
            <Camera size={14} />
            <span>Project photos are representative. Contact us for project-specific references and documentation.</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="bg-paper py-6 border-b border-ink/10 sticky top-[102px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2 font-display font-bold uppercase tracking-wide text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-strong text-paper"
                    : "bg-sand text-ink/70 hover:bg-sand-deep hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {filtered.length === 0 ? (
            <p className="text-center text-ink/50 py-12">No projects in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View project: ${item.title}`}
                  className="group text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-deep/0 group-hover:bg-blue-deep/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="font-display font-bold uppercase tracking-wide text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs tracking-[0.1em] uppercase text-blue-strong mb-1">
                      {item.category} &middot; {item.client}
                      {item.year && <> &middot; {item.year}</>}
                    </p>
                    <h3 className="font-display font-bold uppercase tracking-tight text-ink text-lg leading-none">{item.title}</h3>
                    <p className="text-ink/60 text-sm mt-1.5">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-6">
            Like what you see? Let&rsquo;s discuss your project.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-flare text-paper px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors">
              Get a free quote
            </Link>
            <a href="tel:818-346-2142" className="border border-blue text-blue-strong px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-blue hover:text-paper transition-colors">
              Call 818-346-2142
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-4 right-4 text-paper/80 hover:text-paper p-2">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }} aria-label="Previous project" className="absolute left-4 text-paper/80 hover:text-paper p-2">
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.title} className="w-full max-h-[70vh] object-contain" />
            <div className="mt-4 text-center">
              <h3 className="font-display font-bold uppercase tracking-tight text-paper text-xl">{active.title}</h3>
              <p className="text-paper/70 text-sm mt-1">{active.description}</p>
              <p className="text-flare text-sm mt-2 font-display uppercase tracking-wide">
                {active.category} &middot; {active.client}
                {active.year && <> &middot; {active.year}</>}
              </p>
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }} aria-label="Next project" className="absolute right-4 text-paper/80 hover:text-paper p-2">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
