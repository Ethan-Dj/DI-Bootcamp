export const logger = (store) => (next) => (action) => {
    console.log(store.getState())
    console.log(`Redux Log:`, action)
    next(action);
    console.log(store.getState())
}