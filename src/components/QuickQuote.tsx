import useQuoteForm from "../hooks/useQuoteForm";
import Arrow from "./Arrow";
import { business, quickQuote } from "../content/site";

const empty = { name: "", email: "", phone: "", message: "" };

export default function QuickQuote() {
  const form = useQuoteForm(empty, (v) => `Quick Quote from ${v.name}`);

  return (
    <div className="wrap py-[var(--s13)]">
      <div className="split-5-8 items-start">
        <div>
          <p className="label text-mark">{quickQuote.eyebrow}</p>
          <h2 className="display display-2 mt-4">{quickQuote.heading}</h2>
          <p className="mt-5 text-on-mat measure">
            {quickQuote.body} Prefer to talk?{" "}
            <a href={business.phoneHref} className="link">
              818-346-2142
            </a>
          </p>
        </div>

        {form.sent ? (
          <div role="status" className="border border-paper/30 p-8">
            <p className="display display-3">Got it. We&rsquo;ll be in touch soon.</p>
            <button type="button" onClick={form.reset} className="link mt-4">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={form.onSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
            <label className="block">
              <span className="label text-on-mat">Name</span>
              <input className="field mt-2" type="text" name="name" required autoComplete="name"
                value={form.values.name} onChange={form.onChange} />
            </label>
            <label className="block">
              <span className="label text-on-mat">Email</span>
              <input className="field mt-2" type="email" name="email" required autoComplete="email"
                value={form.values.email} onChange={form.onChange} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label text-on-mat">Phone (optional)</span>
              <input className="field mt-2" type="tel" name="phone" autoComplete="tel"
                value={form.values.phone} onChange={form.onChange} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label text-on-mat">What do you need made?</span>
              <textarea className="field mt-2" name="message" required rows={3}
                value={form.values.message} onChange={form.onChange} />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button type="submit" disabled={form.sending} className="btn btn-mark">
                {form.sending ? "Sending" : "Send request"} <Arrow />
              </button>
              <p aria-live="polite" className="text-sm font-semibold text-mark">
                {form.error}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
