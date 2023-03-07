import React from 'react'

class Sunrise extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            country : 'Israel',
            city : 'Tel Aviv'
        }
    }

    componentDidMount(){
    //didMount instance is being created
    // and inserted to dom
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
        .then(data => data.json())
        .then(res => this.setState({hourSunrise: res.results.sunrise}))
        //add hourSunrise to the state 
        // add anything to state 
        .catch(err => console.log(err))
    }

    render(){
        let {country, city, hourSunrise} = this.state
        return (
            <>
            <h1>In {country}</h1>
            <p>{city}</p>
            <p>{hourSunrise}</p>
            </>
        )

    }
}

export default Sunrise