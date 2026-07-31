import iconFrontendPath from './../assets/icons/frontend.svg';
import iconBackendPath from './../assets/icons/backend.svg';
import iconMobilePath from './../assets/icons/mobile.svg';
import iconDevopsPath from './../assets/icons/devops.svg';
import iconFolderPath from './../assets/icons/folder.svg';
import iconToolsPath from './../assets/icons/tools.svg';

export const skillsData = [
  {
    icon: iconFrontendPath,
    title: 'Développement Frontend',
    description:
      'Conception et gestion d\'interfaces utilisateur web, statiques ou dynamiques.',
    points: [
      'Développement d\'applications web interactives et réactives.',
      'Intégration de maquettes responsive adaptées à tous les écrans.',
      'Création d\'expériences utilisateur (UX) fluides et intuitives.',
      'Intégration de moteurs de templates (Twig) et de frameworks JavaScript (React.js, Vue.js).',
      'Personnalisation et intégration de thèmes pour plateformes de contenu (WordPress) et e-commerce.',
      'Optimisation des performances d\'affichage et de l\'accessibilité web.',
      'Manipulation du DOM et dynamisation d\'interfaces via JavaScript et jQuery.',
      'Collaboration efficace en équipe projet et veille technologique constante.',
    ],
    tools: [
      { name: 'React.js', background: '#08DDFF', color: '#000814', value: 70 },
      {
        name: 'Javascript',
        background: '#F7E025',
        color: '#000814',
        value: 75,
      },
      { name: 'HTML', background: '#E5552D', color: '#000814', value: 100 },
      { name: 'CSS', background: '#2D54E5', color: '#ffffff', value: 95 },
      { name: 'JQuery', background: '#106DAE', color: '#ffffff', value: 65 },
      { name: 'Symfony', background: '#FFFFFF', color: '#000814', value: 40 },
      { name: 'Vue.js', background: '#08BF86', color: '#000814', value: 35 },
      { name: 'Twig', background: '#9CB132', color: '#000814', value: 40 },
      { name: 'Wordpress', background: '#383D42', color: '#ffffff', value: 15 },
    ],
  },
  {
    icon: iconBackendPath,
    title: 'Développement Backend',
    description:
      'Conception de bases de données et développement d\'architectures serveur pour applications web et mobiles.',
    points: [
      'Conception et modélisation de bases de données relationnelles (SQL, MariaDB).',
      'Développement d\'APIs REST et microservices (Laravel, Symfony, FastAPI, C#).',
      'Gestion et sécurisation des flux de données entre frontend et serveur.',
      'Mise en place de la logique métier et gestion de l\'authentification utilisateur.',
      'Optimisation des requêtes et des performances côté serveur.',
      'Intégration de composants backend dans des CMS ou plateformes e-commerce.',
      'Collaboration étroite avec les équipes frontend pour assurer une intégration fluide.',
      'Maintenance corrective et évolutive des architectures serveur.',
    ],
    tools: [
      { name: 'MariaDB', background: '#C69D71', color: '#000814', value: 35 },
      { name: 'C#', background: '#6C287E', color: '#ffffff', value: 40 },
      { name: 'FastAPI', background: '#0D9C8F', color: '#000814', value: 20 },
      { name: 'Python', background: '#39719C', color: '#ffffff', value: 25 },
      { name: 'Laravel', background: '#FF3427', color: '#000814', value: 65 },
      { name: 'Symfony', background: '#FFFFFF', color: '#000814', value: 40 },
      { name: 'PHP', background: '#7B7FB5', color: '#000814', value: 55 },
      { name: 'SQL', background: '#FFFFFF', color: '#000814', value: 80 },
    ],
  },
  {
    icon: iconMobilePath,
    title: 'Développement Mobile',
    description:
      'Conception et déploiement d\'applications multiplateformes pour iOS et Android, avec une expertise ciblée sur React Native.',
    points: [
      'Développement d\'applications mobiles cross-platform (iOS et Android) sous React Native.',
      'Configuration des environnements natifs via Android Studio et Xcode.',
      'Gestion et automatisation des processus de build pour le déploiement.',
      'Intégration d\'interfaces utilisateur réactives, fluides et adaptées aux standards mobiles.',
      'Connexion aux APIs REST backend et gestion du stockage local des données.',
      'Optimisation des performances et débogage sur émulateurs et appareils physiques.',
    ],
    tools: [
      {
        name: 'React Native',
        background: '#61DAFB',
        color: '#000814',
        value: 65,
      },
      {
        name: 'Android Studio',
        background: '#50AF55',
        color: '#000814',
        value: 65,
      },
      { name: 'Xcode', background: '#1869E1', color: '#ffffff', value: 40 },
    ],
  },
  {
    icon: iconDevopsPath,
    title: 'Pratiques DevOps',
    description:
      'Mise en œuvre de processus et d\'outils pour accélérer les cycles de développement et garantir l\'amélioration continue des applications.',
    points: [
      'Conception et gestion de pipelines d\'intégration et de déploiement continus (CI/CD) sous Azure DevOps.',
      'Conteneurisation d\'applications et gestion des environnements isolés avec Docker.',
      'Automatisation des tâches d\'administration et des processus système via des scripts Shell / Bash.',
      'Gestion de la configuration et automatisation des environnements de développement avec Vagrant.',
      'Gestion de versions et collaboration sur le code source via Git.',
      'Administration de base de systèmes Linux et maintien de la cohérence des infrastructures.',
    ],
    tools: [
      {
        name: 'Azure DevOps',
        background: '#087CD8',
        color: '#000814',
        value: 25,
      },
      { name: 'Vagrant', background: '#1982FF', color: '#000814', value: 30 },
      { name: 'Bash', background: '#31373D', color: '#ffffff', value: 45 },
      { name: 'Docker', background: '#2B99EE', color: '#000814', value: 40 },
      { name: 'Git', background: '#F05639', color: '#000814', value: 65 },
      {
        name: 'Linux Sysadmin',
        background: '#FFB508',
        color: '#000814',
        value: 20,
      },
    ],
  },
  {
    icon: iconFolderPath,
    title: 'Conception et Gestion de Projet',
    description:
      'Planification, conception et pilotage de projets logiciels, de l\'analyse des besoins jusqu\'à la mise en production et la maintenance.',
    points: [
      'Rédaction de cahiers des charges détaillés et spécification des besoins fonctionnels et techniques.',
      'Planification et suivi de projet via diagrammes de Gantt (GanttProject) et méthodes agiles (Trello).',
      'Conception d\'architectures de bases de données et modélisation conceptuelle (Looping, DrawSQL).',
      'Prototypage rapide, création de maquettes et wireframes UI/UX (Figma, Excalidraw).',
      'Élaboration de charte graphique et gestion des palettes de couleurs (Coolors).',
      'Organisation d\'idées et cartographie mentale des processus (Framindmap).',
      'Définition des exigences de sécurité et mise en place d\'un plan de développement sécurisé.',
      'Réalisation de présentations d\'impact et gestion documentaire (Prezi, Microsoft 365).',
    ],
    tools: [
      { name: 'Coolors', background: '#17AFF3', color: '#000814', value: 85 },
      { name: 'DrawSQL', background: '#2A2A2A', color: '#ffffff', value: 65 },
      {
        name: 'Excalidraw',
        background: '#6965DB',
        color: '#ffffff',
        value: 60,
      },
      { name: 'Figma', background: '#F25425', color: '#000814', value: 65 },
      {
        name: 'Framindmap',
        background: '#725794',
        color: '#ffffff',
        value: 55,
      },
      {
        name: 'GanttProject',
        background: '#FFCA28',
        color: '#000814',
        value: 45,
      },
      { name: 'Looping', background: '#0000FF', color: '#ffffff', value: 40 },
      {
        name: 'Microsoft 365',
        background: '#497AD2',
        color: '#000814',
        value: 55,
      },
      { name: 'Prezi', background: '#3D52DA', color: '#ffffff', value: 65 },
      { name: 'Trello', background: '#1771EB', color: '#000814', value: 60 },
    ],
  },
  {
    icon: iconToolsPath,
    title: 'Environnement et Outils de Travail',
    description:
      'Ensemble des outils, IDE et environnements d\'exécution optimisant la productivité et la collaboration à chaque étape du développement.',
    points: [
      'Test, débogage et validation d\'APIs et de services web via Postman.',
      'Gestion et administration de bases de données relationnelles (phpMyAdmin, MySQL Workbench).',
      'Intégration de services Cloud et backend-as-a-service (Firebase) pour applications web et mobiles.',
      'Mise en place du marquage d\'événements et analyse d\'audience web (Google Tag Manager, Google Analytics).',
      'Configuration et exploitation d\'environnements de développement locaux et IDEs (Visual Studio Code, Visual Studio, Laragon, Notepad++).',
      'Administration d\'environnements multiplateformes (Windows, Linux, macOS) et transferts sécurisés (FileZilla).',
    ],
    tools: [
      {
        name: 'Google Tag Manager',
        background: '#4285F4',
        color: '#000814',
        value: 60,
      },
      {
        name: 'Google Analytics',
        background: '#F9AB00',
        color: '#000814',
        value: 50,
      },
      { name: 'Firebase', background: '#FFCC2E', color: '#000814', value: 30 },
      { name: 'Postman', background: '#FF6C37', color: '#000814', value: 65 },
      {
        name: 'phpMyAdmin',
        background: '#FF9B08',
        color: '#000814',
        value: 50,
      },
      {
        name: 'MySQL Workbench',
        background: '#00758F',
        color: '#ffffff',
        value: 60,
      },
      { name: 'FileZilla', background: '#B80101', color: '#ffffff', value: 65 },
      { name: 'Laragon', background: '#39AFFF', color: '#000814', value: 80 },
      { name: 'Linux', background: '#FFB508', color: '#000814', value: 50 },
      { name: 'macOS', background: '#444445', color: '#ffffff', value: 60 },
      { name: 'Notepad++', background: '#A9F37E', color: '#000814', value: 50 },
      {
        name: 'Visual Studio Code',
        background: '#38A7F2',
        color: '#000814',
        value: 80,
      },
      {
        name: 'Visual Studio',
        background: '#CB96F8',
        color: '#000814',
        value: 50,
      },
      { name: 'Windows', background: '#087DD7', color: '#000814', value: 90 },
    ],
  }
];
