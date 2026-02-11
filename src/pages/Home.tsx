import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const heroSlides = [
  { image: "/assets/hero/construction-signage.jpg", alt: "Construction signage" },
  { image: "/assets/hero/building-signs.jpg", alt: "Building signs" },
  { image: "/assets/hero/lobby-signs.jpg", alt: "Lobby signs" },
  { image: "/assets/hero/vehicle-wraps.jpg", alt: "Vehicle wraps" },
];

const clientLogos = [
  { src: "/assets/logos/la-metro.png", alt: "LA Metro" },
  { src: "/assets/logos/burbank-airport.png", alt: "Hollywood Burbank Airport" },
  { src: "/assets/logos/la-county-courts.png", alt: "LA County Courts" },
  { src: "/assets/logos/shelleys-stereo.png", alt: "Shelley's Stereo" },
  { src: "/assets/logos/aldi.png", alt: "ALDI" },
  { src: "/assets/logos/micabella.png", alt: "MicaBella Cosmetics" },
];

const testimonials = [
  {
    quote: "Advanced Sign & Banner delivered exceptional quality on our courthouse signage project. Their attention to detail and compliance knowledge made them the perfect partner.",
    name: "Scott R.",
    role: "Project Manager",
    company: "General Contractor",
  },
  {
    quote: "From design to installation, the team was professional and reliable. Our lobby signs look incredible and were completed on schedule.",
    name: "Julianna S.",
    role: "Business Owner",
    company: "Retail Client",
  },
  {
    quote: "Their understanding of prevailing wage requirements and government procurement saved us time and headaches. Highly recommend for any public works project.",
    name: "Carlos R.",
    role: "Construction Manager",
    company: "Government Project",
  },
  {
    quote: "We've used Advanced Sign for multiple projects over the years. Consistent quality and great communication every time.",
    name: "Amanda T.",
    role: "Facilities Manager",
    company: "Commercial Client",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
              <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">
                Trusted Since 1999
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Excellence in Every Sign
              </h1>
              <p className="text-gray-200 text-lg mb-8">
                Serving government agencies and businesses across Southern California
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-md font-semibold hover:bg-gold-light transition-colors"
                >
                  Get a Quote <ArrowRight size={18} />
                </Link>
                <Link
                  to="/government-services"
                  className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-dark transition-colors"
                >
                  Government Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentSlide ? "w-8 bg-gold" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 mt-8">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Government & Public Works Banner */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Government & Public Works
          </h2>
          <p className="text-gray-600 mb-10">
            Certified for public sector projects with full prevailing wage compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/assets/logos/la-metro.png" alt="LA Metro" className="h-16 grayscale hover:grayscale-0 transition-all" />
            <img src="/assets/logos/burbank-airport.png" alt="Hollywood Burbank Airport" className="h-16 grayscale hover:grayscale-0 transition-all" />
            <img src="/assets/logos/la-county-courts.png" alt="LA County Courts" className="h-16 grayscale hover:grayscale-0 transition-all" />
          </div>
          <Link
            to="/government-services"
            className="inline-flex items-center gap-2 mt-8 text-navy font-medium hover:text-gold transition-colors"
          >
            View Government Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gold font-semibold uppercase tracking-wide mb-2">
            Trusted By
          </p>
          <h3 className="text-center text-xl font-bold text-navy mb-10">
            Major Institutions & Leading Builders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 mt-2">What our clients say about working with us</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <Quote size={40} className="text-gold/30 mb-4" />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </p>
            <div>
              <p className="font-bold text-navy">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].role} &middot; {testimonials[currentTestimonial].company}
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
        </div>
      </section>
    </div>
  );
}
