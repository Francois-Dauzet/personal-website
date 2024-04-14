import React, { useEffect } from "react";
import "./SkillsPage.scss";

const SkillsPage = () => {
  useEffect(() => {
    const transition = document.querySelector(".container-transition");
    setTimeout(() => {
      transition.classList.remove("active");
    }, 100);
  }, []);

  return (
    <div className="skills-page">
      <div className={"container-transition active"}></div>
      <h1>SkillsPage</h1>
    </div>
  );
};

export default SkillsPage;
