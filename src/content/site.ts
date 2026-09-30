/*
  Shared site content. Every design experiment renders from this file, so the
  copy, claims and photos stay identical while the presentation changes.

  Page titles, meta descriptions and H1s stay as literals in the page files
  because scripts/seo-lint.mjs reads them from there.
*/

export const business = {
  name: "Advanced Sign & Banner",
  phone: "818-346-2142",
  phoneHref: "tel:818-346-2142",
  email: "info@advsigns.net",
  emailHref: "mailto:info@advsigns.net",
  street: "21354 Nordhoff St. Ste 111",
  cityLine: "Chatsworth, CA 91311",
  mapsHref: "https://maps.google.com/?q=21354+Nordhoff+St+Ste+111+Chatsworth+CA+91311",
  mapsEmbed:
    "https://maps.google.com/maps?q=21354+Nordhoff+St+Suite+111,+Chatsworth,+CA+91311&z=15&output=embed",
  hours: "Monday to Friday, 8 am to 5 pm",
  founded: 1999,
  blurb:
    "Professional signage for general contractors, public agencies, and businesses across Southern California for over 25 years.",
};

export const navLinks = [
  { label: "Public Works", to: "/public-works" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/testimonials" },
];

export const certifications = [
  { code: "DBE", name: "Disadvantaged Business Enterprise" },
  { code: "SBE", name: "Small Business Enterprise" },
  { code: "SABE", name: "Small and Emerging Business Enterprise" },
  { code: "CBE", name: "Community Business Enterprise" },
  { code: "Micro-SBE", name: "Micro Small Business Enterprise" },
  { code: "SB-PW", name: "Small Business Public Works" },
];

export const counties = [
  "Los Angeles",
  "Ventura",
  "Orange",
  "San Bernardino",
  "Riverside",
  "Santa Barbara (south)",
];

export const cities = [
  "Chatsworth", "Northridge", "Woodland Hills", "Encino", "Sherman Oaks", "Van Nuys",
  "Burbank", "Glendale", "Pasadena", "Downtown LA", "West LA", "Santa Monica",
  "Thousand Oaks", "Simi Valley", "Oxnard", "Ventura", "Anaheim", "Irvine", "Ontario",
];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const heroVideos = [
  "/assets/hero/video/banner-1.mp4",
  "/assets/hero/video/banner-2.mp4",
  "/assets/hero/video/banner-3.mp4",
];
export const heroPoster = "/assets/improved-v2/hero/building-signs.jpg";
export const heroVideoCaption = "On the flatbed printer in our Chatsworth shop";

export const homeIntro = {
  lead:
    "A full-service sign shop serving general contractors, public agencies, and local businesses across Los Angeles and Southern California. Designed, fabricated, and installed in-house since 1999.",
  heading: "More than 1,000 projects delivered across Southern California.",
  paragraphs: [
    "Advanced Sign & Banner is a full-service sign company in Chatsworth, California serving Los Angeles, the San Fernando Valley, Ventura County, and all of Southern California. Since 1999 we’ve completed over 1,000 projects for general contractors, public agencies, and commercial businesses.",
    "Our work spans construction signage, ADA-compliant signs, building identification, lobby signs, vehicle wraps, wall graphics, and laser engraving. We are DBE, SBE, SABE, and CBE certified, prequalified for prevailing-wage public works projects.",
  ],
};

export const clients = [
  { name: "LA Metro", kind: "Public agency", logo: "/assets/logos/la-metro.png" },
  { name: "Hollywood Burbank Airport", kind: "Public agency", logo: "/assets/logos/burbank-airport.png" },
  { name: "LA County Superior Court", kind: "Public agency", logo: "/assets/logos/la-county-courts.png" },
  { name: "ALDI", kind: "Commercial", logo: "/assets/logos/aldi.png" },
  { name: "Shelley’s Stereo", kind: "Commercial", logo: "/assets/logos/shelleys-stereo.png" },
  { name: "MicaBella Cosmetics", kind: "Commercial", logo: "/assets/logos/micabella.png" },
];

export type Division = "Public works" | "Commercial";

export const signTypes: {
  title: string;
  to: string;
  division: Division;
  image: string;
  alt: string;
  blurb: string;
}[] = [
  {
    title: "Construction Signs",
    to: "/public-works",
    division: "Public works",
    image: "/assets/improved-v2/hero/construction-signage.jpg",
    alt: "Large printed banner installed on a parking structure in Los Angeles",
    blurb: "Weather-resistant signage for active construction sites and development projects.",
  },
  {
    title: "Building Signs",
    to: "/public-works",
    division: "Public works",
    image: "/assets/improved-v2/hero/building-signs.jpg",
    alt: "Building identification letters on the Glendale Courthouse",
    blurb: "Exterior and interior building signage that meets municipal codes and accessibility standards.",
  },
  {
    title: "Lobby Signs",
    to: "/services",
    division: "Commercial",
    image: "/assets/improved-v2/hero/lobby-signs.jpg",
    alt: "Dimensional lobby sign letters for MicaBella Cosmetics",
    blurb: "Professional dimensional letters and logos for your reception area.",
  },
  {
    title: "Vehicle Wraps",
    to: "/services",
    division: "Commercial",
    image: "/assets/improved-v2/hero/vehicle-wraps.jpg",
    alt: "Full vehicle wrap on a Black Bear Moving box truck in the San Fernando Valley",
    blurb: "High-impact vehicle graphics and wraps that turn heads on the road.",
  },
  {
    title: "Wall Graphics",
    to: "/services",
    division: "Commercial",
    image: "/assets/improved-v2/services/wall-graphics.jpg",
    alt: "Wall graphics across an office break room",
    blurb: "Custom wall murals and graphics that transform interior spaces.",
  },
  {
    title: "Laser Engraving",
    to: "/services",
    division: "Commercial",
    image: "/assets/improved-v2/services/laser-engraving.jpg",
    alt: "Custom-marked pens for Los Angeles City College from the Chatsworth sign shop",
    blurb: "Precision laser engraving for awards, plaques, and custom products.",
  },
];

/* The old site showed "6" twice with no explanation. `detail` says what is counted. */
export const stats = [
  { value: "25+", label: "Years in business", detail: "In Chatsworth since 1999" },
  { value: "1,000+", label: "Projects completed", detail: "For contractors, agencies and businesses" },
  { value: "6", label: "Active certifications", detail: certifications.map((c) => c.code).join(", ") },
  { value: "6", label: "Counties served", detail: counties.join(", ") },
];

/* ------------------------------------------------------------------ */
/* Public works                                                        */
/* ------------------------------------------------------------------ */

export const publicWorks = {
  badge: "Certified public works sign contractor",
  lead:
    "Prequalified for your next bid: certified, prevailing-wage compliant, and experienced with public-agency requirements since 1999.",
  credentials: [
    { label: "Certified", detail: "DBE, SBE, SABE, CBE" },
    { label: "Prevailing wage", detail: "Certified payroll & DIR compliant" },
    { label: "Licensed", detail: "CSLB C-45, DIR registered" },
    { label: "Insured & bonded", detail: "COI available on request" },
  ],
  servicesHeading: "What we build for public works",
  services: [
    {
      title: "Construction Signs",
      description: "Weather-resistant signage for active construction sites and development projects.",
      image: "/assets/improved-v2/hero/construction-signage.jpg",
      alt: "Large printed banner installed on a parking structure in Los Angeles",
    },
    {
      title: "Building Signs",
      description: "Exterior and interior building signage that meets municipal codes and accessibility standards.",
      image: "/assets/improved-v2/hero/building-signs.jpg",
      alt: "Building identification letters on the Glendale Courthouse, Superior Court of California",
    },
    {
      title: "ADA Signage",
      description: "Fully compliant tactile signs with Grade 2 braille for public facilities.",
      /* No real ADA photo exists yet. Designs should draw or typeset this one
         rather than reuse a lobby photo. */
      image: null as string | null,
      alt: "ADA compliant tactile signs with Grade 2 braille for public buildings",
    },
  ],
  ada: {
    heading: "ADA compliance, done right the first time",
    lead:
      "ADA compliance is where sign subs get GCs in trouble. Our signs meet ADA 2010 and California Title 24, with tactile characters and Grade 2 braille reviewed against spec before anything is fabricated.",
    points: [
      {
        title: "First-inspection pass rate",
        body: "Our signs pass ADA inspection on the first review, so there is no re-fabrication or schedule slip.",
      },
      {
        title: "Spec review up front",
        body: "We flag errors in the architectural specs before fabrication, not after installation.",
      },
      {
        title: "We carry the risk",
        body: "Non-compliant ADA signs are the GC’s problem. We take that risk off your plate.",
      },
    ],
  },
  caseStudiesHeading: "Selected projects",
  caseStudies: [
    {
      id: 1,
      title: "LA County Courts, ADA Signage Package",
      year: "2015",
      meta: "Los Angeles County Superior Court",
      summary:
        "200+ ADA-compliant signs across multiple courthouses, delivered and installed within 90 days with zero defects and a first-review compliance pass.",
      metrics: ["200+ signs", "90 days", "Zero defects"],
    },
    {
      id: 2,
      title: "LA Metro, Transit Station Signage",
      year: "2010–2012",
      meta: "Multiple Metro stations",
      summary:
        "Wayfinding and identification signage for multiple transit stations using transit-grade materials, installed around active station operations.",
      metrics: ["Multiple stations", "Transit-grade", "Consistent"],
    },
    {
      id: 3,
      title: "Hollywood Burbank Airport, Terminal Renovation",
      year: "2015",
      meta: "Airport terminal",
      summary:
        "Interior and exterior signage meeting FAA and airport security requirements, installed during approved windows with zero disruption to operations.",
      metrics: ["FAA compliant", "Zero disruptions", "On schedule"],
    },
  ],
  wage: {
    heading: "Prevailing wage, handled",
    body:
      "We are fully prevailing-wage compliant and handle certified payroll, DIR reporting, and labor compliance documentation on every public works project, so your team can focus on the schedule.",
  },
  area: {
    heading: "Service area",
    body: "Based in Chatsworth, serving six Southern California counties:",
  },
  faqHeading: "Common questions",
  faqs: [
    {
      q: "What certifications do you hold?",
      a: "DBE, SBE, SABE, CBE, Micro-SBE, and SB-PW, all current and verifiable through the issuing agencies. These prequalify us for public works bids across Southern California.",
    },
    {
      q: "Do you handle certified payroll for prevailing wage projects?",
      a: "Yes. We handle all certified payroll reporting, DIR registration requirements, and labor compliance documentation for public works projects.",
    },
    {
      q: "What is your ADA inspection pass rate?",
      a: "We maintain a first-inspection pass rate. Our signs meet ADA 2010 and California Title 24, with tactile characters and Grade 2 braille, and we review specs before fabrication.",
    },
    {
      q: "What areas do you serve?",
      a: "General contractors and public agencies across Los Angeles, Ventura, Orange, San Bernardino, Riverside, and southern Santa Barbara counties, from our shop in Chatsworth.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Commercial services                                                 */
/* ------------------------------------------------------------------ */

export const commercial = {
  lead:
    "Professional signage for businesses, retail spaces, and commercial properties, from elegant lobby signs to eye-catching vehicle wraps.",
  services: [
    {
      title: "Lobby Signs",
      heading: "Lobby signs in Los Angeles",
      description: "Professional dimensional letters and logos for your reception area.",
      body:
        "First impressions start in the lobby. We fabricate dimensional letters, logos, and reception signs using brushed aluminum, acrylic, PVC, and mixed-media materials. Whether you need pin-mounted standoff letters or flush-mounted cut vinyl, we design and install lobby signage for offices, medical buildings, and retail spaces across Los Angeles, the San Fernando Valley, and Ventura County.",
      image: "/assets/improved-v2/hero/lobby-signs.jpg",
      alt: "Dimensional lobby sign letters for MicaBella Cosmetics in Los Angeles",
    },
    {
      title: "Vehicle Wraps",
      heading: "Vehicle wraps in the San Fernando Valley",
      description: "High-impact vehicle graphics and wraps that turn heads on the road.",
      body:
        "Turn every vehicle into a mobile billboard. We provide full wraps, partial wraps, and fleet graphics using 3M and Avery premium cast vinyl with laminate protection. Our wraps are designed, printed, and installed in our Chatsworth facility. We serve businesses throughout Los Angeles County, from single vehicles to full fleet programs of 15+ units.",
      image: "/assets/improved-v2/hero/vehicle-wraps.jpg",
      alt: "Full vehicle wrap on a Black Bear Moving box truck in the San Fernando Valley",
    },
    {
      title: "Wall Graphics",
      heading: "Wall graphics and murals",
      description: "Custom wall murals and graphics that transform interior spaces.",
      body:
        "Transform any interior space with custom wall graphics, murals, and environmental branding. We print on adhesive vinyl, fabric, and specialty substrates for offices, retail stores, restaurants, and public spaces. From accent walls to full floor-to-ceiling installations, we handle design, production, and installation across Southern California.",
      image: "/assets/improved-v2/services/wall-graphics.jpg",
      alt: "Wall graphics across an office break room",
    },
    {
      title: "Laser Engraving",
      heading: "Laser engraving in Chatsworth, CA",
      description: "Precision laser engraving for awards, plaques, and custom products.",
      body:
        "Precision laser engraving for awards, plaques, nameplates, and custom products. We engrave on wood, acrylic, glass, metal, and leather using our in-house laser equipment. Ideal for corporate awards, donor recognition walls, memorial plaques, and personalized gifts. Fast turnaround from our Chatsworth shop.",
      image: "/assets/improved-v2/services/laser-engraving.jpg",
      alt: "Custom-marked pens for Los Angeles City College from our Chatsworth sign shop",
    },
    {
      title: "Special Projects",
      heading: "Special projects and custom signage",
      description: "Custom solutions for unique signage needs and specialized installations.",
      body:
        "Not every project fits a standard category. We take on custom signage challenges: oversized banners, trade-show displays, wayfinding systems, channel letters, and one-of-a-kind installations.",
      image: "/assets/improved-v2/services/special-projects.jpg",
      alt: "Holiday snow globe display with custom graphics in Marina del Rey",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

/*
  Captions describe what is visible in each photo. The previous site attached
  agency project names (LA Metro, Burbank Airport, a medical office) to photos
  of other jobs. Those agency projects are listed as written references on the
  Public Works page instead.

  TODO(owner): confirm each caption and add real install photos to
  /public/assets/portfolio/.
*/
export type PortfolioCategory =
  | "Building Signs"
  | "Lobby Signs"
  | "Vehicle Wraps"
  | "Wall Graphics"
  | "Banners & Displays"
  | "Engraving";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  /* Orientation of the source photo, so layouts can crop sensibly. */
  shape: "tall" | "wide";
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Glendale Courthouse building letters",
    category: "Building Signs",
    description: "Exterior identification letters for the Superior Court of California, County of Los Angeles.",
    image: "/assets/improved-v2/hero/building-signs.jpg",
    shape: "wide",
  },
  {
    id: 2,
    title: "MicaBella Cosmetics lobby sign",
    category: "Lobby Signs",
    description: "Dimensional letters and logo on a reception wall.",
    image: "/assets/improved-v2/hero/lobby-signs.jpg",
    shape: "wide",
  },
  {
    id: 3,
    title: "Black Bear Moving box truck wrap",
    category: "Vehicle Wraps",
    description: "Full-color printed wrap on a box truck.",
    image: "/assets/improved-v2/hero/vehicle-wraps.jpg",
    shape: "wide",
  },
  {
    id: 4,
    title: "Parking structure banner",
    category: "Banners & Displays",
    description: "Large-format printed banner installed on a parking structure.",
    image: "/assets/improved-v2/hero/construction-signage.jpg",
    shape: "tall",
  },
  {
    id: 5,
    title: "Golden Bolt reception sign",
    category: "Lobby Signs",
    description: "Dimensional logo and letters behind a reception desk.",
    image: "/assets/improved-v2/services/lobby-signs.jpg",
    shape: "wide",
  },
  {
    id: 6,
    title: "Break room wall graphics",
    category: "Wall Graphics",
    description: "Wall graphics running the length of an office kitchen.",
    image: "/assets/improved-v2/services/wall-graphics.jpg",
    shape: "wide",
  },
  {
    id: 7,
    title: "tgs exterior letters",
    category: "Building Signs",
    description: "Dimensional letters mounted on a building fascia.",
    image: "/assets/improved-v2/services/building-signs.jpg",
    shape: "wide",
  },
  {
    id: 8,
    title: "ROE Creative Display lobby sign",
    category: "Lobby Signs",
    description: "Dimensional letters on a painted feature wall.",
    image: "/assets/improved-v2/services/custom-signs.jpg",
    shape: "wide",
  },
  {
    id: 9,
    title: "Marina del Rey holiday display",
    category: "Banners & Displays",
    description: "Graphics for a seasonal snow globe installation.",
    image: "/assets/improved-v2/services/special-projects.jpg",
    shape: "wide",
  },
  {
    id: 10,
    title: "Black Bear Moving fleet graphics",
    category: "Vehicle Wraps",
    description: "Matching wrap on a second truck in the same fleet.",
    image: "/assets/improved-v2/services/wraps.jpg",
    shape: "wide",
  },
  {
    id: 11,
    title: "Los Angeles City College pens",
    category: "Engraving",
    description: "Custom-marked pens for Los Angeles City College.",
    image: "/assets/improved-v2/services/laser-engraving.jpg",
    shape: "wide",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Building Signs",
  "Lobby Signs",
  "Vehicle Wraps",
  "Wall Graphics",
  "Banners & Displays",
  "Engraving",
];

export const portfolioNotice =
  "Photos of agency and public works projects are shared on request, along with project-specific references and documentation.";

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  image: "/assets/improved-v2/hero/construction-signage.jpg",
  imageAlt: "Advanced Sign & Banner construction site signage project",
  paragraphs: [
    "Advanced Sign & Banner has been the go-to sign subcontractor for general contractors and businesses who demand excellence since 1999. Our portfolio includes LA Metro stations, Burbank Airport terminals, and Los Angeles County courthouses: projects where precision, compliance, and quality are non-negotiable.",
    "From small businesses to large-scale public works projects, we bring the same expertise and craftsmanship to every job. We’re fully certified (DBE, SBE, SABE, CBE) and prevailing wage compliant.",
  ],
  timeline: [
    { year: "1999", event: "Founded in Chatsworth, CA. Commercial and retail signage." },
    { year: "2005", event: "First public works contracts. Obtained DBE, SBE, and related certifications." },
    { year: "2010", event: "Completed signage for LA Metro stations." },
    { year: "2015", event: "Delivered packages for Hollywood Burbank Airport and LA County Courts." },
    { year: "2020", event: "Expanded into vehicle wraps, wall graphics, and laser engraving." },
    { year: "2024", event: "Surpassed 1,000 completed sign projects. Added laser engraving and expanded ADA signage services." },
    { year: "2025", event: "Serving 6 counties across Southern California, a trusted partner for general contractors, public agencies, and commercial properties." },
  ],
  process: {
    heading: "How we work",
    steps: [
      { title: "Consultation", body: "We start with a consultation to understand your needs and site conditions." },
      { title: "Mockups", body: "Our design team produces mockups for your review." },
      { title: "Fabrication", body: "Once approved, signs are fabricated in our facility." },
      { title: "Installation", body: "Finished signs are installed by our professional crews." },
    ],
    compliance:
      "For public works projects, we handle all compliance documentation: certified payroll, prevailing wage reporting, and ADA verification, so you can focus on your timeline and budget.",
  },
  /*
    TODO(owner): add real names, photos and bios, then designs will render this
    section. Entries with an empty name are never shown.
  */
  team: [] as { name: string; role: string; bio: string; image: string | null }[],
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  lead: "Ready to discuss your signage project? Get in touch for a consultation and a free quote.",
  formHeading: "Request a quote",
  formLead: "Tell us about your project and we’ll get back to you within one business day.",
  projectTypes: [
    "Construction Signage",
    "Building Signs",
    "ADA Signage",
    "Vehicle Wraps",
    "Wall Graphics",
    "Lobby Signs",
    "Laser Engraving",
    "Other",
  ],
  timelines: [
    { value: "urgent", label: "Urgent, call to discuss" },
    { value: "standard", label: "Standard (4-6 weeks)" },
    { value: "flexible", label: "Flexible (2-3 months)" },
    { value: "planning", label: "Planning / budgeting" },
  ],
};

export const quickQuote = {
  eyebrow: "Free estimate",
  heading: "Get a quick quote",
  body: "Send us the basics and we’ll get back to you within one business day.",
};

/* ------------------------------------------------------------------ */
/* Photos                                                              */
/* ------------------------------------------------------------------ */

/*
  The photos under /assets/improved-v2/ are straightened, cropped and colour
  corrected versions of the originals (see design-lab/photo-report.md).
  `focal` is the point each crop should centre on, as a CSS object-position.
*/
export const focal: Record<string, string> = {
  "/assets/improved-v2/hero/building-signs.jpg": "50% 47%",
  "/assets/improved-v2/hero/construction-signage.jpg": "51% 47%",
  "/assets/improved-v2/hero/lobby-signs.jpg": "59% 45%",
  "/assets/improved-v2/hero/vehicle-wraps.jpg": "49% 48%",
  "/assets/improved-v2/services/banners.jpg": "50% 50%",
  "/assets/improved-v2/services/building-signs.jpg": "50% 50%",
  "/assets/improved-v2/services/custom-signs.jpg": "50% 49%",
  "/assets/improved-v2/services/embroidery.jpg": "50% 50%",
  "/assets/improved-v2/services/laser-engraving.jpg": "55% 50%",
  "/assets/improved-v2/services/lobby-signs.jpg": "49% 47%",
  "/assets/improved-v2/services/special-projects.jpg": "50% 52%",
  "/assets/improved-v2/services/wall-graphics.jpg": "50% 49%",
  "/assets/improved-v2/services/wraps.jpg": "51% 50%",
};
export const focusOn = (image: string | null) => (image && focal[image]) || "50% 50%";

/* ------------------------------------------------------------------ */
/* Where the signs are                                                 */
/* ------------------------------------------------------------------ */

/*
  Cities where Advanced Sign & Banner has installed signs, from the owner's
  list, with a coordinate for each so a map can place them. "Metropolitan"
  on the owner's list is read as downtown Los Angeles.
*/
export const installCities: { name: string; lon: number; lat: number }[] = [
  { name: "Chatsworth", lon: -118.601, lat: 34.2572 },
  { name: "Northridge", lon: -118.536, lat: 34.2281 },
  { name: "Canoga Park", lon: -118.598, lat: 34.2011 },
  { name: "Woodland Hills", lon: -118.605, lat: 34.1683 },
  { name: "Tarzana", lon: -118.553, lat: 34.1734 },
  { name: "Encino", lon: -118.501, lat: 34.1592 },
  { name: "Van Nuys", lon: -118.449, lat: 34.1867 },
  { name: "North Hollywood", lon: -118.377, lat: 34.172 },
  { name: "Burbank", lon: -118.309, lat: 34.1808 },
  { name: "Glendale", lon: -118.255, lat: 34.1425 },
  { name: "Pasadena", lon: -118.144, lat: 34.1478 },
  { name: "Monrovia", lon: -117.999, lat: 34.1481 },
  { name: "Hollywood", lon: -118.329, lat: 34.0928 },
  { name: "Beverly Hills", lon: -118.4, lat: 34.0736 },
  { name: "Downtown Los Angeles", lon: -118.243, lat: 34.0522 },
  { name: "East Los Angeles", lon: -118.172, lat: 34.0239 },
  { name: "Alhambra", lon: -118.127, lat: 34.0953 },
  { name: "El Monte", lon: -118.028, lat: 34.0686 },
  { name: "West Covina", lon: -117.939, lat: 34.0686 },
  { name: "Pomona", lon: -117.75, lat: 34.0553 },
  { name: "Inglewood", lon: -118.353, lat: 33.9617 },
  { name: "Whittier", lon: -118.033, lat: 33.9792 },
  { name: "Downey", lon: -118.133, lat: 33.9401 },
  { name: "Bellflower", lon: -118.117, lat: 33.8817 },
  { name: "Santa Clarita", lon: -118.542, lat: 34.3917 },
  { name: "Lancaster", lon: -118.137, lat: 34.6868 },
];
