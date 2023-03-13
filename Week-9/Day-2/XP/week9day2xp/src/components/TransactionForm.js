import React from "react";
import { connect } from "react-redux";
import { update, empty } from "../actions/index";
import { useSelector, useDispatch } from "react-redux"
import { change,total } from "../actions"
import { useEffect, useState } from "react";



const TransactionForm = (props) => {
    // const current = 
    const dispatch = useDispatch()
    const fillFrom = useSelector(state => state.changeing)
    const uploaded = useSelector(state => state.allTransactions)

    const [key, setKey] = useState(0);

    useEffect(() => {
      setKey(prevKey => prevKey + 1); // Update the key value to re-mount the component
    }, [fillFrom]);

    return(
        <>
        <form key = {key}
        onSubmit={(e) => {
            e.preventDefault()
            const obj = {
                accNum: e.target.accNum.value,
                fsc: e.target.fsc.value,
                name: e.target.name.value,
                amount: e.target.amount.value, 
                id: `${new Date()}`
            }
            if (JSON.stringify(fillFrom) === JSON.stringify({})){
                dispatch(update(obj))
                dispatch(change({}))
            } else {
                const index = uploaded.findIndex(obj => obj.id === fillFrom.id)
                uploaded[index] = {
                    accNum: e.target.accNum.value,
                    fsc: e.target.fsc.value,
                    name: e.target.name.value,
                    amount: e.target.amount.value,
                    id: fillFrom.id
                }
                dispatch(total(uploaded))
                dispatch(change({}))
            }


            e.target.accNum.value = ""
            e.target.fsc.value = ""
            e.target.name.value = ""
            e.target.amount.value = ""
            }}
            >
            <input type="text" placeholder="Account Number" name="accNum" defaultValue={fillFrom.accNum}/>
            <input type="text" placeholder="FSC" name="fsc" defaultValue={fillFrom.fsc}/>
            <input type="text" placeholder="Name" name="name" defaultValue={fillFrom.name}/>
            <input type="text" placeholder="Amount" name="amount" defaultValue={fillFrom.amount}/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}


// export default connect()(TransactionForm)

export default TransactionForm