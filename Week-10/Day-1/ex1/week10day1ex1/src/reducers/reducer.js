const initState ={
    currentWeatherLocation: [],
    favourites: []
}

export const reducer = (state=initState, action = {}) => {
    switch (action.type){
        case "UPDATE":
            return {...state, currentWeatherLocation: action.payload}
        case "ADDTOFAV":
            console.log(action.payload)
            return{...state, favourites: [...state.favourites, action.payload]}
        default:
            return {...state}
    }
}