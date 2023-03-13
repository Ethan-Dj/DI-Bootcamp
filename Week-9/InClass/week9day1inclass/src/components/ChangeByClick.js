import {switchProps} from '../redux/actions'
import {connect} from 'react-redux'

const ChangeByClick = (props) => {
    return(
        <>
        <button onClick={props.switch}> Change one to two</button>
        {/* we can dispatch from here
        props.dispatch(switch())

        even do props.dispatch({type: 'TWO_TO_ONE})
        goes straight to reducer, no action

        and then () would be empty as below
        export default connect()(ChangeByClick)
        */}
        
        {/* just props.switch, there is no
        this here!!!! */}
        </>
    )
}

const MapDispatchToProps = (dispatch) => {
 return {
    switch: () => dispatch(switchProps())
 }
}

export default connect(null, MapDispatchToProps)(ChangeByClick)
