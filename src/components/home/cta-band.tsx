import Link from "next/link";
import { Phone } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative py-20 lg:py-24 bg-[#B8860B] overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/70 text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Votre projet toiture
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Votre toiture mérite<br className="hidden sm:block" /> un expert
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Devis gratuit et sans engagement sous 48h. Nous intervenons sur toute l&apos;Île-de-France.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center h-13 px-8 text-base font-medium bg-white text-[#B8860B] hover:bg-[#F5F5DC] transition-colors"
          >
            Demander un devis gratuit
          </Link>
          <a
            href="tel:+33145789231"
            className="inline-flex items-center gap-2 h-13 px-8 text-base font-medium border border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            01 45 78 92 31
          </a>
        </div>

        <p className="mt-8 text-white/60 text-sm">
          Urgences toiture disponibles 7j/7 · Garantie décennale · Qualibat RGE
        </p>
      </div>
    </section>
  );
}
