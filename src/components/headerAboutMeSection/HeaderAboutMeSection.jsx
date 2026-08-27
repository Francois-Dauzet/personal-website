import React, { useEffect, useState } from 'react';
import imgProfilePath from '../../assets/images/profile.png';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';
import FormContact from '../formContact/FormContact';
import pdfPath from '../../assets/cv_francois_dauzet_v1.pdf';

//* Styles
import './HeaderAboutMeSection.scss';
const HeaderAboutMeSection = () => {
  const [showFormContact, setShowFormContact] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    /*
     * vertical parallax effect
     */
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const containerHeaderSection = document.querySelector(
        '.container-header-section'
      );
      if (containerHeaderSection) {
        containerHeaderSection.style.backgroundPositionY = scrollPos / 2 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    /*
     * Modal form contact
     */
    const contactButton = document.getElementsByClassName('contact-button')[0];
    const closingCross =
      document.getElementsByClassName('icon-closing-cross')[0];
    const modalContainer = document.getElementById('modal-container');

    // Open form contact
    contactButton.addEventListener('click', function () {
      modalContainer.removeAttribute('class');
      modalContainer.classList.add('contact-button');
      document.body.classList.add('modal-active');
      setShowFormContact(!showFormContact);
    });

    // Close form contact by background click
    modalContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('modal-background')) {
        this.classList.add('out');
        document.body.classList.remove('modal-active');
        setShowFormContact(false);
      }
    });

    // Close form contact by closing cross click
    closingCross.addEventListener('click', function () {
      modalContainer.classList.add('out');
      document.body.classList.remove('modal-active');
      setShowFormContact(false);
    });

    // Block scroll if form contact open
    if (showFormContact) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    /*
     * calculate age
     */
    function calculateAge(birthday) {
      const diff = Date.now() - new Date(birthday).getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const calculatedAge = calculateAge('1991-10-03');

    setAge(calculatedAge);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showFormContact]);

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.setAttribute('download', 'cv_francois_dauzet_v1.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header>
      <div className="container-header-section">
        <div className="container-left">
          <h3 translate="no">François Dauzet</h3>
          <div className="container-image">
            <img src={imgProfilePath} alt="profile picture" />
          </div>
          <div className="container-social-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/fran%C3%A7ois-dauzet-413243226/"
            >
              <img src={iconLinkedinPath} alt="linkedin" />
            </a>
            <a target="_blank" href="https://github.com/Francois-Dauzet">
              <img src={iconGithubPath} alt="github" />
            </a>
            <a target="_blank" href="https://gitlab.com/Francois-Dauzet">
              <img src={iconGitlabPath} alt="gitlab" />
            </a>
          </div>
        </div>
        <div className="container-right">
          <div className="container-text">
            <h1>
              Développeur Web & Mobile | DevOps
            </h1>
            <p>
              Âgé de {age} ans, curieux, autodidacte et rigoureux, avec un bagage technique
              varié incluant le montage audio/vidéo, la production musicale, le mapping/modding,
              la maintenance informatique et divers domaines de l'IT.
            </p>
            <p>
              Passionné par le secteur, l'apprentissage continu est au cœur de la démarche,
              notamment à travers une veille constante sur les nouvelles technologies,
              l'administration système et les méthodologies DevOps.
            </p>
            <p>
              Autonome, adaptable et appréciant le travail en équipe, avec une volonté permanente
              d'innover et d'appliquer les principes DevOps pour optimiser les processus de développement
              et de déploiement.
            </p>
            <div className="container-contact-button">
              <div className="contact-button">
                Me contacter
              </div>
              <div
                className="pdf-button"
                onClick={handleDownloadPdf}
              >
                Télécharger PDF
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <FormContact />
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderAboutMeSection;
