
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

const Searched = (props) => {
    const search = useSelector(state => state.search)
    const [array, updateArray] = useState([])

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${search}`,{
            headers: {
                Authorization: "X8gbUOJ8HrCNN6ZaaYwWSsIYT3pTNKLn0CNWEaYGUnUd8VvJ2yhJ2Bri"
            }
            })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                if (data.status !== 400){
                    updateArray(data.photos)
                }
                
            })
    },[search])
    
    return(
        <>
    <div>
    <h1>{search}</h1>
    { array.length == 0? null :
    array.map(item => {
        return (
        <div key={item.id}>
            <img src={item.src.original} style={{width:"100px"}}/>
            {console.log(item)}
        </div>
        )
    })
    }
    </div>
        </>
    )
}

export default Searched