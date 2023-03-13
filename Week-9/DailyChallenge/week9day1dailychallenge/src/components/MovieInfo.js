import { connect } from "react-redux"

const Info = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <h2>{props.data}</h2>
        <h3>{props.rating}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.currentFilm.title,
        data: state.currentFilm.releaseDate,
        rating: state.currentFilm.rating
    }
}

export default connect(mapStateToProps)(Info)

