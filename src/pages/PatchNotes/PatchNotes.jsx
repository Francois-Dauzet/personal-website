import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import PatchsSection from '../../components/patchsSection/PatchsSection';
import HeaderPatchNotesSection from '../../components/headerPatchNotesSection/HeaderPatchNotesSection';
import './PatchNotes.scss';

const PatchNotes = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-about-me-page">
      <div className={'container-transition'}></div>
      <HeaderPatchNotesSection />
      <PatchsSection />
      <Footer />
    </div>
  );
};

export default PatchNotes;
