const initState = {
    age: 0
}

export const reducer = (state=initState, action={}) => {
    switch(action.type){
        case "ADD":
            return {...state, age: state.age + 1}
        case "MINUS":
            return {...state, age: state.age - 1}
        default:
            return {...state}
    }
}