import React, { useEffect } from 'react';
import './AboutMePage.scss';
import HeaderAboutMeSection from '../../components/headerAboutMeSection/HeaderAboutMeSection';
import SkillCardsSection from '../../components/skillCardsSection/SkillCardsSection';
import SkillsSection from '../../components/skillsSection/SkillsSection';
import Footer from '../../components/footer/Footer';

const AboutMePage = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-about-me-page">
      <div className={'container-transition active'}></div>
      <HeaderAboutMeSection />
      <SkillCardsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default AboutMePage;
