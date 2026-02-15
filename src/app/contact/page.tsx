import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit",
  description:
    "Demandez votre devis couverture gratuit sous 48h. Couvreur Île-de-France — ardoise, zinc, tuiles, isolation. Urgences 7j/7. 01 45 78 92 31.",
  alternates: { canonical: "https://toitsexcellence.fr/contact" },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    primary: "01 45 78 92 31",
    secondary: "Urgences disponibles 7j/7",
    href: "tel:+33145789231",
  },
  {
    icon: Mail,
    label: "Email",
    primary: "contact@toitsexcellence.fr",
    secondary: "Réponse sous 24h",
    href: "mailto:contact@toitsexcellence.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    primary: "15 Rue de la Tuile",
    secondary: "94200 Ivry-sur-Seine",
    href: "https://maps.google.com/?q=Ivry-sur-Seine+94200",
  },
  {
    icon: Clock,
    label: "Horaires",
    primary: "Lun–Ven : 8h–18h",
    secondary: "Sam : 8h–12h",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-[#2C3E50] text-center">
        <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Demande de devis
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Contactez-nous
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Devis gratuit et sans engagement. Réponse sous 48h, souvent bien moins.
        </p>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-8">
                Nos coordonnées
              </h2>

              <ul className="space-y-6 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-[#B8860B]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#B8860B]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7A82] uppercase tracking-wider font-medium mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-[#2C3E50]">{item.primary}</p>
                        <p className="text-xs text-[#6B7A82] mt-0.5">{item.secondary}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:opacity-80 transition-opacity block"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-[#E0D9CE] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#B8860B] mx-auto mb-2" />
                  <p className="text-sm text-[#6B7A82]">94200 Ivry-sur-Seine</p>
                  <a
                    href="https://maps.google.com/?q=Ivry-sur-Seine+94200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B8860B] underline mt-1 inline-block"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-[#E0D9CE] p-8 lg:p-10">
              <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-2">
                Votre demande de devis
              </h2>
              <p className="text-sm text-[#6B7A82] mb-8">
                Remplissez le formulaire, nous vous rappelons sous 48h avec un devis détaillé.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
