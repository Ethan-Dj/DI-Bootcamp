import React from 'react'

class Car extends React.Component{
    constructor(){
        super()
        this.state = {
            color: 'red',
            brand: 'Ford'
        }
    }

    render(){
        return(
            <>
                <h1>This is {this.state.brand}</h1>
                <h2>This car is {this.state.color}</h2>
            </>
        )
    }
}

export default Car