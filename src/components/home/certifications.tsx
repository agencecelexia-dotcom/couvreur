import Image from "next/image";
import { Check } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Matériaux de premier choix",
    description: "Ardoise d'Angers, zinc VM Zinc, tuiles Koramic — nous ne travaillons qu'avec les meilleurs fournisseurs.",
  },
  {
    title: "Artisans formés au Compagnonnage",
    description: "Notre équipe est issue du Tour de France des Compagnons. Un savoir-faire ancestral au service de votre toiture.",
  },
  {
    title: "Aucun sous-traitant",
    description: "Toujours nos propres équipes sur vos chantiers, pour une qualité maîtrisée de A à Z.",
  },
  {
    title: "Qualibat RGE certifié",
    description: "Certification qui garantit la qualité de nos travaux et votre accès aux aides MaPrimeRénov'.",
  },
  {
    title: "Garantie décennale sur tout",
    description: "Chaque intervention est couverte 10 ans. Votre toiture est protégée, vous l'êtes aussi.",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/projects/equipe-chantier.png"
                alt="L'équipe Toits d'Excellence en action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Certification badge overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-primary-900">Certifications</p>
                <div className="flex gap-3 mt-1.5">
                  {["Qualibat RGE", "Décennale", "Maître Artisan"].map((c) => (
                    <span key={c} className="text-[10px] font-bold text-accent-500 uppercase tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Reasons */}
          <div>
            <FadeUp>
              <SectionHeading
                eyebrow="Pourquoi nous choisir"
                title="L'excellence comme seule exigence"
                subtitle="Depuis 1987, nous bâtissons notre réputation chantier après chantier, avec la rigueur du compagnonnage."
              />
            </FadeUp>

            <ul className="mt-8 space-y-5">
              {reasons.map((reason, i) => (
                <FadeUp key={reason.title} delay={i * 0.08}>
                  <li className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-accent-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900 text-sm mb-1">{reason.title}</p>
                      <p className="text-sm text-neutral-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
