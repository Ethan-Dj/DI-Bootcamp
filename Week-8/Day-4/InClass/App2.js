import React from "react";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return(
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/c'>Contact</Link>
      {/* same as an anchor tag */}
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <>
        <About/>
        <Contact/>
        {/* renders both about and contact in that order */}
        </>
        }/>
        <Route path='/c' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App