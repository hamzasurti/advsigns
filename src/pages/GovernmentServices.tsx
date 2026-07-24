import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Shield, ChevronDown, ChevronUp } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";

const credentials = [
  { label: "Certified", detail: "DBE, SBE, SABE, CBE" },
  { label: "Prevailing wage", detail: "Certified payroll & DIR compliant" },
  { label: "Licensed", detail: "CSLB C-45, DIR registered" },
  { label: "Insured & bonded", detail: "COI available on request" },
];

const services = [
  { title: "Construction Signs", description: "Weather-resistant signage for active construction sites and development projects.", image: "/assets/hero/construction-signage.jpg", alt: "Construction site signs for public works projects in Los Angeles" },
  { title: "Building Signs", description: "Exterior and interior building signage that meets municipal codes and accessibility standards.", image: "/assets/hero/building-signs.jpg", alt: "Building identification signage for public facilities in Southern California" },
  { title: "ADA Signage", description: "Fully compliant tactile signs with Grade 2 braille for public facilities.", image: "/assets/services/lobby-signs.jpg", alt: "ADA compliant tactile signs with Grade 2 braille for public buildings" },
];

const caseStudies = [
  { id: 1, title: "LA County Courts, ADA Signage Package", meta: "2015 · Los Angeles County Superior Court", summary: "200+ ADA-compliant signs across multiple courthouses, delivered and installed within 90 days with zero defects and a first-review compliance pass.", metrics: ["200+ signs", "90 days", "Zero defects"] },
  { id: 2, title: "LA Metro, Transit Station Signage", meta: "2010–2012 · Multiple Metro stations", summary: "Wayfinding and identification signage for multiple transit stations using transit-grade materials, installed around active station operations.", metrics: ["Multiple stations", "Transit-grade", "Consistent"] },
  { id: 3, title: "Hollywood Burbank Airport, Terminal Renovation", meta: "2015 · Airport terminal", summary: "Interior and exterior signage meeting FAA and airport security requirements, installed during approved windows with zero disruption to operations.", metrics: ["FAA compliant", "Zero disruptions", "On schedule"] },
];

const serviceAreaCounties = [
  "Los Angeles", "Ventura", "Orange", "San Bernardino", "Riverside", "Santa Barbara (south)",
];

const faqs = [
  { q: "What certifications do you hold?", a: "DBE, SBE, SABE, CBE, Micro-SBE, and SB-PW, all current and verifiable through the issuing agencies. These prequalify us for public works bids across Southern California." },
  { q: "Do you handle certified payroll for prevailing wage projects?", a: "Yes. We handle all certified payroll reporting, DIR registration requirements, and labor compliance documentation for public works projects." },
  { q: "What is your ADA inspection pass rate?", a: "We maintain a first-inspection pass rate. Our signs meet ADA 2010 and California Title 24, with tactile characters and Grade 2 braille, and we review specs before fabrication." },
  { q: "What areas do you serve?", a: "General contractors and public agencies across Los Angeles, Ventura, Orange, San Bernardino, Riverside, and southern Santa Barbara counties, from our shop in Chatsworth." },
];

const h2Class = "font-display font-bold tracking-tight text-ink text-2xl md:text-3xl";

export default function GovernmentServices() {
  usePageMeta({
    title: "Public Works Signs | Chatsworth",
    description: "DBE/SBE certified public works sign contractor in Chatsworth, CA. Construction signs, ADA signage & building signs. Prevailing wage. 818-346-2142.",
  });

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

  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-blue-deep text-paper overflow-hidden">
        <img src="/assets/hero/construction-signage.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/80 to-blue-deep/95" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-sm text-paper mb-6">
            <Shield size={16} className="text-flare" />
            Certified public works sign contractor
          </div>
          <h1 className="font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.25rem,6vw,4.25rem)]">
            Public works signage
          </h1>
          <p className="mt-6 text-paper/75 text-lg max-w-2xl mx-auto">
            Prequalified for your next bid: certified, prevailing-wage compliant,
            and experienced with public-agency requirements since 1999.
          </p>
          <Link to="/contact" className="mt-8 inline-block bg-flare text-paper px-8 py-3.5 font-display font-semibold text-base hover:bg-flare-strong transition-colors">
            Get a quote
          </Link>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-sand border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="font-display font-semibold text-ink">{c.label}</dt>
                <dd className="text-sm text-ink/60 mt-0.5">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className={`${h2Class} mb-10`}>What we build for public works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/85 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display font-semibold text-paper text-lg">{service.title}</h3>
                </div>
                <p className="mt-3 text-ink/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADA Expertise */}
      <section className="bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className={`${h2Class} mb-3`}>ADA compliance, done right the first time</h2>
          <p className="text-ink/70 leading-relaxed max-w-2xl mb-10">
            ADA compliance is where sign subs get GCs in trouble. Our signs meet
            ADA 2010 and California Title 24, with tactile characters and Grade 2
            braille reviewed against spec before anything is fabricated.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display font-semibold text-ink mb-1">First-inspection pass rate</p>
              <p className="text-sm text-ink/65">Our signs pass ADA inspection on the first review, so there is no re-fabrication or schedule slip.</p>
            </div>
            <div>
              <p className="font-display font-semibold text-ink mb-1">Spec review up front</p>
              <p className="text-sm text-ink/65">We flag errors in the architectural specs before fabrication, not after installation.</p>
            </div>
            <div>
              <p className="font-display font-semibold text-ink mb-1">We carry the risk</p>
              <p className="text-sm text-ink/65">Non-compliant ADA signs are the GC&rsquo;s problem. We take that risk off your plate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className={`${h2Class} mb-8`}>Selected projects</h2>
          <div className="space-y-3">
            {caseStudies.map((study) => (
              <div key={study.id} className="border border-ink/10">
                <button
                  onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                  aria-expanded={expandedCase === study.id}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-sand transition-colors"
                >
                  <div>
                    <h3 className="font-display font-semibold text-ink">{study.title}</h3>
                    <p className="text-xs text-ink/45 mt-1">{study.meta}</p>
                  </div>
                  {expandedCase === study.id
                    ? <ChevronUp size={18} className="text-blue-strong shrink-0" />
                    : <ChevronDown size={18} className="text-ink/40 shrink-0" />}
                </button>
                {expandedCase === study.id && (
                  <div className="px-5 pb-5 border-t border-ink/10 pt-4">
                    <p className="text-sm text-ink/70 leading-relaxed">{study.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.metrics.map((metric) => (
                        <span key={metric} className="text-xs bg-blue-strong/10 text-blue-strong px-2.5 py-1">{metric}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance + Service area */}
      <section className="bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className={`${h2Class} mb-3`}>Prevailing wage, handled</h2>
            <p className="text-ink/70 leading-relaxed">
              We are fully prevailing-wage compliant and handle certified payroll,
              DIR reporting, and labor compliance documentation on every public
              works project, so your team can focus on the schedule.
            </p>
          </div>
          <div>
            <h2 className={`${h2Class} mb-3`}>Service area</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Based in Chatsworth, serving six Southern California counties:
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreaCounties.map((county) => (
                <span key={county} className="text-sm bg-paper border border-ink/10 text-ink/75 px-3 py-1.5">{county}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className={`${h2Class} mb-8`}>Common questions</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="border border-ink/10">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-sand transition-colors"
                >
                  <span className="font-display font-semibold text-ink">{item.q}</span>
                  <span className="text-blue-strong shrink-0 text-xl">{expandedFaq === i ? "−" : "+"}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-ink/70 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-deep text-paper">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display font-bold tracking-tight text-2xl md:text-3xl mb-6">
            Ready for your next public works project?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-flare text-paper px-8 py-3.5 font-display font-semibold text-base hover:bg-flare-strong transition-colors">
              Get a free quote
            </Link>
            <a href="tel:818-346-2142" className="border border-white/40 text-paper px-8 py-3.5 font-display font-semibold text-base hover:bg-white/10 transition-colors">
              Call 818-346-2142
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
