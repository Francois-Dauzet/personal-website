import React from 'react';
import TitleSection from '../titleSection/TitleSection';
import iconGithubPath from '../../assets/icons/github.svg';
import iconLinkPath from '../../assets/icons/link.svg';
import { projectsData } from '../../data/projectsData';

//* Styles
import './BestProjectSection.scss';

const BestProjectSection = () => {
  const project = projectsData.find(
    (project) => project.title === 'Personal Website'
  );

  if (!project) {
    return null;
  }

  project.technologies.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section>
      <div className="container-best-project">
        <TitleSection
          first="#Best"
          second="Project"
          description="Explore my current major project, a balanced expression of my current skills. It reflects my ability to tackle technical challenges with confidence and to innovate pragmatically."
          color="black"
        />
        <div className="container-cards">
          <div key={project.title} className="item-card">
            <span translate="no" className="date">
              {project.date}
            </span>
            <div className="container-tags">
              {project.technologies.map((technology, index) => (
                <div key={index} className="tag">
                  <a
                    target="_blank"
                    href={'https://www.google.com/search?q=' + technology.name}
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
            <div className="item-card-content">
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
              <ul>
                {project.description.map((paragraph, index) => (
                  <li key={index}>{paragraph}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProjectSection;
