import React, { useState } from 'react';
import iconToolsPath from '../../assets/icons/tools.svg';
import { patchsData } from '../../data/patchsData';

//* Styles
import './PatchsSection.scss';

const PatchsSection = () => {
  const [selectedPatchIndex, setSelectedPatchIndex] = useState(null);

  const sortedPatchsData = [...patchsData].sort((b, a) => {
    return a.version.localeCompare(b.version, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });

  const handlePatchToggle = (patchIndex) => {
    setSelectedPatchIndex((prevIndex) =>
      prevIndex === patchIndex ? null : patchIndex
    );
  };

  return (
    <section>
      <div className="container-patchs">
        <div className="container-cards">
          {sortedPatchsData.map((patch, index) => (
            <div key={index} className="item-card">
              <p className="date">{patch.date}</p>
              <input
                type="checkbox"
                id={patch.version.toLowerCase()}
                checked={selectedPatchIndex === index}
                onChange={() => handlePatchToggle(index)}
                className="hidden-checkbox"
              />
              <label
                htmlFor={patch.version.toLowerCase()}
                className="item-card-label"
              >
                <div>
                  <div className="container-title">
                    <img src={iconToolsPath} alt="tools" />
                    <h3 translate="no">{'Update ' + patch.version}</h3>
                  </div>
                </div>
              </label>
              <div className="item-card-content">
                <ul>
                  {patch.description.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatchsSection;
