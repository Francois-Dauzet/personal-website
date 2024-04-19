import React from 'react';
import iconConduentPath from '../../assets/images/conduent_business_solutions_france.jpg';
import { skillsData } from '../../data/skillsData';

//* Styles
import './SkillsSection.scss';

const SkillsSection = () => {
  skillsData.forEach((skill) => {
    skill.tools.sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <section>
      <div className="container-skills">
        <h1 className="title-section">
          <span translate="no" className="first-word">
            #All
          </span>
          <span translate="no" className="second-word">
            Skills
          </span>
        </h1>
        <p className="description">
          Voici la liste de toutes mes compétences, du développement web et
          mobile à la création de musique, en passant par la gestion de bases de
          données et la réalisation de montages audio/vidéo.
        </p>
        <div className="container-cards">
          {skillsData.map((skill, index) => (
            <div key={index} className="item-card">
              <h3>{skill.title}</h3>
              <h4>{skill.description}</h4>
              <ul>
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <input
                type="radio"
                name="skills"
                id={skill.title.toLowerCase()}
              />
              <label
                htmlFor={skill.title.toLowerCase()}
                className="item-card-label"
              >
                Outils & Technologies
              </label>
              <div className="item-card-content">
                {skill.tools.map((tool, index) => (
                  <div key={index} className="tag">
                    <p
                      style={{
                        backgroundColor: tool.background,
                        color: tool.color,
                      }}
                    >
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
