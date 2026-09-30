import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";
import Arrow from "../components/Arrow";
import {
  business,
  portfolioCategories,
  portfolioItems,
  portfolioNotice,
  publicWorks,
  type PortfolioCategory, focusOn } from "../content/site";

type Filter = "All" | PortfolioCategory;
const filters: Filter[] = ["All", ...portfolioCategories];

export default function Portfolio() {
  usePageMeta({
    title: "Sign Portfolio | LA Projects",
    description: "Signage projects by Advanced Sign & Banner: construction signs, ADA signage, vehicle wraps and lobby signs. LA Metro, Burbank Airport & more.",
  });
  useScrollAnimation();

  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const shown = filter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === filter);
  const active = open === null ? null : shown[open];
  const step = (d: number) =>
    setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length));

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open !== null && !el.open) el.showModal();
    if (open === null && el.open) el.close();
  }, [open]);

  return (
    <div>
      <PageHead
        tone="paper-2"
        eyebrow="Our work"
        lead="From public works projects to commercial spaces, see the quality and craftsmanship we bring to every job."
      >
        <h1 className="display display-1">Sign projects in Los Angeles</h1>
      </PageHead>

      <section className="on-paper">
        <div className="sticky top-[86px] z-30 bg-paper border-b border-ink/15">
          <div className="wrap py-3 flex gap-2 overflow-x-auto" role="group" aria-label="Filter projects by sign type">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => { setFilter(f); setOpen(null); }}
                aria-pressed={filter === f}
                className={`label shrink-0 min-h-11 px-4 border transition-colors ${
                  filter === f ? "bg-ink text-mark border-ink" : "border-ink/25 hover:bg-mark"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="wrap pt-[var(--s5)] pb-[var(--s15)]">
          <ul className="proofs">
            {shown.map((item, i) => (
              <li key={item.id} className={item.shape === "tall" ? "is-tall" : i % 5 === 0 ? "is-wide" : ""}>
                <button type="button" onClick={() => setOpen(i)} className="group crop block w-full h-full text-left">
                  <span className="sheet-media block h-full min-h-0">
                    <img src={item.image} alt={item.description} loading="lazy" className="transition-transform duration-700 group-hover:scale-[1.04]" style={{ objectPosition: focusOn(item.image) }} />
                    <span className="absolute left-0 bottom-0 max-w-[90%] bg-paper px-3 py-2">
                      <span className="label text-green block">
                        {String(item.id).padStart(2, "0")} / {item.category}
                      </span>
                      <span className="display display-4 block mt-1">{item.title}</span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <SectionHead no="01" label="Public works references" title="Agency work, on request">
              <p>{portfolioNotice}</p>
            </SectionHead>
            <div>
              <ul className="border-b border-ink/20">
                {publicWorks.caseStudies.map((c) => (
                  <li key={c.id} className="grid sm:grid-cols-[7rem_1fr] gap-x-6 border-t border-ink/20 py-5">
                    <span className="label text-green pt-1">{c.year}</span>
                    <span>
                      <span className="display display-4 block">{c.title}</span>
                      <span className="text-ink-soft text-sm block mt-1">{c.summary}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/contact" className="btn btn-mark">Request references <Arrow /></Link>
                <a href={business.phoneHref} className="btn btn-line">Call 818-346-2142</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === dialog.current) setOpen(null); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        aria-label={active?.title}
        className="viewer mat on-mat"
      >
        {active && (
          <div className="h-full grid grid-rows-[auto_1fr_auto]">
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="label text-mark">
                {String((open ?? 0) + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}
              </p>
              <button type="button" onClick={() => setOpen(null)} className="btn btn-line" autoFocus>
                Close
              </button>
            </div>
            <div className="min-h-0 px-4 flex items-center justify-center">
              <img key={active.id} src={active.image} alt={active.description} className="swap max-w-full max-h-full object-contain" />
            </div>
            <div className="p-4 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label text-mark">{active.category}</p>
                <h2 className="display display-3 mt-1">{active.title}</h2>
                <p className="text-on-mat mt-1">{active.description}</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => step(-1)} aria-label="Previous project" className="btn btn-line !px-4">
                  <Arrow className="rotate-180" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next project" className="btn btn-line !px-4">
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
