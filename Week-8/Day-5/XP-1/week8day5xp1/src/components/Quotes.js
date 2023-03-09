import React from 'react'
import quotes from './QuotesAuthor'
const quotesCopy = [...quotes]
const colors = ["red","yellow","green","pink","blue","violet"]

class Quotes extends React.Component{
    constructor(){
        super()
        this.state={
            authors: '',
            quotes: '',
            color: 'blue'
        }
    }

    randomQuote = () => {
        if (quotesCopy.length > 0){
            const colors1 = Math.round(Math.random()*colors.length)
            const which = Math.round(Math.random()*quotesCopy.length)
            this.setState({authors:quotes[which].author, quotes: quotes[which].quote, color: colors[colors1]})
            quotesCopy.splice(which,1)
            console.log(which)
        } else {
            this.setState({authors:"No more Quotes", quotes: ""})
        }



    }

    render(){
        return(
            <div style={{backgroundColor : this.state.color}}>
            <button onClick={this.randomQuote}>Click Here</button>
            <h1>{this.state.authors}</h1>
            <h2>{this.state.quotes}</h2>
            </div>
        )
    }
}

export default Quotes