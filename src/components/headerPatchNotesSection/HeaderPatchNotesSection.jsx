import React, { useEffect } from 'react';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';

//* Styles
import './HeaderPatchNotesSection.scss';
const HeaderPatchNotesSection = () => {
  useEffect(() => {
    /*
     * vertical parallax effect
     */
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const containerHeaderSection = document.querySelector(
        '.container-header-patch-notes-section'
      );
      if (containerHeaderSection) {
        containerHeaderSection.style.backgroundPositionY = scrollPos / 2 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container-header-patch-notes-section">
        <div className="background">
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
          <h1>Notes de mise à jour</h1>
          <p>
            Vous trouverez sur cette page le récapitulatif complet de toutes les modifications apportées au site.
          </p>
          <p>
            Chaque ajustement, ajout ou mise à jour y est consigné afin d'offrir une vue d'ensemble claire des évolutions réalisées.
          </p>
        </div>
      </div>
    </header>
  );
};
export default HeaderPatchNotesSection;
