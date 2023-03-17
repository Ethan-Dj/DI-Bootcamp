export const update = (value) => {
    return {
        type: "UPDATE",
        payload: value
    }
}

export const addToFav = (value) => {
    return { 
        type: "ADDTOFAV",
        payload: value
    }
}