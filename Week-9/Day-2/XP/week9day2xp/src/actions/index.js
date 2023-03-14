
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

// export const getUsers = (arr) => {
//     return {
//         type: "USERS",
//         payload: arr
//     }
// }

export const getUsers = () => (dispatch, getState) => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // setUsers(data)
        dispatch({
            type: "USERS",
            payload: data
        })
    })
}
