import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddItem from './components/AddItem';
import List from './components/List';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  addHere = (item) => {
    let current = this.state.list
    current.push(item)
    // this.state.list.push(item)
    this.setState({list: [...current]})
    console.log("outside + " + this.state.list)
  }

  delete = (id) =>{
    this.state.list.splice(id,1)
    this.setState({list : this.state.list})
    console.log("outside + " + this.state.list)
  }

  render(){
    return(
      <>
      <AddItem data = {this.addHere} list={this.state.list}/>
      <List list={this.state.list} return ={this.delete} />
      </>
    )
  }
}

export default App;