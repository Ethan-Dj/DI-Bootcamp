import './App.css';

import { connect } from 'react-redux';
import React from 'react';


// for function components we need to call props
// otherwise props won't be defined 
// for class components, dont have to 
class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  
  render(){
    return (
      <>
      <button onClick={() => this.props.dispatch({type : "ADD_ONE"})}>+1</button>
      <h1>Counter: {this.props.counter}</h1>
      <button onClick={() => this.props.dispatch({type : "MINUS_ONE"})}>-1</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}

export default connect(mapStateToProps)(App);
// export default App;

