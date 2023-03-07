import React from 'react'

class Car extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            color: 'red',
            brand: 'Ford',
            model: 'Mustang',
            year: 1964
        }
    }   

    // changeColor = () => {
    //     this.setState({color: 'blue'})
    //     // setState method, contains val to update state
    //     // this changes the color to blue in the this.state
    // }

    changeRandomColor = () => {
        let {colors} = this.props
        let randomColor = colors[Math.floor(Math.random()*colors.length)]
        this.setState({color : randomColor})
    }

    render(){
        return (
            <>
                <h1>My {this.state.brand} </h1>
                <p>
                    It is a {this.state.color},
                    {this.state.model}
                    from {this.state.year}
                </p>
                <button type='button' 
                onClick= {this.changeRandomColor}
                >Change</button>
            </>
        )
    }
}

export default Car