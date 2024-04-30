import imagePersonalWebsiteMobilePath from './../assets/images/projects/personal_website_mobile.jpg';
import iconPersonalWebsitePath from './../assets/images/projects/personal_website_icon.svg';
import imagePersonalWebsiteDesktopPath from './../assets/images/projects/personal_website_desktop.jpg';
import imageStudyProjectsMobilePath from './../assets/images/projects/study_projects_mobile.jpg';
import iconStudyProjectsPath from './../assets/images/projects/study_projects_icon.svg';
import imageStudyProjectsDesktopPath from './../assets/images/projects/study_projects_desktop.jpg';

export const projectsData = [
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
