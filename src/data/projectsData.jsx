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

export const projectsData = [
  {
    date: '19/10/2025',
    technologies: [
      { name: 'React.js', background: '#08DDFF', color: '#000814' },
      { name: 'TypeScript', background: '#3178C6', color: '#000814' },
      { name: 'Laravel', background: '#FF3427', color: '#000814' },
    ],
    icon: iconEspaceVeloDromePath,
    title: 'Espace Vélo Drôme',
    subtitle: 'Website & Management System for a Bike Shop',
    description: [
      'Development of a comprehensive website and administrative system for a local bike shop to enhance visibility and streamline service sharing (repair, sales, and rental).',
      "The site presents all the store's offerings, including repair packages, a mobile workshop, and an online shop for new and used bicycles, as evidenced by the visual screenshots.",
      'It features a dedicated section for detailed bike rental management and a complete e-commerce section for bike sales.',
      'A Laravel backend handles data storage, pricing logic, and reservation management, while a dedicated TypeScript back-office (admin page) offers the manager a complete tool for inventory and request management.',
    ],
    Challenges: [
      'The most significant challenge was the implementation of the advanced bike rental management system.',
      'This involved complex logic for inventory, including bike availability based on size, gender, and accessory add-ons per bike. It also required calculating delivery and collection costs and integrating a contact system (email/phone) to validate reservations.',
      'Furthermore, building the dedicated TypeScript admin interface for full control over rental requests, sales inventory, and content management (bikes, services) was a substantial part of the project.',
      'This complete system ensures efficient, database-driven management for both rentals and sales, providing the manager with a comprehensive control panel.',
    ],
    links: {
      site: 'https://espacevelodrome.fr/', // URL suggérée basée sur les images
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
    subtitle: 'Collection of daily utilities',
    description: [
      'Toolbox is a simple yet powerful application, developed to gather various digital tools useful in daily life, both for myself and my acquaintances.',
      'It serves as a centralized platform for utilities ranging from game counters (Yams, various scores) to training aids (HIIT Timer) or party challenges.',
      'The design focuses on simplicity and efficiency, utilizing HTML5, pure JavaScript for logic, and Tailwind CSS for a modern and fast-to-develop user interface.',
      'Each tool is hosted on a dedicated page and the main application provides a search and sorting function for easy navigation.',
    ],
    Challenges: [
      'The main challenge for Toolbox was creating a user interface that was not only aesthetic but above all extremely easy to navigate and fully responsive (thanks to Tailwind CSS), even on projects coded in vanilla JavaScript.',
      'The modular organization of the tools required a clean code structure to ensure scalability and the rapid addition of new functionalities without burdening the application.',
      'Emphasis was placed on minimal loading and execution speed, as the application was designed to be instantly viewable on any device.',
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
    subtitle: 'Website to introduce myself',
    description: [
      'This is my personal website, a platform designed to give you a detailed insight into who I am and what I can do.',
      'Browse the different sections to discover my skills, my training completed, as well as my professional career.',
      'Each experience is carefully listed here, highlighting my achievements and expertise.',
      'Navigate through completed projects to get a glimpse of my tangible accomplishments and my dedication to each initiative.',
      'This site serves as a window into my career path and professional growth, reflecting the importance I place on every stage of my career.',
    ],
    Challenges: [
      'Developing this website posed several notable challenges.',
      'Firstly, I opted to construct the site entirely from scratch using React, eschewing the use of UI libraries.',
      'This decision allowed me to meticulously code each element, from animations to visual styles, ensuring a bespoke and polished end result tailored to my vision.',
      'Additionally, a substantial effort was dedicated to optimizing the site for search engines (SEO).',
      'This involved meticulous attention to detail, from crafting tailored meta descriptions and favicons to ensuring compatibility across various platforms and devices.',
      'In essence, this project was undertaken with the goal of delivering a fully functional website while prioritizing comprehensive search engine optimization, mirroring the thoroughness and dedication I bring to any client project.',
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
    subtitle: 'Collection of projects from my learning journey',
    description: [
      'Welcome to my study portfolio, a curated collection that showcases the culmination of my educational journey.',
      "Within these pages, I offer you a glimpse into the diverse array of projects I've undertaken, each representing a significant milestone in my personal and professional development.",
      "Navigating through this portfolio, you'll witness the evolution of my skills and expertise as I tackled various challenges and adapted to new technologies and methodologies along the way.",
    ],
    Challenges: [
      'Throughout this project, one of the most prominent hurdles I faced was the iterative process of learning from project to project.',
      'With each endeavor, I found myself navigating unfamiliar territories, adapting, and acquiring the necessary skills and techniques required to bring each project to fruition.',
      'Despite the challenges, I embraced each project as an opportunity for growth and development.',
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
