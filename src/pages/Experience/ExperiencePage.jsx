import React, { useEffect } from 'react';
import './ExperiencePage.scss';

const ExperiencePage = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-experience-page">
      <div className={'container-transition active'}></div>
      <h1>ExperiencePage</h1>
    </div>
  );
};

export default ExperiencePage;
