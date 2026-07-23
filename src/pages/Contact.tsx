import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

const contactInfo = [
  { label: "Phone", value: "818-346-2142", href: "tel:818-346-2142" },
  { label: "Email", value: "info@advsigns.net", href: "mailto:info@advsigns.net" },
  { label: "Location", value: "21354 Nordhoff St. Ste 111, Chatsworth, CA 91311", href: "https://maps.google.com/?q=21354+Nordhoff+St+Ste+111+Chatsworth+CA+91311", external: true },
];

const projectTypes = [
  "Construction Signage",
  "Building Signs",
  "ADA Signage",
  "Vehicle Wraps",
  "Wall Graphics",
  "Lobby Signs",
  "Laser Engraving",
  "Other",
];

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Free Sign Quote",
    description: "Contact Advanced Sign & Banner in Chatsworth, CA for a free quote. Serving Los Angeles & Southern California. Call 818-346-2142 or use our online form.",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!apiKey || apiKey === "YOUR_ACCESS_KEY") {
        console.error("Web3Forms API key not configured. Add VITE_WEB3FORMS_KEY to your .env file.");
        setStatus("error");
        return;
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `Quote Request from ${formData.name} — ${formData.projectType}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", projectType: "", timeline: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Contact Our Sign Company
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to discuss your signage project? Get in touch with our team for a consultation and free quote.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-center group"
              >
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-navy font-medium group-hover:text-gold transition-colors text-sm">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Request a Quote</h2>
            <p className="text-gray-600">
              Tell us about your project and we'll get back to you within one business day.
              Looking for <Link to="/public-works" className="text-navy font-medium underline hover:text-gold">public works signage</Link>?
              See our qualifications and certifications.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your quote request and will get back to you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-gold font-medium hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                    placeholder="(818) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-navy mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors bg-white"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-navy mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors bg-white"
                  >
                    <option value="">Select a timeline</option>
                    <option value="urgent">Urgent — call to discuss</option>
                    <option value="standard">Standard (4-6 weeks)</option>
                    <option value="flexible">Flexible (2-3 months)</option>
                    <option value="planning">Planning / budgeting</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your project — type of signs, quantity, location, any specific requirements..."
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-red-600 text-sm">
                  Something went wrong. Please try again or call us at 818-346-2142.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Submit Quote Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-80">
        <iframe
          title="Advanced Sign & Banner Location"
          src="https://www.google.com/maps/embed/v1/place?key=REMOVED-MAPS-KEY&q=21354+Nordhoff+St+Suite+111,+Chatsworth,+CA+91311&zoom=15"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
