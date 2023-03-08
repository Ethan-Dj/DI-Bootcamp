

import React, {useState, useEffect } from "react"
import posts from './data.json'


const PostList = () =>{
    console.log(posts)
    // this is a hook 
    // initialise empty array data with data and useState
    // initialise func SetData that can set the data of data 

    

    return(
        <>
        {posts.map(elem => {
            return(
            <>
            <h3>{elem.title}</h3>
            <h3>{elem.content}</h3>
            </>
            )
        })}
        </>
    )
}

export default PostList