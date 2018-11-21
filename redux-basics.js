const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    nbr: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            nbr: state.nbr+1
        }
    } else if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            nbr: state.nbr+action.payload.value
        }
    }
    return state; 
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: {value: 10}});
