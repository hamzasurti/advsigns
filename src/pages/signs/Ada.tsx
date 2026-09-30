import { useState } from "react";
import usePageMeta from "../../hooks/usePageMeta";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import AdaSign from "../../components/AdaSign";
import Braille from "../../components/Braille";
import { Pager, Reference, SignActions, SignEyebrow } from "../../components/SignParts";
import { brailleCells } from "../../content/signs";
import { publicWorks } from "../../content/site";

const WORD = "signage";
const cells = brailleCells(WORD);
const dotNames = (dots: number[]) => (dots.length === 1 ? `dot ${dots[0]}` : `dots ${dots.join(", ")}`);

/* A word in braille you can run the pointer across, one cell at a time. */
function TouchRead() {
  const [at, setAt] = useState<number | null>(null);
  const cell = at === null ? null : cells[at];

  return (
    <div>
      <div className="flex flex-wrap gap-1" role="group" aria-label={`The word ${WORD} in braille, one cell per letter`}>
        {cells.map((c, i) => (
          <button
            key={i}
            type="button"
            className="cell"
            aria-pressed={at === i}
            aria-label={`Letter ${c.print}, ${dotNames(c.dots)}`}
            onMouseEnter={() => setAt(i)}
            onFocus={() => setAt(i)}
            onClick={() => setAt(i)}
          >
            <svg className="w-[26px] h-[44px] sm:w-[40px] sm:h-[68px]" viewBox="0 0 26 44" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((d) => {
                const on = c.dots.includes(d);
                return (
                  <circle
                    key={d}
                    cx={d > 3 ? 20 : 6}
                    cy={6 + ((d - 1) % 3) * 16}
                    r={on ? 5 : 1.5}
                    className={on ? "dome" : ""}
                    fill="currentColor"
                    opacity={on ? 1 : 0.3}
                  />
                );
              })}
            </svg>
          </button>
        ))}
      </div>
      <p className="label text-on-mat mt-4 min-h-[1.3em]" aria-live="polite">
        {cell ? (
          <>
            <span className="text-mark">{cell.print}</span> / {dotNames(cell.dots)}
          </>
        ) : (
          "Run across the cells to read them"
        )}
      </p>
    </div>
  );
}

export default function Ada() {
  usePageMeta({
    title: "ADA Signs & Braille | Los Angeles",
    description: "ADA signage with tactile characters and Grade 2 braille, reviewed against ADA 2010 and California Title 24 before fabrication. Call 818-346-2142.",
  });
  useScrollAnimation();

  const { ada, faqs } = publicWorks;
  const passRate = faqs[2];

  return (
    <div>
      {/* Hero: the page is the plaque */}
      <section className="m-ada-hero on-mat">
        <div className="wrap pt-[var(--s13)] pb-[var(--s13)]">
          <SignEyebrow slug="ada" className="rise text-on-mat" />
          <h1 className="display display-1 raised rise rise-1 mt-6 uppercase">ADA signage in Los Angeles</h1>
          <div className="rise rise-2 mt-10">
            <TouchRead />
          </div>
          <div className="split-8-5 items-end mt-10">
            <div>
              <p className="lead measure rise rise-2 text-on-mat">{ada.lead}</p>
              <SignActions className="rise rise-3 mt-8" />
            </div>
            <p className="rise rise-3 text-sm text-on-mat measure border-l border-paper/30 pl-5">
              Above: the word &ldquo;{WORD}&rdquo; in braille. On a sign, braille sits directly below the
              raised text it repeats.
            </p>
          </div>
        </div>
      </section>

      {/* Spec */}
      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <div className="plate p-4 animate-on-scroll lg:sticky lg:top-28">
              <div className="aspect-[3/4]">
                <AdaSign />
              </div>
            </div>
            <div className="animate-on-scroll delay-1">
              <p className="label flex items-center gap-3">
                <span className="bg-mark text-ink px-2 py-1">01</span>
                What an inspector checks
              </p>
              <h2 className="display display-2 raised-ink mt-5">{ada.heading}</h2>
              <dl className="border-b border-ink/20 mt-8">
                {[
                  ["Characters", "Raised at least 1/32 in., uppercase, sans serif."],
                  ["Character height", "5/8 in. minimum, 2 in. maximum."],
                  ["Braille", "Grade 2, with domed dots, placed directly below the text."],
                  ["Finish", "Non-glare, with characters that contrast with the field."],
                  ["Mounting height", "48 in. to 60 in. above the floor, measured to the character baseline."],
                  ["Location", "Beside the door, on the latch side."],
                ].map(([term, detail]) => (
                  <div key={term} className="grid sm:grid-cols-[12rem_1fr] gap-x-8 gap-y-1 border-t border-ink/20 py-4">
                    <dt className="label pt-1">{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-ink-soft mt-4 measure">
                From the 2010 ADA Standards, section 703. California Title 24 applies alongside it, and
                we review your signs against both before anything is fabricated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three promises, as plates */}
      <section className="on-paper bg-paper">
        <div className="wrap py-[var(--s15)]">
          <p className="label flex items-center gap-3">
            <span className="bg-mark text-ink px-2 py-1">02</span>
            Why contractors send us their ADA scope
          </p>
          <ol className="grid md:grid-cols-3 gap-6 mt-[var(--s5)]">
            {ada.points.map((p, i) => (
              <li key={p.title} className={`plate p-7 animate-on-scroll delay-${i + 1}`}>
                <Braille text={String(i + 1)} size={7} className="text-mark" />
                <h3 className="display display-3 raised mt-8">{p.title}</h3>
                <p className="mt-4 text-on-mat">{p.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-[var(--s5)] border-t-2 border-ink pt-6 split-5-8 items-start">
            <h3 className="display display-4">{passRate.q}</h3>
            <p className="text-ink-soft measure">{passRate.a}</p>
          </div>
        </div>
      </section>

      <Reference id={1} no="03" />
      <Pager slug="ada" />
    </div>
  );
}

