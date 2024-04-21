import React from 'react';
import './ExperienceTimeline.scss';
import { experienceData } from '../../data/experienceData';

const ExperienceTimeline = () => {
  return (
    <section>
      <div className="container-experience-timeline">
        <h1 className="title-section">
          <span translate="no" className="first-word">
            #All
          </span>
          <span translate="no" className="second-word">
            Experiences
          </span>
        </h1>
        <p className="description">
          From application containerization to full stack development, my
          professional experiences have been equally varied. I acquired
          expertise in areas as diverse as precision in polishing, project
          management and even military service.
        </p>
        <div className="timeline-items">
          {experienceData.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div translate="no" className="timeline-date">
                {experience.date}
              </div>
              <div className="timeline-content">
                <img src={experience.imagePath} alt={experience.company} />
                <h3 translate="no">{experience.position}</h3>
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
