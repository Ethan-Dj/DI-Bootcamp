import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import List from './components/List'
import {Routes, Route, Link} from 'react-router-dom'
import ListItem from './components/ListItem';

function App() {
  return (
    <>
    <h1 style={{backgroundColor: 'blue'}}>This is the NavBar</h1>

    <Routes>
      <Route path='/' element={<><Search/><List /></>} />
      <Route path='/item_id/:id' element={<ListItem/>} />
    </Routes>
    </>
  )
}

export default App;
