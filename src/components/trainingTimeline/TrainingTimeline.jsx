import React from 'react';
import iconGithubPath from '../../assets/icons/github.svg';

//* Styles
import './TrainingTimeline.scss';

const TrainingTimeline = () => {
  return (
    <section>
      <div className="container-training-timeline">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 - 2025</div>
            <div className="timeline-content">
              <h3>Administrateur Système DevOps</h3>
              <h4>DataScientest & Panthéon Sorbonne</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ullam similique pariatur impedit perferendis dolor expedita
                aliquid, voluptas assumenda facilis nostrum ad obcaecati quo
                accusantium illum, a voluptates in ipsa. Saepe nesciunt
                voluptatum ad, dicta voluptates laboriosam modi accusamus
                dignissimos exercitationem fugiat a, praesentium adipisci. Vel
                aspernatur soluta provident a.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - 2023</div>
            <div className="timeline-content">
              <h3>
                Titre Professionnel Concepteur et Développeur d'Application
              </h3>
              <h4>École Numérique Ardéchoise</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ullam similique pariatur impedit perferendis dolor expedita
                aliquid, voluptas assumenda facilis nostrum ad obcaecati quo
                accusantium illum, a voluptates in ipsa. Saepe nesciunt
                voluptatum ad, dicta voluptates laboriosam modi accusamus
                dignissimos exercitationem fugiat a, praesentium adipisci. Vel
                aspernatur soluta provident a.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021 - 2022</div>
            <div className="timeline-content">
              <h3>Titre Professionnel Développeur Web et Web Mobile</h3>
              <h4>Formation Simplon Le Cheylard</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ullam similique pariatur impedit perferendis dolor expedita
                aliquid, voluptas assumenda facilis nostrum ad obcaecati quo
                accusantium illum, a voluptates in ipsa. Saepe nesciunt
                voluptatum ad, dicta voluptates laboriosam modi accusamus
                dignissimos exercitationem fugiat a, praesentium adipisci. Vel
                aspernatur soluta provident a.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Formations HTML, CSS, JS et SQL - Autodidacte</h3>
              <h4>Sololearn, Pierre Giraud, Mimo...</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ullam similique pariatur impedit perferendis dolor expedita
                aliquid, voluptas assumenda facilis nostrum ad obcaecati quo
                accusantium illum, a voluptates in ipsa. Saepe nesciunt
                voluptatum ad, dicta voluptates laboriosam modi accusamus
                dignissimos exercitationem fugiat a, praesentium adipisci. Vel
                aspernatur soluta provident a.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2012 - 2013</div>
            <div className="timeline-content">
              <h3>BPREA Apiculture</h3>
              <p>CFPPA de Hyères</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2007 - 2008</div>
            <div className="timeline-content">
              <h3>Formation CAP carrosserie</h3>
              <p>CFA Lucien Ravit de Livron</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainingTimeline;
