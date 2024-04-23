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
    <section>
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
          <h1 translate="no">Patch Notes</h1>
          <p>
            On this page you will find a complete summary of all modifications
            made to the site.
          </p>
          <p>
            It is a central reference point where every adjustment, every
            addition and each update are logged, providing a clear view clear
            overview of the developments made.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeaderPatchNotesSection;
