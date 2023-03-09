import './App.css';
import Display from './components/Display';
import React from 'react'
import Nav from './components/Nav';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0,
      highScore: 0
    }
  }

  take = (data) => {
    if (data == 1){
      this.setState({score: this.state.score + 1})
    } else {
      if (this.state.score > this.state.highScore){
         this.setState({highScore: this.state.score})
      }
      this.setState({score: 0})
    }
  }

  render(){
    return (
      <>
      <Nav highScore = {this.state.highScore} currentScore = {this.state.score}/>
      <Display data={this.take}/>
      </>
    )
  }
  
}

export default App;
