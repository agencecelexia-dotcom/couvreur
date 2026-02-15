import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

const services = [
  { label: "Couverture neuve", href: "/services#couverture-neuve" },
  { label: "Rénovation toiture", href: "/services#renovation" },
  { label: "Démoussage & nettoyage", href: "/services#demoussage" },
  { label: "Zinguerie", href: "/services#zinguerie" },
  { label: "Isolation combles", href: "/services#isolation" },
  { label: "Dépannage urgent", href: "/services#depannage" },
];

const zones = [
  "Paris (75)", "Hauts-de-Seine (92)", "Val-de-Marne (94)",
  "Seine-Saint-Denis (93)", "Yvelines (78)", "Essonne (91)",
  "Val-d'Oise (95)", "Seine-et-Marne (77)",
];

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-xl font-bold text-white">
                Toits d&apos;Excellence
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-[#B8860B] mt-1">
                Maître Couvreur
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Artisans couvreurs en Île-de-France depuis 1987. Spécialistes ardoise,
              zinc, tuiles et isolation. Qualibat RGE certifié, garantie décennale.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5">
                <Shield className="w-3 h-3 text-[#B8860B]" />
                <span>RGE Qualibat</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5">
                <Award className="w-3 h-3 text-[#B8860B]" />
                <span>Décennale</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-[#B8860B] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Zone d&apos;intervention
            </h3>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone} className="text-sm text-white/60">
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+33145789231"
                    className="text-sm text-white/80 hover:text-white transition-colors block"
                  >
                    01 45 78 92 31
                  </a>
                  <span className="text-xs text-white/40">Urgences 7j/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@toitsexcellence.fr"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  contact@toitsexcellence.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  15 Rue de la Tuile<br />
                  94200 Ivry-sur-Seine
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  Lun–Ven : 8h–18h<br />
                  Sam : 8h–12h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Toits d&apos;Excellence — SIRET 482 156 789 00024
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
