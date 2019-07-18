import { GET_ERRORS, STUDENT_NOT_FOUND, USER_EXISTS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;

        case CLEAR_ERRORS:
            return action.payload

        case USER_EXISTS:
            return action.payload;

        case STUDENT_NOT_FOUND:
            return action.payload

        default:
            return state;
    }
};