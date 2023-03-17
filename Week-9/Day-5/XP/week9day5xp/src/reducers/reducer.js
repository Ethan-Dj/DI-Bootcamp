
const initState = {
    list: [
        {id: '1', title: 'A Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '2', title: 'B Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '3', title: 'C Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ],
    current: {}
}

export const reducer = (state=initState, action = {}) => {
    switch(action.type){
        case "CHANGE":
            return {...state, current: action.payload}
            case "REMOVE":
                const arr = [...state.list]
                arr.splice(action.payload, 1)
                console.log(arr)
                return {...state, list: arr}
        default:
            return {...state}
    }
}