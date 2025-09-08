import { useNavigate } from 'react-router-dom';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';
import { patchsData } from '../../data/patchsData';

//* Styles
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const patchNotesNavigate = () => {
    navigate('/patch-notes');
  };
  const privacyNavigate = () => {
    navigate('/privacy');
  };

  return (
    <footer>
      <div className="container-footer">
        <h5 translate="no">francois-d.com</h5>
        <p translate="no" className="version">
          {patchsData[0].version}
        </p>
        <ul>
          <li translate="no" onClick={() => patchNotesNavigate()}>
            Patch Notes
          </li>
          <li translate="no" onClick={() => privacyNavigate()}>
            Privacy Policy
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
        <div translate="no">
          <WebsiteCarbonBadge dark={false} co2="0.18" percentage="82" />
        </div>
        <p translate="no">Copyright © {currentYear} François Dauzet</p>
      </div>
    </footer>
  );
};

export default Footer;
