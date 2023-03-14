export const my_logger = (store) => (next) => (action) => {
    // this is closures, a function that calls a function etc
    // console.log(store)
    // console.log(action)
    console.log('prev state=>', store.getState())
    console.log('action=>', action)
    next(action) // without, we don't go to the next action
    console.log('next state=>', store.getState())
}