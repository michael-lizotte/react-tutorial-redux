import * as actions from './actions';

export const storeResultSync = (res) => {
    return {
        type: actions.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    // Redux-Thunk intercepts the action in a middleware
    // It blocks it and dispatch the synchronous action once
    // dispatch is called

    /**
     * Can also pass the current state, in case it needs to be
     * updated before the action is dispatched
     */
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(storeResultSync(res))
        }, 2000);
    };
};

export const deleteResultSync = (_id) => {
    return {
        type: actions.DELETE_RESULT,
        id: _id
    }
}

export const deleteResult = (_id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(deleteResultSync(_id));
        }, 2000);
    }
};