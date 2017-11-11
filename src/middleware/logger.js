export default store  => next => action => {
    console.log('action: ', action);
    const result = next(action);
    console.log('Next State: ', store.getState());
    return result;
}