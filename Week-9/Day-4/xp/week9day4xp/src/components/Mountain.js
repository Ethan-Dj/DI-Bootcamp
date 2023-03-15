
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

const Mountain = (props) => {
    const [array, updateArray] = useState([])

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=mountain`,{
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
    },[])
    
    return(
        <>
    <div>
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

export default Mountain