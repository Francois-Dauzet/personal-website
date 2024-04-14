import React, { useEffect } from "react";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  useEffect(() => {
    const transition = document.querySelector(".container-transition");
    setTimeout(() => {
      transition.classList.remove("active");
    }, 100);
  }, []);

  return (
    <div className="projects-page">
      <div className={"container-transition active"}></div>
      <h1>ProjectsPage</h1>
    </div>
  );
};

export default ProjectsPage;
