import React from 'react';

//* Styles
import './TitleSection.scss';

const TitleSection = (props) => (
  <div className="container-title-section">
    <h1 className="container-title">
      <span translate="no" className="first-word">
        {props.first}
      </span>
      <span translate="no" className="second-word">
        {props.second}
      </span>
    </h1>
    <p className={`description ${props.color}`}>{props.description}</p>
  </div>
);

export default TitleSection;
