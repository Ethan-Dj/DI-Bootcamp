
const initState = {
    allTransactions : [],
    changeing: {},
    users: []
}

export const reducer = (state=initState, action={}) => {
    switch (action.type){
        case 'USERS':
            return {...state, users: action.payload}
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