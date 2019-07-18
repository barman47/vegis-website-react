import { APPLICATION_SUCCESS, CLEAR_STUDENT, FOUND_STUDENT, ACTIVATED_STUDENT, STUDENT_NOT_FOUND } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case APPLICATION_SUCCESS:
            return action.payload;

        case CLEAR_STUDENT:
            return action.payload;

        case FOUND_STUDENT:
            return action.payload;

        case STUDENT_NOT_FOUND:
            return action.payload

        case ACTIVATED_STUDENT:
            return action.payload;

        default:
            return state;
    }
};