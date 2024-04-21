import imagePersonalWebsiteMobilePath from './../assets/images/projects/personal_website_mobile.jpg';
import imagePersonalWebsiteDesktopPath from './../assets/images/projects/personal_website_desktop.jpg';
import imageStudyProjectsMobilePath from './../assets/images/projects/study_projects_mobile.jpg';
import imageStudyProjectsDesktopPath from './../assets/images/projects/study_projects_desktop.jpg';

export const projectsData = [
  {
    date: '18/04/2024',
    technologies: [
      { name: 'React.js', background: '#f7df1e', color: '#000814' },
      { name: 'SCSS', background: '#1572B6', color: '#ffffff' },
    ],
    title: 'Personal Website',
    subtitle: 'Website to introduce myself',
    descriptions: [
      'This is my personal website, a platform designed to give you a detailed insight into who I am and what I can do.',
      'Browse through the different sections to discover my skills, education, as well as my professional journey.',
      'Each experience is carefully listed here, highlighting my achievements and expertise.',
      'Navigate through completed projects to get a glimpse of my tangible accomplishments and my dedication to each initiative.',
      'This site serves as a window into my career path and professional growth, reflecting the importance I place on every stage of my career.',
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
      { name: 'Javascript', background: '#80DEF8', color: '#000814' },
      { name: 'HTML', background: '#E56947', color: '#000814' },
      { name: 'CSS', background: '#1572B6', color: '#ffffff' },
    ],
    title: 'Study Projects',
    subtitle: 'Collection of projects from my learning journey',
    description: [
      'Here is my study portfolio, showcasing the accomplishments I have developed throughout my education.',
      'Through these pages, I invite you to explore the diversity of projects I have undertaken during my learning journey.',
      'Each of them represents an essential step in my development and highlights the skills I have acquired.',
      'While this portfolio may seem modest, it gathers with importance all the projects presented, reflecting my commitment and progression.',
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
