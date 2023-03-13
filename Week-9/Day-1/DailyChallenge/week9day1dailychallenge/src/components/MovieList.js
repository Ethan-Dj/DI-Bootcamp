import { connect } from "react-redux"
import { sendTitle } from "../actions/index"
import { useSelector, useDispatch } from "react-redux"


const MovieList = (props) => {
  const list = useSelector(state => state.movie_reducer.movieList)
  const detail = useSelector(state => state.detail_reducer.detail)
  // this allows us to access both reduces 
  //and the info on them without having to make a func 
  // for them 
  
  const dispatch = useDispatch()
  return(
    <>
    {
      props.films.map((item, index) => {
        console.log(list)
        return(
            <>
          <h3>{item.title}</h3>
          <button onClick={() => dispatch(sendTitle(index))}>Info</button>
          {/* dispatch allows us to access an action without making func */}
          </>
            )
        })
    }
    </>
    )

}

const mapStateToProps = (state) => {
    return {
      films: state.movie_reducer.allFilms,
      index: state.movie_reducer.currentFilmIndex
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         sendData: (data) => dispatch(sendTitle(data))
//     }
// }

export default connect (mapStateToProps)(MovieList)