import iconFrontendPath from './../assets/icons/frontend.svg';
import iconBackendPath from './../assets/icons/backend.svg';
import iconMobilePath from './../assets/icons/mobile.svg';
import iconDevopsPath from './../assets/icons/devops.svg';
import iconFolderPath from './../assets/icons/folder.svg';
import iconToolsPath from './../assets/icons/tools.svg';

export const skillsData = [
  {
    icon: iconFrontendPath,
    title: 'Frontend Development',
    description:
      'Design and management of web user interfaces, whether static or dynamic.',
    points: [
      'Prototyping applications.',
      'Creating static and responsive web interfaces.',
      'Developing dynamic web interfaces.',
      'Creating user interfaces for content or e-commerce solutions.',
    ],
    tools: [
      { name: 'React.js', background: '#087A9F', color: '#ffffff' },
      { name: 'Javascript', background: '#EFD81D', color: '#000814' },
      { name: 'HTML', background: '#DD4B25', color: '#000814' },
      { name: 'CSS', background: '#254BDD', color: '#ffffff' },
      { name: 'JQuery', background: '#0865A7', color: '#ffffff' },
      { name: 'Symfony', background: '#19161A', color: '#ffffff' },
      { name: 'Vue.js', background: '#3FB27F', color: '#000814' },
      { name: 'Twig', background: '#BFD52A', color: '#000814' },
      { name: 'Wordpress', background: '#30353A', color: '#ffffff' },
    ],
  },
  {
    icon: iconBackendPath,
    title: 'Backend Development',
    description:
      'Creation of databases and development of data access components for web and mobile applications.',
    points: [
      'Creating databases.',
      'Developing data access components.',
      'Implementing backend for web or mobile applications.',
      'Integration of components into content or e-commerce management applications.',
    ],
    tools: [
      { name: 'MariaDB', background: '#BA7257', color: '#000814' },
      { name: 'C#', background: '#7255D5', color: '#ffffff' },
      { name: 'FastAPI', background: '#059487', color: '#000814' },
      { name: 'Python', background: '#3D6CA6', color: '#ffffff' },
      { name: 'Laravel', background: '#F72C1F', color: '#000814' },
      { name: 'Symfony', background: '#19161A', color: '#ffffff' },
      { name: 'PHP', background: '#7377AD', color: '#000814' },
      { name: 'SQL', background: '#0172B8', color: '#ffffff' },
    ],
  },
  {
    icon: iconMobilePath,
    title: 'Mobile Development',
    description:
      'Development and production of applications for Android and iOS, with particular expertise in React Native.',
    points: [
      'Development and production of applications for Android and iOS.',
      'Management of build tools such as Gradle and Cocoapods.',
      'Configuration of SDK paths between different development environments.',
      'Using React Native to develop interface components.',
    ],
    tools: [
      { name: 'React Native', background: '#00A4D2', color: '#000814' },
      { name: 'Android Studio', background: '#2B75E8', color: '#000814' },
      { name: 'Xcode', background: '#19ADEE', color: '#000814' },
    ],
  },
  {
    icon: iconDevopsPath,
    title: 'DevOps Practices',
    description:
      'Use of processes and tools to speed up development and ensure continuous improvement of software.',
    points: [
      'Setting up and managing continuous integration pipelines.',
      'Automation of deployments to ensure continuous delivery.',
      'Configuration and management of development and production environments.',
      'Using configuration management tools to ensure environment consistency.',
    ],
    tools: [
      { name: 'Azure DevOps', background: '#0089D6', color: '#000814' },
      { name: 'Vagrant', background: '#127EFF', color: '#000814' },
      { name: 'Bash', background: '#1B1B1F', color: '#ffffff' },
      { name: 'Docker', background: '#0091E2', color: '#000814' },
      { name: 'Git', background: '#DD4C35', color: '#000814' },
      { name: 'Linux Sysadmin', background: '#FED21F', color: '#000814' },
    ],
  },
  {
    icon: iconFolderPath,
    title: 'Project Design and Management',
    description:
      'Planning, designing, and managing software projects, from needs analysis to production and maintenance.',
    points: [
      'Creating detailed specifications in collaboration with stakeholders.',
      'Developing Gantt Charts for project planning and tracking.',
      'Using Mind Maps to visualize and organize ideas and processes.',
      'Identifying and specifying functional and non-functional requirements.',
      'Establishing technological and application architecture.',
      'Defining Design Guidelines to ensure consistency and quality.',
      'Creating mockups and wireframes to visualize the user interface.',
      'Data inventory and conceptual and physical model design (ERD, ERD, PDM).',
      'Defining security requirements and implementing a secure development plan.',
      'Planning phases and iterations using agile or traditional methodologies.',
      'Setting up deployment and application maintenance.',
      'Project budget management and cost tracking throughout the project lifecycle.',
    ],
    tools: [
      { name: 'Coolors', background: '#08A3FD', color: '#000814' },
      { name: 'DrawSQL', background: '#232323', color: '#ffffff' },
      { name: 'Excalidraw', background: '#6965DB', color: '#ffffff' },
      { name: 'Figma', background: '#F25425', color: '#000814' },
      { name: 'Framindmap', background: '#725794', color: '#ffffff' },
      { name: 'GanttProject', background: '#FFC008', color: '#000814' },
      { name: 'Looping', background: '#0000FF', color: '#ffffff' },
      { name: 'Microsoft 365', background: '#497DD2', color: '#000814' },
      { name: 'Prezi', background: '#3685FF', color: '#000814' },
      { name: 'Trello', background: '#087DC1', color: '#000814' },
    ],
  },
  {
    icon: iconToolsPath,
    title: 'Workflow and Tools',
    description:
      'Set of tools and work environments to optimize productivity and collaboration throughout the development process.',
    points: [
      'Advanced tag management and event tracking with Google Tag Manager.',
      'In-depth analysis of traffic and user behavior with Google Analytics.',
      'Using Firebase for web and mobile app development.',
      'Testing and debugging APIs with Postman.',
      'Database administration and management with phpMyAdmin and MySQL Workbench.',
      'Secure file transfer with FileZilla.',
      'Configuring development environment with Laragon.',
      'Administration of Linux and Windows operating systems.',
      'Software development with Notepad++ and Visual Studio Code.',
    ],
    tools: [
      { name: 'Google Tag Manager', background: '#89B4F8', color: '#000814' },
      { name: 'Google Analytics', background: '#F8AC01', color: '#000814' },
      { name: 'Firebase', background: '#FFCB2C', color: '#000814' },
      { name: 'Postman', background: '#FF6C37', color: '#000814' },
      { name: 'phpMyAdmin', background: '#FF9800', color: '#000814' },
      { name: 'MySQL Workbench', background: '#26557C', color: '#ffffff' },
      { name: 'FileZilla', background: '#B50000', color: '#ffffff' },
      { name: 'Laragon', background: '#33A7FD', color: '#000814' },
      { name: 'Linux', background: '#FED21F', color: '#000814' },
      { name: 'Apple', background: '#2B2527', color: '#ffffff' },
      { name: 'Notepad++', background: '#AAF37F', color: '#000814' },
      { name: 'Visual Studio Code', background: '#21A1E9', color: '#000814' },
      { name: 'Visual Studio', background: '#652076', color: '#ffffff' },
      { name: 'Windows', background: '#087DD7', color: '#000814' },
    ],
  },
];
