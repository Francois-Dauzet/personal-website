import React, { useEffect } from 'react';
import './PortfolioPage.scss';
import HeaderPortfolioSection from '../../components/headerPortfolioSection/HeaderPortfolioSection';
import ProjectsSection from '../../components/projectsSection/ProjectsSection';
import Footer from '../../components/footer/Footer';

const PortfolioPage = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-portfolio-page">
      <div className={'container-transition active'}></div>
      <HeaderPortfolioSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
