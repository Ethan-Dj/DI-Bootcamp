
const initState = {
    search : ""
}

export const reducer = (state=initState, action = {}) => {
    switch (action.type){
        case "SENDSEARCH":
            return {...state, search: action.payload}
        default:
            return {...state}
    }
}