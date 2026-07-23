import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="border-t-4 border-navy" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Advanced Sign & Banner"
              className="h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive(link.to) || link.children.some((c) => isActive(c.to))
                        ? "text-gold"
                        : "text-gray-700 hover:text-navy"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border py-2 min-w-[160px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.to) ? "text-gold bg-gold/5" : "text-gray-700 hover:bg-gray-50 hover:text-navy"
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
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.to) ? "text-gold" : "text-gray-700 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-gold text-navy-dark"
                  : "bg-navy text-white hover:bg-navy-dark"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.to}>
                  <Link
                    to={link.to}
                    className={`block text-sm font-medium py-2 ${
                      isActive(link.to) ? "text-gold" : "text-gray-700"
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
                        className={`block text-sm font-medium py-2 pl-4 ${
                          isActive(child.to) ? "text-gold" : "text-gray-500"
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
                  className={`block text-sm font-medium py-2 ${
                    isActive(link.to) ? "text-gold" : "text-gray-700"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className={`block px-6 py-2.5 rounded-md text-sm font-medium text-center ${
                isActive("/contact")
                  ? "bg-gold text-navy-dark"
                  : "bg-navy text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
