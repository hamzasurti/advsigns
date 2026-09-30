import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";
import Sheet from "../components/Sheet";
import Arrow from "../components/Arrow";
import { about, business, stats, focusOn } from "../content/site";

const team = about.team.filter((m) => m.name.trim() !== "");

export default function About() {
  usePageMeta({
    title: "About Us | Sign Company Since 1999",
    description: "Family-owned sign company in Chatsworth, CA since 1999. Design, printing, fabrication and installation across Los Angeles County. SBE certified.",
  });
  useScrollAnimation();

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
          <Sheet photo={about.image} fig="Fig. 1" caption="Large-format banner, installed">
            <img src={about.image} alt={about.imageAlt} style={{ objectPosition: focusOn(about.image) }} />
          </Sheet>
        }
      >
        <h1 className="display display-1">Chatsworth sign company since 1999</h1>
      </PageHead>

      <section className="on-paper">
        <div className="wrap py-[var(--s13)]">
          <div className="split-5-8 items-start">
            <p className="lead animate-on-scroll">
              From small businesses to large-scale{" "}
              <Link to="/public-works" className="link">public works projects</Link>, we bring the same
              expertise and craftsmanship to every job. We&rsquo;re SBE certified and prevailing
              wage compliant.
            </p>
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

      {/* History, read along a ruler */}
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

      {/* Process */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="02" label="Process" title={about.process.heading} />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 mt-[var(--s5)] border-l border-ink/20">
            {about.process.steps.map((s, i) => (
              <li key={s.title} className={`relative border-r border-y border-ink/20 -mt-px p-6 animate-on-scroll delay-${(i % 3) + 1}`}>
                <span className="label text-green">Step {i + 1}</span>
                <h3 className="display display-4 mt-10">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="lead measure mt-10">
            <span className="hl">{about.process.compliance}</span>
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
                      <img src={m.image} alt={m.name} loading="lazy" />
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
