import React from "react";

class Events extends React.Component{
    constructor(){
        super()
        this.state ={
            itToggleOn : true,
            result: "on"
        }
    }

    clickMe = () => {
        alert("I was clicked")
    }

    handleKeyPress = () => {
        alert(document.getElementById("here").value)

    }

    switch = () => {
        if (this.state.itToggleOn  === true){
            this.setState({result: "off"})
            this.setState({itToggleOn : false})
        } else {
            this.setState({result:"on"})
            this.setState({itToggleOn : true})
        }
    }



    render(){
        return(
            <>
            <button onClick={this.clickMe}>Click Me</button>
            <input onKeyPress={this.handleKeyPress} id="here" />
            <button onClick={this.switch}>{this.state.result}</button>
            </>
        )
    }
}

export default Events