
import { useSelector, useDispatch } from "react-redux"
import { search } from "../reducers/action"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { loading } from "../reducers/action"

const List = (props) => {

    const search1 = useSelector(state => state.search)
    // const load1 = useSelector(state => state.loading)
    const dispatch = useDispatch()
    
    const [array, setArray] = useState([])
    const [load1, load1Set] = useState(false)
    const [first, firstChange] = useState(true)

    useEffect(()=>{
        if (first == false ){
            load1Set(true)
        } else {
            firstChange(false)
        }
        console.log(load1)
        fetch(`https://www.omdbapi.com/?apikey=d1b6952&s=${search1}`)
        .then(res => res.json())
        .then(data => {
            if (data.Response == "True"){
                load1Set(false)
                setArray(data.Search)
            }
        })
        },[search1])

    return(
        load1 ? <h1> loading</h1>:
        <>
            <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            {
            array.map(item => {
                return(
                <div >
                <h3>{item.Title}</h3>
                <img src={item.Poster} />
                <Link to={`/item_id/${item.imdbID}`}>Learn More </Link>
                </div>
                )
            })
            }
            </div>
        </>
    )
}

export default List