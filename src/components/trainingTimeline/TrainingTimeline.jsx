import React, { useState, useEffect } from 'react';
import './TrainingTimeline.scss';
import { trainingData } from '../../data/trainingData';
import TitleSection from '../titleSection/TitleSection';

const TrainingTimeline = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [certificateImages, setCertificateImages] = useState([]);

  useEffect(() => {
    if (showCertificates) {
      document.body.style.overflow = 'hidden'; // Bloque le défilement de la page arrière lorsque le carrousel est affiché
    } else {
      document.body.style.overflow = ''; // Rétablit le défilement de la page lorsque le carrousel est fermé
    }
  }, [showCertificates]);

  const toggleCertificates = (images) => {
    setCertificateImages(images);
    setShowCertificates(!showCertificates);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('certificate-overlay')) {
      setShowCertificates(false);
    }
  };

  const handleCarouselClick = (event) => {
    event.stopPropagation(); // Empêche la propagation du clic à l'overlay
  };

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
                  <h3 translate="no">{training.title}</h3>
                  <h4 translate="no">{training.subtitle}</h4>
                  <p>{training.description}</p>
                  {training.certifications.length > 0 && (
                    <button
                      className="certificate-button"
                      onClick={() =>
                        toggleCertificates(training.certifications)
                      }
                    >
                      {training.certifications.length > 1
                        ? 'View Certificates'
                        : 'View Certificate'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showCertificates && (
          <div className={'certificate-overlay'} onClick={handleOverlayClick}>
            <div className="certificate-carousel" onClick={handleCarouselClick}>
              {certificateImages.map((image, index) => (
                <img key={index} src={image} alt={`Certificate ${index + 1}`} />
              ))}
            </div>
            <button
              className="close-button"
              onClick={() => setShowCertificates(false)}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingTimeline;
