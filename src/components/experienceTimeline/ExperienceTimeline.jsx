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
          description="From application containerization to full stack development, my
          professional experiences have been equally varied. I acquired
          expertise in areas as diverse as precision in polishing, project
          management and even military service."
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
