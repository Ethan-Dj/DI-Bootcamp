import { combineReducers } from "redux"

const films = [
    {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
    {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
    {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
    {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
    {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
]

const initState = {
    allFilms : films,
    currentFilmIndex : "",
    currentFilm: {}

}

// const reducer = (state = initState, action = {}) =>{
//     switch (action.type){
//         case "TITLE":
//             return {...state, currentFilmIndex: action.payload, currentFilm: films[action.payload]}
//         default:
//             return {...state}
//         }

// }

const movie_reducer = (state = initState, action = {}) =>{
    return {...state}
}

const detail_reducer = (state = initState, action = {}) =>{
    switch (action.type){
        case "TITLE":
            console.log(action.payload)
            const current = state.allFilms[action.payload]
            return {...state, currentFilmIndex: action.payload, currentFilm: {...current}}
            default:
            return {...state}
        }

}

const root_reducer = combineReducers({
    movie_reducer, 
    detail_reducer
})

export default root_reducer