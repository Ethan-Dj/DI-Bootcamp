import './App.css';
import reducer from './reducers/index'
import { connect } from 'react-redux';
import Info from './components/MovieInfo'

import List from './components/MovieList';

function App(props) {
  console.log(props.films)
  return (
    <>
    <List />
    <Info />
    </>
  );
}


export default connect(null, null)(App);
