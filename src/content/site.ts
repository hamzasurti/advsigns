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
  tollFree: "800-601-7446",
  tollFreeHref: "tel:800-601-7446",
  email: "info@advsigns.net",
  emailHref: "mailto:info@advsigns.net",
  street: "21354 Nordhoff St. Ste 111",
  cityLine: "Chatsworth, CA 91311",
  mapsHref: "https://maps.google.com/?q=21354+Nordhoff+St+Ste+111+Chatsworth+CA+91311",
  mapsEmbed:
    "https://maps.google.com/maps?q=21354+Nordhoff+St+Suite+111,+Chatsworth,+CA+91311&z=15&output=embed",
  /* From the owner's previous site (Wayback Machine, 2019 to 2022). TODO(owner): confirm. */
  hours: "Monday to Friday, 9 am to 5 pm",
  founded: 1999,
  blurb:
    "A family-owned sign shop in Chatsworth, making signs for general contractors, public agencies, and businesses since 1999.",
};

export const navLinks = [
  { label: "Public Works", to: "/public-works" },
  { label: "Signs", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/testimonials" },
];

/* SBE is the one certification the owner stands behind (2026-09-30).
   TODO(owner): issuing agency and certificate number. */
export const certifications = [
  { code: "SBE", name: "Small Business Enterprise" },
];

/*
  Every city on the owner's install list is in Los Angeles County. Add other
  counties only when the owner names them.
*/
export const counties = ["Los Angeles County"];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const heroVideos = [
  "/assets/hero/video/banner-1.mp4",
  "/assets/hero/video/banner-2.mp4",
  "/assets/hero/video/banner-3.mp4",
];
export const heroPoster = "/assets/hero/building-signs.jpg";
export const heroVideoCaption = "On the flatbed printer in our Chatsworth shop";

export const homeIntro = {
  lead:
    "A Chatsworth sign shop serving contractors, public agencies and businesses across Los Angeles since 1999.",
  heading: "A family-owned sign shop in Chatsworth since 1999.",
  paragraphs: [
    "Advanced Sign & Banner is a full-service sign company in Chatsworth, California. Since 1999 we have designed, printed, and installed signs for general contractors, public agencies, and local businesses across Los Angeles County.",
    "Our work spans street signage, ADA signs, building letters, lobby signs, vehicle wraps, wall graphics, banners, and laser engraving. We are SBE certified and take on prevailing-wage public works projects.",
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
  image: string | null;
  alt: string;
  blurb: string;
}[] = [
  {
    title: "Street Signs",
    to: "/public-works",
    division: "Public works",
    image: null,
    alt: "Drawing of a street-name blade and a speed limit panel on one post",
    blurb: "Street name blades, regulatory and parking signs, wayfinding and work-zone signs.",
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
    blurb: "Wall murals, window graphics and floor graphics for interiors and storefronts.",
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

/* ------------------------------------------------------------------ */
/* Public works                                                        */
/* ------------------------------------------------------------------ */

export const publicWorks = {
  badge: "Certified public works sign contractor",
  lead:
    "Certified, prevailing-wage compliant, and familiar with public-agency bid requirements.",
  /* TODO(owner): licence class and number, DIR registration, bonding and insurance are not stated anywhere yet. */
  credentials: [
    { label: "Certified", detail: "SBE, Small Business Enterprise" },
    { label: "Prevailing wage", detail: "Certified payroll handled" },
    { label: "Licensed & insured", detail: "Details on request" },
    { label: "Established", detail: "1999, family-owned" },
  ],
  servicesHeading: "What we build for public works",
  services: [
    {
      title: "Street Signs",
      description: "Street name blades, regulatory and parking signs, wayfinding and work-zone signs for cities, agencies and job sites.",
      /* TODO(owner): confirm which of these they make in-house and the sheeting grade used. */
      image: null as string | null,
      alt: "Drawing of a street-name blade and a speed limit panel on one post",
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
    heading: "ADA signs, made to the standard",
    lead:
      "Room and door signs with raised characters and Grade 2 braille, made to the 2010 ADA Standards and California’s Title 24.",
    /* TODO(owner): add reasons contractors choose us for ADA work, in your own words. Designs skip this list while it is empty. */
    points: [] as { title: string; body: string }[],
  },
  /*
    The agencies below were named on the first version of this site, and the
    courthouse letters are in our photos. Dates, sign counts and outcomes were
    never supplied, so none are shown. TODO(owner): add the real scope, year
    and a contact for each, or remove any that should not be named.
  */
  caseStudiesHeading: "Selected clients",
  caseStudies: [
    {
      id: 1,
      title: "Los Angeles County courthouses",
      year: "",
      meta: "Superior Court of California, County of Los Angeles",
      summary:
        "Signs for Los Angeles County courthouses, including the building letters on the Glendale Courthouse. Details and references on request.",
      metrics: [] as string[],
    },
    {
      id: 2,
      title: "LA Metro stations",
      year: "",
      meta: "Los Angeles County Metropolitan Transportation Authority",
      summary: "Signs for LA Metro stations. Details and references on request.",
      metrics: [] as string[],
    },
    {
      id: 3,
      title: "Hollywood Burbank Airport terminals",
      year: "",
      meta: "Hollywood Burbank Airport",
      summary: "Signs for terminals at Hollywood Burbank Airport. Details and references on request.",
      metrics: [] as string[],
    },
  ],
  wage: {
    heading: "Prevailing wage, handled",
    body:
      "We work on prevailing-wage public works projects and handle the certified payroll paperwork, so your team can focus on the schedule.",
  },
  area: {
    heading: "Service area",
    body: "Based in Chatsworth. We have installed signs across Los Angeles County, from Lancaster to Bellflower and from Chatsworth to Pomona.",
  },
  faqHeading: "Common questions",
  faqs: [
    {
      q: "What certifications do you hold?",
      a: "SBE (Small Business Enterprise). Ask us for the current certificate when you bid.",
    },
    {
      q: "Do you handle certified payroll for prevailing wage projects?",
      a: "Yes. We handle the certified payroll paperwork on prevailing-wage public works projects.",
    },
    {
      q: "Do your ADA signs include braille?",
      a: "Yes. Room and door signs get raised characters and Grade 2 braille, made to the 2010 ADA Standards and California’s Title 24.",
    },
    {
      q: "What areas do you serve?",
      a: "We have installed signs across Los Angeles County, from Lancaster to Bellflower, working from our shop in Chatsworth.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Commercial services                                                 */
/* ------------------------------------------------------------------ */

export const commercial = {
  lead:
    "Street, building and ADA signs for public works. Lobby signs, vehicle wraps, wall graphics and engraving for businesses. Banners, embroidery and special projects too.",
  /* Things the shop makes that are not one of the seven sign types. From the owner's earlier site. */
  extras: [
    { title: "Banners and A-frames", body: "Vinyl and roll-up banners printed in-house, hemmed and grommeted, plus A-frames and canvas prints." },
    { title: "Embroidery and screen printing", body: "Shirts, caps, jackets and towels with your logo, for crews and front desks." },
    { title: "Special projects", body: "Convention banner walls, pull-up stands, holiday displays and one-off installations." },
  ],
  services: [
    {
      title: "Lobby Signs",
      heading: "Lobby signs in Los Angeles",
      description: "Professional dimensional letters and logos for your reception area.",
      body:
        "We cut dimensional letters and logos from acrylic, aluminum, and foam on our CNC router, paint them in your company’s colors, and mount them on the wall. We design and install lobby signs for offices and shops across Los Angeles and the San Fernando Valley.",
      image: "/assets/improved-v2/hero/lobby-signs.jpg",
      alt: "Dimensional lobby sign letters for MicaBella Cosmetics in Los Angeles",
    },
    {
      title: "Vehicle Wraps",
      heading: "Vehicle wraps in the San Fernando Valley",
      description: "High-impact vehicle graphics and wraps that turn heads on the road.",
      body:
        "We do full wraps, partial wraps, vinyl lettering, and vehicle magnets on cars, vans, trucks, and trailers, designed and printed in our Chatsworth shop. One vehicle or a whole fleet.",
      image: "/assets/improved-v2/hero/vehicle-wraps.jpg",
      alt: "Full vehicle wrap on a Black Bear Moving box truck in the San Fernando Valley",
    },
    {
      title: "Wall Graphics",
      heading: "Wall graphics and murals",
      description: "Wall murals, window graphics and floor graphics for interiors and storefronts.",
      body:
        "Custom wall graphics and murals, printed in-house on vinyl, canvas, and aluminum panels up to 60 inches wide, and install the finished work. One of our murals is twelve printed aluminum panels, about 27 by 15 feet.",
      image: "/assets/improved-v2/services/wall-graphics.jpg",
      alt: "Wall graphics across an office break room",
    },
    {
      title: "Laser Engraving",
      heading: "Laser engraving in Chatsworth, CA",
      description: "Precision laser engraving for awards, plaques, and custom products.",
      body:
        "Precision laser engraving for awards, plaques, nameplates, and custom products, such as the custom-marked pens we made for Los Angeles City College.",
      image: "/assets/improved-v2/services/laser-engraving.jpg",
      alt: "Custom-marked pens for Los Angeles City College from our Chatsworth sign shop",
    },
    {
      title: "Special Projects",
      heading: "Special projects and custom signage",
      description: "Custom solutions for unique signage needs and specialized installations.",
      body:
        "Not every project fits a standard category. We take on custom signage challenges: oversized banners, convention banner walls, pull-up banner stands, LED channel letters, pylon signs, and one-of-a-kind installations.",
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
  | "Street Signs"
  | "Building Signs"
  | "ADA Signage"
  | "Lobby Signs"
  | "Vehicle Wraps"
  | "Wall Graphics"
  | "Banners & Displays"
  | "Engraving"
  | "Embroidery";

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
  /* From the owner's current site (advsigns.net, fetched 2026-09-30). Captions describe what the photo shows. */
  {
    id: 13,
    title: "Office park directory",
    category: "Street Signs",
    description: "Post-and-panel tenant directory for two buildings.",
    image: "/assets/live/professional-properties-directory.jpg",
    shape: "wide",
  },
  {
    id: 12,
    title: "Rekal Court apartment sign",
    category: "Street Signs",
    description: "Post-mounted aluminum sign with a changeable vacancy panel.",
    image: "/assets/live/rekal-court-post-sign.jpg",
    shape: "tall",
  },
  {
    id: 14,
    title: "Whitsett Park leasing sign",
    category: "Street Signs",
    description: "Printed aluminum panel for an apartment community.",
    image: "/assets/live/whitsett-park-sign.jpg",
    shape: "tall",
  },
  {
    id: 15,
    title: "Site signs on a hillside lot",
    category: "Street Signs",
    description: "Two post-and-panel signs for a property listing.",
    image: "/assets/live/hillside-site-signs.jpg",
    shape: "wide",
  },
  {
    id: 16,
    title: "Project sign on wood posts",
    category: "Street Signs",
    description: "Public notice panel set on 4x4 posts.",
    image: "/assets/live/project-sign-posts.jpg",
    shape: "wide",
  },
  {
    id: 17,
    title: "Faith Lutheran Church monument",
    category: "Street Signs",
    description: "Changeable-letter reader board in a stone monument.",
    image: "/assets/live/faith-lutheran-monument.jpg",
    shape: "wide",
  },
  {
    id: 18,
    title: "American Red Cross monument sign",
    category: "Street Signs",
    description: "Blood donation center identification, panel on a concrete base.",
    image: "/assets/live/red-cross-monument.jpg",
    shape: "wide",
  },
  {
    id: 19,
    title: "Northridge Auto Sales pylon",
    category: "Street Signs",
    description: "Double-sided pylon sign on a single pole.",
    image: "/assets/live/northridge-auto-pylon.jpg",
    shape: "wide",
  },
  {
    id: 20,
    title: "Gurnick Academy pylon panels",
    category: "Street Signs",
    description: "Tenant panels on a shared pylon.",
    image: "/assets/live/gurnick-academy-pylon.jpg",
    shape: "tall",
  },
  {
    id: 21,
    title: "Address sign, 6952",
    category: "Street Signs",
    description: "Routed address panel with a painted logo.",
    image: "/assets/live/sv-address-sign.jpg",
    shape: "wide",
  },
  {
    id: 22,
    title: "St. Mary School letters",
    category: "Building Signs",
    description: "Dimensional letters on a stucco facade.",
    image: "/assets/live/st-mary-school-letters.jpg",
    shape: "wide",
  },
  {
    id: 23,
    title: "Golden Bolt Fulfillment Center",
    category: "Building Signs",
    description: "Logo and letters over the entrance of a warehouse.",
    image: "/assets/live/golden-bolt-fulfillment.jpg",
    shape: "wide",
  },
  {
    id: 24,
    title: "Reseda Medical Arts Building",
    category: "Building Signs",
    description: "Building letters and a caduceus mark on the tower.",
    image: "/assets/live/reseda-medical-arts.jpg",
    shape: "wide",
  },
  {
    id: 25,
    title: "Caduceus mark, Reseda Medical Arts",
    category: "Building Signs",
    description: "Cut aluminum emblem, mounted on standoffs.",
    image: "/assets/live/reseda-caduceus.jpg",
    shape: "wide",
  },
  {
    id: 26,
    title: "Zdenek Eye Institute",
    category: "Building Signs",
    description: "Panel sign with the practice name and logo.",
    image: "/assets/live/zdenek-eye-institute.jpg",
    shape: "wide",
  },
  {
    id: 27,
    title: "Showroom letters",
    category: "Building Signs",
    description: "Channel letters on a painted fascia.",
    image: "/assets/live/showroom-letters.jpg",
    shape: "wide",
  },
  {
    id: 28,
    title: "MiaTessa building sign",
    category: "Building Signs",
    description: "Logo cabinet and letters on the showroom facade.",
    image: "/assets/live/miatessa-building.jpg",
    shape: "wide",
  },
  {
    id: 29,
    title: "Mica Beauty Cosmetics building letters",
    category: "Building Signs",
    description: "Large letters on a corner elevation.",
    image: "/assets/live/mica-beauty-building.jpg",
    shape: "wide",
  },
  {
    id: 30,
    title: "Above Rinaldi Labs",
    category: "Building Signs",
    description: "Letters and a hexagon logo on a stucco wall.",
    image: "/assets/live/above-rinaldi-labs.jpg",
    shape: "wide",
  },
  {
    id: 31,
    title: "Unique Restoration",
    category: "Building Signs",
    description: "Letters and a DKI member panel over the entrance.",
    image: "/assets/live/unique-restoration-letters.jpg",
    shape: "wide",
  },
  {
    id: 32,
    title: "cebu sign cabinet",
    category: "Building Signs",
    description: "Illuminated cabinet with dimensional letters.",
    image: "/assets/live/cebu-cabinet.jpg",
    shape: "wide",
  },
  {
    id: 33,
    title: "Goodman Jewelers",
    category: "Building Signs",
    description: "Script letters on a storefront fascia.",
    image: "/assets/live/goodman-jewelers.jpg",
    shape: "wide",
  },
  {
    id: 34,
    title: "Our own sign, lit",
    category: "Building Signs",
    description: "Edge-lit acrylic panel with the Advanced Sign & Banner logo.",
    image: "/assets/live/advanced-sign-lit.jpg",
    shape: "wide",
  },
  {
    id: 35,
    title: "Room 204, tactile and braille",
    category: "ADA Signage",
    description: "Brushed aluminum plate with raised numerals and Grade 2 braille.",
    image: "/assets/live/ada-room-204.jpg",
    shape: "wide",
  },
  {
    id: 36,
    title: "Fire exit sign",
    category: "ADA Signage",
    description: "Raised letters and braille on a green plate.",
    image: "/assets/live/ada-fire-exit.jpg",
    shape: "wide",
  },
  {
    id: 37,
    title: "Suite directional, 201 to 206",
    category: "ADA Signage",
    description: "Brushed plate on standoffs with arrows.",
    image: "/assets/live/directional-plate-201.jpg",
    shape: "wide",
  },
  {
    id: 38,
    title: "Suite directional, 310 to 390",
    category: "ADA Signage",
    description: "Brushed plate on standoffs with arrows.",
    image: "/assets/live/directional-plate-310.jpg",
    shape: "wide",
  },
  {
    id: 39,
    title: "Golden Hippo reception sign",
    category: "Lobby Signs",
    description: "Brushed metal logo and letters.",
    image: "/assets/live/golden-hippo-lobby.jpg",
    shape: "wide",
  },
  {
    id: 40,
    title: "Khalil Center lobby sign",
    category: "Lobby Signs",
    description: "Dimensional letters and logo mark.",
    image: "/assets/live/khalil-center-lobby.jpg",
    shape: "wide",
  },
  {
    id: 41,
    title: "Pets Global lobby sign",
    category: "Lobby Signs",
    description: "Letters and logo on a clear acrylic panel.",
    image: "/assets/live/pets-global-lobby.jpg",
    shape: "wide",
  },
  {
    id: 42,
    title: "Flip It Homes reception",
    category: "Lobby Signs",
    description: "Letters on a feature wall behind the desk.",
    image: "/assets/live/flip-it-homes-lobby.jpg",
    shape: "wide",
  },
  {
    id: 43,
    title: "Transamerica Financial Advisors",
    category: "Lobby Signs",
    description: "Dimensional logo and letters, lit from above.",
    image: "/assets/live/transamerica-lobby.jpg",
    shape: "wide",
  },
  {
    id: 44,
    title: "Prudent Security Solutions",
    category: "Lobby Signs",
    description: "Printed acrylic panel on standoffs.",
    image: "/assets/live/prudent-security-lobby.jpg",
    shape: "wide",
  },
  {
    id: 45,
    title: "One Two lobby letters",
    category: "Lobby Signs",
    description: "Thin dimensional letters and a logo mark.",
    image: "/assets/live/one-two-lobby.jpg",
    shape: "wide",
  },
  {
    id: 46,
    title: "ROE Creative Display letters",
    category: "Lobby Signs",
    description: "Painted dimensional letters, close up.",
    image: "/assets/live/roe-letters.jpg",
    shape: "wide",
  },
  {
    id: 47,
    title: "Zenedge lobby letters",
    category: "Lobby Signs",
    description: "Flat-cut letters on a white wall.",
    image: "/assets/live/zenedge-lobby.jpg",
    shape: "wide",
  },
  {
    id: 48,
    title: "Kermisch & Paletz, LLP",
    category: "Lobby Signs",
    description: "Panel sign with a monogram.",
    image: "/assets/live/kermisch-paletz-lobby.jpg",
    shape: "wide",
  },
  {
    id: 49,
    title: "Western International Securities",
    category: "Lobby Signs",
    description: "Dimensional letters on a lobby wall.",
    image: "/assets/live/western-international-lobby.jpg",
    shape: "wide",
  },
  {
    id: 50,
    title: "Malibu Community Collective",
    category: "Lobby Signs",
    description: "Printed acrylic panel on standoffs.",
    image: "/assets/live/malibu-collective-lobby.jpg",
    shape: "wide",
  },
  {
    id: 51,
    title: "Conroy’s Flowers, Encino",
    category: "Vehicle Wraps",
    description: "Full wrap on a Nissan Cube.",
    image: "/assets/live/conroys-flowers-cube.jpg",
    shape: "wide",
  },
  {
    id: 52,
    title: "A Construction Heating & Air",
    category: "Vehicle Wraps",
    description: "Lettering and logo on a Transit Connect.",
    image: "/assets/live/a-construction-van.jpg",
    shape: "wide",
  },
  {
    id: 53,
    title: "Unique Restoration box truck",
    category: "Vehicle Wraps",
    description: "Box graphics with services and phone.",
    image: "/assets/live/unique-restoration-truck.jpg",
    shape: "wide",
  },
  {
    id: 54,
    title: "Mama Shawerma van",
    category: "Vehicle Wraps",
    description: "Partial wrap on a catering van.",
    image: "/assets/live/mama-shawerma-van.jpg",
    shape: "wide",
  },
  {
    id: 55,
    title: "MiaTessa box truck",
    category: "Vehicle Wraps",
    description: "Logo and lettering on a box truck.",
    image: "/assets/live/miatessa-truck.jpg",
    shape: "wide",
  },
  {
    id: 56,
    title: "Galaxy Security patrol car",
    category: "Vehicle Wraps",
    description: "Lettering on a patrol vehicle.",
    image: "/assets/live/galaxy-security-car.jpg",
    shape: "wide",
  },
  {
    id: 57,
    title: "Canoga Park Florist van",
    category: "Vehicle Wraps",
    description: "Partial wrap with printed flowers.",
    image: "/assets/live/canoga-park-florist-van.jpg",
    shape: "wide",
  },
  {
    id: 58,
    title: "Lighting FX electrical van",
    category: "Vehicle Wraps",
    description: "Lettering and logo on a cargo van.",
    image: "/assets/live/lighting-fx-van.jpg",
    shape: "wide",
  },
  {
    id: 59,
    title: "Leaning Tower Pizza van",
    category: "Vehicle Wraps",
    description: "Full wrap on a delivery van.",
    image: "/assets/live/leaning-tower-van.jpg",
    shape: "wide",
  },
  {
    id: 60,
    title: "DKI emergency services truck",
    category: "Vehicle Wraps",
    description: "Full box wrap.",
    image: "/assets/live/dki-truck.jpg",
    shape: "wide",
  },
  {
    id: 61,
    title: "SubZero Ice Cream trailer",
    category: "Vehicle Wraps",
    description: "Full wrap on a cargo trailer.",
    image: "/assets/live/subzero-trailer.jpg",
    shape: "wide",
  },
  {
    id: 62,
    title: "Woodland Warner Flowers van",
    category: "Vehicle Wraps",
    description: "Lettering and graphics on a florist van.",
    image: "/assets/live/woodland-warner-van.jpg",
    shape: "wide",
  },
  {
    id: 63,
    title: "Red Beanz & Rice food truck",
    category: "Vehicle Wraps",
    description: "Full wrap on a food truck.",
    image: "/assets/live/red-beanz-food-truck.jpg",
    shape: "wide",
  },
  {
    id: 64,
    title: "Office values wall",
    category: "Wall Graphics",
    description: "Cut vinyl lettering and graphics in a corridor.",
    image: "/assets/live/trust-expertise-wall.jpg",
    shape: "wide",
  },
  {
    id: 65,
    title: "Icon wall",
    category: "Wall Graphics",
    description: "Printed circles along an office corridor.",
    image: "/assets/live/icon-wall.jpg",
    shape: "wide",
  },
  {
    id: 66,
    title: "Jerk Cafe mural",
    category: "Wall Graphics",
    description: "Printed wall mural around a juice bar.",
    image: "/assets/live/jerk-cafe-mural.jpg",
    shape: "wide",
  },
  {
    id: 67,
    title: "Cut logos on a hedge wall",
    category: "Wall Graphics",
    description: "Printed circles mounted on artificial hedge.",
    image: "/assets/live/daniel-hedge-signs.jpg",
    shape: "wide",
  },
  {
    id: 68,
    title: "Outdoor Living window graphics",
    category: "Wall Graphics",
    description: "Perforated window vinyl and lettering.",
    image: "/assets/live/outdoor-living-window.jpg",
    shape: "wide",
  },
  {
    id: 69,
    title: "Engraved bamboo board",
    category: "Engraving",
    description: "Laser-engraved kitchen board.",
    image: "/assets/live/engraved-cutting-board.jpg",
    shape: "tall",
  },
  {
    id: 70,
    title: "Bows & Arrows plank",
    category: "Engraving",
    description: "Engraved walnut sign.",
    image: "/assets/live/bows-arrows-plank.jpg",
    shape: "wide",
  },
  {
    id: 71,
    title: "Wooden arrow signs",
    category: "Engraving",
    description: "Engraved directional arrows for a camp.",
    image: "/assets/live/wooden-arrow-signs.jpg",
    shape: "tall",
  },
  {
    id: 72,
    title: "Acrylic award",
    category: "Engraving",
    description: "Engraved star award for 25 years of service.",
    image: "/assets/live/acrylic-award.jpg",
    shape: "wide",
  },
  {
    id: 73,
    title: "LACC keychain",
    category: "Engraving",
    description: "Engraved metal keychain.",
    image: "/assets/live/lacc-keychain.jpg",
    shape: "tall",
  },
  {
    id: 74,
    title: "Roll-up banners",
    category: "Banners & Displays",
    description: "Retractable banner stands.",
    image: "/assets/live/roll-up-banners.jpg",
    shape: "wide",
  },
  {
    id: 75,
    title: "Bellapierre backdrop",
    category: "Banners & Displays",
    description: "Printed trade show backdrop.",
    image: "/assets/live/bellapierre-display.jpg",
    shape: "wide",
  },
  {
    id: 76,
    title: "Sue Wong exhibition",
    category: "Banners & Displays",
    description: "Large printed panels for a fashion exhibition.",
    image: "/assets/live/suewong-show.jpg",
    shape: "wide",
  },
  {
    id: 77,
    title: "Regional Symposium banner",
    category: "Banners & Displays",
    description: "Retractable banner for an event.",
    image: "/assets/live/regional-symposium-banner.jpg",
    shape: "tall",
  },
  {
    id: 78,
    title: "Open house A-frames",
    category: "Banners & Displays",
    description: "Coroplast panels in A-frame stands.",
    image: "/assets/live/open-house-a-frames.jpg",
    shape: "wide",
  },
  {
    id: 79,
    title: "Character standees",
    category: "Banners & Displays",
    description: "Printed and cut standees.",
    image: "/assets/live/cat-standees.jpg",
    shape: "wide",
  },
  {
    id: 80,
    title: "Embroidered cap",
    category: "Embroidery",
    description: "Two-tone snapback with script logo.",
    image: "/assets/live/just-cannabis-cap.jpg",
    shape: "wide",
  },
  {
    id: 81,
    title: "Old Town Barbershop cap",
    category: "Embroidery",
    description: "Multi-colour embroidered logo.",
    image: "/assets/live/old-town-barbershop-cap.jpg",
    shape: "wide",
  },
  {
    id: 82,
    title: "Pro Dasher jacket",
    category: "Embroidery",
    description: "Embroidered chest and back.",
    image: "/assets/live/pro-dasher-jacket.jpg",
    shape: "wide",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Street Signs",
  "Building Signs",
  "ADA Signage",
  "Lobby Signs",
  "Vehicle Wraps",
  "Wall Graphics",
  "Banners & Displays",
  "Engraving",
  "Embroidery",
];

/* The shop itself, from the owner's current site. */
export const shopPhotos = [
  { image: "/assets/live/shop-flatbed-printer.jpg", caption: "Checking a print on the UV flatbed" },
  { image: "/assets/live/shop-cnc-router.jpg", caption: "Cutting letters on the CNC router" },
  { image: "/assets/live/shop-cnc-letters.jpg", caption: "Letters off the router bed" },
  { image: "/assets/live/shop-printed-panels.jpg", caption: "Wood-grain panels, printed flat" },
];

export const portfolioNotice =
  "Photos of agency and public works projects are shared on request, along with project-specific references and documentation.";

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  image: "/assets/live/shop-flatbed-printer.jpg",
  imageAlt: "Checking a print on the UV flatbed in the Chatsworth shop",
  paragraphs: [
    "Advanced Sign & Banner is a family-owned sign shop in Chatsworth. Since 1999 we have made and installed signs for general contractors, public agencies and local businesses across Los Angeles County, including work for LA Metro, Hollywood Burbank Airport and Los Angeles County courthouses.",
    "Everything is designed, printed, cut and installed by our own people from one shop on Nordhoff Street: a CNC router, printing up to 60 inches wide, and an embroidery line for the shirts and caps that go out with the signs.",
  ],
  /*
    Only what the owner's earlier site says. It gave no dates beyond 1999.
    TODO(owner): add real milestones (the year of the move to Chatsworth, the
    first public works job, and so on) with the year for each.
  */
  timeline: [
    { year: "1999", event: "Started with one small cutting machine and a goal: quality signs at fair prices." },
    { year: "Today", event: "A family-owned, full-service shop in Chatsworth: design, large-format printing, CNC routing, embroidery, and installation." },
  ],
  /* Each step matches what the old site and customer reviews describe. */
  process: {
    heading: "How we work",
    steps: [
      { title: "Consultation", body: "Call or email with your idea. For larger signs we come out and measure." },
      { title: "Proof", body: "We design the sign and send you a proof to approve." },
      { title: "Fabrication", body: "We print, cut, and build it in our Chatsworth shop." },
      { title: "Installation", body: "Our crew installs the finished sign." },
    ],
    compliance:
      "On public works projects we also handle the certified payroll paperwork, so you can focus on your timeline and budget.",
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
  formLead: "Tell us about your project and we’ll get back to you with a quote.",
  projectTypes: [
    "Street Signage",
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
  body: "Send us the basics and we’ll get back to you with a quote.",
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

/*
  Only numbers that can be sourced: the founding year from the owner's old
  site, and the count of the owner's install cities. Project counts and
  certification counts were removed until the owner supplies them.
*/
export const stats = [
  { value: `${new Date().getFullYear() - business.founded}`, label: "Years in business", detail: `Family-owned since ${business.founded}` },
  { value: `${installCities.length}`, label: "Cities with our signs", detail: "Across Los Angeles County, from Lancaster to Bellflower" },
];
