import { useSelector, useDispatch } from "react-redux"
import { connect } from "react-redux"
import { change,total } from "../actions"

import { useEffect, useState } from "react";

const Display = (props) => {
    const uploaded = useSelector(state => state.allTransactions)
    const dispatch = useDispatch()

    const [key, setKey] = useState(0);

    useEffect(() => {
        console.log(uploaded)
        setKey(prevKey => prevKey + 1);
        console.log("FUCKS")
      }, [uploaded]);

    return(
        <>
        <h1>Transactions</h1>
        <div key= {key}>
        {console.log(uploaded)}
        {uploaded.map((item,index) => {
            return(
                <>
                <div key = {key}>
                <h2>Transaction: {index+1}</h2>
                <h3>{item.accNum}</h3>
                <h3>{item.fsc}</h3>
                <h3>{item.name}</h3>
                <h3>{item.amount}</h3>
                <button onClick={() => dispatch(change(item))}>update</button>
                <button onClick = {() => {
                    uploaded.splice(index,1)
                    dispatch(total(uploaded))
                }}>Delete</button>
                <hr></hr>
                </div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default Display

