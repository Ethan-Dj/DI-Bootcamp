
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToFav } from '../reducers/actions'

const Results = (props) => {
    const data = useSelector(state => state.currentWeatherLocation)
    const dispatch = useDispatch()

    const favs = (e) => {
        e.preventDefault()
        dispatch(addToFav(data[0]))
    }

    return(
        <>
        {data.length == 0? null : 
        <div>
            <div>            
                <h3>City: {data[0]}</h3>
                <button onClick={(e) => favs(e)}>Add to Favourites</button>
            </div>
            <h1>It is currently {data[1][0].value} degrees!</h1>
            <div style= {{display:"flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                {data[1].map(item => {
                    return(
                        <>
                        <div style={{border:"solid 2px blue", 
                            height:"100px", 
                            width:"100px",
                            margin:"10px"}}>
                            <h4>Date: {item.date.slice(5,10)}</h4>
                            <h4>Temp: {item.value}</h4>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        }
        </>
    )
}

export default Results