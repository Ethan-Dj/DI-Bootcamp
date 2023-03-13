const initState = {
    count : 0
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type){
        case "ADD_ONE":
            return {... state, count: state.count+1}
        case "MINUS_ONE":
            return {... state, count: state.count-1}
        default: 
            return { ... state }
        }
    
}


  