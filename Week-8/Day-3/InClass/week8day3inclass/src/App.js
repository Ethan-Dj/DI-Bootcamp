import './App.css';
import User from './components/User';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      fullList:[],
      filtered: []
    }
  }

  show = () => {
      const valIn = document.getElementById("here").value.toLowerCase()
      const values = this.state.fullList.filter(item => {
        return item.name.toLowerCase().includes(valIn)
      })
      this.setState({filtered: values})
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({fullList: data})
    })
  }

  
  
  render(){
    return (
      <>
      <input type="text" placeholder='Search User' onChange={this.show} id="here"/>
      <button onClick={this.show}>Get Data</button>
      {
        this.state.filtered.map((item,index) =>{
          return (
            <User key={index} name={item.name} email={item.email}/>
          )
        })
      }
      </>
    );
  }
  
}

export default App;
