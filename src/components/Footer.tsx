import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import QuickQuote from "./QuickQuote";
import { business } from "../content/site";

export default function Footer() {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="mat on-mat">
      <div className="ruler text-paper" aria-hidden="true" />
      {pathname !== "/contact" && <QuickQuote />}

      <div className="wrap pb-10 pt-[var(--s5)]">
        {/* Title block */}
        <div className="tblock rule-mat grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_3fr_3fr_4fr] bg-mat">
          <div>
            <Logo className="h-12 text-paper" />
            <p className="mt-4 text-sm text-on-mat max-w-xs">{business.blurb}</p>
          </div>
          <div>
            <p className="label text-mark">Signs</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/public-works" className="hover:text-mark">Public Works</Link></li>
              <li><Link to="/services" className="hover:text-mark">Commercial Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-mark">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <p className="label text-mark">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-mark">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-mark">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-mark">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="label text-mark">Shop</p>
            <address className="mt-3 not-italic text-sm space-y-2">
              <p><a href="tel:818-346-2142" className="hover:text-mark">818-346-2142</a></p>
              <p><a href="mailto:info@advsigns.net" className="hover:text-mark">info@advsigns.net</a></p>
              <p>
                <a href={business.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-mark">
                  21354 Nordhoff St. Ste 111,<br />Chatsworth, CA 91311
                </a>
              </p>
              <p className="text-on-mat">{business.hours}</p>
            </address>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="label text-mark">Service area</p>
            <p className="mt-2 text-sm text-on-mat">
              Chatsworth, the San Fernando Valley, Burbank, Glendale, Pasadena and across greater Los Angeles.
            </p>
          </div>
        </div>

        <p className="label text-on-mat mt-6 flex flex-wrap justify-between gap-x-6 gap-y-2">
          <span>&copy; {year} Advanced Sign &amp; Banner</span>
          <span>Designed, fabricated and installed in-house since 1999</span>
        </p>
      </div>
    </footer>
  );
}
