/* *********************
 * Trainings
 ********************* */
import imageCarrosseriePath from './../assets/images/trainings/carrosserie.jpg';
import imageApicultureGroupPath from './../assets/images/trainings/apiculture_group.jpg';
import imageFormationsPath from './../assets/images/trainings/formations.jpg';
import imageSimplonPath from './../assets/images/trainings/simplon.jpg';
import imageEcoleNumeriqueArdechoisePath from './../assets/images/trainings/ecole_numerique_ardechoise.jpg';
import imageDatascientestPath from './../assets/images/trainings/datascientest.jpg';
import imageSoftwareEngineerPath from './../assets/images/trainings/software_engineer.jpg';

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
      'This experience was the culmination of my academic journey, serving as a synthesis of all the knowledge I had acquired. I applied my expertise in software engineering and my DevOps skills to manage and optimize complex IT infrastructures. I used tools for automated deployments and worked on fostering collaboration between development and operations teams, ensuring the availability, reliability, and security of systems.',
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
    title: 'DevOps System Administrator',
    subtitle: 'DataScientest & Panthéon Sorbonne',
    description:
      'This experience has allowed for acquiring in-depth expertise in the management and optimization of IT infrastructures. DevOps practices and tools were used to automate deployments, enhance collaboration between development and operations teams, and ensure system availability, reliability, and security.',
    imagePath: imageDatascientestPath,
    certificates: [
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
    title: 'Application Designer and Developer',
    subtitle: 'École Numérique Ardéchoise',
    description:
      'This immersion has led to the development of in-depth expertise in the design and development of software applications. Additionally, it provided an opportunity to cultivate skills in requirements analysis, software architecture design, and project management.',
    imagePath: imageEcoleNumeriqueArdechoisePath,
    certificates: [
      imageEcoleNumeriqueArdechoiseApplicationDesignerAndDeveloperPath,
    ],
  },
  {
    date: '2021 - 2022',
    certification: 'RNCP. 5',
    title: 'Web and Mobile Developer',
    subtitle: 'Simplon Le Cheylard',
    description:
      'This experience has conferred a comprehensive mastery in the development of web and mobile applications. I deepened my skills in programming languages such as HTML, CSS, JavaScript, as well as in the use of popular frameworks and libraries. Moreover, I gained the expertise needed to design intuitive and responsive user interfaces.',
    imagePath: imageSimplonPath,
    certificates: [imageSimplonWebAndMobileDeveloperPath],
  },
  {
    date: '2019 - 2021',
    certification: 'Self-taught',
    title: 'HTML, CSS, JS, and SQL Trainings',
    subtitle: 'Sololearn, Pierre Giraud, Mimo...',
    description:
      'As a self-taught individual, I learned to design and develop dynamic websites using HTML, CSS, and JavaScript. Furthermore, I acquired skills in database manipulation and management by learning the SQL language.',
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
    title: 'BPREA Beekeeping',
    subtitle: 'CFPPA de Hyères',
    description:
      'This provided the opportunity to acquire and develop practical and theoretical skills in hive management and honey production, learning techniques such as beekeeping, honey harvesting, and disease management, all while adhering to principles of sustainable and ecological beekeeping.',
    imagePath: imageApicultureGroupPath,
    certificates: [imageCfppaBpreaBeekeepingPath],
  },
  {
    date: '2007 - 2008',
    certification: 'RNCP. 3',
    title: 'CAP Bodywork',
    subtitle: 'CFA Lucien Ravit de Livron',
    description:
      'This immersion allowed for the development of skills necessary to perform repairs and restoration work on the structure and exterior appearance of vehicles. This includes repairing deformations, painting, and replacing damaged elements, all while adhering to safety and quality standards.',
    imagePath: imageCarrosseriePath,
    certificates: [],
  },
];
