import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "../data/testimonials";
import usePageMeta from "../hooks/usePageMeta";
import useScrollAnimation from "../hooks/useScrollAnimation";

const heroVideos = [
  "/assets/hero/video/banner-1.mp4",
  "/assets/hero/video/banner-2.mp4",
  "/assets/hero/video/banner-3.mp4",
];

const clientLogos = [
  { src: "/assets/logos/la-metro.png", alt: "LA Metro" },
  { src: "/assets/logos/burbank-airport.png", alt: "Hollywood Burbank Airport" },
  { src: "/assets/logos/la-county-courts.png", alt: "LA County Courts" },
  { src: "/assets/logos/shelleys-stereo.png", alt: "Shelley's Stereo" },
  { src: "/assets/logos/aldi.png", alt: "ALDI" },
  { src: "/assets/logos/micabella.png", alt: "MicaBella Cosmetics" },
];

const signTypes = [
  { title: "Construction Signs", to: "/public-works", image: "/assets/hero/construction-signage.jpg", alt: "Construction site signage for a public works project in Los Angeles" },
  { title: "Building Signs", to: "/public-works", image: "/assets/hero/building-signs.jpg", alt: "Exterior building identification signs for a civic facility" },
  { title: "Lobby Signs", to: "/services", image: "/assets/hero/lobby-signs.jpg", alt: "Dimensional lobby sign with brushed metal letters" },
  { title: "Vehicle Wraps", to: "/services", image: "/assets/hero/vehicle-wraps.jpg", alt: "Full vehicle wrap for fleet branding in the San Fernando Valley" },
  { title: "Wall Graphics", to: "/services", image: "/assets/services/wall-graphics.jpg", alt: "Custom wall mural and environmental graphics for an office interior" },
  { title: "Laser Engraving", to: "/services", image: "/assets/services/laser-engraving.jpg", alt: "Precision laser-engraved plaque from the Chatsworth sign shop" },
];

const stats = [
  { value: "25+", label: "Years in business" },
  { value: "1,000+", label: "Projects completed" },
  { value: "6", label: "Active certifications" },
  { value: "6", label: "Counties served" },
];

export default function Home() {
  usePageMeta({
    title: "Sign Company in Chatsworth, CA",
    description:
      "Sign company in Chatsworth, CA since 1999. Construction signs, ADA signage, vehicle wraps & lobby signs. DBE/SBE certified. Call 818-346-2142.",
  });
  useScrollAnimation();

  const [currentVideo, setCurrentVideo] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const advanceVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.load();
    video.play().catch(() => {});
    const handleEnded = () => advanceVideo();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [currentVideo, advanceVideo]);

  const showTestimonials =
    testimonials.length > 0 && !testimonials[0].name.startsWith("[");
  const t = testimonials[currentTestimonial];

  return (
    <div>
      {/* ============================ HERO ============================ */}
      <section className="bg-blue-deep text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          {/* Top rule */}
          <div className="rise flex items-center justify-between gap-4 border-b border-white/12 pb-4 text-xs tracking-[0.14em] uppercase text-paper/55">
            <span>Est. 1999, Chatsworth CA</span>
            <span className="hidden md:inline">DBE / SBE / SABE / CBE Certified</span>
            <a href="tel:818-346-2142" className="hover:text-paper transition-colors">818-346-2142</a>
          </div>

          {/* Main */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 md:py-14">
            <div className="lg:col-span-7">
              <h1 className="rise rise-1 font-display font-bold tracking-tight leading-[1.02] text-[clamp(2.25rem,5.5vw,4.25rem)]">
                Sign company in Chatsworth, California
              </h1>
              <p className="rise rise-2 mt-6 max-w-xl text-paper/70 text-lg leading-relaxed">
                A full-service sign shop serving general contractors, public
                agencies, and local businesses across Los Angeles and Southern
                California. Designed, fabricated, and installed in-house since
                1999.
              </p>
              <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="bg-flare text-paper px-7 py-3.5 font-display font-semibold text-base hover:bg-flare-strong transition-colors"
                >
                  Get a quote
                </Link>
                <Link
                  to="/public-works"
                  className="border border-white/30 text-paper px-7 py-3.5 font-display font-semibold text-base hover:bg-white/10 transition-colors"
                >
                  Public works
                </Link>
              </div>
            </div>

            <div className="rise rise-2 lg:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  poster="/assets/hero/building-signs.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={heroVideos[currentVideo]} type="video/mp4" />
                </video>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {heroVideos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentVideo(i)}
                      aria-label={`Show hero clip ${i + 1} of ${heroVideos.length}`}
                      aria-current={i === currentVideo}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentVideo ? "w-6 bg-paper" : "w-3 bg-white/45 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUSTED BY (logos) ===================== */}
      <section className="bg-paper border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-10 gap-y-5">
            <span className="shrink-0 max-w-[10rem] text-xs tracking-[0.12em] uppercase leading-snug text-ink/45">
              Trusted by public agencies and leading builders
            </span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
              {clientLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-9 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHAT WE MAKE ======================== */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl animate-on-scroll">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-blue-strong mb-4">What we do</p>
            <h2 className="font-display font-bold tracking-tight leading-tight text-ink text-[clamp(1.75rem,4vw,3rem)]">
              Signs for every job.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Two divisions, one shop:{" "}
              <Link to="/public-works" className="text-blue-strong underline underline-offset-2 hover:text-flare">public works signage</Link>{" "}
              for general contractors and agencies, and{" "}
              <Link to="/services" className="text-blue-strong underline underline-offset-2 hover:text-flare">commercial signs</Link>{" "}
              for local businesses.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-on-scroll delay-1">
            {signTypes.map((s) => (
              <Link key={s.title} to={s.to} className="group relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/85 via-blue-deep/15 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display font-semibold text-paper text-lg">{s.title}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-8 animate-on-scroll">
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-display font-semibold text-blue-strong hover:gap-3 transition-all">
              See the work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FULL-SERVICE + STATS ===================== */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 animate-on-scroll">
              <p className="text-sm font-semibold tracking-[0.14em] uppercase text-blue-strong mb-4">Full-service since 1999</p>
              <h2 className="font-display font-bold leading-[1.1] tracking-tight text-ink text-[clamp(1.5rem,3.5vw,2.75rem)]">
                More than 1,000 projects delivered across Southern California.
              </h2>
              <div className="mt-7 max-w-2xl text-ink/70 leading-relaxed space-y-4">
                <p>
                  Advanced Sign &amp; Banner is a full-service sign company in
                  Chatsworth, California serving Los Angeles, the San Fernando
                  Valley, Ventura County, and all of Southern California. Since
                  1999 we&rsquo;ve completed over 1,000 projects for general
                  contractors, public agencies, and commercial businesses.
                </p>
                <p>
                  Our work spans construction signage, ADA-compliant signs,
                  building identification, lobby signs, vehicle wraps, wall
                  graphics, and laser engraving. We are DBE, SBE, SABE, and CBE
                  certified, prequalified for prevailing-wage public works
                  projects.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-blue-strong hover:gap-3 transition-all"
              >
                Learn more about us &rarr;
              </Link>
            </div>

            <div className="lg:col-span-5 lg:pl-10 lg:border-l border-ink/10 animate-on-scroll delay-1">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dd className="font-display font-bold text-blue-strong leading-none text-[clamp(2.25rem,6vw,3.5rem)]">
                      {s.value}
                    </dd>
                    <dt className="mt-2 text-xs tracking-[0.1em] uppercase text-ink/50">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== TESTIMONIAL ======================== */}
      {showTestimonials && (
        <section className="bg-blue-deep text-paper">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="flex items-center justify-between gap-4 mb-8">
              <p className="text-sm tracking-[0.12em] uppercase text-paper/55">What clients say</p>
              <span className="text-sm tracking-[0.1em] text-paper/45">
                {String(currentTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <blockquote>
              <p className="text-xl md:text-2xl leading-relaxed text-paper/90 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center justify-between gap-4 border-t border-white/12 pt-6">
                <div>
                  <p className="font-display font-semibold text-paper">{t.name}</p>
                  <p className="text-sm text-paper/60">
                    {t.title}
                    {t.company ? `, ${t.company}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                    }
                    aria-label="Previous testimonial"
                    className="p-2 border border-white/20 text-paper/70 hover:text-paper hover:border-white/45 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                    }
                    aria-label="Next testimonial"
                    className="p-2 border border-white/20 text-paper/70 hover:text-paper hover:border-white/45 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </footer>
            </blockquote>

            <div className="mt-8">
              <Link to="/testimonials" className="inline-flex items-center gap-2 font-display font-semibold text-sm text-paper/65 hover:text-paper transition-colors">
                Read all testimonials &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
