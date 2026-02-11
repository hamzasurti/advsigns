import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">Advanced Sign & Banner</h3>
            <p className="text-gray-400 text-sm">
              Professional signage solutions for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/government-services" className="text-gray-400 hover:text-white transition-colors">
                  Government Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
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
            <h4 className="font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:818-346-2142" className="hover:text-white transition-colors">
                  818-346-2142
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@advsigns.net" className="hover:text-white transition-colors">
                  info@advsigns.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5" />
                <span>21354 Nordhoff St. Ste 111,<br />Chatsworth, CA 91311</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Advanced Sign & Banner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
