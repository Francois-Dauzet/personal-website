import React, { useEffect, useRef, useState } from 'react';
import './IntroPage.scss';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const TitleData = ' Welcome';
  const subtitleData = ' in.my.website';
  const navigate = useNavigate();
  const [transitionActive, setTransitionActive] = useState(false);

  const textTitleArray = TitleData.split('');
  const textSubtitleArray = subtitleData.split('');
  const titleLetterItems = useRef([]);
  const subtitleLetterItems = useRef([]);
  const timeouts = useRef([]);

  useEffect(() => {
    const executeTitleAnimation = () => {
      setTransitionActive(true);
      titleLetterItems.current.forEach((item, index) => {
        if (item) {
          timeouts.current.push(
            setTimeout(() => {
              item.style.transform = `translateY(0)`;
            }, index * 160)
          );
          timeouts.current.push(
            setTimeout(() => {
              item.style.textShadow = `16px 16px  #fff`;
            }, index * 160 + 500)
          );
          timeouts.current.push(
            setTimeout(() => {
              item.style.textShadow = `32px 32px 64px #fff0`;
            }, index * 160 + 3000)
          );
          timeouts.current.push(
            setTimeout(() => {
              item.style.transform = `translateY(+1400%) rotate(${
                Math.floor(Math.random() * 2884) - 1440
              }deg)`;
            }, index * 160 + 4000)
          );
        }
      });
    };
    executeTitleAnimation();

    const executeSubtitleAnimation = () => {
      setTransitionActive(true);
      subtitleLetterItems.current.forEach((item, index) => {
        if (item) {
          timeouts.current.push(
            setTimeout(() => {
              item.style.transform = `translateY(0)`;
            }, index * 160)
          );
          timeouts.current.push(
            setTimeout(() => {
              item.style.transform = `translateY(2000%) rotate(${
                Math.floor(Math.random() * 2884) - 1440
              }deg)`;

              if (index === textSubtitleArray.length - 1) {
                timeouts.current.push(
                  setTimeout(() => {
                    navigate('/about-me');
                  }, index * 100)
                );
              }
            }, index * 160 + 4000)
          );
        }
      });
    };

    executeSubtitleAnimation();
  }, [textSubtitleArray.length, navigate]);

  const handleScreenClick = () => {
    timeouts.current.forEach((timeout) => clearTimeout(timeout));
    navigate('/about-me');
  };

  return (
    <div className="container-intro-page" onClick={handleScreenClick}>
      <div className={`background ${transitionActive ? 'active' : ''}`}></div>
      <div className="container-title">
        <ul translate="no">
          {textTitleArray.map((item, index) => (
            <li
              key={index}
              ref={(el) => (titleLetterItems.current[index] = el)}
              style={{
                transform: `translateY(-1400%) rotate(${
                  Math.floor(Math.random() * 1442) - 720
                }deg)`,
                fontSize: `${88 / TitleData.length}vw`,
              }}
            >
              {item === '.' ? '\u200B \u200B' : item}
            </li>
          ))}
        </ul>
        <ul translate="no">
          {textSubtitleArray.map((item, index) => (
            <li
              key={index}
              ref={(el) => (subtitleLetterItems.current[index] = el)}
              style={{
                transform: `translateY(-2200%) rotate(${
                  Math.floor(Math.random() * 1442) - 720
                }deg)`,
                fontSize: `${66 / subtitleData.length}vw`,
              }}
            >
              {item === '.' ? '\u200B \u200B' : item}
            </li>
          ))}
        </ul>
        <span translate="no" className="text-stop-animation">
          Click to stop the animation
        </span>
      </div>
    </div>
  );
};

export default IntroPage;
