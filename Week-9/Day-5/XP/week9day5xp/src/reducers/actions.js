
export const change = (value) => {
    return {
        type: "CHANGE",
        payload: value
    }
}

export const remove = (value) => {
    return {
        type: "REMOVE",
        payload: value
    }
}