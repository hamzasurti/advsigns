import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import testimonials from "../data/testimonials";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";

const filterOptions = ["All", "Public Works", "Commercial", "Vehicle Wraps"] as const;
type Filter = (typeof filterOptions)[number];

export default function Testimonials() {
  usePageMeta({
    title: "Client Reviews",
    description: "Reviews from LA and Southern California clients of Advanced Sign & Banner. GCs and business owners share their sign project experiences.",
  });

  const reviewData = useMemo(() => ({
    "@type": "LocalBusiness",
    "@id": "https://advsigns.net/#business",
    "name": "Advanced Sign & Banner",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": String(testimonials.length),
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.quote,
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    })),
  }), []);
  useStructuredData("reviews", reviewData);

  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? testimonials
      : testimonials.filter((t) => t.projectType === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-14 text-center">
          <p className="text-sm font-semibold text-blue-strong tracking-[0.14em] uppercase mb-4">
            Reviews
          </p>
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-ink text-[clamp(2.25rem,6vw,4.5rem)]">
            Sign company reviews
          </h1>
          <p className="mt-5 text-ink/70 text-lg max-w-2xl mx-auto">
            Hear from the contractors, agencies, and business owners we&rsquo;ve
            worked with.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-paper py-6 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                aria-pressed={activeFilter === option}
                className={`px-5 py-2 font-display font-bold uppercase tracking-wide text-sm transition-colors ${
                  activeFilter === option
                    ? "bg-blue-strong text-paper"
                    : "bg-sand text-ink/70 hover:bg-sand-deep hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {filtered.length === 0 || filtered[0].name.startsWith("[") ? (
            <div className="text-center py-16">
              <p className="font-display font-bold uppercase tracking-tight text-ink text-xl mb-2">
                No reviews in this category yet.
              </p>
              <p className="text-ink/55 text-sm">
                Contact us for references from past public works and commercial projects.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((testimonial) => (
                <div key={testimonial.id} className="border border-ink/10 bg-paper p-8">
                  <p className="text-ink/80 leading-relaxed mb-6">
                    <span className="font-display text-flare text-3xl align-[-0.15em] mr-1">&ldquo;</span>
                    {testimonial.quote}
                    <span className="font-display text-flare text-3xl align-[-0.35em] ml-1">&rdquo;</span>
                  </p>
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-ink/10">
                    <div>
                      <p className="font-display font-bold uppercase tracking-tight text-blue-strong">{testimonial.name}</p>
                      <p className="text-sm text-ink/55">
                        {testimonial.title}
                        {testimonial.company ? `, ${testimonial.company}` : ""}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs tracking-[0.1em] uppercase text-ink/40">
                      {testimonial.projectType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-6">
            Ready to start your project?
          </h2>
          <Link to="/contact" className="inline-block bg-flare text-paper px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  );
}
