import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Couverture Neuve",
    description:
      "Pose complète de toitures en ardoise naturelle, tuiles ou zinc. Du neuf haut de gamme avec garantie décennale.",
    image:
      "/images/projects/grid-couverture.png",
    href: "/services#couverture-neuve",
  },
  {
    title: "Rénovation Toiture",
    description:
      "Réfection partielle ou totale. Remplacement des éléments défectueux, reprise d'étanchéité, respect de l'architecture.",
    image:
      "/images/projects/grid-renovation.png",
    href: "/services#renovation",
  },
  {
    title: "Zinguerie Fine",
    description:
      "Gouttières, chéneaux, faîtages, noues et lucarnes. La zinguerie artisanale qui protège et embellit votre maison.",
    image:
      "/images/projects/grid-zinguerie.png",
    href: "/services#zinguerie",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Notre savoir-faire
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight mb-4">
            Des prestations d&apos;exception
          </h2>
          <p className="text-[#6B7A82] leading-relaxed">
            De la rénovation à la construction neuve, notre équipe d&apos;artisans
            couvreurs certifiés intervient sur tous types de toitures en Île-de-France.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#B8860B] text-sm font-medium">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All services link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2C3E50] hover:text-[#B8860B] transition-colors border-b border-[#E0D9CE] hover:border-[#B8860B] pb-0.5"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
