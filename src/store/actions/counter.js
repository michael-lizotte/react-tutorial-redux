import * as actions from './actions';

export const increment = () => {
    return {
        type: actions.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actions.DECREMENT
    };
};

export const add = (_value) => {
    return {
        type: actions.ADD,
        value: _value
    };
};

export const sub = (_value) => {
    return {
        type: actions.SUB,
        value: _value
    };
};