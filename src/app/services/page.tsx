import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Nos Services de Couverture",
  description:
    "Couverture neuve, rénovation toiture, zinguerie, isolation combles, démoussage et dépannage urgent. Artisans couvreurs certifiés Qualibat RGE en Île-de-France.",
  alternates: { canonical: "https://toitsexcellence.fr/services" },
};

const services = [
  {
    id: "couverture-neuve",
    icon: "🏠",
    label: "Couverture Neuve",
    tagline: "L'art de bâtir une toiture pour les siècles",
    description:
      "De la charpente à la pose du faîtage, nous réalisons vos toitures neuves avec les matériaux les plus nobles : ardoise naturelle d'Angers, zinc à joint debout, tuiles terre cuite grand feu ou shingle bitumé. Chaque projet est une œuvre pensée pour durer.",
    benefits: [
      "Ardoise naturelle, zinc, tuiles ou shingle au choix",
      "Garantie décennale sur toutes nos prestations",
      "Écran sous-toiture HPV haute performance",
      "Isolation thermique intégrée possible",
      "Accompagnement permis de construire",
      "Devis détaillé gratuit sous 48h",
    ],
    image:
      "/images/services/couverture-neuve.jpg",
    imageAlt: "Couverture neuve en ardoise naturelle",
    imageLeft: false,
  },
  {
    id: "renovation",
    icon: "🔧",
    label: "Rénovation Toiture",
    tagline: "Redonner une vie neuve à votre toiture",
    description:
      "Votre toiture est voilée, des ardoises manquent, ou elle accuse simplement son âge ? Notre équipe réalise tous types de rénovations : dépose et repose complète, remplacement sélectif, réfection des noues et des rives. Nous diagnostiquons d'abord la charpente pour garantir la pérennité de l'ensemble.",
    benefits: [
      "Diagnostic charpente offert avec chaque devis",
      "Remplacement sélectif ou réfection totale",
      "Respect de l'architecture d'origine",
      "Traitement préventif de la charpente",
      "Aides MaPrimeRénov' et CEE disponibles",
      "Délais tenus, chantier propre garanti",
    ],
    image:
      "/images/services/renovation-toiture.jpg",
    imageAlt: "Rénovation de toiture en tuiles",
    imageLeft: true,
  },
  {
    id: "demoussage",
    icon: "💧",
    label: "Démoussage & Nettoyage",
    tagline: "Protéger pour préserver",
    description:
      "La mousse est l'ennemie silencieuse de votre toiture : elle retient l'humidité, soulève les tuiles et accélère l'usure des matériaux. Notre traitement en trois étapes — démoussage mécanique, lavage haute pression, traitement hydrofuge — redonne à votre toiture une protection maximale.",
    benefits: [
      "Démoussage mécanique doux (sans arrachement)",
      "Lavage haute pression eau chaude",
      "Traitement hydrofuge 10 ans de protection",
      "Inspection complète lors de l'intervention",
      "Nettoyage des gouttières inclus",
      "Rapport d'état remis après travaux",
    ],
    image:
      "/images/services/demoussage.jpg",
    imageAlt: "Nettoyage et démoussage de toiture",
    imageLeft: false,
  },
  {
    id: "zinguerie",
    icon: "⚡",
    label: "Zinguerie",
    tagline: "La précision au service de l'étanchéité",
    description:
      "La zinguerie est l'art d'assurer l'étanchéité parfaite de tous les points singuliers de votre toiture : gouttières, chéneaux, faîtages, arêtiers, noues, lucarnes et souches de cheminée. Notre maître zingueur travaille le zinc naturel, le plomb et l'acier inoxydable avec une précision millimétrique.",
    benefits: [
      "Gouttières demi-rondes et carrées",
      "Chéneaux encaissés et pendants",
      "Solins, arêtes et faîtages",
      "Lucarnes et châssis de toit",
      "Zinc naturel, plomb, inox ou aluminium",
      "Traitement anticorrosion systématique",
    ],
    image:
      "/images/services/zinguerie.jpg",
    imageAlt: "Zinguerie fine — gouttières en zinc",
    imageLeft: true,
  },
  {
    id: "isolation",
    icon: "🌡️",
    label: "Isolation Combles",
    tagline: "Le confort thermique pour toute l'année",
    description:
      "30% des déperditions thermiques d'une maison passent par le toit. Notre équipe certifiée RGE réalise l'isolation de vos combles perdus par soufflage ou l'isolation des combles aménagés par rouleaux. Nous prenons en charge toutes vos démarches pour les aides financières (MaPrimeRénov', CEE, éco-PTZ).",
    benefits: [
      "Combles perdus : soufflage laine de verre ou ouate",
      "Combles aménagés : sarking ou rampants",
      "Certification RGE — aides financières garanties",
      "Résistance thermique R = 7 minimum",
      "Bilan thermique gratuit avant travaux",
      "Accompagnement MaPrimeRénov' et CEE",
    ],
    image:
      "/images/services/isolation-toiture.jpg",
    imageAlt: "Isolation de combles perdus",
    imageLeft: false,
  },
  {
    id: "depannage",
    icon: "🚨",
    label: "Dépannage Urgent",
    tagline: "À vos côtés dans l'urgence, 7j/7",
    description:
      "Fuite après la tempête, ardoises arrachées, infiltration soudaine — votre toiture n'attend pas. Notre équipe d'urgence intervient sur Paris et toute l'Île-de-France sous 24h. Bâchage provisoire immédiat, réparation définitive rapide, rapport d'expertise pour votre assurance.",
    benefits: [
      "Intervention sous 24h en Île-de-France",
      "Disponible 7 jours sur 7, jours fériés inclus",
      "Bâchage provisoire d'urgence",
      "Rapport d'expertise pour assurance",
      "Réparation définitive dans les meilleurs délais",
      "Devis transparent avant toute intervention",
    ],
    image:
      "/images/services/depannage.jpg",
    imageAlt: "Intervention d'urgence toiture",
    imageLeft: true,
  },
];

const process = [
  { step: "01", title: "Contact & Prise en charge", description: "Vous nous appelez ou remplissez le formulaire. Nous vous recontactons sous 2h en semaine." },
  { step: "02", title: "Visite & Diagnostic", description: "Un couvreur expert se déplace pour inspecter votre toiture et identifier précisément les travaux à réaliser." },
  { step: "03", title: "Devis détaillé", description: "Vous recevez un devis clair, poste par poste, sans frais cachés. Nous vous conseillons sur les matériaux adaptés." },
  { step: "04", title: "Réalisation & Livraison", description: "Nos artisans interviennent dans les délais convenus. Chantier propre, finitions soignées, réception avec vous." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-[#2C3E50] text-center">
        <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Savoir-faire
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Nos Services
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Six métiers, une même exigence d&apos;excellence artisanale.
        </p>
      </div>

      {/* Services sections */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 lg:py-28 bg-[#FAFAF5] border-b border-[#E0D9CE]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                service.imageLeft ? "" : "lg:[&>:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
                  {service.icon} {service.label}
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2C3E50] leading-tight mb-4">
                  {service.tagline}
                </h2>
                <p className="text-[#6B7A82] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#2C3E50]">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium bg-[#B8860B] text-white hover:bg-[#9a700a] transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process section */}
      <section className="py-20 lg:py-28 bg-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Notre méthode
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="border border-white/10 p-8">
                <span className="font-serif text-5xl font-bold text-[#B8860B]/30 block mb-4">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
