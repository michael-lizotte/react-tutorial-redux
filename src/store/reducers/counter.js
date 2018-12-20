import * as actions from '../actions/index';

const init = {
    counter: 0
}
/**
 * It's also a good practice to separate this switch
 * into an other file that returns the new state
 * 
 * Therefore, this switch only needs to call those functions
 * to update the state and return it
 */
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