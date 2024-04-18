import React from 'react';
import iconConduentPath from '../../assets/images/conduent_business_solutions_france.jpg';
import iconkpinsightPath from '../../assets/images/kpinsight_analytics.jpg';
import iconPolitechPath from '../../assets/images/politech.jpg';
import iconApiculturePath from '../../assets/images/apiculture.jpg';
import iconArmeeDeTerrePath from '../../assets/images/armee_de_terre.jpg';

//* Styles
import './ExperienceTimeline.scss';

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
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 - 2025</div>
            <div className="timeline-content">
              <img src={iconConduentPath} alt="" />
              <h3>Chargé de conteneurisation d'application</h3>
              <h4>Conduent Business Solutions France</h4>
              <p>
                Dans mon poste actuel, , je travaille avec une variété d'outils
                et de technologies clés pour le développement et la gestion
                d'applications.
              </p>
              <p>
                J'utilise Docker, Rancher et Kubernetes pour la conteneurisation
                des applications, garantissant une gestion efficace des
                environnements.
              </p>
              <p>
                Parallèlement, j'utilise Azure DevOps comme plateforme centrale
                pour gérer les droits, les déploiements, les builds et toutes
                les autres exigences du cycle de vie des applications.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - 2023</div>
            <div className="timeline-content">
              <img src={iconkpinsightPath} alt="" />
              <h3>Développeur Full Stack</h3>
              <h4>KPInsight Analytics</h4>
              <p>
                Ma mission principale était la mise en place de TAG avec Google
                Tag Manager afin d'intégrer des scripts JavaScript pour la
                modification ou la création de nouvelles fonctionnalités.
              </p>
              <p>
                J'ai également été chargé de déployer des balises Google
                Analytics pour assurer un suivi précis de l'utilisateur sur les
                sites web.
              </p>
              <p>
                Parallèlement, j'ai eu l'occasion d'utiliser React Native pour
                le développement d'applications mobiles iOS et Android, ainsi
                que PHP pour la gestion du back office de certains clients.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2016 - 2021</div>
            <div className="timeline-content">
              <img src={iconPolitechPath} alt="" />
              <h3>Polisseur</h3>
              <h4>Politech (Groupe SOFAB Orthopédie)</h4>
              <p>
                J'ai travaillé sur le polissage d'implants et d'ancillaires de
                petites et moyennes séries, ainsi que sur la fabrication de
                pièces orthopédiques avec une précision au dixième de
                millimètre.
              </p>
              <p>
                Mes tâches comprenaient le corindonnage, le microbillage et le
                polissage de matériaux tels que l'Inox, le Titane, le Chrome et
                le Cobalt.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2011 - 2015</div>
            <div className="timeline-content">
              <img src={iconApiculturePath} alt="" />
              <h3>Apiculture</h3>
              <h4>Philippe Dauzet apiculteur professionel depuis 1989</h4>
              <p>
                Dès mon plus jeune âge, j'ai commencé à travailler aux côtés de
                mon père.
              </p>
              <p>
                J'ai été impliqué dans la branche de l'agriculture spécialisée
                dans l'élevage d'abeilles pour la production de miel.
              </p>
              <p>
                Mon rôle consistait à exploiter les produits de la ruche,
                notamment le miel, mais aussi la cire, la gelée royale, le
                pollen et la propolis.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2009 - 2011</div>
            <div className="timeline-content">
              <img src={iconArmeeDeTerrePath} alt="" />
              <h3>Armée de terre</h3>
              <h4>501/503 RCC Mourmelon, 1er Spahis Valence</h4>
              <p>
                En tant que Tireur de missile Milan dans l'armée de Terre sous
                le contrat EVAT, j'ai manié cet engin à guidage filoguidé,
                réalisant des tirs de jour comme de nuit grâce au guidage
                infrarouge.
              </p>
              <p>
                J'ai ainsi participé à diverses opérations, développant mes
                compétences techniques et ma capacité à travailler en équipe
                dans des environnements exigeants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceTimeline;
