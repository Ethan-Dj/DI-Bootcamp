
import React from 'react'
import './App.css';
import Child from './components/Child';

import {connect} from 'react-redux'
import {changePropOne, switchProps} from './redux/actions'
import ChangeByClick from './components/ChangeByClick';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      property_one : 'text one'
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({property_one: e.target.value})
  }

  render(){
    return(
      <>
      <h1>{this.state.property_one}</h1>
      <h1>{this.props.a}</h1>
      <Child />
      <h1>Inputs</h1>
      <input type="text" onChange={this.handleChange}/>
      <input type="text" onChange = {this.props.changePropA} placeholder='Change Store' />
      <ChangeByClick />
      </>
    )
  }
}

//state from thing returned from reducer
const mapStateToProps = (state) => {
  return {
    a: state.property_one
    // property one from reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePropA: (e) => dispatch(changePropOne(e.target.value))
    // from here we go the action which we imported 
    // sayes the action type is prop_one and payload
    // ie the value is e.target.value 
    // this then checked by reduced and changes made
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connnects app to the store