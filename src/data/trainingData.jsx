/* *********************
 * Trainings
 ********************* */
import imageCarrosseriePath from './../assets/images/trainings/carrosserie.png';
import imageApicultureGroupPath from './../assets/images/trainings/apiculture_group.png';
import imageFormationsPath from './../assets/images/trainings/formations.png';
import imageSimplonPath from './../assets/images/trainings/simplon.png';
import imageEcoleNumeriqueArdechoisePath from './../assets/images/trainings/ecole_numerique_ardechoise.png';
import imageDatascientestPath from './../assets/images/trainings/datascientest.png';
import imageSoftwareEngineerPath from './../assets/images/trainings/software_engineer.png';

/* *********************
 * Certificates
 ********************* */
// Software Engineer
import imageDatascientestHtmlPath from './../assets/images/certificates/datascientest_html.jpg';
import imageDatascientestCssPath from './../assets/images/certificates/datascientest_css.jpg';
import imageDatascientestJavascriptPath from './../assets/images/certificates/datascientest_javascript.jpg';
import imageDatascientestReactPath from './../assets/images/certificates/datascientest_react.jpg';
import imageDatascientestReactIntermediairePath from './../assets/images/certificates/datascientest_react_intermediaire.jpg';
import imageDatascientestTailwindCssPath from './../assets/images/certificates/datascientest_tailwind_css.jpg';

// DevOps System Administrator
import imageDatascientestIngenieurDevopsPath from './../assets/images/certificates/datascientest_ingenieur_devops.png';
import imageDatascientestAcculturationDataPath from './../assets/images/certificates/datascientest_acculturation_data.jpg';
import imageDatascientestLinuxAdministrationPath from './../assets/images/certificates/datascientest_linux_administration.jpg';
import imageDatascientestNosqlDatabasesMongodbPath from './../assets/images/certificates/datascientest_nosql_databases_mongodb.jpg';
import imageDatascientestPythonForDevopsPath from './../assets/images/certificates/datascientest_python_for_devops.jpg';
import imageDatascientestSqlForDataSciencePath from './../assets/images/certificates/datascientest_sql_for_data_science.jpg';
import imageDatascientestDatadogPath from './../assets/images/certificates/datascientest_datadog.jpg';
import imageDatascientestDockerPath from './../assets/images/certificates/datascientest_docker.jpg';
import imageDatascientestGitLabPath from './../assets/images/certificates/datascientest_gitlab.jpg';
import imageDatascientestJenkinsPath from './../assets/images/certificates/datascientest_jenkins.jpg';
import imageDatascientestKubernetesForDevopsPath from './../assets/images/certificates/datascientest_kubernetes_for_devops.jpg';
import imageDatascientestTerraformPath from './../assets/images/certificates/datascientest_terraform.jpg';

// Application Designer and Developer
import imageEcoleNumeriqueArdechoiseApplicationDesignerAndDeveloperPath from './../assets/images/certificates/ecole_numerique_ardechoise_application_designer_and_developer.jpg';

// Web and Mobile Developer
import imageSimplonWebAndMobileDeveloperPath from './../assets/images/certificates/simplon_web_and_mobile_developer.jpg';

// HTML, CSS, JS, and SQL Trainings
import imageMimoSqlPath from './../assets/images/certificates/mimo_sql.jpg';
import imageSololearnCssPath from './../assets/images/certificates/sololearn_css.jpg';
import imageSololearnHtmlPath from './../assets/images/certificates/sololearn_html.jpg';
import imageSololearnResponsiveWebDesignPath from './../assets/images/certificates/sololearn_responsive_web_design.jpg';

// BPREA Beekeeping
import imageCfppaBpreaBeekeepingPath from './../assets/images/certificates/cfppa_bprea_beekeeping.jpg';

export const trainingData = [
  {
    date: '2025 - 2026',
    certification: 'RNCP. 7',
    title: 'Software Engineer',
    subtitle: 'DataScientest & Panthéon Sorbonne',
    description:
      'Formation axée sur la maîtrise avancée de l\'ingénierie logicielle et des pratiques DevOps. Conception, gestion et automatisation d\'infrastructures complexes via des pipelines CI/CD. Mise en œuvre des meilleures pratiques pour rapprocher développement et opérations, garantissant la haute disponibilité, la fiabilité et la sécurité des systèmes.',
    imagePath: imageSoftwareEngineerPath,
    certificates: [
      imageDatascientestHtmlPath,
      imageDatascientestCssPath,
      imageDatascientestJavascriptPath,
      imageDatascientestReactPath,
      imageDatascientestReactIntermediairePath,
      imageDatascientestTailwindCssPath,
    ],
  },
  {
    date: '2024 - 2025',
    certification: 'RNCP. 6',
    title: 'Administrateur Système DevOps',
    subtitle: 'DataScientest & Panthéon Sorbonne',
    description:
      'Acquisition d\'une expertise approfondie en administration système et optimisation d\'infrastructures. Mise en œuvre des pratiques et outils DevOps pour l\'automatisation des déploiements, le renforcement de la synergie Dev/Ops et la garantie de la disponibilité, de la fiabilité et de la sécurité des systèmes.',
    imagePath: imageDatascientestPath,
    certificates: [
      imageDatascientestIngenieurDevopsPath,
      imageDatascientestNosqlDatabasesMongodbPath,
      imageDatascientestSqlForDataSciencePath,
      imageDatascientestLinuxAdministrationPath,
      imageDatascientestAcculturationDataPath,
      imageDatascientestPythonForDevopsPath,
      imageDatascientestDatadogPath,
      imageDatascientestDockerPath,
      imageDatascientestGitLabPath,
      imageDatascientestJenkinsPath,
      imageDatascientestKubernetesForDevopsPath,
      imageDatascientestTerraformPath,
    ],
  },
  {
    date: '2022 - 2023',
    certification: 'RNCP. 6',
    title: 'Concepteur Développeur d\'Applications',
    subtitle: 'École Numérique Ardéchoise',
    description:
      'Conception et développement d\'applications logicielles sur l\'ensemble du cycle de vie. Analyse des besoins utilisateurs, élaboration d\'architectures applicatives et pilotage de projets selon les bonnes pratiques de développement.',
    imagePath: imageEcoleNumeriqueArdechoisePath,
    certificates: [
      imageEcoleNumeriqueArdechoiseApplicationDesignerAndDeveloperPath,
    ],
  },
  {
    date: '2021 - 2022',
    certification: 'RNCP. 5',
    title: 'Développeur Web et Mobile',
    subtitle: 'Simplon Le Cheylard',
    description:
      'Acquisition des fondamentaux et développement d\'applications web et mobiles responsive. Maîtrise des langages clés (HTML, CSS, JavaScript) et de leurs frameworks, avec un accent mis sur la conception d\'interfaces utilisateur intuitives, performantes et ergonomiques.',
    imagePath: imageSimplonPath,
    certificates: [imageSimplonWebAndMobileDeveloperPath],
  },
  {
    date: '2019 - 2021',
    certification: 'Autodidacte',
    title: 'Formations HTML, CSS, JS et SQL',
    subtitle: 'Sololearn, Pierre Giraud, Mimo...',
    description:
      'Apprentissage autodidacte des bases du développement web et de la gestion de données. Conception de sites web dynamiques (HTML, CSS, JavaScript) et modélisation/requêtage de bases de données relationnelles via le langage SQL.',
    imagePath: imageFormationsPath,
    certificates: [
      imageSololearnHtmlPath,
      imageSololearnCssPath,
      imageSololearnResponsiveWebDesignPath,
      imageMimoSqlPath,
    ],
  },
  {
    date: '2012 - 2013',
    certification: 'RNCP. 4',
    title: 'BPREA Apiculture',
    subtitle: 'CFPPA de Hyères',
    description:
      'Acquisition des compétences théoriques et pratiques en gestion d\'exploitation apicole, conduite des ruches, techniques d\'élevage, récolte des produits et gestion sanitaire du cheptel, dans le respect des normes d\'une apiculture durable et écologique.',
    imagePath: imageApicultureGroupPath,
    certificates: [imageCfppaBpreaBeekeepingPath],
  },
  {
    date: '2007 - 2008',
    certification: 'RNCP. 3',
    title: 'CAP Carrosserie',
    subtitle: 'CFA Lucien Ravit de Livron',
    description:
      'Apprentissage et mise en pratique des techniques de réparation et de restauration de carrosserie automobile, redressage des structures, préparation des surfaces, application de peinture et remplacement d\'éléments endommagés, dans le strict respect des normes de sécurité et de qualité.',
    imagePath: imageCarrosseriePath,
    certificates: [],
  },
];
