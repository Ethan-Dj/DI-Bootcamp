import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

import {useParams} from 'react-router-dom'

const ListItem = (props) => {
    const params = useParams()
    console.log(params)
    // param in this case is a pre-defined word
    // use params instead

    const [data1, setData1] = useState([])
    const [load1, load1Set] = useState(false)
    

    useEffect(()=>{
        load1Set(true)
        fetch(`https://www.omdbapi.com/?apikey=d1b6952&i=${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            load1Set(false)
            setData1(data)
        })
        },[])

    return(
        load1 ? <h1> loading</h1>:
        <>
           <h2>Title: {data1.Title}</h2>
           <p>Actors: {data1.Actors}</p>
           <p>Country: {data1.Country}</p>
           <p>Director: {data1.Director}</p>
           <p>Plot: {data1.Plot}</p>
           <img src={data1.Poster} />
           <Link to='/'>Back to Search</Link>

        </>
    )
}

export default ListItem