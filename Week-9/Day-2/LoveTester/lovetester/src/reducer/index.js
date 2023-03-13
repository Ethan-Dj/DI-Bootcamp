const initState = {
    fname: "biil",
    sname: "smit",
    result: {}
}

const reducer = (state=initState, action = {}) => {
    switch (action.type){
        case "FNAME":
            return {...state, fname: action.payload}
        case "SNAME":
            return {...state, sname: action.payload}
        case "RESULT":
            return {...state, result: {...action.payload}}
        default:
            return {...state}
    }
}

export default reducer