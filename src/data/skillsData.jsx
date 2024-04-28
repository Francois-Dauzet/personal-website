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
      'Development of interactive web applications.',
      'Integration of responsive and static designs.',
      'Creation of smooth and intuitive user experiences.',
      'Development of dynamic features for web applications.',
      'Customization and integration of themes for content and e-commerce platforms.',
      'Optimization of performance and accessibility of web interfaces.',
      'Effective collaboration within development teams to achieve project objectives.',
      'Constant technological watch to stay up-to-date with the latest trends and practices in web development.',
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
      'Design and creation of relational databases.',
      'Development of data access components to ensure efficient data manipulation.',
      'Backend implementation for web and mobile applications.',
      'Integration of backend components into content management or e-commerce applications.',
      'Management of data flows between different parts of an application.',
      'Optimization of performance and security of backend applications.',
      'Collaboration with frontend teams to ensure smooth integration between frontend and backend.',
      'Maintenance and continuous improvement of backend functionalities to meet evolving user and business needs.',
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
      'Development and deployment of applications for Android and iOS platforms.',
      'Management of build processes to automate application creation.',
      'Configuration of development environments to ensure smooth integration.',
      'Development of effective and responsive user interfaces.',
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
      'Setting up and managing continuous integration pipelines to automate testing and deployment.',
      'Use of configuration management tools to maintain environment consistency.',
      'Proficiency in Shell scripting for task automation and system process management.',
      'Use of version control systems for collaborative management of source code.',
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
      'Creation of detailed specifications in collaboration with stakeholders.',
      'Development of Gantt charts for project planning and tracking.',
      'Use of mind maps to visualize and organize ideas and processes.',
      'Identification and specification of functional and non-functional requirements.',
      'Establishment of technological and application architecture.',
      'Definition of design guidelines to ensure consistency and quality.',
      'Creation of mockups and wireframes to visualize the user interface.',
      'Design and rapid prototyping of user interfaces.',
      'Data inventory and design of conceptual and physical models.',
      'Definition of security requirements and implementation of a secure development plan.',
      'Planning project phases and iterations using agile or traditional methodologies.',
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
      'Advanced tag management and event tracking for web data analysis.',
      'In-depth analysis of traffic and user behavior to make decisions based on precise data.',
      'Development of web and mobile applications with cloud feature integration.',
      'Testing and debugging of APIs to ensure proper operation of web services.',
      'Administration and management of databases to maintain and optimize data.',
      'Secure file transfer to ensure data integrity during transfers.',
      'Configuration of development environment to facilitate the development process.',
      'Administration of operating systems to ensure efficient operation of infrastructures.',
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
      { name: 'macOS', background: '#4E4E4E', color: '#ffffff' },
      { name: 'Notepad++', background: '#AAF37F', color: '#000814' },
      { name: 'Visual Studio Code', background: '#21A1E9', color: '#000814' },
      { name: 'Visual Studio', background: '#652076', color: '#ffffff' },
      { name: 'Windows', background: '#087DD7', color: '#000814' },
    ],
  },
];
