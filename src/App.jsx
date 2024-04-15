import './styles/App.scss';
import NavMenu from './components/navMenu/NavMenu';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <nav>
        <NavMenu />
      </nav>
      <Router />
    </div>
  );
}

export default App;
