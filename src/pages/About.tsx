import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const timeline = [
  { year: "1999", event: "Founded in Chatsworth, CA. Commercial and retail signage." },
  { year: "2005", event: "First public works contracts. Obtained DBE, SBE, and related certifications." },
  { year: "2010", event: "Completed signage for LA Metro stations." },
  { year: "2015", event: "Delivered packages for Hollywood Burbank Airport and LA County Courts." },
  { year: "2020", event: "Expanded into vehicle wraps, wall graphics, and laser engraving." },
  { year: "2024", event: "Surpassed 1,000 completed sign projects. Added laser engraving and expanded ADA signage services." },
  { year: "2025", event: "Serving 6 counties across Southern California, a trusted partner for general contractors, public agencies, and commercial properties." },
];

// TODO: Replace with real team member names, photos, and bios.
// At minimum, the owner's name should be listed. Generic titles with no names
// signal "we don't want you to know who we are" — which kills trust with GCs.
const team = [
  { name: "[Owner Name]", role: "Founder & CEO", bio: "Founded Advanced Sign & Banner in 1999. Oversees all public works and large-scale projects with 25+ years of industry experience.", image: null as string | null },
  { name: "[PM Name]", role: "Project Manager", bio: "Manages project timelines, installation coordination, and GC communication for public works and commercial projects.", image: null as string | null },
  { name: "[Designer Name]", role: "Design Lead", bio: "Leads sign design, ADA compliance mockups, and ensures brand consistency across multi-location projects.", image: null as string | null },
];

const stats = [
  { value: "25+", label: "Years in business" },
  { value: "1,000+", label: "Projects completed" },
  { value: "6", label: "Active certifications" },
  { value: "6", label: "Counties served" },
];

export default function About() {
  usePageMeta({
    title: "About Us | Sign Company Since 1999",
    description: "Family-owned sign company in Chatsworth, CA since 1999. Serving LA and Southern California. DBE/SBE certified, 1,000+ projects completed.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden order-last md:order-first">
              <img
                src="/assets/hero/construction-signage.jpg"
                alt="Advanced Sign & Banner construction site signage project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-strong tracking-[0.14em] uppercase mb-4">
                About us
              </p>
              <h1 className="font-display font-bold tracking-tight leading-[0.95] text-ink text-[clamp(2rem,5vw,3.75rem)] mb-6">
                Chatsworth sign company since 1999
              </h1>
              <p className="text-ink/70 leading-relaxed mb-4">
                Advanced Sign &amp; Banner has been the go-to sign subcontractor
                for general contractors and businesses who demand excellence
                since 1999. Our portfolio includes LA Metro stations, Burbank
                Airport terminals, and Los Angeles County courthouses:
                projects where precision, compliance, and quality are
                non-negotiable.
              </p>
              <p className="text-ink/70 leading-relaxed">
                From small businesses to large-scale{" "}
                <Link to="/public-works" className="text-blue-strong font-medium underline hover:text-flare">
                  public works projects
                </Link>
                , we bring the same expertise and craftsmanship to every job.
                We&rsquo;re fully certified (DBE, SBE, SABE, CBE) and prevailing
                wage compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-deep text-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display font-bold text-flare leading-none text-[clamp(2.25rem,6vw,3.5rem)]">
                  {s.value}
                </dd>
                <dt className="mt-2 text-xs tracking-[0.15em] uppercase text-paper/60">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-10">
            Our history
          </h2>
          <div className="space-y-7">
            {timeline.map((item) => (
              <div key={item.year} className="grid grid-cols-[4rem_1fr] gap-4 items-baseline">
                <p className="font-display font-bold text-blue-strong text-xl leading-none">{item.year}</p>
                <p className="text-ink/70 text-sm leading-relaxed border-b border-ink/10 pb-6">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-6">
            How we work
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Every project follows the same straightforward process: we start with
            a consultation to understand your needs and site conditions. From
            there, our design team produces mockups for your review. Once
            approved, signs are fabricated in our facility and installed by our
            professional crews.
          </p>
          <p className="text-ink/70 leading-relaxed">
            For public works projects, we handle all compliance
            documentation: certified payroll, prevailing wage reporting, and
            ADA verification, so you can focus on your timeline and budget.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-10">
            Our team
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.role}>
                <div className="w-24 h-24 bg-sand-deep flex items-center justify-center overflow-hidden mb-4">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users size={28} className="text-blue-strong" />
                  )}
                </div>
                <h3 className="font-display font-bold uppercase tracking-tight text-ink text-lg">{member.name}</h3>
                <p className="text-sm text-blue-strong">{member.role}</p>
                <p className="text-ink/65 text-sm mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-6">
            Ready to discuss your project?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-flare text-paper px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors">
              Get a free quote
            </Link>
            <a href="tel:818-346-2142" className="border border-blue text-blue-strong px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-blue hover:text-paper transition-colors">
              Call 818-346-2142
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
