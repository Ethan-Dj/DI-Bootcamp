import React from 'react';
import './App.css';
import Form from './components/Form';
import DisplayForm from './components/DisplayForm'



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age:'',
      gender: '',
      destination: '',
      nuts: '',
      dairy: ''
  }
  }

  handleChildState = (data) => {
    this.setState(data)
    console.log(this.state)
  };
// this function sets the state of each


  render() {
    return (
      <>
        <Form pine={this.handleChildState} /> 
        {/* name of thing we get from child, we pass that throuh the funkkk */}
        {/* The data we send back is to here, data is then run through this function */}


        <DisplayForm 
        firstName={this.state.firstName} 
        lastName={this.state.lastName} 
        age={this.state.age} 
        destination={this.state.destination} 
        gender={this.state.gender} 
        />
      </>
    );
  }
}

export default App;
