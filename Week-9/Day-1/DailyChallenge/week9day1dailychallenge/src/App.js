import './App.css';
import reducer from './reducers/index'
import { connect } from 'react-redux';
import MovieInfo from './components/MovieInfo'

import MovieList from './components/MovieList';

function App(props) {
  console.log(props.films)
  return (
    <>
    <MovieList />
    <MovieInfo />
    </>
  );
}


export default connect(null, null)(App);
