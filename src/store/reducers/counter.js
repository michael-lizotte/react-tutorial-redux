import * as actions from '../actions/index';

const init = {
    counter: 0
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case actions.INCREMENT: 
            return {
                ...state,
                counter: state.counter + 1
            }
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actions.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actions.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        
    }
    return state;
};

export default reducer;