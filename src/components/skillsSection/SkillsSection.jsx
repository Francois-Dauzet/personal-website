import React, { useState } from 'react';
import { skillsData } from '../../data/skillsData';
import ProgressBar from '@ramonak/react-progress-bar';
import './SkillsSection.scss';
import TitleSection from '../titleSection/TitleSection';

const SkillsSection = () => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  skillsData.forEach((skill) => {
    skill.tools.sort((a, b) => a.name.localeCompare(b.name));
  });

  const handleSkillToggle = (skillIndex) => {
    setSelectedSkillIndex((prevIndex) =>
      prevIndex === skillIndex ? null : skillIndex
    );
  };

  return (
    <section>
      <div className="container-skills">
        <TitleSection
          first="#All"
          second="Skills"
          description="Aperçu des compétences techniques et méthodologiques acquises à travers mes expériences et formations. Exploration des domaines d'expertise couvrant le développement Frontend, Backend, Mobile, les pratiques DevOps et le pilotage de projet."
          color="white"
        />
        <div className="container-cards">
          {skillsData.map((skill, skillIndex) => (
            <div key={skillIndex} className="item-card">
              <div className="title">
                <img src={skill.icon} alt="" />
                <h3>{skill.title}</h3>
              </div>
              <h4>{skill.description}</h4>
              <ul>
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <input
                type="checkbox"
                id={skill.title.toLowerCase()}
                checked={selectedSkillIndex === skillIndex}
                onChange={() => handleSkillToggle(skillIndex)}
                className="hidden-checkbox"
              />
              <label
                htmlFor={skill.title.toLowerCase()}
                className="item-card-label"
              >
                Outils & Technologies
              </label>
              <div className="item-card-content">
                {skill.tools.map((tool, toolIndex) => (
                  <a
                    key={toolIndex}
                    translate="no"
                    target="_blank"
                    href={'https://www.google.com/search?q=' + tool.name}
                  >
                    <ProgressBar
                      className="progress-bar"
                      height="auto"
                      borderRadius="0"
                      bgColor={tool.background}
                      baseBgColor={tool.background + '90'}
                      labelColor={tool.color}
                      completed={
                        selectedSkillIndex === skillIndex ? tool.value : 0
                      }
                      customLabel={tool.name}
                      transitionDuration="1s"
                      labelAlignment="left"
                    />
                  </a>
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
