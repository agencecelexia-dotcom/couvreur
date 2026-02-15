import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: "🏠",
    title: "Couverture Neuve",
    description: "Pose complète en ardoise naturelle, tuiles ou zinc. Garantie décennale, matériaux nobles.",
    href: "/services#couverture-neuve",
  },
  {
    icon: "🔧",
    title: "Rénovation Toiture",
    description: "Réfection partielle ou totale, diagnostic charpente, respect de l'architecture.",
    href: "/services#renovation",
  },
  {
    icon: "💧",
    title: "Démoussage",
    description: "Nettoyage, traitement hydrofuge 10 ans, inspection complète lors de l'intervention.",
    href: "/services#demoussage",
  },
  {
    icon: "⚡",
    title: "Zinguerie Fine",
    description: "Gouttières, chéneaux, faîtages, solins et lucarnes. Zinc naturel, plomb ou inox.",
    href: "/services#zinguerie",
  },
  {
    icon: "🌡️",
    title: "Isolation Combles",
    description: "Certifiés RGE. Aides MaPrimeRénov' et CEE prises en charge de A à Z.",
    href: "/services#isolation",
  },
  {
    icon: "🚨",
    title: "Dépannage Urgent",
    description: "Intervention sous 24h en Île-de-France. 7j/7, rapport d'expertise assurance inclus.",
    href: "/services#depannage",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="max-w-2xl mb-14">
          <SectionHeading
            eyebrow="Notre savoir-faire"
            title="Des prestations d'exception"
            subtitle="Six métiers maîtrisés par nos artisans certifiés, pour protéger et sublimer votre toiture en Île-de-France."
          />
        </FadeUp>

        {/* Grid 6 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 0.07}>
              <Link
                href={service.href}
                className="group flex flex-col p-6 sm:p-8 bg-white border border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 text-2xl mb-5">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold text-primary-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent-500 text-sm font-medium mt-5 group-hover:gap-3 transition-all">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* All services link */}
        <FadeUp className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-900 hover:text-accent-500 transition-colors border-b border-neutral-300 hover:border-accent-500 pb-0.5"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
