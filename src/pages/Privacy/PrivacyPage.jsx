import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import PatchsSection from '../../components/patchsSection/PatchsSection';
import HeaderPatchNotesSection from '../../components/headerPatchNotesSection/HeaderPatchNotesSection';
import './PrivacyPage.scss';
import HeaderPrivacySection from '../../components/headerPrivacySection/HeaderPrivacySection';
import PrivacySection from '../../components/privacySection/PrivacySection';

const PrivacyPage = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-privacy-page">
      <div className={'container-transition'}></div>
      <HeaderPrivacySection />
      <PrivacySection />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
