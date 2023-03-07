
import './App.css';
import Car from './components/car'
import Garage from './components/garage';
import Events from './components/events';
import Phone from './components/phone';
import Color from './components/Color';

function App() {
  return (
    <>
    <Car />
    <Garage size="small"/>
    <Events />
    <Phone />
    <Color />
    </>
  );
}

export default App;
