import { useState } from "react";
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
  {
    id: 1,
    title: "LA Metro Station Signage",
    category: "Construction",
    client: "LA Metro",
    description: "Complete wayfinding and identification signage package for LA Metro transit stations.",
    image: "/assets/hero/construction-signage.jpg", // TODO: Replace with real project photo
    year: "2010",
  },
  {
    id: 2,
    title: "Burbank Airport Terminal Signs",
    category: "Building Signs",
    client: "Hollywood Burbank Airport",
    description: "Interior and exterior signage for Hollywood Burbank Airport terminal renovation.",
    image: "/assets/hero/building-signs.jpg", // TODO: Replace with real project photo
    year: "2015",
  },
  {
    id: 3,
    title: "LA County Courthouse ADA Package",
    category: "ADA",
    client: "LA County Superior Court",
    description: "200+ ADA-compliant signs with tactile elements and Grade 2 braille for county courthouse facilities.",
    image: "/assets/services/lobby-signs.jpg", // TODO: Replace with real project photo
    year: "2015",
  },
  {
    id: 4,
    title: "Corporate Lobby Dimensional Letters",
    category: "Lobby",
    client: "Commercial Client",
    description: "Brushed aluminum dimensional letters and logo installation for corporate reception area.",
    image: "/assets/hero/lobby-signs.jpg", // TODO: Replace with real project photo
  },
  {
    id: 5,
    title: "Fleet Vehicle Wrap Program",
    category: "Vehicle Wraps",
    client: "Commercial Client",
    description: "Full fleet wrap program for 15+ vehicles with consistent branding across all units.",
    image: "/assets/hero/vehicle-wraps.jpg", // TODO: Replace with real project photo
  },
  {
    id: 6,
    title: "Office Wall Mural Installation",
    category: "Wall Graphics",
    client: "Commercial Client",
    description: "Large-format printed wall graphics transforming a corporate office interior space.",
    image: "/assets/services/wall-graphics.jpg", // TODO: Replace with real project photo
  },
  {
    id: 7,
    title: "Construction Site Barricade Graphics",
    category: "Construction",
    client: "General Contractor",
    description: "Full-color barricade graphics and project identification signs for active construction sites.",
    image: "/assets/services/custom-signs.jpg", // TODO: Replace with real project photo
  },
  {
    id: 8,
    title: "Retail Storefront Signage",
    category: "Building Signs",
    client: "Retail Client",
    description: "Channel letter and illuminated sign fabrication and installation for retail storefronts.",
    image: "/assets/services/building-signs.jpg", // TODO: Replace with real project photo
  },
  {
    id: 9,
    title: "Medical Office ADA Compliance",
    category: "ADA",
    client: "Commercial Client",
    description: "Complete ADA signage package for multi-story medical office building.",
    image: "/assets/services/special-projects.jpg", // TODO: Replace with real project photo
  },
];

const categories: Category[] = ["All", "Construction", "Building Signs", "ADA", "Lobby", "Vehicle Wraps", "Wall Graphics"];

export default function Portfolio() {
  usePageMeta({
    title: "Sign Portfolio | LA Projects",
    description: "Signage projects by Advanced Sign & Banner — construction signs, ADA signage, vehicle wraps & lobby signs. LA Metro, Burbank Airport & more.",
  });

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    if (direction === "prev") {
      setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
    } else {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Sign Projects in Los Angeles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From public works projects to commercial spaces, see the quality and craftsmanship we bring to every job.
          </p>
        </div>
      </section>

      {/* Photo notice */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 justify-center">
          <Camera size={14} />
          <span>Project photos are representative. Contact us for project-specific references and documentation.</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-8 border-b sticky top-20 bg-white z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-400 mb-1">
                      {item.category} &middot; {item.client}
                      {item.year && <> &middot; {item.year}</>}
                    </p>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Like what you see? Let's discuss your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gold text-navy-dark px-8 py-3 rounded-md font-semibold hover:bg-gold-light transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:818-346-2142"
              className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
            >
              Call 818-346-2142
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{filtered[lightboxIndex].title}</h3>
              <p className="text-gray-300 text-sm mt-1">{filtered[lightboxIndex].description}</p>
              <p className="text-gold text-sm mt-2">
                {filtered[lightboxIndex].category} &middot; {filtered[lightboxIndex].client}
                {filtered[lightboxIndex].year && <> &middot; {filtered[lightboxIndex].year}</>}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
