import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

export function CtaBand() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/projects/artisan-ardoise.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-accent-400 text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Votre projet mérite le meilleur
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Prêt à confier votre toiture<br className="hidden sm:block" /> à des artisans d&apos;excellence ?
          </h2>
          <p className="text-neutral-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Devis gratuit sous 48h — Intervention rapide en Île-de-France — Qualibat RGE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-medium bg-accent-500 text-white hover:bg-accent-600 transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33145789231"
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-medium border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              01 45 78 92 31
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
