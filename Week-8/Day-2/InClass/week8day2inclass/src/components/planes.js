import React from 'react'

class Plane extends React.Component{
    constructor(){
        super()
        this.state = {
            aircraft : "Boeing"
        }
    }

    render(){
        return(
            <>
            <h4>{this.state.aircraft}</h4>
            </>
        )
    }
}

export default Plane