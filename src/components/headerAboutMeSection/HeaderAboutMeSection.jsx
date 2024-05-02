import React, { useEffect, useState } from 'react';
import imgProfilePath from '../../assets/images/profile.png';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';
import ContactForm from '../contactForm/ContactForm';
import pdfPath from '../../assets/CV - François Dauzet.pdf';

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
    link.setAttribute('download', 'CV - François Dauzet.pdf');
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
            <h1 translate="no">
              DevOps & Web and Mobile Application Developer
            </h1>
            <p>
              Currently aged {age} years old, I am curious, self-taught, and
              meticulous, with a strong background in audio/video editing, music
              production, mapping and modding, computer maintenance, and various
              IT domains.
            </p>
            <p>
              As a DevOps & Web Developer, the focus is on self-enrichment of
              skills.
            </p>
            <p>
              Free time is dedicated to learning new technologies and delving
              deeper into DevOps and system administration concepts.
            </p>
            <p>
              Adaptable, capable of working both independently and as part of a
              team, always seeking innovation to enhance projects and eager to
              apply DevOps principles to development and deployment tasks.
            </p>
            <div className="container-contact-button">
              <div translate="no" className="contact-button">
                Contact Me
              </div>
              <div
                translate="no"
                className="pdf-button"
                onClick={handleDownloadPdf}
              >
                Download PDF
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <ContactForm />
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderAboutMeSection;
