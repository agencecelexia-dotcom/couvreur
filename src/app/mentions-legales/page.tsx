import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAF5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-[#2C3E50] mb-10">
          Mentions légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Éditeur du site
            </h2>
            <div className="text-[#6B7A82] space-y-2 text-sm leading-relaxed">
              <p><strong className="text-[#2C3E50]">Raison sociale :</strong> Toits d&apos;Excellence SARL</p>
              <p><strong className="text-[#2C3E50]">SIRET :</strong> 482 156 789 00024</p>
              <p><strong className="text-[#2C3E50]">Adresse :</strong> 15 Rue de la Tuile, 94200 Ivry-sur-Seine</p>
              <p><strong className="text-[#2C3E50]">Téléphone :</strong> 01 45 78 92 31</p>
              <p><strong className="text-[#2C3E50]">Email :</strong> contact@toitsexcellence.fr</p>
              <p><strong className="text-[#2C3E50]">Directeur de publication :</strong> Jean-Paul Moreau</p>
              <p><strong className="text-[#2C3E50]">Qualification Qualibat :</strong> RGE n°2345-A</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Hébergement
            </h2>
            <div className="text-[#6B7A82] text-sm leading-relaxed space-y-1">
              <p><strong className="text-[#2C3E50]">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-[#2C3E50]">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
              <p><strong className="text-[#2C3E50]">Site :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed">
              L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos,
              icônes) sont la propriété exclusive de Toits d&apos;Excellence SARL ou de leurs
              auteurs respectifs. Toute reproduction, distribution, modification, adaptation ou
              retransmission de ces éléments sans accord exprès et écrit est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Limitation de responsabilité
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed">
              Toits d&apos;Excellence s&apos;efforce d&apos;assurer l&apos;exactitude et la mise
              à jour des informations diffusées sur ce site. Toutefois, Toits d&apos;Excellence
              ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
              informations mises à disposition et décline toute responsabilité pour toute
              imprécision, inexactitude ou omission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
