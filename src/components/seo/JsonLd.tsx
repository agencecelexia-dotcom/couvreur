export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        "@id": "https://toitsexcellence.fr/#business",
        name: "Toits d'Excellence",
        description:
          "Maître couvreur en Île-de-France. Spécialiste ardoise, zinc, tuiles, isolation et zinguerie depuis 1987.",
        url: "https://toitsexcellence.fr",
        telephone: "+33145789231",
        email: "contact@toitsexcellence.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "15 Rue de la Tuile",
          addressLocality: "Ivry-sur-Seine",
          postalCode: "94200",
          addressRegion: "Île-de-France",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.8146,
          longitude: 2.3838,
        },
        areaServed: [
          "Paris",
          "Hauts-de-Seine",
          "Val-de-Marne",
          "Seine-Saint-Denis",
          "Yvelines",
          "Essonne",
          "Val-d'Oise",
          "Seine-et-Marne",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "12:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de couverture",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Couverture neuve" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation toiture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Démoussage et nettoyage" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zinguerie" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Isolation combles" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage urgent" } },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "52",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          "https://www.qualibat.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://toitsexcellence.fr/#website",
        url: "https://toitsexcellence.fr",
        name: "Toits d'Excellence — Couvreur Île-de-France",
        description: "Maître couvreur en Île-de-France. Ardoise, zinc, tuiles, isolation, zinguerie.",
        publisher: { "@id": "https://toitsexcellence.fr/#business" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
