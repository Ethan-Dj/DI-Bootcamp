import superheroes from './superheroes.json'
import React, { useState, useEffect } from 'react'


const deepCopy = [...superheroes.superheroes]

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array:deepCopy
        }
    }

    order = (index) => {
        if (this.state.array[index].clicked === false){
            this.state.array[index].clicked = true
            this.props.data(1)
        } else {
            this.props.data(0)
            this.state.array.map(item => {
                item.clicked = false
            })
            this.setState({array: this.state.array})
        }


        let j;
        let k;
        for (let i = this.state.array.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = this.state.array[i]
            this.state.array[i] = this.state.array[j]
            this.state.array[j] = k
        }
        this.setState({array:this.state.array})
    }

    render(){
        return(
            <div style={{display:"flex", flexFlow: "wrap"}}>
                {this.state.array.map((item,index) => {
                    return(
                        <>
                        <div style={{border: "2px solid", margin:"50px", padding: "20px"}} key={item.id}>
                            <button id={item.id} onClick={ () => this.order(index)} >
                                <h1>{item.name}</h1>
                                <h2>{item.occupation}</h2>
                                <img style={{width:"100px"}} src={item.image} />
                            </button>
                        </div>
                        </>
                    )
                })}
            </div>
    )}
}

export default Display