import './App.css';
import React from 'react'
import { add, minus } from './actions'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      age: ""
    }
    }

  render(){
    return (
      <>
        <h1>Age: {this.props.age}</h1>
        <button onClick={() => this.props.add()}>Age Up</button>
        <button onClick={() => this.props.minus()}>Age Down</button>
      </>
    )}
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: state => dispatch(add(state)),
    minus: state => dispatch(minus(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
