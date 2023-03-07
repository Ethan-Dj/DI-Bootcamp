import React from 'react'

function Test (props){
    return(
        props.array.map((item,index) => (
            <>
            <ul>
            <h1>{item}</h1>
            <h1>{index}</h1>
            </ul>
            </>
        ))
    )
}

export default Test