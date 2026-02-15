export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  projectSlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'M. & Mme Bertrand',
    role: 'Propriétaires',
    location: 'Neuilly-sur-Seine',
    rating: 5,
    text: "Nous avons fait appel à Toits d'Excellence pour la réfection complète de notre toiture en ardoise. Dès le premier contact, nous avons senti le professionnalisme et la passion du métier. Le chantier s'est déroulé dans les délais, avec un nettoyage irréprochable chaque soir. Le résultat est tout simplement magnifique.",
    projectSlug: 'ardoise-naturelle-paris-16',
  },
  {
    id: '2',
    author: 'Isabelle Marchand',
    role: 'Architecte DPLG',
    location: 'Paris 15ème',
    rating: 5,
    text: "En tant qu'architecte, j'ai des exigences élevées pour les artisans que je recommande à mes clients. Toits d'Excellence est l'une des rares entreprises que je confie systématiquement : technicité irréprochable, conseils avisés sur les matériaux, et une capacité à s'adapter aux contraintes architecturales les plus complexes.",
    projectSlug: 'toiture-zinc-versailles',
  },
  {
    id: '3',
    author: 'Famille Dumont',
    role: 'Propriétaires',
    location: 'Versailles',
    rating: 5,
    text: "Notre toiture zinc est un vrai chef-d'œuvre. On nous avait dit que le zinc à joint debout était difficile à trouver en Île-de-France avec la qualité requise. Toits d'Excellence nous a prouvé le contraire. Leur savoir-faire artisanal est rare et précieux. On ne regrette absolument pas notre choix.",
  },
  {
    id: '4',
    author: 'Jean-Pierre Rousseau',
    role: 'Propriétaire',
    location: 'Rambouillet',
    rating: 5,
    text: "Après la tempête, j'étais désespéré : des ardoises partout dans le jardin, des infiltrations dans deux pièces. Toits d'Excellence a répondu à mon appel un dimanche soir et était là le lendemain matin. Intervention rapide, efficace, et devis transparent. Une équipe en or.",
    projectSlug: 'depannage-apres-tempete-vincennes',
  },
  {
    id: '5',
    author: 'Cabinet Notarial Lefèvre & Associés',
    role: 'Syndic de copropriété',
    location: 'Paris 8ème',
    rating: 5,
    text: "Nous gérons de nombreux immeubles haussmanniens en Île-de-France et Toits d'Excellence est notre partenaire privilégié depuis 8 ans. Leur rigueur administrative (assurances, Qualibat, décennale) et la qualité constante de leurs interventions en font un prestataire de premier choix pour nos copropriétés.",
  },
];
