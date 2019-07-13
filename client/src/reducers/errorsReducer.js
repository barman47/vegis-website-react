import { GET_ERRORS, USER_EXISTS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;

        case USER_EXISTS:
            return action.payload;

        default:
            return state;
    }
};