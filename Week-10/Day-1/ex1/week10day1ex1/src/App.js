import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Current from './components/Current';
import Results from './components/Results';
import Favourites from './components/Favourites';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Current />
      <Results />
      <Favourites />

    </div>
  );
}

export default App;
