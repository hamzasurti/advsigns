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

export default function Services() {
  usePageMeta({
    title: "Commercial Sign Services",
    description: "Lobby signs, vehicle wraps, wall graphics & laser engraving in Los Angeles and San Fernando Valley. Serving Southern California from Chatsworth, CA.",
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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Commercial Sign Services in Los Angeles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Professional signage for businesses, retail spaces, and commercial properties. From elegant lobby signs to eye-catching vehicle wraps.
          </p>
          <p className="text-gray-500 text-sm">
            Looking for public works signage?{" "}
            <Link to="/public-works" className="text-navy font-medium underline hover:text-gold">
              Public Works
            </Link>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl overflow-hidden border hover:shadow-md transition-shadow group"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Lobby Signs in Los Angeles</h2>
            <p className="text-gray-600 leading-relaxed">
              First impressions start in the lobby. We fabricate dimensional letters, logos, and
              reception signs using brushed aluminum, acrylic, PVC, and mixed-media materials.
              Whether you need pin-mounted standoff letters or flush-mounted cut vinyl, we design
              and install lobby signage for offices, medical buildings, and retail spaces across
              Los Angeles, the San Fernando Valley, and Ventura County.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Vehicle Wraps in the San Fernando Valley</h2>
            <p className="text-gray-600 leading-relaxed">
              Turn every vehicle into a mobile billboard. We provide full wraps, partial wraps,
              and fleet graphics using 3M and Avery premium cast vinyl with laminate protection.
              Our wraps are designed, printed, and installed in our Chatsworth facility. We serve
              businesses throughout Los Angeles County, from single vehicles to full fleet programs
              of 15+ units.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Wall Graphics &amp; Murals</h2>
            <p className="text-gray-600 leading-relaxed">
              Transform any interior space with custom wall graphics, murals, and environmental
              branding. We print on adhesive vinyl, fabric, and specialty substrates for offices,
              retail stores, restaurants, and public spaces. From accent walls to full floor-to-ceiling
              installations, we handle design, production, and installation across Southern California.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Laser Engraving in Chatsworth, CA</h2>
            <p className="text-gray-600 leading-relaxed">
              Precision laser engraving for awards, plaques, nameplates, and custom products.
              We engrave on wood, acrylic, glass, metal, and leather using our in-house laser
              equipment. Ideal for corporate awards, donor recognition walls, memorial plaques,
              and personalized gifts. Fast turnaround from our Chatsworth shop.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Custom &amp; Special Projects</h2>
            <p className="text-gray-600 leading-relaxed">
              Not every project fits a standard category. We take on custom signage challenges —
              oversized banners, trade show displays, wayfinding systems, channel letters, and
              one-of-a-kind installations. If it involves a sign, banner, or graphic, we can
              build it. <Link to="/public-works" className="text-navy font-medium underline hover:text-gold">Public works signage</Link> is
              handled through our dedicated public works division.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Ready to get started on your sign project?</p>
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
        </div>
      </section>
    </div>
  );
}
