export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addIfOdd = () => {
    return {
        type: 'ADDIFODD'
    }
}

export const asyncAdd = () => (dispatch) => {
    setTimeout(() => {
        dispatch ({
            type: "ASYNCADD"
        })
    },1000)
}

