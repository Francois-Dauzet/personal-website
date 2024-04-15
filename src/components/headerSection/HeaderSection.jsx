import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgProfilePath from '../../assets/images/profil_hover.jpeg';

//* Styles

import './HeaderSection.scss';
const HeaderSection = () => {
  return (
    <section>
      <div className="container-header-section">
        <div className="container-left">
          <div className="container-image">
            <img src={imgProfilePath} alt="" />
          </div>
        </div>
        <div className="container-right">
          <div className="container-text">
            <h1>DevOps & Web and Mobile Application Developer</h1>
            <p>
              Curieux, autodidacte et rigoureux, avec une solide expérience en
              montage audio/vidéo, MAO, mapping & modding, maintenance
              informatique, et divers domaines de l'informatique.
            </p>
            <p>
              En tant que développeur web junior, l'accent est mis sur
              l'enrichissement autonome des compétences.
            </p>
            <p>
              Le temps libre est consacré à l'apprentissage de nouvelles
              technologies.
            </p>
            <p>
              Adaptable, capable de travailler aussi bien seul qu'en équipe, et
              toujours en quête d'innovation pour améliorer les projets.
            </p>
            <a href="#">Contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderSection;
