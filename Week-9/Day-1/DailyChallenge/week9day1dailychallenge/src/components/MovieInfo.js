import { connect } from "react-redux"


const MovieInfo = (props) => {
    return (
        <>
        <h1>hhhhh</h1>
        <h1>{props.title}</h1>
        <h2>{props.data}</h2>
        <h3>{props.rating}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.detail_reducer.currentFilm.title,
        data: state.detail_reducer.currentFilm.releaseDate,
        rating: state.detail_reducer.currentFilm.rating
    }
}

export default connect(mapStateToProps)(MovieInfo)

