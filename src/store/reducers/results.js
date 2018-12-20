import * as actions from '../actions/actions';

const init = {
    results: []
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                // Array.push modifies the array directly. Concat returns a new array, so it is immutable
                // ****ALWAYS USE COPIES OF THE STATE, NOT THE OBJECT****
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actions.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1); 

            const ar = state.results.filter(result => result.id !== action.id);

            return {
                ...state,
                results: ar
            }
    }

    return state;
}

export default reducer;