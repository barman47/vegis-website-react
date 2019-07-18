import { HIDE_MODAL, SHOW_MODAL } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case HIDE_MODAL:
            return action.payload;

        case SHOW_MODAL:
            return action.payload;

        default:
            return state;
    }
};