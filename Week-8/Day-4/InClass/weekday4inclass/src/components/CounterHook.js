

import { useState, useEffect } from "react"

const CounterHook = (props) => {
    // const [state, setState] = useState(0)

    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('')

    useEffect(() =>{
        setCount(count+1) // email changed, count increased by 1
    },[email])
    // with [email] called whenerver email changed


    // is called when component initialised and updated
    // same as didmount and did updates

    // const [name, setName] = useState('')
    // sets count=0 
    // we can do setCount(10) to set cont to 10
    // can be for any datatype

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    .catch(err => {
      console.log(err);
    })
    },[]) // only runs once as [] is empty



    return(
        <>
            Count: {count}
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/> {email}
            <button onClick={()=>setCount(count+1)}>Add</button>
            {
                users.map(item => {
                    return (
                        <p>{item.name}</p>
                    )
                })
            }
        </>
    )
}
// the above code automatically updates 

export default CounterHook