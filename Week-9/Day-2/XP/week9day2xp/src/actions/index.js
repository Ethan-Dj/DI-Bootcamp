
export const update = (value) => {
    return {
        type: "UPDATE",
        payload: value
    }
}

export const change = (value) => {
    return {
        type: "CHANGE",
        payload: value
    }
}

export const total = (value) => {
    return {
        type: "TOTAL",
        payload: value

    }
}