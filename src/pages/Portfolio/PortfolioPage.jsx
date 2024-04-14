import React, { useEffect } from "react";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  useEffect(() => {
    const transition = document.querySelector(".container-transition");
    setTimeout(() => {
      transition.classList.remove("active");
    }, 100);
  }, []);

  return (
    <div className="projects-page">
      <div className={"container-transition active"}></div>
      <h1>PortfolioPage</h1>
    </div>
  );
};

export default PortfolioPage;
