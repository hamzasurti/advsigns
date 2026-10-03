import { Link } from "../lib/router";
import type { PageMeta } from "../lib/meta";
import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";
import Sheet from "../components/Sheet";
import SignFigure from "../components/SignFigure";
import Arrow from "../components/Arrow";
import { business, publicWorks } from "../content/site";

const signLinks = ["/signs/street", "/signs/building", "/signs/ada"];

export const meta: PageMeta = {
    title: "Public Works Signs | Chatsworth",
    description: "SBE certified public works sign contractor in Chatsworth, CA. Street signs, ADA signage & building signs. Prevailing wage. 818-346-2142.",
    ogImage: "https://advsigns.net/assets/og/public-works.jpg",
};

/* JSON-LD for the page head; the layout renders one script per entry. */
export const structuredData = [
  { id: "public-works-service", data: {
    "@type": "Service",
    "name": "Public Works Signage",
    "description": "Street signs, ADA signage, and building signs for public works and prevailing wage projects in Los Angeles County.",
    "url": "https://advsigns.net/public-works",
    "provider": { "@id": "https://advsigns.net/#business" },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Los Angeles County, CA" },
    ],
    "serviceType": ["Street Signage", "ADA Compliant Signage", "Building Signs", "Braille Signs"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Public Works Sign Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Street Signs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADA Compliant Signs with Grade 2 Braille" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Building Identification Signs" } },
      ],
    },
  } },
  /* Answers come from the shared content so the page and the structured data agree. */
  { id: "public-works-faq", data: {
    "@type": "FAQPage",
    "mainEntity": publicWorks.faqs.map((f) => ({
      "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  } },
];

export default function GovernmentServices() {


  return (
    <div>
      <PageHead
        tone="mat"
        eyebrow={publicWorks.badge}
        lead={publicWorks.lead}
        actions={
          <>
            <Link to="/contact" className="btn btn-mark">Get a quote <Arrow /></Link>
            <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
          </>
        }
      >
        <h1 className="display display-1">Public works signage</h1>
      </PageHead>

      {/* Credentials, laid out like the title block on a drawing set */}
      <section className="mat on-mat">
        <div className="wrap pb-[var(--s13)]">
          <dl className="tblock rule-mat bg-mat grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rise rise-4">
            {publicWorks.credentials.map((c) => (
              <div key={c.label}>
                <dt className="label text-mark">{c.label}</dt>
                <dd className="display display-4 mt-3">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we build */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="01" label="Scope" title={publicWorks.servicesHeading} />
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12 mt-[var(--s5)]">
            {publicWorks.services.map((s, i) => (
              <Link key={s.title} to={signLinks[i]} className={`group block animate-on-scroll delay-${i + 1}`}>
                <Sheet ratio="upright">
                  <SignFigure slug={signLinks[i].split("/").pop()!} />
                </Sheet>
                <div className="px-[14px] mt-3">
                  <h3 className="display display-3 flex items-center justify-between gap-4">
                    <span className="hl bg-[length:0_100%] group-hover:bg-[length:100%_100%] bg-no-repeat transition-[background-size] duration-500">
                      {s.title}
                    </span>
                    <Arrow />
                  </h3>
                  <p className="mt-2 text-ink-soft">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADA */}
      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="02" label="Compliance" title={publicWorks.ada.heading}>
            <p>{publicWorks.ada.lead}</p>
          </SectionHead>
          {publicWorks.ada.points.length > 0 && (
            <ol className="grid md:grid-cols-3 gap-x-10 mt-[var(--s5)]">
              {publicWorks.ada.points.map((p, i) => (
                <li key={p.title} className={`border-t-2 border-ink pt-5 pb-8 animate-on-scroll delay-${i + 1}`}>
                  <span className="label text-green">{String.fromCharCode(65 + i)}</span>
                  <h3 className="display display-4 mt-3">{p.title}</h3>
                  <p className="mt-3 text-ink-soft">{p.body}</p>
                </li>
              ))}
            </ol>
          )}
          <Link to="/signs/ada" className="label inline-flex items-center gap-3 mt-4 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
            How we build ADA signs <Arrow />
          </Link>
        </div>
      </section>

      {/* Selected projects */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="03" label="References" title={publicWorks.caseStudiesHeading} />
          <div className="mt-[var(--s5)] border-b border-ink/20">
            {publicWorks.caseStudies.map((c) => (
              <article key={c.id} className={`grid gap-x-10 gap-y-3 border-t border-ink/20 py-8 animate-on-scroll ${c.year ? "lg:grid-cols-[8rem_5fr_6fr]" : "lg:grid-cols-[5fr_8fr]"}`}>
                {c.year && <p className="display display-4 text-green">{c.year}</p>}
                <div>
                  <h3 className="display display-4">{c.title}</h3>
                  <p className="label text-ink-soft mt-2">{c.meta}</p>
                </div>
                <div>
                  <p>{c.summary}</p>
                  {c.metrics.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {c.metrics.map((m) => (
                        <li key={m} className="label bg-mark px-2.5 py-1.5">{m}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <SectionHead no="04" label="Before you bid" title={publicWorks.faqHeading} />
            <div className="border-b border-ink/20">
              {publicWorks.faqs.map((f) => (
                <details key={f.q} className="faq border-t border-ink/20">
                  <summary>
                    <span className="q display display-4 transition-colors">{f.q}</span>
                    <span className="sign" aria-hidden="true" />
                  </summary>
                  <p className="measure pb-7 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
