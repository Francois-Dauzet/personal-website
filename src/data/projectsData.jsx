import imageEspaceVeloDromeMobilePath from './../assets/images/projects/espace_velo_drome_mobile.jpg';
import iconEspaceVeloDromePath from './../assets/images/projects/espace_velo_drome_icon.png';
import imageEspaceVeloDromeDesktopPath from './../assets/images/projects/espace_velo_drome_desktop.jpg';
import imageToolboxMobilePath from './../assets/images/projects/toolbox_mobile.jpg';
import iconToolboxPath from './../assets/images/projects/toolbox_icon.svg';
import imageToolboxDesktopPath from './../assets/images/projects/toolbox_desktop.jpg';
import imagePersonalWebsiteMobilePath from './../assets/images/projects/personal_website_mobile.jpg';
import iconPersonalWebsitePath from './../assets/images/projects/personal_website_icon.svg';
import imagePersonalWebsiteDesktopPath from './../assets/images/projects/personal_website_desktop.jpg';
import imageStudyProjectsMobilePath from './../assets/images/projects/study_projects_mobile.jpg';
import iconStudyProjectsPath from './../assets/images/projects/study_projects_icon.svg';
import imageStudyProjectsDesktopPath from './../assets/images/projects/study_projects_desktop.jpg';
import imageAlgoRunnerMobilePath from './../assets/images/projects/algorunner_mobile.png';
import iconAlgoRunnerPath from './../assets/images/projects/algorunner_icon.svg';
import imageAlgoRunnerDesktopPath from './../assets/images/projects/algorunner_desktop.png';

export const projectsData = [
  {
    date: '05/06/2026',
    technologies: [
      { name: 'React.js', background: '#08DDFF', color: '#000814' },
      { name: 'Laravel', background: '#FF3427', color: '#000814' },
    ],
    icon: iconAlgoRunnerPath,
    title: 'AlgoRunner',
    subtitle: 'Application Web Progressive (PWA) Fitness Tout-en-Un',
    description: [
      'Conçue à la suite d\'une blessure au ski, cette application permet de renseigner des contre-indications médicales afin d\'exclure automatiquement les exercices à risque.',
      'Prise en compte de pathologies spécifiques permettant de générer des séances d\'entraînement entièrement adaptées.',
      'Centralisation de l\'ensemble des besoins fitness au sein d\'une application unique, offrant une alternative complète aux services payants de gainage, musculation ou yoga.',
      'Intégration d\'un suivi nutritionnel complet, d\'un registre d\'activités cardio et d\'un suivi des mensurations pour analyser l\'évolution des performances dans le temps.',
      'Interface développée sous forme de PWA moderne avec React, Vite et React Router, exploitant Recharts pour la visualisation dynamique des statistiques.',
    ],
    Challenges: [
      'Gestion et structuration d\'un volume massif de données (exercices, équipements) afin d\'assurer des séances équilibrées et adaptées à chaque niveau.',
      'Investissement important sur l\'ensemble du cycle de vie : conception, développement, tests, optimisations, CI/CD et mise en production.',
      'Intégration d\'outils analytiques et monétisation (Google Analytics GA4, Tag Manager, AdSense) dans le respect strict des normes de confidentialité (Funding Choices).',
      'Conception d\'une solution tout-en-un sur mesure, répondant précisément à des exigences fonctionnelles et techniques élevées.',
    ],
    links: {
      site: 'https://algorunner.fr/',
    },
    images: {
      mobile: imageAlgoRunnerMobilePath,
      desktop: imageAlgoRunnerDesktopPath,
    },
  },
  {
    date: '19/10/2025',
    technologies: [
      { name: 'React.js', background: '#08DDFF', color: '#000814' },
      { name: 'TypeScript', background: '#3178C6', color: '#000814' },
      { name: 'Laravel', background: '#FF3427', color: '#000814' },
    ],
    icon: iconEspaceVeloDromePath,
    title: 'Espace Vélo Drôme',
    subtitle: 'Site web & système de gestion pour magasin de cycles',
    description: [
      'Développement d\'un site web complet et d\'un système d\'administration pour un magasin de cycles local, visant à renforcer sa visibilité et simplifier la présentation de ses services (réparation, vente et location).',
      'Présentation de l\'ensemble des prestations : forfaits de réparation, atelier mobile et boutique en ligne pour vélos neufs et d\'occasion.',
      'Intégration d\'une section dédiée à la gestion détaillée des locations ainsi qu\'un espace e-commerce complet pour la vente de vélos.',
      'Architecture s\'appuyant sur un backend Laravel pour la persistence des données, la logique tarifaire et la gestion des réservations, couplé à une interface d\'administration en TypeScript pour le pilotage des stocks et des demandes.',
    ],
    Challenges: [
      'Mise en place d\'un système complexe de gestion de location : prise en compte de la disponibilité selon la taille, le genre et les accessoires optionnels par vélo.',
      'Calcul dynamique des frais de livraison et d\'enlèvement, couplé à un système de contact (email/téléphone) pour valider les réservations.',
      'Développement d\'une interface d\'administration sur mesure en TypeScript offrant un contrôle total sur les demandes de location, le stock d\'occasion/neuf et le contenu du site.',
      'Conception d\'un système robuste et piloté par base de données pour assurer au gestionnaire un outil de contrôle global et efficace sur l\'ensemble des activités.',
    ],
    links: {
      site: 'https://espacevelodrome.fr/',
    },
    images: {
      mobile: imageEspaceVeloDromeMobilePath,
      desktop: imageEspaceVeloDromeDesktopPath,
    },
  },
  {
    date: '06/07/2025',
    technologies: [
      { name: 'HTML5', background: '#E5552D', color: '#000814' },
      { name: 'Javascript', background: '#F7E025', color: '#000814' },
      { name: 'Tailwind CSS', background: '#07B6D4', color: '#000814' },
    ],
    icon: iconToolboxPath,
    title: 'Toolbox',
    subtitle: 'Collection d\'utilitaires du quotidien',
    description: [
      'Développement d\'une application centralisant divers outils numériques du quotidien, utiles aussi bien pour un usage personnel que professionnel.',
      'Plateforme regroupant une grande variété de modules : compteurs de jeu (Yams, scores divers), assistants d\'entraînement (Timer HIIT) ou encore défis interactifs.',
      'Conception axée sur la simplicité et l\'efficacité avec une architecture en HTML5, JavaScript Vanilla pour la logique et Tailwind CSS pour une interface moderne et réactive.',
      'Organisation de chaque outil sur une page dédiée avec un système de recherche et de tri pour une navigation fluide.',
    ],
    Challenges: [
      'Conception d\'une interface utilisateur ergonomique, esthétique et entièrement responsive sur des projets développés sans framework JS lourd.',
      'Mise en place d\'une architecture modulaire et propre pour faciliter la scalabilité et l\'ajout rapide de nouvelles fonctionnalités sans alourdir l\'application.',
      'Optimisation des temps de chargement et de la vitesse d\'exécution pour garantir une consultation instantanée sur n\'importe quel appareil.',
    ],
    links: {
      site: 'https://toolbox.francois-d.com/',
      git: 'https://github.com/Francois-Dauzet/Toolbox',
    },
    images: {
      mobile: imageToolboxMobilePath,
      desktop: imageToolboxDesktopPath,
    },
  },
  {
    date: '18/04/2024',
    technologies: [
      { name: 'React.js', background: '#08DDFF', color: '#000814' },
      { name: 'SCSS', background: '#CF649A', color: '#000814' },
    ],
    icon: iconPersonalWebsitePath,
    title: 'Personal Website',
    subtitle: 'Portfolio interactif & vitrine professionnelle',
    description: [
      'Conception d\'un site web personnel conçu comme une vitrine détaillée des compétences, du parcours professionnel et des formations suivies.',
      'Présentation structurée des différentes expériences, mettant en avant les accomplissements majeurs et l\'expertise technique acquise.',
      'Mise en valeur des projets réalisés pour offrir un aperçu concret des réalisations et de la démarche méthodologique.',
      'Plateforme pensée comme un miroir du développement professionnel et du niveau d\'exigence apporté à chaque projet.',
    ],
    Challenges: [
      'Développement intégral du site en React à partir de zéro, sans recours à des bibliothèques d\'interface (UI libraries).',
      'Intégration sur mesure de chaque composant, style et animation pour garantir un rendu fluide, léger et entièrement personnalisé.',
      'Optimisation poussée pour les moteurs de recherche (SEO) : élaboration des méta-données, génération des favicons adaptés et gestion de la compatibilité multi-supports.',
      'Conception respectant les standards de qualité web (performance, accessibilité, SEO) identiques à ceux appliqués sur des projets clients.',
    ],
    links: {
      site: 'https://francois-d.com/',
      git: 'https://github.com/Francois-Dauzet/personnal-website',
    },
    images: {
      mobile: imagePersonalWebsiteMobilePath,
      desktop: imagePersonalWebsiteDesktopPath,
    },
  },
  {
    date: '14/04/2024',
    technologies: [
      { name: 'Javascript', background: '#F7E025', color: '#000814' },
      { name: 'HTML', background: '#E5552D', color: '#000814' },
      { name: 'CSS', background: '#2D54E5', color: '#ffffff' },
    ],
    icon: iconStudyProjectsPath,
    title: 'Study Projects',
    subtitle: 'Recueil de projets réalisés durant le parcours de formation',
    description: [
      'Présentation d\'une sélection de projets clés marquant les différentes étapes du parcours d\'apprentissage et de montée en compétences.',
      'Aperçu global d\'initiatives variées illustrant la progression technique et l\'assimilation des concepts fondamentaux du développement.',
      'Mise en valeur de l\'évolution de l\'expertise au travers d\'exercices pratiques, de l\'intégration de nouvelles technologies et de l\'adoption de méthodologies adaptées.',
    ],
    Challenges: [
      'Gestion du processus d\'apprentissage itératif à chaque basculement d\'un projet ou d\'une stack à un autre.',
      'Assimilation rapide de concepts inédits, d\'outils et de langages inconnus pour mener chaque réalisation à son terme.',
      'Capacité d\'adaptation continue face aux contraintes techniques rencontrées, transformant chaque défi en opportunité de montée en compétences.',
    ],
    links: {
      site: 'https://study-projects.francois-d.com/index.html',
      git: 'https://github.com/Francois-Dauzet/study-projects',
    },
    images: {
      mobile: imageStudyProjectsMobilePath,
      desktop: imageStudyProjectsDesktopPath,
    },
  },
];
