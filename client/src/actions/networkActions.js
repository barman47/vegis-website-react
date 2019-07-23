import { NO_NETWORK, YES_NETWORK } from './types';

export const handleNetworkChange = (networkState) => (dispatch) => {
    switch (networkState) {
        case 'online':
            dispatch({
                type: YES_NETWORK,
                payload: true
            });
            break;

        case 'offline':
            dispatch({
                type: NO_NETWORK,
                payload: false
            });
            break;

        default:
            break;
    }
};