import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './UserFavoriteColors'
import ShowTags from './Ex4';
//ignore

function App() {
  const myElement = "I Love JSX!"
  const num = 5 + 5
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <>
      <h1>I do not use JSX</h1>
      <h1>Hello World</h1>
      {myElement}
      <h1>React is {num} times better than JSX</h1>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>


      <Test array={user.favAnimals}></Test>
      
      <ShowTags />
    </>

  );
}

export default App;
