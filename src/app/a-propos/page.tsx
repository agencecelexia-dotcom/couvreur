import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield, Award } from "lucide-react";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire",
  description:
    "Depuis 1987, Toits d'Excellence protège les toitures d'Île-de-France. Maîtres couvreurs certifiés Qualibat RGE, 35 ans d'expertise artisanale, 1 200 chantiers réalisés.",
  alternates: { canonical: "https://toitsexcellence.fr/a-propos" },
};

const certifications = [
  { name: "Qualibat RGE", description: "Qualification reconnue garant de l'environnement" },
  { name: "Garantie Décennale", description: "Assurance obligatoire couvrant 10 ans de travaux" },
  { name: "Pro BTP", description: "Mutuelle et prévoyance du bâtiment et travaux publics" },
  { name: "Maître Artisan", description: "Titre officiel attestant l'excellence du savoir-faire" },
];

const team = [
  {
    name: "Jean-Paul Moreau",
    role: "Fondateur & Maître Couvreur",
    bio: "35 ans de métier. Jean-Paul a fondé Toits d'Excellence après son compagnonnage et une décennie chez les meilleurs couvreurs parisiens. Sa passion pour l'ardoise naturelle est légendaire dans le métier.",
    image: "/images/projects/portrait-jean-paul.png",
  },
  {
    name: "Théo Moreau",
    role: "Chef de Chantier & Zingueur",
    bio: "Fils de Jean-Paul, formé au Compagnonnage. Théo a repris le flambeau de la zinguerie fine avec une maîtrise du zinc à joint debout reconnue par ses pairs.",
    image: "/images/projects/portrait-theo.png",
  },
  {
    name: "Karim Haddad",
    role: "Couvreur Expert & RGE",
    bio: "Spécialiste de l'isolation thermique certifié RGE. Karim gère l'intégralité des dossiers MaPrimeRénov' et CEE pour nos clients, de A à Z.",
    image: "/images/projects/portrait-karim.png",
  },
];

const timeline = [
  { year: "1987", event: "Création de l'entreprise par Jean-Paul Moreau à Ivry-sur-Seine" },
  { year: "1993", event: "Obtention de la qualification Qualibat — première certification officielle" },
  { year: "1999", event: "Extension à tout le Val-de-Marne et Paris — 3 équipes opérationnelles" },
  { year: "2006", event: "Certification RGE — spécialisation isolation thermique par l'extérieur" },
  { year: "2012", event: "500ème chantier. Théo Moreau rejoint l'entreprise après son compagnonnage" },
  { year: "2018", event: "Ouverture du secteur Yvelines et Essonne. Partenariat avec les ABF de Paris" },
  { year: "2024", event: "1 200 toitures réalisées. 35 ans d'excellence artisanale en Île-de-France" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-20 bg-[#2C3E50] overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #B8860B 0, #B8860B 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-4">
                Notre histoire
              </p>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Artisans depuis<br /> 1987
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Toits d&apos;Excellence est née de la passion d&apos;un homme pour les toits
                de Paris. Depuis 35 ans, notre famille d&apos;artisans protège et embellit
                les maisons d&apos;Île-de-France avec l&apos;exigence du compagnonnage.
              </p>
              <div className="flex flex-wrap gap-4">
                {certifications.slice(0, 2).map((c) => (
                  <div key={c.name} className="flex items-center gap-2 bg-white/10 px-4 py-2">
                    <Shield className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white text-sm font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/projects/equipe-chantier.png"
                alt="L'équipe Toits d'Excellence sur un chantier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/projects/artisan-ardoise.png"
                alt="Détail de toiture en ardoise — savoir-faire artisanal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
                Notre philosophie
              </p>
              <h2 className="font-serif text-4xl font-bold text-[#2C3E50] leading-tight mb-6">
                Le temps long de l&apos;artisanat
              </h2>
              <p className="text-[#6B7A82] leading-relaxed mb-6">
                Dans un monde qui va vite, nous choisissons la lenteur du bien fait. Chaque
                ardoise posée, chaque joint de zinc soudé, chaque faîtage scellé porte la
                signature de nos compagnons. Une toiture réalisée par Toits d&apos;Excellence
                est pensée pour traverser le siècle.
              </p>
              <p className="text-[#6B7A82] leading-relaxed mb-8">
                C&apos;est pourquoi nous refusons les compromis sur les matériaux, les délais
                irréalistes et les chantiers bâclés. Notre réputation — construite sur 35 ans
                et 1 200 chantiers — est notre bien le plus précieux.
              </p>
              <ul className="space-y-3">
                {[
                  "Matériaux sélectionnés chez les meilleurs fabricants",
                  "Artisans formés au Compagnonnage du Tour de France",
                  "Aucun sous-traitant — toujours nos propres équipes",
                  "Chantier propre et sécurisé, voisinage respecté",
                  "Bilan technique remis après chaque intervention",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#2C3E50]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F0ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Nos certifications
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#2C3E50]">
              La confiance par les preuves
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((c) => (
              <div key={c.name} className="bg-[#FAFAF5] border border-[#E0D9CE] p-6 text-center">
                <Award className="w-8 h-8 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-[#2C3E50] mb-2">{c.name}</h3>
                <p className="text-sm text-[#6B7A82] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
              L&apos;équipe
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#2C3E50]">
              Des artisans, pas des techniciens
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-square overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C3E50] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#B8860B] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-[#6B7A82] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#B8860B] text-xs tracking-[0.25em] uppercase font-medium mb-3">
              35 ans d&apos;histoire
            </p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Notre parcours
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="w-[60px] shrink-0 text-right">
                    <span className="font-serif text-sm font-bold text-[#B8860B]">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="w-2 h-2 bg-[#B8860B] absolute left-[56px] mt-1.5 hidden sm:block" />
                    <p className="text-white/80 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
