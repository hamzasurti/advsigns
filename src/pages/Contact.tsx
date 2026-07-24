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
  "Construction Signage", "Building Signs", "ADA Signage", "Vehicle Wraps",
  "Wall Graphics", "Lobby Signs", "Laser Engraving", "Other",
];

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Free Sign Quote",
    description: "Contact Advanced Sign & Banner in Chatsworth, CA for a free quote. Serving Los Angeles & Southern California. Call 818-346-2142 or use our online form.",
  });

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", projectType: "", timeline: "", message: "",
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
          subject: `Quote Request from ${formData.name}, ${formData.projectType}`,
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

  const fieldClass =
    "w-full px-4 py-3 bg-paper border border-ink/20 rounded-none focus:ring-2 focus:ring-flare/40 focus:border-flare outline-none transition-colors";
  const labelClass = "block font-display font-bold uppercase tracking-wide text-sm text-blue-strong mb-2";

  return (
    <div>
      {/* Hero */}
      <section className="bg-sand">
        <div className="max-w-4xl mx-auto px-4 pt-40 pb-14 text-center">
          <p className="text-sm font-semibold text-blue-strong tracking-[0.14em] uppercase mb-4">
            Contact
          </p>
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-ink text-[clamp(2.25rem,6vw,4.5rem)]">
            Contact our sign company
          </h1>
          <p className="mt-5 text-ink/70 text-lg max-w-2xl mx-auto">
            Ready to discuss your signage project? Get in touch for a
            consultation and a free quote.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-paper py-12 border-b border-ink/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group"
              >
                <p className="font-display font-bold uppercase tracking-wide text-xs text-blue-strong mb-2">{item.label}</p>
                <p className="text-ink font-medium group-hover:text-flare transition-colors text-sm">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold tracking-tight text-ink text-2xl md:text-3xl mb-3">Request a quote</h2>
            <p className="text-ink/70">
              Tell us about your project and we&rsquo;ll get back to you within one business day.
              Looking for{" "}
              <Link to="/public-works" className="text-blue-strong font-medium underline hover:text-flare">public works signage</Link>?
              See our qualifications and certifications.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-paper border border-ink/10 p-12 text-center">
              <div className="w-16 h-16 bg-blue-strong/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-blue-strong" />
              </div>
              <h3 className="font-display font-bold tracking-tight text-ink text-2xl mb-2">Thank you</h3>
              <p className="text-ink/70 mb-6">
                We&rsquo;ve received your quote request and will get back to you within one business day.
              </p>
              <button onClick={() => setStatus("idle")} className="font-display font-bold uppercase tracking-wide text-flare hover:underline">
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-paper border border-ink/10 p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={fieldClass} placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={fieldClass} placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder="(818) 555-0123" />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={fieldClass} placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                  <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={fieldClass}>
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className={labelClass}>Timeline</label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={fieldClass}>
                    <option value="">Select a timeline</option>
                    <option value="urgent">Urgent, call to discuss</option>
                    <option value="standard">Standard (4-6 weeks)</option>
                    <option value="flexible">Flexible (2-3 months)</option>
                    <option value="planning">Planning / budgeting</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className={labelClass}>Project Details *</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} placeholder="Tell us about your project: type of signs, quantity, location, any specific requirements..." />
              </div>

              <p aria-live="polite" className="min-h-[1.25rem] mt-4">
                {status === "error" && (
                  <span className="text-flare text-sm">
                    Something went wrong. Please try again or call us at 818-346-2142.
                  </span>
                )}
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-flare text-paper px-8 py-3.5 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : (<><Send size={18} /> Submit quote request</>)}
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
