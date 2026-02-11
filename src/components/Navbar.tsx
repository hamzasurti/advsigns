import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Government Services", to: "/government-services" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-gray-700 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-navy text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-navy-dark transition-colors"
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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-navy text-white px-6 py-2.5 rounded-md text-sm font-medium text-center"
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
