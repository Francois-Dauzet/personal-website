import React from 'react';
import './TrainingTimeline.scss';
import { trainingData } from '../../data/trainingData';
import TitleSection from '../titleSection/TitleSection';

const TrainingTimeline = () => {
  return (
    <section>
      <div className="container-training-timeline">
        <TitleSection
          first="#All"
          second="Trainings"
          description="From web and mobile design to database management, my Skills extend
          across a diversity of fields. I followed certified training in
          application development, self-taught as well as in beekeeping and
          bodywork."
          color="black"
        />
        <div className="timeline-items">
          {trainingData.map((training, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div translate="no" className="timeline-date">
                {training.date}
              </div>
              <div className="timeline-content">
                <img src={training.imagePath} alt={training.title} />
                <div className="container-text">
                  <span translate="no">{training.certification}</span>
                  <h3>{training.title}</h3>
                  <h4 translate="no">{training.subtitle}</h4>
                  <p>{training.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTimeline;
