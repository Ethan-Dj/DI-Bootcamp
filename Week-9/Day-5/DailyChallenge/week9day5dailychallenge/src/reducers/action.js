
export const search = (value) => {
    return {
        type: "SEARCH",
        payload: value
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}