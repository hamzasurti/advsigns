import { Phone, Mail, MapPin } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    subtitle: "Call us during business hours",
    value: "818-346-2142",
    href: "tel:818-346-2142",
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Send us a message anytime",
    value: "info@advsigns.net",
    href: "mailto:info@advsigns.net",
  },
  {
    icon: MapPin,
    title: "Location",
    subtitle: "Serving the local area",
    value: "21354 Nordhoff St. Ste 111, Chatsworth, CA 91311",
    href: "https://maps.google.com/?q=21354+Nordhoff+St+Ste+111+Chatsworth+CA+91311",
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's Build Something Together
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to discuss your signage project? Get in touch with our team for a consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.title === "Location" ? "_blank" : undefined}
                rel={card.title === "Location" ? "noopener noreferrer" : undefined}
                className="bg-white rounded-xl border p-8 text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-1">{card.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{card.subtitle}</p>
                <p className="text-gold font-medium text-sm group-hover:underline">
                  {card.value}
                </p>
              </a>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12">
            Ready to start your project? Reach out using any of the methods above.
          </p>
        </div>
      </section>
    </div>
  );
}
