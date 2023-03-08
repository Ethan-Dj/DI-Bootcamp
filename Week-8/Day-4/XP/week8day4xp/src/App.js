import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Shop from './components/Shop';
import Profile from './components/Profile';
import Home from './components/Home';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import React from 'react';


// ex 4
class App extends React.Component{
  constructor(){
    super()
  }

  ex4 = async () => {
    const response = await fetch('https://webhook.site/3c2ef495-261a-4e6d-b645-752ec3c3248d',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27}
      )
    })
    const resJson = await response.json()
    console.log(resJson)
  }


  render(){
    return(
      <>
      <button onClick={this.ex4}>send</button>

      </>
    )
  }
}

export default App;

// // ex 3
// function App() {
//   return (
//     <>
//     <Example1 />
//     </>
//   );
// }

// export default App;

// ex 2
// function App() {
//   return (
//     <>
//     <PostList />
//     </>
//   );
// }

// // ex 1
// function App() {
//   return (
//     <>
      
//       <BrowserRouter>
//         <nav>
//           <Link to='/'>Home</Link>
//           <Link to='/profile'>Profile</Link>
//           <Link to='/shop'>Shop</Link>
//         </nav>

//         <Routes>
          
//             <Route path='/' element={
//             <ErrorBoundary>
//               <Home />
//             </ErrorBoundary>
//             }/>
          
//             <Route path='/profile' element={
//             <ErrorBoundary>
//               <Profile />
//             </ErrorBoundary>
//             }/>

//             <Route path='/shop' element={
//             <ErrorBoundary>
//               <Shop />
//             </ErrorBoundary>
//             }/>
          
//         </Routes>
//         </BrowserRouter>
      
    
//     </>
//   );
// }


