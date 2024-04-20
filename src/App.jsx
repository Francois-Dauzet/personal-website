import './styles/App.scss';
import NavMenu from './components/navMenu/NavMenu';
import Router from './router/Router';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <nav>
        <NavMenu />
      </nav>
      <Router />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
