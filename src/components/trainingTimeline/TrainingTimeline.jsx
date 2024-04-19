import React from 'react';
import imageCarrosseriePath from '../../assets/images/carrosserie.jpg';
import imageApicultureGroupPath from '../../assets/images/apiculture_group.jpg';
import imageFormationsPath from '../../assets/images/formations.jpg';
import imageSimplonPath from '../../assets/images/simplon.jpg';
import imageEcoleNumeriqueArdechoisePath from '../../assets/images/ecole_numerique_ardechoise.jpg';
import imageDatascientestPath from '../../assets/images/datascientest.jpg';

//* Styles
import './TrainingTimeline.scss';

const TrainingTimeline = () => {
  return (
    <section>
      <div className="container-training-timeline">
        <h1 className="title-section">
          <span translate="no" className="first-word">
            #All
          </span>
          <span translate="no" className="second-word">
            Trainings
          </span>
        </h1>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2024 - 2025
            </div>
            <div className="timeline-content">
              <img src={imageDatascientestPath} alt="" />
              <div className="container-text">
                <span translate="no">RNCP niv. 6</span>
                <h3 translate="no">Administrateur Système DevOps</h3>
                <h4 translate="no">DataScientest & Panthéon Sorbonne</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2022 - 2023
            </div>
            <div className="timeline-content">
              <img src={imageEcoleNumeriqueArdechoisePath} alt="" />
              <div className="container-text">
                <span translate="no">RNCP niv. 6</span>
                <h3 translate="no">
                  Titre Professionnel Concepteur et Développeur d'Application
                </h3>
                <h4 translate="no">École Numérique Ardéchoise</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2021 - 2022
            </div>
            <div className="timeline-content">
              <img src={imageSimplonPath} alt="" />
              <div className="container-text">
                <span translate="no">RNCP niv. 5</span>
                <h3 translate="no">
                  Titre Professionnel Développeur Web et Web Mobile
                </h3>
                <h4 translate="no">Formation Simplon Le Cheylard</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2019 - 2021
            </div>
            <div className="timeline-content">
              <img src={imageFormationsPath} alt="" />
              <div className="container-text">
                <span translate="no">Autodidacte</span>
                <h3 translate="no">Formations HTML, CSS, JS et SQL</h3>
                <h4 translate="no">Sololearn, Pierre Giraud, Mimo...</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2012 - 2013
            </div>
            <div className="timeline-content">
              <img src={imageApicultureGroupPath} alt="" />
              <div className="container-text">
                <span translate="no">RNCP niv. 4</span>
                <h3 translate="no">BPREA Apiculture</h3>
                <h4 translate="no">CFPPA de Hyères</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div translate="no" className="timeline-date">
              2007 - 2008
            </div>
            <div className="timeline-content">
              <img src={imageCarrosseriePath} alt="" />
              <div className="container-text">
                <span translate="no">CAP</span>
                <h3 translate="no">CAP carrosserie</h3>
                <h4 translate="no">CFA Lucien Ravit de Livron</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ullam similique pariatur impedit perferendis dolor
                  expedita aliquid, voluptas assumenda facilis nostrum ad
                  obcaecati quo accusantium illum, a voluptates in ipsa. Saepe
                  nesciunt voluptatum ad, dicta voluptates laboriosam modi
                  accusamus dignissimos exercitationem fugiat a, praesentium
                  adipisci. Vel aspernatur soluta provident a.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainingTimeline;
