import { useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useStructuredData from "../hooks/useStructuredData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageHead from "../components/PageHead";
import Sheet from "../components/Sheet";
import Arrow from "../components/Arrow";
import { business, commercial } from "../content/site";

const signLinks: Record<string, string> = {
  "Lobby Signs": "/signs/lobby",
  "Vehicle Wraps": "/signs/vehicle-wraps",
  "Wall Graphics": "/signs/wall-graphics",
  "Laser Engraving": "/signs/laser-engraving",
};

export default function Services() {
  usePageMeta({
    title: "Commercial Sign Services",
    description:
      "Lobby signs, vehicle wraps, wall graphics & laser engraving in Los Angeles and San Fernando Valley. Serving Southern California from Chatsworth, CA.",
  });
  useScrollAnimation();

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
      <PageHead
        eyebrow="Commercial division"
        lead={commercial.lead}
        actions={
          <>
            <Link to="/contact" className="btn btn-mark">Get a quote <Arrow /></Link>
            <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
          </>
        }
      >
        <h1 className="display display-1">Commercial sign services in Los Angeles</h1>
      </PageHead>

      <div className="on-paper bg-paper-2 border-y border-ink/15">
        <p className="wrap py-5">
          Bidding a public project?{" "}
          <Link to="/public-works" className="link">See our public works division</Link>.
        </p>
      </div>

      <section className="on-paper">
        <div className="wrap pb-[var(--s15)]">
          {commercial.services.map((s, i) => {
            const to = signLinks[s.title];
            const flip = i % 2 === 1;
            return (
              <article
                key={s.title}
                className={`${flip ? "split-5-8" : "split-8-5"} items-center pt-[var(--s13)] animate-on-scroll`}
              >
                <Sheet
                  ratio="wide"
                  fig={`Fig. ${i + 1}`}
                  caption={s.alt}
                  className={flip ? "lg:order-2" : ""}
                >
                  <img src={s.image} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} />
                </Sheet>
                <div>
                  <p className="label text-green">{String(i + 1).padStart(2, "0")} / {s.title}</p>
                  <h2 className="display display-3 mt-4">{s.heading}</h2>
                  <p className="mt-5 text-ink-soft">{s.body}</p>
                  {to ? (
                    <Link to={to} className="label inline-flex items-center gap-3 mt-6 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
                      More on {s.title.toLowerCase()} <Arrow />
                    </Link>
                  ) : (
                    <Link to="/contact" className="label inline-flex items-center gap-3 mt-6 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
                      Tell us what you have in mind <Arrow />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
