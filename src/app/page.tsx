import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CertificationsSection } from "@/components/home/certifications";
import { ServicesGrid } from "@/components/home/services-grid";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Couvreur Île-de-France — Toits d'Excellence depuis 1987",
  description:
    "Maître couvreur en Île-de-France. Ardoise naturelle, zinc, tuiles, isolation et zinguerie. Qualibat RGE certifié. Devis gratuit et intervention sous 24h.",
  alternates: { canonical: "https://toitsexcellence.fr" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CertificationsSection />
      <ServicesGrid />
      <StatsSection />
      <TestimonialsCarousel />
      <CtaBand />
    </>
  );
}
