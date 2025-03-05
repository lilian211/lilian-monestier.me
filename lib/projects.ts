export const projects = [
  {
    id: 1,
    slug: "portfolio-nextjs",
    title: "Portfolio Next.js",
    description: "Portfolio personnel développé avec Next.js, TailwindCSS et Framer Motion. Un site web moderne et responsive mettant en valeur mes compétences et projets.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    demoUrl: "",
    githubUrl: "https://github.com/lilian211/lilian-monestier.me",
    featured: true,
    objectives: [
      "Créer une vitrine professionnelle moderne et interactive",
      "Démontrer mes compétences en développement front-end",
      "Offrir une expérience utilisateur fluide et agréable",
      "Optimiser les performances et le référencement"
    ],
    challenges: [
      "Mise en place d'animations fluides et performantes",
      "Optimisation du chargement des images et des ressources",
      "Création d'un design responsive adapté à tous les écrans",
      "Intégration de l'API Spotify pour afficher la musique en cours"
    ],
    features: [
      "Design moderne avec thème sombre",
      "Animations fluides avec Framer Motion",
      "Intégration des repositories GitHub",
      "Formulaire de contact fonctionnel",
      "Affichage en temps réel de Spotify"
    ],
    implementation: `Le portfolio a été développé avec Next.js 13 en utilisant l'App Router pour une navigation optimale. Le style est géré avec TailwindCSS pour une maintenance facile et une cohérence visuelle. Les animations sont réalisées avec Framer Motion pour une expérience utilisateur fluide et moderne. L'intégration avec l'API GitHub permet d'afficher automatiquement mes derniers projets, tandis que l'API Spotify ajoute une touche personnelle en montrant ma musique en cours d'écoute.`
  },

  {
    id: 2,
    slug: "refonte-flopedt",
    title: "Refonte du site vitrine flop!Edt",
    description: "Projet de refonte complète du site vitrine flopedt.org pour la future version V1 de Flop!Edt. Au programme : nouvelle interface web (Vue.js), nouveau design, nouveau nom, nouveau logo et de nombreuses fonctionnalités, tout en intégrant le contenu existant et la documentation.",
    image: "/projects/flop.png",
    technologies: ["VitePress", "JavaScript", "TypeScript", "HTML", "CSS", "Vue.js", "Strapi"],
    demoUrl: "",
    githubUrl: "https://github.com/IUT-Blagnac/sae-5-a-01-2024-2025-refontedeflopjaune",
    featured: true,
    objectives: [
      "Inclure le contenu existant de flopedt.org (page principale, FAQ, témoignages, utilisateurs)",
      "Unifier et intégrer la documentation (wiki) via VitePress",
      "Respecter la nouvelle charte graphique (nom, logo, design)",
      "Se connecter à l'API du backend existant (Strapi)"
    ],
    challenges: [
      "Migration de la documentation séparée en une doc unique sous VitePress",
      "Maintien de la cohérence visuelle avec la nouvelle interface Vue.js",
      "Connexion au backend existant pour gérer utilisateurs et FAQ",
      "Respect des contraintes de SEO et d’accessibilité"
    ],
    features: [
      "Nouvelle interface web moderne conforme à la charte graphique",
      "Documentation intégrée (VitePress) pour l’installation et l’utilisation",
      "Possibilité de se connecter pour gérer son emploi du temps via l’API",
      "Refonte complète de la FAQ et des témoignages"
    ],
    implementation: `Le projet exploite VitePress pour générer un site statique regroupant la documentation et les informations principales sur flop!Edt. Les composants et la charte graphique sont alignés avec la nouvelle interface Vue.js, tandis que Strapi reste le backend principal pour la gestion des données (utilisateurs, FAQ, témoignages). Cette refonte vise à proposer une expérience moderne et cohérente, aussi bien pour les utilisateurs que pour les équipes en charge du développement.`
  }

]