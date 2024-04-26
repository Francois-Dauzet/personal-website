import imageCarrosseriePath from './../assets/images/trainings/carrosserie.jpg';
import imageApicultureGroupPath from './../assets/images/trainings/apiculture_group.jpg';
import imageFormationsPath from './../assets/images/trainings/formations.jpg';
import imageSimplonPath from './../assets/images/trainings/simplon.jpg';
import imageEcoleNumeriqueArdechoisePath from './../assets/images/trainings/ecole_numerique_ardechoise.jpg';
import imageDatascientestPath from './../assets/images/trainings/datascientest.jpg';

export const trainingData = [
  {
    date: '2024 - 2025',
    certification: 'RNCP. 6',
    title: 'DevOps System Administrator',
    subtitle: 'DataScientest & Panthéon Sorbonne',
    description:
      'This experience has allowed for acquiring in-depth expertise in the management and optimization of IT infrastructures. DevOps practices and tools were used to automate deployments, enhance collaboration between development and operations teams, and ensure system availability, reliability, and security.',
    imagePath: imageDatascientestPath,
    certifications: [imageCarrosseriePath, imageDatascientestPath],
  },
  {
    date: '2022 - 2023',
    certification: 'RNCP. 6',
    title: 'Application Designer and Developer',
    subtitle: 'École Numérique Ardéchoise',
    description:
      'This immersion has led to the development of in-depth expertise in the design and development of software applications. Additionally, it provided an opportunity to cultivate skills in requirements analysis, software architecture design, and project management.',
    imagePath: imageEcoleNumeriqueArdechoisePath,
    certifications: [
      'https://www.google.com/search?sca_esv=0e9d35a69ed69d23&sca_upv=1&rlz=1C1VDKB_frFR1094FR1094&q=fake+certificates&uds=AMwkrPufgvfzFeIw5yilA4Gzc5SOzRcpS74z-JEHBnTHK6n-h1FD9Z8RCZwYV5LzXSfjh-SMPit-YvJoIktcGJxSaWmbg_1x-T3bZkX0wBrXsCyJo4zqjvsB3nWvadkqwsqUIx6IhXwy5R4frapt-9cjGUiVeKscwjjnlwudjzdblejZe86Wtec4JEJ0k-AgwN3hm0RKtw771bwtHrxgkTkrRLnLr-CIuNL2vO56hasiWOzGbTVGimBeYVoBhPN2vqVFFOt-UlaPVd7BnASv74v6Hw9t9NJu1Kl4RfnyRfc7H_sGLB9-w7I&udm=2&prmd=invbz&sa=X&ved=2ahUKEwiw6PGE5uCFAxW9cKQEHRwnBCkQtKgLegQIDRAB&biw=1536&bih=730&dpr=1.25#vhid=IcCoydyTwzOXqM&vssid=mosaic',
      'https://images.bannerbear.com/direct/4mGpW3zwrxA1K0AxQw/requests/000/010/384/635/MRj52Zwoa6xWMvB2zxWkdO3eE/85ef4939955b3b1903ddd7cfad60628c61ae00e4.jpg',
      'https://www.diplomaoutlet.com/wp-content/uploads/Network-Certificate.jpg',
      'https://diploma-makers.com/wp-content/uploads/2019/10/India-fake-diploma-sample-University-of-Kerala.jpg',
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
    certifications: [],
  },
  {
    date: '2019 - 2021',
    certification: 'Self-taught',
    title: 'HTML, CSS, JS, and SQL Trainings',
    subtitle: 'Sololearn, Pierre Giraud, Mimo...',
    description:
      'As a self-taught individual, I learned to design and develop dynamic websites using HTML, CSS, and JavaScript. Furthermore, I acquired skills in database manipulation and management by learning the SQL language.',
    imagePath: imageFormationsPath,
    certifications: [],
  },
  {
    date: '2012 - 2013',
    certification: 'RNCP. 4',
    title: 'BPREA Beekeeping',
    subtitle: 'CFPPA de Hyères',
    description:
      'This provided the opportunity to acquire and develop practical and theoretical skills in hive management and honey production, learning techniques such as beekeeping, honey harvesting, and disease management, all while adhering to principles of sustainable and ecological beekeeping.',
    imagePath: imageApicultureGroupPath,
    certifications: [imageDatascientestPath, imageDatascientestPath],
  },
  {
    date: '2007 - 2008',
    certification: 'RNCP. 3',
    title: 'CAP Bodywork',
    subtitle: 'CFA Lucien Ravit de Livron',
    description:
      'This immersion allowed for the development of skills necessary to perform repairs and restoration work on the structure and exterior appearance of vehicles. This includes repairing deformations, painting, and replacing damaged elements, all while adhering to safety and quality standards.',
    imagePath: imageCarrosseriePath,
    certifications: [imageDatascientestPath, imageDatascientestPath],
  },
];
