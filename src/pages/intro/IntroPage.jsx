import React, { useEffect, useRef, useState } from "react";
import "./IntroPage.scss";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const data = "Welcome";
  const navigate = useNavigate();
  const [transitionActive, setTransitionActive] = useState(false);

  const textTitleArray = data.split("");
  const letterItems = useRef([]);
  const timeouts = useRef([]);

  useEffect(() => {
    const executeAnimation = () => {
      setTransitionActive(true);
      letterItems.current.forEach((item, index) => {
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

              if (index === textTitleArray.length - 1) {
                timeouts.current.push(
                  setTimeout(() => {
                    navigate("/home");
                  }, index * 160 + 250)
                );
              }
            }, index * 160 + 4000)
          );
        }
      });
    };

    executeAnimation();
  }, [textTitleArray.length, navigate]);

  const handleScreenClick = () => {
    timeouts.current.forEach((timeout) => clearTimeout(timeout));
    navigate("/home");
  };

  return (
    <div className="intro-page" onClick={handleScreenClick}>
      <div className={`background ${transitionActive ? "active" : ""}`}></div>
      <div className="container-title">
        <ul>
          {textTitleArray.map((item, index) => (
            <li
              key={index}
              ref={(el) => (letterItems.current[index] = el)}
              style={{
                transform: `translateY(-1400%) rotate(${
                  Math.floor(Math.random() * 1442) - 720
                }deg)`,
                fontSize: `${88 / data.length}vw`,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntroPage;
