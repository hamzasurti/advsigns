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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Sign Company Reviews
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from the contractors, agencies, and business owners we've worked with.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {filtered.length === 0 || filtered[0].name.startsWith("[") ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-2">Client testimonials coming soon.</p>
              <p className="text-gray-400 text-sm">
                Contact us for references from past public works and commercial projects.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border rounded-xl p-8"
                >
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-bold text-navy">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {testimonial.projectType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Ready to start your project?</p>
          <Link
            to="/contact"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
