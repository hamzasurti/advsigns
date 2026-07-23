import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Shield, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";

const certifications = [
  {
    abbr: "DBE",
    full: "Disadvantaged Business Enterprise",
    agency: "Caltrans / CA DGS",
    certNumber: "#XXXXX", // TODO: Replace with real DBE cert number
    verifyUrl: "https://californiaucp.org/", // Caltrans UCP directory
  },
  {
    abbr: "SBE",
    full: "Small Business Enterprise",
    agency: "CA DGS / OSDS",
    certNumber: "#XXXXX", // TODO: Replace with real SBE cert number
    verifyUrl: "https://caleprocure.ca.gov/pages/sbdvbe-background.aspx",
  },
  {
    abbr: "SABE",
    full: "Small and Emerging Business Enterprise",
    agency: "LA Metro",
    certNumber: "#XXXXX", // TODO: Replace with real SABE cert number
    verifyUrl: "https://www.metro.net/about/deod/",
  },
  {
    abbr: "CBE",
    full: "Community Business Enterprise",
    agency: "LA Metro",
    certNumber: "#XXXXX", // TODO: Replace with real CBE cert number
    verifyUrl: "https://www.metro.net/about/deod/",
  },
  {
    abbr: "Micro-SBE",
    full: "Micro Small Business Enterprise",
    agency: "CA DGS",
    certNumber: "#XXXXX", // TODO: Replace with real Micro-SBE cert number
    verifyUrl: "https://caleprocure.ca.gov/pages/sbdvbe-background.aspx",
  },
  {
    abbr: "SB-PW",
    full: "Small Business – Public Works",
    agency: "DIR",
    certNumber: "#XXXXX", // TODO: Replace with real SB-PW cert number
    verifyUrl: "https://www.dir.ca.gov/dlse/publicworks.html",
  },
];

const services = [
  {
    title: "Construction Signage",
    description:
      "Durable, compliant signage for construction sites and development projects. Weather-resistant materials designed for long-term outdoor use on active construction sites.",
    image: "/assets/hero/construction-signage.jpg",
    alt: "Construction site signs for public works projects in Los Angeles",
  },
  {
    title: "Building Signs",
    description:
      "Exterior and interior building signage that meets all municipal codes and accessibility standards. Perfect for public facilities, civic buildings, and institutional campuses.",
    image: "/assets/hero/building-signs.jpg",
    alt: "Building identification signage for public facilities in Southern California",
  },
  {
    title: "ADA Signage",
    description:
      "Fully compliant ADA signs with tactile elements and Grade 2 braille. Meets all federal, state, and local accessibility requirements for public facilities.",
    image: "/assets/services/lobby-signs.jpg",
    alt: "ADA compliant tactile signs with Grade 2 braille for public buildings",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "LA County Courts — ADA Signage Package",
    year: "2015", // TODO: Replace with actual year
    location: "Los Angeles County Superior Court — multiple courthouse facilities", // TODO: Replace with specific courthouse names
    gc: "Contact us for GC reference", // TODO: Replace with actual GC name if permitted
    challenge:
      "Los Angeles County needed 200+ ADA-compliant signs across multiple courthouse facilities within a tight 90-day timeline.",
    solution:
      "Dedicated project team, parallel production workflow, and coordinated installations across multiple locations simultaneously.",
    result:
      "All 200+ signs delivered and installed within 90 days with zero defects. Passed all ADA compliance inspections on first review.",
    metrics: ["200+ signs", "90 days", "Zero defects"],
  },
  {
    id: 2,
    title: "LA Metro — Transit Station Signage",
    year: "2010–2012", // TODO: Replace with actual year range
    location: "Multiple LA Metro transit stations", // TODO: Replace with specific station names
    gc: "Contact us for GC reference", // TODO: Replace with actual GC name if permitted
    challenge:
      "Comprehensive wayfinding and identification signage for multiple transit stations, demanding strict durability standards and consistency.",
    solution:
      "Standardized production process for visual consistency, transit-grade materials, installations coordinated around active station operations.",
    result:
      "Signage delivered across multiple Metro stations with consistent quality. All signs met Metro's durability and visibility specifications.",
    metrics: ["Multiple stations", "Transit-grade", "Consistent branding"],
  },
  {
    id: 3,
    title: "Hollywood Burbank Airport — Terminal Renovation",
    year: "2015", // TODO: Replace with actual year
    location: "Hollywood Burbank Airport terminal", // TODO: Replace with specific terminal
    gc: "Contact us for GC reference", // TODO: Replace with actual GC name if permitted
    challenge:
      "Updated interior and exterior signage meeting FAA guidelines, airport security requirements, and tight construction schedules.",
    solution:
      "Coordinated with multiple contractors and airport operations to install during approved work windows. Aviation-grade materials throughout.",
    result:
      "Complete signage package delivered on schedule without disrupting airport operations. Approved by airport authority on first submission.",
    metrics: ["Zero disruptions", "FAA compliant", "On schedule"],
  },
];

// Service area: specific counties served
const serviceAreaCounties = [
  "Los Angeles County",
  "Ventura County",
  "Orange County",
  "San Bernardino County",
  "Riverside County",
  "Santa Barbara County (southern)",
];

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
      {
        "@type": "Question",
        "name": "What certifications does Advanced Sign & Banner hold?",
        "acceptedAnswer": { "@type": "Answer", "text": "We hold DBE (Disadvantaged Business Enterprise), SBE (Small Business Enterprise), SABE (Small and Emerging Business Enterprise), CBE (Community Business Enterprise), Micro-SBE, and SB-PW certifications. All are current and verifiable through the issuing agencies." },
      },
      {
        "@type": "Question",
        "name": "Do you handle certified payroll for prevailing wage projects?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We are fully prevailing wage compliant and handle all certified payroll reporting, DIR registration requirements, and labor compliance documentation for public works projects." },
      },
      {
        "@type": "Question",
        "name": "What is your ADA signage inspection pass rate?",
        "acceptedAnswer": { "@type": "Answer", "text": "We maintain a first-inspection pass rate on ADA signage projects. Our signs comply with ADA Standards for Accessible Design (2010), California Building Code Title 24, and include tactile characters and Grade 2 braille. We review specifications before fabrication to catch errors early." },
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for public works projects?",
        "acceptedAnswer": { "@type": "Answer", "text": "We serve general contractors and public agencies across Los Angeles County, Ventura County, Orange County, San Bernardino County, Riverside County, and southern Santa Barbara County from our shop in Chatsworth, CA." },
      },
      {
        "@type": "Question",
        "name": "What types of signs do you provide for public works projects?",
        "acceptedAnswer": { "@type": "Answer", "text": "We provide construction site signs, ADA-compliant signage with braille, building identification signs, wayfinding and directional signs, room ID signs, restroom signs, parking signs, and elevator signs for public works and prevailing wage projects." },
      },
    ],
  }), []);
  useStructuredData("public-works-faq", faqData);

  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-navy mb-6 shadow-sm">
            <Shield size={16} />
            Certified Public Works Sign Contractor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Public Works Signage
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Prequalified and ready for your next public works bid. Fully
            certified, prevailing wage compliant, and experienced with public
            agency requirements since 1999.
          </p>
          <Link
            to="/contact"
            className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Licensing & Registration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Licensing & Registration
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                  CSLB Contractor License
                </p>
                {/* TODO: Replace XXXXXXX with real CSLB license number */}
                <p className="font-bold text-navy text-lg">
                  License #XXXXXXX
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Classification: C-45 (Sign) — Active
                </p>
                <a
                  href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light mt-2 transition-colors"
                >
                  Verify on CSLB <ExternalLink size={12} />
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                  DIR Registration
                </p>
                {/* TODO: Replace XXXXXXXXXX with real DIR registration number */}
                <p className="font-bold text-navy text-lg">
                  DIR #XXXXXXXXXX
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Registered for Public Works — Active
                </p>
                <a
                  href="https://efiling.dir.ca.gov/PWCR/Search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light mt-2 transition-colors"
                >
                  Verify on DIR <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="bg-white rounded-lg p-4 border border-gray-100"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-bold text-navy text-sm">
                    {cert.abbr}
                  </span>
                  <span className="text-xs text-gray-400">{cert.agency}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{cert.full}</p>
                <div className="flex items-center justify-between">
                  {/* TODO: Replace cert numbers with real certification numbers */}
                  <span className="text-xs font-mono text-gray-400">
                    {cert.certNumber}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold-light transition-colors"
                  >
                    Verify <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Bonding */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Insurance & Bonding
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                General Liability
              </p>
              {/* TODO: Replace with actual GL policy limits */}
              <p className="font-bold text-navy text-lg">$2M / $4M</p>
              <p className="text-sm text-gray-500 mt-1">
                Per occurrence / aggregate
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Workers' Compensation
              </p>
              {/* TODO: Replace with actual WC limits */}
              <p className="font-bold text-navy text-lg">Statutory Limits</p>
              <p className="text-sm text-gray-500 mt-1">
                Full coverage for all field crews
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Bonding Capacity
              </p>
              {/* TODO: Replace with actual bonding capacity */}
              <p className="font-bold text-navy text-lg">Up to $X per project</p>
              <p className="text-sm text-gray-500 mt-1">
                Performance & payment bonds available
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            COI available upon request. Additional insured endorsements
            available for your project.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">
            Specialized Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive signage solutions for public works and prevailing wage
            projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADA Signage Expertise */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2">
            ADA Signage Expertise
          </h2>
          <p className="text-gray-600 mb-8">
            ADA compliance is where sign subs get GCs in trouble. We get it right the first time.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">
                Compliance Standards
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>ADA Standards for Accessible Design (2010)</li>
                <li>California Building Code Title 24</li>
                <li>Tactile characters: raised 1/32" min, sans-serif</li>
                <li>Grade 2 braille below corresponding text</li>
                <li>Mounting height: 48"–60" AFF to baseline</li>
                <li>Non-glare finish, 70% contrast ratio min</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">
                Sign Types
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Room identification signs</li>
                <li>Directional and wayfinding signs</li>
                <li>Restroom signs</li>
                <li>Exit and stairwell signs</li>
                <li>Floor identification signs</li>
                <li>Parking and accessible route signs</li>
                <li>Elevator signs</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">
              Why GCs Choose Us for ADA
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-navy">First-Inspection Pass Rate</p>
                <p>Our signs pass ADA inspection on the first review — no costly re-fabrication or schedule delays.</p>
              </div>
              <div>
                <p className="font-medium text-navy">Spec Review Process</p>
                <p>We review architectural specs before fabrication and flag errors that would fail inspection.</p>
              </div>
              <div>
                <p className="font-medium text-navy">Compliance Liability</p>
                <p>Non-compliant ADA signs are the GC's problem. We eliminate that risk with verified compliance on every sign.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              See our{" "}
              <button
                onClick={() => setExpandedCase(1)}
                className="text-gold hover:text-gold-light transition-colors underline"
              >
                LA County Courts case study
              </button>
              {" "}— 200+ ADA signs, zero defects.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities & Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Capabilities & Equipment
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">
                Fabrication
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>ADA-compliant tactile signs with Grade 2 braille</li>
                <li>Dimensional letters (aluminum, acrylic, PVC)</li>
                <li>Channel letters — illuminated and non-illuminated</li>
                <li>CNC routed panels and dimensional elements</li>
                <li>Large-format digital printing (UV, solvent, latex)</li>
                <li>Vinyl graphics and cut lettering</li>
                <li>Laser engraving (wood, acrylic, metal, glass)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">
                Materials & Methods
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Substrates: aluminum, acrylic, PVC, Dibond, HDU foam</li>
                <li>Print: UV-cured, eco-solvent, latex wide-format</li>
                <li>Wraps: 3M and Avery Dennison certified materials</li>
                <li>Illumination: LED modules, raceway, halo-lit</li>
                <li>Mounting: mechanical fasteners, VHB tape, standoffs</li>
                <li>Max panel size: up to 4' x 8' single sheet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8">Case Studies</h2>
          <div className="space-y-3">
            {caseStudies.map((study) => (
              <div key={study.id} className="border rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() =>
                    setExpandedCase(
                      expandedCase === study.id ? null : study.id
                    )
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-navy text-sm sm:text-base">
                      {study.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {study.year} · {study.location}
                    </p>
                  </div>
                  {expandedCase === study.id ? (
                    <ChevronUp
                      size={18}
                      className="text-gray-400 flex-shrink-0 ml-4"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-gray-400 flex-shrink-0 ml-4"
                    />
                  )}
                </button>

                {expandedCase === study.id && (
                  <div className="px-5 pb-5 border-t">
                    <div className="grid md:grid-cols-3 gap-6 mt-5">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                          Challenge
                        </p>
                        <p className="text-sm text-gray-600">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                          Solution
                        </p>
                        <p className="text-sm text-gray-600">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                          Result
                        </p>
                        <p className="text-sm text-gray-600">{study.result}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {study.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded"
                        >
                          {metric}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400 ml-auto">
                        {study.gc}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevailing Wage & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Prevailing Wage Compliance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We have extensive experience with prevailing wage requirements for
            public works projects. Our team handles all certified payroll
            documentation, compliance reporting, and ensures full adherence to
            federal, state, and local wage determinations.
          </p>
          <div className="bg-gray-50 rounded-lg p-5 mt-6">
            <h3 className="font-bold text-navy text-sm mb-3">
              Compliance Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-navy">Certified Payroll</p>
                {/* TODO: Replace with actual system used */}
                <p>
                  Submitted via LCPtracker / DIR eCPR for all public works
                  projects
                </p>
              </div>
              <div>
                <p className="font-medium text-navy">Labor</p>
                {/* TODO: Replace with actual labor arrangement */}
                <p>
                  Open shop with full prevailing wage compliance on all public
                  works
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Record */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Safety Record</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                EMR (Experience Modification Rate)
              </p>
              {/* TODO: Replace with actual EMR */}
              <p className="font-bold text-navy text-2xl">X.XX</p>
              <p className="text-sm text-gray-500 mt-1">Current year</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                OSHA Recordable Incidents
              </p>
              {/* TODO: Replace with actual incident count */}
              <p className="font-bold text-navy text-2xl">0</p>
              <p className="text-sm text-gray-500 mt-1">Last 3 years</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Safety Program
              </p>
              <p className="font-bold text-navy text-sm">
                IIPP compliant
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Written safety plan, tailgate meetings, PPE provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Service Area</h2>
          <p className="text-gray-600 mb-4">
            Based in Chatsworth, CA, we serve general contractors and public
            agencies throughout Southern California:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreaCounties.map((county) => (
              <span
                key={county}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded"
              >
                {county}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Projects outside this area considered on a case-by-case basis.
            Contact us to discuss.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "What certifications does Advanced Sign & Banner hold?", a: "We hold DBE, SBE, SABE, CBE, Micro-SBE, and SB-PW certifications — all current and verifiable through the issuing agencies. These prequalify us for public works bids across Southern California." },
              { q: "Do you handle certified payroll for prevailing wage projects?", a: "Yes. We are fully prevailing wage compliant and handle all certified payroll reporting, DIR registration requirements, and labor compliance documentation for public works projects." },
              { q: "What is your ADA signage inspection pass rate?", a: "We maintain a first-inspection pass rate on ADA signage projects. Our signs comply with ADA 2010, California Building Code Title 24, and include tactile characters and Grade 2 braille. We review specs before fabrication to catch errors early." },
              { q: "What areas do you serve?", a: "We serve general contractors and public agencies across Los Angeles County, Ventura County, Orange County, San Bernardino County, Riverside County, and southern Santa Barbara County from our shop in Chatsworth, CA." },
              { q: "What types of signs do you provide?", a: "Construction site signs, ADA-compliant signage with braille, building identification signs, wayfinding and directional signs, room ID signs, restroom signs, parking signs, and elevator signs." },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-medium text-navy">{item.q}</span>
                  <span className="text-gray-400 ml-4 flex-shrink-0">
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            Ready to discuss your next public works project?
          </p>
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
          <p className="text-gray-500 text-sm mt-4">
            We also offer <Link to="/services" className="text-navy font-medium underline hover:text-gold">commercial signage services</Link> including
            vehicle wraps, lobby signs, wall graphics, and laser engraving.
          </p>
        </div>
      </section>
    </div>
  );
}
