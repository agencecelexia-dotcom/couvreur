/**
 * sync-client.ts — Template Couvreur
 * Lit CLIENT.md et genere src/config/client.config.ts + met a jour globals.css
 * Usage: npm run sync-client
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const CLIENT_MD = path.join(ROOT, "CLIENT.md");
const CLIENT_CONFIG_TS = path.join(ROOT, "src", "config", "client.config.ts");
const GLOBALS_CSS = path.join(ROOT, "src", "app", "globals.css");

function parseClientMd(content: string): Record<string, string> {
  const config: Record<string, string> = {};
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.trim().match(/^([A-Z][A-Z0-9_]+):\s*"(.*)"$/);
    if (match) {
      config[match[1]] = match[2];
    }
  }
  return config;
}

function generateClientConfig(config: Record<string, string>): string {
  const entries = Object.entries(config)
    .map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`)
    .join("\n");

  return `// AUTO-GENERATED — NE PAS MODIFIER MANUELLEMENT
// Genere par scripts/sync-client.ts depuis CLIENT.md
// Pour modifier: editer CLIENT.md puis lancer npm run sync-client

export const clientConfig = {
${entries}
} as const;

export type ClientConfigKey = keyof typeof clientConfig;
`;
}

function updateGlobalsCss(css: string, config: Record<string, string>): string {
  let updated = css;

  if (config.COULEUR_PRIMAIRE_900) {
    updated = updated.replace(
      /--color-primary-900:\s*oklch\([^)]+\);/,
      `--color-primary-900: ${config.COULEUR_PRIMAIRE_900};`
    );
  }
  if (config.COULEUR_ACCENT_500) {
    updated = updated.replace(
      /--color-accent-500:\s*oklch\([^)]+\);/,
      `--color-accent-500: ${config.COULEUR_ACCENT_500};`
    );
  }
  if (config.COULEUR_FOND_50) {
    updated = updated.replace(
      /--color-neutral-50:\s*oklch\([^)]+\);/,
      `--color-neutral-50: ${config.COULEUR_FOND_50};`
    );
  }

  if (config.FONT_TITRES) {
    updated = updated.replace(
      /--font-heading:\s*"[^"]+",/,
      `--font-heading: "${config.FONT_TITRES}",`
    );
  }
  if (config.FONT_CORPS) {
    updated = updated.replace(
      /--font-body:\s*"[^"]+",/,
      `--font-body: "${config.FONT_CORPS}",`
    );
  }

  return updated;
}

function main() {
  console.log("sync-client — Template Couvreur\n");

  if (!fs.existsSync(CLIENT_MD)) {
    console.warn("CLIENT.md introuvable - generation config par defaut.");
    fs.writeFileSync(CLIENT_CONFIG_TS, "// Auto-generated default config (CLIENT.md not yet available)\nexport const clientConfig = {\n  NOM_ENTREPRISE: \"Mon Entreprise\",\n  NOM_DIRIGEANT: \"Nom\",\n  PRENOM_DIRIGEANT: \"Prenom\",\n  TELEPHONE: \"00 00 00 00 00\",\n  TELEPHONE_URGENCE: \"00 00 00 00 00\",\n  EMAIL: \"contact@example.com\",\n  ADRESSE: \"1 rue Exemple\",\n  VILLE: \"Paris\",\n  CODE_POSTAL: \"75001\",\n  DEPARTEMENT: \"Paris\",\n  REGION: \"Ile-de-France\",\n  HORAIRES_SEMAINE: \"8h - 18h\",\n  HORAIRES_SAMEDI: \"9h - 12h\",\n  HORAIRES_DIMANCHE: \"Ferme\",\n  HORAIRES_URGENCE: \"24h/24\",\n  ANNEES_EXPERIENCE: \"15\",\n  ZONE_INTERVENTION: \"Paris et alentours\",\n  ZONE_KM: \"30\",\n  SIRET: \"\",\n  RGE: \"\",\n  ASSURANCE_DECENNALE: \"\",\n  SLOGAN: \"Votre artisan de confiance\",\n  DESCRIPTION_ENTREPRISE: \"Entreprise specialisee dans les travaux de couverture.\",\n  DESCRIPTION_FOOTER: \"Votre specialiste en couverture.\",\n  META_TITLE: \"Couvreur - Devis Gratuit\",\n  META_DESCRIPTION: \"Entreprise de couverture. Devis gratuit.\",\n  ACCROCHE_HERO: \"Votre toiture entre de bonnes mains\",\n  COULEUR_PRIMAIRE: \"#1e3a5f\",\n  COULEUR_SECONDAIRE: \"#c8a96e\",\n  POLICE_TITRES: \"Playfair Display\",\n  POLICE_CORPS: \"Inter\",\n  SERVICE_1_TITRE: \"Couverture neuve\",\n  SERVICE_1_DESC: \"Installation complete de toiture.\",\n  SERVICE_2_TITRE: \"Renovation toiture\",\n  SERVICE_2_DESC: \"Renovation et reparation de toiture.\",\n  SERVICE_3_TITRE: \"Etancheite\",\n  SERVICE_3_DESC: \"Traitement etancheite toiture et terrasse.\",\n  SERVICE_4_TITRE: \"Isolation\",\n  SERVICE_4_DESC: \"Isolation thermique de toiture.\",\n  SERVICE_5_TITRE: \"Urgence toiture\",\n  SERVICE_5_DESC: \"Intervention urgente bache et reparation.\",\n  SERVICE_6_TITRE: \"Zinguerie\",\n  SERVICE_6_DESC: \"Travaux de zinguerie et gouttieres.\",\n  FACEBOOK_URL: \"\",\n  INSTAGRAM_URL: \"\",\n  GOOGLE_URL: \"\",\n} as const;\nexport type ClientConfig = typeof clientConfig;", "utf-8");
    console.log("client.config.ts genere avec valeurs par defaut");
    process.exit(0);
}
  const clientMdContent = fs.readFileSync(CLIENT_MD, "utf-8");
  const config = parseClientMd(clientMdContent);
  console.log(`CLIENT.md lu — ${Object.keys(config).length} variables trouvees`);

  const configDir = path.dirname(CLIENT_CONFIG_TS);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  const configContent = generateClientConfig(config);
  fs.writeFileSync(CLIENT_CONFIG_TS, configContent, "utf-8");
  console.log("src/config/client.config.ts genere");

  if (fs.existsSync(GLOBALS_CSS)) {
    const cssContent = fs.readFileSync(GLOBALS_CSS, "utf-8");
    const updatedCss = updateGlobalsCss(cssContent, config);
    if (updatedCss !== cssContent) {
      fs.writeFileSync(GLOBALS_CSS, updatedCss, "utf-8");
      console.log("src/app/globals.css mis a jour (couleurs/fonts)");
    } else {
      console.log("src/app/globals.css — aucun changement de couleur/font");
    }
  }

  console.log("\nSynchronisation terminee !");
  console.log("   Lancez npm run dev pour voir les changements\n");
  console.log("Variables synchronisees :");
  for (const [key, value] of Object.entries(config)) {
    const display = value.length > 50 ? value.slice(0, 47) + "..." : value;
    console.log(`   ${key}: "${display}"`);
  }
}

main();
