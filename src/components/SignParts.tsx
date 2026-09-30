import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import Sheet from "./Sheet";
import { signAt } from "../content/signs";
import { business, focusOn, portfolioItems, publicWorks, type PortfolioCategory } from "../content/site";

/* The parts every sign page shares, so each one stays recognisably the same site. */

export function SignEyebrow({ slug, className = "" }: { slug: string; className?: string }) {
  const { sign } = signAt(slug);
  return (
    <p className={`label flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              <Link to={sign.division === "Public works" ? "/public-works" : "/services"} className="hover:underline underline-offset-4">
        {sign.division}
      </Link>
    </p>
  );
}

export function SignActions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link to="/contact" className="btn btn-mark">Get a quote <Arrow /></Link>
      <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
    </div>
  );
}

interface FactsProps {
  no?: string;
  label: string;
  title: string;
  body?: ReactNode;
  facts: { term: string; detail: ReactNode }[];
  note?: ReactNode;
  tone?: "paper" | "paper-2";
}

export function Facts({ label, title, body, facts, note, tone = "paper" }: FactsProps) {
  return (
    <section className={`on-paper ${tone === "paper-2" ? "bg-paper-2" : "bg-paper"}`}>
      <div className="wrap py-[var(--s15)]">
        <div className="split-5-8 items-start">
          <div className="animate-on-scroll">
            <p className="label flex items-center gap-3">
              <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              {label}
            </p>
            <h2 className="display display-3 mt-5">{title}</h2>
            {body && <div className="mt-5 text-ink-soft space-y-4">{body}</div>}
          </div>
          <div className="animate-on-scroll delay-1">
            <dl className="border-b border-ink/20">
              {facts.map((f) => (
                <div key={f.term} className="grid sm:grid-cols-[12rem_1fr] gap-x-8 gap-y-1 border-t border-ink/20 py-4">
                  <dt className="label pt-1">{f.term}</dt>
                  <dd>{f.detail}</dd>
                </div>
              ))}
            </dl>
            {note && <p className="text-sm text-ink-soft mt-4">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Photos({ category, ids }: { category?: PortfolioCategory; ids?: number[]; no?: string }) {
  const items = portfolioItems.filter((p) => (ids ? ids.includes(p.id) : p.category === category));
  if (items.length === 0) return null;
  const [first, ...rest] = items;

  return (
    <section className="on-paper bg-paper-2">
      <div className="wrap py-[var(--s15)]">
        <p className="label flex items-center gap-3 animate-on-scroll">
          <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              The work
        </p>
        <div className={`mt-[var(--s5)] ${rest.length ? "split-8-5" : ""} items-start`}>
          <Sheet
            ratio={first.shape === "tall" ? "upright" : "wide"}
            fig="Fig. 1"
            caption={first.title}
            className={`animate-on-scroll ${rest.length ? "" : first.shape === "tall" ? "max-w-xl" : "max-w-4xl"}`}
          >
            <img src={first.image} alt={first.description} loading="lazy" style={{ objectPosition: focusOn(first.image) }} />
          </Sheet>
          {rest.length > 0 && (
            <div className="grid gap-8">
              {rest.map((p, i) => (
                <Sheet key={p.id} ratio="board" fig={`Fig. ${i + 2}`} caption={p.title} className={`animate-on-scroll delay-${i + 1}`}>
                  <img src={p.image} alt={p.description} loading="lazy" style={{ objectPosition: focusOn(p.image) }} />
                </Sheet>
              ))}
            </div>
          )}
        </div>
        <Link to="/portfolio" className="label inline-flex items-center gap-3 mt-10 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
          See the full portfolio <Arrow />
        </Link>
      </div>
    </section>
  );
}

export function Reference({ id }: { id: number; no?: string }) {
  const c = publicWorks.caseStudies.find((x) => x.id === id);
  if (!c) return null;
  return (
    <section className="on-paper bg-paper">
      <div className="wrap py-[var(--s13)]">
        <p className="label flex items-center gap-3">
          <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              Reference project
        </p>
        <article className={`grid gap-x-10 gap-y-3 border-y border-ink/20 py-8 mt-8 animate-on-scroll ${c.year ? "lg:grid-cols-[8rem_5fr_6fr]" : "lg:grid-cols-[5fr_8fr]"}`}>
          {c.year && <p className="display display-4 text-green">{c.year}</p>}
          <div>
            <h2 className="display display-4">{c.title}</h2>
            <p className="label text-ink-soft mt-2">{c.meta}</p>
          </div>
          <div>
            <p>{c.summary}</p>
            {c.metrics.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4">
                {c.metrics.map((m) => (
                  <li key={m} className="label bg-mark px-2.5 py-1.5">{m}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export function Pager({ slug }: { slug: string }) {
  const { prev, next } = signAt(slug);
  return (
    <nav aria-label="More sign types" className="on-paper bg-paper border-t border-ink/20">
      <div className="wrap grid sm:grid-cols-2">
        <Link to={`/signs/${prev.slug}`} className="group py-8 sm:pr-8 sm:border-r border-ink/20 hover:bg-mark transition-colors sm:-ml-[var(--gutter)] sm:pl-[var(--gutter)]">
          <span className="label flex items-center gap-3 text-ink-soft">
            <Arrow className="rotate-180" /> Previous
          </span>
          <span className="display display-3 block mt-3">{prev.name}</span>
        </Link>
        <Link to={`/signs/${next.slug}`} className="group py-8 sm:pl-8 text-right border-t sm:border-t-0 border-ink/20 hover:bg-mark transition-colors sm:-mr-[var(--gutter)] sm:pr-[var(--gutter)]">
          <span className="label flex items-center justify-end gap-3 text-ink-soft">
            Next <Arrow />
          </span>
          <span className="display display-3 block mt-3">{next.name}</span>
        </Link>
      </div>
    </nav>
  );
}
