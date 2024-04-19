import React from 'react';
import './ExperienceTimeline.scss';
import { experienceData } from '../../data/experienceData';

const ExperienceTimeline = () => {
  return (
    <section>
      <div className="container-experience-timeline">
        <h1 className="title-section">
          <span className="first-word">#All</span>
          <span className="second-word">Experiences</span>
        </h1>
        <p className="description">
          De la conteneurisation d'applications au développement full stack, mes
          expériences professionnelles ont été tout aussi variées. J'ai acquis
          une expertise dans des domaines aussi divers que la précision dans le
          polissage, la gestion de projets et même le service militaire.
        </p>
        <div className="timeline-items">
          {experienceData.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-content">
                <img src={experience.imagePath} alt="" />
                <h3>{experience.position}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
