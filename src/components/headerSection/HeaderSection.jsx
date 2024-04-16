import React, { useEffect } from 'react';
import imgProfilePath from '../../assets/images/profile.png';

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
      const buttonId = this.getAttribute('id');
      modalContainer.removeAttribute('class');
      modalContainer.classList.add(buttonId);
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
          <div className="container-image">
            <img src={imgProfilePath} alt="" />
          </div>
        </div>
        <div className="container-right">
          <div className="container-text">
            <h1>DevOps & Web and Mobile Application Developer</h1>
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
            <div class="content">
              <div class="buttons">
                {/* one two five six */}
                <div id="five" class="contact-button">
                  Contact me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal-container">
        <div class="modal-background">
          <div class="modal">
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
            <svg
              class="modal-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <rect
                x="0"
                y="0"
                fill="none"
                width="226"
                height="162"
                rx="3"
                ry="3"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeaderSection;
