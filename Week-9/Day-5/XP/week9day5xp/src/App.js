import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/post_id/:id' element={<Post />} />
    </Routes>
    </>
  )
}

export default App;
