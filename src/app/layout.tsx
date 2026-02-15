import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://toitsexcellence.fr"),
  title: {
    default: "Toits d'Excellence — Couvreur Île-de-France",
    template: "%s | Toits d'Excellence",
  },
  description:
    "Maître couvreur en Île-de-France depuis 1987. Ardoise naturelle, zinc, tuiles, isolation et zinguerie. Qualibat RGE. Devis gratuit sous 48h.",
  keywords: [
    "couvreur Île-de-France",
    "couvreur Paris",
    "rénovation toiture",
    "ardoise naturelle",
    "zinguerie",
    "isolation combles",
    "Qualibat RGE",
    "toiture zinc",
  ],
  authors: [{ name: "Toits d'Excellence" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://toitsexcellence.fr",
    siteName: "Toits d'Excellence",
    title: "Toits d'Excellence — Couvreur Île-de-France depuis 1987",
    description:
      "Artisans couvreurs certifiés Qualibat RGE. Ardoise, zinc, tuiles, isolation. Devis gratuit sous 48h.",
    images: [
      {
        url: "/images/projects/og-default.png",
        width: 1200,
        height: 630,
        alt: "Toits d'Excellence — Couvreur Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toits d'Excellence — Couvreur Île-de-France",
    description: "Artisans couvreurs certifiés. Ardoise, zinc, tuiles. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
