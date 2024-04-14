import React, { useEffect } from "react";
import "./HomePage.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const transition = document.querySelector(".container-transition");
    setTimeout(() => {
      transition.classList.remove("active");
    }, 100);
  }, []);

  return (
    <div className="home-page">
      <div className={"container-transition active"}></div>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
