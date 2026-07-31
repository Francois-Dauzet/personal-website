import React from 'react';
import './ExperienceTimeline.scss';
import { experienceData } from '../../data/experienceData';
import TitleSection from '../titleSection/TitleSection';

const ExperienceTimeline = () => {
  return (
    <section>
      <div className="container-experience-timeline">
        <TitleSection
          first="#All"
          second="Experiences"
          description="De la conteneurisation d'applications au développement full-stack, mon parcours professionnel se distingue par sa richesse et sa polyvalence. Cette diversité m'a permis d'acquérir une forte adaptabilité et d'allier des compétences très variées, l'extrême rigueur du polissage de précision, la méthode de la gestion de projet, ainsi que la discipline et l'esprit d'équipe forgés lors de mon engagement militaire."
          color="white"
        />
        <div className="timeline-items">
          {experienceData.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div translate="no" className="timeline-date">
                {experience.date}
              </div>
              <div className="timeline-content">
                <img src={experience.imagePath} alt={experience.company} />
                <h3 translate="no">{experience.title}</h3>
                <h4 translate="no">{experience.company}</h4>
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
