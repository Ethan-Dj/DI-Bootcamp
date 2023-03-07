import React from 'react'
import './Ex4.css'

function ShowTags (){

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return(
        <>
        <h1 style = {style_header}>Hello ex4</h1>
        <p className='para'>Lorem Ipsum para</p>
<a>This is a tag</a>
<form>
    <input type="text" placeholder='Form'></input>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
</form>
        </>
    )
}

export default ShowTags

