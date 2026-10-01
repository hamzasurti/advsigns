import { Link } from "../lib/router";
import { PhotosProvider, type ViewProps } from "../components/Photo";
import Photo from "../components/Photo";
import type { PageMeta } from "../lib/meta";
import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";
import Sheet from "../components/Sheet";
import Arrow from "../components/Arrow";
import DrawnMap from "../components/DrawnMap";
import { about, business, installCities, shopPhotos, stats, focusOn } from "../content/site";

const team = about.team.filter((m) => m.name.trim() !== "");

export const meta: PageMeta = {
    title: "About Us | Sign Company Since 1999",
    description: "Family-owned sign company in Chatsworth, CA since 1999. Design, printing, fabrication and installation across Los Angeles County. SBE certified.",
};

function AboutView() {

  return (
    <div>
      <PageHead
        tone="paper-2"
        eyebrow="Family-owned, est. 1999"
        lead={about.paragraphs[0]}
        actions={
          <>
            <Link to="/contact" className="btn btn-mark">Get a quote <Arrow /></Link>
            <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
          </>
        }
        aside={
          <Sheet photo={about.image} fig="Fig. 1" caption="On the flatbed printer in the Chatsworth shop">
            <Photo src={about.image} alt={about.imageAlt} style={{ objectPosition: focusOn(about.image) }} />
          </Sheet>
        }
      >
        <h1 className="display display-1">Chatsworth sign company since 1999</h1>
      </PageHead>

      <section className="on-paper">
        <div className="wrap py-[var(--s13)]">
          <div className="split-5-8 items-start">
            <p className="lead animate-on-scroll">{about.paragraphs[1]}</p>
            <dl className="border-b border-ink/20 animate-on-scroll delay-1">
              {stats.map((s) => (
                <div key={s.label} className="grid grid-cols-[1fr_auto] sm:grid-cols-[10rem_12rem_1fr] gap-x-6 gap-y-1 items-baseline border-t border-ink/20 py-4">
                  <dt className="label">{s.label}</dt>
                  <dd className="display display-3 text-green text-right sm:text-left">{s.value}</dd>
                  <dd className="col-span-2 sm:col-span-1 text-sm text-ink-soft">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* History, read along a ruler. Two ticks are not a history; shown once the owner adds milestones. */}
      {about.timeline.length >= 3 && (
      <section className="mat on-mat overflow-hidden">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="01" label="1999 to today" title="Our history" />
          <ol className="timeline mt-[var(--s5)]">
            {about.timeline.map((t, i) => (
              <li key={t.year} className={`animate-on-scroll delay-${(i % 3) + 1}`}>
                <span className="tick" aria-hidden="true" />
                <p className="display display-3 text-mark">{t.year}</p>
                <p className="mt-3 text-sm text-on-mat">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      )}

      {/* The shop */}
      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s13)]">
          <SectionHead no="01" label="The shop" title="One floor: print, cut, build" />
          <ul className="grid sm:grid-cols-3 gap-6 mt-[var(--s5)]">
            {shopPhotos.slice(1).map((p, i) => (
              <li key={p.image} className={`animate-on-scroll delay-${i + 1}`}>
                <Sheet photo={p.image} fig={`Fig. ${i + 2}`} caption={p.caption}>
                  <Photo src={p.image} alt={p.caption} loading="lazy" />
                </Sheet>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where the signs are */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead no="02" label="Where the signs are" title={`Installed in ${installCities.length} cities, from one shop in Chatsworth`} />
            <ul className="legend" aria-label="Map key">
              <li><i className="shop" /> Our shop</li>
              <li><i /> Cities with our signs</li>
            </ul>
          </div>
          <div className="map-wrap mt-[var(--s5)] animate-on-scroll" tabIndex={0} role="region" aria-label="Install map, scrolls sideways on small screens">
            <DrawnMap />
          </div>
          <ul className="cities mt-8 sm:columns-4" aria-label="Cities where we have installed signs">
            {installCities.map((c) => <li key={c.name}>{c.name}</li>)}
          </ul>
          <p className="text-sm text-ink-soft mt-6 measure">
            Drawn, not plotted: freeways and hills are simplified. Agency clients are listed on the{" "}
            <Link to="/public-works" className="link">public works page</Link>.
          </p>
        </div>
      </section>

      {team.length > 0 && (
        <section className="on-paper bg-paper-2">
          <div className="wrap py-[var(--s15)]">
            <SectionHead no="03" label="People" title="Our team" />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[var(--s5)]">
              {team.map((m) => (
                <li key={m.name}>
                  {m.image && (
                    <Sheet ratio="board">
                      <Photo src={m.image} alt={m.name} loading="lazy" />
                    </Sheet>
                  )}
                  <h3 className="display display-4 mt-4">{m.name}</h3>
                  <p className="label text-green mt-1">{m.role}</p>
                  <p className="mt-3 text-ink-soft">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

export default function About({ photos = {} }: ViewProps) {
  return (
    <PhotosProvider value={photos}>
      <AboutView />
    </PhotosProvider>
  );
}
