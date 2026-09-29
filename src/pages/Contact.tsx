import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import useQuoteForm from "../hooks/useQuoteForm";
import PageHead from "../components/PageHead";
import Arrow from "../components/Arrow";
import { business, contact } from "../content/site";

const empty = { name: "", email: "", phone: "", company: "", projectType: "", timeline: "", message: "" };

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Free Sign Quote",
    description: "Contact Advanced Sign & Banner in Chatsworth, CA for a free quote. Serving Los Angeles & Southern California. Call 818-346-2142 or use our online form.",
  });

  const form = useQuoteForm(empty, (v) => `Quote Request from ${v.name}, ${v.projectType}`);

  return (
    <div>
      <PageHead tone="mat" eyebrow="Contact" lead={contact.lead}>
        <h1 className="display display-1">Contact our sign company</h1>
      </PageHead>

      <section className="mat on-mat">
        <div className="wrap pb-[var(--s13)]">
          <dl className="tblock rule-mat bg-mat grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rise rise-3">
            <div>
              <dt className="label text-hivis">Phone</dt>
              <dd className="display display-4 mt-3">
                <a href="tel:818-346-2142" className="hover:text-hivis">818-346-2142</a>
              </dd>
            </div>
            <div>
              <dt className="label text-hivis">Email</dt>
              <dd className="display display-4 mt-3 break-words">
                <a href={business.emailHref} className="hover:text-hivis">{business.email}</a>
              </dd>
            </div>
            <div>
              <dt className="label text-hivis">Shop</dt>
              <dd className="display display-4 mt-3">
                <a href={business.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-hivis">
                  {business.street}, {business.cityLine}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-hivis">Hours</dt>
              <dd className="display display-4 mt-3">{business.hours}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The form, laid out like a shop job ticket */}
      <section className="on-paper bg-paper-2">
        <div className="wrap py-[var(--s15)]">
          <div className="split-5-8 items-start">
            <div>
              <p className="label flex items-center gap-3">
                <span className="bg-hivis text-ink px-2 py-1">01</span>
                Job ticket
              </p>
              <h2 className="display display-2 mt-5">{contact.formHeading}</h2>
              <p className="lead mt-5 text-ink-soft">
                {contact.formLead} Looking for{" "}
                <Link to="/public-works" className="link">public works signage</Link>? See our
                qualifications and certifications.
              </p>
            </div>

            {form.sent ? (
              <div role="status" className="crop bg-paper">
                <div className="p-8 sm:p-12">
                  <p className="label text-green">Received</p>
                  <h3 className="display display-3 mt-3">Thank you. Your request is on the bench.</h3>
                  <p className="mt-4 text-ink-soft">
                    We&rsquo;ve received your quote request and will get back to you within one business day.
                  </p>
                  <button type="button" onClick={form.reset} className="btn btn-line mt-8">
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={form.onSubmit} className="crop bg-paper">
                <div className="p-6 sm:p-10 grid sm:grid-cols-2 gap-x-8 gap-y-7">
                  <label className="block">
                    <span className="label">Full name *</span>
                    <input className="field mt-2" type="text" name="name" required autoComplete="name"
                      value={form.values.name} onChange={form.onChange} />
                  </label>
                  <label className="block">
                    <span className="label">Email address *</span>
                    <input className="field mt-2" type="email" name="email" required autoComplete="email"
                      value={form.values.email} onChange={form.onChange} />
                  </label>
                  <label className="block">
                    <span className="label">Phone number</span>
                    <input className="field mt-2" type="tel" name="phone" autoComplete="tel"
                      value={form.values.phone} onChange={form.onChange} />
                  </label>
                  <label className="block">
                    <span className="label">Company</span>
                    <input className="field mt-2" type="text" name="company" autoComplete="organization"
                      value={form.values.company} onChange={form.onChange} />
                  </label>
                  <label className="block relative">
                    <span className="label">Project type *</span>
                    <select className="field mt-2" name="projectType" required
                      value={form.values.projectType} onChange={form.onChange}>
                      <option value="">Select a project type</option>
                      {contact.projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <span aria-hidden="true" className="pointer-events-none absolute right-4 bottom-[1.05rem] w-2.5 h-2.5 border-r-2 border-b-2 border-ink rotate-45" />
                  </label>
                  <label className="block relative">
                    <span className="label">Timeline</span>
                    <select className="field mt-2" name="timeline"
                      value={form.values.timeline} onChange={form.onChange}>
                      <option value="">Select a timeline</option>
                      {contact.timelines.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                    <span aria-hidden="true" className="pointer-events-none absolute right-4 bottom-[1.05rem] w-2.5 h-2.5 border-r-2 border-b-2 border-ink rotate-45" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="label">Project details *</span>
                    <span className="block text-sm text-ink-soft mt-1">
                      Type of signs, quantity, location, any specific requirements.
                    </span>
                    <textarea className="field mt-2" name="message" required rows={5}
                      value={form.values.message} onChange={form.onChange} />
                  </label>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
                    <button type="submit" disabled={form.sending} className="btn btn-mark">
                      {form.sending ? "Sending" : "Submit quote request"} <Arrow />
                    </button>
                    <p aria-live="polite" className="font-semibold">
                      {form.error && <span className="hl">{form.error}</span>}
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mat on-mat" aria-label="Map">
        <div className="wrap py-[var(--s5)]">
          <div className="crop text-on-mat">
            <iframe
              title="Advanced Sign & Banner location"
              src={business.mapsEmbed}
              className="block w-full h-[24rem] border-0 bg-mat-2"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
