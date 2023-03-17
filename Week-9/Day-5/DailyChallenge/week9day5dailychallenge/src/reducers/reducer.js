
const initState = {
    search:"",
    loading: false
}

export const reducer = (state=initState, action={}) => {
    switch (action.type){
        case "SEARCH":
            return {...state, search: action.payload}
        case "LOADING":
            if(state.loading == false){
                return {...state, loading: false}
            } else {
                return {...state, loading: true}
            }

        default:
            return {...state}
    }
}