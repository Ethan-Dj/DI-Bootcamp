import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
    <header className='App-Header'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<Product/>} />
        </Routes>
      </header>
    </BrowserRouter>
  )
}

export default App;
