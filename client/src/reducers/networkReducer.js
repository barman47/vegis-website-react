import { NO_NETWORK, YES_NETWORK } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case NO_NETWORK:
            return action.payload

        case YES_NETWORK:
            return action.payload

        default:
            return state;
    }
};