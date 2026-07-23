import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const timeline = [
  { year: "1999", event: "Founded in Chatsworth, CA — commercial and retail signage." },
  { year: "2005", event: "First public works contracts. Obtained DBE, SBE, and related certifications." },
  { year: "2010", event: "Completed signage for LA Metro stations." },
  { year: "2015", event: "Delivered packages for Hollywood Burbank Airport and LA County Courts." },
  { year: "2020", event: "Expanded into vehicle wraps, wall graphics, and laser engraving." },
  { year: "2024", event: "Surpassed 1,000 completed sign projects. Added laser engraving and expanded ADA signage services." },
  { year: "2025", event: "Serving 6 counties across Southern California — trusted partner for general contractors, public agencies, and commercial properties." },
];

// TODO: Replace with real team member names, photos, and bios.
// At minimum, the owner's name should be listed. Generic titles with no names
// signal "we don't want you to know who we are" — which kills trust with GCs.
const team = [
  {
    name: "[Owner Name]", // TODO: Replace with real name
    role: "Founder & CEO",
    bio: "Founded Advanced Sign & Banner in 1999. Oversees all public works and large-scale projects with 25+ years of industry experience.",
    image: null as string | null, // TODO: Replace with real photo path e.g. "/assets/team/owner.jpg"
  },
  {
    name: "[PM Name]", // TODO: Replace with real name
    role: "Project Manager",
    bio: "Manages project timelines, installation coordination, and GC communication for public works and commercial projects.",
    image: null as string | null, // TODO: Replace with real photo
  },
  {
    name: "[Designer Name]", // TODO: Replace with real name
    role: "Design Lead",
    bio: "Leads sign design, ADA compliance mockups, and ensures brand consistency across multi-location projects.",
    image: null as string | null, // TODO: Replace with real photo
  },
];

export default function About() {
  usePageMeta({
    title: "About Us | Sign Company Since 1999",
    description: "Family-owned sign company in Chatsworth, CA since 1999. Serving LA and Southern California. DBE/SBE certified, 1,000+ projects completed.",
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl aspect-[4/3] overflow-hidden">
              <img
                src="/assets/hero/construction-signage.jpg"
                alt="Advanced Sign & Banner — construction site signage project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Chatsworth Sign Company Since 1999
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced Sign & Banner has been the go-to sign subcontractor for general contractors and businesses who demand excellence since 1999. Our portfolio includes LA Metro stations, Burbank Airport terminals, and Los Angeles County courthouses — projects where precision, compliance, and quality are non-negotiable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From small businesses to large-scale <Link to="/public-works" className="text-navy font-medium underline hover:text-gold">public works projects</Link>, we bring the same expertise and craftsmanship to every job. We're fully certified (DBE, SBE, SABE, CBE) and prevailing wage compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-navy">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-gray-400 text-sm mt-1">Years in Business</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">1,000+</p>
              <p className="text-gray-400 text-sm mt-1">Sign Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-gray-400 text-sm mt-1">Active Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">6</p>
              <p className="text-gray-400 text-sm mt-1">Counties Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-10">Our History</h2>
          <div className="space-y-6 border-l-2 border-gray-200 pl-8">
            {timeline.map((item) => (
              <div key={item.year}>
                <p className="text-sm font-bold text-navy">{item.year}</p>
                <p className="text-gray-600 text-sm mt-0.5">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">How We Work</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every project follows the same straightforward process: we start with a consultation to understand your needs and site conditions. From there, our design team produces mockups for your review. Once approved, signs are fabricated in our facility and installed by our professional crews.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For public works projects, we handle all compliance documentation — certified payroll, prevailing wage reporting, and ADA verification — so you can focus on your timeline and budget.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-10">Our Team</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.role}>
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users size={28} className="text-gray-400" />
                  )}
                </div>
                <h3 className="font-bold text-navy">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-gray-600 text-sm mt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Ready to discuss your project?</p>
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
