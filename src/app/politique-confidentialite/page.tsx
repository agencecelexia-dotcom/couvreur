import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAF5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-[#2C3E50] mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Données collectées
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed mb-3">
              Lorsque vous remplissez le formulaire de contact ou de devis, nous collectons les
              informations suivantes :
            </p>
            <ul className="list-disc list-inside text-[#6B7A82] text-sm space-y-1 ml-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Type de prestation souhaitée</li>
              <li>Surface approximative (optionnel)</li>
              <li>Description de votre projet</li>
            </ul>
            <p className="text-[#6B7A82] text-sm leading-relaxed mt-3">
              Ces données sont utilisées exclusivement pour traiter votre demande de devis et vous
              recontacter dans ce cadre. Elles ne sont jamais cédées à des tiers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Vos droits (RGPD)
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul className="list-disc list-inside text-[#6B7A82] text-sm space-y-1 ml-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (&ldquo;droit à l&apos;oubli&rdquo;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="text-[#6B7A82] text-sm leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous par email à{" "}
              <a
                href="mailto:contact@toitsexcellence.fr"
                className="text-[#B8860B] underline"
              >
                contact@toitsexcellence.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Durée de conservation
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed">
              Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier
              contact, sauf obligation légale de conservation plus longue. Passé ce délai, elles
              sont supprimées de manière sécurisée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-[#2C3E50] mb-4">
              Cookies
            </h2>
            <p className="text-[#6B7A82] text-sm leading-relaxed">
              Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement
              (préférences de navigation, sécurité). Aucun cookie de tracking publicitaire ou
              analytique tiers n&apos;est déposé sans votre consentement explicite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
