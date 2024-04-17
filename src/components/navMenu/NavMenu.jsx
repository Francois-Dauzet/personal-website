import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//* Stores
import { useStateStore } from '../../stores/stateStore';

//* Styles
import './NavMenu.scss';

const NavMenu = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clickBlocked, setClickBlocked] = useState(false);
  const burger = document.querySelector('.container-burger');
  const deadZone = document.querySelector('.dead-zone');
  const navigate = useNavigate();
  const { setCurrentPageName, setCurrentPageRoute } = useStateStore();

  const toggleOverlay = (isItemSelected) => {
    if (!clickBlocked) {
      setClickBlocked(true);

      if (overlayActive) {
        burger.classList.remove('active');
        deadZone.classList.remove('active');
        !isItemSelected && window.scrollTo(0, scrollPosition);
        setTimeout(() => {
          setClickBlocked(false);
        }, 800);
      } else {
        burger.classList.add('active');
        deadZone.classList.add('active');
        !isItemSelected && setScrollPosition(window.scrollY);

        setTimeout(() => {
          setClickBlocked(false);
        }, 800);
      }

      setOverlayActive(!overlayActive);
    }
  };

  const handleNavMenu = (name, route) => {
    setCurrentPageName(name);
    setCurrentPageRoute(route);
    toggleOverlay(false);
    navigate('/transition');
  };

  useEffect(() => {
    if (overlayActive) {
      setClickBlocked(true);

      setTimeout(() => {
        setClickBlocked(false);
      }, 800);
    } else {
      setClickBlocked(true);
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        setClickBlocked(false);
      }, 800);
    }
  }, [overlayActive]);

  return (
    <>
      <div className="container-nav-menu">
        <div className="container-button" onClick={() => toggleOverlay(false)}>
          <div className="first-border">
            <div className="second-border">
              <div className="container-burger">
                <div className="item-burger item-burger-1"></div>
                <div className="item-burger item-burger-2"></div>
                <div className="item-burger item-burger-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container-overlay ${overlayActive ? 'active' : ''}`}
        ></div>
        <div
          className={`container-top-line ${overlayActive ? 'active' : ''}`}
        ></div>
        <div
          className={`container-middle-line ${overlayActive ? 'active' : ''}`}
        ></div>
        <div
          className={`container-bottom-line ${overlayActive ? 'active' : ''}`}
        ></div>
        <ul className={`container-list ${overlayActive ? 'active' : ''}`}>
          <li>
            <p>01.</p>
            <h3
              translate="no"
              onClick={() => handleNavMenu(' About.Me', 'about-me')}
            >
              About Me
            </h3>
            <span>Learn more</span>
          </li>
          <li>
            <p>02.</p>
            <h3
              translate="no"
              onClick={() => handleNavMenu(' Experience', 'experience')}
            >
              Experience
            </h3>
            <span>Explore my background</span>
          </li>
          <li>
            <p>03.</p> <div></div>
            <h3
              translate="no"
              onClick={() => handleNavMenu(' Portfolio', 'portfolio')}
            >
              Portfolio
            </h3>
            <span>Discover my work</span>
          </li>
        </ul>
        <div onClick={() => toggleOverlay(false)} className="dead-zone"></div>
      </div>
    </>
  );
};

export default NavMenu;
