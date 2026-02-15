export type ProjectCategory =
  | 'couverture-neuve'
  | 'renovation'
  | 'zinguerie'
  | 'isolation'
  | 'depannage'
  | 'demoussage';

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'couverture-neuve': 'Couverture Neuve',
  renovation: 'Rénovation',
  zinguerie: 'Zinguerie',
  isolation: 'Isolation',
  depannage: 'Dépannage',
  demoussage: 'Démoussage',
};

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  duration: string;
  surface: string;
  material: string;
  description: string;
  challenges?: string;
  images: string[];
  featured?: boolean;
  clientTestimonial?: {
    author: string;
    text: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ardoise-naturelle-paris-16',
    title: "Toiture ardoise naturelle — Hôtel particulier Paris 16ème",
    category: 'couverture-neuve',
    location: 'Paris 16ème',
    year: 2024,
    duration: '4 semaines',
    surface: '320 m²',
    material: "Ardoise naturelle d'Angers",
    description:
      "Réfection intégrale de la toiture d'un hôtel particulier du début du XXe siècle. Le défi : respecter l'architecture haussmannienne classée tout en intégrant une isolation thermique performante. Nous avons posé 2 800 ardoises naturelles d'Angers, triées à la main pour garantir une homogénéité parfaite de teinte et d'épaisseur. La zinguerie des chéneaux et des lucarnes a été réalisée en plomb naturel, conformément aux prescriptions des Monuments Historiques.",
    challenges:
      "Travail en site occupé, contraintes ABF (Architecte des Bâtiments de France), accès limité par échafaudage sur voie publique nécessitant des autorisations préfectorales.",
    images: [
      '/images/projects/ardoise-paris-1.png',
      '/images/projects/ardoise-paris-2.png',
      '/images/projects/ardoise-paris-3.png',
    ],
    featured: true,
    clientTestimonial: {
      author: 'M. & Mme de Villeneuve, propriétaires',
      text: "Toits d'Excellence a su comprendre les exigences de notre demeure classée. Le résultat est à la hauteur de nos espérances : une toiture magnifique, fidèle à l'esprit architectural de la maison, réalisée avec un soin exceptionnel.",
    },
  },
  {
    id: '2',
    slug: 'toiture-zinc-versailles',
    title: "Couverture zinc à joint debout — Villa contemporaine Versailles",
    category: 'zinguerie',
    location: 'Versailles (78)',
    year: 2024,
    duration: '3 semaines',
    surface: '210 m²',
    material: 'Zinc naturel à joint debout VM Zinc',
    description:
      "Pose d'une toiture zinc à joint debout sur une villa contemporaine à ossature bois. Ce projet a mobilisé toute notre expertise en zinguerie fine : découpe et pliage millimétrique des bandes de zinc, solins d'étanchéité autour des velux, reprise des gouttières en zinc carré. La finition naturelle non traitée du zinc permettra au matériau de développer sa patine grise caractéristique au fil des années.",
    challenges:
      "Géométrie complexe de la toiture (4 pans + 2 décrochements), pose en hiver nécessitant des précautions thermiques pour le zinc.",
    images: [
      '/images/projects/zinc-versailles-1.png',
      '/images/projects/zinc-versailles-2.png',
      '/images/projects/zinc-versailles-3.png',
    ],
    featured: true,
    clientTestimonial: {
      author: 'Isabelle Marchand, architecte DPLG',
      text: "J'ai confié ce chantier exigeant à Toits d'Excellence après avoir vu leur travail sur un autre projet. Leur maîtrise du zinc à joint debout est remarquable. Je les recommande à tous mes clients sans hésitation.",
    },
  },
  {
    id: '3',
    slug: 'renovation-tuiles-rambouillet',
    title: "Rénovation toiture tuiles mécaniques — Maison de maître Rambouillet",
    category: 'renovation',
    location: 'Rambouillet (78)',
    year: 2023,
    duration: '2 semaines',
    surface: '180 m²',
    material: 'Tuiles mécaniques terre cuite Koramic',
    description:
      "Rénovation complète d'une toiture en tuiles mécaniques sur une maison de maître du XIXe siècle. Nous avons remplacé l'intégralité de la couverture vieillissante : dépose des anciennes tuiles, traitement de la charpente, pose d'un écran sous-toiture haute performance, puis repose de tuiles mécaniques terre cuite Koramic en remplacement identique. Les gouttières demi-rondes en zinc ont également été refaites.",
    challenges:
      "Conservation et restauration des 8 lucarnes d'origine, accord de la DRAC pour le choix du matériau de remplacement.",
    images: [
      '/images/projects/tuiles-rambouillet-1.png',
      '/images/projects/tuiles-rambouillet-2.png',
      '/images/projects/tuiles-rambouillet-3.png',
    ],
    featured: true,
    clientTestimonial: {
      author: 'Famille Rousseau, propriétaires depuis 3 générations',
      text: "Notre maison de famille méritait le meilleur. L'équipe de Toits d'Excellence a traité notre bien avec un respect et un professionnalisme exemplaires. La toiture est superbe et les délais ont été parfaitement respectés.",
    },
  },
  {
    id: '4',
    slug: 'isolation-combles-boulogne',
    title: "Isolation combles perdus — Appartement Boulogne-Billancourt",
    category: 'isolation',
    location: 'Boulogne-Billancourt (92)',
    year: 2023,
    duration: '2 jours',
    surface: '95 m²',
    material: 'Soufflage laine de verre ISOVER',
    description:
      "Isolation thermique par soufflage de combles perdus dans un immeuble des années 60. Travaux éligibles aux aides MaPrimeRénov' et CEE, que nous avons intégralement pris en charge dans les démarches administratives. L'épaisseur de 35 cm de laine de verre soufflée permet d'atteindre la résistance thermique R = 7 m².K/W exigée par la réglementation.",
    images: [
      '/images/projects/isolation-combles-1.png',
      '/images/projects/isolation-combles-2.png',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'zinguerie-immeuble-haussmannien-paris-9',
    title: "Rénovation zinguerie — Immeuble haussmannien Paris 9ème",
    category: 'zinguerie',
    location: 'Paris 9ème',
    year: 2023,
    duration: '3 semaines',
    surface: '45 ml de gouttières',
    material: 'Zinc à joint debout + chéneaux zinc carré',
    description:
      "Remplacement complet de la zinguerie d'un immeuble haussmannien de 6 étages : chéneaux encaissés, tuyaux de descente, gouttières pendantes et solins de souche. Travaux réalisés en site occupé, avec organisation rigoureuse de l'accès aux appartements pour les interventions sur les descentes intérieures.",
    images: [
      '/images/projects/zinguerie-immeuble-1.png',
      '/images/projects/zinguerie-immeuble-2.png',
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'depannage-apres-tempete-vincennes',
    title: "Dépannage urgence après tempête — Vincennes",
    category: 'depannage',
    location: 'Vincennes (94)',
    year: 2024,
    duration: '1 jour',
    surface: '40 m²',
    material: 'Ardoise + zinc (réparations)',
    description:
      "Intervention d'urgence le lendemain de la tempête Ciaran : remplacement de 180 ardoises arrachées, rescellement de 3 souches de cheminée, pose d'un bâchage provisoire sur la zone la plus endommagée en attente de livraison des matériaux. Rapport d'expertise remis au propriétaire pour sa déclaration de sinistre auprès de l'assurance.",
    images: [
      '/images/projects/depannage-urgence-1.png',
      '/images/projects/depannage-urgence-2.png',
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
