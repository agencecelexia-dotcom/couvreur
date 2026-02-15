import { Hammer, Gem, Shield, Zap } from "lucide-react";

const values = [
  {
    number: "01",
    icon: Hammer,
    title: "Artisanat Authentique",
    description:
      "Un savoir-faire transmis de maître à compagnon depuis 1987. Chaque geste est le fruit d'une maîtrise technique et d'un amour du métier rare.",
  },
  {
    number: "02",
    icon: Gem,
    title: "Matériaux d'Exception",
    description:
      "Ardoise naturelle d'Angers, zinc naturel, tuiles terre cuite grand feu. Nous sélectionnons les meilleurs matériaux pour assurer la pérennité de votre toiture.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Expertise Certifiée",
    description:
      "Qualibat RGE, garantie décennale, assurance Pro BTP. Nos certifications sont le gage de notre sérieux et de la qualité de nos interventions.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Réactivité Totale",
    description:
      "Dépannage sous 24h, devis sous 48h. Nous savons qu'une toiture endommagée ne peut pas attendre — notre équipe est mobilisée pour vous.",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F0ECE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Nos engagements
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
            Pourquoi nous choisir
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.number}
                className="group bg-[#FAFAF5] border border-[#E0D9CE] p-8 hover:border-[#B8860B] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#F0ECE4] flex items-center justify-center group-hover:bg-[#B8860B]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <span className="text-5xl font-serif font-bold text-[#E0D9CE] leading-none group-hover:text-[#B8860B]/20 transition-colors">
                    {v.number}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C3E50] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#6B7A82] leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
