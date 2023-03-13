import {connect} from 'react-redux'



const Child = (props) => {
    return(
        <>
        <h1>Child Elem</h1>
        <h2>{props.b}</h2>
        <h2>{props.c}</h2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        b: state.property_one,
        c: state.property_two
    }
}

export default connect(mapStateToProps)(Child)
