
const initState = {
    allTransactions : [],
    changeing: {}
}

export const reducer = (state=initState, action={}) => {
    switch (action.type){
        case "UPDATE":
            return {...state, allTransactions: [...state.allTransactions, action.payload]}
        case "CHANGE":
            return {...state, changeing: action.payload}
        case "TOTAL":
            return {...state, allTransactions: [...action.payload]}
        default:
            return {...state}
    }
}