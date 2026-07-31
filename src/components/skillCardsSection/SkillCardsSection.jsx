import React from 'react';
import iconFrontendPath from '../../assets/icons/frontend.svg';
import iconBackendPath from '../../assets/icons/backend.svg';
import iconMobilePath from '../../assets/icons/mobile.svg';
import iconDevopsPath from '../../assets/icons/devops.svg';

//* Styles
import './SkillCardsSection.scss';
import TitleSection from '../titleSection/TitleSection';

const SkillCardsSection = () => {
  return (
    <section>
      <div className="container-skills-card">
        <TitleSection
          first="#Skill"
          second="Cards"
          description="Développeur polyvalent spécialisé dans la création d'interfaces performantes, la sécurisation des données et l'optimisation des flux de développement et de déploiement."
          color="black"
        />
        <div className="container-cards">
          <div className="item-card">
            <img src={iconFrontendPath} alt="" />
            <p translate="no">Frontend</p>
          </div>
          <div className="item-card">
            <img src={iconBackendPath} alt="" />
            <p translate="no">Backend</p>
          </div>
          <div className="item-card">
            <img src={iconMobilePath} alt="" />
            <p translate="no">Mobile</p>
          </div>
          <div className="item-card">
            <img src={iconDevopsPath} alt="" />
            <p translate="no">DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillCardsSection;
