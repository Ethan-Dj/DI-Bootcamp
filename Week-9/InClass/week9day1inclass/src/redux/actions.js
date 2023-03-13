export const changePropOne = (value) => {
    // autp retuned to reduced with action ={}
    return {
        type: 'PROP_ONE',
        payload: value
    }
}

//make sure that if no val being sent, that 
// nothing is passed in the brackets 
export const switchProps = () => {
    return {
        type: 'PROP_TWO'
    }
}