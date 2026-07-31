import React, { useState } from 'react';
import TitleSection from '../titleSection/TitleSection';
import { projectsData } from '../../data/projectsData';
import iconGithubPath from '../../assets/icons/github.svg';
import iconLinkPath from '../../assets/icons/link.svg';
import iconRobotPath from '../../assets/icons/robot.svg';
import iconIdeaPath from '../../assets/icons/idea.svg';

//* Styles
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  projectsData.forEach((project) => {
    project.technologies.sort((a, b) => a.name.localeCompare(b.name));
  });

  const handleProjectToggle = (projectIndex) => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === projectIndex ? null : projectIndex
    );
  };

  return (
    <section>
      <div className="container-projects">
        <TitleSection
          first="#All"
          second="Projects"
          description="Découvrez mes réalisations, vitrine de mes compétences en développement. Chaque projet illustre une opportunité d'innover, de concevoir et de relever des défis techniques. Parcourez-les pour découvrir les technologies utilisées, les enjeux relevés et les solutions apportées."
          color="white"
        />
        <div className="container-cards">
          {projectsData.map((project, index) => (
            <div key={index} className="item-card">
              <span translate="no" className="date">
                {project.date}
              </span>
              <div className="container-tags">
                {project.technologies.map((technology, index) => (
                  <div key={index} className="tag">
                    <a
                      target="_blank"
                      href={`https://www.google.com/search?q=${technology.name}`}
                    >
                      <p
                        translate="no"
                        style={{
                          backgroundColor: technology.background,
                          color: technology.color,
                        }}
                      >
                        {technology.name}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="container-title">
                <img src={project.icon} alt={project.title} />
                <h3 translate="no">{project.title}</h3>
              </div>
              <h4>{project.subtitle}</h4>
              <input
                type="checkbox"
                id={project.title.toLowerCase()}
                checked={selectedProjectIndex === index}
                onChange={() => handleProjectToggle(index)}
                className="hidden-checkbox"
              />
              <label
                htmlFor={project.title.toLowerCase()}
                className="item-card-label"
              >
                En savoir plus
              </label>
              <div className="item-card-content">
                <div className="title">
                  <img src={iconRobotPath} alt="description du projet" />
                  <h3>Description du projet</h3>
                </div>
                <ul>
                  {project.description.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
                <div className="title">
                  <img src={iconIdeaPath} alt="défis rencontrés" />
                  <h3>Défis rencontrés</h3>
                </div>
                <ul>
                  {project.Challenges.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              </div>
              <div className="container-links-icons">
                {project.links.site && (
                  <a target="_blank" href={project.links.site}>
                    <img src={iconLinkPath} alt="link" />
                  </a>
                )}
                {project.links.git && (
                  <a target="_blank" href={project.links.git}>
                    <img src={iconGithubPath} alt="github" />
                  </a>
                )}
              </div>
              <div className="container-image">
                <img
                  className="mobile-image"
                  src={project.images.mobile}
                  alt="mobile image"
                />
                <img
                  className="desktop-image"
                  src={project.images.desktop}
                  alt="dasktop image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
