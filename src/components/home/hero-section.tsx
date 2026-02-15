"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-toiture.png')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Eyebrow */}
        <p className="text-[#B8860B] text-xs tracking-[0.3em] uppercase font-medium mb-6">
          Maître Artisan · Île-de-France · depuis 1987
        </p>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6">
          L&apos;Excellence
          <br />
          <em className="not-italic text-[#B8860B]">de la Toiture</em>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed mb-10">
          Couvreurs artisans certifiés Qualibat RGE. Ardoise, zinc, tuiles,
          isolation et zinguerie — chaque toit traité avec l&apos;exigence
          d&apos;un chef-d&apos;œuvre.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center h-13 px-8 text-base font-medium bg-[#B8860B] text-white hover:bg-[#9a700a] transition-colors"
          >
            Obtenir un devis gratuit
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center h-13 px-8 text-base font-medium border border-white/60 text-white hover:bg-white hover:text-[#2C3E50] transition-colors"
          >
            Voir nos réalisations
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "35+", label: "ans d'expertise" },
            { value: "1 200+", label: "toitures réalisées" },
            { value: "100%", label: "satisfaction garantie" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#B8860B]">
                {stat.value}
              </p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
