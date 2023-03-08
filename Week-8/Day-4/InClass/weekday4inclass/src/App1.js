import './App.css';
import React from 'react'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      email: '', //allows us to use set state and  access
      username: '',
      message: '',
      color:'',
      onoff:''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.email, this.state.username, 
      this.state.message, this.state.color, this.state.onoff)
  }
  
// this.handleChange = this.handleChange.bind(this)
// this explicitly says that we this.handleChange is part of this instance

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.targer.value
    this.setState({[e.target.name]:e.target.value})
  }
// use square brackets to set dynamic key for object
// takes the name that we set in the input 

  render(){
    return(
      <>
      <h1>Forms</h1>
      <form onSubmit={this.handleSubmit}>
      {/* Calls function when submit pressed */}

      <input type='text' placeholder='email' name="email" onChange ={this.handleChange}/>
      <input type='text' placeholder='username' name="username" onChange ={this.handleChange}/>
      <textarea onChange={this.handleChange} name="message"/>

      <select onChange={this.handleChange} name='color'>
        <option value="">Please...</option>
      {/* above creates empty value, with validation, forces user to input */}
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        {/* For options, the value is what we take, same as
        input of text etc */}
      </select>

      On/Off<input type='checkbox' name='onoff' onChange={this.handleChange}/>

      
      {/* Name must be same as on the this.state */}
      {/* Onchange is when there is a change in what is in the form */}
      <input type="submit" value="Submit" />

      </form>
      </>
    )
  }
}

export default App1;
