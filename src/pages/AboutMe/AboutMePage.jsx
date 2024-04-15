import React, { useEffect } from 'react';
import './AboutMePage.scss';
import { useTranslation } from 'react-i18next';
import HeaderSection from '../../components/headerSection/HeaderSection';

const AboutMePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-about-me-page">
      <div className={'container-transition active'}></div>
      <HeaderSection />
      <h1>AboutMePage</h1>
    </div>
  );
};

export default AboutMePage;
