import IntroPage from '../pages/Intro/IntroPage';
import PortfolioPage from '../pages/Portfolio/PortfolioPage';
import ExperiencePage from '../pages/Experience/ExperiencePage';
import AboutMePage from './../pages/AboutMe/AboutMePage';
import TransitionPage from '../pages/Transition/TransitionPage';
import NotFoundPage from './../pages/NotFound/NotFoundPage';
import PatchNotesPage from '../pages/PatchNotes/PatchNotesPage';
import PrivacyPage from '../pages/Privacy/PrivacyPage';

export const routeConfig = [
  { path: '/', component: IntroPage },
  { path: '/about-me', component: AboutMePage },
  { path: '/experience', component: ExperiencePage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/transition', component: TransitionPage },
  { path: '/patch-notes', component: PatchNotesPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/*', component: NotFoundPage },
];
