import './App.css';
import Car from './components/car'
import Actor from './components/actor'
import Plane from './components/planes'
import Sunrise from './components/sunrise';

function App() {
  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]
  return (
    <div className="App">
      <Car colors = {carColors}/>
      <Actor />
      <Plane />
      <Sunrise/>
    </div>
  );
}

export default App;
