import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Public Works", to: "/public-works" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkBase =
    "font-display font-semibold tracking-normal text-base transition-colors";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-ink/10 shadow-sm">
      <div className="h-1 bg-blue-strong" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logo-wordmark.png"
              alt="Advanced Sign & Banner"
              className="h-11 sm:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`inline-flex items-center gap-1 ${linkBase} ${
                      isActive(link.to) || link.children.some((c) => isActive(c.to))
                        ? "text-blue-strong"
                        : "text-ink/70 hover:text-blue-strong"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-paper border border-ink/10 shadow-lg py-2 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-5 py-2.5 font-display font-semibold text-base transition-colors ${
                            isActive(child.to)
                              ? "text-blue-strong bg-sand"
                              : "text-ink/70 hover:bg-sand hover:text-blue-strong"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${linkBase} ${
                    isActive(link.to) ? "text-blue-strong" : "text-ink/70 hover:text-blue-strong"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:818-346-2142"
              className="hidden xl:inline-flex items-center gap-2 font-display font-semibold tracking-normal text-base text-blue-strong hover:text-blue transition-colors"
            >
              <Phone size={17} />
              818-346-2142
            </a>
            <Link
              to="/contact"
              className="bg-flare text-paper px-6 py-3 font-display font-semibold tracking-normal text-base hover:bg-flare-strong transition-colors"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-ink/10">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.to}>
                  <Link
                    to={link.to}
                    className={`block font-display font-semibold tracking-normal text-base py-2.5 ${
                      isActive(link.to) ? "text-blue-strong" : "text-ink/80"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children
                    .filter((c) => c.to !== link.to)
                    .map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block font-display font-semibold text-base py-2 pl-5 ${
                          isActive(child.to) ? "text-blue-strong" : "text-ink/55"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block font-display font-semibold tracking-normal text-base py-2.5 ${
                    isActive(link.to) ? "text-blue-strong" : "text-ink/80"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:818-346-2142"
                className="inline-flex items-center gap-2 font-display font-semibold tracking-normal text-base text-blue-strong"
              >
                <Phone size={17} />
                818-346-2142
              </a>
              <Link
                to="/contact"
                className="bg-flare text-paper px-6 py-3 font-display font-semibold tracking-normal text-base text-center hover:bg-flare-strong transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
