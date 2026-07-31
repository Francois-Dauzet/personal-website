import React, { useEffect, useState } from 'react';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';
import FormContact from '../formContact/FormContact';

//* Styles
import './HeaderPortfolioSection.scss';
const HeaderPortfolioSection = () => {
  const [showFormContact, setShowFormContact] = useState(false);

  useEffect(() => {
    /*
     * vertical parallax effect
     */
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const containerHeaderSection = document.querySelector(
        '.container-header-portfolio-section'
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showFormContact]);

  return (
    <header>
      <div className="container-header-portfolio-section">
        <div className="background">
          <h1>Découvrir mes réalisations</h1>
          <p>
            Un aperçu synthétique de mes projets, travaux et accomplissements.
          </p>
          <p>
            Une immersion dans un univers professionnel où convergent créativité, innovation et passion.
          </p>
          <p>
            N'hésitez pas à me contacter pour toute question ou opportunité de collaboration !
          </p>

          <div className="container-contact-button">
            <div className="contact-button">
              Me contacter
            </div>
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
export default HeaderPortfolioSection;
