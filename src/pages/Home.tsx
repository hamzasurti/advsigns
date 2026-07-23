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

const serviceLinks = [
  { label: "Construction Signs", to: "/public-works" },
  { label: "Building Signs", to: "/public-works" },
  { label: "ADA Signage", to: "/public-works" },
  { label: "Vehicle Wraps", to: "/services" },
  { label: "Wall Graphics", to: "/services" },
  { label: "Laser Engraving", to: "/services" },
];

export default function Home() {
  usePageMeta({
    title: "Sign Company in Chatsworth, CA",
    description: "Sign company in Chatsworth, CA since 1999. Construction signs, ADA signage, vehicle wraps & lobby signs. DBE/SBE certified. Call 818-346-2142.",
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
    video.load();
    video.play().catch(() => {});
    const handleEnded = () => advanceVideo();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [currentVideo, advanceVideo]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-navy-dark">
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideos[currentVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
              <p className="text-gold font-semibold text-sm mb-3">
                Trusted Since 1999
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Sign Company in Chatsworth, CA
              </h1>
              <p className="text-gray-200 text-lg mb-8">
                Serving general contractors and businesses across Southern California
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold text-navy-dark px-6 py-3 rounded-md font-semibold hover:bg-gold-light transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/public-works"
                  className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
                >
                  Public Works
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentVideo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentVideo ? "w-8 bg-gold" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Service links — simple text, no icons */}
      <section className="py-6 border-b animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {serviceLinks.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="text-sm text-gray-500 hover:text-navy transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-navy mb-10">
            Trusted by Major Institutions & Leading Builders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About / Body Content */}
      <section className="py-16 bg-gray-50 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">
            Full-Service Sign Company Since 1999
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4 text-center max-w-3xl mx-auto">
            <p>
              Advanced Sign &amp; Banner is a full-service sign company in Chatsworth, California
              serving Los Angeles, the San Fernando Valley, Ventura County, and all of Southern
              California. Since 1999 we've completed over 1,000 projects for general contractors,
              public agencies, and commercial businesses.
            </p>
            <p>
              Our services include construction signage, ADA-compliant signs, building identification,
              lobby signs, vehicle wraps, wall graphics, and laser engraving. We are DBE, SBE, SABE,
              and CBE certified — prequalified for prevailing wage public works projects.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/about"
              className="text-navy font-medium hover:text-gold transition-colors text-sm"
            >
              Learn more about us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — only show if real testimonials exist */}
      {testimonials.length > 0 && !testimonials[0].name.startsWith("[") && (
        <section className="py-20 bg-gray-50 animate-on-scroll">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy text-center mb-10">What Our Clients Say</h2>

            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-bold text-navy">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentTestimonial ? "w-6 bg-gold" : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                  }
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link to="/testimonials" className="text-sm text-gray-500 hover:text-navy transition-colors">
                Read all testimonials &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
