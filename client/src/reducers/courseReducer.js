import { SET_COURSE, CLEAR_COURSE } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_COURSE:
            return action.payload;

        case CLEAR_COURSE:
            return action.payload;

        default:
            return state;
    }
};