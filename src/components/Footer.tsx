import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [quickForm, setQuickForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [quickStatus, setQuickStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickStatus("sending");
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!apiKey || apiKey === "YOUR_ACCESS_KEY") {
        console.error("Web3Forms API key not configured. Add VITE_WEB3FORMS_KEY to your .env file.");
        setQuickStatus("error");
        return;
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `Quick Quote from ${quickForm.name}`,
          from_name: quickForm.name,
          ...quickForm,
        }),
      });
      if (response.ok) {
        setQuickStatus("success");
        setQuickForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setQuickStatus("error");
      }
    } catch {
      setQuickStatus("error");
    }
  };

  const handleQuickChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuickForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full bg-white/10 border border-white/15 rounded-none px-4 py-2.5 text-sm text-paper placeholder:text-paper/45 focus:outline-none focus:border-flare focus:ring-1 focus:ring-flare";

  return (
    <footer className="bg-blue-deep text-paper">
      {/* Quick Quote CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase text-paper/55 mb-3">
                Free estimate
              </p>
              <h3 className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(1.75rem,4vw,2.75rem)]">
                Get a quick quote
              </h3>
              <p className="mt-3 text-paper/65 text-sm max-w-sm">
                Send us the basics and we&rsquo;ll get back to you within one
                business day. Prefer to talk?{" "}
                <a href="tel:818-346-2142" className="text-flare hover:underline">
                  818-346-2142
                </a>
                .
              </p>
            </div>
            {quickStatus === "success" ? (
              <div className="py-4">
                <p className="font-display font-semibold text-paper">
                  Thanks, we&rsquo;ll be in touch shortly.
                </p>
                <button
                  onClick={() => setQuickStatus("idle")}
                  className="text-sm text-paper/60 mt-2 hover:text-paper"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="footer-name" className="sr-only">Name</label>
                    <input id="footer-name" type="text" name="name" required placeholder="Name"
                      value={quickForm.name} onChange={handleQuickChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="footer-email" className="sr-only">Email</label>
                    <input id="footer-email" type="email" name="email" required placeholder="Email"
                      value={quickForm.email} onChange={handleQuickChange} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="footer-phone" className="sr-only">Phone (optional)</label>
                  <input id="footer-phone" type="tel" name="phone" placeholder="Phone (optional)"
                    value={quickForm.phone} onChange={handleQuickChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="footer-message" className="sr-only">Brief project description</label>
                  <textarea id="footer-message" name="message" required rows={2} placeholder="Brief project description..."
                    value={quickForm.message} onChange={handleQuickChange} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={quickStatus === "sending"}
                  className="bg-flare text-paper px-7 py-2.5 font-display font-semibold hover:bg-flare-strong transition-colors disabled:opacity-60"
                >
                  {quickStatus === "sending" ? "Sending..." : "Send"}
                </button>
                <p aria-live="polite" className="min-h-[1rem]">
                  {quickStatus === "error" && (
                    <span className="text-flare text-xs">
                      Something went wrong. Try again or call 818-346-2142.
                    </span>
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display font-bold tracking-tight text-xl leading-none">
              Advanced Sign &amp; Banner
            </h3>
            <p className="mt-3 text-paper/60 text-sm leading-relaxed">
              Professional signage for general contractors, public agencies, and
              businesses across Southern California for over 25 years.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wide text-xs text-paper/70 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/public-works" className="text-paper/60 hover:text-paper transition-colors">Public Works</Link></li>
              <li><Link to="/services" className="text-paper/60 hover:text-paper transition-colors">Commercial Services</Link></li>
              <li><Link to="/portfolio" className="text-paper/60 hover:text-paper transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wide text-xs text-paper/70 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-paper/60 hover:text-paper transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-paper/60 hover:text-paper transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-paper/60 hover:text-paper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wide text-xs text-paper/70 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-paper/60">
              <li><a href="tel:818-346-2142" className="hover:text-paper transition-colors">818-346-2142</a></li>
              <li><a href="mailto:info@advsigns.net" className="hover:text-paper transition-colors">info@advsigns.net</a></li>
              <li className="pt-1">21354 Nordhoff St. Ste 111,<br />Chatsworth, CA 91311</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-xs text-paper/45 text-center leading-relaxed">
            Serving Chatsworth, Northridge, Woodland Hills, Encino, Sherman Oaks, Van Nuys, Burbank, Glendale, Pasadena, Downtown LA, West LA, Santa Monica, Thousand Oaks, Simi Valley, Oxnard, Ventura, Anaheim, Irvine, Ontario, and all of Southern California.
          </p>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm text-paper/45">
          &copy; {new Date().getFullYear()} Advanced Sign &amp; Banner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
