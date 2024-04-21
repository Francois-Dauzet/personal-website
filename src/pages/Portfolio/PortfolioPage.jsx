import React, { useEffect } from 'react';
import './PortfolioPage.scss';
import HeaderPortfolioSection from '../../components/headerPortfolioSection/HeaderPortfolioSection';

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
    </div>
  );
};

export default PortfolioPage;
