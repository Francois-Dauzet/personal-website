import React, { useEffect } from 'react';
import imgProfilePath from '../../assets/images/profile.png';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';

//* Styles

import './HeaderSection.scss';
const HeaderSection = () => {
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
     * modal function
     */
    const button = document.getElementsByClassName('contact-button')[0];
    const modalContainer = document.getElementById('modal-container');

    button.addEventListener('click', function () {
      modalContainer.removeAttribute('class');
      modalContainer.classList.add('contact-button');
      document.body.classList.add('modal-active');
    });

    modalContainer.addEventListener('click', function () {
      this.classList.add('out');
      document.body.classList.remove('modal-active');
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
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
              Curieux, autodidacte et rigoureux, avec une solide expérience en
              montage audio/vidéo, MAO, mapping & modding, maintenance
              informatique, et divers domaines de l'informatique.
            </p>
            <p>
              En tant que développeur web junior, l'accent est mis sur
              l'enrichissement autonome des compétences.
            </p>
            <p>
              Le temps libre est consacré à l'apprentissage de nouvelles
              technologies.
            </p>
            <p>
              Adaptable, capable de travailler aussi bien seul qu'en équipe, et
              toujours en quête d'innovation pour améliorer les projets.
            </p>
            <div className="container-contact-button">
              <div translate="no" className="contact-button">
                Contact me
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <h2>Contact Form</h2>
            <p>content</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderSection;
