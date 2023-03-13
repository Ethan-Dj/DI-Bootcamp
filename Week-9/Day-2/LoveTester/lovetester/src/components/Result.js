import { useSelector } from "react-redux"
import { connect } from "react-redux"

const Result = (props) => {
    const fname = useSelector(state => state.fname)
    const sname = useSelector(state => state.sname)
    const result = useSelector(state => state.result)

    console.log(fname,'+', sname)
    return(
        <>
        <h1>Good Match Percentage: {result.percentage}</h1>
        </>
    )
}
export default connect()(Result)