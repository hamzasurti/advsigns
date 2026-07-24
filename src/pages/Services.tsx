import { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";

const services = [
  {
    title: "Lobby Signs",
    description: "Professional dimensional letters and logos for your reception area.",
    image: "/assets/hero/lobby-signs.jpg",
    alt: "Dimensional lobby sign with brushed metal letters in Los Angeles office",
  },
  {
    title: "Vehicle Wraps",
    description: "High-impact vehicle graphics and wraps that turn heads on the road.",
    image: "/assets/hero/vehicle-wraps.jpg",
    alt: "Full vehicle wrap for fleet branding in the San Fernando Valley",
  },
  {
    title: "Wall Graphics",
    description: "Custom wall murals and graphics that transform interior spaces.",
    image: "/assets/services/wall-graphics.jpg",
    alt: "Custom wall mural and graphics installation for commercial interior",
  },
  {
    title: "Special Projects",
    description: "Custom solutions for unique signage needs and specialized installations.",
    image: "/assets/services/special-projects.jpg",
    alt: "Custom signage project for specialized commercial installation",
  },
  {
    title: "Laser Engraving",
    description: "Precision laser engraving for awards, plaques, and custom products.",
    image: "/assets/services/laser-engraving.jpg",
    alt: "Precision laser engraved award plaque from Chatsworth sign shop",
  },
];

const details = [
  {
    title: "Lobby signs in Los Angeles",
    body: "First impressions start in the lobby. We fabricate dimensional letters, logos, and reception signs using brushed aluminum, acrylic, PVC, and mixed-media materials. Whether you need pin-mounted standoff letters or flush-mounted cut vinyl, we design and install lobby signage for offices, medical buildings, and retail spaces across Los Angeles, the San Fernando Valley, and Ventura County.",
  },
  {
    title: "Vehicle wraps in the San Fernando Valley",
    body: "Turn every vehicle into a mobile billboard. We provide full wraps, partial wraps, and fleet graphics using 3M and Avery premium cast vinyl with laminate protection. Our wraps are designed, printed, and installed in our Chatsworth facility. We serve businesses throughout Los Angeles County, from single vehicles to full fleet programs of 15+ units.",
  },
  {
    title: "Wall graphics and murals",
    body: "Transform any interior space with custom wall graphics, murals, and environmental branding. We print on adhesive vinyl, fabric, and specialty substrates for offices, retail stores, restaurants, and public spaces. From accent walls to full floor-to-ceiling installations, we handle design, production, and installation across Southern California.",
  },
  {
    title: "Laser engraving in Chatsworth, CA",
    body: "Precision laser engraving for awards, plaques, nameplates, and custom products. We engrave on wood, acrylic, glass, metal, and leather using our in-house laser equipment. Ideal for corporate awards, donor recognition walls, memorial plaques, and personalized gifts. Fast turnaround from our Chatsworth shop.",
  },
];

export default function Services() {
  usePageMeta({
    title: "Commercial Sign Services",
    description:
      "Lobby signs, vehicle wraps, wall graphics & laser engraving in Los Angeles and San Fernando Valley. Serving Southern California from Chatsworth, CA.",
  });

  const serviceData = useMemo(() => ({
    "@type": "Service",
    "name": "Commercial Signage Services",
    "description": "Lobby signs, vehicle wraps, wall graphics, laser engraving, and custom signage for businesses in Los Angeles and Southern California.",
    "url": "https://advsigns.net/services",
    "provider": { "@id": "https://advsigns.net/#business" },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Los Angeles County, CA" },
      { "@type": "AdministrativeArea", "name": "Ventura County, CA" },
      { "@type": "AdministrativeArea", "name": "Orange County, CA" },
      { "@type": "AdministrativeArea", "name": "San Bernardino County, CA" },
      { "@type": "AdministrativeArea", "name": "Riverside County, CA" },
    ],
    "serviceType": ["Lobby Signs", "Vehicle Wraps", "Wall Graphics", "Laser Engraving", "Channel Letters", "Custom Signs"],
  }), []);
  useStructuredData("commercial-service", serviceData);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-blue-deep text-paper overflow-hidden">
        <img
          src="/assets/hero/vehicle-wraps.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-deep/75 to-blue-deep/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-20">
          <p className="text-sm font-semibold text-flare tracking-[0.14em] uppercase mb-4">
            Commercial services
          </p>
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] max-w-4xl">
            Commercial sign services in Los Angeles
          </h1>
          <p className="mt-6 max-w-2xl text-paper/75 text-lg leading-relaxed">
            Professional signage for businesses, retail spaces, and commercial
            properties, from elegant lobby signs to eye-catching vehicle
            wraps.
          </p>
          <p className="mt-4 text-paper/60 text-sm">
            Looking for public works signage?{" "}
            <Link to="/public-works" className="text-flare font-medium hover:underline">
              See our public works division
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/85 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display font-bold uppercase tracking-tight leading-none text-paper text-xl md:text-2xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 space-y-12">
          {details.map((d) => (
            <div key={d.title}>
              <h2 className="font-display font-bold uppercase tracking-tight text-blue-strong text-2xl md:text-3xl leading-none mb-3">
                {d.title}
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-2xl">{d.body}</p>
            </div>
          ))}
          <p className="text-ink/70 leading-relaxed max-w-2xl">
            Not every project fits a standard category. We take on custom signage
            challenges: oversized banners, trade-show displays, wayfinding
            systems, channel letters, and one-of-a-kind installations.{" "}
            <Link to="/public-works" className="text-blue-strong font-medium underline hover:text-flare">
              Public works signage
            </Link>{" "}
            is handled through our dedicated public works division.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-6">
            Ready to start your sign project?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-flare text-paper px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors"
            >
              Get a free quote
            </Link>
            <a
              href="tel:818-346-2142"
              className="border border-blue text-blue-strong px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-blue hover:text-paper transition-colors"
            >
              Call 818-346-2142
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
