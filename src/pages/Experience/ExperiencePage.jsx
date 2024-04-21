import React, { useEffect } from 'react';
import './ExperiencePage.scss';
import TrainingTimeline from '../../components/trainingTimeline/TrainingTimeline';
import HeaderExperienceSection from '../../components/headerExperienceSection/HeaderExperienceSection';
import ExperienceTimeline from '../../components/experienceTimeline/ExperienceTimeline';
import Footer from '../../components/footer/Footer';

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
      <HeaderExperienceSection />
      <TrainingTimeline />
      <ExperienceTimeline />
      <Footer />
    </div>
  );
};

export default ExperiencePage;
