import React from 'react'

class Buttons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }


    counting = (id) => {
        let {languages} = this.state
        let which = languages[id]
        this.setState(languages[id] = {name: which.name,votes: which.votes += 1 })
    }

    render(){
        const {languages} = this.state
        return(
            <>
            {
            languages.map((item,index) => (
                <>
                <h1>{item.name}</h1>
                <h2>{item.votes}</h2>
                <button onClick ={() => this.counting(index)}>Here</button>
                </>
            ))
            }
            </>
        )

    }
}

export default Buttons

