import { useMemo } from "react";
import { Link } from "react-router-dom";
import testimonials, { type Testimonial } from "../data/testimonials";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageHead from "../components/PageHead";
import Arrow from "../components/Arrow";
import { business } from "../content/site";

/* The review, with its pull quote run over in marker. */
function Marked({ t }: { t: Testimonial }) {
  if (!t.pull || !t.quote.includes(t.pull)) return <>{t.quote}</>;
  const [before, after] = t.quote.split(t.pull);
  return (
    <>
      {before}
      <mark className="hl">{t.pull}</mark>
      {after}
    </>
  );
}

function Byline({ t }: { t: Testimonial }) {
  return (
    <footer className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/25 pt-3">
      <p>
        <span className="font-bold">{t.name}</span>
        <span className="block text-sm text-ink-soft">
          {t.title}
          {t.company ? `, ${t.company}` : ""}
        </span>
      </p>
      <span className="label text-ink-soft shrink-0">No. {String(t.id).padStart(2, "0")}</span>
    </footer>
  );
}

export default function Testimonials() {
  usePageMeta({
    title: "Client Reviews",
    description: "Reviews from LA and Southern California clients of Advanced Sign & Banner. GCs and business owners share their sign project experiences.",
  });
  useScrollAnimation();

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

  const [lead, ...rest] = testimonials;

  return (
    <div>
      <PageHead
        tone="paper-2"
        eyebrow={`${testimonials.length} reviews`}
        lead="Hear from the contractors, agencies, and business owners we&rsquo;ve worked with."
      >
        <h1 className="display display-1">Sign company reviews</h1>
      </PageHead>

      <section className="on-paper bg-mark">
        <div className="wrap py-[var(--s13)]">
          <blockquote className="animate-on-scroll">
            <p className="display display-2 !leading-[1.04] max-w-[24ch]">&ldquo;{lead.pull}&rdquo;</p>
            <p className="measure mt-8">{lead.quote}</p>
            <Byline t={lead} />
          </blockquote>
        </div>
      </section>

      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <div className="md:columns-2 gap-x-16">
            {rest.map((t) => (
              <blockquote key={t.id} className="break-inside-avoid pb-12 animate-on-scroll">
                <p>
                  <Marked t={t} />
                </p>
                <Byline t={t} />
              </blockquote>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link to="/contact" className="btn btn-mark">Get a free quote <Arrow /></Link>
            <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
          </div>
        </div>
      </section>
    </div>
  );
}
