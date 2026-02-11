import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, FileText, Users, ArrowRight } from "lucide-react";

const certifications = [
  "DBE", "SBE", "SABE", "CBE", "Micro-SBE", "SB-PW",
];

const services = [
  {
    title: "Construction Signage",
    description:
      "Durable, compliant signage for construction sites and development projects. Weather-resistant materials designed for long-term outdoor use on active construction sites.",
    image: "/assets/hero/construction-signage.jpg",
  },
  {
    title: "Building Signs",
    description:
      "Exterior and interior building signage that meets all municipal codes and accessibility standards. Perfect for government facilities, public buildings, and institutional campuses.",
    image: "/assets/hero/building-signs.jpg",
  },
  {
    title: "ADA Signage",
    description:
      "Fully compliant ADA signs with tactile elements and Grade 2 braille. Meets all federal, state, and local accessibility requirements for public facilities.",
    image: "/assets/services/lobby-signs.jpg",
  },
];

const trustReasons = [
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Established in 1999, with decades of government contract experience",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "All certifications, insurance, and licensing for public works",
  },
  {
    icon: FileText,
    title: "Procurement Experience",
    description: "Familiar with RFP, bid processes, and government contracting",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Responsive team that understands public sector timelines",
  },
];

export default function GovernmentServices() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-navy mb-6 shadow-sm">
            <Shield size={16} />
            Certified Government & Public Works Contractor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Government & Public Works Signage Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Serving public agencies, government contractors, and institutional builders for over 25 years. Fully certified, prevailing wage compliant, and experienced with public sector procurement.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-2">Our Certifications</h2>
          <p className="text-gray-600 mb-8">
            Fully certified to work on government and public works projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="inline-flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-lg font-medium text-navy"
              >
                <CheckCircle size={18} className="text-gold" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">Specialized Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From construction sites to courthouses, we provide comprehensive signage solutions that meet the unique requirements of government and public sector projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* Prevailing Wage */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">Prevailing Wage Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We have extensive experience with prevailing wage requirements for public works projects. Our team handles all certified payroll documentation, compliance reporting, and ensures full adherence to federal, state, and local wage determinations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From project registration to certified payroll records, we manage every aspect of prevailing wage compliance so you can focus on your project timeline and budget.
          </p>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-gold font-semibold uppercase tracking-wide mb-2">Trusted By</p>
          <h3 className="text-xl font-bold text-navy mb-10">Major Public Agencies</h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We've successfully completed signage projects for some of Southern California's largest government agencies and public institutions.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/assets/logos/la-metro.png" alt="LA Metro" className="h-20 grayscale hover:grayscale-0 transition-all" />
            <img src="/assets/logos/burbank-airport.png" alt="Hollywood Burbank Airport" className="h-20 grayscale hover:grayscale-0 transition-all" />
            <img src="/assets/logos/la-county-courts.png" alt="LA County Courts" className="h-20 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-10 text-center">
            Why Government Agencies Trust Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustReasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Government Project?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today to discuss your signage needs and get a detailed quote for your public works project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-md font-semibold hover:bg-gold-light transition-colors"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
