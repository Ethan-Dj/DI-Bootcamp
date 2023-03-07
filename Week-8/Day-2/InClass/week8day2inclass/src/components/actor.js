import React from 'react'

class Actor extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "Jack",
            lastName: "Smith",
            url:  "https://picsum.photos/200/300"
        }
    }

        render(){
            return(
                <>
                    <h1>{this.state.firstName}</h1>
                    <h2>{this.state.lastName}</h2>
                    <img src={this.state.url} />
                </>
            )
        }
}


export default Actor