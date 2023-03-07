import React from 'react'

class Garage extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <>
            <h3>This garage is {this.props.size}</h3>
            </>
        )
    }
}

export default Garage