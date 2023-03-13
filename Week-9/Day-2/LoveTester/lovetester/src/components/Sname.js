import { useDispatch } from "react-redux"
import { sendSecond } from "../actions/action"
import { connect } from "react-redux"

const Sname = (props) => {
    const dispatch = useDispatch()

    return(
        <>
        <input type="text" placeholder="Enter Second Name" onChange={(e) => {
            dispatch(sendSecond(e.target.value))
        }}/>
        </>
    )
}

export default connect()(Sname)