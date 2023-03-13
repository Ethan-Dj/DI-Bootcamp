export const sendFirst = (value) => {
    return {
        type:"FNAME",
        payload: value
    }
}

export const sendSecond = (value) => {
    return {
        type:"SNAME",
        payload: value
    }
}

export const result = (value) => {
    return {
        type: "RESULT",
        payload: value
    }
}

