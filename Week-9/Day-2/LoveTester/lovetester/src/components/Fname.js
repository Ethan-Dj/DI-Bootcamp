import { useDispatch } from "react-redux"
import { sendFirst } from "../actions/action"
import { connect } from "react-redux"

const Fname = (props) => {
    const dispatch = useDispatch()

    return(
        <>
        <input type="text" placeholder="Enter First Name" onChange={(e) => {
            dispatch(sendFirst(e.target.value))
        }}/>
        </>
    )
}

export default connect()(Fname)