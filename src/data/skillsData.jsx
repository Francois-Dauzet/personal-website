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
      { name: 'MariaDB', background: '#C69D71', color: '#000814', value: 35 },
      { name: 'C#', background: '#6C287E', color: '#ffffff', value: 40 },
      { name: 'FastAPI', background: '#0D9C8F', color: '#000814', value: 20 },
      { name: 'Python', background: '#39719C', color: '#ffffff', value: 25 },
      { name: 'Laravel', background: '#FF3427', color: '#000814', value: 65 },
      { name: 'Symfony', background: '#FFFFFF', color: '#000814', value: 40 },
      { name: 'PHP', background: '#7B7FB5', color: '#000814', value: 55 },
      { name: 'SQL', background: '#FFFFFF', color: '#000814', value: 70 },
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
  },
];
