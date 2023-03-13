import { connect } from "react-redux"
import { sendTitle } from "../actions/index"

const List = (props) => {
    return(
    <>
    {
      props.films.map((item, index) => {
        return(
            <>
          <h3>{item.title}</h3>
          <button onClick={() => props.sendData(index)}>Info</button>
          <h3></h3>
          </>
            )
        })
    }
    </>
    )

}

const mapStateToProps = (state) => {
    return {
      films: state.allFilms,
      index: state.currentFilmIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (data) => dispatch(sendTitle(data))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(List)