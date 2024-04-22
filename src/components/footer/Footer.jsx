import React from 'react';
import { useNavigate } from 'react-router-dom';
import packageJson from '../../../package.json';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';

//* Styles
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();

  const updateNavigate = () => {
    navigate('/patch-notes');
  };

  return (
    <footer>
      <div className="container-footer">
        <h5 translate="no">francois-d.com</h5>
        <p translate="no" className="version">
          {packageJson.version}
        </p>
        <ul>
          <li translate="no" onClick={() => updateNavigate()}>
            Patch Notes
          </li>
        </ul>
        <div className="line"></div>
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
        <p translate="no">Copyright © 2024 François Dauzet</p>
      </div>
    </footer>
  );
};

export default Footer;
