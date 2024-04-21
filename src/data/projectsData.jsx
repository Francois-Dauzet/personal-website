import imagePersonalWebsiteMobilePath from './../assets/images/projects/personal_website_mobile.jpg';
import imagePersonalWebsiteDesktopPath from './../assets/images/projects/personal_website_desktop.jpg';
import imageStudyProjectsMobilePath from './../assets/images/projects/study_projects_mobile.jpg';
import imageStudyProjectsDesktopPath from './../assets/images/projects/study_projects_desktop.jpg';

export const projectsData = [
  {
    technologies: [
      { name: 'React.js', background: '#f7df1e', color: '#000814' },
      { name: 'SCSS', background: '#1572B6', color: '#ffffff' },
    ],
    title: 'Personal Website',
    subtitle: 'Website to introduce myself',
    description: [
      'Ceci est mon site web personnel, une plateforme conçue pour vous donner un aperçu détaillé de qui je suis et de ce que je peux faire.',
      'Parcourez les différentes sections pour découvrir mes compétences, mes formations, ainsi que mon parcours professionnel.',
      ' Chaque expérience y est soigneusement répertoriée, mettant en lumière mes réalisations et mes expertises.',
      'Naviguez à travers les projets terminés pour avoir un aperçu de mes réalisations concrètes et de mon engagement dans chaque initiative.',
      "Ce site est une fenêtre sur mon parcours et mon évolution professionnelle, reflétant l'importance que j'accorde à chaque étape de ma carrière.",
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
    technologies: [
      { name: 'Javascript', background: '#80DEF8', color: '#000814' },
      { name: 'HTML', background: '#E56947', color: '#000814' },
      { name: 'CSS', background: '#1572B6', color: '#ffffff' },
    ],
    title: 'Study Projects',
    subtitle: 'Collection of projects from my learning journey',
    description: [
      "Voici mon portfolio d'étude, une vitrine des réalisations que j'ai développée tout au long de mes formations.",
      "À travers ces pages, je vous invite à découvrir la diversité des projets que j'ai entrepris durant mon parcours d'apprentissage.",
      "Chacun d'eux incarne une étape essentielle dans mon développement et met en lumière mes compétences acquises.",
      'Bien que ce portfolio puisse sembler modeste, il regroupe avec importance tous les projets qui y sont présentés, reflétant ainsi mon engagement et ma progression.',
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
