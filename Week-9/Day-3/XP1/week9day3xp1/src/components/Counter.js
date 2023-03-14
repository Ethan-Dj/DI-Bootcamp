
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement,addIfOdd, asyncAdd } from '../actions'

const Counter = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    console.log(counter)
    return(<>
    <button onClick={() => dispatch(increment())}>+1</button>
    <h1>{counter}</h1>
    <button onClick={() => dispatch(decrement())}>-1</button>
    <button onClick={() =>{
        if (counter%2 != 0){
            dispatch(addIfOdd())
        } 
    } }>Add if Odd</button>

    <button onClick={() => dispatch(asyncAdd())}>Async Adding</button>
    
    </>)
}

export default Counter