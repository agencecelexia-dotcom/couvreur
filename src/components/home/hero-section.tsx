"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SplitText } from "@/components/animations/SplitText";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-toiture.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-accent-400 text-xs tracking-[0.35em] uppercase font-medium mb-6"
        >
          Maître Artisan · Île-de-France · depuis 1987
        </motion.p>

        {/* H1 avec SplitText */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6">
          <SplitText delay={0.15}>{"L'Excellence"}</SplitText>
          <br />
          <span className="text-accent-400">
            <SplitText delay={0.4}>{"de la Toiture"}</SplitText>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 leading-relaxed mb-10"
        >
          Couvreurs artisans certifiés Qualibat RGE. Ardoise, zinc, tuiles,
          isolation et zinguerie — chaque toit traité avec l&apos;exigence
          d&apos;un chef-d&apos;œuvre.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center h-12 px-8 text-sm font-medium bg-accent-500 text-white hover:bg-accent-600 transition-colors"
          >
            Obtenir un devis gratuit
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center h-12 px-8 text-sm font-medium border border-white/60 text-white hover:bg-white hover:text-primary-900 transition-colors"
          >
            Voir nos réalisations
          </Link>
        </motion.div>

        {/* Stats inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-14"
        >
          {[
            { value: "35+", label: "ans d'expertise" },
            { value: "1 200+", label: "toitures réalisées" },
            { value: "100%", label: "satisfaction garantie" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-accent-400">
                {stat.value}
              </p>
              <p className="text-xs text-white/55 mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
