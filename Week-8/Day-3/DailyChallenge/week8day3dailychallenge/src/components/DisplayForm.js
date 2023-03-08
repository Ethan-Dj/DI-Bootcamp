import React from "react";

function DisplayForm(props){
    return(
        <>
        <h1>{props.firstName}</h1>
        <h1>{props.lastName}</h1>
        <h1>{props.age}</h1>
        <h1>{props.gender}</h1>
        <h1>{props.destination}</h1>
        </>
    )
    
}

export default DisplayForm