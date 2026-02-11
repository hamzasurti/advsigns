import { Link } from "react-router-dom";
import { Building, Car, Paintbrush, Sparkles, Zap } from "lucide-react";

const services = [
  {
    title: "Lobby Signs",
    description: "Professional dimensional letters and logos for your reception area.",
    image: "/assets/hero/lobby-signs.jpg",
    icon: Building,
  },
  {
    title: "Vehicle Wraps",
    description: "High-impact vehicle graphics and wraps that turn heads on the road.",
    image: "/assets/hero/vehicle-wraps.jpg",
    icon: Car,
  },
  {
    title: "Wall Graphics",
    description: "Custom wall murals and graphics that transform interior spaces.",
    image: "/assets/services/wall-graphics.jpg",
    icon: Paintbrush,
  },
  {
    title: "Special Projects",
    description: "Custom solutions for unique signage needs and specialized installations.",
    image: "/assets/services/special-projects.jpg",
    icon: Sparkles,
  },
  {
    title: "Laser Engraving",
    description: "Precision laser engraving for awards, plaques, and custom products.",
    image: "/assets/services/laser-engraving.jpg",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Commercial Sign Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Professional signage for businesses, retail spaces, and commercial properties. From elegant lobby signs to eye-catching vehicle wraps, we bring your brand to life.
          </p>
          <p className="text-gray-500">
            Looking for government or public works signage?{" "}
            <Link to="/government-services" className="text-navy font-semibold underline hover:text-gold">
              Visit our Government Services page
            </Link>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <service.icon size={20} className="text-navy" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
