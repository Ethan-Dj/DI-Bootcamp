import React from "react";

class Color extends React.Component{
    constructor(){
        super()
        this.state = {
            favouriteColor: "red"
        }
    }

    componentDidMount = () => {
        setTimeout(() =>{
            this.setState({favouriteColor: "yellow"})
        },5000)
        
    }

    changeColor = () => {
        this.setState({favouriteColor: "blue"})
    }

    render(){
        return(
            <>
            <h1>My fav color is {this.state.favouriteColor}</h1>
            <button onClick={this.changeColor}>Change Color to blue</button>
            </>
        )
    }
}

export default Color 