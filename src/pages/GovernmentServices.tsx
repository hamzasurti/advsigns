import { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";
import Sheet from "../components/Sheet";
import AdaSign from "../components/AdaSign";
import Arrow from "../components/Arrow";
import { business, counties, publicWorks } from "../content/site";

const signLinks = ["/signs/construction", "/signs/building", "/signs/ada"];

export default function GovernmentServices() {
  usePageMeta({
    title: "Public Works Signs | Chatsworth",
    description: "DBE/SBE certified public works sign contractor in Chatsworth, CA. Construction signs, ADA signage & building signs. Prevailing wage. 818-346-2142.",
  });
  useScrollAnimation();

  const serviceData = useMemo(() => ({
    "@type": "Service",
    "name": "Public Works Signage",
    "description": "Construction signs, ADA signage, and building signs for public works and prevailing wage projects in Los Angeles and Southern California.",
    "url": "https://advsigns.net/public-works",
    "provider": { "@id": "https://advsigns.net/#business" },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Los Angeles County, CA" },
      { "@type": "AdministrativeArea", "name": "Ventura County, CA" },
      { "@type": "AdministrativeArea", "name": "Orange County, CA" },
      { "@type": "AdministrativeArea", "name": "San Bernardino County, CA" },
      { "@type": "AdministrativeArea", "name": "Riverside County, CA" },
      { "@type": "AdministrativeArea", "name": "Santa Barbara County, CA" },
    ],
    "serviceType": ["Construction Signage", "ADA Compliant Signage", "Building Signs", "Wayfinding Signs", "Braille Signs"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Public Works Sign Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Site Signs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADA Compliant Signs with Grade 2 Braille" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Building Identification Signs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wayfinding and Directional Signs" } },
      ],
    },
  }), []);
  useStructuredData("public-works-service", serviceData);

  const faqData = useMemo(() => ({
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What certifications does Advanced Sign & Banner hold?", "acceptedAnswer": { "@type": "Answer", "text": "We hold DBE (Disadvantaged Business Enterprise), SBE (Small Business Enterprise), SABE (Small and Emerging Business Enterprise), CBE (Community Business Enterprise), Micro-SBE, and SB-PW certifications. All are current and verifiable through the issuing agencies." } },
      { "@type": "Question", "name": "Do you handle certified payroll for prevailing wage projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We are fully prevailing wage compliant and handle all certified payroll reporting, DIR registration requirements, and labor compliance documentation for public works projects." } },
      { "@type": "Question", "name": "What is your ADA signage inspection pass rate?", "acceptedAnswer": { "@type": "Answer", "text": "We maintain a first-inspection pass rate on ADA signage projects. Our signs comply with ADA Standards for Accessible Design (2010), California Building Code Title 24, and include tactile characters and Grade 2 braille. We review specifications before fabrication to catch errors early." } },
      { "@type": "Question", "name": "What areas do you serve for public works projects?", "acceptedAnswer": { "@type": "Answer", "text": "We serve general contractors and public agencies across Los Angeles County, Ventura County, Orange County, San Bernardino County, Riverside County, and southern Santa Barbara County from our shop in Chatsworth, CA." } },
    ],
  }), []);
  useStructuredData("public-works-faq", faqData);

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
                <dt className="label text-hivis">{c.label}</dt>
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
                  {s.image ? (
                    <img src={s.image} alt={s.alt} loading="lazy" className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="absolute inset-0 bg-mat text-paper p-3">
                      <AdaSign />
                    </div>
                  )}
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
          <ol className="grid md:grid-cols-3 gap-x-10 mt-[var(--s5)]">
            {publicWorks.ada.points.map((p, i) => (
              <li key={p.title} className={`border-t-2 border-ink pt-5 pb-8 animate-on-scroll delay-${i + 1}`}>
                <span className="label text-green">{String.fromCharCode(65 + i)}</span>
                <h3 className="display display-4 mt-3">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
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
              <article key={c.id} className="grid lg:grid-cols-[8rem_5fr_6fr] gap-x-10 gap-y-3 border-t border-ink/20 py-8 animate-on-scroll">
                <p className="display display-4 text-green">{c.year}</p>
                <div>
                  <h3 className="display display-4">{c.title}</h3>
                  <p className="label text-ink-soft mt-2">{c.meta}</p>
                </div>
                <div>
                  <p>{c.summary}</p>
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {c.metrics.map((m) => (
                      <li key={m} className="label bg-hivis px-2.5 py-1.5">{m}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prevailing wage + service area */}
      <section className="mat on-mat">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <div className="animate-on-scroll">
              <h2 className="display display-3">{publicWorks.wage.heading}</h2>
              <p className="mt-5 text-on-mat">{publicWorks.wage.body}</p>
            </div>
            <div className="animate-on-scroll delay-1">
              <h2 className="display display-3">{publicWorks.area.heading}</h2>
              <p className="mt-5 text-on-mat">{publicWorks.area.body}</p>
              <ul className="tblock rule-mat bg-mat grid-cols-2 sm:grid-cols-3 mt-6">
                {counties.map((c) => (
                  <li key={c} className="display display-4">{c}</li>
                ))}
              </ul>
            </div>
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
