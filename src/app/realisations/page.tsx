import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/realisations/ProjectsGrid";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description:
    "Découvrez nos réalisations en couverture, zinguerie, rénovation toiture et isolation en Île-de-France. Ardoise naturelle, zinc, tuiles. Photos de chantiers réels.",
  alternates: { canonical: "https://toitsexcellence.fr/realisations" },
  openGraph: {
    title: "Réalisations — Toits d'Excellence",
    description: "Portfolio de nos chantiers couverture en Île-de-France.",
    images: [
      "/images/projects/og-default.png",
    ],
  },
};

export default function RealisationsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-[#2C3E50] text-center">
        <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Nos Réalisations
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Chaque toiture est une signature. Découvrez quelques-uns de nos chantiers récents.
        </p>
      </div>

      {/* Grid section */}
      <section className="py-16 lg:py-24 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
