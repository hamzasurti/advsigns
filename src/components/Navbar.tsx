import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Arrow from "./Arrow";
import { business, navLinks } from "../content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="on-paper sticky top-0 z-50 bg-paper text-ink">
      <div className="wrap flex items-center justify-between gap-6 h-[72px]">
        <Link to="/" onClick={close} aria-label="Advanced Sign & Banner, home" className="block shrink-0">
          <Logo className="h-10 sm:h-11" />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 xl:gap-9 isolate">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `label nav-link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={business.phoneHref} className="label hidden xl:inline link !text-ink !no-underline">
            818-346-2142
          </a>
          <Link to="/contact" className="btn btn-mark">
            Get a quote <Arrow />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden label flex items-center gap-3 min-h-12 px-1"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="relative block w-6 h-3">
            <span
              className={`absolute left-0 right-0 top-0 h-[2px] bg-current transition-transform duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 bottom-0 h-[2px] bg-current transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div className="ruler border-t border-ink/15" aria-hidden="true" />

      {open && (
        <div id="mobile-menu" className="lg:hidden mat on-mat absolute inset-x-0 top-full h-[calc(100dvh-86px)] overflow-y-auto">
          <nav aria-label="Mobile" className="wrap py-8 flex flex-col">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={close}
                className="rise display display-3 py-4 border-b border-paper/20 flex items-baseline gap-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="label text-mark">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </NavLink>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link to="/contact" onClick={close} className="btn btn-mark">
                Get a quote <Arrow />
              </Link>
              <a href={business.phoneHref} className="btn btn-line">
                Call 818-346-2142
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
