import IntroPage from "../pages/intro/IntroPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import SkillsPage from "../pages/skills/SkillsPage";
import HomePage from "./../pages/home/HomePage";
import TransitionPage from "./../pages/transition/TransitionPage";

export const routeConfig = [
  { path: "/", component: IntroPage },
  { path: "/home", component: HomePage },
  { path: "/skills", component: SkillsPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/transition", component: TransitionPage },
];
