export default store => next => action => {

    if(action.payload && typeof action.payload.then === 'function'){
        action.payload.then(resp => {
            const newAction = { ...action, payload: resp }
            store.dispatch(newAction)
        });
        return action.payload;
    }
    return next(action);
}

