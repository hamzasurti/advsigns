import { Link } from "../lib/router";
import type { PageMeta } from "../lib/meta";
import PageHead from "../components/PageHead";
import Sheet from "../components/Sheet";
import Arrow from "../components/Arrow";
import SignFigure from "../components/SignFigure";
import { signs } from "../content/signs";
import { business, commercial } from "../content/site";

/* The directory: every sign type, one drawing and one line each. Detail lives on the sign pages. */
export const meta: PageMeta = {
    title: "Sign Types We Make | Los Angeles",
    description:
      "Street, building, ADA, lobby signs, vehicle wraps, wall graphics and laser engraving, plus banners and embroidery. Made in Chatsworth for Los Angeles.",
};

/* JSON-LD for the page head; the layout renders one script per entry. */
export const structuredData = [
  { id: "commercial-service", data: {
    "@type": "Service",
    "name": "Sign Services",
    "description": "Street signs, building signs, ADA signage, lobby signs, vehicle wraps, wall graphics, laser engraving, banners and embroidery for businesses and agencies in Los Angeles County.",
    "url": "https://advsigns.net/services",
    "provider": { "@id": "https://advsigns.net/#business" },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Los Angeles County, CA" },
    ],
    "serviceType": ["Street Signs", "Building Signs", "ADA Signage", "Lobby Signs", "Vehicle Wraps", "Wall Graphics", "Laser Engraving", "Banners", "Embroidery"],
  } },
];

export default function Services() {

  return (
    <div>
      <PageHead
        eyebrow="Signs"
        lead={commercial.lead}
        actions={
          <>
            <Link to="/contact" className="btn btn-mark">Get a quote <Arrow /></Link>
            <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
          </>
        }
      >
        <h1 className="display display-1">Every sign we make</h1>
      </PageHead>

      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {signs.map((s, i) => (
              <li key={s.slug} className={`animate-on-scroll delay-${(i % 4) + 1}`}>
                <Link to={`/signs/${s.slug}`} className="group block">
                  <Sheet ratio="upright" fig={`Fig. ${i + 1}`} caption={s.division}>
                    <SignFigure slug={s.slug} className="transition-transform duration-700 group-hover:scale-[1.02]" />
                  </Sheet>
                  <div className="px-[14px] mt-3">
                    <h2 className="display display-3 flex items-center justify-between gap-4">
                      <span className="group-hover:underline underline-offset-4">{s.name}</span>
                      <Arrow />
                    </h2>
                    <p className="mt-2 text-ink-soft">{s.blurb}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s13)]">
          <div className="split-5-8 items-start">
            <div>
              <p className="label flex items-center gap-3">
                <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
                Also from the shop
              </p>
              <h2 className="display display-3 mt-5">Banners, embroidery and special projects</h2>
            </div>
            <dl className="border-b border-ink/20">
              {commercial.extras.map((x) => (
                <div key={x.title} className="grid sm:grid-cols-[12rem_1fr] gap-x-8 gap-y-1 border-t border-ink/20 py-4">
                  <dt className="display display-4">{x.title}</dt>
                  <dd className="text-ink-soft">{x.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-10">
            Bidding a public project? Our qualifications and references are on the{" "}
            <Link to="/public-works" className="link">public works page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
