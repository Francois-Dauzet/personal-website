import React from 'react';
import './TrainingTimeline.scss';
import { trainingData } from '../../data/trainingData';

const TrainingTimeline = () => {
  return (
    <section>
      <div className="container-training-timeline">
        <h1 className="title-section">
          <span className="first-word">#All</span>
          <span className="second-word">Trainings</span>
        </h1>
        <p className="description">
          De la conception web et mobile à la gestion de bases de données, mes
          compétences s'étendent à travers une diversité de domaines. J'ai suivi
          des formations certifiées en développement d'applications, en
          autodidacte ainsi qu'en apiculture et en carrosserie.
        </p>
        <div className="timeline-items">
          {trainingData.map((training, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{training.date}</div>
              <div className="timeline-content">
                <img src={training.imagePath} alt="" />
                <div className="container-text">
                  <span>{training.certification}</span>
                  <h3>{training.title}</h3>
                  <h4>{training.subtitle}</h4>
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
