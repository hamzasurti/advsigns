import { useState } from "react";
import { Link } from "react-router-dom";
import testimonials from "../data/testimonials";
import usePageMeta from "../hooks/usePageMeta";
import useScrollAnimation from "../hooks/useScrollAnimation";
import useReel from "../hooks/useReel";
import Sheet from "../components/Sheet";
import SectionHead from "../components/SectionHead";
import Arrow from "../components/Arrow";
import AdaSign from "../components/AdaSign";
import Braille from "../components/Braille";
import { signs } from "../content/signs";
import {
  business,
  clients,
  heroPoster,
  heroVideoCaption,
  heroVideos,
  homeIntro,
  stats,
} from "../content/site";

const pulls = testimonials.filter((t) => t.pull);

function HeroReel() {
  const { ref, index, setIndex, playing, toggle } = useReel(heroVideos.length);

  return (
    <div className="rise rise-3 text-on-mat">
      <Sheet
        ratio="wide"
        width="8 ft"
        height="4 ft"
        draw
        fig="Fig. 1"
        caption={heroVideoCaption}
      >
        <video ref={ref} muted playsInline preload="metadata" poster={heroPoster}>
          <source src={heroVideos[index]} type="video/mp4" />
        </video>
        <div className="absolute left-0 bottom-0 flex items-stretch bg-ink text-paper">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause shop footage" : "Play shop footage"}
            className="label min-w-12 min-h-12 px-4 hover:bg-hivis hover:text-ink transition-colors"
          >
            {playing ? "Pause" : "Play"}
          </button>
          {heroVideos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show clip ${i + 1} of ${heroVideos.length}`}
              aria-current={i === index}
              className={`label min-w-12 min-h-12 border-l border-paper/25 transition-colors ${
                i === index ? "bg-hivis text-ink" : "hover:bg-paper/15"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </Sheet>
    </div>
  );
}

function SignIndex() {
  const [active, setActive] = useState(0);
  const current = signs[active];

  return (
    <div className="split-8-5 items-start mt-[var(--s5)]">
      <ol className="border-b border-ink/20">
        {signs.map((s, i) => (
          <li key={s.slug}>
            <Link
              to={`/signs/${s.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`index-row ${i === active ? "is-active" : ""}`}
            >
              <span className="label w-8 opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex items-center gap-4 min-w-0">
                {s.image ? (
                  <img src={s.image} alt="" loading="lazy" className="lg:hidden w-20 h-10 object-cover shrink-0" />
                ) : (
                  <span className="lg:hidden w-20 h-10 shrink-0 bg-mat text-paper grid place-items-center">
                    <Braille text="ada" size={5} />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="display display-3 block">{s.name}</span>
                  <span className="label opacity-70 mt-1 block">{s.division}</span>
                </span>
              </span>
              <Arrow />
            </Link>
          </li>
        ))}
      </ol>

      <div className="hidden lg:block sticky top-28">
        <Sheet ratio="upright" fig={`Fig. ${active + 2}`} caption={current.blurb}>
          {current.image ? (
            <img key={current.slug} src={current.image} alt={current.alt} className="swap" />
          ) : (
            <div key={current.slug} className="swap absolute inset-0 bg-mat text-paper">
              <AdaSign />
            </div>
          )}
        </Sheet>
      </div>
    </div>
  );
}

function Proofs() {
  const [i, setI] = useState(0);
  const t = pulls[i];
  const step = (d: number) => setI((n) => (n + d + pulls.length) % pulls.length);

  return (
    <section className="on-paper bg-hivis text-ink">
      <div className="wrap py-[var(--s15)]">
        <div className="flex items-center justify-between gap-4">
          <p className="label flex items-center gap-3">
            <span className="bg-ink text-hivis px-2 py-1">03</span>
            What clients say
          </p>
          <p className="label" aria-live="polite">
            {String(i + 1).padStart(2, "0")} / {String(pulls.length).padStart(2, "0")}
          </p>
        </div>

        <blockquote key={t.id} className="swap mt-[var(--s5)]">
          <p className="display display-2 !leading-[1.04] max-w-[22ch]">&ldquo;{t.pull}&rdquo;</p>
          <footer className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-ink/30 pt-5">
            <p>
              <span className="font-bold">{t.name}</span>
              <span className="block text-sm">
                {t.title}
                {t.company ? `, ${t.company}` : ""}
              </span>
            </p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => step(-1)} aria-label="Previous review" className="btn btn-line !px-4">
                <Arrow className="rotate-180" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next review" className="btn btn-line !px-4">
                <Arrow />
              </button>
            </div>
          </footer>
        </blockquote>

        <Link to="/testimonials" className="label inline-flex items-center gap-3 mt-8 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
          Read the full reviews <Arrow />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta({
    title: "Sign Company in Chatsworth, CA",
    description:
      "Sign company in Chatsworth, CA since 1999. Construction signs, ADA signage, vehicle wraps & lobby signs. DBE/SBE certified. Call 818-346-2142.",
  });
  useScrollAnimation();

  return (
    <div>
      {/* ============================ HERO ============================ */}
      <section className="mat on-mat overflow-hidden">
        <div className="wrap pt-8 pb-[var(--s13)]">
          <div className="rise label text-on-mat flex flex-wrap justify-between gap-x-8 gap-y-2 border-b border-paper/25 pb-4">
            <span>Est. 1999, Chatsworth CA</span>
            <span className="hidden md:inline">DBE / SBE / SABE / CBE certified</span>
            <a href={business.phoneHref} className="hover:text-hivis">818-346-2142</a>
          </div>

          <h1 className="display display-1 rise rise-1 mt-[var(--s5)]">
            Sign company in Chatsworth, California
          </h1>

          <div className="split-5-8 mt-[var(--s5)]">
            <div className="flex flex-col justify-between gap-8 lg:pt-7 lg:pb-9">
              <p className="lead rise rise-2 text-on-mat">{homeIntro.lead}</p>
              <div className="rise rise-3 flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-mark">
                  Get a quote <Arrow />
                </Link>
                <Link to="/public-works" className="btn btn-line">
                  For contractors
                </Link>
              </div>
            </div>
            <HeroReel />
          </div>
        </div>
      </section>

      {/* ========================= DIRECTORY ========================= */}
      <section className="on-paper bg-paper-2" aria-labelledby="clients-label">
        <div className="wrap py-[var(--s5)]">
          <div className="grid lg:grid-cols-[5fr_8fr] gap-x-16 gap-y-6 items-start">
            <p id="clients-label" className="label max-w-[22ch] pt-1">
              Trusted by public agencies and leading builders
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-10">
              {clients.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 border-t border-ink/20 py-3">
                  <span className="display display-4">{c.name}</span>
                  <span className="label opacity-60 shrink-0">{c.kind}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ======================== WHAT WE MAKE ======================== */}
      <section className="on-paper">
        <div className="wrap py-[var(--s15)]">
          <SectionHead no="01" label="What we make" title="Signs for every job.">
            <p>
              Two divisions, one shop:{" "}
              <Link to="/public-works" className="link">public works signage</Link> for general
              contractors and agencies, and{" "}
              <Link to="/services" className="link">commercial signs</Link> for local businesses.
            </p>
          </SectionHead>
          <SignIndex />
          <Link to="/portfolio" className="label inline-flex items-center gap-3 mt-10 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
            See the work <Arrow />
          </Link>
        </div>
      </section>

      {/* ========================= SPEC SHEET ========================= */}
      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <div className="animate-on-scroll">
              <p className="label flex items-center gap-3">
                <span className="bg-hivis text-ink px-2 py-1">02</span>
                Full-service since 1999
              </p>
              <h2 className="display display-3 mt-5">{homeIntro.heading}</h2>
            </div>
            <div className="animate-on-scroll delay-1">
              <div className="space-y-4 measure">
                {homeIntro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-10 border-b border-ink/20">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-[1fr_auto] sm:grid-cols-[10rem_12rem_1fr] gap-x-6 gap-y-1 items-baseline border-t border-ink/20 py-4"
                  >
                    <dt className="label">{s.label}</dt>
                    <dd className="display display-3 text-green text-right sm:text-left">{s.value}</dd>
                    <dd className="col-span-2 sm:col-span-1 text-sm text-ink-soft">{s.detail}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/about" className="label inline-flex items-center gap-3 mt-8 border-b-2 border-ink pb-1 hover:gap-5 transition-[gap]">
                Learn more about us <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {pulls.length > 0 && <Proofs />}
    </div>
  );
}
