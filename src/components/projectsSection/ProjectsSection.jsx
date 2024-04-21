import React from 'react';
import iconGithubPath from '../../assets/icons/github.svg';
import iconLinkPath from '../../assets/icons/link.svg';
import { projectsData } from '../../data/projectsData';

//* Styles
import './ProjectsSection.scss';

const ProjectsSection = () => {
  projectsData.forEach((project) => {
    project.technologies.sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <section>
      <div className="container-projects">
        <h1 className="title-section">
          <span translate="no" className="first-word">
            #All
          </span>
          <span translate="no" className="second-word">
            Projects
          </span>
        </h1>
        <p className="description">
          Explore my projects, a showcase of my development skills. Each project
          represents an opportunity to innovate, create and meet technical
          challenges. Browse each project to discover the technologies used, the
          challenges faced and the solutions brought.
        </p>
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
                      href={
                        'https://www.google.com/search?q=' + technology.name
                      }
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
                type="radio"
                name="projects"
                id={project.title.toLowerCase()}
              />
              <label
                translate="no"
                htmlFor={project.title.toLowerCase()}
                className="item-card-label"
              >
                More information
              </label>
              <div className="item-card-content">
                <ul>
                  {project.description.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
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
