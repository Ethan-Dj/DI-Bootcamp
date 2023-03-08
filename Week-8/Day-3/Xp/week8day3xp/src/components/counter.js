import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    addCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    render(){
        if (this.state.count > 5){
            throw Error("Crash")
        }
        return(
            <>
            <button onClick={this.addCounter}>Add</button>
            <h1>{this.state.count}</h1>
            </>
        )
    }
}

export default Counter