const initState = {
    property_one: 'text one from store',
    property_two: 'this is the second one'
}

// export const reducer = (state = initState, action = {}) => {
//     // connect to react-redux with 
//     return {...state}
// }

export const reducer = (state = initState, action = {}) => {
    switch (action.type){
        case 'PROP_ONE':
            return {...state, property_one: action.payload}
        case 'PROP_TWO':
            return{...state, property_one: "this is now changed"}
        default:
            return {...state}
    }
}