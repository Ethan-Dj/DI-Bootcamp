import React from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favouriteColor: "red",
      message1: "",
      show: true,
    };
  }

  child = () => {
    if (this.state.show === true) {
      return <h1>Hello World</h1>;
    }
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.favouriteColor !== this.state.favouriteColor) {
      return `Color changed from ${prevState.favouriteColor} to ${this.state.favouriteColor}`;
    }
    return null;
  }
//   this code only returns a value to snapshot that can only be accessed by other react functions 
//  getsnaphots before cannot be used to update a message otherwise it will create an infinite loop
// this is because this.setstate triggers an update!!



// we only use snapshot in other react functions, we just have to call the 3 variables 

  componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(() => {
        this.setState({ favouriteColor: "yellow" });
      }, 2000);
    if (snapshot) {
      this.setState({ message1: snapshot });
    }
  }


  // shouldComponentUpdate = () => {
  //     return false
  // }

  changeColor = () => {
    this.setState({ favouriteColor: "blue" });
  };

  render() {
    return (
      <>
        <this.child />
        <button onClick={() => this.setState({ show: false })}>Hide</button>
        <h1>My fav color is {this.state.favouriteColor}</h1>
        <button onClick={this.changeColor}>Change Color to blue</button>
        <h5>{this.state.message1}</h5>
      </>
    );
  }
}

export default Color;
