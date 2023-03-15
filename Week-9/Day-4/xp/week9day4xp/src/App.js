import './App.css';
import Search from './components/Search';
import Searched from './components/Searched';
import Beach from './components/Beach';
import Mountain from './components/Mountain';
import Food from './components/Food';

import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Search />

      <Routes >
        <Route path='/searched' element={<Searched />}/>
        <Route path='/beach' element={<Beach />}/>
        <Route path='/mountain' element={<Mountain />}/>
        <Route path='/food' element={<Food />}/>
      </Routes>


    </>
  );
}

export default App;