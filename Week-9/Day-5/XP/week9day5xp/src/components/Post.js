import React from "react";

import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { parsePath, useParams } from "react-router-dom";
import { remove } from "../reducers/actions";
import { useNavigate } from "react-router-dom";

const Post = (props) => {

    const dispatch=useDispatch()
    const param = useParams()
    const location = param.id
    const navigate = useNavigate()

    const obj = useSelector(state => state.list)
    
    return (
      <>
        <h3>{obj[location].title}</h3>
        <p>{obj[location].body}</p>
        <button onClick={(e)=> {
            e.preventDefault()
            dispatch(remove(location))
            navigate('/')

        }}>Delete</button>
      </>
    );
  }


export default Post;