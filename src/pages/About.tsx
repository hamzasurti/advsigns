import { CheckCircle } from "lucide-react";

const highlights = [
  "Over 25 years of industry experience",
  "Trusted by contractors and builders",
  "Full-service design and installation",
  "Quality materials and craftsmanship",
  "On-time project delivery",
  "Compliance and safety standards",
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-500">
              <img
                src="/assets/hero/construction-signage.jpg"
                alt="Our team at work"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
                Our Experience
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Built on Trust & Quality
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                For over 25 years, Advanced Sign & Banner has been the go-to partner for businesses and builders who demand excellence. Our portfolio includes major infrastructure projects like LA Metro stations, Burbank Airport terminals, and Los Angeles County courthouses — projects where precision, compliance, and quality are non-negotiable. From small businesses to large-scale public developments, we bring the same expertise, reliability, and craftsmanship to every job.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
