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

  return (
    <footer className="bg-navy-dark text-white">
      {/* Quick Quote CTA */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-3">Get a Quick Quote</h3>
              <p className="text-gray-400 text-sm">
                Need a fast estimate? Fill out this form and we'll get back to you within one business day.
              </p>
            </div>
            {quickStatus === "success" ? (
              <div className="text-center py-4">
                <p className="text-gold font-medium">Thanks! We'll be in touch shortly.</p>
                <button onClick={() => setQuickStatus("idle")} className="text-sm text-gray-400 mt-2 hover:text-white">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={quickForm.name}
                    onChange={handleQuickChange}
                    className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={quickForm.email}
                    onChange={handleQuickChange}
                    className="bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={quickForm.phone}
                  onChange={handleQuickChange}
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50"
                />
                <textarea
                  name="message"
                  required
                  rows={2}
                  placeholder="Brief project description..."
                  value={quickForm.message}
                  onChange={handleQuickChange}
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50 resize-none"
                />
                <button
                  type="submit"
                  disabled={quickStatus === "sending"}
                  className="bg-gold text-navy-dark px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-light transition-colors disabled:opacity-60"
                >
                  {quickStatus === "sending" ? "Sending..." : "Send"}
                </button>
                {quickStatus === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Try again or call 818-346-2142.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">Advanced Sign & Banner</h3>
            <p className="text-gray-400 text-sm">
              Professional signage for general contractors and businesses across Southern California for over 25 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/public-works" className="text-gray-400 hover:text-white transition-colors">
                  Public Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:818-346-2142" className="hover:text-white transition-colors">
                  818-346-2142
                </a>
              </li>
              <li>
                <a href="mailto:info@advsigns.net" className="hover:text-white transition-colors">
                  info@advsigns.net
                </a>
              </li>
              <li>
                21354 Nordhoff St. Ste 111,<br />Chatsworth, CA 91311
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Serving Chatsworth, Northridge, Woodland Hills, Encino, Sherman Oaks, Van Nuys, Burbank, Glendale, Pasadena, Downtown LA, West LA, Santa Monica, Thousand Oaks, Simi Valley, Oxnard, Ventura, Anaheim, Irvine, Ontario, and all of Southern California.
          </p>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Advanced Sign & Banner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
