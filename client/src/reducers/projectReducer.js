import { ADD_PROJECT } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            return action.payload;

        default:
            return state;
    }
};